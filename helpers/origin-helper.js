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

  setToken(vm, token) {
    this.setCookie(vm, 'token', token)
  }

  addToOrigin(vm, addedOrigin) {
    const currentOrigin = vm.$cookies.get('origin')
    const endValue = Object.assign({}, addedOrigin, currentOrigin)

    this.setCookie(vm, 'origin', endValue)
  }

  getCookie(vm, label) {
    vm.$cookies.get(label, this.cookieSettings())
  }

  setCookie (vm, label, value) {
    vm.$cookies.set(label, value, this.cookieSettings({ maxAge: 60 * 60 * 24 * 365 * 10 }))
  }

  cookieSettings (extra = {}) {
    return Object.assign({
      path: '/',
      domain: this.getDomain(),
    }, extra)
  }
}

export default new OriginHelper()
