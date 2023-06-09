import { Schema, model, mongoose } from "mongoose";

const schema = new Schema(
  {
    email: { type: String, require: true },
    products: { type: Array, require: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const carritosSchema = model("carritos", schema);