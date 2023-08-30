<script setup lang="ts">
import { ref } from 'vue'
import { useMSALStore } from '@/stores/msal'
import { PublicClientApplication } from '@azure/msal-browser'

const account = ref(null)
const store = useMSALStore()

async function init() {
  store.msalInstance = new PublicClientApplication(store.msalConfig)
  await store.msalInstance.initialize()
}

async function SignIn() {
  if (store.msalInstance === null) {
    await init()
  }

  await store.msalInstance.loginRedirect({})
    .then(() => {
      const myAccounts = store.msalInstance.getAllAccounts()
      account.value = myAccounts[0]
    })
    .catch(error => {
      console.error(`error during authentication: ${error}`)
    })
}

async function SignOut() {
  if (store.msalInstance === null) {
    await init()
  }

  await store.msalInstance.logout({})
    .then(() => {
      account.value = null
    })
    .catch(error => {
      console.error(error)
    })
}
</script>

<template>
  <div>
    <h3>GTS - Login</h3>

    <pre>{{ account }}</pre>

    <button @click="SignIn">SignIn</button>
    <button @click="SignOut">SugnOut</button>
  </div>
</template>
