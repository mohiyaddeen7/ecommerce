import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cartContext from "../context_useContext/cartContext/cartContext";

export default function Nav() {
  const { toggleCart, addToCart, removeFromCart, clearCart, subTotal, cart } =
    useContext(cartContext);

  return (
    <div>
      <header className="text-gray-600 body-font bg-amber-100 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i className="fa-solid fa-shop"></i>
            <span className="ml-3 text-xl">Ecommerce</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-900 ">
              Home
            </NavLink>
            <NavLink to={"/Tshirts"} className="mr-5 hover:text-gray-900">
              T-shirts
            </NavLink>
            <NavLink to="/Hoodies" className="mr-5 hover:text-gray-900">
              Hoodies
            </NavLink>
            <NavLink to="/Mugs" className="mr-5 hover:text-gray-900">
              Mugs
            </NavLink>
            <NavLink to="/Stickers" className="mr-5 hover:text-gray-900">
              Stickers
            </NavLink>
          </nav>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={toggleCart}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </header>

      <div
        className="cartSideBar top-0 translate-x-full  right-0 bg-gray-100 py-10 px-8 transform transition-transform fixed z-20 w-96 h-full"
        id="cartSideBar"
      >
        <h2 className="font-bold text-xl text-center"> Shoping Cart</h2>
        <span
          className="material-symbols-outlined absolute top-4 right-4 cursor-pointer text-2xl"
          onClick={toggleCart}
        >
          close
        </span>
        <ul>
          {Object.keys(cart).length === 0 && (
            <div className="my-5">Cart is Empty!!</div>
          )}
          {cart &&
            Object.keys(cart).map((k) => {
              return (
                <li className="" key={k}>
                  <div className="flex justify-between my-5 items-center">
                    <div className="font-semibold">{cart[k].name}</div>
                    <div className="flex items-center justify-center">
                      <span
                        className="material-symbols-outlined cursor-pointer hover:text-green-500"
                        onClick={() => {
                          addToCart(k, 1);
                        }}
                      >
                        add_circle
                      </span>
                      <span className="text-xl mx-2">{cart[k].qty}</span>
                      <span
                        className="material-symbols-outlined cursor-pointer hover:text-red-500"
                        onClick={() => {
                          removeFromCart(k, 1);
                        }}
                      >
                        do_not_disturb_on
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <button className="p-2 border-2 border-solid border-black mr-2 hover:bg-amber-200 transition-all hover:shadow-lg hover:border-white rounded">
          Checkout
        </button>
        <button
          className="p-2 border-2 border-solid border-black mr-2 hover:bg-amber-200 transition-all hover:shadow-lg hover:border-white rounded"
          onClick={clearCart}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
