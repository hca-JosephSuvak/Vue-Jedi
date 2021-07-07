import Vue from 'vue'
import Meta from 'vue-meta'
import TemplePage from './TemplePage.vue'

Vue.config.productionTip = false

Vue.use(Meta, {
  Meta: 'Meta'
})

new Vue({
  render: h => h(TemplePage),
}).$mount('#Jedi')
