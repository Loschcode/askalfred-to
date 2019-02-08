<template>
  <div class="default">
    <div class="wrap container-fluid">
      <div class="header__background"></div>
      <div class="header">
        <div class="row middle-md">
          <div class="col-md-offset-5 col-md-7 +more-than-md">
            <!-- Buttons top right -->
            <div class="row middle-md header__top-block">
              <div class="col-md-4">
                <div class="box header__top-link">
                  <a href="#">How does it work?</a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box header__top-link">
                  <a href="#">About us</a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box header__top-link">
                  <span class="header__top-link--round">
                    <a href="#">Ask me anything</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row top-md">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="box header__introduction">
              <h1>I'm Alfred</h1>
              <p>Are you tired of<br />losing time ?</p>
              <ul>
                <li>You give me the task</li>
                <li>I work on it</li>
                <li>You enjoy the result</li>
              </ul>

              <a
                class="header__call-to-action"
                href="#"
              >
                Ask me anything
              </a>
            </div>
          </div>

          <div class="col-md-6 col-sm-6">
            <div class="box">
              <div class="header__image +more-than-xs">
                <img src="/header_image.svg" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Inside layout -->
      <div class="row">
        <div class="header__background-spacing"></div>
      </div>

      <div class="row">
        <nuxt />
      </div>

      <div class="footer__background">
        <div class="row center-xs">
          <div class="col-md-12">
            <div class="footer">
              <a href="#">Privacy policy</a> | <a href="#">About us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/styles/app";

.header {
  color: $color-white;
}

.header__image {
  margin: spacing(10);
  width: spacing(70);
}

.header__top-block {
  a {
    color: $color-white;
  }
  margin: auto;
  padding-top: spacing(6);

  .header__top-link {
    text-align: center;
  }

  .header__top-link--round {
    @include button-radius("big");
    padding: spacing(1, 4, 1, 4);
    border: 1px solid $color-white;
  }
}

.header__call-to-action {
  @include button-radius("big");
  margin: -0.5em;
  padding: spacing(4, 12, 4, 12);
  font-size: sizing(2);
  text-transform: uppercase;
  background-color: $color-white;
  color: $color-blue;
  font-weight: bold;
}

.header__background {
  @include background-absolute();
  @include bottom-radius(50%);
  z-index: -1;
  background: $color-blue url("/header_background.svg") no-repeat fixed center;
  background-size: cover;
  padding-bottom: spacing(110);

  @include breakpoint("md") {
    @include bottom-radius(40%);
    padding-bottom: spacing(95);
  }

  @include breakpoint("sm") {
    @include bottom-radius(40%);
    padding-bottom: spacing(95);
  }
  @include breakpoint("xs") {
    @include bottom-radius(20%);
  }
}

.header__background-spacing {
  @include breakpoint("lg") {
    padding-top: spacing(5);
  }
  @include breakpoint("md") {
    padding-top: spacing(8);
  }
  @include breakpoint("sm") {
    padding-top: spacing(8);
  }
  @include breakpoint("xs") {
    padding-top: spacing(30);
  }
}

.header__introduction {
  margin-left: spacing(15);
  @include breakpoint("md") {
    margin-left: spacing(10);
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

.footer {
  padding: spacing(6);
  color: $color-white;
  a {
    color: $color-white;
  }
}

.footer__background {
  @include background-absolute();
  @include top-radius(50%);
  bottom: 0;
  background: $color-blue no-repeat fixed left;
}
</style>

<script>
export default {
  name: 'Default',
  props: {
  }
}
</script>
