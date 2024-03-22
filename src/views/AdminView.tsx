import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import '@/styles/adminview.css'
import { Outlet } from "react-router-dom"
import AddUserModal from "@/modals/AddUserModal"
import { OpenModalContext } from "@/context/usercontext"
import AddProductModal from "@/modals/AddProductModal"

const AdminView = () => {
  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false)
  const [openAddProductModal, setOpenAddProductModal] = useState<boolean>(false)

  return (
    <>
      {
        openAddUserModal ? 
        <AddUserModal setOpenAddUserModal={setOpenAddUserModal} /> :
        null
      }
      {
        openAddProductModal ? 
        <AddProductModal setOpenAddProductModal={setOpenAddProductModal} /> :
        null
      }
      <div className="admin-view">
        <Navbar />
        <div className="admin-view-content">
          <Sidebar />
          <OpenModalContext.Provider value={{
            setOpenAddUserModal,
            setOpenAddProductModal
          }}>
            <Outlet />
          </OpenModalContext.Provider>
        </div>
        <Footer />
      </div>
    </>
    
  )
}

export default AdminView