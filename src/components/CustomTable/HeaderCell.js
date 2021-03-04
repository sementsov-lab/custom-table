import React from 'react'
import upArrowSortImage from './Assets/Images/arr-top.jpg'
import downArrowSortImage from './Assets/Images/arr-bottom.jpg'

function HeaderCell(props) {
   let sortIconElement = renderSortIcon()
   let filterElement

   function renderSortIcon() {
      if (props.columnProps.sortable) {
         let sortField = props.columnProps.field
         return (
            <div style={{display: 'inline-block', paddingLeft: '10px'}}>
               <div onClick={() => { props.onSort(sortField, 'asc') }} style={{ height:'13px', cursor: 'pointer', fontWeight: '400' }}>
                  <img src={upArrowSortImage} width='10px' height='5px'/>
               </div>
               <div onClick={() => { props.onSort(sortField, 'dsc') }} style={{ height:'13px', cursor: 'pointer', fontWeight: '400' }}>
                  <img src={downArrowSortImage} width='10px' height='5px'/>
               </div>
            </div>
         )
      } else {
         return null
      }
   }

   if (props.columnProps.filter) {
      filterElement = props.columnProps.filterElement ||
         <div>
            <input type='text' name={props.columnProps.field} placeholder={props.columnProps.filterPlaceholder}
                   onChange={(e) => {
                      props.onFilterChange(e)
                   }}/>
         </div>
   }

   return (
      <th>
         <span>{props.columnProps.header}</span>
         {sortIconElement}
         {filterElement}
      </th>
   )
}

export default HeaderCell