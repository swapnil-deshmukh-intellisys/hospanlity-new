const db = require("../config/db");

const getDashboardData = (req, res) => {

  const query = `
  SELECT
  (SELECT COUNT(*) FROM rooms) as rooms,
  (SELECT COUNT(*) FROM bookings) as bookings,
  (SELECT COUNT(*) FROM users) as users,
  (SELECT SUM(amount) FROM bookings) as revenue
  `;

  db.query(query, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });
};

module.exports = { getDashboardData };