import React from "react";


const Month = ({month}) => {
 return (

        <tr>
            <td>
                    <span>{month.name}</span>
            </td>
            <td>
                    <span>{month.changed1}</span>
            </td>
            <td>
                    <span>{month.dpe}</span>
            </td>
        </tr>










         )
}








export default Month;
