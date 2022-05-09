import mongoose from "mongoose";

const linkSchema = mongoose.Schema({
  folderID: String,
  caption: [String],
  dateAdded: {
    type: Date,
    default: new Date()
  },
  tags: [String]
});

const Links = mongoose.model("Links", linkSchema);

export default Links;
