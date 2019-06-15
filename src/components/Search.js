import React, { Component } from 'react';
import Input from './Input'
import ListOfTheCityPollution from './ListOfTheCityPollution'

class Search extends Component {

    state = {
        selectedCountry: '',
        selectedCountryCode: '',
        informationAboutPollution: [],
        cityPollutionArray: [],
        topCityPollutionList: [],

        show_listOfTheCityPollution: true,
        show_LoadingDataButton: false,
        show_searchButton: true,
        buttonClicked: false,
        downloadedData: false,
        dataPollutionReady: false,
        dataCityReady: false

    }

    componentDidUpdate(previousProps, previousState) {

        const { informationAboutPollution, dataPollutionReady, downloadedData } = this.state

        if (previousState.selectedCountry !== '' && this.state.selectedCountry === '') {
            this.resetState()
        }

        if (informationAboutPollution.length > 1) {
            this.createCityPollutionArray()
        }

        if (downloadedData && dataPollutionReady) {
            setTimeout(() => {
                console.log("show_listOfTheCityPollution")
                this.setState({
                    show_listOfTheCityPollution: true
                })
            }, 100)
        }

        //przekazanie wartości do dziecka
        if (dataPollutionReady) {

            setTimeout(() => {
                this.changeButtonStatus2()
                this.setState({
                    dataPollutionReady: false,
                    buttonClicked: false,
                })
            }, 100)

        }


    }

    handleInputValue = (inputValue, selectedCountryCode) => {
        this.setState({
            selectedCountry: inputValue,
            selectedCountryCode
        })
    }

    changeButtonStatus = () => {
        this.setState({
            show_LoadingDataButton: true,
            show_searchButton: false,
        })
    }

    changeButtonStatus2 = () => {
        this.setState({
            show_LoadingDataButton: false,
            show_searchButton: true,
        })
    }

    buttonClicked = () => {
        this.setState({
            buttonClicked: true
        })
    }

    resetState = () => {
        this.setState({
            selectedCountry: '',
            selectedCountryCode: '',
            informationAboutPollution: [],
            cityPollutionArray: [],

            show_informationAboutPollution: false,
            show_LoadingDataButton: false,
            show_searchButton: true,
            buttonClicked: false,
            downloadedData: false,
        })
    }

    downloadInformationAboutPollution = () => {

        const country = this.state.selectedCountryCode

        const API = `https://api.openaq.org/v1/measurements?country=${country}`

        fetch(API)
            .then(response => {

                if (response.ok) {
                    // console.log(`kod odpowiedzi z serwera ${response.status}`)
                    return response
                }
                throw Error(response.status)
            })
            .catch(error => alert(`\nEasy, it's just a error \nError number ${error} \nRefresh the page `))
            .then(response => response.json())
            .then(data => {

                let informationAboutPollution = data.results

                // console.log("fetch", informationAboutPollution)

                if (informationAboutPollution.length > 1) {
                    this.setState({
                        informationAboutPollution,
                        downloadedData: true
                    })
                }
            })
    }

    createCityPollutionArray = () => {

        let data = this.state.informationAboutPollution

        let informationAboutPollution = [...data]
        let topCityPollutionList = []
        let cityPollutionArray = []

        if (informationAboutPollution) {
            topCityPollutionList = informationAboutPollution.filter(item => item.parameter === "so2").sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 10).map(item => item.city)
        } else if (topCityPollutionList === []) {
            topCityPollutionList = informationAboutPollution.filter(item => item.parameter === "co").sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 10).map(item => item.city)
        }

        for (let i = 0; i < 10; i++) {
            let result = informationAboutPollution.filter(item => item.city === topCityPollutionList[i])
            cityPollutionArray.push(result)
        }

        setTimeout(() => {
            if (this.state.cityPollutionArray.length === 0) {
                this.setState({
                    cityPollutionArray,
                    topCityPollutionList,
                    dataPollutionReady: true
                })
            }
        }, 2000)

        // console.log("przekazano 100", informationAboutPollution)
        // console.log("top city", topCityPollutionList)
        console.log("wynik końcowy", cityPollutionArray)

    }

    downloadInformationAboutCity = () => {

        let data = this.state.topCityPollutionList

        let topCityPollutionList = [...data]



    }

    handleButton = () => {

        console.log("wciśnięto button")

        this.buttonClicked()

        this.changeButtonStatus()

        // setTimeout(() => {
        //     this.changeButtonStatus2()
        // }, 2000)

        this.downloadInformationAboutPollution()

        // setTimeout(() => {
        //     this.createCityPollutionArray()
        // }, 2000)
    }


    render() {

        const { show_LoadingDataButton, show_searchButton, informationAboutPollution, buttonClicked, show_listOfTheCityPollution, cityPollutionArray } = this.state

        let downloadError = false
        if (buttonClicked && informationAboutPollution === []) {
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


                        {show_searchButton && <button
                            type="button"
                            className="btn btn-outline-primary btn-lg btn-block mt-3"
                            onClick={this.handleButton}
                        >Search
                        </button>}



                        {show_LoadingDataButton && <button class="btn btn-outline-primary btn-lg btn-block mt-3" type="button" disabled>
                            <span className="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>
                            <span> Loading data...</span>

                        </button>}



                    </div>
                </div>

                <div className="row justify-content-around">

                    {downloadError && <h5 className="mt-5">We have a server problem, we could not get the value, please try again</h5>}

                </div>

                <div className="row mbottom">

                    {show_listOfTheCityPollution && <ListOfTheCityPollution data={this.state.cityPollutionArray} />}

                </div>


            </div>


        );
    }
}

export default Search;