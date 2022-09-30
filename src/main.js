import Vue from 'vue'
import App from './App.vue'

/* import router */
import router from './router'

/* import bootstrap */
import 'bootstrap/dist/css/bootstrap.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faChevronRight, faChevronLeft)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


import 'bootstrap/dist/js/bootstrap.js'