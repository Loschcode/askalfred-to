<template>
  <div class="default wrap container-fluid">
    <div class="row">
      <div class="col-md-offset-6 col-md-6">
        <!-- Buttons top right -->
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              How does it work ?
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              About us
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">Ask me anything
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row middle-md">
      <div class="col-md-6">
        <div class="box">
          <h1>I'm Alfred</h1>
          <h2>Are you tired of losing time ?</h2>
          <ul>
            <li>You give me the task</li>
            <li>I work on it</li>
            <li>You enjoy the result</li>
          </ul>

          <a href="#">Ask me anything</a>
        </div>
      </div>

      <div class="col-md-6">
        <div class="box">IMAGE</div>
      </div>
    </div>

    <!-- Inside layout -->
    <div>
      <nuxt />
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
