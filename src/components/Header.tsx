import Image from 'next/image'
import { FaPhoneAlt, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../../public/mes-logo-new.jpg'

const Header = () => {
  return (
    <div className="flex flex-row   py-3 ">
      <div className="w-2/6 flex justify-center items-center">
        <Image src={logo} alt="logo" width={250} height={100} />
      </div>
      <div className="w-2/6 flex justify-center items-center">
        <input
          className="w-full p-2 rounded-md border"
          placeholder="Search for products"
        />
      </div>
      <div className="flex w-2/6 justify-evenly items-center">
        <div className="flex">
          <div className="flex justify-center items-center mr-5">
            <FaPhoneAlt className="mr-3" />
            <p>(866) 563-6812</p>
          </div>
          <div className="flex justify-center items-center ">
            <FaUser className="mr-3" />
            Login | Register
          </div>
        </div>
        <div className="flex justify-center items-center">
          <FaShoppingCart size={24} color="#f25618" />
        </div>
      </div>
    </div>
  )
}

export default Header
