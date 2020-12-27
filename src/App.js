import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Table from "react-bootstrap/Table";
import Month from "./Components/Month";
import {Button} from "react-bootstrap";

class App extends Component {
  state = {
    months: [
      {
        id: 1,
        completed: "false",
        name: "set new month",
        re: "",
        dpe: " ",
        dbte: " ",
        vle: "",
        we: "",
        wpe: " ",
        wbte: " ",
        wle: " ",
        se: " ",
        spe: " ",
        sbte: " ",
        sle: " ",
      },
    ],
    monthForYear: [
      {
        id: 1,
        completed: "false",
        name: "January",
        pe: "",
        dpe: "45",
        dbte: "",
        vle: "12345",
        we: "t",
        wpe: "456",
        wbte: "20-1-2020",
        wle: "5",
        se: "600",
        spe: "888",
        sbte: "20-1-2020",
        sle: "6",

      },
    ]
  };
  iHandler1 = (input) => {
    setTimeout(()=>{
          this.setState({
              months: [
                  {
                      re: input.target.value,
                  },
              ],
          });
      },1000 )
  };
  iHandler2 = (event) => {
      setTimeout(()=>{
          this.setState({
              months: [
                  {
                      dpe: event.target.value,
                  },
              ],
          });
      },1000 )
  };
  iHandler3 = (event) => {
      setTimeout(()=>{
          this.setState({
              months: [
                  {
                      dbte: event.target.value,
                  },
              ],
          });
      },1000 )
  }; iHandler4 = (event) => {
    this.setState({
      months: [
        {
          vle: event.target.value,
        },
      ],
    });
  }; iHandler5 = (event) => {
    this.setState({
      months: [
        {
          we: event.target.value,
        },
      ],
    });
  }; iHandler6 = (event) => {
    this.setState({
      months: [
        {
          wpe: event.target.value,
        },
      ],
    });
  }; iHandler7 = (event) => {
    this.setState({
      months: [
        {
          wbte: event.target.value,
        },
      ],
    });
  }; iHandler8 = (event) => {
    this.setState({
      months: [
        {
          wle: event.target.value,
        },
      ],
    });
  }; iHandler9 = (event) => {
    this.setState({
      months: [
        {
          se: event.target.value,
        },
      ],
    });
  }; iHandler10 = (event) => {
    this.setState({
      months: [
        {
          spe: event.target.value,
        },
      ],
    });
  }; iHandler11 = (event) => {
    this.setState({
      months: [
        {
          sbte: event.target.value,
        },
      ],
    });
  }; iHandler12 = (event) => {
    this.setState({
      months: [
        {
          sle: event.target.value,
        },
      ],
    });
  };

  saveHandler = async() => {
    let inputs = document.querySelectorAll('.i1')
    let cell = document.querySelectorAll('.cell')
    for ( let j=0; j< 12;j++) {
      inputs[j].style.color = 'brown'
        cell[j].textContent = inputs[j].value
      console.log(cell[j])

    }


  }
  render() {
    return (
      <div className="container-fluid flex-column ">
        <div className="card dark">
          <div className="card-header">
            <div className="h1">
              <h1>Utility Bills</h1>
            </div>
          </div>
          <div className="card-body">
            <input type="text" />
            <Table striped bordered hover>
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
                  <td className='cell'>{this.state.months[0].re}</td>
                  <td className='cell'>{this.state.months[0].dpe}</td>
                  <td className='cell'> {this.state.months[0].dbte}</td>
                  <td  className='cell'>{this.state.months[0].vle}</td>
                  <td className='cell'>{this.state.months[0].we}</td>
                  <td className='cell'>{this.state.months[0].wpe}</td>
                  <td className='cell'>{this.state.months[0].wbte}</td>
                  <td className='cell'>{this.state.months[0].wle}</td>
                  <td className='cell'>{this.state.months[0].se}</td>
                  <td className='cell'>{this.state.months[0].spe}</td>
                  <td className='cell'>{this.state.months[0].dbte}</td>
                  <td className='cell'>{this.state.months[0].sle}</td>
                </tr>

                <Month
                  key={this.state.months[0].id}
                  months={this.state.months[0]}
                  name={this.state.months[0].name}
                  re={this.state.months[0].re}
                  dpe={this.state.months[0].dpe}
                  changed1={this.iHandler1}
                  changed2={this.iHandler2}
                  changed3={this.iHandler3}
                  changed4={this.iHandler4}
                  changed5={this.iHandler5}
                  changed6={this.iHandler6}
                  changed7={this.iHandler7}
                  changed8={this.iHandler8}
                  changed9={this.iHandler9}
                  changed10={this.iHandler10}
                  changed11={this.iHandler11}
                  changed12={this.iHandler12}
                />
              </tbody>
            </Table>
            <Button variant='danger' onClick={this.saveHandler}>SAVE</Button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
