import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../ASSETS/logo.jpeg'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
const Navbar = ({ reloadnavbar }) => {
    const [cartquantity, setcartquantity] = useState(0)


    const getcarttotalitems = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            let total = 0
            cart.forEach(item => {
                total += item.quantity
            })
            setcartquantity(total)
        }
        else {
            setcartquantity(0)
        }
    }

    useEffect(() => {
        getcarttotalitems()
    }, [reloadnavbar])
    return (
        <nav>
            <div className='s1'>
                <img src={logo} alt='logo' className='logo' />

                <div className='searchbar'>
                    <input typ="text" placeholder="Search for products and categries" className='search' />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>

                <div className='right'>
                    <div className='cart'>

                        <span className='qty'>{cartquantity}</span>
                        <Link to='/cart'
                         className='stylenone'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </Link>

                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">Login</Dropdown.Item>
                            <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                            <Dropdown.Item href="#">Profile</Dropdown.Item>
                            <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='s2'>
                <Link to='/'>
                    <a>Home</a>
                </Link>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Products
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/milk">Fresh Milk</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Dairies</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to='/about'>
                    <a>About Us</a>
                </Link>
                <Link to='/contact'>
                    <a>Contact Us</a>
                </Link>
             {/* <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        More
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Fresh
                            FAQ
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Terms & Conditions
                        </Dropdown.Item>
                    </Dropdown.Menu>  
    </Dropdown>*/}
            </div>
        </nav>
    )
}

export default Navbar