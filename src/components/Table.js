import React, { Component } from 'react';

class Table extends Component {

    changeColorSo2 = value => {
        let color = "";
        if (value > 125) {
            color = "red"
        } else if (value <= 125 && value >= 62) {
            color = "yellow"
        } else if (value < 62) {
            color = "green"
        }
        return color
    }

    changeColorNo2 = value => {
        let color = "";
        if (value > 40) {
            color = "red"
        } else if (value <= 40 && value >= 20) {
            color = "yellow"
        } else if (value < 20) {
            color = "green"
        }
        return color
    }

    changeColorPm25 = value => {
        let color = "";
        if (value > 20) {
            color = "red"
        } else if (value <= 20 && value >= 10) {
            color = "yellow"
        } else if (value < 10) {
            color = "green"
        }
        return color
    }

    changeColorPm10 = value => {
        let color = "";
        if (value > 40) {
            color = "red"
        } else if (value <= 40 && value >= 20) {
            color = "yellow"
        } else if (value < 20) {
            color = "green"
        }
        return color
    }

    changeColorO3 = value => {
        let color = "";
        if (value > 120) {
            color = "red"
        } else if (value <= 120 && value >= 60) {
            color = "yellow"
        } else if (value < 60) {
            color = "green"
        }
        return color
    }

    changeColorCo = value => {
        let color = "";
        if (value > 1000) {
            color = "red"
        } else if (value <= 1000 && value >= 500) {
            color = "yellow"
        } else if (value < 500) {
            color = "green"
        }
        return color
    }

    render() {

        let table = []

        let size = this.props.tableSize

        if (size === 1) {
            table = [
                ["-", "-", "-", "-", "-", "-", "-"]
            ]
        } else if (size === 5) {
            table = [
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"]
            ]
        } else {
            table = [
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
                ["-", "-", "-", "-", "-", "-", "-"],
            ]
        }

        let data = this.props.data

        for (let i = 0; i < data.length; i++) {

            let city = data[i][0].city
            table[i][0] = city

            for (let j = 0; j < data[i].length; j++) {

                let co = ''
                let no2 = ''
                let so2 = ''
                let o3 = ''
                let pm25 = ''
                let pm10 = ''

                if (data[i][j].parameter === 'so2') {
                    so2 = data[i][j].value.toFixed(2)
                    table[i][1] = so2
                }
                if (data[i][j].parameter === 'no2') {
                    no2 = data[i][j].value.toFixed(2)
                    table[i][2] = no2
                }
                if (data[i][j].parameter === 'pm25') {
                    pm25 = data[i][j].value.toFixed(2)
                    table[i][3] = pm25
                }
                if (data[i][j].parameter === 'pm10') {
                    pm10 = data[i][j].value.toFixed(2)
                    table[i][4] = pm10
                }
                if (data[i][j].parameter === 'o3') {
                    o3 = data[i][j].value.toFixed(2)
                    table[i][5] = o3
                }
                if (data[i][j].parameter === 'co') {
                    co = data[i][j].value.toFixed(2)
                    table[i][6] = co
                }
            }
        }

        const row = table.map((table) =>
            <tr>
                <td key={table[0]} scope="row" key={table[0][0]}>{table[0]}</td>
                <td className={this.changeColorSo2(table[1])}>{table[1]}</td>
                <td className={this.changeColorNo2(table[2])}>{table[2]}</td>
                <td className={this.changeColorPm25(table[3])}>{table[3]}</td>
                <td className={this.changeColorPm10(table[4])}>{table[4]}</td>
                <td className={this.changeColorO3(table[5])}>{table[5]}</td>
                <td className={this.changeColorCo(table[6])}>{table[6]}</td>
            </tr>
        )

        return (
            <table className="table table-striped text-center">
                <thead className="bg-primary text-white">

                    <tr>
                        <th scope="col">city</th>
                        <th scope="col">so2</th>
                        <th scope="col">no2</th>
                        <th scope="col">pm25</th>
                        <th scope="col">pm10</th>
                        <th scope="col">o3</th>
                        <th scope="col">co</th>
                    </tr>

                </thead>
                <tbody>

                    {row}

                </tbody>
            </table>

        );
    }
}

export default Table;