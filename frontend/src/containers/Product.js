import React, { useEffect, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utilities/motion';
import CanvasModel from '../canvas';
import axios from 'axios';
import { fetchFromAPI, productListURL } from '../utils';
import state from '../stores';
import { useSnapshot } from 'valtio';
import HeroBanner from '../components/HeroBanner';

const ProductCard = ({ category: { id, image, name, slug, price } }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.5, 0.75)}
    className='black-gold-gradient w-auto p-[1px] rounded-[20px] shadow-card'
  >
    <Link to={`product/${id}`} >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] min-w-fit flex justify-center items-center flex-col'
      >
        <div className='absolute inset-0 flex justify-end m-3'>
          <div className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src='./DisenosDoradosLogo.png' alt='likes' className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
        <CanvasModel />
        <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        <h3 className='text-[#fbce08] font-extrabold mt-[6px]'>KSH {price}</h3>
      </div>
    </Link>
    
  </motion.div>
);

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [banner, setBanner] = useState({
    'buttonText': '',
    'desc': '',
    'discount': '',
    'image': '',
    'largeText1': '',
    'largeText2': '',
    'midText': '',
    'saleTime': '',
    'smallText': ''
  });
  // const [generatingImg, setGeneratingImg] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const fetchCategory = async () => {
      try{
          const response = await axios.get(productListURL);

          setCategories(response.data);
          // setGeneratingImg(true);

          // handleDecals('logo', response.data.image)
      } catch(err){
          console.log(err);
      } finally {
        // setGeneratingImg(false);
      }
  };

  useEffect(() => {
    fetchCategory();
    // handleImageGeneration('logo');
    // try{
    //   fetchFromAPI(`banner/1`).then((data) => {setBanner(data)});
    // } catch(err) {
    //   console.log(err);
    // }
    try{
      fetchFromAPI(`banner/1`).then((data) => {setBanner(data)});
    } catch(err) {
      console.log(err);
    }
  }, []);

  const handleImageGeneration = async (type) => {
    try {
      // setGeneratingImg(true);
      // handleDecals(type, c)

      readFile(type);
    } catch (error) {
      alert(error);
    } finally {
      // setGeneratingImg(false);
    }
  };

  const readFile = (type) => {
    const reader = (type) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(type);
    });
    reader(type).then((result) => {
      handleDecals(type, result);
    });
  }
  
  const handleDecals = (type, result) => {
    const decalType = state.types[type];

    state[decalType.stateProperty] = result;
    
    if(!activeFilterTab[decalType.filterTab]) {
      switch(decalType.filterTab) {
        case "logoShirt":
          state.isLogoTexture = !activeFilterTab[decalType.filterTab];
          break;
        case "stylishShirt":
          state.isFullTexture = !activeFilterTab[decalType.filterTab];
          break;
        default:
          state.isLogoTexture = true;
          state.isFullTexture = false;
          break;
      }

      setActiveFilterTab((prevState) => {
        return {
          ...prevState,
          [decalType.filterTab]: prevState[decalType.filterTab]
        }
      })
    }
    // after setting state, activeFilterTab is updated
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [decalType.filterTab]: !prevState[decalType.filterTab]
      }
    })
  }

  return (
    <div className='h-screen overflow-x-hidden relative w-full'>
      <HeroBanner heroBanner={banner} />
      <div className='flex flex-wrap justify-center gap-4 mt-5 p-4 overflow-auto'>
        {categories?.map((category) => <ProductCard key={category.id} category={category} />)}
      </div>
    </div>
  )
}

export default Product
