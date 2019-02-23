<template>
  <div class="footer">
    <div class="footer__background">
      <div class="row center-xs">
        <div class="col-md-12">
          <div class="footer__terms">
            <nuxt-link to="/privacy-policy">Privacy policy</nuxt-link> |
            <nuxt-link to="/about-us">About us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  padding-top: spacing(20);
}

.footer__terms {
  padding: spacing(6);
  color: $color-white;
  a {
    color: $color-white;
  }
}

.footer__background {
  margin-top: 10em;
  @include background-absolute();
  @include top-radius(50%);
  bottom: 0;
  background: $color-blue no-repeat fixed left;
  overflow: hidden;
}
</style>

<script>
export default {
  name: 'DefaultFooter',
  props: {
  }
}
</script>
