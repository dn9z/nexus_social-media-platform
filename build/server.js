"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const passport_config_1 = __importDefault(require("./passport/passport-config"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
app.set("port", process.env.PORT || 3000);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: true,
}));
//initialize passport
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
(0, passport_config_1.default)(passport_1.default);
mongoose_1.default
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} // needs to be added for typescript
)
    .then(() => {
    console.log("we are connected to the database.");
})
    .catch((error) => {
    console.log("an error occurred while connecting to the db", error);
});
app.use("/api/user", userRoutes_1.default);
app.use("/api/post", postRoutes_1.default);
app.use("/api/comment", commentRoutes_1.default);
app.use("/api/messages", messageRoutes_1.default);
app.use("/uploads", express_1.default.static("uploads"));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname + "/client/build/index.html"));
});
app.all("*", (req, res) => {
    res.status(500);
    res.send("Invalid path");
});
app.listen(app.get("port"), () => {
    console.log("Server is listening on port", app.get("port"));
});
