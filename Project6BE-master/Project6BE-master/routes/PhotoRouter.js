const express = require("express");
const Photo = require("../db/photoModel");
const User = require("../db/userModel");
const router = express.Router();
const upload = require("../config/UploadPhoto");
const HttpStatusCode=require('../Exception/HttpStatusCode');

router.get("/photosOfUser/:id", async (request, response) => {
    try {
        const userId = request.params.id;
        const photos = await Photo.find({ user_id: userId });

        if (!photos) {
            return response.status(HttpStatusCode.NOT_FOUND).json({ message: "Photos not found" });
        }

        const updatedPhotos = await Promise.all(photos.map(async (photo) => {
            const updatedComments = await Promise.all(photo.comments.map(async (cmt) => {
                const UID = cmt.user_id;
                const user = await User.findById(UID);
                return {
                    comment: cmt.comment,
                    date_time: cmt.date_time,
                    user: {
                        _id: user._id,
                        last_name: user.last_name
                    }
                };
            }));

            return {
                _id: photo._id,
                file_name: photo.file_name,
                date_time: photo.date_time,
                user_id: photo.user_id,
                comments: updatedComments
            };
        }));

        response.status(HttpStatusCode.OK).json(updatedPhotos);
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error);
    }
});

router.post("/new", upload.fields([{ name: "img", maxCount: 1 }]), async (req, res) => {
    try {
        debugger
        const user = await User.findOne({
            email: req.decodedJWT.email
        });
        const link_img = req.files['img'][0];
        const newPhoto = new Photo({
            file_name: link_img.path,
            date_time: Date.now(),
            user_id: user._id,
            comments: []
        });
        await newPhoto.save();
        res.status(HttpStatusCode.OK).json({ "message": "upload successfully" });
    } catch (error) {
        console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
})

router.post("/new/comment", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.decodedJWT.email
        });
        const comment = req.body.comment;
        const photoId = req.body.photoId;
        const photo = await Photo.findOne({ _id: photoId });
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }
        const newComment = {
            comment: comment,
            date_time: new Date(),
            user_id: user._id 
        };
        photo.comments.push(newComment);
        await photo.save();
        res.status(HttpStatusCode.OK).json({ message: "Comment added successfully" });
    } catch (error) {
        console.log(error);
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
});

module.exports = router;