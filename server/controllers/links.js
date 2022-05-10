import Links from "../models/links.js";
import Folders from "../models/folders.js";

const removeLinkFromFolder = async (folderID, linkID) => {
  const folderAtID = await Folders.findById(folderID);
  const linkIDAll = folderAtID.linkIDs;
  const filteredLinkIDs = linkIDAll.filter(id => id !== linkID);

  const folder = { linkIDs: filteredLinkIDs, dateModified: new Date() };
  await Folders.findByIdAndUpdate(folderID, folder, {
    new: true,
    runValidators: true
  });
};

export default {

  async getLinkById(req, res) {
    const id = parseInt(req.params.id);

    try {
      const linkRes = await Links.findById(id);
      if (!linkRes) {
        res.status(400).send({ success: false });
        return;
      }
      res.status(200).send({ success: true, data: linkRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async createLink(req, res) {
    const link = req.body;
    const newLink = new Links(link);

    try {
      await newLink.save();
      res.status(201).send({ success: true, data: newLink });
    } catch(error) {
      res.status(409).send({ success: false });
    }
  },

  async updateLink(req, res) {
    const id = parseInt(req.params.id);
    const link = req.body;

    try {
      const linkRes = await Links.findByIdAndUpdate(id, link, {
        new: true,
        runValidators: true
      });
      if (!linkRes) {
        res.status(400).send({ success: false });
        return;
      }
      res.status(200).send({ success: true, data: linkRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async deleteLink(req, res) {
    const linkID = parseInt(req.params.linkID);
    const folderID = parseInt(req.params.folderID);

    try {
      const linkRes = await Links.deleteOne({ _id: linkID });

      if (!linkRes) {
        res.status(400).send({ success: false })
        return;
      }
      removeLinkFromFolder(folderID, linkID);
      res.status(200).send({ success: true, data: linkRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  }

};
