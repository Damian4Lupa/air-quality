import React, { Component } from 'react';
import Input from './Input'
import ListOfTheCityPollution from './ListOfTheCityPollution'
import background from '../images/background.png'

class Search extends Component {

    state = {
        selectedCountry: '',
        selectedCountryCode: '',
        informationAboutPollution: [],
        cityPollutionArray: [],
        topCityPollutionList: [],
        tableSize: 0,
        groupOfCountries: '',

        show_listOfTheCityPollution: false,
        show_LoadingDataButton: false,
        show_searchButton: true,
        buttonClicked: false,
        downloadedData: false,
        dataPollutionReady: false,
        dataCityReady: false

    }

    // componentDidMount() {

    //     let InputValue = localStorage.getItem('InputValue')
    //     let selectedCountryCode = localStorage.getItem('selectedCountryCode')

    //     this.setState({
    //         selectedCountry: InputValue,
    //         selectedCountryCode
    //     })
    // }

    componentDidUpdate(previousProps, previousState) {

        const { informationAboutPollution, dataPollutionReady, downloadedData, selectedCountryCode } = this.state

        if (previousState.selectedCountry !== '' && this.state.selectedCountry === '') {
            this.resetState()
        }

        if (informationAboutPollution.length > 1) {
            this.createCityPollutionArray()
        }

        if (downloadedData && dataPollutionReady) {
            setTimeout(() => {

                this.setState({
                    show_listOfTheCityPollution: true
                })
            }, 100)
        }

        if (dataPollutionReady) {

            setTimeout(() => {
                this.changeButtonStatus2()
                this.setState({
                    dataPollutionReady: false,
                    buttonClicked: false,
                })
            }, 100)
        }


        if (selectedCountryCode) {

            const country = this.state.selectedCountryCode
            let groupOfCountries = ''
            let tableSize = 0

            if (country === "DE" || country === "ES" || country === "FR" || country === "FI" || country === "IT" || country === "NL" || country === "NO" || country === "PL" || country === "TR" || country === "GB") {
                groupOfCountries = "A"
                tableSize = 10

            } else if (country === "AT" || country === "BE" || country === "HR" || country === "CZ" || country === "HU" || country === "IE" || country === "MK" || country === "PT" || country === "CH") {
                groupOfCountries = "B"
                tableSize = 5

            } else {
                tableSize = 1
            }

            this.setState({
                groupOfCountries,
                tableSize
            })

        }







    }

    handleInputValue = (inputValue, selectedCountryCode) => {

        // localStorage.setItem('inputValue', inputValue);
        // localStorage.setItem('selectedCountryCode', selectedCountryCode);

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
        let groupOfCountries = this.state.groupOfCountries
        let API = ``

        if (groupOfCountries === "A") {
            API = `https://api.openaq.org/v1/measurements?country=${country}&limit=1500`
           

        } else if (groupOfCountries === "B") {
            API = `https://api.openaq.org/v1/measurements?country=${country}&limit=500`
            

        } else {
            API = `https://api.openaq.org/v1/measurements?country=${country}`
            
        }

        fetch(API)
            .then(response => {

                if (response.ok) {

                    return response
                }
                throw Error(response.status)
            })
            .catch(error => alert(`\n Easy, it's just a error \n  Error number ${error} \n Refresh the page `))
            .then(response => response.json())
            .then(data => {

                let informationAboutPollution = data.results

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

    }

    handleButton = () => {

        this.buttonClicked()

        this.changeButtonStatus()

        this.downloadInformationAboutPollution()

    }


    render() {

        const { show_LoadingDataButton, show_searchButton, informationAboutPollution, buttonClicked, show_listOfTheCityPollution, tableSize } = this.state

        // let downloadError = false
        // if (buttonClicked && informationAboutPollution === []) {
        //     downloadError = true
        // }

        return (

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-10">
                        <h2 className="mt-5 mb-4">Check the air quality in Europe</h2>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-5">

                        <Input onHandleInputValue={this.handleInputValue} tableSize={tableSize} />

                    </div>


                    <div className="col-5">


                        {show_searchButton && <button
                            type="button"
                            className="btn btn-outline-light btn-lg btn-block mt-3"
                            onClick={this.handleButton}
                        >Search
                        </button>}



                        {show_LoadingDataButton && <button class="btn btn-outline-light btn-lg btn-block mt-3" type="button" disabled>
                            <span className="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>
                            <span> Loading data...</span>

                        </button>}



                    </div>
                </div>

                <div className="row justify-content-around">

                    {/* {downloadError && <h5 className="mt-5">We have a server problem, we could not get the value, please try again</h5>} */}

                </div>

                <div className="row mt-4">

                    {show_listOfTheCityPollution && <ListOfTheCityPollution data={this.state.cityPollutionArray} />}

                </div>


            </div>
        );
    }
}

export default Search;