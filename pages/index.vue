<template>
  <section class="col-md-12">
    <!-- What can you ask ? -->
    <what />

    <!-- How does it work ? -->
    <div class="how">
      <div class="row">
        <div class="how__title">
          <h2>How does it work?</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="how__content undo-wrap">

            <div class="how__details">
              <div class="row center-md middle-md">
                <div class="col-md-5">
                  <div class="box">
                    <img src="/how-you-send-request-to-alfred.svg" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box">
                    <h3>You send requests to Alfred</h3>
                    <p>If you encounter a time consuming task, just give it away to Alfred. It can be as simple as ordering something where phone calls are involved, organizing some nice vacations without specific dates or even fetching the documents needed for a visa.</p>
                    <div class="how__details--tag">
                      Step 1
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TODO: redo this shit it's not working -->
            <div class="how__after-content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/app";

.how__details {
  img {
    width: 15em;
  }
  h3 {
    color: $color-persistent-blue;
    text-align: left;
    padding-bottom: spacing(2);
  }
  p {
    font-size: sizing(2.5);
    max-width: 80%;
    color: $color-detail;
    text-align: justify;
  }
}

.how__details--tag {
  padding-top: spacing(3);
  text-align: left;
  color: $color-persistent-blue;
  font-size: sizing(2);
  text-transform: uppercase;
  font-weight: 600;
}

.how {
}

.how__title {
  padding: 10vh;
  @include no-max-width();
  @include top-radius(100%);
  background-color: $color-light-grey;
}

.how__content {
  @include no-max-width();
  position: relative;
  background-color: $color-light-grey;
}

.how__after-content {
  @include no-max-width();
  z-index: -1;
  position: absolute;
  top: 0;
  height: 12vh;
  background-color: $color-light-grey;
}
</style>

<script>
import What from '../components/what';

export default {
  components: {
    What
  }
}
</script>
