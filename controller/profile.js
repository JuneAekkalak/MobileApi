const Profile = require('../models/profile');

exports.createProfile = async (req, res) => {
    try {
        const { firstName, lastName, age, birthDate, address, profileImage, conDisease, contact, account_id,
        } = req.body;
        try {
            const profile = await new Symptom({
                firstName,
                lastName,
                age,
                birthDate,
                address,
                profileImage,
                conDisease,
                contact,
                account_id,
            }).save();
        }
        catch (err) {
            console.log(err);
        }

        res.json({
            firstName,
            lastName,
            age,
            birthDate,
            address,
            profileImage,
            conDisease,
            contact,
            account_id,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }

}

exports.readProfile = async (req, res) => {
    try {

        const profile = await Profile.find();
        if (!profile) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            profile,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}

exports.readProfileById = async (req, res) => {
    try {
        const { id } = req.body;
        const profile = await Profile.find({ id });
        if (!profile) {
            return res.json({
                error: "No symptom found",
            });
        }
        res.json({
            profile
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
}