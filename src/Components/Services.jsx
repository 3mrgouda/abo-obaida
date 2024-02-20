import React from 'react'


function Card({ title, icon, text }) {

  return (
    <>
      <div className='lg:w-[373px] md:w-2/4 w-[90%] mx-auto  h-[243px] py-8 px-8 mt-8 bg-white text-black hover:bg-main group hover:text-white text-left rounded-md duration-[0.4s] shadow-lg'>
        <div className='flex items-center '>
          <img className='mr-4' src={icon} alt="" />
          <h1 className='md:text-xl text-  font-bold'>{title}</h1>
        </div>

        <p className='text-left my-8 text-gray group-hover:text-white'>{text}</p>
        <a href="!#" className='text-main font-bold group-hover:text-white'>Learn More </a>
      </div>
    </>
  )
}
function Services() {
  const Cards = [
    {
      title: "Design",
      icon: "/assets/Services/Card Icon - 1.png",
      text: "Lessons on design that cover the most recent developments."
    },
    {
      title: "Web Development",
      icon: "/assets/Services/Card Icon - 2.png",
      text: "Classes in development that cover the most recent advancements in web."
    },
    {
      title: "Backend",
      icon: "/assets/Services/Card Icon - 3.png",
      text: "Marketing courses that cover the most recent marketing trends"
    }
  ]
  return (
    <>
      <div className="md:w-[80%] w-full flex flex-col justify-center py-4 text-center mx-auto">
        <h1 className='text-main text-md font-bold py-2'>Our Services</h1>
        <h1 className='text-xl md:text-4xl font-bold'>Fostering a playful & engaging learning <br /> environment</h1>
        {/*Text*/}
        <div className='flex lg:flex-row md:flex-wrap flex-col justify-center md:justify-between py-8'>
          {Cards.map((card, id) => {
            return <Card title={card.title} icon={card.icon} text={card.text} key={id} />
          })}
        </div>
        {/*Cards*/}
      </div>
    </>
  )
}

export default Services