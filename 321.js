"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[321],{

/***/ 99676:
/*!*********************************************************************!*\
  !*** ./src/app/components/leaderboard/chemistry-modal.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChemistryModalComponent: () => (/* binding */ ChemistryModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);








function ChemistryModalComponent_div_7_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const teammate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", teammate_r1.gamesTied, " gelijk");
  }
}
function ChemistryModalComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChemistryModalComponent_div_7_div_4_span_6_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const teammate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teammate_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", teammate_r1.gamesPlayed, " wedstrijden samen: ", teammate_r1.gamesWon, " gewonnen, ", teammate_r1.gamesLost, " verloren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", teammate_r1.gamesTied > 0);
  }
}
function ChemistryModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChemistryModalComponent_div_7_div_4_Template, 7, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Beste chemie (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, (ctx_r1.data.chemistryData.bestGroup[0] == null ? null : ctx_r1.data.chemistryData.bestGroup[0].chemistryScore) * 100, "1.0-0"), "% winst samen):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.chemistryData.bestGroup)("ngForTrackBy", ctx_r1.trackByTeammate);
  }
}
function ChemistryModalComponent_div_8_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const teammate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", teammate_r3.gamesTied, " gelijk");
  }
}
function ChemistryModalComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChemistryModalComponent_div_8_div_4_span_6_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const teammate_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teammate_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", teammate_r3.gamesPlayed, " wedstrijden samen: ", teammate_r3.gamesWon, " gewonnen, ", teammate_r3.gamesLost, " verloren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", teammate_r3.gamesTied > 0);
  }
}
function ChemistryModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChemistryModalComponent_div_8_div_4_Template, 7, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Slechtste chemie (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, (ctx_r1.data.chemistryData.worstGroup[0] == null ? null : ctx_r1.data.chemistryData.worstGroup[0].chemistryScore) * 100, "1.0-0"), "% winst samen):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.chemistryData.worstGroup)("ngForTrackBy", ctx_r1.trackByTeammate);
  }
}
function ChemistryModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p")(2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Geen teamgenoten met minimaal 3 gezamenlijke wedstrijden gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
let ChemistryModalComponent = /*#__PURE__*/(() => {
  class ChemistryModalComponent {
    constructor(data) {
      this.data = data;
    }
    trackByTeammate(_index, teammate) {
      return teammate.name;
    }
    static {
      this.ɵfac = function ChemistryModalComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ChemistryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChemistryModalComponent,
        selectors: [["app-chemistry-modal"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 13,
        vars: 4,
        consts: [["mat-dialog-title", ""], [4, "ngIf"], ["class", "chemistry-section", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", ""], ["class", "chemistry-entry", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "chemistry-entry"], [1, "chemistry-entry__meta"], [1, "chemistry-section"]],
        template: function ChemistryModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chemistry informatie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Speler: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChemistryModalComponent_div_7_Template, 5, 6, "div", 1)(8, ChemistryModalComponent_div_8_Template, 5, 6, "div", 2)(9, ChemistryModalComponent_div_9_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions")(11, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sluiten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.player.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.chemistryData.bestGroup.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.chemistryData.worstGroup.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.chemistryData.bestGroup.length === 0);
          }
        },
        dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
        styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.chemistry-modal-panel[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 90vw;\n}\n\n.chemistry-entry[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 8px;\n  background-color: #f2f2f2;\n  border-radius: 4px;\n}\n\n.chemistry-entry__meta[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #616161;\n}\n\n.chemistry-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sZWFkZXJib2FyZC9jaGVtaXN0cnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQ3ZCZ0I7QURzQmxCOztBQUlBO0VBQ0UsZ0JBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMuc2Nzcyc7XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2hlbWlzdHJ5LW1vZGFsLXBhbmVsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xufVxuXG4uY2hlbWlzdHJ5LWVudHJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtaXgoJHNlY29uZGFyeS1jb2xvciwgJGxpZ2h0LWJnLCA4JSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNoZW1pc3RyeS1lbnRyeV9fbWV0YSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4uY2hlbWlzdHJ5LXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ChemistryModalComponent;
})();

/***/ }),

/***/ 78321:
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaderboardComponent: () => (/* binding */ LeaderboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _chemistry_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chemistry-modal.component */ 99676);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_game_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.statistics.service */ 94165);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);



























const _c0 = () => ["position", "name", "gamesPlayed", "totalPoints", "rating", "lastFiveGames"];
const _c1 = () => ["position", "name", "gamesPlayed", "totalPoints", "rating", "gamesWon", "gamesLost", "gamesTied", "zlatanPoints", "ventielPoints", "lastFiveGames", "winRatio"];
const _c2 = (a0, a1, a2) => ({
  "game-win": a0,
  "game-tie": a1,
  "game-loss": a2
});
const _c3 = a0 => ["/speler", a0];
function LeaderboardComponent_app_loading_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loading-state", 5);
  }
}
function LeaderboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LeaderboardComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function LeaderboardComponent_mat_card_3_div_2_ng_container_3_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const season_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", season_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", season_r4, " ");
  }
}
function LeaderboardComponent_mat_card_3_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 41)(2, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LeaderboardComponent_mat_card_3_div_2_ng_container_3_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.selectedSeason, $event) || (ctx_r1.selectedSeason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function LeaderboardComponent_mat_card_3_div_2_ng_container_3_Template_mat_select_selectionChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSeasonChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LeaderboardComponent_mat_card_3_div_2_ng_container_3_mat_option_3_Template, 2, 2, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedSeason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.availableSeasons);
  }
}
function LeaderboardComponent_mat_card_3_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Seizoen ", ctx_r1.selectedSeason, " ");
  }
}
function LeaderboardComponent_mat_card_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Klassement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LeaderboardComponent_mat_card_3_div_2_ng_container_3_Template, 4, 2, "ng-container", 40)(4, LeaderboardComponent_mat_card_3_div_2_ng_template_4_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const singleSeason_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.availableSeasons.length > 1)("ngIfElse", singleSeason_r5);
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 45)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r6 + 1, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 48)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Wedstrijden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r7.gamesPlayed, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 49)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Punten");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r8.totalPoints, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 50)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r9.rating, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Winst");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r10.wins, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Verlies");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r11.losses || 0, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Gelijk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r12.ties || 0, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Win %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "W%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, player_r13.winRatio, "1.1-1"), "% ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Zlatan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Z");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r14.zlatanPoints || 0, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell")(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ventiel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", player_r15.ventielPoints || 0, " ");
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 51)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Laatste 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Laatste 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const game_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c2, game_r16.result === 3, game_r16.result === 2, game_r16.result === 1))("matTooltip", ctx_r1.getLastFiveGamesTooltip(game_r16) || "Geen info");
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LeaderboardComponent_mat_card_3_mat_cell_36_ng_container_2_Template, 3, 6, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const player_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getLastFiveGames(player_r17))("ngForTrackBy", ctx_r1.trackByGame);
  }
}
function LeaderboardComponent_mat_card_3_mat_header_cell_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 55)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function LeaderboardComponent_mat_card_3_mat_cell_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 56)(1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_3_Template, 3, 0, "ng-container", 4)(4, LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_4_Template, 3, 0, "ng-container", 4)(5, LeaderboardComponent_mat_card_3_mat_cell_39_ng_container_5_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c3, player_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](player_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r19 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r19 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r19 === 2);
  }
}
function LeaderboardComponent_mat_card_3_mat_header_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
  }
}
function LeaderboardComponent_mat_card_3_mat_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row", 61);
  }
}
function LeaderboardComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LeaderboardComponent_mat_card_3_div_2_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LeaderboardComponent_mat_card_3_mat_header_cell_5_Template, 5, 0, "mat-header-cell", 11)(6, LeaderboardComponent_mat_card_3_mat_cell_6_Template, 2, 1, "mat-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LeaderboardComponent_mat_card_3_mat_header_cell_8_Template, 5, 0, "mat-header-cell", 14)(9, LeaderboardComponent_mat_card_3_mat_cell_9_Template, 2, 1, "mat-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LeaderboardComponent_mat_card_3_mat_header_cell_11_Template, 5, 0, "mat-header-cell", 17)(12, LeaderboardComponent_mat_card_3_mat_cell_12_Template, 2, 1, "mat-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LeaderboardComponent_mat_card_3_mat_header_cell_14_Template, 5, 0, "mat-header-cell", 20)(15, LeaderboardComponent_mat_card_3_mat_cell_15_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LeaderboardComponent_mat_card_3_mat_header_cell_17_Template, 5, 0, "mat-header-cell", 23)(18, LeaderboardComponent_mat_card_3_mat_cell_18_Template, 2, 1, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LeaderboardComponent_mat_card_3_mat_header_cell_20_Template, 5, 0, "mat-header-cell", 23)(21, LeaderboardComponent_mat_card_3_mat_cell_21_Template, 2, 1, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LeaderboardComponent_mat_card_3_mat_header_cell_23_Template, 5, 0, "mat-header-cell", 23)(24, LeaderboardComponent_mat_card_3_mat_cell_24_Template, 2, 1, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LeaderboardComponent_mat_card_3_mat_header_cell_26_Template, 5, 0, "mat-header-cell", 23)(27, LeaderboardComponent_mat_card_3_mat_cell_27_Template, 3, 4, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, LeaderboardComponent_mat_card_3_mat_header_cell_29_Template, 5, 0, "mat-header-cell", 23)(30, LeaderboardComponent_mat_card_3_mat_cell_30_Template, 2, 1, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, LeaderboardComponent_mat_card_3_mat_header_cell_32_Template, 5, 0, "mat-header-cell", 23)(33, LeaderboardComponent_mat_card_3_mat_cell_33_Template, 2, 1, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](34, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, LeaderboardComponent_mat_card_3_mat_header_cell_35_Template, 5, 0, "mat-header-cell", 31)(36, LeaderboardComponent_mat_card_3_mat_cell_36_Template, 3, 2, "mat-cell", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, LeaderboardComponent_mat_card_3_mat_header_cell_38_Template, 5, 0, "mat-header-cell", 34)(39, LeaderboardComponent_mat_card_3_mat_cell_39_Template, 6, 7, "mat-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, LeaderboardComponent_mat_card_3_mat_header_row_40_Template, 1, 0, "mat-header-row", 36)(41, LeaderboardComponent_mat_card_3_mat_row_41_Template, 1, 0, "mat-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r1.leaderboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.isMobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r1.isMobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
  }
}
let LeaderboardComponent = /*#__PURE__*/(() => {
  class LeaderboardComponent {
    constructor(titleCasePipe, gameStatisticsService, dialog) {
      this.titleCasePipe = titleCasePipe;
      this.gameStatisticsService = gameStatisticsService;
      this.dialog = dialog;
      this.leaderboard = [];
      this.availableSeasons = [];
      this.selectedSeason = null;
      this.isMobile = false;
      this.isLoading = true;
      this.errorMessage = null;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
    }
    onResize() {
      this.checkScreenSize();
    }
    ngOnInit() {
      this.checkScreenSize();
      this.loadSeasonsAndLeaderboard();
    }
    loadSeasonsAndLeaderboard() {
      this.isLoading = true;
      // Laad eerst de beschikbare seizoenen
      this.gameStatisticsService.getAvailableSeasons().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: seasons => {
          this.availableSeasons = seasons;
          // Selecteer het meest recente seizoen als default
          if (seasons.length > 0) {
            this.selectedSeason = seasons[0]; // Eerste seizoen is het meest recente
          }
          // Laad het leaderboard voor het geselecteerde seizoen
          this.loadLeaderboard();
        },
        error: error => {
          console.error('Error loading seasons:', error);
          this.errorMessage = 'Fout bij het laden van seizoenen.';
          this.isLoading = false;
        }
      });
    }
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    }
    loadLeaderboard() {
      this.isLoading = true;
      this.gameStatisticsService.getFullPlayerStats(this.selectedSeason).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: leaderboard => {
          this.leaderboard = leaderboard;
          this.isLoading = false;
        },
        error: error => {
          console.error('Error loading leaderboard:', error);
          this.errorMessage = 'Fout bij het laden van het klassement.';
          this.isLoading = false;
        }
      });
    }
    onSeasonChange() {
      this.loadLeaderboard();
    }
    getLastFiveGames(player) {
      if (!player.gameHistory || player.gameHistory.length === 0) {
        return [];
      }
      return [...player.gameHistory].sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return a.date.getTime() - b.date.getTime();
      }).slice(-5).map(game => {
        let dateDisplay = '';
        if (game.date && game.date instanceof Date) {
          // Format Date object as DD-MM-YYYY
          const day = game.date.getDate().toString().padStart(2, '0');
          const month = (game.date.getMonth() + 1).toString().padStart(2, '0');
          const year = game.date.getFullYear();
          dateDisplay = `${day}-${month}-${year}`;
        } else {
          dateDisplay = 'Geen datum';
        }
        return {
          result: game.result,
          date: game.date,
          dateDisplay
        };
      });
    }
    getLastFiveGamesTooltip(game) {
      const resultText = game.result === 3 ? 'Winst' : game.result === 1 ? 'Verlies' : 'Gelijkspel';
      return `Datum: ${game.dateDisplay} - ${resultText}`;
    }
    openChemistryModal(player) {
      this.dialog.open(_chemistry_modal_component__WEBPACK_IMPORTED_MODULE_0__.ChemistryModalComponent, {
        panelClass: 'chemistry-modal-panel',
        data: {
          player: {
            ...player,
            name: player.name
          },
          chemistryData: this.getBestAndWorstTeammates(player)
        }
      });
    }
    getBestAndWorstTeammates(player) {
      // Verzamel chemistry-data per teammate
      if (!player || !player.gameHistory) {
        return {
          bestGroup: [],
          worstGroup: [],
          allTeammates: []
        };
      }
      const chemistry = {};
      // Loop door alle games van deze speler
      player.gameHistory.forEach(game => {
        if (!game.teammates) return; // Skip als er geen team informatie is
        // Alleen echte teammates tellen (spelers in hetzelfde team)
        game.teammates.forEach(teammateId => {
          // Zichzelf overslaan - vergelijk met verschillende mogelijke identifiers
          if (teammateId === player.player || teammateId === player.name?.toLowerCase() || teammateId.toLowerCase() === player.name?.toLowerCase()) return;
          if (!chemistry[teammateId]) {
            chemistry[teammateId] = {
              gamesPlayed: 0,
              gamesWon: 0,
              gamesTied: 0,
              gamesLost: 0
            };
          }
          chemistry[teammateId].gamesPlayed++;
          if (game.result === 3) chemistry[teammateId].gamesWon++;else if (game.result === 2) chemistry[teammateId].gamesTied++;else chemistry[teammateId].gamesLost++;
        });
      });
      // Maak teammate objects
      const teammates = Object.entries(chemistry).map(([name, stats]) => ({
        name: this.titleCasePipe.transform(name),
        gamesPlayed: stats.gamesPlayed,
        gamesWon: stats.gamesWon,
        gamesTied: stats.gamesTied,
        gamesLost: stats.gamesLost,
        chemistryScore: stats.gamesPlayed > 0 ? stats.gamesWon / stats.gamesPlayed : 0
      })).filter(t => t.gamesPlayed >= 3); // Alleen teammates met minimaal 3 gezamenlijke wedstrijden
      const sorted = teammates.sort((a, b) => b.chemistryScore - a.chemistryScore);
      // Groepeer teammates op chemie score
      const bestScore = sorted.length > 0 ? sorted[0].chemistryScore : 0;
      const worstScore = sorted.length > 0 ? sorted[sorted.length - 1].chemistryScore : 0;
      const bestGroup = sorted.filter(t => t.chemistryScore === bestScore);
      const worstGroup = sorted.filter(t => t.chemistryScore === worstScore);
      return {
        bestGroup,
        worstGroup: bestScore === worstScore ? [] : worstGroup,
        // Als alle scores gelijk zijn, geen worst group
        allTeammates: sorted
      };
    }
    trackByGame(index, game) {
      // Combineer datum en resultaat voor een unieke key
      const dateKey = game.date instanceof Date ? game.date.getTime().toString() : 'no-date';
      return `${dateKey}-${game.result}`;
    }
    static {
      this.ɵfac = function LeaderboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_statistics_service__WEBPACK_IMPORTED_MODULE_2__.GameStatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LeaderboardComponent,
        selectors: [["app-leaderboard"]],
        hostBindings: function LeaderboardComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function LeaderboardComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 3,
        consts: [["singleSeason", ""], [1, "leaderboard-container"], ["message", "Klassement laden...", 4, "ngIf"], ["class", "error-banner mat-elevation-z2", 4, "ngIf"], [4, "ngIf"], ["message", "Klassement laden..."], [1, "error-banner", "mat-elevation-z2"], ["mat-icon-button", "", 3, "click"], ["class", "season-header-container", 4, "ngIf"], [1, "mat-elevation-z8", "mobile-friendly-table", "leaderboard-table", 3, "dataSource"], ["matColumnDef", "position", 1, "position-column"], ["class", "position-cell", 4, "matHeaderCellDef"], ["class", "position-cell", 4, "matCellDef"], ["matColumnDef", "gamesPlayed", 1, "games-played-column"], ["class", "games-played-cell", 4, "matHeaderCellDef"], ["class", "games-played-cell", 4, "matCellDef"], ["matColumnDef", "totalPoints", 1, "total-points-column"], ["class", "total-points-cell", 4, "matHeaderCellDef"], ["class", "total-points-cell", 4, "matCellDef"], ["matColumnDef", "rating", 1, "rating-column"], ["class", "rating-cell", 4, "matHeaderCellDef"], ["class", "rating-cell", 4, "matCellDef"], ["matColumnDef", "gamesWon"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "gamesLost"], ["matColumnDef", "gamesTied"], ["matColumnDef", "winRatio"], ["matColumnDef", "zlatanPoints"], ["matColumnDef", "ventielPoints"], ["matColumnDef", "lastFiveGames", 1, "last-five-games-column"], ["class", "last-five-games-cell", 4, "matHeaderCellDef"], ["class", "last-five-games-cell", 4, "matCellDef"], ["matColumnDef", "name", 1, "name-column"], ["class", "name-cell name-header-cell", 4, "matHeaderCellDef"], ["class", "name-cell name-data-cell", 4, "matCellDef"], [4, "matHeaderRowDef"], ["class", "mat-row-no-pointer", 4, "matRowDef", "matRowDefColumns"], [1, "season-header-container"], [1, "season-title"], [4, "ngIf", "ngIfElse"], ["subscriptSizing", "dynamic", "appearance", "fill", 1, "inline-season-select"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "position-cell"], [1, "full-header"], [1, "mobile-header"], [1, "games-played-cell"], [1, "total-points-cell"], [1, "rating-cell"], [1, "last-five-games-cell"], [1, "last-five-games"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "aria-label", "wedstrijdresultaat", 3, "ngClass", "matTooltip"], [1, "name-cell", "name-header-cell"], [1, "name-cell", "name-data-cell"], [1, "player-link", 3, "routerLink"], [1, "trophy-gold"], [1, "trophy-silver"], [1, "trophy-bronze"], [1, "mat-row-no-pointer"]],
        template: function LeaderboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LeaderboardComponent_app_loading_state_1_Template, 1, 0, "app-loading-state", 2)(2, LeaderboardComponent_div_2_Template, 8, 1, "div", 3)(3, LeaderboardComponent_mat_card_3_Template, 42, 8, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__.LoadingStateComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink],
        styles: [".season-header-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: mat-color(primary, 600);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%]   .inline-season-select[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  min-width: 120px;\n  flex-shrink: 0;\n}\n.season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%]   .inline-season-select[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%]   .inline-season-select[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: left;\n}\n\n.full-header[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.name-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.leaderboard-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.name-header-cell[_ngcontent-%COMP%], \n.name-data-cell[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.name-data-cell.clickable-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.trophy-gold[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  color: #ffd700;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n\n.trophy-silver[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  color: #c0c0c0;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n\n.trophy-bronze[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  color: #ce8946;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n\n.leaderboard-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .full-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 8px;\n  }\n  .season-header-container[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%]   .inline-season-select[_ngcontent-%COMP%] {\n    min-width: 100px;\n    font-size: 0.875rem;\n  }\n  .leaderboard-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  mat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    font-size: 0.75rem;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%] {\n    table-layout: fixed;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%], .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%], .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\n    flex: none;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .position-cell[_ngcontent-%COMP%] {\n    flex: 0 0 10%;\n    max-width: 10%;\n    width: 10%;\n    text-align: center;\n    padding: 4px 0;\n    overflow: hidden;\n    padding-left: 8px;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .name-cell[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n    width: 25%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .games-played-cell[_ngcontent-%COMP%], .mobile-friendly-table[_ngcontent-%COMP%]   .total-points-cell[_ngcontent-%COMP%] {\n    flex: 0 0 10%;\n    max-width: 10%;\n    width: 10%;\n    text-align: center;\n    padding: 4px 0;\n    overflow: hidden;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .rating-cell[_ngcontent-%COMP%] {\n    flex: 0 0 15%;\n    max-width: 15%;\n    width: 15%;\n    text-align: center;\n    padding: 4px 0;\n    overflow: hidden;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .last-five-games-cell[_ngcontent-%COMP%] {\n    flex: 0 0 30%;\n    max-width: 30%;\n    width: 30%;\n    display: flex;\n    padding: 4px 0;\n    justify-content: flex-start;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .last-five-games-cell[_ngcontent-%COMP%]   .last-five-games[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .mobile-friendly-table[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    margin-left: 2px;\n  }\n  .last-five-games[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-right: 0px;\n    width: 16px; \n\n    height: 16px; \n\n    display: inline-flex; \n\n    align-items: center;\n    justify-content: center;\n    pointer-events: auto;\n  }\n  mat-table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n    .mat-mdc-table .mat-mdc-row,   .mat-mdc-table .mat-mdc-header-row {\n    height: auto;\n  }\n}\n\n.game-win[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n\n.game-tie[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\n.game-loss[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.player-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  border-bottom: 1px dotted currentColor;\n}\n.player-link[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxTQUFBO0VBQ0EsaUJDc0NZO0VEckNaLGdCQzRDaUI7RUQzQ2pCLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBRko7QUFJSTtFQUNFLGVDMEJXO0VEekJYLGdCQUFBO0VBQ0EsY0FBQTtBQUZOO0FBS007RUFDRSxhQUFBO0FBSFI7QUFPTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxSOztBQVdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBUkY7O0FBV0E7RUFDRSxxQ0FBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0FBUkY7O0FBYUU7RUFDRSxtQkNkWTtFRGVaLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVko7O0FBY0E7RUFDRSxXQUFBO0FBWEY7O0FBY0E7O0VBRUUsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGVBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQ3JDYztFRHNDZCxjQ3RFYztFRHVFZCxnQkFBQTtFQUNBLHNCQUFBO0FBWEY7O0FBYUE7RUFDRSxtQkMzQ2M7RUQ0Q2QsY0MzRWM7RUQ0RWQsZ0JBQUE7RUFDQSxzQkFBQTtBQVZGOztBQVlBO0VBQ0UsbUJDakRjO0VEa0RkLGNDaEZjO0VEaUZkLGdCQUFBO0VBQ0Esc0JBQUE7QUFURjs7QUFZQTtFQUNFLFVBQUE7QUFURjs7QUFhQTtFQUNFO0lBQ0UsYUFBQTtFQVZGO0VBYUE7SUFDRSxlQUFBO0VBWEY7RUFlRTtJQUNFLGtCQ3pFUztJRDBFVCxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMkJBQUE7SUFDQSxRQUFBO0VBYko7RUFlSTtJQUNFLGdCQUFBO0lBQ0EsbUJDcEZPO0VEdUViO0VBa0JBO0lBQ0UsVUFBQTtFQWhCRjtFQW1CQTtJQUNFLGdCQUFBO0lBQ0Esa0JDaEdXO0VEK0ViO0VBcUJBO0lBQ0UsbUJBQUE7RUFuQkY7RUFzQkU7SUFDRSxhQUFBO0VBcEJKO0VBdUJJO0lBQ0UsVUFBQTtFQXJCTjtFQTBCRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUF4Qko7RUEyQkU7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBekJKO0VBNEJFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUExQko7RUE2QkU7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQTNCSjtFQThCRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUE1Qko7RUE4Qkk7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUE1Qk47RUFpQ0U7SUFDRSxnQkFBQTtFQS9CSjtFQW9DQTtJQUNFLG1CQ3pLVztJRDBLWCxnQkFBQTtFQWxDRjtFQXNDRTtJQUNFLGVDaExXO0lEaUxYLGlCQUFBO0lBQ0EsV0FBQSxFQUFBLGtEQUFBO0lBQ0EsWUFBQSxFQUFBLGlEQUFBO0lBQ0Esb0JBQUEsRUFBQSxxQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtFQXBDSjtFQXlDQTtJQUNFLFdBQUE7RUF2Q0Y7QUFDRjtBQTRDRTtFQURGO0lBRUksWUFBQTtFQXpDRjtBQUNGOztBQTZDQTtFQUNFLGNDbFBjO0FEd01oQjs7QUE0Q0E7RUFDRSxjQ3RQZ0I7QUQ2TWxCOztBQTJDQTtFQUNFLGNDdFBlO0FEOE1qQjs7QUE0Q0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtBQXpDRjtBQTBDRTtFQUFVLGNDbFFJO0FEMk5oQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuLy8gU2Vhc29uIGhlYWRlciB3aXRoIGludGVncmF0ZWQgZmlsdGVyXHJcbi5zZWFzb24taGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICAuc2Vhc29uLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0yeGw7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgIGNvbG9yOiBtYXQtY29sb3IocHJpbWFyeSwgNjAwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvLyBTcHJlaWR0IHRpdGVsIGxpbmtzIGVuIGZpbHRlciByZWNodHNcclxuICAgIGdhcDogMTZweDtcclxuICAgIFxyXG4gICAgLmlubGluZS1zZWFzb24tc2VsZWN0IHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwOyAvLyBWb29ya29tdCBkYXQgZGUgZHJvcGRvd24ga3JpbXB0XHJcbiAgICAgIFxyXG4gICAgICAvLyBUT0RPIFBoYXNlIDI6IHZlcnZhbmcgZG9vciBNYXRGb3JtRmllbGQgYXBwZWFyYW5jZS9kZW5zaXR5LUFQSVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gVmVyYmVyZyBkZSBzdWJzY3JpcHQgcnVpbXRlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE8gUGhhc2UgMjogdmVydmFuZyBkb29yIE1hdEZvcm1GaWVsZCBhcHBlYXJhbmNlL2RlbnNpdHktQVBJXHJcbiAgICAgIDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZnVsbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm1vYmlsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8vIFRyb3BoeSBpY29uZW4gaW4gZGUgbmFhbSBrb2xvbSBvcCBkZXNrdG9wXHJcbi5uYW1lLWNlbGwge1xyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0zeGw7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxlYWRlcmJvYXJkLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hbWUtaGVhZGVyLWNlbGwsXHJcbi5uYW1lLWRhdGEtY2VsbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm5hbWUtZGF0YS1jZWxsLmNsaWNrYWJsZS1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50cm9waHktZ29sZCB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLTN4bDtcclxuICBjb2xvcjogJHRyb3BoeS1nb2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udHJvcGh5LXNpbHZlciB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLTN4bDtcclxuICBjb2xvcjogJHRyb3BoeS1zaWx2ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50cm9waHktYnJvbnplIHtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtM3hsO1xyXG4gIGNvbG9yOiAkdHJvcGh5LWJyb256ZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sZWFkZXJib2FyZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIE1vYmllbGUgc3RpamxlblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGFibGV0KSB7XHJcbiAgLmZ1bGwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG5cclxuICAuc2Vhc29uLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgLnNlYXNvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLy8gUmVzZXQgdm9vciBtb2JpZWxcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIFxyXG4gICAgICAuaW5saW5lLXNlYXNvbi1zZWxlY3Qge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGVhZGVyYm9hcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtY2VsbCwgbWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDhweCAycHg7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgfVxyXG5cclxuICAvLyBFeHBsaWNpZXRlIGtvbG9tYnJlZWR0ZS12ZXJkZWxpbmcgdm9vciBtb2JpZWxcclxuICAubW9iaWxlLWZyaWVuZGx5LXRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblxyXG4gICAgLy8gT3ZlcnJpZGUgQW5ndWxhciBNYXRlcmlhbCBmbGV4Ym94IGdlZHJhZ1xyXG4gICAgLm1hdC1tZGMtcm93LCAubWF0LW1kYy1oZWFkZXItcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC8vIFJlc2V0IGdlbGlqa2Uga29sb21icmVlZHRlIGdlZHJhZ1xyXG4gICAgICAubWF0LW1kYy1jZWxsLCAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNwZWNpZmlla2UgYnJlZWR0ZXMgdm9vciBhbGxlIGtvbG9tbWVuXHJcbiAgICAucG9zaXRpb24tY2VsbCB7XHJcbiAgICAgIGZsZXg6IDAgMCAxMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAlO1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZS1jZWxsIHtcclxuICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG5cclxuICAgIC5nYW1lcy1wbGF5ZWQtY2VsbCwgLnRvdGFsLXBvaW50cy1jZWxsIHtcclxuICAgICAgZmxleDogMCAwIDEwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMCU7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZy1jZWxsIHtcclxuICAgICAgZmxleDogMCAwIDE1JTtcclxuICAgICAgbWF4LXdpZHRoOiAxNSU7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmxhc3QtZml2ZS1nYW1lcy1jZWxsIHtcclxuICAgICAgZmxleDogMCAwIDMwJTtcclxuICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAubGFzdC1maXZlLWdhbWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJ3aWpkZXIgcGFkZGluZy1yZWNodHMgdmFuIG1hdC1yb3cgb3AgbW9iaWVsXHJcbiAgICAubWF0LW1kYy1yb3cge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVHJvcGh5IGVuIGdhbWUgcmVzdWx0YWF0IGljb25zIGFhbnBhc3NpbmdlblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgfVxyXG5cclxuICAubGFzdC1maXZlLWdhbWVzIHtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB3aWR0aDogMTZweDsgIC8qIFZlcmtsZWludCBkZSBzdGFuZGFhcmQgMjRweCBicmVlZHRlIG5hYXIgMTZweCAqL1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7IC8qIFZlcmtsZWludCBkZSBzdGFuZGFhcmQgMjRweCBob29ndGUgbmFhciAxNnB4ICovXHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyAvKiBab3JndCB2b29yIGVlbiBiZXRlcmUgdWl0bGlqbmluZyAqL1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBab3JnIGVydm9vciBkYXQgZGUgdGFiZWwgYWxsZSBiZXNjaGlrYmFyZSBydWltdGUgZ2VicnVpa3RcclxuICBtYXQtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSByZWdlbCBvbSBkZSBmbGV4Ym94IGxheW91dCBkaXJlY3QgdGUgb3ZlcnNjaHJpanZlblxyXG46Om5nLWRlZXAgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtcm93LCA6Om5nLWRlZXAgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtaGVhZGVyLXJvdyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLXRhYmxldCkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLy8gV2luL3RpZS9sb3NzIGtsZXVyZW4gdm9vciBkZSBtYXQtaWNvbiBpbiBkZSBsYWF0c3RlIHZpamYga29sb21cclxuLmdhbWUtd2luIHtcclxuICBjb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbn1cclxuLmdhbWUtdGllIHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG4uZ2FtZS1sb3NzIHtcclxuICBjb2xvcjogJGVycm9yLWNvbG9yO1xyXG59XHJcblxyXG5cclxuLnBsYXllci1saW5rIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBjdXJyZW50Q29sb3I7XHJcbiAgJjpob3ZlciB7IGNvbG9yOiAkcHJpbWFyeS1jb2xvcjsgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5NzZkMjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNjE2MTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM0M2EwNDc7XHJcbiRzdWNjZXNzLWRhcms6ICAgIzJlN2QzMjtcclxuJGVycm9yLWNvbG9yOiAgICAjZjQ0MzM2O1xyXG4kZXJyb3ItZGFyazogICAgICNkMzJmMmY7XHJcbiRlcnJvci1saWdodC1iZzogI2ZmZWJlZTtcclxuJGxpZ2h0LWJnOiAgICAgICAjZmZmO1xyXG4kdGV4dC1jb2xvcjogICAgICMzMzM7ICAgICAgICAvLyBEb25rZXJlIHRla3N0IGtsZXVyIHZvb3IgaGVhZGVycyBlbiBiZWxhbmdyaWprZSB0ZWtzdFxyXG4kdGV4dC1zZWNvbmRhcnk6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJHRleHQtbXV0ZWQ6ICAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRib3JkZXItY29sb3I6ICAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbi8vIFRyb3BoeSB0aWVycyAoa2xhc3NlbWVudCB0b3AtMylcclxuJHRyb3BoeS1nb2xkOiAgICNmZmQ3MDA7XHJcbiR0cm9waHktc2lsdmVyOiAjYzBjMGMwO1xyXG4kdHJvcGh5LWJyb256ZTogI2NlODk0NjtcclxuXHJcbi8vIEFjaGlldmVtZW50IHRpZXJzIMOiwoDClCBoZXJnZWJydWlrIHRyb3BoeS1rbGV1cmVuLCB2b2VnIHBsYXRpbnVtIHRvZS5cclxuJHRpZXItYnJvbnplOiAgICR0cm9waHktYnJvbnplO1xyXG4kdGllci1zaWx2ZXI6ICAgJHRyb3BoeS1zaWx2ZXI7XHJcbiR0aWVyLWdvbGQ6ICAgICAkdHJvcGh5LWdvbGQ7XHJcbiR0aWVyLXBsYXRpbnVtOiAjYjlmMmZmO1xyXG5cclxuLy8gRWxldmF0aW9uXHJcbiRjYXJkLXNoYWRvdzogICAgICAgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJGNhcmQtc2hhZG93LWhvdmVyOiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4vLyBCcmVha3BvaW50cyDDosKAwpQgTWF0ZXJpYWwtYWxpZ25lZC4gR2VicnVpayB2aWEgQG1lZGlhIChtYXgtd2lkdGg6ICRicC0uLi4pLlxyXG4vLyAtIG1vYmlsZSAgOiBwaG9uZS1wb3J0cmFpdCArIHNtYWxsIHBob25lLWxhbmRzY2FwZVxyXG4vLyAtIHRhYmxldCAgOiB0YWJsZXQtcG9ydHJhaXRcclxuLy8gLSBkZXNrdG9wIDogdGFibGV0LWxhbmRzY2FwZSArIGRlc2t0b3BcclxuJGJwLW1vYmlsZTogIDYwMHB4O1xyXG4kYnAtdGFibGV0OiAgNzY4cHg7XHJcbiRicC1kZXNrdG9wOiAxMDI0cHg7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LW1haW46ICdSb2JvdG8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbi8vIEZvbnQgU2l6ZXNcclxuJGZvbnQtc2l6ZS14czogMC43NXJlbTsgICAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtc206IDAuODc1cmVtOyAgICAgLy8gMTRweCAgXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAxLjEyNXJlbTsgICAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAgICAvLyAyMHB4XHJcbiRmb250LXNpemUtMnhsOiAxLjVyZW07ICAgICAgLy8gMjRweFxyXG4kZm9udC1zaXplLTN4bDogMS44NzVyZW07ICAgIC8vIDMwcHhcclxuJGZvbnQtc2l6ZS00eGw6IDJyZW07ICAgICAgICAvLyAzMnB4XHJcbiRmb250LXNpemUtNXhsOiAyLjVyZW07ICAgICAgLy8gNDBweFxyXG5cclxuLy8gRm9udCBXZWlnaHRzXHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbi8vIExpbmUgSGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtdGlnaHQ6IDEuMjU7XHJcbiRsaW5lLWhlaWdodC1ub3JtYWw6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXJlbGF4ZWQ6IDEuNjI1OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return LeaderboardComponent;
})();

/***/ }),

/***/ 94165:
/*!*****************************************************!*\
  !*** ./src/app/services/game.statistics.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameStatisticsService: () => (/* binding */ GameStatisticsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.service */ 6455);
/* harmony import */ var _wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wedstrijden.service */ 40237);





let GameStatisticsService = /*#__PURE__*/(() => {
  class GameStatisticsService {
    constructor(playerService, wedstrijdenService) {
      this.playerService = playerService;
      this.wedstrijdenService = wedstrijdenService;
      this.ratingsCache = null;
      this.cacheTimestamp = null;
      this.cacheDurationMs = 5 * 60 * 1000; // 5 minuten
    }
    /**
     * Haalt alle beschikbare seizoenen op uit de wedstrijdendata.
     * @returns Observable array van seizoen strings, gesorteerd van nieuw naar oud
     */
    getAvailableSeasons() {
      return this.wedstrijdenService.getBeschikbareSeizoen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(seizoenData => seizoenData.map(s => s.seizoen)));
    }
    /**
     * Haalt het meest recente seizoen op.
     */
    getCurrentSeason() {
      return this.getAvailableSeasons().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(seasons => seasons.length > 0 ? seasons[0] : null));
    }
    getPlayerStatsByName(playerName) {
      const now = Date.now();
      if (this.ratingsCache && this.cacheTimestamp && now - this.cacheTimestamp < this.cacheDurationMs) {
        return this.ratingsCache.find(p => p.name === playerName);
      }
      return undefined;
    }
    /**
     * Geeft uitgebreide statistieken voor alle spelers, incl. gamesPlayed, totalPoints, wins, losses, ties, rating, winRatio, gameHistory, zlatanPoints, ventielPoints
     * @param season Optioneel seizoen filter (bijv. "2024-2025"). Als null, worden alle wedstrijden meegenomen.
     */
    getFullPlayerStats(season) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        spelers: this.playerService.getPlayers(),
        wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
        spelers,
        wedstrijden
      }) => {
        const spelersById = new Map();
        spelers.forEach(p => {
          if (typeof p.id === 'number') spelersById.set(p.id, p);
        });
        let geldigeWedstrijden = wedstrijden;
        // Filter wedstrijden op seizoen indien opgegeven
        if (season) {
          geldigeWedstrijden = geldigeWedstrijden.filter(match => {
            return match.seizoen === season;
          });
        }
        // Sorteer geldigeWedstrijden op datum (oud -> nieuw) zodat gameHistory altijd chronologisch is
        const geldigeWedstrijdenSorted = [...geldigeWedstrijden].sort((a, b) => {
          if (!a.datum || !b.datum) return 0;
          return a.datum.getTime() - b.datum.getTime();
        });
        // Statistieken per speler — gekeyed op id
        const playerStats = {};
        const idToName = id => spelersById.get(id)?.name ?? '';
        geldigeWedstrijdenSorted.forEach(match => {
          const teamWhiteIds = match.teamWit || [];
          const teamRedIds = match.teamRood || [];
          const allIds = [...teamWhiteIds, ...teamRedIds];
          const allNames = allIds.map(idToName).filter(Boolean);
          const teamWhiteNames = teamWhiteIds.map(idToName).filter(Boolean);
          const teamRedNames = teamRedIds.map(idToName).filter(Boolean);
          const teamWhiteGoals = match.scoreWit || 0;
          const teamRedGoals = match.scoreRood || 0;
          // White team players
          teamWhiteIds.forEach(pid => {
            if (!playerStats[pid]) playerStats[pid] = {
              gamesPlayed: 0,
              totalPoints: 0,
              wins: 0,
              losses: 0,
              ties: 0,
              gameHistory: [],
              zlatanPoints: 0,
              ventielPoints: 0
            };
            playerStats[pid].gamesPlayed++;
            if (teamWhiteGoals > teamRedGoals) playerStats[pid].wins++;else if (teamWhiteGoals < teamRedGoals) playerStats[pid].losses++;else playerStats[pid].ties++;
            playerStats[pid].gameHistory.push({
              result: teamWhiteGoals > teamRedGoals ? 3 : teamWhiteGoals === teamRedGoals ? 2 : 1,
              date: match.datum,
              playerNames: allNames,
              teammates: teamWhiteNames,
              opponents: teamRedNames
            });
            if (match.zlatanPlayerId === pid) {
              playerStats[pid].zlatanPoints = (playerStats[pid].zlatanPoints || 0) + 1;
            }
            if (match.ventielPlayerId === pid) {
              playerStats[pid].ventielPoints = (playerStats[pid].ventielPoints || 0) + 1;
            }
          });
          // Red team players
          teamRedIds.forEach(pid => {
            if (!playerStats[pid]) playerStats[pid] = {
              gamesPlayed: 0,
              totalPoints: 0,
              wins: 0,
              losses: 0,
              ties: 0,
              gameHistory: [],
              zlatanPoints: 0,
              ventielPoints: 0
            };
            playerStats[pid].gamesPlayed++;
            if (teamRedGoals > teamWhiteGoals) playerStats[pid].wins++;else if (teamRedGoals < teamWhiteGoals) playerStats[pid].losses++;else playerStats[pid].ties++;
            playerStats[pid].gameHistory.push({
              result: teamRedGoals > teamWhiteGoals ? 3 : teamRedGoals === teamWhiteGoals ? 2 : 1,
              date: match.datum,
              playerNames: allNames,
              teammates: teamRedNames,
              opponents: teamWhiteNames
            });
            if (match.zlatanPlayerId === pid) {
              playerStats[pid].zlatanPoints = (playerStats[pid].zlatanPoints || 0) + 1;
            }
            if (match.ventielPlayerId === pid) {
              playerStats[pid].ventielPoints = (playerStats[pid].ventielPoints || 0) + 1;
            }
          });
        });
        // Voeg spelers toe die in de Spelers-lijst staan maar nog geen wedstrijden hebben gespeeld
        spelers.forEach(player => {
          if (typeof player.id === 'number' && !playerStats[player.id]) {
            playerStats[player.id] = {
              gamesPlayed: 0,
              totalPoints: 0,
              wins: 0,
              losses: 0,
              ties: 0,
              gameHistory: [],
              zlatanPoints: 0,
              ventielPoints: 0
            };
          }
        });
        // Total points en max
        Object.values(playerStats).forEach(stats => {
          stats.totalPoints = stats.wins * 3 + stats.ties * 2 + stats.losses * 1 + (stats.zlatanPoints || 0);
        });
        const maxTotalPoints = Math.max(...Object.values(playerStats).map(stats => stats.totalPoints || 0), 1);
        // Maak array met alle info
        return Object.entries(playerStats).map(([playerIdStr, stats]) => {
          const playerId = Number(playerIdStr);
          const spelerData = spelersById.get(playerId);
          let rating = Math.round(stats.totalPoints / (maxTotalPoints / 10));
          rating = Math.max(1, Math.min(10, rating));
          return {
            id: spelerData?.id,
            name: spelerData ? spelerData.name : '',
            position: spelerData ? spelerData.position : null,
            rating: rating,
            gamesPlayed: stats.gamesPlayed,
            totalPoints: stats.totalPoints,
            wins: stats.wins,
            losses: stats.losses,
            ties: stats.ties,
            winRatio: stats.gamesPlayed > 0 ? stats.wins / stats.gamesPlayed * 100 : 0,
            gameHistory: stats.gameHistory || [],
            zlatanPoints: stats.zlatanPoints || 0,
            ventielPoints: stats.ventielPoints || 0,
            actief: spelerData ? spelerData.actief : false
          };
        })
        // Filter: alleen spelers met geldige naam (gevonden in spelersById)
        .filter(player => !!player.name)
        // Filter: verwijder spelers die niet actief zijn EN geen wedstrijden hebben in dit seizoen
        .filter(player => player.actief || player.gamesPlayed > 0).sort((a, b) => b.totalPoints - a.totalPoints);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(players => {
        this.ratingsCache = players;
        this.cacheTimestamp = Date.now();
      }));
    }
    static {
      this.ɵfac = function GameStatisticsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GameStatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__.WedstrijdenService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: GameStatisticsService,
        factory: GameStatisticsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GameStatisticsService;
})();

/***/ })

}]);
//# sourceMappingURL=321.js.map