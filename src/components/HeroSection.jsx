import {motion} from 'framer-motion';
import headphone from '../assets/headphone2.png';
import headphone2 from '../assets/headphone3.png';
import headphone3 from '../assets/headphone4.png';
import headphn from '../assets/headphone.jpg';
import { FaRegCompass } from "react-icons/fa6";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useEffect, useState } from 'react';

const varients = [{
    id: 1,
    color: "green",
    img: headphone
},
{
    id: 2,
    color: "purple",
    img: headphone2
},
{
    id: 3,
    color: "gray",
    img: headphone3
},
]

const HeroSection = () => {
    const [isForward, setIsForward] = useState(true); 
    const [index, setIndex] = useState(0);
    const [imageSrc, setImgSrc] = useState(headphone);
    // const handleImgChange = () => {
    //     if(imageSrc == 'headphone') {
    //         setImgSrc(headphn);
    //     } else if(imageSrc == 'headphn' ) {
    //         setImgSrc(headphone)
    //     }
    // }
    // useEffect(() => {
    //     console.log("rerender")
    // }, index)

    const handleForward = ()=> {
        setIsForward(true);
        // if(index + 1 > varients.length()) {
        //     setIndex(0);
        // } else{
        //     setIndex((prev) => prev + 1)
        // }
        setIndex((prev) => prev + 1)
    }
    const handleBackward = ()=> {
        setIsForward(false);
        // if(index - 1 < 0) {
        //     setIndex(varients.length() -1);
        // } else{
        //     setIndex((prev)=> prev - 1);
        // }
        setIndex((prev)=> prev - 1);
    }

  return (
    <div className='flex items-center justify-between mx-auto h-full'>
        <div className=" flex flex-col gap-5 max-w-[600px] -translate-y-0">
        <motion.div className='overflow-y-hidden' key={index} initial={{y: isForward ? -500 : 500}} animate={{y:0}} transition={{ ease: "easeOut", duration: 1 }} >
            <h1 className="text-3xl font-semibold">DB-PLUSE</h1>
            {/* <h1 className="text-5xl leading-relaxed font-bold">The<span className={` ${varients[index].color === 'purple' ? 'text-pink-500' : 'text-green-500'} font-bold`}> ultimate listining</span> <br />experience</h1> */}
            <h1 className="text-5xl leading-relaxed font-bold">The<span className={`${"text-"+varients[index].color+"-500"} font-bold`}> ultimate listining</span> <br />experience</h1>
            <h2 className="mt-[20px] text-sm font-semibold text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur mollitia dicta dolore cupiditate dignissimos accusamus, qui iusto eligendi sint saepe est quae deserunt debitis? Inventore maxime dignissimos earum quis beatae!</h2>
            <div className="flex justify-between gap-10 items-center mt-10 text-lg font-semibold">
                <h1 className=''>Active Noise Cancellation</h1>
                <h1>40H Battery life</h1>
            </div>
        </motion.div>
            <div className="mt-16">
               
            <motion.button whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className="bg-pink-500 rounded-[30px] w-[200px] px-8 py-4 font-semibold text-white hover:drop-shadow-md hover:shadow-pink-400">Explore </motion.button>
            {/* <FaRegCompass /> */}
            </div>
        </div>
        <div className='-translate-y-10 '>
            {/* <h1>ImageContainer</h1> */}
            <div className='relative'>
            <motion.img className='z-1 bg-transparent -translate-x-50 mr-3' src={varients[index].img} key={index} style={{height: '500px'}} alt="image" initial={{x:isForward?400 : -400,y: isForward?-600:800}} animate={{x: isForward ? 0 : 0, y: isForward ? 0 : 0}} transiton={{ ease: "easeOut", duration: 8, delay:1 }}  />
            <div className={`h-[450px] w-[450px] rounded-full ${varients[index].color === "green" ? 'bg-green-500' : 'bg-pink-500'} absolute right-15 top-20 transform ease-in-out duration-200 z-[-1] -translate-x-10`}></div>
            <div className={`h-[550px] w-[550px] rounded-full border ${varients[index].color === 'green' ? 'border-green-500' : "border-pink-500"} absolute left-[-10] top-0 transform ease-in-out duration-200 z-[-1] -translate-x-20 translate-y-8`}></div>
            </div>
            <div className='flex justify-end mt-20 text-green-500 gap-5'>
                <motion.div className='h-[40px] w-[40px] rounded-full bg-slate-300 flex items-center' onClick={ handleBackward }>
                <IoMdArrowDropleft size={30} />
                </motion.div>
                <motion.div className='h-[40px] w-[40px] rounded-full bg-slate-300 flex items-center' onClick={ handleForward} >
                <IoMdArrowDropright size={30} />
                </motion.div>
            </div>
        </div>
      </div>
  )
}

export default HeroSection