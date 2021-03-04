import React from 'react'
import BodyRow from './BodyRow';

function TableBody(props) {
   let rows

   if (props.children) {

      if (props.value && props.value.length) {
         rows = []
         props.value.forEach((row, i) => {
            let rowData = row

            let bodyRow = <BodyRow key={i}  value={props.value} rowData={rowData} rowIndex={i}>
               {props.children}
            </BodyRow>

            rows.push(bodyRow)

         })
      }
   }

   return (
      <tbody >
      {rows}
      </tbody>
   )
}

export default TableBody