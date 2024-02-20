import React from 'react'
function Hero() {
  return (
    <div className='hero w-[80%] m-auto px-14'>
      <section className='top  flex justify-between items-center '>



         <div className="text-hero w-[40%] grid gap-5 ">
          <img className='absolute left-[9em]  top-28 w-80 -z-10' src="assets/Hero/main-bg-circles-text.png" alt="" />
          <img className='absolute right-[9em]  top-96 -z-10 w-80' src="assets/Hero/main-bg-circles-text.png" alt="" />
        <h2 className='text-6xl font-bold capitalize'>up your <span className='text-main'>skills</span><br/>
to <span className='text-main'>advance</span>  your <br/> <span className='text-main'>career</span>  path</h2>
<p className='text-[#646464] text-xl font-light text-[1em]'>Provides you with the latest online learning system and material <br/> that help your knowledge growing.</p>
<div className="btn-text-hero text-xl">
  <button className='text-white bg-main rounded-md p-4 border-solid border-2 border-[#F4EBFF] mr-7 '>Get Started</button>
<button className='text-main bg-[#F4EBFF] p-4 rounded-md'>Get free trail</button>
</div>

<div className="skills flex absolute top-[58%]">
  <div className="icon flex items-center mr-6">
    <img className='mr-1 w-[2em] h-[2em]' src="/assets/Hero/Public-speaking.png" alt="" />
    <p className='text-[#1D2939] opacity-80 text-[.9em]'>Public Speaking</p>
  </div>
  
  <div className="icon flex items-center mr-6">
    <img className='mr-1 w-[2em] h-[2em]'src="/assets/Hero/career-oriented.png" alt="" />
    <p className='text-[#1D2939] opacity-80 text-[.9em]'>career-oriented</p>
  </div>

  <div className="icon flex items-center mr-6">
    <img className='mr-1 w-[2em] h-[2em]'src="/assets/Hero/creative-thinking.svg" alt="" />
    <p className='text-[#1D2939] opacity-80 text-[.9em]'>creative thinking</p>
  </div>
 
</div>

      </div>








      <div className="img-hero w-[40%] flex items-center justify-center ">
        
                  <img className='aspect-square bg-main rounded-full w-full ' src="assets/Hero/obaida.png" alt="" />
      </div>




     
      </section>

      <section className='bottom-hero flex items-center justify-center my-14  '>
      <img className='w-full' src="assets/Hero/bottom-hero.png"  alt="" />

      </section>
    </div>
  )
}

export default Hero