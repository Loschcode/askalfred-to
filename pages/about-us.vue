<template>
  <section class="about-us">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="page__block">
            <h3>Blabla</h3>
            <p> jm klj mklj mlkj lSoemething</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/app";
</style>

<script>
export default {
  layout: 'default',
  created () {
    this.$store.commit('header/setTitle', ['About us'])
  },
  components: {
  }
}
</script>
