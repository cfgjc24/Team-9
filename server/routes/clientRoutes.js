import { Router } from 'express';
import * as Client from '../models/Client.js';

const router = Router();

router.get('/getAllClients', async (req, res) => {
    try {
        const allClients = await Client.getAllClients();
        res.json(allClients);
    }
    catch (err) {
        res.status(500).json({error :`could not get all clients ${err}`});
    }
})

router.get('/clientsNoStaff', async (req, res) => {
    try {
        const noStaff = await Client.noStaff();
        res.json(noStaff);
    }
    catch (err) {
        res.status(500).json({error :`could not get all clients with no staff${err}`});
    }
})

router.get('/clientsWaitlist', async (req, res) => {
    try {
        const waitlist = await Client.waitlist();
        res.json(waitlist);
    }
    catch (err) {
        res.status(500).json({error :`could not get waitlist${err}`});
    }
})

export default router;