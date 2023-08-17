import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUpLoadToServer, insertProduct, onFileUpLoad, updatetProduct } from '../services/productAction';
import { useLocation } from 'react-router-dom';

export default function ProductForm({edit}) {

    // get data  form navigation
    const location = useLocation()

    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: [
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        ]
    })
    // caught the data and show in console.log
    const onChangeHandler = (e) => {
        const {name,value} = e.target;
        console.log(name)
        console.log(value)
        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }


    //handleOnSubmit
    const handleOnSubmit = () => {
        // alert("Okayy!");
        console.log("ON SUBMIT!")
        // create image Object forom data
        // Object for insert image
        // const formData = new FormData()
        // formData.append("file", source)

        // funtion to upload image data to server
        // fileUpLoadToServer(formData)
        // .then(res =>{
        //     product.images=[res.data.location]
        //     console.log(product.images)
        //      insertProduct(product)
        //     .then(res => res.json())
        //     .then(resp => console.log(resp)) 

        // })
        // end the function


        // check codition whether update or insert products
        if(edit){
            // source is equal ot "", it mean that user update wiht old image
            if(source==""){
                console.log("Show Product Id:",product.id)
                console.log("Show categories Id:",product.categoryId)
                updatetProduct(product,product.id)
                .then(resp => resp.json())
                .then(res => console.log(res))

            }else{
                // User choose or select the file (new) images
                const image = new FormData()
                image.append("file",source)
                fileUpLoadToServer(image)
                .then(resp =>{
                    product.images= [resp.data.location]
                    updatetProduct(product, product.id)
                    .then(res => res.json())
                    .then(res => console.log(res))

                })
            }
        }else{
            // Insert new data or new products
            console.log("ON SUBMIT!")
            // create image Object forom data
            // Object for insert image
            const newimage = new FormData()
            newimage.append("file", source)

            //funtion to upload image data to server
            fileUpLoadToServer(newimage)
            .then(res =>{
                product.images=[res.data.location]
                console.log(product.images)
                 insertProduct(product)
                .then(res => res.json())
                .then(resp => console.log(resp)) 

            })
            // end the function

        }
    }
    // preview parts
    const [source, setSource]= useState("");

    const OnPreviewImage =(e) =>{
        console.log(e.target.files)
        setSource(e.target.files[0])
    }


    // called Categoies api to option
    const [categories, setCategoies] = useState([])
    useEffect(() => {
                 // 
                 console.log(edit);
                 if(edit){
                     console.log(location.state)
                     const {id,title,price, description, category, images} = location.state
                     product.id = id
                     product.title = title
                     product.description = description
                     product.price = price
                     product.categoryId = category.id
                     product.images= images
         
                     console.log(product.images)
         
                 }

        fetchCategories()
        .then(res => setCategoies(res))

    },[])

  return (
    <main className="container">
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="title" 
                name='title'
                value={product.title}
                placeholder="Magic Mouse"
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="price"className="form-label">Price $</label>
            <input 
            type="text" 
            className="form-control"
             id="price"
             name='price'
             value={product.price} 
             placeholder="300$"  
             onChange={onChangeHandler}
             />
        </div>
        <div className="mb-3">
            <label for="category" className="form-label">Choose Category</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            id=''
            name='categoryId'
            value={product.categoryId}
            onChange={onChangeHandler}
            >
                <option selected>Choose Categoies</option>
                {
                    categories && categories.map(cate =>(
                        <option value={cate.id}>{cate.name}</option>

                    ))
                }
        
            </select>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea
         className="form-control" 
         id="exampleFormControlTextarea1" 
         rows="3" 
         name='description'
         value={product.description}
         onChange={onChangeHandler}>
         </textarea>
        </div>
        {/* preview area */}
        <div className='mb-3 preview'>
            
            <img 
            src={source =="" ? product.images[0] : URL.createObjectURL(source)}
            // src={edit ? product.images[0] : URL.createObjectURL(source)}
            // src={edit && URL.createObjectURL(source)}
            alt='Preview Image'
            style={{width:230}}
            />
        </div>
        {/* Choose file erea */}
        <div className='mb-3'>
            <input type='file' onChange={OnPreviewImage}/>
            <button
            type='file'
            className=''
            >   
            </button>
        </div>

        <button 
        type="button"
        class="btn btn-outline-primary"
        onClick={() => handleOnSubmit()}
        >{edit ? "Update Product":"Insert Product"}</button>
    </main>
  )
}
