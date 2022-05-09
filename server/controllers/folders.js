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

  async getFolderById(req, res) {
    const id = parseInt(req.params.id);
    res.send("GET request in folder.js");
  },

  async createFolder(req, res) {
    const folder = req.body;
    const newFolder = new Folders(folder);

    try {
      await newFolder.save();
      res.status(201).send(newFolder);
    } catch(error) {
      res.status(409).send(error);
    }
  }

};
