import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from "react-bootstrap/Table";



class App  extends Component{





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
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                            </tr>
                              <tr>
                                  <th className="monthMame">February</th>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                                  <td><input type="text"/></td>
                              </tr>
                            </tbody>

                        </Table>


                    </div>

        </div>

        </div>


















    )
  }


}

export default App;
