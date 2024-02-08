import Image from 'next/image'
import { FaRegAddressCard, FaShoppingCart } from 'react-icons/fa'

export const ProductComponent = () => {
  return (
    <div className="p-2 pt-5">
      <p className=" pl-10">
        Home {`>`}
        <span className="text-blue-800">
          {' '}
          3M Coban LF Cohesive Bandage{' '}
        </span>{' '}
      </p>
      <div className="px-10 mt-5 flex ">
        <div className="w-1/2">
          <h1 className="text-5xl">3M Coban LF Cohesive Bandage</h1>
          <p className="mt-2">
            Have a product question?{' '}
            <span className="text-blue-800"> Ask us</span>
          </p>
          <div className="w-full flex justify-center items-center mt-5">
            <Image
              alt="image"
              src="https://www.medicaleshop.com/img/product/3M2082-MI_image-1.jpg?fcts=20220506040351&resizeid=11&resizeh=1200&resizew=1200"
              width={700}
              height={600}
            />
          </div>
        </div>
        <div className=" flex flex-col w-1/2 ">
          <div>
            <h1 className="hover:text-orange-600 text-3xl mb-2 ">
              Get more information on 3M Coban LF Cohesive Bandage
            </h1>
            <hr />
            <p className="space-x-2 mt-2">
              <span className="font-bold">SKU:</span>
              3M2082-MI <span className="font-bold"> Brand: </span> 3M Health
              Care <span className="font-bold"> MPN/Model: </span>2082{' '}
              <span className="font-bold"> UOM: </span>Each{' '}
              <span className="font-bold"> GTIN:</span>
              50707387508161
            </p>
          </div>
          <div>
            <h1 className=" text-2xl mt-5  mb-3">Size:</h1>
            <div className="flex gap-3">
              <p className="p-2 border w-fit rounded-md ">2 Inch X 5 Yard</p>
              <p className="p-2 border w-fit rounded-md">3 Inch X 5 Yard</p>
              <p className="p-2 border w-fit rounded-md">4 Inch X 5 Yard</p>
              <p className="p-2 border w-fit rounded-md">6 Inch X 5 Yard</p>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl mt-5  mb-3">Color:</h1>
            <div className="flex gap-3">
              <p className="p-2 border w-fit rounded-md ">Tan</p>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl mt-5  mb-3">Packaging:</h1>
            <div className="flex gap-3">
              <p className="p-2 border w-fit rounded-md ">Each</p>
              <p className="p-2 border w-fit rounded-md">Package</p>
              <p className="p-2 border w-fit rounded-md">Case</p>
            </div>
          </div>
          <div>
            <h1 className="text-5xl text-orange-600 font-semibold mt-5">
              $2.63 to $59.28
            </h1>
          </div>
          <div className="flex mt-5 ">
            <h1 className="text-2xl mr-5">Quantity:</h1>
            <div className="flex gap-3">
              <input
                type="number"
                className="p-2 border w-20 rounded-lg"
                placeholder="1"
              />
            </div>
          </div>
          <button className="flex justify-center items-center py-5 bg-primary w-1/3 text-white rounded-md mt-5 p-4 ">
            Add to Cart <FaShoppingCart />
          </button>
          <div className=" gap-5">
            <h1 className=" text-2xl mt-5 ">B2B Customer ? :</h1>
            <div className="flex gap-5">
              <button className="hover:bg-secondary hover:text-white  border border-secondary  flex justify-center items-center py-5  w-1/3 text-secondary rounded-md mt-5 p-4 ">
                Add to Quote
              </button>
              <button className=" hover:bg-secondary hover:text-white  border border-secondary flex justify-center items-center py-5  w-1/3 text-secondary rounded-md mt-5 p-4 ">
                Add to Wishlist
              </button>
            </div>
            <h1 className="text-secondary font-semibold text-lg mt-5">
              Online Help Desk Available
            </h1>
            <p>Need Help? Contact Our Experts</p>
            <p className="flex">
              <FaRegAddressCard className="mr-2" size={23} color="#f25618" />
              Contact Form
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
