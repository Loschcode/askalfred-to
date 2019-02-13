<template>
  <section class="col-md-12">
    <!-- What can you ask ? -->
    <what />

    <!-- How does it work ? -->
    <div class="how">
      <div class="row">
        <div class="how__background"></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          HATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />

          HATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />
          WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />WHATEVER<br />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/app";

.how__background {
  padding: 10vh;
  width: 100%;
  @include top-radius(100%);
  background-color: red; //$color-light-grey;
}
</style>

<script>
import What from '../components/what';

export default {
  components: {
    What
  }
}
</script>
