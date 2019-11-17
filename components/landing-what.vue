<template>
  <div class="what">
    <div class="row center-xs">
      <div class="col-md-4">
        <div class="what__image +more-than-sm">
          <img alt="phone" src="/landing-what/phone.svg" />
        </div>
      </div>
      <div class="col-md-offset-1 col-md-4 col-xs-10 center-sm start-lg">
        <div class="what__details">
          <h2>What will Alfred do for you?</h2>
          <p>He can fulfill any task you don't want to do.</p>

          <div class="row center-xs start">
            <div class="col-md-12 col-xs-10">
              <div class="what__messages">

                <div class="row">
                  <div class="col-md-12" v-if="question">
                    <div class="message message__myself">
                      <div class="message__myself-arrow"></div>
                      {{ question }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12" v-if="answer">
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
                >Learn more about Alfred</nuxt-link>
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
import OriginHelper from '../helpers/origin-helper'
import EnvHelper from '../helpers/env-helper'
export default {
  name: 'LandingWhat',
  props: {
  },

  data () {
    return {
      question: '',
      answer: '',
      id: ''
    }
  },

  created () {
    if (process.server) return

    const sample = this.$route.query.sample

    Object.assign(this, {
      campaignService: new CampaignService(this, sample)
    })

    this.question = this.campaignService.question()
    this.answer = this.campaignService.answer()
    this.id = this.campaignService.id()

    OriginHelper.addToOrigin(this, {
      'sample_id': this.id
    })

    if (OriginHelper.getCookie(this, 'token')) return
    this.$axios.post(`${EnvHelper.config.apiUrl}/open/create_guest`).then((response) => {
      OriginHelper.setToken(this, response.data.token)
    })

  },

}
</script>

<style scoped lang="scss">
.what {
  padding-bottom: big-spacing(1);
}

.what__messages {
  padding-bottom: spacing(8);
  min-height: 185px;
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
