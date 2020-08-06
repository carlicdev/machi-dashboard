import React from 'react'
import { FaShoppingCart, FaStickyNote, FaUserFriends } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <nav className='col-md-3 col-lg-2 d-md-block bg-dark text-light sidebar navbar navbar-dark collapse' id='sidebarMenu'>
            <div className='sticky pt-3 px-2'>
                <ul className='nav flex-column'>
                    <li className='nav-item'>
                        <FaShoppingCart size={40} />
                    </li>
                    <li className='nav-item'>
                        <FaStickyNote size={40} />
                    </li>
                    <li className='nav-item'>
                        <FaUserFriends size={40} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
