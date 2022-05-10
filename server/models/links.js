import mongoose from "mongoose";

const linkSchema = mongoose.Schema({
  url: String,
  folderID: String,
  caption: {
    type: String,
    default: ""
  },
  dateAdded: {
    type: Date,
    default: new Date()
  },
  tags: {
    type: [String],
    default: []
  }
});

const Links = mongoose.model("Links", linkSchema);

export default Links;
