import mongoose from "mongoose";

const FlashCardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isAnswered: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("flashcard", FlashCardSchema);
