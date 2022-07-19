var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import styled from "styled-components";
import axiosApiInstance from "../../util/axiosInstance";
import UserItem from "../User/UserItem";
import SearchInput from "../../components/Inputs/SearchInput";
var ListContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 5rem;\n"], ["\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 5rem;\n"])));
var UsersList = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n"], ["\n  list-style: none;\n"])));
var SearchBarContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var UserSearch = function () {
    var _a = useState(""), searchInput = _a[0], setSearchInput = _a[1];
    var _b = useState([]), users = _b[0], setUsers = _b[1];
    function getUsers() {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.get("/api/user/getusersbyname/".concat(searchInput))];
                    case 1:
                        res = _a.sent();
                        setUsers(res.data);
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
    return (_jsx(_Fragment, { children: _jsxs(ListContainer, { children: [_jsx(SearchBarContainer, { children: _jsx(SearchInput, { onClick: function () {
                            searchInput.length > 0 && getUsers();
                        }, onChange: function (e) {
                            setSearchInput(e.target.value);
                        }, searchValue: searchInput, placeholder: "Search users" }) }), _jsx(UsersList, { children: users.map(function (element, i) {
                        return _jsx(UserItem, { user: element }, i);
                    }) })] }) }));
};
export default UserSearch;
var templateObject_1, templateObject_2, templateObject_3;
