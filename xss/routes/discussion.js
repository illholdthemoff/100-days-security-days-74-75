const express = require("express");
const xss = require("xss");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/discussion");
});

router.get("/discussion", async function (req, res) {
  const comments = await db.getDb().collection("comments").find().toArray();
  res.render("discussion", { comments: comments });
});

router.post("/discussion/comment", async function (req, res) {
  const comment = {
    text: xss(req.body.comment), // wrapping the text content in the xss tag, to scrub and clean it so it displays as raw text, instead of allowing users to write javascript or whatever in the comment box and causing site wide issues
  };

  await db.getDb().collection("comments").insertOne(comment);

  res.redirect("/discussion");
});

module.exports = router;
