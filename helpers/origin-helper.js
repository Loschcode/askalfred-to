class OriginHelper {
  setFrom (vm) {
    if (process.server) return;

    const getVariables = vm.$route.query
    const httpReferrer = this.getHttpReferrer()

    this.addToOrigin(vm, httpReferrer)
    this.addToOrigin(vm, getVariables)
  }

  getDomain () {
    if (process.env.NODE_ENV !== 'production') return 'localhost'
    return 'askalfred.to'
  }

  getHttpReferrer () {
    if ((!document.referrer) || (document.referrer === '')) return {}
    return { referrer: document.referrer }
  }

  addToOrigin(vm, addedOrigin) {
    const currentOrigin = vm.$cookies.get('origin')
    const endValue = Object.assign({}, addedOrigin, currentOrigin)

    vm.$cookies.set('origin', endValue, {
      path: '/',
      domain: this.getDomain(),
      sameSite: false
    })
  }
}

export default new OriginHelper()
