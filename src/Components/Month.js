import React from "react";
import PropTypes from 'prop-types'

const Month = ({months}, props) => {
  return (
    <tr>
      {/*<td >*/}
      {/*  <span>Template</span>*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.re} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.dpe} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.dbte} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.vle} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.we} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.wpe} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.wbte} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" value={props.wle} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" onChange={props.se} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" onChange={props.spe} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" onChange={props.sbte} type="text" />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <input className="i11" onChange={props.se} type="text" />*/}
      {/*</td>*/}
    </tr>
  );
};

Month.propTypes = {
    months : PropTypes.object.isRequired
}


export default Month;
