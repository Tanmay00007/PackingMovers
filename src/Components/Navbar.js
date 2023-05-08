import React from 'react'
import truck from '../assets/images/truck.png'
import { navbarData } from '../pages/data'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { useState } from 'react'
import { setLogout } from '../state'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    dispatch(setLogout())
  };
  const logout = (e) =>{
    dispatch(setLogout())
  }
  const name=user.username;
  console.log(user);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className='w-screen absolute bg-white z-30 top-0 px-7 h-20 flex items-center justify-around shadow-md fixed'>
      <div className="w-[80%] flex justify-between content-center ">
      <div className='flex flex-col items-center justify-center pt-1'>
         <img src={truck} alt="package" className='h-12 mx-3' />
         <h2>Movers</h2>
      </div>
      <div className='flex flex-row px-16 items-center'>
        <nav >
          <ul className='flex gap-12 pb-2 '>
                <Link to='/'  className='cursor-pointer font-semibold text-blue-450 hover:text-blue-600 active:text-violet:400'>Home</Link>
                <Link to='/services'  className='cursor-pointer font-semibold text-blue-450 hover:text-blue-600 active:text-violet:400'>Services</Link>
                <Link to='/form' className='cursor-pointer font-semibold text-blue-450 hover:text-blue-600 active:text-violet:400'>Book Now</Link>
                <Link to='/contact' className='cursor-pointer font-semibold text-blue-450 hover:text-blue-600 active:text-violet:400'>Contact</Link>
                <Link className='cursor-pointer font-semibold text-blue-450 hover:text-blue-600 active:text-violet:400' onClick={() => dispatch(setLogout())}>Logout</Link>
          </ul>
          <hr className='border-oirOrange w-[110%]' />
        </nav>
      </div>
      </div>
      <div className='flex'>
      
      </div>
    </header>
  )
}

export default NavBar