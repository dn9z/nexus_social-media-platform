var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import * as Hook from "usehooks-ts";
var ListContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmargin-top: ", ";\n  width: 98%;\n  height: 99%;\n  overflow: hidden;\n"], ["\nmargin-top: ", ";\n  width: 98%;\n  height: 99%;\n  overflow: hidden;\n"])), function (props) { return props.marginTop; });
var Feed = function (_a) {
    var profileId = _a.profileId;
    var _b = useState(true), hasMore = _b[0], setHasMore = _b[1];
    var _c = useState(1), pageNumber = _c[0], setPageNumber = _c[1];
    var _d = useState([]), posts = _d[0], setPosts = _d[1];
    var match1500 = Hook.useMediaQuery("(max-width: 1500px)");
    var context = useContext(Context);
    // console.log(hasMore)
    function loadMore() {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.get("/api/post/paginate?page=".concat(pageNumber))];
                    case 1:
                        res = _a.sent();
                        setPosts(__spreadArray(__spreadArray([], posts, true), res.data, true));
                        setPageNumber(pageNumber + 1);
                        setHasMore(res.data.length > 0);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function loadMoreById() {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.get("/api/post/paginatebyid/".concat(profileId, "?page=").concat(pageNumber))];
                    case 1:
                        res = _a.sent();
                        setPosts(__spreadArray(__spreadArray([], posts, true), res.data, true));
                        setPageNumber(pageNumber + 1);
                        setHasMore(res.data.length > 0);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    useEffect(function () {
        if (context.needRefresh === true) {
            setPageNumber(1);
            setPosts([]);
            !profileId ? loadMore() : loadMoreById();
            context.setNeedRefresh(false);
            return function () {
                setPageNumber(1);
            };
        }
    }, [context.showPostModal, context.needRefresh]);
    // useEffect(() => {
    //   console.log(context.needRefresh)
    //   if(context.needRefresh) {
    //     context.setNeedRefresh(false)
    //     loadMore()
    //   }
    // }, [context.needRefresh])
    return (_jsx(_Fragment, { children: _jsx(ListContainer, __assign({ marginTop: match1500 ? "61px" : "0px" }, { children: _jsx(InfiniteScroll, __assign({ pageStart: 0, loadMore: function () {
                    !profileId ? loadMore() : loadMoreById();
                }, hasMore: hasMore, loader: _jsx("div", __assign({ className: "loader" }, { children: "Loading ..." }), 0), useWindow: false }, { children: posts.map(function (element, i) {
                    return _jsx(FeedItem, { post: element }, i);
                }) })) })) }));
};
export default Feed;
var templateObject_1;
