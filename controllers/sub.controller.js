import Sub from "../models/sub.model.js";

export const createSub = async (req, res, next) => {
    try {
        const sub = await Sub.create({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({
            success: true,
            data: sub,
        });
    } catch (error) {
        next(error);
    }
};

export const getUserSub = async (req, res, next) => {
    try {
        if (req.user._id !== req.params.id) {
            const error = new Error("You are not the owner of this account");
            error.status = 401;
            throw error;
        }

        const subs = await Sub.find({ user: req.params.id });

        res.status(200).json({
            success: true,
            data: subs,
        });
    } catch (error) {
        next(error);
    }
};