import React, { useEffect, useRef } from 'react'
import 'flickity/dist/flickity.css'
import '../style/Flickity.css'
import Flickity from 'flickity';
function User({ name, info }) {
  return (
    <div className="flex flex-col">
      <img src="/assets/Comment/user.png" className="w-fit mx-auto" alt="" />
      <h1 className="text-md font-medium">{name}</h1>
      <p className="text-sm font-normal text-gray">{info}</p>
    </div>
  )
}

function UserComment({ name, info }) {
  return (
    <div className='carousel-cell w-[100%] bg-[#F9FAFB] flex flex-col mx-auto text-center py-16 my-8'>
      <section className="flex items-center justify-center gap-4">
        <img src="/assets/Comment/Comment - Icon.png" alt="" />
        <h1 className="text-lg font-bold">Ed-Circle.</h1>
      </section>
      <h1 className="lg:text-6xl md:text-2xl text-md px-4 py-6 font-medium ">
        Courses was fantastic! It is Master platform for those <br /> looking to start a new career, or need a refresher.
      </h1>
      <section className="py-8">
        <User name={name} info={info} />
      </section>
    </div>
  )
}
function Comment() {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity on the element
    flickityRef.current = new Flickity('.main-carousel', {
      autoPlay: true
    });

  }, []);
  return (
    <>
      <div className='my-4'>
        <div className="main-carousel" data-flickity='{ "autoPlay": true }'>
          <UserComment name={"Jacob Jones"} info={"Student, National University"} />
          <UserComment name={"Jacob Jones"} info={"Student, National University"} />
          <UserComment name={"Jacob Jones"} info={"Student, National University"} />
        </div>
      </div>
    </>
  )
}

export default Comment