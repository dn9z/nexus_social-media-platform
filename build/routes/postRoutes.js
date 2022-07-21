"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const postController_1 = __importDefault(require("../controller/postController"));
const multer_config_1 = __importDefault(require("../multer-config"));
const router = express_1.default.Router();
router.use(passport_1.default.authenticate("jwt", { session: false }));
router.post("/create", multer_config_1.default.single("media"), postController_1.default.createPost);
router.delete("/delete/:id", postController_1.default.deletePost);
router.get("/paginate", postController_1.default.paginate);
router.get("/paginatebyid/:id", postController_1.default.paginateById);
exports.default = router;
