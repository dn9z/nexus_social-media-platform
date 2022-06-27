import jwt from "jsonwebtoken";
/**
 * Generates the token based on a user.
 * @param {*} user
 */
const generateToken = (user:any) => { // 'any' needs to be addressed
  const payload = { sub: user._id };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(token);
    });
  });
};

export default  generateToken ;
