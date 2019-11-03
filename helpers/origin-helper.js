class OriginHelper {
  setFrom (vm) {
    if (process.server) return;

    const getVariables = vm.$route.query
    const httpReferrer = { referrer: document.referrer }
    const endValue = Object.assign({}, getVariables, httpReferrer)

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
