import mongoose from "mongoose";

const foldersSchema = mongoose.Schema({
  folderName: String,
  urls: {
    type: [String],
    default: []
  },
  linkIDs: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    default: ""
  },
  tags: {
    type: [String],
    default: []
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateModified: {
    type: Date,
    default: new Date()
  }
});

const Folders = mongoose.model("Folders", foldersSchema);

export default Folders;
