import isAuthenticated from "./Authentication/Auth.js";
import LIST from "./Database/List.js";
import express from "express";
const router = express.Router();

const listControle = router
  .post("/createlist", isAuthenticated, async (req, res) => {
    try {
      await LIST.create(req.body);
      res.status(201).json({ message: "uploaded" });
    } catch (error) {}
  })
  .get("/all", isAuthenticated, async (req, res) => {
    try {
      const data = await LIST.find({});
      const count = await LIST.count();
      res.status(201).json({ message: "uploaded", count, data });
    } catch (error) {}
  })
  .delete("/:id", isAuthenticated, async (req, res) => {
    try {
      const data = await LIST.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Deleted" });
    } catch (error) {}
  })
  .get("/:id", isAuthenticated, async (req, res) => {
    try {
      const data = await LIST.findById(req.params.id);
      res.status(201).json({ data });
    } catch (error) {}
  })
  .patch("/:id", isAuthenticated, async (req, res) => {
    try {
      const data = await LIST.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ message: "Updated" });
    } catch (error) {}
  });

export default listControle;
