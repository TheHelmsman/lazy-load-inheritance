import { DirectiveBinding } from 'vue';

export default {
  name: 'lazyload',
  beforeMount: (el: HTMLImageElement, binding: DirectiveBinding & { arg: Array<string> }) => {
    type Observer = {
      root: any;
      threshold: number | number[] | undefined;
    };
    function loadImage() {
      const imageElement = Array.from(el.children).find((el) => el.nodeName === 'IMG') as HTMLImageElement;
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100);
        });
        imageElement.addEventListener('error', () => console.log('error'));
        imageElement.src = imageElement.dataset.url ?? '';
      }
    }

    function handleIntersect(entries: any, observer: IntersectionObserver) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options: Observer = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window['IntersectionObserver']) {
      console.log('createObserver');
      createObserver();
    } else {
      console.log('loadImage');
      loadImage();
    }
  },
};
