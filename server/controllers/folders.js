import Folders from "../models/folders.js";

export default {

  async getAllFolders(req, res) {
    try {
      const allFolders = await Folders.find();
      res.status(200).send(allFolders);
    } catch(error) {
      res.status(404).send(error);
    }
  },

  getFolderById(req, res) {
    res.send("GET request in folder.js");
  },

  createFolder(req, res) {
    res.send("POST request in folder.js");
  }

};
