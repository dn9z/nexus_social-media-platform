"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const userController_1 = __importDefault(require("../controller/userController"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
router.get("/test", userController_1.default.test);
router.post("/login", userController_1.default.login);
router.post("/register", userController_1.default.register);
router.get("/logout", userController_1.default.logout);
router.use(passport_1.default.authenticate("jwt", { session: false }));
const storage = multer_1.default.diskStorage({
    //this is where the file will go 
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    //name of the file
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const originalNameNoExtenstion = file.originalname.split('.')[0];
        cb(null, `${originalNameNoExtenstion}-${Date.now()}.${ext}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.post("/editprofile", userController_1.default.editProfile);
router.get("/profile", userController_1.default.profile);
router.post("/uploadBackgroundImage", upload.single('image'), userController_1.default.uploadBackgroundImage);
router.post("/uploadImage", upload.single('image'), userController_1.default.uploadImage);
router.get("/getuserbyid/:id", userController_1.default.getUserById);
/* router.get("/getusersbyname//[a-zA-Z0-9]/g/", userController.getUsersByName); */
router.get("/getusersbyname/:username", userController_1.default.getUsersByName);
router.patch("/followuser/:id", userController_1.default.followUser);
router.patch("/unfollowuser/:id", userController_1.default.unfollowUser);
router.get("/getfollowing/:id", userController_1.default.getFollowingUsers);
router.get("/getfollowers/:id", userController_1.default.getFollowers);
exports.default = router;
