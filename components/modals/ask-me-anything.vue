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
                    class="button button__blue-on-white button--squared content-coming-soon__call-to-action-button"
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
        <div class="content">
          <modals-common-success
            :title="`Thank you!`"
            :content="`We will get back to you shortly to give your early access.`"
            :action="close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../components/modal'
import { firebase, db } from '../../plugins/firebase'

import ModalsCommonSuccess from '../../components/modals/common/success'

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
    Modal,
    ModalsCommonSuccess
  }
}
</script>

<style scoped lang="scss">
.input__error {
  input {
    border: pixeling(2) solid $border-error-color !important;
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

.content-coming-soon {
  text-align: center;

  p {
    margin: spacing(2);
    color: $text-modal-color;
    font-weight: 400;
    font-size: sizing(3);
  }
  input {
    border-radius: pixeling(5);
    text-align: center;
    font-size: sizing(3);
    width: big-spacing(5);
    color: $text-input-color;
    padding: spacing(2);
    border: pixeling(1) solid $border-input-color;
    @include placeholder-color($text-input-placeholder-color);
  }
}

.content-coming-soon__call-to-action {
  margin-top: spacing(2);
  padding-top: spacing(3);
  padding-bottom: spacing(3);
}

.content-coming-soon__call-to-action-button {
  background-color: $background-coming-soon-call-to-action-color;
  cursor: pointer;
  a {
    font-size: sizing(2);
    padding-left: big-spacing(1);
    padding-right: big-spacing(1);
  }
}
</style>
