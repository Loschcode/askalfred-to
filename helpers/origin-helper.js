class OriginHelper {
  setFrom (vm) {
    if (process.server) return;

    const endValue = vm.$route.query

    vm.$cookies.set('origin', endValue, {
      path: '/',
      domain: this.getDomain()
    })
  }

  getDomain () {
    if (process.env.NODE_ENV !== 'production') return 'localhost'
    return 'askalfred.to'
  }
}

export default new OriginHelper()
