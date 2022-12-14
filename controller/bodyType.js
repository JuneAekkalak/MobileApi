const BodyType = require('../models/bodyType');

exports.createType = async (req, res) => { 
    try {
        const { typeName , symptom } = req.body;
        const bodytype = await BodyType.findOne({ typeName });
        if (bodytype) {
            return res.json({
                error: "Body Type duplicate",
            });
        }
        try {
            const bodytype = await new BodyType({
                typeName,
                symptom,
            }).save(); 
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            typeName,
            symptom
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readBodyType = async (req, res) => { 
    try {
       
        const bodytype = await BodyType.find();
        if (!bodytype) {
            return res.json({
                error: "No bodytype found",
            });
        }
        res.json({
            bodytype,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readBodyTypeById = async (req, res) => { 
    try {
        const { id } = req.body;
        const bodytype = await BodyType.find({ id });
        if (!bodytype) {
            return res.json({
                error: "No bodytype found",
            });
        }
        res.json({
            bodytype,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}