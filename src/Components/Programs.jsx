import React from 'react';


function Programs() {
  return (
    <section className=' w-[80%] m-auto  my-6'>


 


      <div className='container'>
        <p className='text-purple-600'>Explore Programming</p>
        <h6 className='text-3xl font-bold'>Our Most Popular Class</h6>
        <p className='text-gray mb-5'>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>

        <div className='flex w-full m-auto items-center justify-center gap-4  flex-col md:flex-row'>
          <ProgramCard
            imgSrc={"/assets/images/p1.png"}
            category='Design'
            title='Figma Ul Ux Design..'
            description='Use Figma to get a job in UI Design, User Interface, User Experience design'
            rating={4.3}
            ratingsCount={16325}
            avatar={"/assets/images/p1.png"}
            instructorName='Jane Cooper'
            enrollmentCount={2001}
            price={17.84}
          />
          <ProgramCard
            imgSrc={"/assets/images/p2.png"}
            category='Design'
            title='Learn With Shoaib..'
            description='Design websites and mobile apps that your users love return to again'
            rating={3.9}
            ratingsCount={832}
            avatar={"/assets/images/p1.png"}
            instructorName='Jenny Wilson'
            enrollmentCount={2001}
            price={8.99}
          />
          <ProgramCard
            imgSrc={"/assets/images/p3.png"}
            category='Design'
            title='Building user interface..'
            description='Learn how to apply user experience (UX) principles to your website designs'
            rating={4.2}
            ratingsCount={125}
            avatar={"/assets/images/p1.png"}
            instructorName='Esther Howard'
            enrollmentCount={2001}
            price={11.70}
          />
        </div>
      </div>
    </section>
  );
}

export default Programs;


function ProgramCard({ imgSrc, category, title, description, rating, ratingsCount, avatar, instructorName, enrollmentCount, price }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 mr-2">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={imgSrc} alt="" />
      </a>
      <div className="ml-4">
        <div>
          <p className='text-purple-600'>{category}</p>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>

        <div className="flex items-center mt-2.5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded bg-blue-200 text-blue-800">{rating}</span>
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">({ratingsCount})</span>
          </div>
        </div>
        <div className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src={avatar} alt={instructorName} />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className=" text-gray-500 truncate text-gray-400">{instructorName}</p>
              <p className="text-sm text-gray-500 truncate text-gray-400">{enrollmentCount} Enrolled</p>
            </div>
            <div className="inline-flex mr-4 text-base font-semibold text-purple-600">{`$${price}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}