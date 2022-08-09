import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  city: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: Number, required: true },
  floor: Number,
  apt: Number,
  size: { type: Number, required: true },
  rooms: { type: Number, required: true },
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
