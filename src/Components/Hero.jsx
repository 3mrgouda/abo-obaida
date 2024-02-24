
import React from 'react'

function Hero() {
  const Skills = [
    {
      id: 1,
      img: "/assets/Hero/Public-speaking.png",
      p: "Public Speaking"
    },
    {
      id: 2,
      img: "/assets/Hero/career-oriented.png",
      p: "career-oriented"
    },
    {
      id: 1,
      img: "/assets/Hero/creative-thinking.svg.png",
      p: "creative thinking"
    },
  ]
  return (
    <>
      <div className='w-[80%] max-lg:w-[90%]  my-20 mx-auto  '>
        <div className="container flex justify-between items-center">

          {/* text section area */}
          <div className='flex flex-col text-left  gap-3 md:w-3/4 2xl:w-2/3 '>
            <h2 className='2xl:leading-[1.5] text-5xl 2xl:text-7xl max-lg:text-4xl font-bold capitalize leading-[1.3]'>up your <span className='text-main'>skills</span><br className='2xl:hidden' />
              to <span className='text-main'>advance</span>  your <br className='2xl:hidden' /> <span className='text-main'>career</span> path</h2>
            <p className='text-gray  text-xl font-light max-lg:text-[.9em] 2xl:text-2xl 2xl:font-extralight'>Provides you with the latest online learning system and material <br className='hidden ' />  that help your knowledge growing.</p>
            <div className="grid grid-cols-2 gap-16 max-lg:text-xs 2xl:gap-10 2xl:w-1/2 text-xl">
              <button className='text-white bg-main rounded-md px-3 py-4 text-nowrap'>Get Started</button>
              <button className='text-main bg-[#F4EBFF] py-4 px-3 rounded-md text-nowrap'>Get free trail</button>
            </div>
            {/* circles bg-text */}
            <div className="circle bg-main w-2 top-32 left-28 max-lg:left-12 xl:top-36  xl:left-24 absolute aspect-square rounded-full"></div>
            <div className="circle bg-main w-5 xl:top-40 xl:left-28 top-40 max-lg:top-36  left-36 max-lg:left-16 absolute aspect-square rounded-full"></div>
          </div>


          {/* main img */}
          <div className='grid place-items-center max-lg:place-items-end max-lg:w-full'>
            <div className="ringl border-main border-2 border-solid 2xl:w-[25%] aspect-square absolute rounded-full top-16 2xl:top-36 xl:top-36 xl:right-48 xl:w-[29%] -z-10 right-[17rem] 2xl:right-[17rem]"></div>
            <img className='bg-main rounded-full w-3/4 aspect-square' src="assets/Hero/obaida.png" alt="" />
          </div>


          {/* img card absolutes */}
          <img className='absolute max-lg:hidden xl:w-[10%] 2xl:top-36 2xl:right-60  top-32 right-[210px]' src="assets/Hero/online.png" alt="" />
          <img className='absolute max-lg:hidden right-[550px] xl:w-[15%] 2xl:right-[550px]  xl:right-[420px]' src="assets/Hero/video.png" alt="" />
          <img className='absolute max-lg:hidden right-40 top-96 xl:top-96 xl:right-32 xl:w-[15%]' src="assets/Hero/tutors-card.png" alt="" />
          {/* skills section */}
          <div className="skills flex absolute  2xl:top-[65%] xl:top-[535px] xl:text-[17px] max-lg:top-[490px] max-lg:text-[10px]">
            {
              Skills.map(({ id, img, p }) => (
                <div key={id} className="icon flex items-center mr-6">
                  <img className='mr-1 w-[2em] h-[2em]' src={img} alt="" />
                  <p className='text-[#1D2939] opacity-80 text-[.9em]'>{p}</p>
                </div>

              ))
            }
          </div>
          {/* circles bg */}
          <div className="circle bg-main w-10 max-lg:w-7 max-lg:right-96 max-lg:top-[500px] aspect-square rounded-full absolute top-[450px] 2xl:top-[600px] xl:top-[500px] 2xl:right-[650px] xl:right-[500px]"></div>
          <div className="circle bg-main w-4  max-lg:w-3 max-lg:right-36 max-lg:top-[500px] aspect-square rounded-full absolute top-[600px] right-[510px] xl:right-[346px] 2xl:right-[418px] xl:top-[550px] 2xl:top-[670px]"></div>
        </div>
        <section className='bottom-hero flex items-center justify-center my-16  '>
          <img className='w-full' src="assets/Hero/bottom-hero.png" alt="" />

        </section>
      </div>
      {/* index circles */}
      <img className='absolute left-[5em] max-lg:w-40 max-lg:left-[1em]  top-28 2xl:w-80 xl:w-60 -z-10' src="assets/Hero/main-bg-circles-text.png" alt="" />
      <img className='absolute right-[15em] max-lg:w-40 max-lg:right-[5em] max-lg:top-[35%] xl:right-40 xl:top-[55%]  top-[40%] -z-10 2xl:w-80 xl:w-60' src="assets/Hero/main-bg-circles-text.png" alt="" />


    </>
  )
}

export default Hero;
