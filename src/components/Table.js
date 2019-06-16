import React from 'react';

const Table = (props) => {

    let data = props.data

    let table = [
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
        ["", "-", "-", "-", "-"],
    ]

    for (let i = 0; i < data.length; i++) {

        let city = data[i][0].city
        table[i][0] = city

        for (let j = 0; j < data[i].length; j++) {

            let co = ''
            let no2 = ''
            let so2 = ''
            let o3 = ''

            if (data[i][j].parameter === 'co') {
                co = data[i][j].value.toFixed(2)
                table[i][1] = co
            }

            if (data[i][j].parameter === 'no2') {
                no2 = data[i][j].value.toFixed(2)
                table[i][2] = no2
            }

            if (data[i][j].parameter === 'so2') {
                so2 = data[i][j].value.toFixed(2)
                table[i][3] = so2
            }

            if (data[i][j].parameter === 'o3') {
                o3 = data[i][j].value.toFixed(2)
                table[i][4] = o3
            }

        }
    }




    const row = table.map((table) =>
        <tr>
            <td scope="row" key={table[0][0]}>{table[0]}</td>
            <td>{table[1]}</td>
            <td>{table[2]}</td>
            <td>{table[3]}</td>
            <td>{table[4]}</td>

        </tr>
    )


    return (

        <table className="table table-striped text-center">

            <thead className="table-primary">
                <tr>
                    <th scope="col">city</th>
                    <th scope="col">co</th>
                    <th scope="col">no2</th>
                    <th scope="col">so2</th>
                    <th scope="col">o3</th>
                </tr>
            </thead>
            <tbody>

                {row}

            </tbody>
        </table>


    );
}

export default Table;