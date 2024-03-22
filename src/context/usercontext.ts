import { createContext } from "react"

export const OpenModalContext = 
  createContext<{
    setOpenAddUserModal: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenAddProductModal: React.Dispatch<React.SetStateAction<boolean>>
  } | null
  >(null);