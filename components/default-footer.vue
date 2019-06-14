<template>
  <div class="footer">
    <div class="footer__background">
      <div class="row center-xs">
        <div class="col-md-12">
          <div class="footer__terms">
            <nuxt-link
              rel="canonical"
              to="/terms-of-use"
            >Terms of use</nuxt-link> |
            <nuxt-link
              rel="canonical"
              to="/privacy-policy"
            >Privacy policy</nuxt-link> |
            <nuxt-link
              rel="canonical"
              to="/legal-notice"
            >Legal notice</nuxt-link> |
            <nuxt-link
              rel="canonical"
              to="/about-us"
            >About us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultFooter',
  props: {
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding-top: big-spacing(2);
}

.footer__terms {
  padding: spacing(6);
  color: $text-footer-color;
  a {
    color: $text-footer-color;
  }
}

.footer__background {
  margin-top: big-spacing(3.3);
  @include background-absolute();
  @include top-radius(50%);
  bottom: 0;
  background: $background-footer-color no-repeat fixed left;
  overflow: hidden;
}
</style>
