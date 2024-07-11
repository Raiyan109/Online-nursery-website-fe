import InViewAnimation from "@/components/InViewAnimation"
import InViewRight from "@/components/InViewRight"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addToCart, decreaseCart, removeFromCart } from "@/redux/features/cart/cartSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  return (
    <>
      {cart.cartItems.length === 0 ? (
        <InViewAnimation>
          <div className="py-32 flex flex-col items-center justify-center gap-5">
            <IoBagHandleOutline size={70} className="text-lightGreen" />
            <h1 className="text-6xl text-white font-bold lg:px-28 px-0 text-center lg:text-left">Your cart is empty</h1>
            <h3 className="text-md text-white/60 lg:px-28 px-0 text-center lg:text-left">Please add more plants inside</h3>
            <Link to='/allProducts'>
              <button className="btn-green-rounded text-xl py-3 px-5 rounded-full">Catalog</button>
            </Link>
          </div>
        </InViewAnimation>
      ) : (
        <div className="py-32">
          <InViewAnimation>
            <h1 className="text-6xl text-white font-bold pb-10 lg:px-28 px-0 text-center lg:text-left">Cart (3)</h1>
          </InViewAnimation>
          <InViewRight>
            <section
              className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
              <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div className="grid grid-cols-12">
                  <div
                    className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                    {/* <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                      <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                      <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
                    </div> */}
                    {/* Cart items header */}
                    <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-paste">
                      <div className="col-span-12 md:col-span-7">
                        <p className="font-normal text-lg leading-8 text-paste">Product Details</p>
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <div className="grid grid-cols-5">
                          <div className="col-span-3">
                            <p className="font-normal text-lg leading-8 text-paste text-center">Quantity</p>
                          </div>
                          <div className="col-span-2">
                            <p className="font-normal text-lg leading-8 text-paste text-center">Total</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cart Items */}
                    {cart.cartItems?.map((cartItem) => (
                      <div
                        className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-paste group">
                        <div className="w-full md:max-w-[126px]">
                          <img src={cartItem?.image} alt="perfume bottle image"
                            className="mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                          <div className="md:col-span-2">
                            <div className="flex flex-col max-[500px]:items-center gap-3">
                              <h6 className="font-semibold text-base leading-7 text-white">{cartItem?.title}</h6>
                              <h6 className="font-normal text-sm leading-7 text-white/80">{cartItem?.category}</h6>
                              <h6 className="font-medium text-base leading-7 text-lightGreen transition-all duration-300 group-hover:text-lightGreen/80">${cartItem?.price}</h6>
                              <button className="btn-green-rounded bg-red hover:bg-red/80 w-20 text-xs" onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                            </div>
                          </div>
                          <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                            <div className="flex items-center h-full">
                              <button
                                className="group rounded-l-xl px-5 py-[18px] border border-paste flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-paste hover:border-paste hover:shadow-paste focus-within:outline-paste" onClick={() => handleDecreaseCart(cartItem)}>

                                <FaMinus className="stroke-white transition-all duration-500 group-hover:stroke-black" />
                              </button>
                              <div className="border-y border-paste outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-white py-[15px]  text-center bg-transparent">
                                {cartItem.cartQuantity}
                              </div>
                              {/* <input type="text"
                                className="border-y border-paste outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-white py-[15px]  text-center bg-transparent"
                                placeholder="1" /> */}
                              <button
                                className="group rounded-r-xl px-5 py-[18px] border border-paste flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-paste hover:border-paste hover:shadow-paste focus-within:outline-paste" onClick={() => handleIncreaseCart(cartItem)}>
                                <FaPlus className="stroke-white transition-all duration-500 group-hover:stroke-black" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                            <p className="font-bold text-lg leading-8 text-lightGreen text-center transition-all duration-300 group-hover:text-lightGreen/80">${cartItem.price * cartItem.cartQuantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}



                    {/* <div className="flex items-center justify-end mt-8">
                      <button
                        className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                        Add Coupon Code
                        <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                          fill="none">
                          <path
                            d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                    </div> */}
                  </div>
                  <div
                    className=" col-span-12 xl:col-span-4 bg-paste w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                      Order Summary</h2>
                    <div className="mt-8">
                      <div className="flex items-center justify-between pb-6">
                        <p className="font-normal text-lg leading-8 text-black">3 Items</p>
                        <p className="font-medium text-lg leading-8 text-black">$480.00</p>
                      </div>
                      <form>
                        <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">Shipping
                        </label>
                        <div className="flex pb-6">
                          <div className="relative w-full">
                            <div className=" absolute left-0 top-0 py-3 px-4">
                              <span className="font-normal text-base text-gray-300">Second Delivery</span>
                            </div>
                            <input type="text"
                              className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                              placeholder="$5.00" />
                            <button id="dropdown-button" data-target="dropdown-delivery"
                              className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                              type="button">
                              <svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                  stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </button>
                            <div id="dropdown-delivery" aria-labelledby="dropdown-delivery"
                              className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 right-0">
                              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button">
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
                        </label>
                        <div className="flex pb-4 w-full">
                          <div className="relative w-full ">
                            <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                            </div>
                            <input type="text"
                              className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                              placeholder="xxxx xxxx xxxx" />
                            <button id="dropdown-button" data-target="dropdown"
                              className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                              type="button"><svg className="ml-2 my-auto" width="12" height="7" viewBox="0 0 12 7"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                  stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </button>
                            <div id="dropdown"
                              className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button">
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center border-b border-gray-200">
                          <button
                            className="w-full text-center btn-black-square py-3 px-6 font-semibold text-lg transition-all duration-500 rounded-2xl mb-4">Apply</button>
                        </div>
                        <div className="flex items-center justify-between py-8">
                          <p className="font-medium text-2xl leading-8 text-black">3 Items</p>
                          <p className="font-bold text-2xl leading-8 text-black">$485.00</p>
                        </div>
                        <button
                          className="w-full text-center btn-green-square py-3 px-6 font-semibold text-lg transition-all duration-500 rounded-2xl">Checkout</button>
                        {/* bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700 */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </InViewRight>
        </div>
      )}
    </>
  )
}

export default Cart