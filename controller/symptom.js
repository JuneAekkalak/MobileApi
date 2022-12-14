const Symptom = require('../models/symptom');

exports.createSymptom = async (req, res) => { 
    try {
        const { symptomName , img , discription } = req.body;
        const symptom = await Symptom.findOne({ symptomName });
        if (symptom) {
            return res.json({
                error: "symptom name duplicate",
            });
        }
        try {
            const sym = await new Symptom({
                symptomName,
                img,
                discription,
            }).save(); 
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            symptomName,
            img,
            discription,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }

}