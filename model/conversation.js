import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message:{
      type:String
    }
  },
  { timestamps: true }
);

export const Conversation = mongoose.model("conversation", conversationSchema);
