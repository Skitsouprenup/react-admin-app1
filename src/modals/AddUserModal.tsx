import '@/styles/modals/addusermodal.css'
import React from 'react'

const AddUserModal = (
  {setOpenAddUserModal} :
  {
    setOpenAddUserModal: React.Dispatch<React.SetStateAction<boolean>>
  }
) => {

  return (
    <>
      <div 
      className='add-user-modal-container'
      onClick={() => setOpenAddUserModal(false)}
    >
      <div
        className='add-user-modal'
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className='add-user-modal-form-close-btn'
          onClick={() => setOpenAddUserModal(false)}
        >
          Close
        </div>

        <h2 className='add-user-modal-title'>Add User</h2>

        <form 
          className='add-user-modal-form' 
        >
          <div className='add-user-modal-form-item'>
            <label htmlFor='avatar'>Avatar Link</label>
            <input 
              id='avatar' 
              type='text'
              onClick={(event) => event.stopPropagation()} 
            />
          </div>

          <div className='add-user-modal-form-item'>
            <label htmlFor='firstname'>First Name</label>
            <input 
              id='firstname' 
              type='text'
              onClick={(event) => event.stopPropagation()} 
            />
          </div>

          <div className='add-user-modal-form-item'>
            <label htmlFor='lastname'>Last Name</label>
            <input 
              id='lastname' 
              type='text'
              onClick={(event) => event.stopPropagation()} 
            />
          </div>

          <div className='add-user-modal-form-item'>
            <label htmlFor='email'>Email</label>
            <input 
              id='email' 
              type='text'
              onClick={(event) => event.stopPropagation()} 
            />
          </div>

          <div className='add-user-modal-form-item'>
            <label htmlFor='phone'>Phone</label>
            <input 
              id='phone' 
              type='text'
              onClick={(event) => event.stopPropagation()} 
            />
          </div>

          <div className='add-user-modal-form-item'>
            <label htmlFor='verification'>Verification</label>
            <select id='verification'>
              <option value="true">Verified</option>
              <option value="false">Not Verified</option>
            </select>
          </div>

          <button
            className='add-user-modal-form-submit-btn'
          >
            Add User
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddUserModal