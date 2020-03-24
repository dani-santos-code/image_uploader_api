const isAuth = async (req, res, next) => {
  if (req.method === "GET") {
    res.sendStatus(403);
  } else {
    next();
  }
};

module.exports = { isAuth };
