import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from "react-bootstrap/Table";
import Month from './Components/Month'


class App  extends Component{
    state = {
        months: [
            {
                id: 1,
                completed: "false",
                name : "set new month",
                changed1 :  this.iHandler,
                dpe: "dbl click ",
                dbte:"dbl click ",
                vle:"dbl click ",
                we: "dbl click ",
                wpe: "dbl click ",
                wbte: "dbl click ",
                wle: "dbl click ",
                se: "dbl click ",
                spe: "dbl click ",
                sbte: "dbl click ",
                sle: "dbl click ",
            }

        ],
        monthForYear : [
            {
                id: 1,
                completed: "false",
                name : "January",
                changed1 : '',
                dpe: "45",
                dbte:'',
                vle: "12345",
                we: "t",
                wpe: "456",
                wbte: "20-1-2020",
                wle: "5",
                se: "600",
                spe: "888",
                sbte: "20-1-2020",
                sle: "6",
            }
        ]
    };
    iHandler =(event)=> {
     this.state =   {
            months: [
                {
                    id: 1,
                    completed: "false",
                    name : event.target.value,
                    re: event.target.value,
                    dpe: event.target.value,
                    dbte:event.target.value,
                    vle:event.target.value,
                    we: event.target.value,
                    wpe: event.target.value,
                    wbte: event.target.value,
                    wle: event.target.value,
                    se: event.target.value,
                    spe: event.target.value,
                    sbte: event.target.value,
                    sle: event.target.value
                }

            ]
            }



    }




  render() {





    return(
        <div className= 'container-fluid flex-column '>
        <div className='card dark' >
                <div className="card-header">
                <div className='h1'>
                    <h1>Utility Bills</h1>
                </div>



                </div>
                    <div className='card-body'>
                        <input type="text" />
                        < Table  striped bordered hover >
                            <thead>

                            <tr>
                                <th rowSpan="2" colSpan="1">
                                    MONTHS
                                </th>
                                <th colSpan="4">Electricity</th>
                                <th colSpan="4">Water</th>
                                <th colSpan="4">Head Of House</th>
                            </tr>

                            <tr>
                                <th colSpan="1">pay</th>
                                <th colSpan="1">debt</th>
                                <th>date</th>
                                <th>value</th>
                                <th colSpan="1">pay</th>
                                <th colSpan="1">debt</th>
                                <th>date</th>
                                <th>value</th>
                                <th colSpan="1">pay</th>
                                <th colSpan="1">debt</th>
                                <th>date</th>
                                <th>value</th>
                            </tr>
                            </thead>
                            {/*<tbody onClick={this.editHandler.bind(this)}>*/}
                            {/*<tbody onClick={this.saveHandler.bind(this)}>*/}
                              <tbody>
                            <tr>
                                <th className="monthMame">January</th>
                                <td><input className='i1' onChange={this.changed1} type="text"/></td>
                                <td><input className='i1' onChange={this.canged2} type="text"/></td>
                                <td><input className='i1' onChange={this.canged3} type="text"/></td>
                                <td><input className='i1' onChange={this.canged4} type="text"/></td>
                                <td><input className='i1' onChange={this.canged5} type="text"/></td>
                                <td><input className='i1' onChange={this.canged6} type="text"/></td>
                                <td><input className='i1' onChange={this.canged7} type="text"/></td>
                                <td><input className='i1' onChange={this.canged8} type="text"/></td>
                                <td><input className='i1' onChange={this.canged9} type="text"/></td>
                                <td><input className='i1' onChange={this.canged10}  type="text"/></td>
                                <td><input className='i1' onChange={this.canged11} type="text"/></td>
                                <td><input className='i1' onChange={this.canged12} type="text"/></td>

                            </tr>




                                  {this.state.months.map( month => {
                                      return ( < Month  month={month}
                                                        name={month.name}
                                                        changed1={month.changed1}
                                                        dpe={month.dpe}
                                                        na={month.name}
                                                        name={month.name}
                                                        name={month.name}

                                                        key={month.id}


                                      />)
                                  })}

                            </tbody>

                        </Table>


                    </div>

        </div>

        </div>


















    )
  }


}

export default App;
