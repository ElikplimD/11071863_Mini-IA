const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientId: Number,
    surname: String,
    otherNames: String,
    gender: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyName: String,
    emergencyContact: String,
    emergencyRelationship: String,
});

const EncounterSchema = new mongoose.Schema({
    patientId: Number,
    dateTime: Date,
    type: String,
    vitals: {
        bloodPressure: String,
        temperature: String,
        pulse: String,
        spo2: String,
    },
});

module.exports = { Patient: mongoose.model('Patient', PatientSchema), Encounter: mongoose.model('Encounter', EncounterSchema) };