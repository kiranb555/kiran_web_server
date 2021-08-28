import express from 'express';

const router = express.Router();

router.route('/restorent').get((req, res) => res.send("Hello restorent world"));


export default router;