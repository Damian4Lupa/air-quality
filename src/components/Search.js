import React, { Component } from 'react';
import Input from './Input'

class Search extends Component {

    state = {
        selectedCountry: '',
    }

    handleInputValue = inputValue => {
        this.setState({
            selectedCountry: inputValue
        })
    }


    render() {
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
                            class="btn btn-outline-primary btn-lg btn-block mt-3">Search</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default Search;