<template>
  <section class="what-can-you-ask">
    <div class="col-md-12">
      <div class="row center-xs">
        <div class="col-md-5 col-xs-12">
          <div class="what-can-you-ask__block">
            <h3>Travel</h3>
            <p>If you encounter a time consuming task, just give it away to Alfred. It can be as simple as ordering something where phone calls are involved, organizing some nice vacations without specific dates or even fetching the documents needed for a visa.</p>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <div class="what-can-you-ask__block">
            <h3>Travel</h3>
            <p>If you encounter a time consuming task, just give it away to Alfred. It can be as simple as ordering something where phone calls are involved, organizing some nice vacations without specific dates or even fetching the documents needed for a visa.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/app";
.what-can-you-ask__block {
  &:hover {
    cursor: pointer;
    @include button-radius(medium);
    background-color: #e4edff;
    p {
      color: #4979d5;
    }
  }

  margin-left: sizing(5);
  margin-right: sizing(5);
  padding: sizing(3);

  h3 {
    color: #4979d5;
    font-weight: 600;
    text-align: left;
  }

  p {
    margin-top: sizing(2);
    color: #808988;
    font-size: sizing(2.7);
    text-align: justify;
  }
}
</style>

<script>
export default {
  layout: 'default',
  components: {
  }
}
</script>
