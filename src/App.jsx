import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'


function App() {


  return (
    <>
      <MainLayout>
        <Outlet>
          
        </Outlet>
      </MainLayout>
    </>
  )
}

export default App
