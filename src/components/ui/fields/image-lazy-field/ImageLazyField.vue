<template v-if="src">
  <div v-lazy-container="{ selector: 'img' }" class="ses-section__components" role="combobox">
    <ImageField :data-src="setImage()" />
  </div>
</template>

<script setup lang="ts">
import { ImageField } from '@/components/ui';
import { ref } from 'vue';

type Props = {
  src: string;
};

const props = defineProps<Props>();

const imageSrc = ref('');

const setImage = () => {
  return (imageSrc.value = props.src);
};
</script>

<style lang="scss" scoped></style>
