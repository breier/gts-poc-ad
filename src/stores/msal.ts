import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMSALStore = defineStore('msal', () => {
  const msalConfig = ref({
    auth: {
      clientId: `${import.meta.env.VITE_CLIENT_ID}`,
      authority: `${import.meta.env.VITE_AUTHORITY}`,
      knownAuthorities: [`${import.meta.env.VITE_KNOWN_AUTHORITIES}`],
      redirectUri: `${import.meta.env.VITE_REDIRECT_URI}`,
    },
    cache: {
      cacheLocation: 'localStorage',
    },
  })
  const msalInstance = ref(null)
  const accessToken = ref('')

  return { msalConfig, msalInstance, accessToken }
})
