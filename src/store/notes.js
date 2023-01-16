import { defineStore } from 'pinia'
import { notesApi } from '../api'

const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
    user : false,
  }),

  actions: {
    async loadNotes() {
      const response = await notesApi.getAll()

      this.notes = response.data

      return response
    },
    updateUser(state,payload){
        state.user = payload;
    },

    async createNote(data) {
      const response = await notesApi.createNote(data)

      this.notes = response.data

      return response
    }
  }
})

export default useNotesStore