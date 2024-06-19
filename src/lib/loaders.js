import axios from "axios"
import { defer } from "react-router-dom"


axios.defaults.withCredentials = true;
// eslint-disable-next-line no-unused-vars
export const singlePage = async({request,params}) => {
      
    // eslint-disable-next-line no-undef
    const res = await axios.get(`https://urbannest-backend-244i.onrender.com/api/post/` + params.id)
    console.log(params.id);
    return res.data
}

// eslint-disable-next-line no-unused-vars
export const ListPage = async({request,params}) => {
    
    
 const query = request.url.split("?")[1]

    // eslint-disable-next-line no-undef
    const postPromise = axios.get(`https://urbannest-backend-244i.onrender.com/api/post?` + query )
    return defer({
        postResponse: postPromise
    })
}
export const ProfilePageloader = () => {

    // eslint-disable-next-line no-undef
    const chatPromise = axios.get(`https://urbannest-backend-244i.onrender.com/api/chat`)
    // eslint-disable-next-line no-undef
    const postPromise = axios.get(`https://urbannest-backend-244i.onrender.com/api/user/profileposts`)
   
    return defer({
        chatResponse: chatPromise,   
        postResponse: postPromise
    })
}