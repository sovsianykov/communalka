import React from "react";
import PropTypes from "prop-types";

const AllMonths = ({ months }, props) => {
  return (
    <tr>
      <td>
        <span>
          <select name="select">
            <option value="January">January</option>
            <option value="February" >February</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Morning">Morning</option>
          </select>
        </span>
      </td>
      <td>
        <input className="i1" onChange={props.changed1} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed2} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed3} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed4} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed5} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed6} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed7} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed8} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed9} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed10} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed11} type="text" />
      </td>
      <td>
        <input className="i1" onChange={props.changed12} type="text" />
      </td>
    </tr>
  );
};

AllMonths.propTypes = {
  months: PropTypes.object.isRequired,
};

export default AllMonths;
