import '@/styles/datatable.css'
import { productDataGridColDef, userDataGridColDef } from '@/types/datagridcoldef';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = (
  {rows, setColumns, path }:
  {
    rows: Array<userDataGridColDef | productDataGridColDef>,
    setColumns: Function,
    path: string
  }
) => {

  return (
    <div className='data-table-container'>
      <DataGrid
        sx={{
          color: 'azure',
          //Datagrid Toolbar
          '& .MuiDataGrid-toolbarContainer': {
            flexDirection: 'row-reverse'
          },
          '& .MuiDataGrid-toolbarContainer > .MuiFormControl-root > .MuiInputBase-root': {
            color: 'azure'
          },
          '& .MuiDataGrid-toolbarContainer > .MuiFormControl-root > .MuiInputBase-root > .MuiSvgIcon-root' :{
            color: 'azure'
          },
          //Pagination text
          '& .MuiTablePagination-root': {
            color: 'azure'
          },
          //Pagination icons
          '& .MuiDataGrid-iconButtonContainer > .MuiButtonBase-root > .MuiSvgIcon-root': {
            color: 'azure'
          },
          '& .MuiTablePagination-actions > .MuiButtonBase-root[disabled] > .MuiSvgIcon-root': {
            color: 'gray'
          },
          //Bottom border when the 'search' input field in datagrid is not focused
          '& .css-1eed5fa-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before' : {
            borderColor: 'azure'
          },
          //Bottom border when the 'search' input field in datagrid is focused
          /*
          '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after': {
            borderColor: 'azure'
          },
          */
          '& .MuiDataGrid-menuIcon > .MuiButtonBase-root > .MuiSvgIcon-root': {
            color: 'azure'
          },
          //Datagrid borders (column headers)
          '& .MuiDataGrid-columnHeaders': {
            borderColor: 'gray'
          },
          //Datagrid borders (footer)
          '& .MuiDataGrid-footerContainer': {
            borderColor: 'gray'
          },
          //Datagrid cell's borders
          '& .MuiDataGrid-row > .MuiDataGrid-cell': {
            borderColor: 'gray'
          },
          borderColor: 'gray',
          //checkbox
          '& .MuiDataGrid-columnHeaderCheckbox .MuiSvgIcon-root': {
            color: 'azure'
          },
          '& .MuiDataGrid-cellCheckbox .MuiSvgIcon-root': {
            color: 'azure'
          },
          //cross and check (status: boolean)
          '& .MuiDataGrid-cell--withRenderer .MuiSvgIcon-root': {
            color: 'azure'
          }
        }}
        rows={rows}
        columns={setColumns(path)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        slots={{
          toolbar: GridToolbar
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500}
          }
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable