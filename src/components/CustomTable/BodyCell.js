import React from 'react'
import Utils from './Utils/Utils';

function BodyCell(props) {
   let content

   if (props.rowData[props.field]) {
      content = Utils.isFunction(props.body) ? props.body(props.rowData): props.rowData[props.field]
   }

   return (
      <td>{content}</td>
   )
}

export default BodyCell