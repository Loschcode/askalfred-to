<template>
  <section class="col-md-12">
    <!-- What can you ask ? -->
    <what />

    <!-- How does it work ? -->
    <div class="how">
      <div class="row">
        <div class="how__title">
          <h2>How does it work?</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="how__content undo-wrap">
            Content here
            <div class="how__after-content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/app";

.how {
  h2 {
    font-size: sizing(4);
    font-weight: 600;
  }
}

.how__title {
  padding: 10vh;
  @include no-max-width();
  @include top-radius(100%);
  background-color: $color-light-grey;
}

.how__content {
  @include no-max-width();
  position: relative;
  background-color: $color-light-grey;
}

.how__after-content {
  @include no-max-width();
  z-index: -1;
  position: absolute;
  top: 0;
  height: 12vh;
  background-color: $color-light-grey;
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
