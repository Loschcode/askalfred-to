<template>
  <section class="col-md-12">
    <!-- What can you ask ? -->
    <div class="what">
      <div class="row center-xs">
        <div class="col-md-4">
          <div class="box what__image +more-than-sm">
            <img src="/index_phone.svg" />
          </div>
        </div>
        <div class="col-md-offset-2 col-md-4 center-sm start-lg">
          <div class="box what__details">
            <h2>What can you ask to Alfred?</h2>
            <p>He can do any task you don't want to do.</p>

            <div class="row center-xs start">
              <div class="col-md-12 col-xs-10">
                <div class="what__messages">

                  <div class="row">
                    <div class="col-md-12">
                      <div class="box messages messages__request">
                        <div class="messages__request-arrow"></div>
                        I want to organize a romantic dinner with my girlfriend.
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="box messages messages__answer">
                        <div class="messages__answer-arrow"></div>
                        Sure, what budget do you have?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row center-xs start-sm">
              <div class="col-md-12">
                <div class="box">
                  <a
                    class="what__call-to-action"
                    href="#"
                  >
                    See more examples
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- How does it work ? -->
    <div class="how">
      <div class="row">
        How does it work stuff
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
@import "assets/styles/app";

.what {
  padding-bottom: spacing(10);
}

.what__call-to-action {
  @include button-radius("big");
  margin: -0.5em;
  padding: spacing(4, 12, 4, 12);
  font-size: sizing(2);
  text-transform: uppercase;
  background-color: $color-blue;
  color: $color-white;
  font-weight: bold;
}

.what__messages {
  padding-bottom: spacing(8);
}

.messages {
  position: relative;
  padding: spacing(3);
  display: flex;
  margin-top: spacing(1);
  margin-bottom: spacing(1);
  max-width: 370px;
  word-wrap: break-word;
  border-radius: 2px;
}

.messages__request {
  background-color: $background-message-request;
  border: 1px solid $border-message-request;
  text-align: right;
  float: right;
}

.messages__request-arrow {
  position: absolute;
  right: -18px;
  top: 32%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 2px 10px 15px;
  border-color: transparent transparent transparent $border-message-request;
}

.messages__request-arrow:after {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 2px 10px 15px;
  border-color: transparent transparent transparent $background-message-request;
  content: "";
  top: -10px;
  right: 0px;
}

.messages__answer {
  background-color: $background-message-answer;
  border: 1px solid $border-message-answer;
  text-align: left;
  float: left;
}

.messages__answer-arrow {
  position: absolute;
  left: -18px;
  top: 32%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 10px 2px;
  border-color: transparent $border-message-answer transparent transparent;
}

.messages__answer-arrow:after {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 10px 2px;
  border-color: transparent $background-message-answer transparent transparent;
  content: "";
  top: -10px;
  left: 0px;
}

.what__image {
  img {
    width: 200em;
  }
}

.what__details {
  h2 {
    font-size: sizing(4);
    font-weight: 600;
  }
  p {
    padding-top: spacing(1);
    padding-bottom: spacing(5);
    font-size: sizing(3);
    font-weight: 200;
  }
}
</style>
