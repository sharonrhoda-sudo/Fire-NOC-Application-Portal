const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");


// USER SIGNUP

router.post("/signup", async (req, res) => {

  const {
    name,
    email,
    password
  } = req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [
      name,
      email,
      hashedPassword
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Signup Successful"
      });

    }
  );

});


// USER LOGIN

router.post("/login", (req, res) => {

  const {
    email,
    password
  } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {

        return res.json({
          message: "User Not Found"
        });

      }

      const valid =
        await bcrypt.compare(
          password,
          result[0].password
        );

      if (!valid) {

        return res.json({
          message: "Wrong Password"
        });

      }

      res.json({
        message: "Login Success",
        user: result[0]
      });

    }
  );

});


// APPLY NOC

router.post("/apply", (req, res) => {

  const {
    applicantName,
    buildingName,
    address,
    buildingType
  } = req.body;

  db.query(
    `INSERT INTO applications
    (applicantName,buildingName,address,buildingType)
    VALUES (?,?,?,?)`,
    [
      applicantName,
      buildingName,
      address,
      buildingType
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Application Submitted"
      });

    }
  );

});


// GET APPLICATIONS

router.get("/applications", (req, res) => {

  db.query(
    "SELECT * FROM applications",
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

});


// TRACK APPLICATION

router.get("/track/:id", (req, res) => {

  db.query(
    "SELECT * FROM applications WHERE id=?",
    [req.params.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

});


// APPROVE

router.put("/approve/:id", (req, res) => {

  db.query(
    "UPDATE applications SET status='Approved' WHERE id=?",
    [req.params.id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Approved"
      });

    }
  );

});


// REJECT

router.put("/reject/:id", (req, res) => {

  db.query(
    "UPDATE applications SET status='Rejected' WHERE id=?",
    [req.params.id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Rejected"
      });

    }
  );

});


// CONTACT US

router.post("/contact", (req, res) => {

  const {
    name,
    email,
    message
  } = req.body;

  db.query(
    "INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
    [
      name,
      email,
      message
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Message Sent"
      });

    }
  );

});


// REPORTS

router.get("/stats", (req, res) => {

  db.query(
    `
    SELECT
    COUNT(*) AS total,
    SUM(status='Approved') AS approved,
    SUM(status='Rejected') AS rejected,
    SUM(status='Pending') AS pending
    FROM applications
    `,
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result[0]);

    }
  );

});

module.exports = router;