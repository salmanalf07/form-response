module.exports = {
  isLogin: async (req, res, next) => {
    if (!req.session.user && req.url == "/") {
      // if (!req.session.isAuthenticated && req.url == "/") {
      req.flash("alertMessage", "Mohon maaf session anda telah habis");
      res.redirect("/");
      return;
    } else {
      req.session.fake = Date.now();
      next();
    }
  },
};
