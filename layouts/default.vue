<template>
  <div class="default">
    <div class="wrap container-fluid">
      <default-header />
    </div>

    <div class="wrap container">
      <div class="row center-xs">
        <nuxt />
      </div>
    </div>

    <div class="wrap container-fluid">
      <default-footer />
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/styles/app";
</style>

<script>
import DefaultHeader from '../components/default-header';
import DefaultFooter from '../components/default-footer';

export default {
  name: 'Default',
  props: {
  },
  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>
