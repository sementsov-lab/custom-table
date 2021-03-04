import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './Assets/main.css'

function CustomTable(props) {

   const [sortedField, setSortedField] = React.useState(null)
   const [sortDirection, setSortDirection] = React.useState(null)
   const [filters, setFilters] = React.useState(new Map())

   function sort(data) {
      let value = [...data]

      value.sort((a, b) => {
         if (a[sortedField] < b[sortedField]) {
            return sortDirection === 'asc' ? -1: 1
         }
         if (a[sortedField] > b[sortedField]) {
            return sortDirection === 'asc' ? 1: -1
         }
         return 0;
      })

      return value
   }

   function onSort(field, order) {
      setSortedField(field)
      setSortDirection(order)
   }

   function addFilterMap(field, value) {
      const newFilterMap = new Map([[field, value]])
      setFilters(new Map([...filters, ...newFilterMap]))
   }

   function onFilterChange(event) {
      addFilterMap(event.target.name, event.target.value)
   }

   function filter(data) {
      data = data.filter(function (item) {
         let isItemIncludesFilter = false
         let includesFilterCounter = 0

         filters.forEach((value, key) => {
            if (item[key].toString().includes(value.toString())) {
               includesFilterCounter+=1
               if (filters.size === includesFilterCounter) {
                  isItemIncludesFilter = true
               }
            }
         })
         return isItemIncludesFilter
      })
      return data
   }

   function getColumns() {
      let columns = React.Children.toArray(props.children);
      return (columns && columns.length) ? columns: null
   }

   function processData() {
      let data = [...props.value]
      if (sortedField !== null) {
         data = sort(data)
      }
      if (!!filters.size) {
         data = filter(data)
      }
      return data
   }

   function createTableHeader(value, columns) {
      return (<TableHeader value={value} onSort={onSort} onFilterChange={onFilterChange}
                           sortedField={sortedField}>{columns}</TableHeader>)
   }

   function createTableBody(value, columns) {
      return (<TableBody value={value}>{columns}</TableBody>)
   }

   let value = processData()
   let columns = getColumns()
   let tableContent = null

   if (Array.isArray(columns)) {
      let tableHeader = createTableHeader(value, columns)
      let tableBody = createTableBody(value, columns)
      //let tableFooter = createTableFooter(columns)

      tableContent = <div>
         <table className={'custom-table'}>
            {tableHeader}
            {tableBody}
            {/* {tableFooter}*/}
         </table>
      </div>;
   }

   return (
      <div>
         {tableContent}
      </div>
   )
}

export default CustomTable
