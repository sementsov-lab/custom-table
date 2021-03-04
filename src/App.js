import './App.css'
import React from 'react'
import CustomTable from './components/CustomTable/CustomTable'
import TableHeader from './components/CustomTable/TableHeader'
import initialState from './initialState'
import { useRef, useState } from 'react'

function App() {

   const [selectedStatus, setSelectedStatus] = useState(null);

   const dt = useRef(null)

   const onStatusChange = (e) => {
      alert('Не получилось найти хорошую реализацию хєндлера на кастомные внешние фильтра :( пообщался бы с Вами на эту тему')
      //dt.current.filter(e.value, 'status', 'equals')
      //setSelectedStatus(e.value)
      //return [selectedStatus, setSelectedStatus, e]
   }

   const statusFilter = <div>
      <select name='status' value={selectedStatus} onChange={onStatusChange}>
         <option value="Processing">Processing</option>
         <option value="Paid">Paid</option>
         <option value="Cancelled">Cancelled</option>
      </select>
   </div>

   const statusBodyTemplate = (rowData) => {
      return (
         <React.Fragment>
            <span className={`status-${rowData.status.toString().toLowerCase()}`}>{rowData.status}</span>
         </React.Fragment>
      )
   }

   return (
      <div className='app-wrapper'>
         <CustomTable value={initialState} ref={dt}>
            <TableHeader field="id" header="Number" sortable filter filterPlaceholder="Number"/>
            <TableHeader field="status" header="Status" sortable filter filterCallback={onStatusChange}
                         filterElement={statusFilter} body={statusBodyTemplate}/>
            <TableHeader field="customer" header="Customer"  sortable/>
            <TableHeader field="actual" header="Actual" sortable/>
            <TableHeader field="country" header="Country" sortable filter filterPlaceholder="Country"/>
         </CustomTable>
      </div>
   )
}

export default App
