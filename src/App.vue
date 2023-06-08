<template>
  <div>
    <h2 class="render-kit-title">Article rendered from KMS API Response mock</h2>
    <hr />
    <ImageField
      title="Image component"
      src="https://look.com.ua/pic/201412/1920x1080/look.com.ua-113489.jpg"
      alt="ImageAlt"
      show-title
    />
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
</style>
