
// short cut rfc
import React, { useEffect, useState } from 'react'
import { Show_api } from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LodingView from '../components/LodingView';


export default function Home() {
    // declear variable (const)
    const [count,setCount] = useState(0);
    // count store set setCount

    // Products
    const [products,setProducts] = useState([]);
        //loding View part
     const [isloading, setLoading]=useState(true);
    const fetchProducts = () => {
        // get api
        fetch('https://api.escuelajs.co/api/v1/products?limit=8&offset=0')
        .then(rep => rep.json())
        .then(resp =>{
          setProducts(resp)
          setLoading(false)

        })
    }
    // Category
    const [category,setcategories] = useState([]);
    const fetchCategory = () => {
        // get api
        fetch('https://api.escuelajs.co/api/v1/categories?limit=4')
        .then(rep => rep.json())
        .then(resp => setcategories(resp))
    }
    //User
    const [User,setUser] = useState([]);
    const fetchUser = () => {
        // get api
        fetch('https://api.escuelajs.co/api/v1/users?limit=4')
        .then(rep => rep.json())
        .then(resp => setUser(resp))
    }






    useEffect(()  =>{
      // called api
        fetchProducts()
        fetchCategory()
        fetchUser()
    })

  return (
    <main>
        {/* <Navbar/> */}
        <h1>YOU Clicked {count} Time</h1>
        <button type="button" class="btn btn-danger" onClick={()=>setCount(count + 1)}>Click Me!</button>
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
                  <Show_api
                  titiless={product.title}
                  imageURll={product.images[0]}
                  descc={product.price}
                  />
                  {/* cards here */}
                </div>  
          ))

        }
    
    </div>
    </div>
    <div className='container mt-5 w-75'>
      <div className='row g-4'>
          <h1>Get Categories</h1>
          <button type="button" class="btn btn-dark">[GET] https://api.escuelajs.co/api/v1/products</button>   
          {
                category.map((categories) =>(
                  <div
                  key={categories.name}
                  className='col-12 col-sm-6 col-xl-3'>
                    <Show_api
                    titiless={categories.name}
                    imageURll={categories.image}
                    // descc={categories.name}
                    />
                  </div>
                ))
            }
          </div>
        </div>
        <div className='container mt-5 w-75'>
        <div className='row g-4'>
        <h1>Get User</h1>
        <button type="button" class="btn btn-dark">[GET] https://api.escuelajs.co/api/v1/products</button>   
          {
            User.map((userr) =>(
              <div
              key={userr.id}
              className='col-12 col-sm-6 col-xl-3'>
                <Show_api
                titiless={userr.email}
                imageURll={userr.avatar}
                // descc={userr.description}
                />
              </div>
            ))
          }
        </div>
        </div>

    {/* <Footer/> */}
    </main>
  )
}
