import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState()

  const Links = [
    { title: "Program", url: "/" },
    { title: "Enterprise", url: "/" },
    { title: "Universities", url: "/" },
  ]
  const options = [
    { title: "Explore", url: "/" },
    { title: "2", url: "/" },
    { title: "3", url: "/" },
  ]
  return (
    <>
      <div className="lg:w-[80%] w-full lg:justify-center md:justify-between mx-auto relative z-10 flex items-center lg:py-2 py-5 bg-white">
        <section className='flex gap-2 mx-4 lg:w-[40%] md:w-[40%] items-center'>
          <img src="/assets/Navbar/Navbar - Icon.png" className='mt-2 md:mt-0 px-6 md:px-0' alt="logo" />
          <h1 className='text-lg font-bold w-full mt-2 lg:w-36'>Ed-Circle.</h1>
        </section>


        <ul className={`lg:w-[70%] w-full  z-[1] absolute lg:static bg-white items-center text-center flex flex-col lg:flex-row transition-all ease-in duration-500 lg:opacity-100 ${open ? "top-[75px] opacity-100" : "top-[-360px] opacity-0 z-[-1]"} `}>
          <div className='relative md:py-4 lg:w-[80%] md:w-[60%] '>
            <input type="text" className='lg:w-80 w-full ring-2 ring-gray ring-opacity-30 rounded-lg py-2 px-12' placeholder='Want to learn?' />
            <img src="/assets/Navbar/search.png" className='absolute left-3 top-1/2 -translate-y-1/2' alt="" />
            <select className='absolute right-[2px] md:top-[18px] top-[2px] py-[7px] px-3 bg-main bg-opacity-10 text-main font-semibold rounded-md'>
              {
                options.map((option) => {
                  return (
                    <option className='' value={option.title}>{option.title}</option>
                  )
                })
              }
            </select>
          </div>
          {
            Links.map((link) => {
              return (
                <li className='lg:mx-5 py-4 md:py-4 lg:py-0 focus:font-semibold font-bold active:font-semibold cursor-pointer hover:text-main duration-300 md:bg-none '><a href={link.url}>{link.title}</a></li>
              )
            })
          }
        </ul>

        <span className='lg:hidden absolute right-6 mt-3 '>
          <button onClick={() => setOpen(!open)} className=' cursor-pointer'><IoIosMenu className='text-3xl text-center' /></button>
        </span>
        <section className='hidden md:flex flex-row px-10 lg:w-[40%] w-[50%] '>
          <button className='mr-5 text-sm font-medium hover:text-main duration-300 lg:w-[30%]' >Sign in</button>
          <button className='px-5 py-2 lg:w-44 md:w-[60%] bg-main active:ring-4 ring-gray ring-opacity-25 hover:bg-shade2 duration-200 text-white text-sm rounded-md focus:ring focus:ring-tint1 '>Create free account</button>
        </section>
      </div>
    </>
  )
}

export default Navbar