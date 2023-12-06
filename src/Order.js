import React, { useContext } from "react";
import cartContext from "./context_useContext/cartContext/cartContext";

export default function Order() {
  const { cart, subTotal } = useContext(cartContext);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-12 py-12 mx-auto">
        <div className="w-full mb-6 flex flex-col justify-center container">
          <div className="orderHeading flex flex-col justify-center">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4">
              Order Id : #Lorem ipsum dolor sit.
            </h1>

            <p className="leading-relaxed mb-4">
              Yay!! your order has been placed
            </p>
            <p className="leading-relaxed mb-4">
              Order Placed : Lorem ipsum dolor sit amet.
            </p>
            <p className="leading-relaxed mb-4">Your payment status is : COD</p>
          </div>
          <div className="flex mb-4  border-amber-200 items-center">
            <div className="py-2 text-lg px-1 w-1/2 font-semibold">Image</div>
            <div className="py-2 text-lg px-1 w-1/2 font-semibold">Item</div>
            <div className="py-2 text-lg px-1 w-1/2 font-semibold">
              Quantity
            </div>
            <div className="py-2 text-lg px-1 w-1/2 font-semibold">Amount</div>
            <div className="py-2 text-lg px-1 w-1/2 font-semibold">Link</div>
          </div>
          <div className="flex mb-4 border-y-2 border-amber-200 items-center py-2">
            <div className="py-2 text-lg px-1 w-1/2">
              <img
                alt="ecommerce"
                className="h-[8rem]"
                src="https://m.media-amazon.com/images/I/7128Ix8OkaL._UL1500_.jpg"
              />
            </div>
            <div className="py-2 text-lg px-1 w-1/2">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="py-2 text-lg px-1 w-1/2">1</div>
            <div className="py-2 text-lg px-1 w-1/2">300 x 1 = 300rs</div>
            <div className="py-2 text-lg px-1 w-1/2">
              <button className="ml-2 text-black bg-gray-200 py-2 px-6 hover:bg-amber-200 rounded hover:shadow-lg hover:text-green-800 font-semibold transition-all ">
                Buy now
              </button>
            </div>
          </div>

          <div className="flex">
            <span className="title-font font-semibold text-2xl text-gray-900">
              SubTotal : $58.00
            </span>

            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <p className="leading-relaxed mb-4">
            Tracking link will be sent via Email once your order is shipped! If
            you still have any issues, feel free to call our customer support
            number.
          </p>
        </div>
      </div>
    </section>
  );
}
