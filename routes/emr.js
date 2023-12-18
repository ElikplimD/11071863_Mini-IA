const express = require('express');
const { Patient, Encounter } = require('../models/Patient');

const router = express.Router();

// Register patient
router.post('/register', async (req, res) => {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
});

// Start encounter
router.post('/start', async (req, res) => {
    const encounter = new Encounter(req.body);
    await encounter.save();
    res.status(201).json(encounter);
});

// Submit vitals
router.put('/vitals/:patientId', async (req, res) => {
    const encounter = await Encounter.findOne({ patientId: req.params.patientId });
    if (!encounter) return res.status(404).json({ error: 'Encounter not found' });

    encounter.vitals = req.body;
    await encounter.save();
    res.status(200).json(encounter);
});

// Retrieve patient details
router.get('/patient/:patientId', async (req, res) => {
    const patient = await Patient.findOne({ patientId: req.params.patientId });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });

    res.status(200).json(patient);
});

// Retrieve list of patients
router.get('/patients', async (req, res) => {
    const patients = await Patient.find();
    res.status(200).json(patients);
});

module.exports = router;