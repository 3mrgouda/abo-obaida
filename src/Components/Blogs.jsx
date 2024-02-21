import React from 'react'
import '../style/blog.css'
function Blogs() {
  return (
    <div className='container2 mb-20 p-5 mx-auto'>
      <h1 className='title text-2xl font-bold mb-5 text-center text-[#101828]'>Our Recent Blog</h1>
      <div className='blogs'>
        <div className='first'>
          <div className='firstblog mb-[30px]'>
            <div className='img'>
              <img src="/assets/Blog/blog2.png" alt="" />
            </div>
            <div className='content'>
              <p className='text-[#6941C6]'>November 16, 2014</p>
              <h1 className='font-bold mt-3 '>Three Pillars of User Delight</h1>
              <p className='text-[#667085] mt-3'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
              <div className='end'>
                <p className='text-[#C11574] ml-5'>Research</p>
                <p className='text-[#027A48] ml-5'>UI UX</p>
              </div>
            </div>{/* content */}
          </div>{/* firstblog */}
          <div className='secondblog'>
            <div className='img'>
              <img src="/assets/Blog/blog2.png" alt="" />
            </div>
            <div className='content'>
              <p className='text-[#6941C6]'>September 24, 2017</p>
              <h1 className='font-bold mt-3 '>UX Mapping Methods</h1>
              <p className='text-[#667085] mt-3'>Visual-design principles can be applied consistently throughout the process of creating a polished UX map...</p>
              <div className='end'>
                <p className='text-[#C11574] ml-5'>Research</p>
                <p className='text-[#027A48] ml-5'>UI Design</p>
              </div>
            </div>{/* content */}
          </div>{/* secondblog */}
        </div>{/* First */}


        <div className='second2'>
          <div className='img2'>
            <img src="/assets/Blog/blog3.png" className='' alt="" />
          </div>
          <div className='content2'>
            <p className='text-[#6941C6] mt-3'>March 13, 2014</p>
            <h1 className='font-bold mt-3 text-xl'>Agile Development Projects and Usability</h1>
            <p className='text-[#667085] mt-3'>Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>
            <div className='end2'>
              <p className='text-[#6941C6] ml-5'>Programming</p>
              <p className='text-[#6941C6] ml-5'>Programming</p>
              <p className='text-[#C11574] ml-5'>Developments</p>
            </div>
          </div>{/* content */}
        </div>{/* second */}
      </div>
    </div>
  )
}

export default Blogs