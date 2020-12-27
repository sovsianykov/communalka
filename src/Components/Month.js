import React from "react";

const Month = (props) => {
  return (
    <tr>
      <td >
        <span>Template</span>
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

export default Month;
