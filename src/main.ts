import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueParticles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

const app = createApp(App)
app.mount('#app')
app.use(VueParticles, {
    init: async engine => {
        await loadSlim(engine)
    }
})
