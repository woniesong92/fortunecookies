import request from 'superagent'

export const getFortuneCookie = (callback) => {
  request
    .get('http://fortunecookieapi.com/v1/cookie')
    .end((err, res) => {
      if (err) {
        callback({ err })
      } else {
        callback(res.body[0].fortune)
      }
    })
}
