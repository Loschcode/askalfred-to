<template>
  <div class="wrapper landing tingle-content-wrapper">
    <div class="wrap container-fluid">
      <landing-header />
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
</style>

<script>
import LandingHeader from '../components/landing-header';
import DefaultFooter from '../components/default-footer';

export default {
  name: 'Landing',
  props: {
  },
  components: {
    LandingHeader,
    DefaultFooter
  }
}
</script>
