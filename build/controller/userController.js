"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFollowers = exports.getFollowingUsers = exports.getUsersByName = exports.unfollowUser = exports.followUser = exports.getUserById = exports.uploadBackgroundImage = exports.uploadImage = exports.profile = exports.editProfile = exports.logout = exports.login = exports.register = exports.test = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const authentificator_1 = __importDefault(require("../passport/authentificator"));
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).json({ message: "test successful" });
        }
        catch (error) {
            return res.status(400).json({ message: "Something went wrong creating the user", error });
        }
    });
}
exports.test = test;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const user = new User_1.default({
            registrationDate: new Date().toISOString(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        yield user.save();
        return res.status(200).json({ message: "User Created" });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong creating the user", error });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //check if the user exists with that email
    const user = yield User_1.default.findOne({ email: req.body.email });
    if (user === null) {
        return res.status(404).json({ message: "User with that email was not found" });
    }
    try {
        const checkPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (checkPassword) {
            //password is matching
            //Generate JWT token here
            const token = yield (0, authentificator_1.default)(user);
            // send httpOnly 🍪
            return res
                .status(200)
                .cookie("jwt", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
            })
                .json({
                message: "Login successful",
                // we are sending the user as an object with only selected keys
                user: { username: user.username, _id: user._id },
                token,
            });
        }
        else {
            return res.status(400).json({ message: "Passwords not matching" });
        }
    }
    catch (error) {
        console.log("the error ", error);
        return res.status(400).json({ message: "General error upon signing in." });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Remove the httpOnly cookie
    res
        .clearCookie("jwt", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    })
        .json({ message: "Logout successful" }); // saying we want to send a JSON object
    //.redirect("/");
});
exports.logout = logout;
// editProfile
const editProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const userResolved = yield User_1.default.findByIdAndUpdate(user._id, { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, username: req.body.username, bio: req.body.bio, location: req.body.location });
    return res.status(200).json("User updated");
});
exports.editProfile = editProfile;
// getting the profile 
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const updatedUser = yield User_1.default.findById(user._id);
    return res.status(200).json({ profile: updatedUser });
});
exports.profile = profile;
// upload image
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = req.user;
    const userUpdate = yield User_1.default.findByIdAndUpdate(user._id, { avatar: `/uploads/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}` });
    return res.status(200).json({ path: `/uploads/${(_b = req.file) === null || _b === void 0 ? void 0 : _b.filename}` });
});
exports.uploadImage = uploadImage;
// upload background image
const uploadBackgroundImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const user = req.user;
    const userUpdate = yield User_1.default.findByIdAndUpdate(user._id, { background: `/uploads/${(_c = req.file) === null || _c === void 0 ? void 0 : _c.filename}` });
    return res.status(200).json({ path: `/uploads/${(_d = req.file) === null || _d === void 0 ? void 0 : _d.filename}` });
});
exports.uploadBackgroundImage = uploadBackgroundImage;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.getUserById = getUserById;
const followUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const userToFollow = yield User_1.default.findById(req.params.id);
        const updatedUser = yield User_1.default.findByIdAndUpdate(user._id, {
            $push: { _following: userToFollow._id },
        });
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.followUser = followUser;
const unfollowUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const userToUnfollow = yield User_1.default.findById(req.params.id);
        const updatedUser = yield User_1.default.findByIdAndUpdate(user._id, {
            $pull: { _following: userToUnfollow._id },
        });
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.unfollowUser = unfollowUser;
const getUsersByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* const users = await User.find({username:req.params.input.match(/[a-zA-Z0-9]/g)}); */
        /*  const users = await User.find({username:{ $regex: /[a-zA-Z0-9]/g}}); */
        const users = yield User_1.default.find({ username: { $regex: req.params.username } });
        /* const users = await User.find({username:req.params.username});   */
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.getUsersByName = getUsersByName;
const getFollowingUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const users = yield User_1.default.findById(id).populate('_following');
        // const users = target._following
        // const following = await User.find({'_id':{$in:target._following}})
        return res.status(200).json(users._following);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.getFollowingUsers = getFollowingUsers;
const getFollowers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const users = yield User_1.default.find({ "_following": id });
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(400).json({ message: "Error happened", error: error });
    }
});
exports.getFollowers = getFollowers;
exports.default = { test, register: exports.register, login: exports.login, logout: exports.logout, profile: exports.profile, editProfile: exports.editProfile, uploadImage: exports.uploadImage, uploadBackgroundImage: exports.uploadBackgroundImage, followUser: exports.followUser, unfollowUser: exports.unfollowUser, getUserById: exports.getUserById, getUsersByName: exports.getUsersByName, getFollowingUsers: exports.getFollowingUsers, getFollowers: exports.getFollowers };
