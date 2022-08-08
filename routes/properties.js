import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("this is the property managment route");
});

export default router;
