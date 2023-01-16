// import { defineStore } from 'pinia'
// import { calendarEventsApi } from './api'

// const useCalendarEventsStore = defineStore('calendarEvents', {
//   state: () => ({
//     calendarEvents: [],
    // user: false

//   }),

//   actions: {
//     async loadCalendarEvents() {
//       const response = await calendarEventsApi.getAll()

//       this.calendarEvents = response.data

//       return response
//     },
    // updateUser(state,payload){
    //     state.user = payload;
    // }
//   }
// })

// export default useCalendarEventsStore


import { persist } from 'pinia-persists'
import { createPinia } from 'pinia'

const pinia = createPinia()

pinia.use(persist())

export default pinia