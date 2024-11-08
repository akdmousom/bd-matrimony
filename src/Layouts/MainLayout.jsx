import Nav from "../Components/NavBar/Nav"
import PropTypes from "prop-types"

export default function MainLayout({children}) {
  return (
    <>
    
    <div className="max-w-[1367px] mx-auto">

        {/* Navigation bar added here */}
        <Nav/>
        
        {children}
       
    </div>
    
    </>
  )
}


MainLayout.propTypes = {
  children: PropTypes.element
}
