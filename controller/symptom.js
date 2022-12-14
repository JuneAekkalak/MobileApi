const Symptom = require('../models/symptom');

exports.createSymptom = async (req, res) => { 
    try {
        const { symptomName , imageUrl , discription } = req.body;
        const symptom = await Symptom.findOne({ symptomName });
        if (symptom) {
            return res.json({
                error: "symptom name duplicate",
            });
        }
        try {
            const sym = await new Symptom({
                symptomName,
                imageUrl,
                discription,
            }).save(); 
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            symptomName,
            imageUrl,
            discription,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }

}

exports.readSymptom = async (req, res) => { 
    try {
       
        const symptom = await Symptom.find();
        if (!symptom) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            symptom,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readBodyTypeById = async (req, res) => { 
    try {
        const { id } = req.body;
        const symptom = await Symptom.find({ id });
        if (!symptom) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            symptom
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}