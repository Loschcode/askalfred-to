<template>
  <div class="landing-how">
    <a id="how-does-it-work" />
    <div class="row">
      <div class="landing-how__title">
        <h2>How does it work?</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="landing-how__content undo-wrap">

          <!-- You send requests to Alfred -->
          <div class="landing-how__details">
            <div class="row center-xs middle-xs">
              <!-- Image -->
              <div class="col-md-5 col-xs-8">
                <div class="box">
                  <img src="/landing-how/you-send-request-to-alfred.svg" />
                </div>
              </div>
              <!-- Text -->
              <div class="col-md-4 col-xs-8">
                <div class="box">
                  <h3>You send requests to Alfred</h3>
                  <p>If you encounter a time consuming task, just give it away to Alfred. It can be as simple as ordering something where phone calls are involved, organizing some nice vacations without specific dates or even fetching the documents needed for a visa.</p>
                  <div class="landing-how__details--tag">
                    Step 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- He works on it -->
          <div class="landing-how__details">
            <div class="row center-xs middle-xs">
              <!-- Text -->
              <div class="col-md-offset-1 col-md-4 col-xs-8">
                <div class="box">
                  <h3>He works on it</h3>
                  <p>Alfred will work on the task and eventually get back to you for more details or data so he can fulfill it correctly. He will do all the hard part of searching, calling, registering for you.</p>
                  <div class="landing-how__details--tag">
                    Step 2
                  </div>
                </div>
              </div>
              <!-- Image -->
              <div class="col-md-4 col-xs-8 first-xs first-sm last-md">
                <div class="box">
                  <img src="landing-how/he-works-on-it.svg" />
                </div>
              </div>
            </div>
          </div>

          <!-- He gives you the results -->
          <div class="landing-how__details">
            <div class="row center-xs middle-xs">
              <!-- Image -->
              <div class="col-md-5 col-xs-8">
                <div class="box">
                  <img src="landing-how/he-gives-you-the-results.svg" />
                </div>
              </div>
              <!-- Text -->
              <div class="col-md-4 col-xs-8">
                <div class="box">
                  <h3>He gives you the results</h3>
                  <p>Alfred will give you the result of his investigation and all the details of what he has done. Depending your decision he can even go further and keep going with it until you’re 100% satisfied.</p>
                  <div class="landing-how__details--tag">
                    Step 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="landing-how__after-content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-how__details {
  padding-bottom: spacing(5);
  @include breakpoint("sm") {
    padding-top: spacing(5);
  }

  img {
    width: 15em;
    padding-bottom: spacing(2);
  }
  h3 {
    color: $color-persistent-blue;
    text-align: left;
    padding-bottom: spacing(2);
  }
  p {
    font-size: sizing(2.5);
    max-width: 80%;
    @include breakpoint("xs") {
      max-width: 100%;
    }
    color: $color-detail;
    text-align: justify;
  }
}

.landing-how__details--tag {
  padding-top: spacing(3);
  text-align: left;
  color: $color-persistent-blue;
  font-size: sizing(2);
  text-transform: uppercase;
  font-weight: 600;
}

.landing-how__title {
  padding-top: 10vh;
  padding-bottom: 7vh;
  @include no-max-width();
  @include top-radius(100%);
  background-color: $color-light-grey;
}

.landing-how__content {
  @include no-max-width();
  position: relative;
  background-color: $color-light-grey;
}

.landing-how__after-content {
  @include no-max-width();
  position: absolute;
  height: 10vh;
  background-color: $color-light-grey;
}
</style>

<script>
export default {
  name: 'Landinglanding-how',
  props: {
  }
}
</script>
