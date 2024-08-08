import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { fetchFromAPI } from '../utils';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import Product from './Product';
import CanvasModel from '../canvas';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState({
    'categories': '',
    'brand': '',
    'description': '',
    'id': '',
    'image': '',
    'image_caption': '',
    'meta_description': '',
    'meta_keyword': '',
    'name': '',
    'price': '',
    'sku': '',
    'slug': '',
    'stock': ''
  });
  const { name, description, image, image_caption, price } = productDetail;
  const { decreaseQuantity, increaseQuantity, qty, onAdd } = useStateContext();

  const { id } = useParams();

  const fetchProducts = () => {
    try {
      fetchFromAPI(`products`).then((data) => setProducts(data));
    } catch(err) {
      console.log(err);
    }
  };

  // const fetchProduct = () => {
  //   try {
  //     fetchFromAPI(`product/${id}/`).then((data) => setProductDetail(data));
  //   } catch(err) {
  //     console.log(err);
  //   }
  // };
  
  useEffect(() => {
    try {
      fetchFromAPI(`product/${id}`).then((data) => setProductDetail(data));
    } catch(err) {
      console.log(err);
    }
    // fetchProduct();
    fetchProducts();
    // const fetchProduct = async () => {

    //   try{
    //     const response = await axios.get(productDetailURL);
    //     console.log(response.data);

    //     setProduct({ 
    //       "categories" : response.data.categories,
    //       'brand': response.data.brand,
    //       'description': response.data.description,
    //       'id': response.data.id,
    //       'image': response.data.image,
    //       'image_caption': response.data.image_caption,
    //       'meta_description': response.data.meta_description,
    //       'meta_keyword': response.data.meta_keyword,
    //       'name': response.data.name,
    //       'price': response.data.price,
    //       'sku': response.data.sku,
    //       'slug': response.data.slug,
    //       'stock': response.data.stock
    //     });
    //   } catch(err){
    //       console.log(err);
    //   }
    // }
    // fetchProduct();
  }, [id]);
  return (
    <div>
      <div 
        className='flex flex-col md:flex-col sm:flex-col gap-10 m-10 mt-20 text-slate-700'
      >
        <div>
          <div className='rounded-[15px] flex flex-wrap max-w-[200px] md:w-[200px] h-[250px] justify-start items-start m-10 right-80'>
            {/* <CanvasModel /> */}
          </div>
          <div className=''></div>
        </div>
        <div className='mt-[10px]'>
          <h1>{name}</h1>
          <div className='text-red-500 mt-[10px] flex gap-[5px] items-center'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className='text-gray-400 mt-0'>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{description}</p>
          <p className='font-bold text-[26px] mt-[30px] text-red-600'>KSH {price}</p>
          <div className='flex gap-[20px] mt-[10px] items-center'>
            <h3>Quantity: </h3>
            <p className='border-solid border-[1px] border-gray-400 p-[6px] flex flex-row'>
              <span className='p-[6px] cursor-pointer text-[16px] border-r-[1px] border-solid border-r-gray-400' onClick={decreaseQuantity}><AiOutlineMinus /></span>
              <span className='p-[6px] cursor-pointer text-[16px] border-r-[1px] border-solid border-r-gray-400' onClick=''>{qty}</span>
              <span className='p-[6px] cursor-pointer text-[16px] text-green-400' onClick={increaseQuantity}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='flex gap-[30px] pt-[10px] pr-5 mt-10 text-[18px] font-medium cursor-pointer w-[200px] scale-100 duration-500 ease-in-out'>
            <button type='button' className='border-[1px] border-solid border-red-600 bg-white text-red-600 hover:scale-110' onClick={() => onAdd(productDetail, qty)}>Add To Cart</button>
            <button type='button' className='bg-red-600 text-white hover:scale-110' onClick={() => onAdd(productDetail, qty)}>Buy Now</button>
          </div>
        </div>
      </div>
      {/* <div className='mt-[120px]'>
        <h3 className='text-[29px] font-semibold m-[50px] text-[#324d67] text-center'>You may also like</h3>
        <div className='h-[300px] overflow-x-hidden relative w-full'>
          <div className='absolute flex justify-center gap-4 mt-5 w-[180%] whitespace-nowrap will-change-transform animate-marquee'>
            {products?.map((item) => (
              <Product key={item.id} category={item} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProductDetail
