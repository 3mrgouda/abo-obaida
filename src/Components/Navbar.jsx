import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-white p-4">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <h1 className=" text-xl mb-3text-gray-300rounded-md font-bold"> Ed-Circle.</h1>
              </div>

              <div className='mt-2 ml-2  d-flex  mb-3 ml-4 'id='v'>
                <input type="search" name="" id="" placeholder=' what to learn ?' className='border-0' />              
              
                <div class="relative ">

                  <button class="hover:bg-blue-700 w-100 h-5 mt-2  text-purple-600  font-bold p-2 rounded inline-flex items-center">
                    <span>Explore</span>
                    <svg class="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 11l6-6H4z" />
                    </svg>
                  </button>

                  <ul class="absolute hidden bg-white text-purple-600 pt-1 w-32 rounded shadow-lg">
                    <li><a class="hover:bg-gray-200 block px-4 py-2" href="#">Option 1</a></li>
                    <li><a class="hover:bg-gray-200 block px-4 py-2" href="#">Option 2</a></li>
                    <li><a class="hover:bg-gray-200 block px-4 py-2" href="#">Option 3</a></li>
                  </ul>
                </div>
                </div>

              
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4  mr-28">
                  <ul>

                  <li href="#" className="text-black px-3 py-2 text-sm font-medium mt-2 ">Program</li>
                  <li href="#" className="text-black px-3 py-2 text-sm font-medium mt-2 ">Enterprise</li>
                  <li href="#" className="text-black px-3 py-2 text-sm font-medium mt-2">Universities</li>
                  </ul>

                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class=" text-black rounded-md ">sign in </button>
            <button class=" bg-purple-600 rounded-sm p-2 ml-3 text-white rounded shadow">create free account </button>
          </div>
            </div>
            </div>
            </div>
            </nav>
    </div>

  )
}

export default Navbar