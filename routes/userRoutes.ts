import express from "express";
import passport from "passport";
import userController from "../controller/userController";
import multer from "multer"

const router = express.Router();

router.get("/test", userController.test);

router.post("/login", userController.login);

router.post("/register", userController.register);

router.get("/logout", userController.logout);

router.get("/allUser", userController.getAllUsers);

router.use(passport.authenticate("jwt", { session: false }));

const storage = multer.diskStorage({
    //this is where the file will go 
    destination:function(req, file, cb){
        cb(null,'./uploads');
    },

    //name of the file
    filename:function(req, file,cb){
        const ext = file.mimetype.split('/')[1];
        const originalNameNoExtenstion = file.originalname.split('.')[0];

        cb(null, `${originalNameNoExtenstion}-${Date.now()}.${ext}`);
    }
});

const upload = multer({storage:storage});

router.post("/editprofile", userController.editProfile);
router.get("/profile", userController.profile);

router.post("/uploadBackgroundImage",upload.single('image'), userController.uploadBackgroundImage)
router.post("/uploadImage",upload.single('image'), userController.uploadImage)

export default router;