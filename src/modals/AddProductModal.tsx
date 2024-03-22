import '@/styles/modals/addproductmodal.css'
import React from 'react'

const AddProductModal = (
  {setOpenAddProductModal} :
  {
    setOpenAddProductModal: React.Dispatch<React.SetStateAction<boolean>>
  }
) => {

  return (
    <>
      <div 
      className='add-product-modal-container'
      onClick={() => setOpenAddProductModal(false)}
    >
      <div
        className='add-product-modal'
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className='add-product-modal-form-close-btn'
          onClick={() => setOpenAddProductModal(false)}
        >
          Close
        </div>

        <h2 className='add-product-modal-title'>Add Product</h2>

        <form className='add-product-modal-form'>
          <div className='add-product-modal-form-fields'>
            <div className='add-product-modal-form-item'>
              <label htmlFor='image'>Product Image</label>
              <input 
                id='image' 
                type='text'
                onClick={(event) => event.stopPropagation()} 
              />
            </div>

            <div className='add-product-modal-form-item'>
              <label htmlFor='title'>Title</label>
              <input 
                id='title' 
                type='text'
                onClick={(event) => event.stopPropagation()} 
              />
            </div>

            <div className='add-product-modal-form-item'>
              <label htmlFor='producer'>Producer</label>
              <input 
                id='producer' 
                type='text'
                onClick={(event) => event.stopPropagation()} 
              />
            </div>

            <div className='add-product-modal-form-item'>
              <label htmlFor='created-at'>Created at</label>
              <input 
                id='created-at' 
                type='text'
                onClick={(event) => event.stopPropagation()} 
              />
            </div>

            <div className='add-product-modal-form-item'>
              <label htmlFor='available'>Availability</label>
              <select id='available'>
                <option value="true">In Stock</option>
                <option value="false">No Stack</option>
              </select>
            </div>
          </div>

          <button
            className='add-product-modal-form-submit-btn'
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddProductModal