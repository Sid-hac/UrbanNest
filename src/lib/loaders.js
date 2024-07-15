import axios from "axios"
import { defer } from "react-router-dom"


axios.defaults.withCredentials = true;

export const singlePage = async({params}) => {
      
    
    const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/post/` + params.id)
    return res.data
}

export const ListPage = async({request}) => {
    
    
 const query = request.url.split("?")[1]

    const postPromise = axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/post?` + query )
    return defer({
        postResponse: postPromise
    })
}
export const ProfilePageloader = () => {

    const chatPromise = axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/chat`)
  
    const postPromise = axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/profileposts`)
   
    return defer({
        chatResponse: chatPromise,   
        postResponse: postPromise
    })
}