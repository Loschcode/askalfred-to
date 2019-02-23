<template>
  <div class="ask-me-anything">
    <modal ref="current-modal">
      <div class="content-coming-soon">
        <div class="wrap container">
          <div class="row center-xs">
            <div class="col-md-12">
              <h2>Alfred is coming soon!</h2>
              <p>
                Our team is working on making Alfred just perfect for you. Sign-up now and get it for free in advance!
              </p>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-md-12">
              <div class="input">
                <input
                  type="email"
                  placeholder="my-email@gmail.com"
                  autofocus
                />
              </div>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-md-12">
              <div class="content-coming-soon__call-to-action">
                <span class="button__on-white button__on-white--squared content-coming-soon__call-to-action-button">
                  <a @click="getItForFree()">Get it for free now</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <!-- Below  are all the successive content we want to set depending actions -->
    <div class="+hidden">
      <div ref="thank-you">
        <div class="content-thank-you">
          <div class="wrap container">
            <div class="row center-xs">
              <div class="col-md-12">
                <h2>Thank you!</h2>
                <p>
                  Blablablabla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content-coming-soon {
  @include breakpoint("lg") {
    width: 30vw;
  }
  @include breakpoint("md") {
    width: 40vw;
  }
  @include breakpoint("sm") {
    width: 50vw;
  }
  @include breakpoint("xs") {
    width: 80vw;
  }
  text-align: center;

  p {
    margin: spacing(2);
    color: $color-grey-modal;
    font-weight: 200;
    font-size: sizing(3);
  }
  input {
    border-radius: 5px;
    text-align: center;
    font-size: sizing(3);
    width: spacing(49);
    color: $color-persistent-blue;
    padding: 0.5em;
    border: 1px solid $color-grey-modal;
    @include placeholder-color($color-grey-modal);
  }
}

.content-coming-soon__call-to-action {
  margin-top: spacing(2);
  padding-top: 1em;
  padding-bottom: 1em;
}

.content-coming-soon__call-to-action-button {
  background-color: $color-persistent-blue;
  a {
    font-size: sizing(2);
    padding-left: 3.1em;
    padding-right: 3.1em;
  }
}
</style>

<script>
import Modal from '../../components/modal'

export default {
  name: 'ModalsAskMeAnything',
  props: {
  },
  methods: {
    currentModal () {
      return this.$refs['current-modal']
    },

    open () {
      this.currentModal().open()
    },

    getItForFree () {
      this.currentModal().content = this.$refs['thank-you']
    }
  },
  components: {
    Modal
  }
}
</script>
