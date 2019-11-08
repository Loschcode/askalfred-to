class OriginHelper {
  setFrom (vm) {
    if (process.server) return;

    const getVariables = vm.$route.query
    const httpReferrer = this.getHttpReferrer()
    const endValue = Object.assign({}, getVariables, httpReferrer)

    vm.$cookies.set('origin', endValue, {
      path: '/',
      domain: this.getDomain(),
      sameSite: false
    })
  }

  getDomain () {
    if (process.env.NODE_ENV !== 'production') return 'localhost'
    return 'askalfred.to'
  }

  getHttpReferrer () {
    if ((!document.referrer) || (document.referrer === '')) return {}
    return { referrer: document.referrer }
  }
}

export default new OriginHelper()
