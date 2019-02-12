<template>
  <section class="col-md-12">
    <div class="row">
      <div class="col-md-4">
        <div class="box what__image">
          <img src="/index_phone.svg" />
        </div>
      </div>
      <div class="col-md-offset-4 col-md-4">
        <div class="box what__details">
          <h2>What can you ask to Alfred?</h2>
          <p>He can do any task you don't want to do.</p>

          <div class="row">
            <div class="col-md-12">
              <div class="what__messages">
                <div class="messages messages__request">
                  <div class="messages__request-arrow"></div>
                  I want to organize a romantic dinner with my girlfriend.
                </div>
                <div class="messages messages__answer">
                  Sure, what budget do you have?
                </div>
              </div>
            </div>
          </div>
        </div>
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

.what__messages {
  padding-top: spacing(5);
}

.messages {
  position: relative;
  padding: spacing(3);
}

.messages__request {
  background-color: $background-message-request;
  border: 1px solid $border-message-request;
  border-radius: 2px;
}

.messages__request-arrow {
  position: absolute;
  right: -30px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12.5px 2px 12.5px 25px;
  border-color: transparent transparent transparent $border-message-request;
}

.messages__request-arrow:after {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12.5px 2px 12.5px 25px;
  border-color: transparent transparent transparent $background-message-request;
  content: "";
  top: -22px;
  right: 0px;
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
    font-size: sizing(3);
    font-weight: 200;
  }
}
</style>
