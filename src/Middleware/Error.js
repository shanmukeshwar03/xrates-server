const Error = (error, req, res, next) => {
  console.log(error)
  res.send('Something went wrong')
}

export default Error
