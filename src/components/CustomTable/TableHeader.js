import React from 'react'
import HeaderCell from './HeaderCell';

function TableHeader(props) {

   function createHeaderCells(columns) {
      return React.Children.map(columns, (column, i) => {
         return <HeaderCell key={column.field||i} columnProps={column.props} onSort={props.onSort} onFilterChange={props.onFilterChange}
                            filterElement={props.filterElement}/>
      })
   }

   let columns = React.Children.toArray(props.children);
   let content = <tr>{createHeaderCells(columns)}</tr>

   return (
      <thead>{content}</thead>
   )
}

export default TableHeader
