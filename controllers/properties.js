import Property from "../models/property.js";

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProperty = async (req, res) => {
  const property = req.body;
  const newProperty = new Property(property);
  try {
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
