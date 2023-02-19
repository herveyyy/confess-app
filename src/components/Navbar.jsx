import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-red-800">
      <nav className="flex items-center container mx-auto h-full justify-center">
        <div>
          <ul className="flex items-center space-x-10 text-sm px-5">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100 auto">About Me</Link></li>
          </ul>
        </div>
      
      </nav>
    </div>
  );
}

