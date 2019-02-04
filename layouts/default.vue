<template>
  <div class="default">
    <div class="container">

      <div class="grid">
        <!-- Buttons top right -->
          <div class="grid__cell grid__cell--30">
            How does it work ?
          </div>
          <div class="grid__cell grid__cell--30">
            About us
          </div>
          <div class="grid__cell grid__cell--30">
            Ask me anything
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
