export default {
  async asJSON (r) {
    const fetchRes = await fetch(window.URL.createObjectURL(r.data))
    const data = await fetchRes.json()

    return data
  }
}
