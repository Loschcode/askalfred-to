<template>
  <div
    class="wrapper default"
    v-show="titleLoaded()"
  >
    <div class="wrap container-fluid">
      <default-header />
    </div>

    <div class="wrap container">
      <div class="row">
        <nuxt />
      </div>
    </div>

    <div class="wrap container-fluid">
      <default-footer />
    </div>
  </div>
</template>

<script>
import DefaultHeader from '../components/default-header';
import DefaultFooter from '../components/default-footer';

export default {
  name: 'Default',

  props: {
  },

  computed: {
    title () { return this.$store.state.header.title }
  },

  props: {
  },

  methods: {
    titleLoaded () {
      return this.title[0].length > 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      if (this.titleLoaded()) {
        this.$nuxt.$loading.finish()
      }
    })
  },

  components: {
    DefaultHeader,
    DefaultFooter
  },
}
</script>

<style scoped lang="scss">
</style>
