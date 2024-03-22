import { deleteProduct } from "@/events/productdataevents"
import { GridColDef } from "@mui/x-data-grid"

import { SlEye } from "react-icons/sl"
import { SlTrash } from "react-icons/sl"
import { Link } from "react-router-dom"

export const setProductDataColumns = (productPath: string): Array<GridColDef> => {
  return [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'image', headerName: 'Image', width: 90,
      renderCell: (params: {row: { img: string } }) => {
        return (
          <img
            className='rounded-thumbnail' 
            src={
              params.row?.img ? 
              params.row.img :
              'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            } alt='image'/>
        )
      }
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'producer',
      headerName: 'Producer',
      width: 150,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 110,
      editable: false,
    },
    {
      field: 'created_at',
      headerName: 'Created at',
      width: 150,
      editable: false,
    },
    {
      field: 'available',
      headerName: 'Available',
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
                to={`${productPath}/${params.row?.id}`}
              >
                <SlEye size={22} color='white'/>
              </Link>
            </div>
            <div
              className='datagrid-delete-action'
              onClick={() => deleteProduct(params.row?.id)}
            >
              <SlTrash size={22} color="brown"/>
            </div>
          </div>
        )
      }
    },
  ]
}