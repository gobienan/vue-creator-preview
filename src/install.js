import CreatorPreview from './CreatorPreview.vue';

export default {
  install(Vue) {
    Vue.component('vue-creator-preview', CreatorPreview);
  },
};

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.CreatorPreview = CreatorPreview;
}
