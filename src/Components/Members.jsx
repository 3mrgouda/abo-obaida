import React from 'react'

function Members() {
  return (
    <section className='w-[80%] mx-auto text-center '>
      <h1 className='text-main font-bold'>Members</h1>
      <h2 className='text-3xl text-black font-bold'>Meet the Heroes</h2>
      <p className='text-gray w-[50%] mx-auto'>Our team is made up of passionate individuals who are passionate about what they do.</p>

      <div className='flex md:flex-row md:flex-wrap flex-col w-full items-center justify-center gap-8 mt-10'>
        <Card image="/assets/Tutors/Gemy.jpg" name="Youssef Gemy" position="Full Stack Developer" description="Software Engineer with 10 years of experience. He has worked in various industries." />
        <Card image="/assets/Tutors/Mustafa.jpg" name="Mustafa Gamal" position="Full Stack Developer" description="Software Engineer with 10 years of experience. He has worked in various industries." />
        <Card image="/assets/Tutors/Y1.png" name="Youssef AbdElaziz" position="Full Stack Developer" description="Software Engineer with 10 years of experience. He has worked in various industries." />
        <Card image="/assets/Tutors/Afsha.jpg" name="Mohamed Magdy" position="Full Stack Developer" description="Software Engineer with 10 years of experience. He has worked in various industries." />
        <Card image="/assets/Tutors/amr.jpg" name="amr goda " position="Full Stack Developer" description="Software Engineer with 10 years of experience. He has worked in various industries." />

      </div>

    </section>
  )
}

export default Members





function Card({ image, name, position, description }) {
  return (
    <>
      <div className='bg-[#F9FAFB] p-4 w-[276px] min-h-[340px] flex flex-col items-center justify-between hover:-translate-y-2 transition-all capitalize'>
        <img className='w-32 object-cover  h-32 rounded-full' src={image} alt="" />
        <h1 className='text-black font-bold text-xl '>{name}</h1>
        <h3 className='text-main' >{position}</h3>
        <p className='text-gray'>{description}</p>

        <div className='w-full flex items-center justify-center p-1 gap-3 '>
          <div className='cursor-pointer '><img src="/assets/Twitter.svg" alt="" /></div>
          <div className='cursor-pointer '><img src="/assets/LinkedIn.svg" alt="" /></div>
        </div>

      </div>
    </>
  )
}