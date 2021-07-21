const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../Models/User.model");

module.exports = {
  /*
   * method: POST
   * Description: Authenticate User
   */
  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        jwt.sign({ user: user }, "secretkey", (err, token) => {
          if (err) {
            res.status(200).json({
              massage: "UNAUTHORIZED",
            });
          } else {
            res.status(200).json({
              massage: "AUTHORIZED",
              token: token,
            });
          }
        });
      } else {
        res.status(200).json({
          massage: "UNAUTHORIZED",
        });
      }
    } catch (err) {
      res.status(200).json({
        massage: "UNAUTHORIZED",
      });
    }
  },
};
