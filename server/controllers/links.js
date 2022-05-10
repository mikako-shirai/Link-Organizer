import Links from "../models/links.js";
import Folders from "../models/folders.js";

const getInfo = (link) => {
  const linkID = link._id;
  const folderID = link.folderID;
  const url = link.url;
  return { linkID, folderID, url };
};

const filterInfo = (folder, linkIDToDelete, urlToDelete) => {
  const linkIDAll = folder.linkIDs;
  const urlAll = folder.urls;

  const filteredLinkIDs = linkIDAll.filter(linkID => linkID !== linkIDToDelete);
  const filteredUrls = urlAll.filter(url => url !== urlToDelete);

  return { filteredLinkIDs, filteredUrls };
};

const addLinkToFolder = async (link) => {
  const { linkID, folderID, url } = getInfo(link);
  const folderAtID = await Folders.findById(folderID);

  const newLinkIDs = [...folderAtID.linkIDs, linkID];
  const newUrls = [...folderAtID.urls, url];

  const newFolder = { linkIDs: newLinkIDs, urls: newUrls, dateModified: new Date() };
  await Folders.findByIdAndUpdate(folderID, newFolder, {
    new: true,
    runValidators: true
  });
};

const removeLinkFromFolder = async (link) => {
  const { linkID, folderID, url } = getInfo(link);
  const folderAtID = await Folders.findById(folderID);

  const { filteredLinkIDs, filteredUrls } = filterInfo(folderAtID, linkID, url);

  const newFolder = { linkIDs: filteredLinkIDs, urls: filteredUrls, dateModified: new Date() };
  await Folders.findByIdAndUpdate(folderID, newFolder, {
    new: true,
    runValidators: true
  });
};

export default {

  async getAllLinks(req, res) {
    try {
      const allLinks = await Links.find({});
      res.status(200).send({ success: true, data: allLinks });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },

  async getLinkById(req, res) {
    const id = req.params.id;

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

    try {
      const linkRes = await Links.create(link);
      if (!linkRes) {
        res.status(400).send({ success: false });
        return;
      }
      await addLinkToFolder(linkRes);
      res.status(201).send({ success: true, data: linkRes });
    } catch(error) {
      res.status(409).send({ success: false });
    }
  },

  async updateLink(req, res) {
    const id = req.params.id;
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
    const id = req.params.id;

    try {
      const linkRes = await Links.deleteOne({ _id: id });

      if (!linkRes) {
        res.status(400).send({ success: false })
        return;
      }
      await removeLinkFromFolder(linkRes);
      res.status(200).send({ success: true, data: linkRes });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  }

};
