export interface userDataGridColDef {
  id: number, 
  img: string, 
  lastName: string, 
  firstName: string, 
  age: string | null,
  status?: boolean
}

export interface productDataGridColDef {
  id: number, 
  img: string, 
  title: string, 
  producer: string,
  price: number, 
  created_at: string | null,
  available?: boolean
}