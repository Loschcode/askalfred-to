<template>
  <section class="about-us">
    <div class="col-md-12">
      <div class="row start-md">
        <div class="col-md-10 col-md-offset-1">
          <div class="page__block">
            <h3>Who are we?</h3>
            <p>AskAlfred is a startup founded by a small group of entrepreneurs who grew tired of wasting time on some daily tasks.</p>
            <p>The world is changing and technologies are evolving, you see tech companies popping up all over the place to ease your life in many ways; transportations, hosting, insurances... All that was reserved to few people before it got democratised.</p>
            <p>There's something missing somewhere. This thing is Alfred. A 24/24H personal assistant — or a concierge as you could call it — to help you out whenever you want, for whatever reason.</p>
            <p>The idea united us, with our knowledge in various fields, we could make this dream a reality.</p>
            <h3>Our [short] story</h3>
            <p>We started to build up Alfred as personal assistant in early 2019. The idea behind it was to design a system where anyone would be able to invoke Alfred to help him out for anything.</p>
            <p>Starting from this statement, we tried to cross-check all possibilities, tried things, rolled back and tried again to make all this work smoothly.</p>
            <p>We now entered the testing phase. The service is still in a closed-alpha version but will soon be available publicly, if you want an early access, please register your email; we filter this manually.</p>
            <h3>We are hiring!</h3>
            <p>If you're eager to learn about data science, artificial intelligence and programming in general, you're more than welcome to send an email to <a href="mailto:jobs@askalfred.app">jobs@askalfred.app</a></p>
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

  head () {
    return {
      title: 'About us - AskAlfred',
      meta: [
        { hid: 'description', name: 'About us', content: 'About the company of Alfred' }
      ]
    }
  },

  created () {
    this.$store.commit('header/setTitle', ['About us'])
  },
  components: {
  }
}
</script>
