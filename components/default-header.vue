<template>
  <div class="default-header">
    <div class="default-header__background"></div>
    <div class="row middle-md">
      <div class="col-md-offset-5 col-md-7 +more-than-md">
        <!-- Buttons top right -->
        <div class="row middle-md default-header__top-block">
          <div class="col-md-4">
            <div class="box default-header__top-link">
              <a href="#">Back to home page</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box default-header__top-link">
              <a href="#">About us</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box default-header__top-link">
              <span class="default-header__top-link--round">
                <a href="#">Ask me anything</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row top-md center-xs center-sm">
      <div class="col-md-12">
        <div class="box default-header__introduction">
          <h1>
            <div class="head__first">What can you</div>
            <div class="header__last">ask to Alfred?</div>
          </h1>
        </div>
      </div>
    </div>
    <!-- Inside layout -->
    <div class="row">
      <div class="default-header__background-spacing"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/styles/app";

.default-header {
  color: $color-white;
  position: relative;
}

.default-header__image {
  margin: spacing(10);
  width: spacing(70);
}

.default-header__top-block {
  a {
    color: $color-white;
  }
  margin: auto;
  padding-top: spacing(6);

  .default-header__top-link {
    text-align: center;
  }

  .default-header__top-link--round {
    @include button-radius("big");
    padding: spacing(1, 4, 1, 4);
    border: 1px solid $color-white;
  }
}

.default-header__call-to-action {
  @include button-radius("big");
  margin: -0.5em;
  padding: spacing(4, 12, 4, 12);
  font-size: sizing(2);
  text-transform: uppercase;
  background-color: $color-white;
  color: $color-blue;
  font-weight: bold;
  margin: auto 0;
}

.default-header__background {
  @include header-background(60);
}

.default-header__background-spacing {
  padding-top: spacing(25);
}

.default-header__introduction {
  text-align: left;

  margin-left: spacing(15);
  @include breakpoint("sm") {
    margin-left: spacing(0);
    display: block;
  }
  @include breakpoint("xs") {
    display: inline-block;
  }

  margin-top: spacing(3);

  p {
    padding-top: spacing(1);
  }

  ul {
    @include default-list();
    padding-top: spacing(3);
    padding-bottom: spacing(11);

    li {
      padding-left: spacing(4);
      background: url("/bullet.svg") no-repeat left spacing(1.5);
      font-size: sizing(3);
      margin-top: spacing(3);
      font-weight: 200;
    }
  }
}
</style>

<script>
export default {
  name: 'DefaultHeader',
  props: {
  }
}
</script>
