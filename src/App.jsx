import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { router } from './Routes/Route'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  )
}

export default App
