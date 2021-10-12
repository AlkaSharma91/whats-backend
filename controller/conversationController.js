import { Conversation } from "../model/conversation.js";

export const newConversation = async (req, res) => {
  console.log("request came at new conversation");
  let senderId = req.body.senderId;
  let receiverId = req.body.receiverId;

  try {
    const exists = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    console.log("exists is", exists);

    if (exists) {
      console.log("conversation already created");
      res.status(200).json("conversation already created");
      return;
    }
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    console.log("new conversation created");
    res.status(200).json("new conversation created");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConversation = async (req, res) => {
  console.log("request came at get conversation");
  let senderId = req.body.sender;
  let receiverId = req.body.receiver;

  try {
    const conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    console.log("conversation is", conversation);

    return res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
