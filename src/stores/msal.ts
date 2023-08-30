import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMSALStore = defineStore('msal', () => {
  const msalConfig = ref({
    auth: {
      clientId: `${import.meta.env.VITE_CLIENT_ID}`,
      authority: `${import.meta.env.VITE_AUTHORITY}`,
    },
    cache: {
      cacheLocation: 'localStorage',
    },
  })

  const accessToken = ref('')

  function setAccessToken(newValue) {
    accessToken.value = newValue
  }

  return { msalConfig, accessToken, setAccessToken }
})
