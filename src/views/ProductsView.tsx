import '@/styles/productsview.css'

import DataTable from "@/components/DataTable"
import { setProductDataColumns } from "@/components/datagrid/ProductsDataGrid"
import { OpenModalContext } from "@/context/usercontext"
import { productDataRows } from "@/data/productsdata"
import { useContext } from "react"

const ProductsView = () => {
  const openModalContext = useContext(OpenModalContext)

  return (
    <div className='products-view-container'>
      <div className='data-table-products-header'>
        <h1>Products</h1>
        <button
          className='add-product-btn'
          onClick={() => openModalContext?.setOpenAddProductModal(true)}
        >
          Add Product
        </button>
      </div>

      <DataTable 
        path='products' 
        rows={productDataRows} 
        setColumns={setProductDataColumns}
      />
    </div>
  )
}

export default ProductsView