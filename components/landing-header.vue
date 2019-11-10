<template>
  <div class="landing-header">
    <div class="landing-header__background"></div>
    <div class="row middle-md">
      <div class="col-md-offset-5 col-md-7 +more-than-sm">
        <!-- Buttons top right -->
        <div class="row middle-md landing-header__top-block">
          <div class="col-md-4">
            <div class="landing-header__top-link">
              <a
                href="#how-does-it-work"
                v-smooth-scroll
              >How does it work?</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="landing-header__top-link">
              <nuxt-link
                rel="canonical"
                to="/about-us"
              >About us</nuxt-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="landing-header__top-link">
              <span class="landing-header__top-link--round">
                <a href="https://app.askalfred.to">Ask me anything</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row top-md center-xs center-sm">
      <div class="col-md-6 col-sm-5 col-xs-12">
        <div class="landing-header__introduction">
          <h1>I'm Alfred</h1>
          <p>Are you tired of<br />losing time ?</p>
          <ul>
            <li>You give me the task</li>
            <li>I work on it</li>
            <li>You enjoy the result</li>
          </ul>

          <span class="landing-header__call-to-action">
            <a href="https://app.askalfred.to">Ask me anything</a>
          </span>

        </div>
      </div>

      <div class="col-md-6 col-sm-6">
        <div class="landing-header__image +more-than-xs">
          <img alt="phone fist" src="/landing-header/phone-fist.svg" />
        </div>
      </div>
    </div>
    <!-- Inside layout -->
    <div class="row">
      <div class="landing-header__background-spacing"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'LandingHeader',
  methods: {
  },

  data () {
    return {
    }
  },

  props: {
  },

  mixins: [],

  components: {
  }
}
</script>

<style scoped lang="scss">
.landing-header {
  color: $text-header-color;
  position: relative;
}

.landing-header__image {
  margin: spacing(10);
  width: spacing(70);
  min-height: spacing(80);
}

.landing-header__top-block {
  a {
    @include extend-clickable();
    color: $text-header-color;
  }
  margin: auto;
  padding-top: spacing(6);
}

.landing-header__top-link {
  text-align: center;
}

.landing-header__top-link--round {
  @include button-radius("big");
  padding: spacing(1, 4, 1, 4);
  border: pixeling(1) solid $text-header-color;
}

.landing-header__call-to-action {
  @include button-radius("big");
  margin: spacing(-2);
  padding: spacing(4, 12, 4, 12);
  font-size: sizing(2);
  text-transform: uppercase;
  background-color: $background-header-call-to-action-color;
  color: $text-header-call-to-action-color;
  font-weight: bold;
  margin: auto 0;
  @include breakpoint("xs") {
    margin-left: spacing(2);
  }
  a {
    @include extend-clickable(5em, 5em);
  }
}

.landing-header__background {
  @include header-background(110);
  @include breakpoint("xs") {
    @include header-background(100);
  }
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
    padding-top: spacing(23);
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
    margin-left: spacing(3);
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
      background: url("/elements/bullet.svg") no-repeat left spacing(1.5);
      font-size: sizing(3);
      margin-top: spacing(3);
      font-weight: 200;
    }
  }
}
</style>
