<template>
  <section class="about-us">
    <div class="col-md-12">
      <div class="row start-md">
        <div class="col-md-10 col-md-offset-1">
          <div class="page__block">
            <h3>Who are we</h3>
            <p>AskAlfred is a startup founded by a small group of entrepreneurs who grew tired of wasting time on some daily tasks. The world is changing and technologies are evolving, you see tech companies popping up all over the place to ease your life in many ways; transportations, hosting, insurances... All that was reserved to a few people before it got democratized. There's something missing in all that. This thing is Alfred. A 24/24H personal assistant - or a concierge as you could it - to help you out whenever you want, for whatever reason.</p>
            <h3>Our story</h3>
            <p>Yo</p>
            <h3>We are hiring</h3>
            <p>Yo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
</style>

<script>
export default {
  layout: 'default',
  scrollToTop: true,

  created () {
    this.$store.commit('header/setTitle', ['About us'])
  },
  components: {
  }
}
</script>
