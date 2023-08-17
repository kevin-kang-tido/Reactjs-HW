import axios from "axios";
import { base_URL } from "../utils/constant";


// Categoies part insert
export const fetchCategories = async () => {
    // base_URl have categories api just like a(x+1)
    let resp = await fetch(`${base_URL}categories/`,{
        method: "GET"
    });
    return resp.json()
}
    // get api
 export const fetchProducts = async() => {
    let resp = await fetch(`${base_URL}products`)
    return resp.json()
}

//MARK : Create funtion to insert product
export const insertProduct = async (product) => {
    let resp = await fetch(`${base_URL}products`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        // JSON stringigy use for submit to server.
        body:JSON.stringify(product)
    })
    return resp;
}
/// MARk :: funtion to insert file such as image or  PDF ets;
// file upload
export const fileUpLoadToServer = async (image) => {
    let resp = await axios({
        method:"POST",
        headers:{
            "Content-Type":"multipart/form-data"
        },
        url:`${base_URL}files/upload`,
        data:image   
    })
    return resp
}

// MARK :: Update product by product id
export const updatetProduct = async (product, id) => {
    let resp = await fetch(`${base_URL}products/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        // JSON stringigy use for submit to server.
        body:JSON.stringify(product)
    })
    return resp
}
