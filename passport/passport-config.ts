import User from "../models/User";
import passportJWT from "passport-jwt";
const JWTStrategy = passportJWT.Strategy;

function configureJwtStrategy(passport: any){ // any needs to be changed
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies["jwt"];
        },
        secretOrKey: process.env.ACCESS_TOKEN_SECRET,
      },
      (jwtPayload, done) => {
        return (
          User.findById(jwtPayload.sub)
            .select("_id username email firstName lastName")
            .then((user) => {
              return done(null, user);
            })
            .catch((err) => {
              return done(err);
            })
        );
      }
    )
  );
}
export default configureJwtStrategy;