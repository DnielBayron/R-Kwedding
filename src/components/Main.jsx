import {TypeAnimation} from 'react-type-animation';
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import ExamplePdf from '../assets/Deniel Philip Bayron_CV-1.pdf';
import { useState } from 'react';

export const Main = () => {

  return (
    <div id="main">
    <img className="w-full h-screen object-cover object-bottom" src="https://images.unsplash.com/photo-1602934585418-f588bea4215c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="deniel-img" />
    <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div  className=' pb-[100px] max-w-[1100px] w-full h-full flex flex-col m-auto justify-center  xl:items-start items-center  '>
            <h1 className=' sm:text-6xl text-5xl font-bold text-gray-950 font-Nunito'> Stay Tune!! <br>🤵🏻💕👰🏻 </br>  </h1>
           

            
        </div>
    </div>
    </div>
  )
};
