
import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';
import house from '../assets/House.svg'
import chart from '../assets/Chart.svg'
import wallet from '../assets/Wallet.svg'
import list from '../assets/List.svg'
import Hand from '../assets/Hand.svg'
import bell from '../assets/Bell.svg'
import basket from '../assets/Basket.svg'
import plus from '../assets/Plus.svg'
import './style.css'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <div className="mr-6">
        <Link to="/">
        <img className="h-8 w-auto" src={logo} alt="Logo" />
      </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300  h-10 px-5 pr-10  text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end center">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end hidden lg:flex ">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
        <div className="flex justify-center">
        <img className="h-8 w-auto justify-end " src={house} alt="Logo" />
        </div>
            Home
          </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
        <div className="flex justify-center">
        <img className="h-8 w-auto justify-end " src={chart} alt="Logo" />
        </div>
            Dashboard
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
          <div className="flex justify-center">
        <img className="h-8 w-auto " src={wallet} alt="Logo" />
       </div>
            wallet
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
          <div className="flex justify-center">
        <img className="h-8 w-auto " src={list} alt="Logo" />
        </div>
            Plan a trip
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
          <div className="flex justify-center">
        <img className="h-8 w-auto " src={Hand} alt="Logo" />
        </div>
            commision for life
          </a>
          <button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
            Subscribe
          </button>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
        <div className="flex justify-center">
        <img className="h-8 w-auto " src={bell} alt="Logo" />
        </div>
            Notifications
          </a>
          <a href="#responsive-header" className="block mt-4  lg:inline-block lg:mt-0 text hover:text-white mr-4">
          <div className="flex justify-center">
            <img className="h-8 w-auto" src={basket} alt="Logo" />
          </div>
            Carts
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4">
          <div className="flex justify-center">
        <img className="h-8 w-auto " src={plus} alt="Logo" />
        </div>
            Create
          </a>
        </div>
        <img className="block mt-4 lg:inline-block lg:mt-0 text hover:text-white mr-4 rounded-full hidden lg:flex" src={profile} alt="Profile" />
      </div>
    </nav>
  );
}

export default Nav;
