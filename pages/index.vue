<template>
  <section class="col-md-12">
    <!-- What can you ask ? -->
    <landing-what />
    <!-- How does it work ? -->
    <landing-how />
  </section>
</template>

<style lang="scss">
</style>

<script>
import LandingWhat from '../components/landing-what';
import LandingHow from '../components/landing-how';

export default {
  layout: 'landing',
  components: {
    LandingWhat,
    LandingHow
  }
}
</script>
