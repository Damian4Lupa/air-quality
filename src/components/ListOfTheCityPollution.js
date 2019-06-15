import React from 'react';
import '../layouts/table.css'

const ListOfTheCityPollution = (props) => {

    let cityPollutionArray = props.data

    console.log("przekazano do dziecka", cityPollutionArray)

    return (

        <div className="container mt-5">

            <div class="divTable table">
                <div class="divTableHeading">
                    <div class="divTableRow ">
                        <div class="divTableHead"></div>
                        <div class="divTableHead">description</div>
                        <div class="divTableHead">co</div>
                        <div class="divTableHead">no2</div>
                        <div class="divTableHead">so2</div>
                        <div class="divTableHead">o2</div>
                    </div>
                </div>
                <div class="divTableBody">
                    <div class="divTableRow ">
                        <div class="divTableCell">city name</div>
                        <div class="divTableCell">city description city description city description city descriptioncity descriptioncity descriptioncity descriptioncity descriptioncity descriptioncity descriptioncity description</div>
                        <div class="divTableCell">42,5</div>
                        <div class="divTableCell">22</div>
                        <div class="divTableCell">56,3</div>
                        <div class="divTableCell">14,6</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_2</div>
                        <div class="divTableCell">cell2_2</div>
                        <div class="divTableCell">cell3_2</div>
                        <div class="divTableCell">cell4_2</div>
                        <div class="divTableCell">cell5_2</div>
                        <div class="divTableCell">cell6_2</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_3</div>
                        <div class="divTableCell">cell2_3</div>
                        <div class="divTableCell">cell3_3</div>
                        <div class="divTableCell">cell4_3</div>
                        <div class="divTableCell">cell5_3</div>
                        <div class="divTableCell">cell6_3</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_4</div>
                        <div class="divTableCell">cell2_4</div>
                        <div class="divTableCell">cell3_4</div>
                        <div class="divTableCell">cell4_4</div>
                        <div class="divTableCell">cell5_4</div>
                        <div class="divTableCell">cell6_4</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_5</div>
                        <div class="divTableCell">cell2_5</div>
                        <div class="divTableCell">cell3_5</div>
                        <div class="divTableCell">cell4_5</div>
                        <div class="divTableCell">cell5_5</div>
                        <div class="divTableCell">cell6_5</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_6</div>
                        <div class="divTableCell">cell2_6</div>
                        <div class="divTableCell">cell3_6</div>
                        <div class="divTableCell">cell4_6</div>
                        <div class="divTableCell">cell5_6</div>
                        <div class="divTableCell">cell6_6</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_7</div>
                        <div class="divTableCell">cell2_7</div>
                        <div class="divTableCell">cell3_7</div>
                        <div class="divTableCell">cell4_7</div>
                        <div class="divTableCell">cell5_7</div>
                        <div class="divTableCell">cell6_7</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_8</div>
                        <div class="divTableCell">cell2_8</div>
                        <div class="divTableCell">cell3_8</div>
                        <div class="divTableCell">cell4_8</div>
                        <div class="divTableCell">cell5_8</div>
                        <div class="divTableCell">cell6_8</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_9</div>
                        <div class="divTableCell">cell2_9</div>
                        <div class="divTableCell">cell3_9</div>
                        <div class="divTableCell">cell4_9</div>
                        <div class="divTableCell">cell5_9</div>
                        <div class="divTableCell">cell6_9</div>
                    </div>
                    <div class="mb divTableRow">
                        <div class="divTableCell">cell1_10</div>
                        <div class="divTableCell">cell2_10</div>
                        <div class="divTableCell">cell3_10</div>
                        <div class="divTableCell">cell4_10</div>
                        <div class="divTableCell">cell5_10</div>
                        <div class="divTableCell">cell6_10</div>
                    </div>
                </div>
            </div>



        </div >





    );
}

export default ListOfTheCityPollution;