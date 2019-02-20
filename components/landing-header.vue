<template>
  <div class="landing-header">
    <div class="landing-header__background"></div>
    <div class="row middle-md">
      <div class="col-md-offset-5 col-md-7 +more-than-sm">
        <!-- Buttons top right -->
        <div class="row middle-md landing-header__top-block">
          <div class="col-md-4">
            <div class="box landing-header__top-link">
              <a href="#">How does it work?</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box landing-header__top-link">
              <a href="#">About us</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box landing-header__top-link">
              <span class="landing-header__top-link--round">
                <a href="#">Ask me anything</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row top-md center-xs center-sm">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="box landing-header__introduction">
          <h1>I'm Alfred</h1>
          <p>Are you tired of<br />losing time ?</p>
          <ul>
            <li>You give me the task</li>
            <li>I work on it</li>
            <li>You enjoy the result</li>
          </ul>

          <span class="landing-header__call-to-action">
            <a
              v-on:click="openModal('askModal')"
              href="#"
            >Ask me anything</a>
          </span>

        </div>
      </div>

      <div class="col-md-6 col-sm-6">
        <div class="box">
          <div class="landing-header__image +more-than-xs">
            <img src="/landing-header/phone-fist.svg" />
          </div>
        </div>
      </div>
    </div>
    <!-- Inside layout -->
    <div class="row">
      <div class="landing-header__background-spacing"></div>
    </div>

    <modal ref="askModal">
      <div class="ask-modal">
        <div class="wrap container">
          <div class="row center-md">
            <div class="col-md-6">
              <h2>Alfred is coming soon!</h2>
              <p>
                Our team is working on making Alfred just perfect for you. Sign-up now and get it for free in advance!
              </p>
            </div>
          </div>
          <div class="row center-md">
            <div class="col-md-6">
              <div class="input">
                <input
                  type="email"
                  placeholder="my-email@gmail.com"
                />
              </div>
            </div>
          </div>
          <div class="row center-md">
            <div class="col-md-6">
              <div class="ask-modal__call-to-action">
                <span class="button__on-white button__on-white--squared ask-modal__call-to-action-button">
                  <a href="#">Get it for free now</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<style lang="scss">
.ask-modal {
  text-align: center;

  p {
    margin: spacing(2);
    color: $color-grey-modal;
    font-weight: 200;
    font-size: sizing(3);
  }
  input {
    font-size: sizing(3);
    width: spacing(49);
    color: $color-persistent-blue;
    padding: 0.5em;
    border: 1px solid $color-grey-modal;
    @include placeholder-color($color-grey-modal);
  }
}

.ask-modal__call-to-action {
  margin-top: spacing(2);
  padding-top: 1em;
}

.ask-modal__call-to-action-button {
  background-color: $color-persistent-blue;
  a {
    font-size: sizing(2);
    padding-left: 3.1em;
    padding-right: 3.1em;
  }
}

.landing-header {
  color: $color-white;
  position: relative;
}

.landing-header__image {
  margin: spacing(10);
  width: spacing(70);
}

.landing-header__top-block {
  a {
    @include extend-clickable();
    color: $color-white;
  }
  margin: auto;
  padding-top: spacing(6);

  .landing-header__top-link {
    text-align: center;
  }

  .landing-header__top-link--round {
    @include button-radius("big");
    padding: spacing(1, 4, 1, 4);
    border: 1px solid $color-white;
  }
}

.landing-header__call-to-action {
  @include button-radius("big");
  margin: -0.5em;
  padding: spacing(4, 12, 4, 12);
  font-size: sizing(2);
  text-transform: uppercase;
  background-color: $color-white;
  color: $color-blue;
  font-weight: bold;
  margin: auto 0;
  a {
    @include extend-clickable(5em, 5em);
  }
}

.landing-header__background {
  @include header-background(110);
}

.landing-header__background-spacing {
  @include breakpoint("lg") {
    padding-top: spacing(18);
  }
  @include breakpoint("md") {
    padding-top: spacing(15);
  }
  @include breakpoint("sm") {
    padding-top: spacing(10);
  }
  @include breakpoint("xs") {
    padding-top: spacing(30);
  }
}

.landing-header__introduction {
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
    line-height: spacing(3);
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
import Modal from '../components/modal'

export default {
  name: 'LandingHeader',
  methods: {
    openModal (ref) {
      this.$refs[ref].open()
    }
  },

  data () {
    return {
    }
  },

  props: {
  },
  components: {
    Modal
  }
}
</script>
