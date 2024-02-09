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
      <div className="px-10 mt-5 ">
        <button className="text-secondary p-5 border bg-gray-300 ">
          Features
        </button>
        <button className="text-secondary p-5 border bg-gray-300 ">
          Sizing
        </button>
        <button className="text-secondary p-5 border bg-gray-300 ">
          Warranty
        </button>
        <button className="text-secondary p-5 border bg-gray-300 ">
          Returns
        </button>
        <div className="border py-10 px-3">
          <p className="mb-4">
            3M Coban latex free Self-Adherent Wrap is a cohesive elastic wrap
            constructed from a nonwoven material and elastic fibers. The
            cohesive properties allow the wrap to stick to itself but not to
            other materials or skin. Coban Cohesive Bandage is intended for use
            as an elastic wrap to provide compression or support, or to secure
            dressings or devices.
          </p>
          <h1 className="text-lg font-bold">Features</h1>
          <ul className="list-disc ml-10">
            <li>Lightweight, porous and comfortable for patients</li>
            <li>Hand tearable - eliminates the need for scissors or cutting</li>
            <li>
              Wrap stays in place; eliminates the need for frequent readjustment
            </li>
            <li>
              Versatile - used to secure and protect primary dressings and other
              devices
            </li>
            <li>Also helps immobilize injuries and provide compression</li>
            <li>Sticks to itself; no pins or clips required</li>
          </ul>
          <hr className="my-5" />
          <table className="w-1/2">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>3M Coban LF</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Cohesive Bandage</td>
              </tr>
              <tr>
                <td>Manufacturer</td>
                <td>3M</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Nonwoven / Elastic</td>
              </tr>
              <tr>
                <td>Closure </td>
                <td> Self-adherent Closure</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Standard Compression</td>
              </tr>
              <tr>
                <td>UNSPSC Code</td>
                <td>42311506</td>
              </tr>
            </tbody>
          </table>
          <hr className="my-5" />
          <ul className="list-disc ml-10">
            <li>
              The product warranty is applicable as per the terms and conditions
              provided by the product manufacturer.
            </li>
          </ul>
          <h1 className="font-bold  ml-10">
            Please call us for specific details.
          </h1>
          <hr className="my-5" />
          <ul className="list-disc ml-10">
            <li>
              No returns will be accepted after 30 days from the date of
              shipment.
            </li>
            <li>
              All returns are subject to a restocking fee as per manufacturers
              terms and conditions.
            </li>
            <li>
              All returns must have an RGA number (Returned Goods
              Authorization), unauthorized returns will not be accepted.
            </li>
            <li>
              We do not guarantee fulfillment of any desired purpose or product
              suitability to the user and this will not be considered as a valid
              reason for return.
            </li>
            <li>
              The products must be new, unused condition, not tampered with, in
              original packaging and returned at the customers expense in the
              original packaging.
            </li>
            <li>
              If your return is not due to any manufacturing defect then the
              original shipping cost will be deducted from the total refund.
            </li>
            <li>
              Hygiene, bath and toilet items cannot be returned once opened or
              used.
            </li>
            <li>
              Standard manufacturer terms and conditions apply for return policy
              of this product.
            </li>
          </ul>
          <h1 className="font-bold  ml-10">
            Please call us for specific details.
          </h1>
        </div>
      </div>
    </div>
  )
}
