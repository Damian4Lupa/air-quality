import React, { Component } from 'react';
import SearchCountry from './SearchCountry'
const countries = require('../assets/Countries')

class Input extends Component {

    state = {
        inputValue: '',
        selectedCountry: [],
        selectedCountryCode: '',
        inputSize: 0
    }

    handleChangeInput = event => {
        let inputValue = event.target.value.toUpperCase()

        this.setState({
            inputValue
        })
        this.props.onHandleInputValue(inputValue)
    }

    handleSelectCountry = event => {
        let inputValue = event.target.value
        let selectedCountryCode = event.target.id

        this.setState({
            inputValue,
            selectedCountryCode
        })

        this.props.onHandleInputValue(inputValue, selectedCountryCode)
    }

    componentDidUpdate(previousProps, previousState) {
        let inputValue = this.state.inputValue
        let data = [...countries.countries]
        let selectedCountry = ''
        let inputSize = 0

        if (previousState.inputValue !== this.state.inputValue) {
            selectedCountry = data.filter(item => item.name.toUpperCase().includes(inputValue))

            if (selectedCountry.length === 1) {
                inputSize = 2
            } else {
                inputSize = selectedCountry.length
            }

            this.setState({
                selectedCountry,
                inputSize
            })

            // console.log(selectedCountry, inputSize)
        }

        if (previousState.inputValue.length > 1 && this.state.inputValue === '') {
            this.setState({
                inputValue: '',
                selectedCountry: [],
                selectedCountryCode: '',
                inputSize: 0
            })

        }


    }


    render() {

        const { selectedCountry, inputSize, inputValue } = this.state

        let searchCountry = selectedCountry.map(item => (
            <SearchCountry
                key={item.id}
                id={item.code}
                name={item.name}
            />
        ))

        let showSelect = false

        if (selectedCountry.length >= 1) {
            showSelect = true
        } if (inputValue === '') {
            showSelect = false
        }


        return (
            <>
                <input
                    className="form-control form-control-lg mt-3 text-center"
                    type="text"
                    placeholder="enter the name of the country"
                    value={inputValue}
                    onChange={this.handleChangeInput}
                />

                <div className="form-group mt-3">
                    {showSelect && <select
                        className="custom-select custom-select-lg text-center"
                        size={inputSize}
                        onClick={this.handleSelectCountry}
                    >
                        {searchCountry}

                    </select>}

                </div>
            </>

        );
    }
}

export default Input;