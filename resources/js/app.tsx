import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import DefaultLayout from './Layouts/Default'
import { Link } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}.vue`).default;

    if(!page.layout) {
      page.layout = DefaultLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('inertia-link', Link)
      .mount(el)
  },
})