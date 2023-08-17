
// shorts cut rfc
import React, { useEffect, useState } from 'react'
import { Show_api } from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LodingView from '../components/LodingView';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/productAction';
import { fetchAllCategories, fetch_all_products } from '../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux'


export default function Home(){
    //state mangements
    const dispatch = useDispatch()
    const {products}= useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    // declear variable (const)....
    const [count,setCount] = useState(0);
    // count store set setCount

    // Products
    //Here just  local state!
    // const [products,setProducts] = useState([]);
        //loding View part
    //  const [isloading, setLoading]=useState(true);

     // cut to ProductAtion

    // Category
    // const [category,setcategories] = useState([]);
    // const fetchCategory = () => {
    //     // get api
    //     fetch('https://api.escuelajs.co/api/v1/categories?limit=4')
    //     .then(rep => rep.json())
    //     .then(resp => setcategories(resp))
    // }
    // //User
    // const [User,setUser] = useState([]);
    // const fetchUser = () => {
    //     // get api
    //     fetch('https://api.escuelajs.co/api/v1/users?limit=4')
    //     .then(rep => rep.json())
    //     .then(resp => setUser(resp))
    // }



    useEffect(()  =>{
      // calle to api
      // call funtion form ProductAtion
      // fetchProducts()
      // .then(resp =>{
      //   setProducts(resp)
      //   setLoading(false)
      // })
      //   // fetchProducts()
      //   fetchCategory()
      //   fetchUser()

      // subscribe to store
      dispatch(fetch_all_products())
      dispatch(fetchAllCategories())
    }, [])

  return (
    <main>
        {/* <Navbar/> */}
        <h1>YOU Clicked {count} Time</h1>
        <button type="button" class="btn btn-danger" onClick={()=>setCount(count + 1)}>Click Me!</button>
    <div className='container mt-5 w-75'>
      <div className='row g-4'> 
        <h1>Get Products</h1>
        <button type="button" class="btn btn-dark">[GET] https://api.escuelajs.co/api/v1/products</button>   
        
        {/* {
          console.log(products && products)
        }
        {
          console.log(categories && categories)
        } */}
        
        {
          isLoading ?  
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

          :products.map((product) =>(
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
                categories.map((categories) =>(
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
            {
              console.log(categories)
            }
          </div>
        </div>
        <div className='container mt-5 w-75'>
        <div className='row g-4'>
        <h1>Get User</h1>
        <button type="button" class="btn btn-dark">[GET] https://api.escuelajs.co/api/v1/products</button>   
          {/* {
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
          } */}
        </div>
        </div>

    {/* <Footer/> */}
    </main>
  )
}
