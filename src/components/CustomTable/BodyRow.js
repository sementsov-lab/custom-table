import React from 'react'
import BodyCell from './BodyCell';

function BodyRow(props) {
   let columns = React.Children.toArray(props.children)
   let cells = []

   columns.forEach((column, i) => {
      let cell = <BodyCell key={i} {...column.props} value={props.value}  rowData={props.rowData}/>
      cells.push(cell)
   })

   return (
      <tr>{cells}</tr>
   )
}

export default BodyRow