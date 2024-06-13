import axios from "axios"
import { defer } from "react-router-dom"



// eslint-disable-next-line no-unused-vars
export const singlePage = async({request,params}) => {
      
    const res = await axios.get("http://localhost:5000/api/post/" + params.id )
    return res.data
}

// eslint-disable-next-line no-unused-vars
export const ListPage = async({request,params}) => {
    
    
 const query = request.url.split("?")[1]

    const postPromise = axios.get("http://localhost:5000/api/post/?" + query )
    return defer({
        postResponse: postPromise
    })
}