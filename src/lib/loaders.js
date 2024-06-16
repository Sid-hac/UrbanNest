import axios from "axios"
import { defer } from "react-router-dom"


axios.defaults.withCredentials = true;
// eslint-disable-next-line no-unused-vars
export const singlePage = async({request,params}) => {
      
    const res = await axios.get("http://localhost:5000/api/post/" + params.id)
    console.log(params.id);
    return res.data
}

// eslint-disable-next-line no-unused-vars
export const ListPage = async({request,params}) => {
    
    
 const query = request.url.split("?")[1]

    const postPromise = axios.get("http://localhost:5000/api/post?" + query )
    return defer({
        postResponse: postPromise
    })
}
export const ProfilePageloader = () => {

    const chatPromise = axios.get("http://localhost:5000/api/chat")
    const postPromise = axios.get("http://localhost:5000/api/user/profileposts")
   
    return defer({
        chatResponse: chatPromise,   
        postResponse: postPromise
    })
}