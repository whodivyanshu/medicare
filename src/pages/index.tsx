import { Inter } from 'next/font/google'
import Image from 'next/image'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'
import logo from '../../public/mes-logo-new.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="flex flex-row text-green-600 bg-gray-400 py-3 ">
        <div className="w-2/6 flex justify-center items-center">
          <Image src={logo} alt="logo" width={250} height={100} />
        </div>
        <div className="w-2/6 flex justify-center items-center">
          <input
            className="w-full p-2 rounded-md"
            placeholder="Search for products"
          />
        </div>
        <div className="flex w-2/6 justify-center items-center">
          <div className="flex justify-center items-center">
            <FaPhoneAlt />
            <p>(866) 563-6812</p>
          </div>
          <div className="flex ">
            <FaUser />
            Login | Register
          </div>
        </div>
      </div>
    </div>
  )
}
