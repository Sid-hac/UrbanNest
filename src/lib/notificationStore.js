import axios from 'axios'

import { create } from 'zustand'

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch : async() => {
     // eslint-disable-next-line no-undef
     const res =  await axios.get(`http://localhost:5000/api/user/notification`)
     set({number : res.data})
  },
  decrease : () => {
    set((state) => ({number : state.number - 1}))
  },
  reset : () => {
    set({number : 0})
  }
  
}))