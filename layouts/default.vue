<template>
  <div class="default">
    <div class="wrap container-fluid">
      <div class="header-background"></div>
      <div class="header">
        <div class="row middle-md">
          <div class="col-md-offset-5 col-md-7">
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
                  <div class="header-links__link--round">
                    <a href="#">Ask me anything</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row top-md">
          <div class="col-md-6">
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

          <div class="col-md-6">
            <div class="box">
              <div class="header-image">
                <img src="/header_image.svg" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Inside layout -->
      <div class="row">
        <div class="after-background"></div>
      </div>

      <div class="row">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/styles/app";

.header-image {
  margin: 3em;
  width: 20em;
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
  padding: 0.4em 0.8em 0.4em 0.8em;
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
}

.after-background {
  padding-top: 10em;
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
