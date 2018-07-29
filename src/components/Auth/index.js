import router from '@/router'
import util from '@/Util'

export default {
  _authType: null,
  _accesToken: null,
  _metaData: null,
  logout () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('auth_type')
    localStorage.removeItem('meta_data')

    this._authType = null
    this._accesToken = null

    router.replace('/login')
  },

  set MetaData (data) {
    localStorage.setItem('meta_data', JSON.stringify(data))
    this._metaData = data
  },
  get MetaData () {
    if (this._metaData != null) {
      return this._metaData
    }

    this._metaData = JSON.parse(localStorage.getItem('meta_data'))
    return this._metaData
  },
  set AuthType (type) {
    localStorage.setItem('auth_type', type)
    this._authType = type
  },
  get AuthType () {
    if (this._authType != null) {
      return this._authType
    }

    this._authType = localStorage.getItem('auth_type')
    return this._authType
  },
  set AccessToken (token) {
    localStorage.setItem('access_token', token)
    this._accesToken = token
  },
  get AccessToken () {
    if (this._accesToken != null) {
      return this._accesToken
    }

    this._accesToken = localStorage.getItem('access_token')
    return this._accesToken
  },
  get Payload () {
    const token = this.AccessToken
    if (token == null) {
      return null
    }
    return JSON.parse(util.base64URLDecode(token.split('.')[1]))
  },
  checkAccessToken () {
    const token = this.AccessToken

    if (token == null) {
      router.replace('/login')

      return null
    }

    const payload = this.Payload

    const expiresAt = payload.exp * 1000

    if (expiresAt < new Date().getTime()) {
      this.logout()

      return null
    }

    return token
  }
}
