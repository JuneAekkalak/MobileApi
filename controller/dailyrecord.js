const DailyRecord = require('../models/dailyrecord');

exports.createDailyRecord = async (req, res) => {
    try {
        const { user_id, dateRecord, haveSymptoms, relatedDiseases, dailyDescription,
        } = req.body;
        try {
            const daily = await new DailyRecord({
                user_id,
                dateRecord,
                haveSymptoms,
                relatedDiseases,
                dailyDescription,
            }).save();
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            user_id,
            dateRecord,
            haveSymptoms,
            relatedDiseases,
            dailyDescription,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }

}

exports.readDailyRecord = async (req, res) => {
    try {

        const dailyrecord = await DailyRecord.find();
        if (!dailyrecord) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            dailyrecord,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readDailyRecordById = async (req, res) => {
    try {
        const { id } = req.body;
        const dailyrecord = await DailyRecord.find({ id });
        if (!dailyrecord) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            dailyrecord
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}