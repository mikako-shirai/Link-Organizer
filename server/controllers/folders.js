import Folders from "../models/folders.js";

export default {

  async getAllFolders(req, res) {
    try {
      const allFolders = await Folders.find({});
      res.status(200).send({ success: true, data: allFolders });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async getFolderById(req, res) {
    const id = parseInt(req.params.id);

    try {
      const folderRes = await Folders.findById(id);
      if (!folderRes) {
        res.status(400).send({ success: false });
        return;
      }
      res.status(200).send({ success: true, data: folderRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async createFolder(req, res) {
    const folder = req.body;
    const newFolder = new Folders(folder);

    try {
      await newFolder.save();
      res.status(201).send({ success: true, data: newFolder });
    } catch(error) {
      res.status(409).send({ success: false });
    }
  },

  async updateFolder(req, res) {
    const id = parseInt(req.params.id);
    const folder = req.body;

    try {
      const folderRes = await Folders.findByIdAndUpdate(id, folder, {
        new: true,
        runValidators: true
      });
      if (!folderRes) {
        res.status(400).send({ success: false });
        return;
      }
      res.status(200).send({ success: true, data: folderRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async deleteFolder(req, res) {
    const id = parseInt(req.params.id);

    try {
      const folderRes = await Folders.deleteOne({ _id: id });

      if (!folderRes) {
        res.status(400).send({ success: false });
        return;
      }
      res.status(200).send({ success: true, data: folderRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  }

};
