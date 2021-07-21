const jwt = require("jsonwebtoken");

module.exports = {
  /*
   * method: POST
   * Description: Authenticate User
   */
  loginAdmin: async (req, res, next) => {
    try {
      const admin ={
          name: process.env.ADMIN_NAME,
          password: process.env.ADMIN_PASS,
      }

      if ((req.body.name === process.env.ADMIN_NAME) && (req.body.password === process.env.ADMIN_PASS)) {
        jwt.sign({ admin: admin }, "secretkey", (err, token) => {
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