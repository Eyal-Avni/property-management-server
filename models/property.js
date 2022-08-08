import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});

const apartmentSchema = mongoose.Schema({
  floor: Number,
  apartmentNumber: Number,
});

const propertySchema = mongoose.Schema({
  address: {
    type: AddressSchema,
    required: true,
  },
  apartmentDetails: apartmentSchema,
  size: { type: Number, required: true },
  numberOfRooms: { type: Number, required: true },
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
