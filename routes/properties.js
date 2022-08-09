import express from "express";
import {
  getProperties,
  createProperty,
  showProperty,
} from "../controllers/properties.js";
import catchAsync from "../utils/catchAsync.js";

const router = express.Router();
router.get("/", getProperties);
router.post("/", createProperty);

router.get("/:id", catchAsync(showProperty));

export default router;
