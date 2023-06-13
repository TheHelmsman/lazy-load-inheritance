import { createApp } from 'vue';
import App from './App.vue';
import directives from '@/directives';
import { CustomDirective } from '@/type';

const app = createApp(App);

(directives as Array<CustomDirective>).forEach((directive: CustomDirective) => {
  app.directive(directive.name, directive);
});

app.mount('#app');
