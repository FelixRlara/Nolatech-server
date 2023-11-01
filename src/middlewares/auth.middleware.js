import passport from "passport";

export const auth = (req, res, next) => {
  const performAuthentication = passport.authenticate('jwt', function(err, user, info) {
    if (err) return next(err);

    if (!user) return res.status(401).json({message: "Unauthorized Access - No Token Provided!"});
    req.user = user;

    next();
  });

  performAuthentication(req,res,next);
};