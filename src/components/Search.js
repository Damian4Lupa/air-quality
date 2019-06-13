import React, { Component } from 'react';
import Input from './Input'

class Search extends Component {

    state = {
        selectedCountry: '',
        selectedCountryCode: '',
        informationAboutPollution: [],

        show_informationAboutPollution: false,
        dataComplite: false,

    }

    handleInputValue = (inputValue, selectedCountryCode) => {
        this.setState({
            selectedCountry: inputValue,
            selectedCountryCode
        })
    }

    downloadInformationAboutPollution = () => {

        const country = this.state.selectedCountryCode

        const API = `https://api.openaq.org/v1/measurements?country=${country}`

        fetch(API)
            .then(response => {

                if (response.ok) {

                    return response
                }
                throw Error(response.status)

            })
            .catch(error => alert(`\nEasy, it's just a error \n${error} \nRefresh the page `))
            .then(response => response.json())
            .then(data => {

                let informationAboutPollution = data.results

                this.setState({
                    informationAboutPollution,
                    dataComplite: true
                })
            })

        setTimeout(() => {
            this.topPollution()
        }, 1000)
    }

    topPollution = () => {

        let data = this.state.informationAboutPollution

        let informationAboutPollution = [...data]

        let topCityPollutionSo2 = informationAboutPollution.filter(item => item.parameter === "so2").sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 30).map(item => item.city)


        // let topCityPollutionNo2 = informationAboutPollution.filter(item => item.parameter === "no2").sort(function (a, b) {
        //     return b.value - a.value;
        // }).slice(0, 15).map(item => item.city)

        // let topCityPollution = topCityPollutionSo2.filter(item => topCityPollutionNo2.includes(item))

        // let topCityPollution = topCityPollutionSo2.filter(value => -1 !== topCityPollutionNo2.indexOf(value))

        // let topCityPollution = topCityPollutionSo2.filter(x => topCityPollutionNo2.indexOf(x) > -1)

        let intersection = topCityPollutionSo2.filter(x => topCityPollutionSo2.includes(x)).slice(0, 10)




        console.log(informationAboutPollution)
        // console.log(intersection)

    }





    render() {

        const { informationAboutPollution, dataComplite } = this.state

        let downloadError = false
        if (informationAboutPollution.length === 0 && dataComplite) {
            downloadError = true
        }

        return (

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <h2 className="mt-5 mb-4">Check the air quality</h2>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-5">

                        <Input onHandleInputValue={this.handleInputValue} />

                    </div>



                    <div className="col-5">

                        <button
                            type="button"
                            class="btn btn-outline-primary btn-lg btn-block mt-3"
                            onClick={this.downloadInformationAboutPollution}
                        >Search
                            </button>
                    </div>
                </div>

                <div className="row justify-content-around">


                    {downloadError && <h5 className="mt-5">We have a server problem, we could not get the value, please try again</h5>}


                </div>


            </div>


        );
    }
}

export default Search;