"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const JWTStrategy = passport_jwt_1.default.Strategy;
function configureJwtStrategy(passport) {
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: (req) => {
            return req.cookies["jwt"];
        },
        secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    }, (jwtPayload, done) => {
        return (User_1.default.findById(jwtPayload.sub)
            .select("_id username email firstName lastName")
            .then((user) => {
            return done(null, user);
        })
            .catch((err) => {
            return done(err);
        }));
    }));
}
exports.default = configureJwtStrategy;
