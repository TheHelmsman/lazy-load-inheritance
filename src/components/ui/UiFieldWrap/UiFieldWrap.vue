<template>
  <div class="ui-field-wrap" role="combobox">
    <h2 v-if="isTitleVisible" v-text="title" class="ui-field-wrap__title" />
    <div class="ui-field-wrap__content" role="combobox">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
export interface Props {
  showTitle?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  showTitle: true,
  title: '',
});

const isTitleVisible = computed<boolean>(() => props.showTitle && Boolean(props.title));
</script>

<style scoped lang="scss">
.ui-field-wrap {
  margin: 0 auto 20px;
  &__title {
    padding: 15px 0;
    text-align: left;
    color: $black;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.3;
  }
  ul {
    padding-left: 40px;
    margin: 20px 0;
  }
}

@media (max-width: ($grid__bp-lga * 1px)) {
  .ui-field-wrap {
    &__title {
      margin-left: 0;
    }
  }
}
</style>
