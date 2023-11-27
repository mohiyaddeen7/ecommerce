import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-amber-100 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i class="fa-solid fa-shop"></i>
            <span className="ml-3 text-xl">Ecommerce</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-900">
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
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </header>
    </div>
  );
}
