<template>
  <section
    class="what-will-alfred-do"
    @click="openModal('modals-ask-me-anything')"
  >
    <div class="col-md-12">
      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Travel</h3>
            <p>You want to plan a trip but don't have time to search all the different possibilities and best options ? Just give the details to Alfred and he will find the best balance.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>City</h3>
            <p>Need to call a cleaning lady or a fast repair ? Want a gym in your area which you didn't try yet, within a specific budget ? Alfred will search all that for you.</p>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Assistance</h3>
            <p>Do you need help fast? Alfred can help you out and assist you through a hard time. Lost in the middle of nowhere and your GPS has stopped working ? Need fast advices ? Need to call a service within minutes ? This is the kind of situation he can answer.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Paperwork</h3>
            <p>Tired of calling your embassy to know how to process your Visa, or even filling the form ? You don't want to call the post-office or send this letter to any administration ? Alfred can just do it all for you.</p>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Shopping</h3>
            <p>If you need to do some online shopping but have no time for it, Alfred can just do it for you, knowing your preferences and what you usually take you can just send a quick request so he processes it all. This doesn't stop there, as Alfred can help you out finding the cheapest platforms or products depending your need.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Food</h3>
            <p>You must eat but the place only accepts phone calls ? Alfred can make a short call to order it for you. Do you need to book a restaurant for tomorrow ? No problem, he can book it. Losing time for all kind of food related is part of your past now.</p>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Social</h3>
            <p>Do you want to send a surprise to your mother or friend but have no idea what to pick ? Alfred can list you some ideas, and even send it directly if you need to.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Events</h3>
            <p>You need to organize an event but don't know where to start ? Alfred can lead the way, or even do everything from A to Z following your instructions.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <modals-ask-me-anything ref="modals-ask-me-anything" />
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import ModalsMixin from '../mixins/modals-mixin'
import ModalsAskMeAnything from '../components/modals/ask-me-anything'

export default {
  layout: 'default',
  scrollToTop: true,

  head () {
    return {
      title: 'What will Alfred do? - AskAlfred',
      meta: [
        { hid: 'description', name: 'What will Alfred do?', content: 'He can do many things with his H24/24 7/7 support.' }
      ]
    }
  },

  created () {
    this.$store.commit('header/setTitle', ['What will Alfred', 'do for you?'])
  },

  mixins: [ModalsMixin],

  components: {
    ModalsAskMeAnything
  }
}
</script>

<style scoped lang="scss">
.what-will-alfred-do__block {
  &:hover {
    cursor: pointer;
    @include button-radius(medium);
    background-color: $background-hover-links;
    p {
      color: $text-highlighted-color;
    }
  }

  margin-left: spacing(7);
  margin-right: spacing(7);
  padding: spacing(5);

  h3 {
    color: $text-subtitle-color;
    font-weight: 600;
    text-align: left;
  }

  p {
    margin-top: spacing(3);
    color: $text-details-color;
    font-size: sizing(2.7);
    text-align: justify;
  }
}
</style>
