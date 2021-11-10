function errorHandler(err, req, res, next) {
  if (!err.status) {
    res.status(500).json({ error: "Internal server error" });
  }
  return res.status(err.status).json({ error: err.message });
}

module.exports = errorHandler;
