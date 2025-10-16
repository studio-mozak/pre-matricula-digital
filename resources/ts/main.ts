import '@/plugin/slugify';
import '@/plugin/sortby';
import '@/validator';
import '@/assets/sass/index.scss';
import 'v-tooltip/dist/v-tooltip.css';

import { Honeybadger, honeyBadgerConfig } from '@/packages';
import { RouterView } from 'vue-router';
import VTooltip from 'v-tooltip';
import { createApp } from 'vue';
import filters from '@/filters';
import { registerComponents } from '@/components';
import router from '@/router';
import store from '@/store';
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(RouterView);

app.use(router);

app.use(store);

app.use(VTooltip);

app.use(CKEditor);

app.provide('$filters', filters);

if (import.meta.env.MODE === 'production') {
  app.use(Honeybadger, honeyBadgerConfig);
  registerComponents(app);
}

app.mount('#app');

// Deploy
