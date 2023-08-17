import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';
import { products } from '../Data/products';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    // navigate = move next place
    const navigate = useNavigate()
    // declear state product 
    const[filterProduct,setFilterProduct]=useState([])
    const [search,setProduct] = useState([])
    const[products,setProducts] =useState()
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable:true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable:true
        },
        {
            name: 'Photos',
            selector: row => <img src={row.images} alt="products" style={{width :"60px"}} />
        },
        {
            name: 'Action',
            selector: row =><button
             type='button'
             // navigate move to next slide ,{move with something}
             onClick={() => navigate("/edit",{
                state: row
             })}
              className='btn btn-primary'
            >Edit</button>
        },
    ];
    useEffect(() =>{
        fetchProducts()
        .then(resp => setFilterProduct(resp))
    }, [])

     useEffect(()=>{
        const result = filterProduct.filter(pro=> {
            return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
        }) 
        setFilterProduct(result) 
    },[search])
  return (
    <div className='container'>
        <DataTable
        columns={columns}
        data={filterProduct}
        pagination
        subHeader
        subHeaderComponent={
            <input 
            type='text'
            placeholder='search here..'
            className='form-control'
            value={search}
            onChange={(e) => {
                setProduct(e.target.value)
                console.log(search)
            }}
            />
        }
        
        />
    </div>
    
    
  )
}
