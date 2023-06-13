<template>
  <div>
    <h2 class="render-kit-title">Article rendered from KMS API Response mock</h2>
    <div class="spacer" />
    <ImageField
      title="Image component"
      src="https://iso.500px.com/wp-content/uploads/2019/11/Man-doing-postproduction-of-his-photos-on-laptop-at-night-By-Carina-Konig-1500x1000.jpg"
      alt="ImageAlt"
      show-title
    />
    <hr />
    <hr />
  </div>
</template>

<script setup lang="ts">
import { ImageField } from '@/components/ui';
</script>

<style>
.render-kit-title {
  width: 100%;
  color: white;
  padding: 20px 12px;
  background-color: black;
}
.spacer {
  display: block;
  height: 6000px;
}
</style>
