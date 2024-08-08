import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import { fetchFromAPI, productListURL } from '../utils';
import Hero from '../components/Hero';
import HeroBanner from '../components/HeroBanner';
import FooterBanner from '../components/FooterBanner';
import { useParams } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import state from '../stores';

const Home = () => {
  const snap = useSnapshot(state);
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
  })

  const { id } = useParams();

  const fetchCategory = async () => {
      try{
          const response = await axios.get(productListURL);

          setCategories(response.data);
      } catch(err){
          console.log(err);
      }
  }
    
  useEffect(() => {
      fetchCategory();
      try{
        fetchFromAPI(`banner/1`).then((data) => {setBanner(data)});
      } catch(err) {
        console.log(err);
      }
  }, [id]);
  return ( 
    <div className='p-0'>
      <HeroBanner heroBanner={banner} />
      <div className='text-center m-10 text-gray-700'>
        <h2 className='font-medium text-[40px]'>CCTV Camera and Security Products</h2>
        <p className='font-small text-base'>CCTV Cameras of many variations</p>
      </div>
      
      <div className='flex flex-wrap lg:flex-nowrap justify-center gap-4 mt-5 w-full p-4'>
        {categories?.map((category) => <Product key={category.id} category={category} />)}
      </div>
      <FooterBanner footerBanner={banner} />
    </div>
    
  )
}

export default Home
