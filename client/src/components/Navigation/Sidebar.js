import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStickyNote, FaUserFriends } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <nav className='col-md-3 col-lg-2 d-md-block bg-dark text-light sidebar navbar navbar-dark collapse' id='sidebarMenu'>
            <div className='sticky pt-3 px-2'>
                <ul className='nav flex-column'>
                    <li className='nav-item mb-5 mx-auto'>
                        <Link to='/products' className='nodec'>
                            <FaShoppingCart  size={40} />
                        </Link>
                    </li>
                    <li className='nav-item mb-5 mx-auto'>
                        <Link to='/orders' className='nodec'>
                            <FaStickyNote size={40} />
                        </Link>
                    </li>
                    <li className='nav-item mb-5 mx-auto'>
                        <Link to='/clients' className='nodec'>
                            <FaUserFriends size={40} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
