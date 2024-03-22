import { deleteUser } from '@/events/userdataevents'
import '@/styles/userdatagrid.css'

import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

import { SlEye } from "react-icons/sl"
import { SlTrash } from "react-icons/sl"
import { Link } from 'react-router-dom'

export const setUserDataColumns = (userPath: string): Array<GridColDef> => {
  return [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar', headerName: 'Avatar', width: 90,
      renderCell: (params: {row: { img: string } }) => {
        return (
          <img
            className='rounded-thumbnail' 
            src={
              params.row?.img ? 
              params.row.img :
              'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais'
            } alt='avatar'/>
        )
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 110,
      editable: false,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      type: 'boolean'
    },
    {
      field: 'actions', headerName: 'Actions', width: 90,
      renderCell: (params) => {
        return (
          <div className='datagrid-actions'>
            <div
              className='datagrid-view-action'
            >
              <Link 
                to={`/${userPath}/${params.row?.id}`}
              >
                <SlEye size={22} color='white'/>
              </Link>
            </div>
            <div
              className='datagrid-delete-action'
              onClick={() => deleteUser(params.row?.id)}
            >
              <SlTrash size={22} color="brown"/>
            </div>
          </div>
        )
      }
    },
  ]
}