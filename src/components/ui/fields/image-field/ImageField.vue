<template v-if="src">
  <UiFieldWrap v-if="showTitle" :title="title">
    <div class="image-field ses-content">
      <img :src="src" :alt="alt" loading="lazy" class="image__with-preloader" />
    </div>
  </UiFieldWrap>
</template>

<script setup lang="ts">
import { UiFieldWrap } from '@/components/ui';

type Props = {
  title: string;
  src: string;
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
    max-width: auto;
  }
}
</style>
