import axios from 'axios'

import { create } from 'zustand'

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch : async() => {
     const res =  await axios.get(`https://urbannest-backend-244i.onrender.com/api/user/notification`)
     set({number : res.data})
  },
  decrease : () => {
    set((state) => ({number : state.number - 1}))
  },
  reset : () => {
    set({number : 0})
  }
  
}))