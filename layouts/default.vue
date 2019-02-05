<template>
  <div class="default">
    <div class="container">

      <div class="grid grid--right">
        <div class="grid__cell grid__cell--50">
          <!-- Buttons top right -->
          <div class="grid">
            <div class="grid__cell grid__cell--33">
              How does it work ?
            </div>
            <div class="grid__cell grid__cell--33">
              About us
            </div>
            <div class="grid__cell grid__cell--33">
              Ask me anything
            </div>
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="grid__cell grid__cell--50">
          <h1>I'm Alfred</h1>
          <h2>Are you tired of losing time ?</h2>
          <li>
            <ul>You give me the task</ul>
            <ul>I work on it</ul>
            <ul>You enjoy the result</ul>
          </li>

          <a href="#">Ask me anything</a>
        </div>
        <div class="grid__cell grid__cell--50">
          IMAGE
        </div>
      </div>

      <!-- Inside layout -->
      <div>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'Default',
  props: {
  }
}
</script>
