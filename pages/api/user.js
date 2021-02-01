export default (req, res) => {
  res.status(200)
  res.setHeader('Content-Type', 'text/javascript')
  res.send(`user_id='abc'`)
}
