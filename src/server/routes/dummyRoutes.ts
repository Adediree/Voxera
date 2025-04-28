import express from 'express';
import {apiClient} from "../utils/apiClient";

const router = express.Router();
const controller = "dummy";
router.get("/read", async (_, res) => {
    const response = await apiClient.get(`/${controller}/read`);
    res.json({...response.data})
});
router.delete("/delete/:id", async (req, res) => {
    const response = await apiClient.delete(`/${controller}/delete/${req?.params.id}`);
    res.json({...response.data})

});
router.post("/update", async (req, res) => {
    const response = await apiClient.post(`/${controller}/update`, req.body);
    res.json({...response.data})

});
router.post("/create", async (req, res) => {
    const response = await apiClient.post(`/${controller}/create`, req.body);
    res.json({...response.data})
});

export default router;
