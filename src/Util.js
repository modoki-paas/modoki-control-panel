export default {
  async asJSON (r) {
    if (r.data instanceof Blob) {
      const fetchRes = await fetch(window.URL.createObjectURL(r.data))
      const data = await fetchRes.json()

      return data
    }

    return JSON.parse(r.data)
  },
  base64URLDecode (s) {
    s = s.replace('-', '+') // 62nd char of encoding
    s = s.replace('_', '/') // 63rd char of encoding
    switch (s.length % 4) {
      case 0: break // No pad chars in this case
      case 2: s += '=='; break // Two pad chars
      case 3: s += '='; break // One pad char
    }

    return decodeURIComponent(escape(atob(s)))
  }
}
