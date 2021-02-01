import crypto from 'crypto';

const currentWeekNumber = () => {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const md5 = (input) => {
  return crypto.createHash('md5').update(input).digest("hex");
}

export default (req, res) => {
  const clientIP = req.socket.remoteAddress
  const week = currentWeekNumber()
  const userAgent = req.headers['user-agent']
  const acceptLanguage = req.headers['accept-language']
  const host = req.headers.host
  const clientIDSource = `${clientIP}|${host}|${userAgent}|${acceptLanguage}|${week}`

  res.status(200)
  res.setHeader('Content-Type', 'text/javascript')
  res.send(`user_id='${md5(clientIDSource)}'`)
}