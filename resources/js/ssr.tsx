import '../css/app.css'
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import DefaultLayout from './Layouts/Default'

export default function render(page) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const page = require(`./Pages/${name}.vue`).default;
  
      if(!page.layout) {
        page.layout = DefaultLayout
      }
  
      return page
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin);
    },
  });
}