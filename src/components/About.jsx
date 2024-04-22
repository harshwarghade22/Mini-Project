import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function AboutUs() {
  return (
    <div className='w-full h-screen bg-zinc-900 '>
      <div className='text-[#fff] flex flex-col justify-center items-center h-[50%] w-full bg-cover bg-center bg-zinc-900 bg-[url("https://images.unsplash.com/photo-1562414872-25fe978523d1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <h1 className='text-7xl font-bold mb-4 leading-none tracking-tight'>About us</h1>
        <p className='text-md font-semibold w-[50%] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, corporis? Officiis, rem sed. Vero aut, cum numquam ullam voluptatum qui.</p>
      </div>
      <div className='h-[50%] w-full flex'>
        <div className='h-full w-1/2 text-[#fff] flex justify-center items-center flex-col gap-3'>
          <h1 className='text-5xl font-extrabold tracking-tight mb-10'>Our Mission</h1>
          <p className='text-left w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis mollitia. Hic, debitis quam. Facilis natus iste voluptates et quo.</p>
          <p className='text-left'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='h-full w-1/2 p-8 flex items-center justify-center'>
          <div className='h-[80%] w-[90%] rounded-md overflow-hidden'>
            <div className='w-full h-1/2 mb-2'>
              <img className='hover:position-right h-full w-full object-cover position-center' src="https://plus.unsplash.com/premium_photo-1694030762806-a147368e944c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
            </div>
            <div className='w-full h-1/2 flex gap-2'>
              <div className='w-1/2 h-full'>
                <img className='h-full w-full object-cover position-center' src="https://plus.unsplash.com/premium_photo-1694030762987-4775dc16e9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
              <div className='w-1/2 h-full'>
                <img className='h-full w-full object-cover position-center' src="https://plus.unsplash.com/premium_photo-1694030762789-395e90c61720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen  bg-zinc-900'>
        <h1 className='uppercase text-7xl font-extrabold text-zinc-100 tracking-tight text-center bg-gradient-to-r from-zinc-500'>Meet our team</h1>
        <div className='flex justify-evenly items-center h-[400px] w-full  mt-[15vh]'>
          {/* First Card */}
          <div className='h-[350px] w-[250px] bg-zinc-100 rounded-lg overflow-hidden flex flex-col items-center justify-center relative'>
            <img className='rounded-full h-24 w-24 mb-4 object-cover position-top ' src='https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D' alt='Team Member' />
            <h1 className='font-semibold text-xl mb-2 tracking-tight leading-none text-black'>Ankit Vishwakarma </h1>
            <p className='text-center px-4 font-semibold leading-none tracking-tight text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mauris vitae purus posuere porta.</p>
            <div className='absolute bottom-4 left-4 flex items-center gap-3'>
              <a href='#' className='text-blue-400 hover:text-blue-700'><FaLinkedin /></a>
              <a href='#' className='text-blue-800 hover:text-blue-700'><FaTwitter /></a>

            </div>
          </div>

          {/* Second Card */}
          <div className='h-[350px] w-[250px] bg-zinc-100 rounded-lg overflow-hidden flex flex-col items-center justify-center relative'>
            <img className='rounded-full h-24 w-24 mb-4 object-cover position-top' src='https://images.unsplash.com/photo-1644941339764-dcdcfbae0fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHMlMjAlMjBtYWxlfGVufDB8fDB8fHww' alt='Team Member' />
            <h1 className='font-semibold text-xl mb-2 tracking-tight leading-none text-black'>Harsh Warghade </h1>
            <p className='text-center px-4 font-semibold leading-none tracking-tight text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mauris vitae purus posuere porta.</p>
            <div className='absolute bottom-4 left-4 flex items-center gap-3'>
              <a href='#' className='text-blue-400 hover:text-blue-700'><FaLinkedin /></a>
              <a href='#' className='text-blue-800 hover:text-blue-700'><FaTwitter /></a>

            </div>
          </div>

          {/* Third Card */}
          <div className='h-[350px] w-[250px] bg-zinc-100 rounded-lg overflow-hidden flex flex-col items-center justify-center relative'>
            <img className='rounded-full h-24 w-24 mb-4 object-cover position-top' src='https://plus.unsplash.com/premium_photo-1674639437824-771a65f1738b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvdHJhaXRzfGVufDB8fDB8fHww' alt='Team Member' />
            <h1 className='font-semibold text-xl mb-2 tracking-tight leading-none text-black'>Soham Vichare </h1>
            <p className='text-center px-4 font-semibold leading-none tracking-tight text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget mauris vitae purus posuere porta.</p>
            <div className='absolute bottom-4 left-4 flex items-center gap-3'>
              <a href='#' className='text-blue-400 hover:text-blue-700'><FaLinkedin /></a>
              <a href='#' className='text-blue-800 hover:text-blue-700'><FaTwitter /></a>

            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-screen w-full bg-zinc-900  '>
        <div className='w-1/2 h-full  flex flex-col justify-center items-center text-white text-6xl font-bold'>
      <h1>Why Choose</h1>
      <h1><span className='text-yellow-500'>Home</span>versity ?</h1>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='h-[450px] w-[650px]  '>
            <div className='h-1/2 w-full  mb-2 flex gap-2'>
              <div className='w-1/2 h-full bg-pink-200 flex justify-center items-center flex-col text-center p-3 rounded-2xl'>
                <h1 className='font-bold text-3xl tracking-tight mb-4'>More Experience</h1>
                <p className='font-semibold tracking-tighter leading-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas architecto atque tempore, consectetur in explicabo velit rem amet sint repudiandae.</p>
              </div>
              <div className='w-1/2 h-full bg-pink-500 flex justify-center items-center flex-col text-center p-3 rounded-2xl'>
              <h1 className='font-bold text-3xl tracking-tight mb-4'>Ideology</h1>
                <p className='font-semibold tracking-tighter leading-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas architecto atque tempore, consectetur in explicabo velit rem amet sint repudiandae.</p>

              </div>

            </div>
            <div className='h-1/2 w-full  flex gap-2'>
            <div className='w-1/2 h-full bg-pink-800 flex justify-center items-center flex-col text-center p-3 rounded-2xl'>
            <h1 className='font-bold text-3xl tracking-tight mb-4'>You Come First</h1>
                <p className='font-semibold tracking-tighter leading-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas architecto atque tempore, consectetur in explicabo velit rem amet sint repudiandae.</p>

            </div>
              <div className='w-1/2 h-full bg-pink-100 flex justify-center items-center flex-col text-center p-3 rounded-2xl'>
              <h1 className='font-bold text-3xl tracking-tight mb-4'>Innovation with impact</h1>
                <p className='font-semibold tracking-tighter leading-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas architecto atque tempore, consectetur in explicabo velit rem amet sint repudiandae.</p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
    
  );
}

export default AboutUs;
