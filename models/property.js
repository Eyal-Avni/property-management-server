import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  city: String,
  street: String,
  number: Number,
  floor: Number,
  apt: Number,
  size: Number,
  rooms: Number,
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
