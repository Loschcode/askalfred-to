<template>
  <div class="ask-me-anything">
    <modal ref="current-modal" />

    <!-- Below  are all the successive content we want to set depending actions -->
    <div class="+hidden">
      <div ref="coming-soon">
        <div class="content content-coming-soon">
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
                <div
                  class="input"
                  v-bind:class="{'input__error': (errors.has('email'))}"
                >
                  <input
                    ref="email"
                    type="email"
                    name="email"
                    placeholder="my-email@gmail.com"
                    v-model="email"
                    v-validate="'required|email'"
                    data-vv-validate-on="custom"
                    autofocus
                    v-on:keyup.enter="getItForFree()"
                  />
                </div>
              </div>
            </div>
            <div class="row center-xs">
              <div class="col-md-12">
                <div class="content-coming-soon__call-to-action">
                  <span
                    @click="getItForFree()"
                    class="button__on-white button__on-white--squared content-coming-soon__call-to-action-button"
                  >
                    <a>Get it for free now</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref="thank-you">
        <div class="content content-thank-you">
          <div class="wrap container">
            <div class="row center-xs">
              <div class="col-md-12">
                <div class="content-thank-you__icon">
                  <img src="/modals/check.svg" />
                </div>
                <h2>Thank you!</h2>
                <p>
                  We will get back to you shortly to give your early access.
                </p>
                <div class="content-thank-you__call-to-action">
                  <span
                    @click="close()"
                    class="button button__on-black"
                  >
                    Continue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../components/modal'
import { firebase, db } from '../../plugins/firebase'

export default {
  name: 'ModalsAskMeAnything',
  props: {
  },

  data () {
    return {
      email: ''
    }
  },

  methods: {
    currentModal () {
      return this.$refs['current-modal']
    },

    close () {
      this.currentModal().close()
    },

    open () {
      this.autoFocus()
      this.currentModal().open()
      this.currentModal().setWithContentOf(this, 'coming-soon')
    },

    autoFocus () {
      this.$nextTick(() => this.$refs.email.focus())
    },

    getItForFree () {
      this.$validator.validateAll().then(success => {
        if (success) {

          db.collection('get-it-for-free').add({
            email: this.email
          }).then((docRef) => {
            // docRef.id
            this.currentModal().setWithContentOf(this, 'thank-you')
          }).catch((error) => {
            // error
            return false
          });
        }
      })
    },
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
.input__error {
  input {
    border: 2px solid $color-red !important;
  }
}

.content {
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
}

.content-thank-you {
  position: relative;
  margin-top: 2em;
  h1 {
  }
  p {
    margin: spacing(2);
    color: $color-grey-modal;
    font-weight: 400;
    font-size: sizing(3);
  }
}

.content-thank-you__call-to-action {
  position: absolute;
  font-weight: bold;
  @include absolute-center();
  bottom: -4em;
}

.content-thank-you__icon {
  position: absolute;
  @include absolute-center();
  top: -6em;
  img {
    width: sizing(13);
  }
}

.content-coming-soon {
  text-align: center;

  p {
    margin: spacing(2);
    color: $color-grey-modal;
    font-weight: 400;
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
  cursor: pointer;
  a {
    font-size: sizing(2);
    padding-left: 3.1em;
    padding-right: 3.1em;
  }
}
</style>
