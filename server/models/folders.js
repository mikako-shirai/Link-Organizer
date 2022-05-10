import mongoose from "mongoose";

const foldersSchema = mongoose.Schema({
  folderName: String,
  linkIDs: [String],
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateModified: {
    type: Date,
    default: new Date()
  },
  tags: [String]
});

const Folders = mongoose.model("Folders", foldersSchema);

export default Folders;
