import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // e.g. { id, name, email, isAdmin }
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    login(userData, token) {
      this.user = userData
      this.token = token
    },
    logout() {
      this.user = null
      this.token = null
    },
  },
})
