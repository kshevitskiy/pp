import { createApp } from 'vue'
import App from '~/App.vue'
import Router from '~/router'
import { initUserList } from '~/composables/user-list'

// Global CSS style
import '~/style/index.css'

function removeLoader(): void {
  document.getElementById('loader')?.remove()
}

async function bootstrap(): Promise<void> {
  await initUserList()
  removeLoader()

  createApp(App).use(Router).mount('#app')
}

bootstrap()
