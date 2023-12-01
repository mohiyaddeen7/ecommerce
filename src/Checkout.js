import React, { useContext } from "react";
import cartContext from "./context_useContext/cartContext/cartContext";

export default function Checkout() {
  const { addToCart, removeFromCart, subTotal, cart } = useContext(cartContext);

  return (
    <div className="flex flex-col items-center p-10">
      <div className="font-bold text-2xl underline">Checkout</div>
      <ol className="flex items-center flex-col w-full list-decimal">
        <li className="w-full font-bold">
          <div className="text-lg">Delivery Details</div>
          <form
            action=""
            className="flex items-center w-full flex-wrap font-normal"
          >
            <div className="buyerNameContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerName" className="self-start mb-2">
                Name
              </label>
              <input
                type="text"
                name="buyerName"
                id="buyerName"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
                placeholder="Enter your name"
              />
            </div>
            <div className="buyerEmailContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerEmail" className="self-start mb-2">
                Email
              </label>
              <input
                type="email"
                name="buyerEmail"
                id="buyerEmail"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
                placeholder="Enter your email id"
              />
            </div>
            <div className="buyerAddressContainer flex flex-col items-center w-full p-2">
              <label htmlFor="buyerAddress" className="self-start mb-2">
                Address
              </label>
              <textarea
                name="buyerAddress"
                id="buyerAddress"
                rows="5"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
                placeholder="Enter your current address"
              ></textarea>
            </div>
            <div className="buyerPhoneContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerEmail" className="self-start mb-2">
                Phone Number
              </label>
              <input
                type="email"
                name="buyerEmail"
                id="buyerEmail"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="buyerAddressContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerName" className="self-start mb-2">
                Pincode (India)
              </label>
              <input
                type="text"
                name="buyerName"
                id="buyerName"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
                placeholder="Enter your delivery pincode"
              />
            </div>
            <div className="buyerPhoneContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerEmail" className="self-start mb-2">
                State
              </label>
              <input
                type="email"
                name="buyerEmail"
                id="buyerEmail"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
              />
            </div>
            <div className="buyerAddressContainer flex flex-col items-center w-1/2 p-2">
              <label htmlFor="buyerName" className="self-start mb-2">
                District
              </label>
              <input
                type="text"
                name="buyerName"
                id="buyerName"
                className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50"
              />
            </div>
          </form>
        </li>
        <li className="font-bold w-full h-full">
          <div className="text-lg mb-4">Review Cart Items</div>
          <div className="reviewCartItemsContainer shadow-lg bg-amber-200 font-normal px-8 py-8 rounded-2xl">
            <ul>
              {Object.keys(cart).map((item) => {
                return (
                  <li className="list-none p-2" key={item}>
                    <div className="flex justify-between my-4 items-center">
                      <div className="font-semibold">{cart[item].name}</div>
                      <div className="flex items-center justify-center">
                        <span
                          className="material-symbols-outlined cursor-pointer hover:text-green-500 select-none transition-all"
                          onClick={() => {
                            addToCart(item, 1);
                          }}
                        >
                          add_circle
                        </span>
                        <span className="text-xl mx-2 select-none w-8 text-center">
                          {cart[item].qty}
                        </span>
                        <span
                          className="material-symbols-outlined cursor-pointer hover:text-red-500 select-none transition-all"
                          onClick={() => {
                            removeFromCart(item, 1);
                          }}
                        >
                          do_not_disturb_on
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
              <li className="list-none p-2 font-bold flex flex-col items-center">
                <div className="totalContainer self-start mb-4">
                  Total : {subTotal} ₹
                </div>
                <button className="py-2 px-4 border-2 border-solid border-black hover:bg-green-300 transition-all hover:shadow-2xl hover:border-white rounded-lg self-start flex items-center justify-center shadow-lg backdrop-blur-xl bg-white/60">
                  <span class="material-symbols-outlined mr-2">payments</span>
                  <div className="payTextContainer ">Pay</div>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ol>{" "}
    </div>
  );
}
