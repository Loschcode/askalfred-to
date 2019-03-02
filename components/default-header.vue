<template>
  <div class="default-header">
    <div
      class="default-header__background"
      v-bind:class="{'default-header__background--simple': (!doubleTitle())}"
    ></div>
    <div class="row middle-md">
      <div class="col-md-offset-5 col-md-7 +more-than-sm">
        <!-- Buttons top right -->
        <div class="row middle-md default-header__top-block">
          <div class="col-md-offset-4 col-md-4">
            <div class="box default-header__top-link">
              <nuxt-link
                rel="canonical"
                to="/"
              >Back to home page</nuxt-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box default-header__top-link">
              <span class="default-header__top-link--round">
                <a @click="openModal('modals-ask-me-anything')">Ask me anything</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row top-md center-xs center-sm start-md">
      <div class="col-md-6 col-lg-5">
        <div class="box default-header__introduction">
          <nuxt-link
            rel="canonical"
            to="/"
          >
            <h1>
              <div class="title__first">{{title[0]}}</div>
              <div
                v-if="doubleTitle()"
                class="title__last"
              >{{title[1]}}</div>
            </h1>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Inside layout -->
    <div class="row">
      <div
        v-if="doubleTitle()"
        class="default-header__background-spacing"
      ></div>
    </div>

    <!-- Modals -->
    <modals-ask-me-anything ref="modals-ask-me-anything" />
  </div>
</template>

<script>
import ModalsMixin from '../mixins/modals-mixin'
import ModalsAskMeAnything from '../components/modals/ask-me-anything'

export default {
  name: 'DefaultHeader',
  computed: {
    title () { return this.$store.state.header.title }
  },

  methods: {
    doubleTitle () {
      return this.title[1]
    }
  },

  props: {
  },

  mixins: [ModalsMixin],

  components: {
    ModalsAskMeAnything
  }
}
</script>

<style scoped lang="scss">
.title__first {
  color: $color-white;
  text-align: left;
  @include breakpoint("sm") {
    text-align: center;
  }
}

.title__last {
  color: $color-white;
  text-align: right;
  @include breakpoint("sm") {
    text-align: center;
  }
}

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
    @include extend-clickable();
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
  @include breakpoint("sm") {
    @include header-background(50);
  }
}

.default-header__background--simple {
  @include header-background(40);
  @include breakpoint("sm") {
    @include header-background(30);
  }
}

.default-header__background-spacing {
  padding-top: spacing(25);
  @include breakpoint("sm") {
    padding-top: spacing(15);
  }
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
    h1 {
      font-size: sizing(11);
    }
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
      background: url("/elements/bullet.svg") no-repeat left spacing(1.5);
      font-size: sizing(3);
      margin-top: spacing(3);
      font-weight: 200;
    }
  }
}
</style>

