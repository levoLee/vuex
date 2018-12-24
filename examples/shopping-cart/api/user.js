/**
 * Mocking client-server processing
 */
const _user = [
  { 'id': 1, 'name': 'user1', 'phone': 18250750571 },
  { 'id': 1, 'name': 'user2', 'phone': 18250750572 },
  { 'id': 1, 'name': 'user3', 'phone': 18250750573 }
]
export default {
  getUser (cb) {
    setTimeout(() => cb(_user), 3000)
  },
  commitPhoneNum (_user, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
