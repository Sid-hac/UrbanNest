import axios from 'axios'

import { create } from 'zustand'

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch : async() => {
     const res =  await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/notification`)
     set({number : res.data})
  },
  decrease : () => {
    set((state) => ({number : state.number - 1}))
  },
  reset : () => {
    set({number : 0})
  }
  
}))