"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[252],{

/***/ 21265:
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderComponent: () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



function PageHeaderComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
  }
}
let PageHeaderComponent = /*#__PURE__*/(() => {
  class PageHeaderComponent {
    constructor() {
      this.title = '';
    }
    static {
      this.ɵfac = function PageHeaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageHeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageHeaderComponent,
        selectors: [["app-page-header"]],
        inputs: {
          title: "title",
          subtitle: "subtitle"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 2,
        consts: [[1, "page-header"], [1, "title"], ["class", "subtitle", 4, "ngIf"], [1, "subtitle"]],
        template: function PageHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_p_3_Template, 2, 1, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".page-header[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #1976d2;\n  line-height: 1.25;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGO0FBRUU7RUFDRSxTQUFBO0VBQ0EsaUJDd0NZO0VEdkNaLGdCQzhDaUI7RUQ3Q2pCLGNDUFk7RURRWixpQkNpRGdCO0FEakRwQjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSx5QkNIYTtFREliLG1CQzRCVztBRDVCZiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xuXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW46IDAgMCAxLjVyZW07XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0yeGw7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtdGlnaHQ7XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gMCAwO1xuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG59XG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return PageHeaderComponent;
})();

/***/ }),

/***/ 90149:
/*!**************************************************************!*\
  !*** ./src/app/components/records/records-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordsRoutingModule: () => (/* binding */ RecordsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _records_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./records.component */ 48121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _records_component__WEBPACK_IMPORTED_MODULE_0__.RecordsComponent
}];
let RecordsRoutingModule = /*#__PURE__*/(() => {
  class RecordsRoutingModule {
    static {
      this.ɵfac = function RecordsRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RecordsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
    }
  }
  return RecordsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecordsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 48121:
/*!*********************************************************!*\
  !*** ./src/app/components/records/records.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordsComponent: () => (/* binding */ RecordsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_records_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/records.service */ 50256);
/* harmony import */ var _services_achievements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/achievements.service */ 57086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header/page-header.component */ 21265);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);











const _c0 = a0 => ["/speler", a0];
function RecordsComponent_ng_container_1_mat_card_2_ul_6_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", r_r1.unit, "");
  }
}
function RecordsComponent_ng_container_1_mat_card_2_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RecordsComponent_ng_container_1_mat_card_2_ul_6_li_1_span_6_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r2 = ctx.$implicit;
    const r_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, h_r2.playerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 4, h_r2.value, "1.0-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", r_r1.unit);
  }
}
function RecordsComponent_ng_container_1_mat_card_2_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecordsComponent_ng_container_1_mat_card_2_ul_6_li_1_Template, 7, 9, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", r_r1.holders);
  }
}
function RecordsComponent_ng_container_1_mat_card_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nog geen record gevestigd.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordsComponent_ng_container_1_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 8)(1, "div", 9)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RecordsComponent_ng_container_1_mat_card_2_ul_6_Template, 2, 1, "ul", 10)(7, RecordsComponent_ng_container_1_mat_card_2_ng_template_7_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const noHolder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", r_r1.holders.length > 0)("ngIfElse", noHolder_r3);
  }
}
function RecordsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RecordsComponent_ng_container_1_mat_card_2_Template, 9, 4, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const records_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", records_r4);
  }
}
function RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_li_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00D7", h_r5.occurrenceCount, "");
  }
}
function RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_li_7_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, h_r5.playerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r5.occurrenceCount > 1);
  }
}
function RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 25)(1, "div", 9)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_li_7_Template, 4, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "tier-" + a_r6.tier)("matTooltip", a_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](a_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](a_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", a_r6.holders);
  }
}
function RecordsComponent_ng_container_3_section_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RecordsComponent_ng_container_3_section_1_div_3_mat_card_4_Template, 8, 5, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r7.items)("ngForTrackBy", ctx_r7.trackByKey);
  }
}
function RecordsComponent_ng_container_3_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 19)(1, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Achievements");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecordsComponent_ng_container_3_section_1_div_3_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const achievementGroups_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", achievementGroups_r9);
  }
}
function RecordsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecordsComponent_ng_container_3_section_1_Template, 4, 1, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const achievementGroups_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", achievementGroups_r9.length > 0);
  }
}
function RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_a_1_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r10 = ctx.$implicit;
    const last_r11 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, h_r10.playerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", h_r10.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r11);
  }
}
function RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_a_1_Template, 3, 5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mvp_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", mvp_r12.holders);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 3, mvp_r12.holders[0].value, "1.0-0"), " ", mvp_r12.unit, "");
  }
}
function RecordsComponent_ng_container_5_section_1_li_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "geen data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordsComponent_ng_container_5_section_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 31)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RecordsComponent_ng_container_5_section_1_li_4_ng_container_6_Template, 5, 6, "ng-container", 4)(7, RecordsComponent_ng_container_5_section_1_li_4_ng_template_7_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mvp_r12 = ctx.$implicit;
    const noMvp_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mvp_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mvp_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mvp_r12.holders.length > 0)("ngIfElse", noMvp_r13);
  }
}
function RecordsComponent_ng_container_5_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 28)(1, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Seizoen-MVP's");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RecordsComponent_ng_container_5_section_1_li_4_Template, 9, 4, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mvps_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", mvps_r14);
  }
}
function RecordsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecordsComponent_ng_container_5_section_1_Template, 5, 1, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mvps_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mvps_r14.length > 0);
  }
}
function RecordsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-state", 34);
  }
}
let RecordsComponent = /*#__PURE__*/(() => {
  class RecordsComponent {
    static {
      this.CATEGORY_TITLES = {
        milestone: 'Mijlpalen',
        streak: 'Streaks',
        season: 'Seizoen'
      };
    }
    constructor(recordsService, achievementsService) {
      this.recordsService = recordsService;
      this.achievementsService = achievementsService;
      this.trackByKey = (_, r) => r.key;
    }
    ngOnInit() {
      this.records$ = this.recordsService.getRecords();
      this.mvps$ = this.recordsService.getSeasonMVPs();
      this.achievementGroups$ = this.buildAchievementGroups$();
    }
    buildAchievementGroups$() {
      const order = ['milestone', 'streak', 'season'];
      return this.achievementsService.getAchievementRecords().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(records => order.map(cat => ({
        category: cat,
        title: RecordsComponent.CATEGORY_TITLES[cat],
        items: records.filter(r => r.category === cat)
      })).filter(g => g.items.length > 0)));
    }
    static {
      this.ɵfac = function RecordsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_records_service__WEBPACK_IMPORTED_MODULE_0__.RecordsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_achievements_service__WEBPACK_IMPORTED_MODULE_1__.AchievementsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: RecordsComponent,
        selectors: [["app-records"]],
        decls: 9,
        vars: 10,
        consts: [["loading", ""], ["noHolder", ""], ["noMvp", ""], ["title", "Records", "subtitle", "All-time records voor de futsal-club"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "records-grid"], ["class", "record-card", 4, "ngFor", "ngForOf"], [1, "record-card"], [1, "header"], ["class", "holders", 4, "ngIf", "ngIfElse"], [1, "holders"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "value"], ["class", "unit", 4, "ngIf"], [1, "unit"], [1, "empty"], ["class", "achievements-section", 4, "ngIf"], [1, "achievements-section"], [1, "section-title"], ["class", "achievement-category", 4, "ngFor", "ngForOf"], [1, "achievement-category"], [1, "category-title"], ["class", "record-card achievement-card", 3, "ngClass", "matTooltip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "record-card", "achievement-card", 3, "ngClass", "matTooltip"], ["class", "value", 4, "ngIf"], ["class", "mvp-section", 4, "ngIf"], [1, "mvp-section"], [1, "mvp-list"], ["class", "mvp-row", 4, "ngFor", "ngForOf"], [1, "mvp-row"], [1, "season"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["message", "Records laden..."]],
        template: function RecordsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-page-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecordsComponent_ng_container_1_Template, 3, 1, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecordsComponent_ng_container_3_Template, 2, 1, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RecordsComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RecordsComponent_ng_template_7_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }
          if (rf & 2) {
            const loading_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.records$))("ngIfElse", loading_r15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, ctx.achievementGroups$));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, ctx.mvps$));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__.LoadingStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 1rem;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.records-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 600px) {\n  .records-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .records-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.record-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.record-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.record-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-size: 1.6rem;\n  height: 1.6rem;\n  width: 1.6rem;\n}\n.record-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #333;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: none;\n  font-weight: 500;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.record-card[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.6);\n  margin-left: 0.25rem;\n}\n.record-card[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  margin: 0;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.achievements-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: #1976d2;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-category[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-category[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%] {\n  border-left: 4px solid transparent;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-card.tier-bronze[_ngcontent-%COMP%] {\n  border-left-color: #ce8946;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-card.tier-silver[_ngcontent-%COMP%] {\n  border-left-color: #c0c0c0;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-card.tier-gold[_ngcontent-%COMP%] {\n  border-left-color: #ffd700;\n}\n.achievements-section[_ngcontent-%COMP%]   .achievement-card.tier-platinum[_ngcontent-%COMP%] {\n  border-left-color: #b9f2ff;\n}\n.tier-bronze[_ngcontent-%COMP%]   .achievements-section[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ce8946;\n}\n.tier-silver[_ngcontent-%COMP%]   .achievements-section[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c0c0c0;\n}\n.tier-gold[_ngcontent-%COMP%]   .achievements-section[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.tier-platinum[_ngcontent-%COMP%]   .achievements-section[_ngcontent-%COMP%]   .achievement-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b9f2ff;\n}\n\n.mvp-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.mvp-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: #1976d2;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  flex-wrap: wrap;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #997820;\n  font-size: 1.4rem;\n  height: 1.4rem;\n  width: 1.4rem;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .season[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  flex: 0 0 auto;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  flex-wrap: wrap;\n  margin-left: auto;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: none;\n  font-weight: 500;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n.mvp-section[_ngcontent-%COMP%]   .mvp-row[_ngcontent-%COMP%]   .holders[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWNvcmRzL3JlY29yZHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUFERjtBQUdFO0VBTEY7SUFNSSxxQ0FBQTtFQUFGO0FBQ0Y7QUFDRTtFQVJGO0lBU0kscUNBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDRSxjQ2pDVTtFRGtDVixpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBRU47QUFDSTtFQUNFLFNBQUE7RUFDQSxtQkNFUztFRERULGdCQ1dpQjtFRFZqQixXQ25DVztBRG9DakI7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FBRE47QUFHTTtFQUFlLG1CQUFBO0FBQXJCO0FBRU07RUFDRSxjQzlEUTtFRCtEUixxQkFBQTtFQUNBLGdCQ1phO0FEWXJCO0FBRU07RUFBVSwwQkFBQTtBQUNoQjtBQUNNO0VBQ0UsZ0JDaEJlO0VEaUJmLFdDOURTO0FEK0RqQjtBQUNNO0VBQ0UsZ0JDdEJhO0VEdUJiLHlCQ2pFUztFRGtFVCxvQkFBQTtBQUNSO0FBSUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkMxRWE7QUR3RWpCOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxrQkNoRFc7RURpRFgsZ0JDekNpQjtFRDBDakIsY0M5Rlk7QUQyRmhCO0FBTUU7RUFDRSxxQkFBQTtBQUpKO0FBTUk7RUFBZSxnQkFBQTtBQUhuQjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxtQkM3RFM7RUQ4RFQsZ0JDckRlO0VEc0RmLHlCQ2pHVztBRDhGakI7QUFPRTtFQUNFLGtDQUFBO0FBTEo7QUFPSTtFQUFrQiwwQkNqR047QUQ2RmhCO0FBS0k7RUFBa0IsMEJDbkdOO0FEaUdoQjtBQUdJO0VBQWtCLDBCQ3JHTjtBRHFHaEI7QUFDSTtFQUFrQiwwQkM5Rk47QURnR2hCO0FBQ007RUFBbUIsY0N2R1Q7QUR5R2hCO0FBRE07RUFBbUIsY0N6R1Q7QUQ2R2hCO0FBSE07RUFBbUIsY0MzR1Q7QURpSGhCO0FBTE07RUFBbUIsY0NwR1Q7QUQ0R2hCOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjtBQUpFO0VBQ0UsbUJBQUE7RUFDQSxrQkN4Rlc7RUR5RlgsZ0JDakZpQjtFRGtGakIsY0N0SVk7QUQ0SWhCO0FBSEU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JDdElhO0VEdUliLGtCQUFBO0VBQ0Esd0NDdEhnQjtFRHVIaEIsZ0JBQUE7QUFLSjtBQUZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBSUo7QUFGSTtFQUFlLG1CQUFBO0FBS25CO0FBSEk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUtOO0FBRkk7RUFDRSxnQkNqSGU7RURrSGYsV0M5Slc7RUQrSlgsY0FBQTtBQUlOO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR047QUFETTtFQUNFLGNDbExRO0VEbUxSLHFCQUFBO0VBQ0EsZ0JDaElhO0FEbUlyQjtBQURNO0VBQVUsMEJBQUE7QUFJaEI7QUFGTTtFQUNFLHlCQ2hMUztFRGlMVCxtQkNqSk87QURxSmY7QUFETTtFQUNFLGtCQUFBO0VBQ0EseUJDdExTO0FEeUxqQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5yZWNvcmRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAxcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnAtbW9iaWxlKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwLWRlc2t0b3ApIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5cbi5yZWNvcmQtY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC43NXJlbTtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5ob2xkZXJzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuXG4gICAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgICAgLnVuaXQge1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcbiAgICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmVtcHR5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gIH1cbn1cblxuLmFjaGlldmVtZW50cy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG5cbiAgLmFjaGlldmVtZW50LWNhdGVnb3J5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAmOmxhc3QtY2hpbGQgeyBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbiAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC5hY2hpZXZlbWVudC1jYXJkIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi50aWVyLWJyb256ZSAgIHsgYm9yZGVyLWxlZnQtY29sb3I6ICR0aWVyLWJyb256ZTsgfVxuICAgICYudGllci1zaWx2ZXIgICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAkdGllci1zaWx2ZXI7IH1cbiAgICAmLnRpZXItZ29sZCAgICAgeyBib3JkZXItbGVmdC1jb2xvcjogJHRpZXItZ29sZDsgfVxuICAgICYudGllci1wbGF0aW51bSB7IGJvcmRlci1sZWZ0LWNvbG9yOiAkdGllci1wbGF0aW51bTsgfVxuXG4gICAgLmhlYWRlciBtYXQtaWNvbiB7XG4gICAgICAudGllci1icm9uemUgICAmIHsgY29sb3I6ICR0aWVyLWJyb256ZTsgfVxuICAgICAgLnRpZXItc2lsdmVyICAgJiB7IGNvbG9yOiAkdGllci1zaWx2ZXI7IH1cbiAgICAgIC50aWVyLWdvbGQgICAgICYgeyBjb2xvcjogJHRpZXItZ29sZDsgfVxuICAgICAgLnRpZXItcGxhdGludW0gJiB7IGNvbG9yOiAkdGllci1wbGF0aW51bTsgfVxuICAgIH1cbiAgfVxufVxuXG4ubXZwLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cblxuICAubXZwLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJnO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAkY2FyZC1zaGFkb3c7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5tdnAtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogIzk5NzgyMDsgLy8gZ29sZC10aWVyIGFjY2VudCB2b29yIE1WUFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICAgIHdpZHRoOiAxLjRyZW07XG4gICAgfVxuXG4gICAgLnNlYXNvbiB7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cblxuICAgIC5ob2xkZXJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgfVxuXG4gICAgICAuZW1wdHkge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return RecordsComponent;
})();

/***/ }),

/***/ 78252:
/*!******************************************************!*\
  !*** ./src/app/components/records/records.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordsModule: () => (/* binding */ RecordsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _records_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./records-routing.module */ 90149);
/* harmony import */ var _records_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./records.component */ 48121);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header/page-header.component */ 21265);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);










let RecordsModule = /*#__PURE__*/(() => {
  class RecordsModule {
    static {
      this.ɵfac = function RecordsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: RecordsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _records_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecordsRoutingModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__.LoadingStateComponent]
      });
    }
  }
  return RecordsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecordsModule, {
    declarations: [_records_component__WEBPACK_IMPORTED_MODULE_1__.RecordsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _records_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecordsRoutingModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__.LoadingStateComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=252.js.map