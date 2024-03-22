import '@/styles/usersview.css'

import DataTable from "@/components/DataTable"
import { userDataRows } from '@/data/usersdata'
import { setUserDataColumns } from '@/components/datagrid/UsersDataGrid'
import { useContext } from 'react'
import { OpenModalContext } from '@/context/usercontext'

const UsersView = () => {
  const openModalContext = useContext(OpenModalContext)

  return (
    <div className="users-view-container">
      <div className='data-table-users-header'>
        <h1>Users</h1>
        <button
          className='add-user-btn'
          onClick={() => openModalContext?.setOpenAddUserModal(true)}
        >
          Add User
        </button>
      </div>

      <DataTable 
        path='users' 
        rows={userDataRows} 
        setColumns={setUserDataColumns}
      />
    </div>
  )
}

export default UsersView