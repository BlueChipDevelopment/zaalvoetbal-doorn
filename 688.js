"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[688],{

/***/ 24137:
/*!*****************************************************************!*\
  !*** ./src/app/components/player-card/player-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerCardComponent: () => (/* binding */ PlayerCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





const _c0 = (a0, a1) => ({
  "player-card-image-white": a0,
  "player-card-image-red": a1
});
let PlayerCardComponent = /*#__PURE__*/(() => {
  class PlayerCardComponent {
    constructor() {
      this.shirtColor = 'white';
    }
    static {
      this.ɵfac = function PlayerCardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PlayerCardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlayerCardComponent,
        selectors: [["app-player-card"]],
        inputs: {
          player: "player",
          shirtColor: "shirtColor"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 10,
        vars: 7,
        consts: [[1, "player-card"], ["mat-card-avatar", "", 3, "ngClass"], [2, "margin-left", "auto"]],
        template: function PlayerCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.shirtColor === "white", ctx.shirtColor === "red"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.position);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.rating);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
        styles: [".player-card-image-white[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-white.png');\n  background-size: cover;\n  background-position: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.player-card-image-red[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-red.png');\n  background-size: cover;\n  background-position: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.player-card[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 300px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  color: #616161;\n}\n\n@media (max-width: 768px) {\n  .player-card[_ngcontent-%COMP%] {\n    min-width: auto;\n    max-width: none;\n    width: 100%;\n    margin: 1px;\n  }\n  mat-card[_ngcontent-%COMP%] {\n    padding: 4px;\n    height: 70px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  mat-card-header[_ngcontent-%COMP%] {\n    padding: 4px 6px;\n    margin-bottom: 0;\n    min-height: auto;\n    align-items: center;\n  }\n  mat-card-header[_ngcontent-%COMP%]   .mat-card-header-text[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  mat-card-content[_ngcontent-%COMP%] {\n    padding: 2px 6px 4px;\n    margin: 0;\n  }\n  .player-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    line-height: 1.25;\n    margin-bottom: 1px;\n  }\n  .player-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1;\n    font-weight: 400;\n    margin: 0;\n  }\n  .player-card-image-white[_ngcontent-%COMP%], \n   .player-card-image-red[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    margin-right: 6px;\n    flex-shrink: 0;\n    align-self: center;\n  }\n}\nmat-card-header[_ngcontent-%COMP%] {\n  align-items: center;\n  padding-bottom: 16px;\n}\n\n.player-card-image-white[_ngcontent-%COMP%], \n.player-card-image-red[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-mdc-card-avatar[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #616161;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItY2FyZC9wbGF5ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0N4QmdCO0FEdUJsQjs7QUFLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQUZGO0VBS0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBSEY7RUFNQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBSkY7RUFNRTtJQUNFLFNBQUE7RUFKSjtFQVFBO0lBQ0Usb0JBQUE7SUFDQSxTQUFBO0VBTkY7RUFTQTtJQUNFLGVDcEJhO0lEcUJiLGdCQ1ZtQjtJRFduQixpQkNQZ0I7SURRaEIsa0JBQUE7RUFQRjtFQVVBO0lBQ0UsbUJDNUJXO0lENkJYLGNBQUE7SUFDQSxnQkNwQmlCO0lEcUJqQixTQUFBO0VBUkY7RUFXQTs7SUFFRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBVEY7QUFDRjtBQVlBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQVZGOztBQWNBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWEY7O0FBZUE7RUFDRSxrQkFBQTtBQVpGOztBQWVBO0VBQ0Usa0JDNURhO0VENkRiLGdCQ25EaUI7QUR1Q25COztBQWVBO0VBQ0UsZUNuRWU7RURvRWYsY0M3R2dCO0FEaUdsQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuLnBsYXllci1jYXJkLWltYWdlLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9vdGJhbGwtc2hpcnQtd2hpdGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBsYXllci1jYXJkLWltYWdlLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3RiYWxsLXNoaXJ0LXJlZC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucGxheWVyLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxuLy8gTW9iaWxlIHNwZWNpZmljIG92ZXJyaWRlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnAtdGFibGV0KSB7XHJcbiAgLnBsYXllci1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMnB4IDZweCA0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5ZXItY2FyZCBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC10aWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLnBsYXllci1jYXJkIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAucGxheWVyLWNhcmQtaW1hZ2Utd2hpdGUsXHJcbiAgLnBsYXllci1jYXJkLWltYWdlLXJlZCB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi8vIEFsc28gZW5zdXJlIGRlc2t0b3AgaWNvbnMgYXJlIGNlbnRlcmVkXHJcbi5wbGF5ZXItY2FyZC1pbWFnZS13aGl0ZSxcclxuLnBsYXllci1jYXJkLWltYWdlLXJlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgYm90dG9tIG1hcmdpbiBmcm9tIE1hdGVyaWFsIGNhcmQgYXZhdGFyXHJcbi5tYXQtbWRjLWNhcmQtYXZhdGFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xyXG59XHJcblxyXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return PlayerCardComponent;
})();

/***/ }),

/***/ 5067:
/*!************************************************!*\
  !*** ./src/app/services/next-match.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextMatchService: () => (/* binding */ NextMatchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _wedstrijden_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wedstrijden.service */ 40237);



let NextMatchService = /*#__PURE__*/(() => {
  class NextMatchService {
    constructor(wedstrijdenService) {
      this.wedstrijdenService = wedstrijdenService;
    }
    getNextMatchInfo() {
      return this.wedstrijdenService.getToekomstigeWedstrijden().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(wedstrijden => {
        // Vind de eerst volgende wedstrijd (gesorteerd op datum)
        const nextWedstrijd = wedstrijden.filter(w => w.datum !== null) // Filter out matches with no valid date
        .sort((a, b) => {
          // Both dates are already parsed Date objects, so just compare time values
          return a.datum.getTime() - b.datum.getTime();
        })[0];
        if (!nextWedstrijd || !nextWedstrijd.datum) return null;
        return {
          date: nextWedstrijd.datumString || '',
          // Use original string for display
          parsedDate: nextWedstrijd.datum,
          // Already a Date object
          wedstrijd: nextWedstrijd,
          location: nextWedstrijd.locatie || 'Sporthal Steinheim',
          time: '20:30',
          matchNumber: nextWedstrijd.seizoenWedstrijdNummer ?? nextWedstrijd.id ?? null,
          rowNumber: nextWedstrijd.id ? Number(nextWedstrijd.id) + 1 : undefined,
          seizoen: nextWedstrijd.seizoen
        };
      }));
    }
    getFutureMatches() {
      return this.wedstrijdenService.getToekomstigeWedstrijden().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(wedstrijden => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return wedstrijden.filter(wedstrijd => wedstrijd.datum !== null) // Filter out matches with no valid date
        .map(wedstrijd => ({
          date: wedstrijd.datumString || '',
          // Use original string for display
          parsedDate: wedstrijd.datum,
          // Already a Date object
          wedstrijd: wedstrijd,
          location: wedstrijd.locatie || 'Sporthal Steinheim',
          time: '20:30',
          matchNumber: wedstrijd.seizoenWedstrijdNummer ?? wedstrijd.id ?? null
        })).filter(match => match.parsedDate && match.parsedDate >= today).sort((a, b) => {
          if (!a.parsedDate || !b.parsedDate) return 0;
          return a.parsedDate.getTime() - b.parsedDate.getTime();
        });
      }));
    }
    static {
      this.ɵfac = function NextMatchService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NextMatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_wedstrijden_service__WEBPACK_IMPORTED_MODULE_0__.WedstrijdenService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: NextMatchService,
        factory: NextMatchService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return NextMatchService;
})();

/***/ }),

/***/ 96098:
/*!*************************************!*\
  !*** ./src/app/utils/date-utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDateForDisplay: () => (/* binding */ formatDateForDisplay),
/* harmony export */   formatDateISO: () => (/* binding */ formatDateISO),
/* harmony export */   formatDateShort: () => (/* binding */ formatDateShort),
/* harmony export */   getCurrentDateISO: () => (/* binding */ getCurrentDateISO),
/* harmony export */   getCurrentDateTimeISO: () => (/* binding */ getCurrentDateTimeISO),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   parseWedstrijdDate: () => (/* binding */ parseWedstrijdDate),
/* harmony export */   parseWedstrijdDateTime: () => (/* binding */ parseWedstrijdDateTime),
/* harmony export */   sortWedstrijdenByDate: () => (/* binding */ sortWedstrijdenByDate),
/* harmony export */   sortWedstrijdenByDateString: () => (/* binding */ sortWedstrijdenByDateString)
/* harmony export */ });
/**
 * Utility functies voor datum parsing en manipulatie
 * Centraliseerde logica om inconsistenties tussen services te voorkomen
 */
/**
 * Parst een datum string in DD-MM-YYYY of YYYY-MM-DD formaat naar een Date object
 * @param dateString Datum string uit Google Sheets
 * @returns Date object of null als parsing faalt
 */
function parseWedstrijdDate(dateString) {
  if (!dateString || dateString.trim() === '') {
    return null;
  }
  try {
    const parts = dateString.trim().split('-');
    if (parts.length === 3) {
      const part0 = Number(parts[0]);
      const part1 = Number(parts[1]);
      const part2 = Number(parts[2]);
      // Controleer op geldige nummers
      if (isNaN(part0) || isNaN(part1) || isNaN(part2)) {
        return null;
      }
      let parsedDate;
      if (parts[0].length === 4) {
        // YYYY-MM-DD format
        parsedDate = new Date(part0, part1 - 1, part2);
      } else {
        // DD-MM-YYYY format
        parsedDate = new Date(part2, part1 - 1, part0);
      }
      // Controleer of de datum geldig is
      if (isNaN(parsedDate.getTime())) {
        return null;
      }
      return parsedDate;
    }
  } catch (error) {
    console.warn('Error parsing date:', dateString, error);
  }
  return null;
}
/**
 * Parst een wedstrijd datum en zet de tijd op 20:30
 * @param dateString Datum string uit Google Sheets
 * @returns Date object met tijd 20:30 of null
 */
function parseWedstrijdDateTime(dateString) {
  const date = parseWedstrijdDate(dateString);
  if (date) {
    date.setHours(20, 30, 0, 0);
  }
  return date;
}
/**
 * Sorteert wedstrijden op datum (vroegste eerst)
 * @param a Eerste wedstrijd
 * @param b Tweede wedstrijd
 * @returns Sorteer resultaat (-1, 0, 1)
 */
function sortWedstrijdenByDate(a, b) {
  if (!a.datum || !b.datum) return 0;
  return a.datum.getTime() - b.datum.getTime();
}
/**
 * Legacy version: Sorteert wedstrijden op datum string (vroegste eerst)
 * @param a Eerste wedstrijd
 * @param b Tweede wedstrijd
 * @returns Sorteer resultaat (-1, 0, 1)
 * @deprecated Use sortWedstrijdenByDate instead for Date objects
 */
function sortWedstrijdenByDateString(a, b) {
  const dateA = parseWedstrijdDate(a.datum);
  const dateB = parseWedstrijdDate(b.datum);
  if (!dateA || !dateB) return 0;
  return dateA.getTime() - dateB.getTime();
}
// === NIEUWE STANDAARD FORMATTING FUNCTIES ===
/**
 * Formatteert een Date naar ISO string formaat (YYYY-MM-DD)
 * @param date Date object
 * @returns ISO datum string (YYYY-MM-DD)
 */
function formatDateISO(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
/**
 * Formatteert een Date voor Nederlandse weergave (dd MMMM yyyy)
 * @param date Date object
 * @returns Nederlandse datum string
 */
function formatDateForDisplay(date) {
  if (!date) return '';
  return date.toLocaleDateString('nl-NL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
/**
 * Formatteert een Date voor korte Nederlandse weergave (dd-mm-yyyy)
 * @param date Date object
 * @returns Nederlandse datum string (dd-mm-yyyy)
 */
function formatDateShort(date) {
  if (!date) return '';
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
/**
 * Geeft de huidige datum als ISO string (YYYY-MM-DD)
 * @returns ISO datum string van vandaag
 */
function getCurrentDateISO() {
  return formatDateISO(new Date());
}
/**
 * Geeft de huidige datum en tijd als ISO string
 * @returns ISO datetime string
 */
function getCurrentDateTimeISO() {
  return new Date().toISOString();
}
/**
 * Parse datum met fallback en error handling
 * @param dateInput String, Date object, of null/undefined
 * @returns Date object of null als parsing faalt
 */
function parseDate(dateInput) {
  if (!dateInput) return null;
  if (dateInput instanceof Date) {
    return isNaN(dateInput.getTime()) ? null : dateInput;
  }
  // Probeer eerst wedstrijd datum parsing (voor Nederlandse formaten)
  const wedstrijdDate = parseWedstrijdDate(dateInput);
  if (wedstrijdDate) return wedstrijdDate;
  // Fallback naar standaard Date parsing
  try {
    const date = new Date(dateInput);
    return isNaN(date.getTime()) ? null : date;
  } catch (error) {
    console.warn('Error parsing date:', dateInput, error);
    return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=688.js.map