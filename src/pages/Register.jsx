
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const Register = () => {


    const [error, setError] = useState()
    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async(e) => {
         setIsLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(username, email, password);


        try {
 
            // eslint-disable-next-line no-undef
            const res = await axios.post(`https://urbannest-backend-244i.onrender.com/api/auth/register` , {
            username,
            email,
            password
        })
        console.log(res.data);
        navigate('/login')
            
        } catch (error) {
             console.log(error);
             setError(error.response.data.message)
        }finally{
            setIsLoading(false)
        }
        
    }

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2 items-center justify-center ">
        <form onSubmit={handleSubmit}  className='flex flex-col justify-center items-center gap-3 w-[40%]' >
          <h1 className='text-2xl font-bold ' >Create an Account</h1>
          <input name="username" type="text" placeholder="Username" className='border border-green-200 p-2 h-10 rounded-md w-full' />
          <input name="email" type="text" placeholder="Email" className='border border-green-200 p-2 h-10 rounded-md w-full ' />
          <input name="password" type="password" placeholder="Password" className='border border-green-200 p-2 h-10 rounded-md w-full'  />
          <button disabled={isLoading}  className='w-full bg-yellow-300 h-10 rounded-md font-semibold'  >Register</button>
          {error && <span className='text-red-500 text-sm  ' >{error}</span>}
          <Link to="/login" className='underline' >Do you have an account?</Link>
        </form>
      </div>
      <div  className="bg-[#fcf5f3] md:flex hidden  w-full h-full  md:w-[40%]  pb-5 rounded-md " >
        <img src="/bg.png" alt="img" className="object-cover w-full"  />
      </div>
    </div>
  )
}

export default Register