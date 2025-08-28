import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome,faMagnifyingGlass,faStar } from "@fortawesome/free-solid-svg-icons";


const Menu = ({serachTerm, setSearchTerm}) => {
  return (
    <div className='container' id='moviecard'>
        
      <div className="main">
            <div className="registerSearchLogin">
                <div className="search"> 
                    <input type="text" placeholder='Search...' value={serachTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="1.3x" color="white" />
                </div>
            </div>

           
      </div>
    </div>
  )
}

export default Menu
