import mongoose from "mongoose";
import Page from "../models/page";

const updateLink = (pageName, exist) => {
    Pages.updateMany({ links: { $elemMatch: { name: pageName } } }, { $set: { "links.$.exist": exist } });
 };

export const getPage = (req, res) => {
    Page.findOne({ title: req.params.id }).exec((err, page) => {
        if (err) {
            return res.json({ success: false });
        }
        if (page !== null) {
            return res.json({ success: true, title: page.title, links: page.links, text: page.text });
        } else {
            return res.json({ success: false, pageMiss: true });
        }
    });
};

export const createPage = (req, res) => {
    Page.findOne({ title: req.params.id }).exec((err, page) => {
        if (err) {
            return res.json({ success: false });
        }
        if (page === null) {
            const page = new Page({ title: req.params.id, text: "Is fun!" });
            page.save((err, page) => {
                if (err) {
                    return res.json({ success: false });
                }
                return res.json({ success: true, text: "Is fun!" });
            });
        } else {
            return res.json({ success: false, duplicate: true });
        }
    });
};

export const linkPage = (req, res) => {
    Page.findOne({ title: req.params.id }).exec((err, page) => {
        if (err) {
            return res.json({ success: false });
        }
        if (page !== null) {
            let link = req.params.link;
            if (!page.links.includes(link)) {
                page.links.push(link);
                page.save((err, page) => {
                    if (err) {
                        return res.json({ success: false });
                    }
                    return res.json({ success: true });
                });
            } else {
                return res.json({ success: false, duplicate: true });
            }
        } else {
            return res.json({ success: false });
        }
    });
};

export const deletePage = (req, res) => {
    Page.findOne({ title: req.params.id }).exec((err, page) => {
        if (err) {
            return res.json({ success: false });
        }
        if (page !== null) {
            page.remove((err, page) => {
                if (err) {
                    return res.json({ success: false });
                }
                return res.json({ success: true });
            });
        } else {
            return res.json({ success: false });
        }
    });
};
