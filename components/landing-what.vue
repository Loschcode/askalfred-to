<template>
  <div class="what">
    <div class="row center-xs">
      <div class="col-md-4">
        <div class="what__image +more-than-sm">
          <img src="/landing-what/phone.svg" />
        </div>
      </div>
      <div class="col-md-offset-1 col-md-4 col-xs-10 center-sm start-lg">
        <div class="what__details">
          <h2>What will Alfred do for you?</h2>
          <p>He can work on any task you don't want to do.</p>

          <div class="row center-xs start">
            <div class="col-md-12 col-xs-10">
              <div class="what__messages">

                <div class="row">
                  <div class="col-md-12">
                    <div class="message message__myself">
                      <div class="message__myself-arrow"></div>
                      {{ question }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="message message__yourself">
                      <div class="message__yourself-arrow"></div>
                      {{ answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row center-xs center-sm start-md start-lg">
            <div class="col-md-12">
              <span class="button button__blue-on-white what__call-to-action">
                <nuxt-link
                  rel="canonical"
                  to="/what-will-alfred-do"
                >See more examples</nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignService from '../services/campaign-service'

export default {
  name: 'LandingWhat',
  props: {
  },

  data () {
    return {
      question: '',
      answer: ''
    }
  },

  created () {
    Object.assign(this, {
      campaignService: new CampaignService(this)
    })

    this.question = this.campaignService.question()
    this.answer = this.campaignService.answer()
  }
}
</script>

<style scoped lang="scss">
.what {
  padding-bottom: big-spacing(1);
}

.what__messages {
  padding-bottom: spacing(8);
}

.what__call-to-action {
  a {
    @include extend-clickable(5em !important, 5em !important);
  }
}

.what__image {
  img {
    height: big-spacing(6);
  }
}

.what__details {
  p {
    padding-top: spacing(1);
    padding-bottom: spacing(5);
    font-size: sizing(3);
    font-weight: 200;
  }
}
</style>
