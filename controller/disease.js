const Disease = require('../models/disease');

exports.createDisease = async (req, res) => {
    try {
        const { diseaseName, detail, symptom, complications, progression, isolation, cause, treatment, selfCare, symptomKeyword } = req.body;
        const disease = await Disease.findOne({ diseaseName });
        if (disease) {
            return res.json({
                error: "symptom name duplicate",
            });
        }
        try {
            const disease = await new Symptom({
                diseaseName,
                detail,
                symptom,
                complications,
                progression,
                isolation,
                cause,
                treatment,
                selfCare,
                symptomKeyword
            }).save();
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            diseaseName,
            detail,
            symptom,
            complications,
            progression,
            isolation,
            cause,
            treatment,
            selfCare,
            symptomKeyword
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }

}

exports.readDisease = async (req, res) => {
    try {

        const disease = await Disease.find();
        if (!disease) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            disease,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readDiseaseById = async (req, res) => {
    try {
        const { id } = req.body;
        const disease = await Disease.find({ id });
        if (!disease) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            disease
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}