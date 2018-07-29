import firebase from 'firebase/app'
import 'firebase/auth'
// import router from '@/router'
import Auth from '../'
import firebaseui from 'firebaseui'

export default class AuthService {
  constructor (config, metaDataBinding) {
    if (firebase.apps.length) {
      return
    }

    this.config = JSON.parse(JSON.stringify(config))
    this.MetaDataBinding = metaDataBinding

    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    firebase.initializeApp(this.config)
  }

  login (query) {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log(authResult)
          localStorage.setItem('hoge', JSON.stringify(authResult))
          return true
        },
        uiShown: function () {
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInSuccessUrl: '/web/callback/firebase',
      signInFlow: 'popup',
      queryParameterForWidgetMode: 'firebase-mode',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    }

    if (firebaseui.auth.AuthUI.getInstance() != null) {
      return
    }

    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start(query, uiConfig)

    //    this.auth0.authorize()
  }

  handleResponse () {
    return new Promise((resolve, reject) => {
      var ubsubscribe = firebase.auth().onAuthStateChanged(function (user) {
        ubsubscribe()

        if (user) {
          user.getIdToken().then(function (accessToken) {
            resolve(accessToken)
          })
        } else {
          reject(new Error('logout'))
        }
      }, function (error) {
        reject(error)
      })
    })
  }

  setSession (idToken) {
    Auth.AuthType = 'firebase'
    Auth.AccessToken = idToken

    const payload = Auth.Payload

    var metadata = {}
    console.log(this.MetaDataBinding)
    for (const key in this.MetaDataBinding) {
      var t = Object.assign({}, payload)

      for (var v of this.MetaDataBinding[key].split('.')) {
        t = t[v]
      }

      metadata[key] = t
    }
    Auth.MetaData = metadata
  }
}
