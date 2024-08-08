import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import CanvasModel from '../canvas';
import { useSnapshot } from 'valtio';
import state from '../stores';
import Sidebar from './Sidebar';
import { useStateContext } from '../context/StateContext';
import { MdOutlineCancel } from 'react-icons/md';
import Product from '../containers/Product';
import { Link } from 'react-router-dom';

const Hero = () => {
  const snap = useSnapshot(state);
  const { activeMenu, setActiveMenu } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && snap.intro) {
      setActiveMenu(false);
      state.intro = false;
    }
  }
 
  return (
    <section className='w-full h-screen mx-auto'>
      {!snap.intro ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg glassmorphism">
          <button type='button' onClick={() => handleCloseSideBar()} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
            <MdOutlineCancel />
          </button>
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 h-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}

      <div>
        <div>
          {snap.products ? (
            <AnimatePresence>
              <Product />
            </AnimatePresence>
          ) : (
            <div>
              <>
                <div className='absolute inset-0 top-[120px] max-sm:max-w-fit max-w-6xl mx-auto z-0 left-80 sm:px-6 px-10 flex flex-row items-start gap-5'>
                  <AnimatePresence>
                    {/* <CanvasModel /> */}
                  </AnimatePresence>
                </div>
                {snap.intro ? (
                  <AnimatePresence>
                  {/* <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 h-screen sm:h-80 violet-gradient' />
                    <div className='h-1 w-screen sm:h-80 violet-gradient' />
                  </div> */}
                  <div className='absolute top-[120px] max-w-7xl mx-auto sm:px-6 px-6 flex flex-col justify-center items-center gap-5'>
                    <div>
                      <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading=[98px]'>LET'S IMAGINE <br />TOGETHER</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <p className='max-w-md font-normal text-gray-200 text-base'>Design your unique shirt with our brand new 3D customization tool. Visualize your imagination and show it to the rest.</p>
                    </div>
                    <div className='absolute top-[296px] max-w-7xl mx-auto px-6 flex z-10'>
                      <button type='button' onClick={() => state.intro = false} className='w-fit px-4 py-2.5 font-bold text-sm rounded-2xl bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95% border-none mt-1 cursor-pointer text-white'>Customize It</button>
                    </div>
                  </div>
                
                  <div className='absolute xs:bottom-10 bottom-32 w-full pt-4 flex justify-center items-center'>
                    <Link to=''>
                      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                          animate={{
                            y: [0, 24, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                          className='w-3 h-3 rounded-full bg-secondary mb-1' />
                      </div>
                    </Link>
                  </div>
                </AnimatePresence>
                ) : (
                  <>
                    <AnimatePresence>
                        <>
                          <motion.div
                            key='custom'
                            className='absolute top-0 left-0 z-10'
                          >
                            <div className='flex items-center min-h-screen'>
                              {/* <div className='flex flex-col w-16 rounded-lg border-[2px] glassmorphism justify-center items-center ml-1 py-4 gap-4'>

                              </div> */} 
                            </div>
                          </motion.div>
                        </>
                    </AnimatePresence>
                  </>
                )}
              </>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
