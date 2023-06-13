<template v-if="src">
  <UiFieldWrap v-if="showTitle" :title="title">
    <div v-lazyload class="image-field ses-content">
      <img :data-url="source" :alt="alt" />
    </div>
  </UiFieldWrap>
</template>

<script setup lang="ts">
import { UiFieldWrap } from '@/components/ui';

type Props = {
  title: string;
  source: string;
  alt: string;
  showTitle?: boolean;
};

withDefaults(defineProps<Props>(), {
  title: '',
  src: '',
  alt: '',
  showTitle: true,
});
</script>

<style lang="scss" scoped>
.image-field {
  text-align: center;
  width: 100%;
  color: $black;
  img {
    max-width: 100%;
  }
}
</style>
