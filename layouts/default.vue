<template>
  <div class="default">
    <div class="wrap container-fluid">
      <div class="header-background"></div>
      <div class="header">
        <div class="row middle-md">
          <div class="col-md-offset-5 col-md-7 +more-than-md">
            <!-- Buttons top right -->
            <div class="row middle-md header-links">
              <div class="col-md-4">
                <div class="box header-links__link">
                  <a href="#">How does it work?</a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box header-links__link">
                  <a href="#">About us</a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box header-links__link">
                  <span class="header-links__link--round">
                    <a href="#">Ask me anything</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row top-md">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="box header-left">
              <h1>I'm Alfred</h1>
              <p>Are you tired of<br />losing time ?</p>
              <ul>
                <li>You give me the task</li>
                <li>I work on it</li>
                <li>You enjoy the result</li>
              </ul>

              <a
                class="call-to-action"
                href="#"
              >
                Ask me anything
              </a>
            </div>
          </div>

          <div class="col-md-6 col-sm-6">
            <div class="box">
              <div class="header-image +more-than-xs">
                <img src="/header_image.svg" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Inside layout -->
      <div class="row">
        <div class="after-header-background"></div>
      </div>

      <div class="row">
        <nuxt />
      </div>

      <div class="footer-background">
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

.header-image {
  margin: 3em;
  width: 22em;
}

.header-links {
  a {
    color: $color-white;
  }
  margin: auto;
  padding-top: 2em;
}

.header-links__link {
  text-align: center;
}

.header-links__link--round {
  border-radius: 2em;
  padding: 0.4em 1.2em 0.4em 1.2em;
  border: 1px solid $color-white;
}

.call-to-action {
  margin: -0.5em;
  border-radius: 2em;
  padding: 1.3em 4em 1.3em 4em;
  font-family: $font-alternative;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: $color-white;
  color: $color-blue;
  font-weight: bold;
}

.header {
  color: $color-white;
}

.footer {
  color: $color-white;
  padding: 2em;
  a {
    color: $color-white;
  }
}

.footer-background {
  position: absolute;
  left: -15%;
  width: 130%;
  bottom: 0;
  background-color: $color-blue;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.header-background {
  z-index: -1;
  position: absolute;
  left: -15%;
  width: 130%;
  background-image: url("/header_background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  padding-bottom: 33em;

  @include breakpoint("sm") {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
    padding-bottom: 29em;
  }
  @include breakpoint("xs") {
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
}

.after-header-background {
  @include breakpoint("lg") {
    padding-top: 2em;
  }
  @include breakpoint("md") {
    padding-top: 5em;
  }
  @include breakpoint("sm") {
    padding-top: 2em;
  }
  @include breakpoint("xs") {
    padding-top: 10em;
  }
}

.header-left {
  margin-left: 3em;
  margin-top: 1em;

  p {
    padding-top: 0.3em;
  }

  ul {
    padding-top: 1em;
    padding-bottom: 3.6em;
    list-style-type: none;
    list-style-position: inside;
    li {
      padding-left: 1.2em;
      background: url("/bullet.svg") no-repeat left 10px;
      font-size: 1.2rem;
      margin-top: 0.7em;
      font-weight: 200;
    }
  }
}
</style>

<script>
export default {
  name: 'Default',
  props: {
  }
}
</script>
