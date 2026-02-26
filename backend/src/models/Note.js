import mongoose from "mongoose";

//1. Create a Schema
//2. Create a Model based on the Schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }, //createdAt //updatedAt
);

const Note = mongoose.model("Note", noteSchema);
export default Note