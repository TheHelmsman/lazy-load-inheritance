<template>
  <div>
    <h2 class="render-kit-title">Article rendered from KMS API Response mock</h2>
    <div class="spacer" />
    <hr />
    <ImageField
      title="Image component"
      source="https://play-lh.googleusercontent.com/ePO8kmDI3mHQbCcMeSZyhQcXzononmORfsgdVxX-LeQ0GitA2Fa4Xuq-YXxoe029TSU"
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
.spacer {
  height: 6000px;
}
</style>
