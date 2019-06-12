import React, { Component } from 'react';

class Search extends Component {
    state = {}
    render() {
        return (

            <div className="container mt-5 mb-5">
                <div className="row justify-content-md-center">
                    <div className="col-5">

                        <input
                            class="form-control form-control-lg mt-3"
                            type="text"
                            placeholder="enter the name of the country"
                        />

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