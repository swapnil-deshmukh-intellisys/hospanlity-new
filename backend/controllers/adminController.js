const db = require("../config/db");
const bcrypt = require("bcryptjs");

const adminLogin = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      if (result.length === 0) {
        return res.status(401).json({
          success: false,
          message: "Invalid Email or Password",
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        result[0].password
      );

      if (isMatch) {
        return res.status(200).json({
          success: true,
          message: "Login Successful",
        });
      }

      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
  );
};

module.exports = { adminLogin };

//login check
//add room
//update room
//delete room
//view booking
