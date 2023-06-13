import { createApp } from 'vue';
import App from './App.vue';
import directives from '@/directives';
import { CustomDirective } from '@/type';
// import VueLazyload from 'vue-lazyload';

const app = createApp(App);

(directives as Array<CustomDirective>).forEach((directive: CustomDirective) => {
  app.directive(directive.name, directive);
});

// app.use(VueLazyload, {
//   preLoad: 1.3,
//   observer: true,
//   loading: '/src/assets/preloader.gif', // TODO: temp gif
// });

app.mount('#app');
