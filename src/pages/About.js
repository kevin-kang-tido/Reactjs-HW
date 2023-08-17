import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_all_products } from '../redux/actions/productAction'
import LodingView from '../components/LodingView'
import { Show_api } from '../components/Card'
import { Link } from 'react-router-dom'

export default function About() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)

  // loading page
  const [isloading, setLoading]= useState(true);

  useEffect(() =>{
    dispatch(fetch_all_products())
  },[])


  return (
    <>
    <div>
        <h1>
            Welcome to "Aout_Us pages"
        </h1>
        {
          console.log(products)
        }
    </div>

    <div className='container mt-5 w-75'>
      <div className='row g-4'> 
        <h1>Get Products</h1>
        <button type="button" class="btn btn-dark">[GET] https://api.escuelajs.co/api/v1/products</button>   
        {
          isloading ?  
          <>
          <div className='col-12 col-xl-3'>
            <LodingView/>
          </div>
          <div className='col-12 col-xl-3'>
            <LodingView/>
          </div>
          <div className='col-12 col-xl-3'>
            <LodingView/>
          </div>
          <div className='col-12 col-xl-3'>
            <LodingView/>
          </div>

          </>

        

          : products.map((product) =>(
                <div
                key={product.id}
                className='col-12 col-sm-6 col-xl-3'>
                  <Link to={`/read/${product.id}`} className='text-decoration-none'>
                    <Show_api
                    titiless={product.title}
                    imageURll={product.images[0]}
                    descc={product.price}
                    />
                  </Link>


                  {/* cards here */}
                </div>  
          ))

        }
    
    </div>
    </div>


    </>
    
  )
}
