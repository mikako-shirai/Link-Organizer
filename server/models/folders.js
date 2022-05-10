import mongoose from "mongoose";

const foldersSchema = mongoose.Schema({
  folderName: String,
  linkIDs: {
    type: [String],
    default:[]
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateModified: {
    type: Date,
    default: new Date()
  },
  tags: {
    type: [String],
    default:[]
  }
});

const Folders = mongoose.model("Folders", foldersSchema);

export default Folders;
