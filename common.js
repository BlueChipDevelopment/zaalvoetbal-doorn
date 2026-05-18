"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[76],{

/***/ 11301:
/*!*****************************************************************!*\
  !*** ./src/app/components/empty-state/empty-state.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function EmptyStateComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hint);
  }
}
let EmptyStateComponent = /*#__PURE__*/(() => {
  class EmptyStateComponent {
    constructor() {
      this.icon = 'inbox';
      this.message = '';
    }
    static {
      this.ɵfac = function EmptyStateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmptyStateComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmptyStateComponent,
        selectors: [["app-empty-state"]],
        inputs: {
          icon: "icon",
          message: "message",
          hint: "hint"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 6,
        vars: 3,
        consts: [[1, "empty-state"], [1, "icon"], [1, "message"], ["class", "hint", 4, "ngIf"], [1, "hint"]],
        template: function EmptyStateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmptyStateComponent_p_5_Template, 2, 1, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hint);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
        styles: [".empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 2rem 1rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: 3rem;\n  width: 3rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n}\n.empty-state[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNFZTtBREhqQjtBQUVFO0VBQVEsZUFBQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtFQUFhLHFCQUFBO0VBQXVCLFlBQUE7QUFLN0U7QUFKRTtFQUFXLFNBQUE7RUFBVyxtQkNrQ1Q7QUQxQmY7QUFQRTtFQUFRLG1CQUFBO0VBQXFCLG1CQytCaEI7QURwQmYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXNfdmFyaWFibGVzJztcblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gIC5pY29uIHsgZm9udC1zaXplOiAzcmVtOyBoZWlnaHQ6IDNyZW07IHdpZHRoOiAzcmVtOyBtYXJnaW4tYm90dG9tOiAwLjVyZW07IG9wYWNpdHk6IDAuNTsgfVxuICAubWVzc2FnZSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAkZm9udC1zaXplLWxnOyB9XG4gIC5oaW50IHsgbWFyZ2luOiAwLjI1cmVtIDAgMDsgZm9udC1zaXplOiAkZm9udC1zaXplLXNtOyB9XG59XG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return EmptyStateComponent;
})();

/***/ }),

/***/ 11673:
/*!*************************************************************************!*\
  !*** ./src/app/components/next-match-info/next-match-info.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextMatchInfoComponent: () => (/* binding */ NextMatchInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function NextMatchInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wedstrijd #", ctx_r0.nextMatchInfo.matchNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, ctx_r0.nextMatchInfo.parsedDate, "EEEE d MMMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("om ", ctx_r0.nextMatchInfo.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nextMatchInfo.location);
  }
}
let NextMatchInfoComponent = /*#__PURE__*/(() => {
  class NextMatchInfoComponent {
    constructor() {
      this.nextMatchInfo = null;
      this.matchNumber = null;
    }
    static {
      this.ɵfac = function NextMatchInfoComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NextMatchInfoComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NextMatchInfoComponent,
        selectors: [["app-next-match-info"]],
        inputs: {
          nextMatchInfo: "nextMatchInfo",
          matchNumber: "matchNumber"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "next-match-box", 4, "ngIf"], [1, "next-match-box"], [1, "next-match-header"], [1, "next-match-icon"], [1, "next-match-title"], [1, "next-match-details"], [1, "next-match-date"], [1, "next-match-location"], [1, "next-match-location-icon"], ["fontIcon", "location_on"]],
        template: function NextMatchInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NextMatchInfoComponent_div_0_Template, 17, 7, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextMatchInfo && ctx.nextMatchInfo.parsedDate);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
        styles: [".next-match-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);\n  padding: 1.5rem 2rem;\n  margin-bottom: 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.next-match-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.next-match-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n\n.next-match-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  line-height: 2.5rem;\n}\n\n.next-match-details[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n\n.next-match-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.next-match-location[_ngcontent-%COMP%] {\n  color: #1976d2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 1rem;\n  margin-bottom: 4px;\n}\n\n.next-match-number[_ngcontent-%COMP%] {\n  color: #616161;\n  font-size: 0.875rem;\n  margin-top: 2px;\n}\n\n.next-match-location-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n  font-size: 1.1em;\n  height: 20px;\n}\n.next-match-location-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXh0LW1hdGNoLWluZm8vbmV4dC1tYXRjaC1pbmZvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlc192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsY0N0QmM7QURxQmhCOztBQUlBO0VBQ0UsZUNxQmM7RURwQmQsZ0JDeUJtQjtFRHhCbkIsd0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJDVWE7QURYZjs7QUFJQTtFQUNFLGdCQ2dCcUI7RURmckIsa0JBQUE7QUFERjs7QUFJQTtFQUNFLGNDMUNjO0VEMkNkLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGVDTGU7RURNZixrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0NuRGdCO0VEb0RoQixtQkNaYTtFRGFiLGVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuLm5leHQtbWF0Y2gtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjA4KTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uZXh0LW1hdGNoLWljb24ge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS00eGw7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDEyNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuXHJcbi5uZXh0LW1hdGNoLWRldGFpbHMge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtZGF0ZSB7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1zZW1pYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5uZXh0LW1hdGNoLWxvY2F0aW9uIHtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtbnVtYmVyIHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ubmV4dC1tYXRjaC1sb2NhdGlvbi1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbn0iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return NextMatchInfoComponent;
})();

/***/ }),

/***/ 19425:
/*!************************************************!*\
  !*** ./src/app/services/attendance.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceService: () => (/* binding */ AttendanceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 86301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-utils */ 96098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _data_sources_attendance_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-sources/attendance-data-source */ 92555);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 6455);






let AttendanceService = /*#__PURE__*/(() => {
  class AttendanceService {
    constructor(dataSource, playerService) {
      this.dataSource = dataSource;
      this.playerService = playerService;
      this.attendanceCache$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
      this.cacheTimestamp = 0;
      this.CACHE_DURATION = 2 * 60 * 1000;
    }
    getAttendanceRecords(filter) {
      return this.getCachedAttendance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(records => this.applyFilter(records, filter)));
    }
    getAttendanceForDate(date) {
      return this.getAttendanceRecords({
        date
      });
    }
    getAttendanceForPlayer(playerName) {
      return this.getAttendanceRecords({
        playerName
      });
    }
    getMatchAttendanceOverviews(filter) {
      return this.getAttendanceRecords(filter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(records => {
        const dateGroups = this.groupByDate(records);
        return Object.entries(dateGroups).map(([date, dateRecords]) => ({
          date,
          presentCount: dateRecords.filter(r => r.status === 'Ja').length,
          absentCount: dateRecords.filter(r => r.status === 'Nee').length,
          totalResponses: dateRecords.length
        })).sort((a, b) => a.date.localeCompare(b.date));
      }));
    }
    getMatchAttendanceDetails(date) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.getAttendanceForDate(date), this.playerService.getPlayers()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([attendanceRecords, allPlayers]) => {
        const attendanceMap = new Map();
        attendanceRecords.forEach(record => {
          attendanceMap.set(record.playerName, record);
        });
        const present = [];
        const absent = [];
        const noResponse = [];
        const categorizePlayer = playerInfo => {
          switch (playerInfo.status) {
            case 'Ja':
              present.push(playerInfo);
              break;
            case 'Nee':
              absent.push(playerInfo);
              break;
            case 'Geen Reactie':
              noResponse.push(playerInfo);
              break;
          }
        };
        allPlayers.forEach(player => {
          const attendance = attendanceMap.get(player.name);
          const playerInfo = {
            name: player.name,
            position: player.position,
            status: attendance?.status || (player.actief ? 'Geen Reactie' : undefined),
            playerData: player
          };
          if (playerInfo.status) {
            categorizePlayer(playerInfo);
          }
        });
        attendanceRecords.forEach(record => {
          const playerExists = allPlayers.some(p => p.name === record.playerName);
          if (!playerExists) {
            const playerInfo = {
              name: record.playerName,
              position: '',
              status: record.status,
              playerData: {
                name: record.playerName,
                position: '',
                actief: false
              }
            };
            categorizePlayer(playerInfo);
          }
        });
        const sortByName = (a, b) => a.name.localeCompare(b.name);
        return {
          date,
          present: present.sort(sortByName),
          absent: absent.sort(sortByName),
          noResponse: noResponse.sort(sortByName)
        };
      }));
    }
    getPlayerAttendanceStatus(playerName, date) {
      return this.getAttendanceRecords({
        playerName: playerName.trim(),
        date
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(records => records.length > 0 ? records[0].status : null));
    }
    getMatchAttendanceDetailsWithPlayerStatus(date, playerName) {
      const normalizedName = playerName?.trim();
      return this.getMatchAttendanceDetails(date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(details => {
        let playerStatus = null;
        if (normalizedName) {
          const allPlayers = [...details.present, ...details.absent, ...details.noResponse];
          const player = allPlayers.find(p => p.name.trim() === normalizedName);
          playerStatus = player?.status || null;
        }
        return {
          ...details,
          playerStatus
        };
      }));
    }
    getPresentPlayers(date) {
      return this.getMatchAttendanceDetails(date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(details => details.present));
    }
    setAttendance(update) {
      const normalizedName = update.playerName.trim();
      const normalizedDate = update.date.trim();
      return this.getAttendanceRecords().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(records => {
        return this.dataSource.upsert({
          date: normalizedDate,
          playerName: normalizedName,
          status: update.status
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
          const existingIndex = records.findIndex(r => r.date === normalizedDate && r.playerName === normalizedName);
          const updatedRecords = [...records];
          const newRecord = {
            date: normalizedDate,
            playerName: normalizedName,
            status: update.status
          };
          if (existingIndex >= 0) {
            updatedRecords[existingIndex] = newRecord;
          } else {
            updatedRecords.push(newRecord);
          }
          this.attendanceCache$.next(updatedRecords);
        }));
      }));
    }
    getPlayersWithoutResponse(date) {
      return this.getMatchAttendanceDetails(date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(details => details.noResponse));
    }
    refreshCache() {
      this.attendanceCache$.next(null);
      this.cacheTimestamp = 0;
      return this.getCachedAttendance();
    }
    getCachedAttendance() {
      const now = Date.now();
      const cachedData = this.attendanceCache$.value;
      if (cachedData && now - this.cacheTimestamp < this.CACHE_DURATION) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(cachedData);
      }
      return this.dataSource.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(attendance => {
        this.attendanceCache$.next(attendance);
        this.cacheTimestamp = now;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.error('Error loading attendance data:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      }));
    }
    applyFilter(records, filter) {
      if (!filter) return records;
      return records.filter(record => {
        if (filter.date && record.date !== filter.date) return false;
        if (filter.fromDate && record.date < filter.fromDate) return false;
        if (filter.toDate && record.date > filter.toDate) return false;
        if (filter.futureOnly) {
          const today = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateISO)();
          if (record.date <= today) return false;
        }
        if (filter.playerName && record.playerName !== filter.playerName.trim()) return false;
        if (filter.status && record.status !== filter.status) return false;
        return true;
      });
    }
    groupByDate(records) {
      return records.reduce((groups, record) => {
        if (!groups[record.date]) groups[record.date] = [];
        groups[record.date].push(record);
        return groups;
      }, {});
    }
    formatDate(date) {
      return (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatDateISO)(date);
    }
    static {
      this.ɵfac = function AttendanceService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_data_sources_attendance_data_source__WEBPACK_IMPORTED_MODULE_1__.AttendanceDataSource), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
        token: AttendanceService,
        factory: AttendanceService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AttendanceService;
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map