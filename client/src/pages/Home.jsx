/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {motion, AnimatePresence} from 'framer-motion'
import{ useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import{ 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state)

  return (
   <AnimatePresence>
    {snap.intro && ( //check if we are on the home page
        <motion.section className='home' {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>  
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='x1:block hidden' /> DO IT.
              </h1>
            </motion.div>
           <motion.div
           {...headContentAnimation}
           className='flex-flex-col gap-5'
           >
            <p className='max-w-md font-normal text-gray-600 text-base pb-3'>
              Create your unique and exclusive shirt with our
              brand-new 3D customization tool. <strong>Unleash your imagination</strong>
              {" "}and define your style.
            </p>

            <CustomButton
            type= 'filled'
            title= 'Start Now'
            handleClick={() => state.intro = false}
            customStyles= 'w-fit px-4 py-2.5 font-bold text-sm'
            />
           </motion.div>
          </motion.div>
        </motion.section>
    )}
   </AnimatePresence>
  )
}

export default Home