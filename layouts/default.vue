<template>
  <div class="default">
    <div class="wrap container-fluid">
      <div class="header-background"></div>
      <div class="header">
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
                <div class="box">
                  Ask me anything
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row middle-md">
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
            <div class="box">IMAGE</div>
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

.call-to-action {
  margin: -0.5em;
  border-radius: 2em;
  padding: 1.2em 3.3em 1.2em 3.3em;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: $color-white;
  font-family: $font-alternative;
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
  margin: 3em;

  p {
    padding-top: 0.3em;
  }

  ul {
    padding-top: 1em;
    padding-bottom: 3em;
    list-style-type: none;
    list-style-position: inside;
    li {
      padding-left: 1.2em;
      background: url("/bullet.svg") no-repeat left 10px;
      font-size: 1.2rem;
      margin-top: 0.7em;
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
