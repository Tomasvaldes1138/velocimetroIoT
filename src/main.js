import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'



import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'


// Create a new store instance.
const store = createStore({
    state () {
        token: null
    },
    mutations: {  setToken(state, token) {
        state.token = token;
      }
    }
  })

const app = createApp(App)


app.use(router)

app.mount('#app')
