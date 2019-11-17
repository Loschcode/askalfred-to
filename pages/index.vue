<template>
  <section>
    <div class="col-md-12">
      <!-- What can you ask ? -->
      <client-only>
        <landing-what />
      </client-only>
    </div>
    <!-- How does it work ? -->
    <landing-how />
  </section>
</template>

<script>
import LandingWhat from '../components/landing-what';
import LandingHow from '../components/landing-how';
import OriginHelper from '../helpers/origin-helper'

export default {
  layout: 'landing',
  components: {
    LandingWhat,
    LandingHow
  },

  created () {
    OriginHelper.setFrom(this)
  }
}
</script>

<style scoped lang="scss">
</style>
