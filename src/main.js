import Vue from 'vue'
//import Meta from 'vue-meta'
import TemplePage from './TemplePage.vue'

Vue.config.productionTip = false

/*Vue.use(Meta, {
  Meta: 'Meta'
})*/

new Vue({
  render: h => h(TemplePage),
}).$mount('#Jedi')

/*export default {
  name: 'Jedi Site',
  metaInfo: {
    title: 'Jedi Temple',
    titleTemplate: '%s | Overview of The Order',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An landing page for all you want to know Jedi.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}*/