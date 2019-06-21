<template>
  <section
    class="what-will-alfred-do"
    @click="goToApp()"
  >
    <div class="col-md-12">
      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Travel</h3>
            <p>You want to plan a trip but don't have time to search all the different possibilities and best options? Just give the details to Alfred and he will find the best balance. He can even wait for the best price to show up and book it then so you don't miss the best deals. You'll never be annoyed by the little details anymore.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Paperwork</h3>
            <p>Tired of calling your embassy to know how to process your Visa, or even filling the form? You don't want to call the post-office or send this letter to any administration? Alfred can just do it all for you. From finding the correct form, filling it and sending it through.</p>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Reservation</h3>
            <p>You must go climbing with your friends but the place only accepts phone calls? Alfred can make a short call for you. Do you need to book a restaurant for tomorrow? No problem, he will handle it. Losing time for all kind of reservations is part of your past now.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Assistance</h3>
            <p>Do you need help fast? Alfred can help you out and assist you through a hard time. Lost in the middle of nowhere and your GPS has stopped working? Need fast advices? Need to call a service within minutes? This is the kind of stressful situation he can answer to. You'll never be on your own when facing unforeseen events anymore.</p>
          </div>
        </div>
      </div>

      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>City</h3>
            <p>Need to call a cleaning lady or a fast repair? Want a gym in your area which you didn't try yet, within a specific budget? Alfred will search around your area for you and compare the services.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-will-alfred-do__block">
            <h3>Social</h3>
            <p>Do you want to send a surprise to your mother or friend but have no idea what to pick? Alfred can list you some ideas, and even send it directly if you need to. You need to organize an event but don't know where to start? Alfred can lead the way, or do everything from A to Z following your precise instructions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

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

  mounted () {
    this.$store.commit('header/setTitle', ['What will Alfred', 'do for you?'])
  },

  mixins: [],

  methods: {
    goToApp () {
      window.location = 'https://app.askalfred.to'
    }
  },

  components: {
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
