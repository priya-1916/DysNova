import React from 'react'
import "../Home/Home.css"
import home_img from "../../assets/home_pic.jpeg"


const Home = () => {
  return (
      <>
      <main>
      
        <section>
        <div className='ml-30 mt-40 text-5xl font-bold '> Breaking Barriers,<br /> <div className='ml-15'>Building Futures</div></div>
        <p className='mt-4 ml-30 mr-220'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quos, doloribus sunt nihil cupiditate impedit rerum nisi laboriosam quo quae! Nisi quis, asperiores debitis dolores deleniti nemo dolor vitae deserunt!</p>
        <button class='button-style'>Take a Free test <i className="fa-solid fa-greater-than ml-5 "></i></button>
        <div className='flex space-x-20  mt-30 ml-30'>
        <div className='font-semibold text-2xl'><i className="fa-solid fa-gamepad mr-4 fa-2x"></i>Interactive games</div>
        <div className='font-semibold text-2xl'><i className="fa-solid fa-people-line mr-4 fa-2x"></i>Expert Guidance</div>
        <div className='font-semibold text-2xl'><i className="fa-solid fa-check mr-4 fa-2x"></i>Free Testing</div>
        </div>
        </section>
        <aside>
          {/* <img src={home_img} alt="" /> */}
        </aside>
        
        </main>
    
      </>
  )
}

export default Home
