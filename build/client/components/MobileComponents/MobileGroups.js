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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
var Group = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmargin: auto;\nborder: 1px solid black;\nwidth: 50px;\nheight: 50px;\nbackground-color: white;\nborder-radius: 50%;\n\n\n"], ["\nmargin: auto;\nborder: 1px solid black;\nwidth: 50px;\nheight: 50px;\nbackground-color: white;\nborder-radius: 50%;\n\n\n"])));
var MobileGroups = function () {
    var context = React.useContext(Context);
    return (_jsxs(Swiper
    // install Swiper modules
    , __assign({ 
        // install Swiper modules
        modules: [Navigation, Pagination], spaceBetween: 3, slidesPerView: 5, navigation: true, 
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper: function (swiper) { return console.log(swiper); }, onSlideChange: function () { return console.log('slide change'); }, breakpoints: {
            // when window width is >= 300px
            300: {
                width: 300,
                slidesPerView: 6,
            }
        } }, { children: [_jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) }), _jsx(SwiperSlide, { children: _jsx(Group, {}) })] })));
};
export default MobileGroups;
var templateObject_1;
