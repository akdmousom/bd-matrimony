import Footer from "../Components/Footer/Footer"
import Nav from "../Components/NavBar/Nav"
import PropTypes from "prop-types"

export default function MainLayout({children}) {
  return (
    <>
    
    <div className="max-w-[1367px] mx-auto">

        {/* Navigation bar added here */}
        <Nav/>
        
        {children}
        <Footer/>
       
    </div>
    
    </>
  )
}


MainLayout.propTypes = {
  children: PropTypes.element
}
