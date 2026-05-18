"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[873],{

/***/ 31873:
/*!***********************************************************************!*\
  !*** ./src/app/components/team-generator/team-generator.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamGeneratorComponent: () => (/* binding */ TeamGeneratorComponent)
/* harmony export */ });
/* harmony import */ var C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _enums_positions_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/positions.enum */ 58464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 56042);
/* harmony import */ var _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next-match-info/next-match-info.component */ 11673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player-card/player-card.component */ 24137);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _services_team_generate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/team-generate.service */ 69309);
/* harmony import */ var _services_next_match_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/next-match.service */ 5067);
/* harmony import */ var _services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/wedstrijden.service */ 40237);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/attendance.service */ 19425);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/player.service */ 6455);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 74646);











































function TeamGeneratorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function TeamGeneratorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-loading-state", 1);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-next-match-info", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 4)(2, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submit", function TeamGeneratorComponent_Conditional_3_Conditional_0_Template_form_submit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.createPlayerForms());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.GetAanwezigSpelers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Maak teams op basis van alle actieve spelers van Zaalvoetbal Doorn");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.GetAlleActieveSpelers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " Actieve Spelers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Maak teams op basis van nieuw in te voeren spelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "mat-form-field", 7)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Aantal spelers");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function TeamGeneratorComponent_Conditional_3_Conditional_0_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.numOfPlayers, $event) || (ctx_r1.numOfPlayers = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "button", 9)(24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, " Nieuw ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nextMatchInfo", ctx_r1.nextMatchInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("Maak teams voor wedstrijd # ", ctx_r1.nextMatchInfo == null ? null : ctx_r1.nextMatchInfo.matchNumber, " op ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 6, ctx_r1.nextMatchInfo == null ? null : ctx_r1.nextMatchInfo.parsedDate, "EEEE d MMMM yyyy"), " op basis van geregistreerde aanwezigheid");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](10, 9, ctx_r1.nextMatchInfo == null ? null : ctx_r1.nextMatchInfo.parsedDate, "EEEE d MMMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numOfPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.numOfPlayers < 1);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", position_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](position_r6);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rating_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", rating_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](rating_r7);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 12)(1, "mat-form-field", 18)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-form-field", 18)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](9, TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_For_10_Template, 2, 2, "mat-option", 21, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-form-field", 18)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](15, TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_For_16_Template, 2, 2, "mat-option", 21, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_Template_button_click_17_listener() {
      const $index_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5).$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.deletePlayer($index_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "mat-divider", 23);
  }
  if (rf & 2) {
    const form_r9 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.getAsFormGroup(form_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Player Name ", $index_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.positions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.ratings);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Teams genereren...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-spinner", 31);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Voorbeschouwing wordt geschreven...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 33);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx_r1.algorithmExplanation, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card-actions", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.showFullExplanation = !ctx_r1.showFullExplanation);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.showFullExplanation ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.showFullExplanation ? "Minder tonen" : "Meer details", " ");
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 26)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Voorbeschouwing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_6_Template, 1, 0, "mat-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_8_Template, 2, 0, "p", 32)(9, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_9_Template, 1, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Conditional_10_Template, 5, 2, "mat-card-actions", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isLoadingCommentary ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isLoadingCommentary && !ctx_r1.algorithmExplanation ? 8 : 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.algorithmExplanation.length > 800 && !ctx_r1.isLoadingCommentary ? 10 : -1);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-player-card", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r14 = ctx.$implicit;
    const teamKey_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("player", player_r14)("shirtColor", ctx_r1.getTeam(teamKey_r13).shirtcolor);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("cdkDropListDropped", function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_div_3_Template_div_cdkDropListDropped_7_listener($event) {
      const teamKey_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onPlayerDrop($event, teamKey_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_div_3_div_8_Template, 2, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const teamKey_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.getTeam(teamKey_r13).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Team Rating: ", ctx_r1.getTeam(teamKey_r13).sumOfRatings.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cdkDropListData", ctx_r1.getTeam(teamKey_r13).squad)("cdkDropListConnectedTo", ctx_r1.connectedDropLists)("id", teamKey_r13 + "-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.getTeam(teamKey_r13).squad)("ngForTrack", ctx_r1.player);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "hr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Conditional_1_Template, 11, 3, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_div_3_Template, 9, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 29)(5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.saveTeamsToSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.algorithmExplanation || ctx_r1.isLoadingCommentary ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.getTeams())("ngForTrackBy", ctx_r1.trackByTeamKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 4, ctx_r1.loading$) || ctx_r1.isSavingTeams);
  }
}
function TeamGeneratorComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addNewPlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](6, 12)(7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterCreate"](8, TeamGeneratorComponent_Conditional_3_Conditional_1_For_9_Template, 21, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 14)(11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generateTeams());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Genereer Teams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TeamGeneratorComponent_Conditional_3_Conditional_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clean());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Verwijder Spelers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_15_Template, 4, 0, "div", 17)(16, TeamGeneratorComponent_Conditional_3_Conditional_1_Conditional_16_Template, 9, 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r1.numOfPlayers, " Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.playerForms);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrepeater"](ctx_r1.getAsFormArray(ctx_r1.playerForms.controls["players"]).controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.numOfPlayers < 1 || ctx_r1.isGenerating);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r1.numOfPlayers < 1 || ctx_r1.isGenerating);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isGenerating ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isGenerated ? 16 : -1);
  }
}
function TeamGeneratorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, TeamGeneratorComponent_Conditional_3_Conditional_0_Template, 27, 12)(1, TeamGeneratorComponent_Conditional_3_Conditional_1_Template, 17, 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx_r1.isFirst ? 0 : 1);
  }
}
let TeamGeneratorComponent = /*#__PURE__*/(() => {
  class TeamGeneratorComponent {
    constructor(teamGenerateService, nextMatchService, wedstrijdenService, attendanceService, playerService, snackBar, snackbar) {
      this.teamGenerateService = teamGenerateService;
      this.nextMatchService = nextMatchService;
      this.wedstrijdenService = wedstrijdenService;
      this.attendanceService = attendanceService;
      this.playerService = playerService;
      this.snackBar = snackBar;
      this.snackbar = snackbar;
      this.activePlayersList = new Array();
      this.fullPlayerStats = [];
      this.historischeWedstrijden = [];
      this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.ReplaySubject(1);
      this.loading$ = this.loadingSubject.asObservable();
      this.isFirst = true;
      this.isGenerated = false;
      this.isGenerating = false;
      this.isTeamsSaved = false;
      this.isSavingTeams = false;
      this.algorithmExplanation = '';
      this.showFullExplanation = false;
      this.isLoadingCommentary = false;
      this.lastGenerationResult = null;
      this.positions = Object.values(_enums_positions_enum__WEBPACK_IMPORTED_MODULE_1__.Positions);
      this.ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.numOfPlayers = 0;
      this.teams = {};
      this.hidePlayerRatings = false;
      this.errorMessage = null;
      this.playerForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
        players: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray([])
      });
      this.nextMatchInfo = null;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
    }
    ngOnInit() {
      this.loadingSubject.next(true);
      this.nextMatchService.getNextMatchInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe(info => {
        this.nextMatchInfo = info;
        this.loadingSubject.next(false);
      });
      this.wedstrijdenService.getGespeeldeWedstrijden().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe(wedstrijden => {
        this.historischeWedstrijden = wedstrijden;
      });
    }
    getAsFormArray(formArray) {
      return formArray;
    }
    getAsFormGroup(fromGroup) {
      return fromGroup;
    }
    generateTeams() {
      this.isGenerating = true;
      this.teamGenerateService.cleanGeneratedTeams();
      // Use setTimeout to allow UI to update with spinner before heavy computation
      setTimeout(() => {
        const values = this.playerForms.value;
        if (!values.players || values.players.length === 0) {
          this.errorMessage = 'Please add players first.';
          this.isGenerating = false;
          return;
        }
        // Extract players directly from the form array to ensure only present players are included
        const selectedPlayers = this.getAsFormArray(this.playerForms.controls['players']).controls.map(control => control.value).filter(player => player && player.name && player.name.trim() !== '' && player.position && player.rating);
        console.log('Selected players for team generation:', selectedPlayers);
        // Generate teams with only selected players
        this.lastGenerationResult = this.teamGenerateService.generateTeams(selectedPlayers);
        const generatedTeams = this.teamGenerateService.getGeneratedTeams();
        // Initialize teams object
        this.teams = {};
        // Properly assign teams by index
        if (generatedTeams.length >= 2) {
          this.teams = {
            teamWhite: generatedTeams[0],
            teamRed: generatedTeams[1]
          };
        }
        this.isGenerated = true;
        // Generate explanation for the team balancing algorithm
        this.createAlgorithmExplanation();
        this.isGenerating = false;
      }, 100);
    }
    createAlgorithmExplanation() {
      const teams = this.teamGenerateService.getGeneratedTeams();
      if (!teams || teams.length < 2) return;
      const teamWhite = teams[0];
      const teamRed = teams[1];
      // Analyze team characteristics
      const whiteAnalysis = this.analyzeTeam(teamWhite);
      const redAnalysis = this.analyzeTeam(teamRed);
      // Start AI-versie (bij falen valt terug op template)
      this.generateAICommentary(teamWhite, teamRed, whiteAnalysis, redAnalysis);
    }
    enrichSquad(squad) {
      return squad.map(player => {
        const full = this.fullPlayerStats.find(p => p.name === player.name);
        return full ? {
          ...player,
          ...full,
          rating: player.rating,
          position: player.position
        } : player;
      });
    }
    analyzeTeam(team) {
      const squad = this.enrichSquad(team.squad);
      // Find players with exceptional form (last 5 games > 70% win rate)
      const playersInForm = squad.filter(player => {
        if (!player.gameHistory || player.gameHistory.length < 3) return false;
        const recentGames = player.gameHistory.slice(-5);
        const wins = recentGames.filter(game => game.result === 3).length;
        return wins / recentGames.length > 0.7;
      });
      // Find players with poor form (last 5 games < 30% win rate)
      const playersInPoorForm = squad.filter(player => {
        if (!player.gameHistory || player.gameHistory.length < 3) return false;
        const recentGames = player.gameHistory.slice(-5);
        const wins = recentGames.filter(game => game.result === 3).length;
        return wins / recentGames.length < 0.3;
      });
      // Find players on a win streak (3+ consecutive wins from the end)
      const playersOnWinStreak = squad.map(player => {
        if (!player.gameHistory || player.gameHistory.length < 3) return null;
        let streak = 0;
        for (let i = player.gameHistory.length - 1; i >= 0; i--) {
          if (player.gameHistory[i].result === 3) streak++;else break;
        }
        return streak >= 3 ? {
          player,
          streak
        } : null;
      }).filter(x => x !== null);
      // Total experience (sum of gamesPlayed)
      const totalExperience = squad.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0);
      // Find new players (<=3 games played)
      const newPlayers = squad.filter(player => !player.gamesPlayed || player.gamesPlayed <= 3);
      // Find players with notable zlatan or ventiel points
      const zlatanStars = squad.filter(p => (p.zlatanPoints || 0) >= 3);
      const ventielStars = squad.filter(p => (p.ventielPoints || 0) >= 3);
      return {
        playersInForm,
        playersInPoorForm,
        playersOnWinStreak,
        newPlayers,
        totalExperience,
        zlatanStars,
        ventielStars,
        totalScore: team.totalScore || 0
      };
    }
    setIntersectionSize(a, b) {
      let count = 0;
      a.forEach(v => {
        if (b.has(v)) count++;
      });
      return count;
    }
    findSimilarTeamCompositions() {
      if (!this.teams.teamWhite?.squad || !this.teams.teamRed?.squad) return [];
      const curWhite = new Set(this.teams.teamWhite.squad.map(p => p.name.toLowerCase().trim()));
      const curRed = new Set(this.teams.teamRed.squad.map(p => p.name.toLowerCase().trim()));
      const results = [];
      // Resolve historic player-ids naar namen (lowercase) via fullPlayerStats voor naam-vergelijking.
      const idToName = id => {
        const stat = this.fullPlayerStats.find(p => p.id === id);
        return stat?.name?.toLowerCase().trim() ?? '';
      };
      for (const w of this.historischeWedstrijden) {
        if (!w.teamWit?.length || !w.teamRood?.length || !w.datum) continue;
        const histWhite = new Set(w.teamWit.map(idToName).filter(n => n));
        const histRed = new Set(w.teamRood.map(idToName).filter(n => n));
        if (histWhite.size === 0 && histRed.size === 0) continue;
        // Normaal: wit vs wit + rood vs rood
        const normalScore = (this.setIntersectionSize(curWhite, histWhite) / Math.max(curWhite.size, histWhite.size) + this.setIntersectionSize(curRed, histRed) / Math.max(curRed.size, histRed.size)) / 2;
        // Omgedraaid: wit vs rood + rood vs wit
        const flippedScore = (this.setIntersectionSize(curWhite, histRed) / Math.max(curWhite.size, histRed.size) + this.setIntersectionSize(curRed, histWhite) / Math.max(curRed.size, histWhite.size)) / 2;
        const best = Math.max(normalScore, flippedScore);
        if (best >= 0.6) {
          results.push({
            wedstrijd: w,
            score: best,
            isFlipped: flippedScore > normalScore
          });
        }
      }
      return results.sort((a, b) => b.score - a.score).slice(0, 2);
    }
    findBestDuo(squad) {
      let bestDuo = null;
      for (let i = 0; i < squad.length; i++) {
        for (let j = i + 1; j < squad.length; j++) {
          const a = squad[i];
          const b = squad[j];
          if (!a.gameHistory || !b.gameHistory) continue;
          // Find games where both were teammates
          let together = 0;
          let wins = 0;
          for (const game of a.gameHistory) {
            if (game.teammates && game.teammates.includes(b.name)) {
              together++;
              if (game.result === 3) wins++;
            }
          }
          if (together >= 3) {
            const winRate = wins / together;
            if (!bestDuo || winRate > bestDuo.winRate || winRate === bestDuo.winRate && together > bestDuo.games) {
              bestDuo = {
                playerA: a.name,
                playerB: b.name,
                winRate,
                games: together
              };
            }
          }
        }
      }
      return bestDuo;
    }
    generatePersonalizedExplanation(teamWhite, teamRed, whiteAnalysis, redAnalysis, _factors) {
      const parts = [];
      const scoreDiff = Math.abs(whiteAnalysis.totalScore - redAnalysis.totalScore);
      const genResult = this.lastGenerationResult;
      // --- A. Opening — Balansoordeel ---
      if (scoreDiff < 0.5) {
        parts.push('<p><strong>Dit wordt een absolute thriller!</strong> Het algoritme kon nauwelijks verschil vinden tussen deze teams — op papier zijn ze vrijwel identiek.</p>');
      } else if (scoreDiff < 2) {
        parts.push('<p><strong>Op papier zijn deze teams uitzonderlijk goed gebalanceerd.</strong> Het verschil is minimaal, dus dit belooft een spannende pot te worden.</p>');
      } else {
        const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
        parts.push(`<p><strong>${favoriet} start met een klein voordeel</strong>, maar juist dat maakt het spannend — de underdog heeft alles te winnen.</p>`);
      }
      // --- B. Vorm-verhaal ---
      const formParts = [];
      const allInForm = [...whiteAnalysis.playersInForm.map(p => ({
        player: p,
        team: teamWhite.name
      })), ...redAnalysis.playersInForm.map(p => ({
        player: p,
        team: teamRed.name
      }))];
      for (const {
        player,
        team
      } of allInForm) {
        const recentGames = player.gameHistory.slice(-5);
        const wins = recentGames.filter(g => g.result === 3).length;
        if (genResult) {
          const adj = genResult.formAdjustments.find(a => a.playerName === player.name);
          if (adj) {
            formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij in topvorm. Zijn effectieve rating steeg van ${adj.originalRating} naar ${adj.adjustedRating}.</p>`);
          } else {
            formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij momenteel niet te stoppen.</p>`);
          }
        } else {
          formParts.push(`<p>Let op <strong>${player.name}</strong> (${team}) — met ${wins} overwinningen in de laatste ${recentGames.length} wedstrijden is hij momenteel niet te stoppen.</p>`);
        }
      }
      const allPoorForm = [...whiteAnalysis.playersInPoorForm.map(p => ({
        player: p,
        team: teamWhite.name
      })), ...redAnalysis.playersInPoorForm.map(p => ({
        player: p,
        team: teamRed.name
      }))];
      for (const {
        player
      } of allPoorForm) {
        if (genResult) {
          const adj = genResult.formAdjustments.find(a => a.playerName === player.name);
          if (adj) {
            formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks (rating aangepast van ${adj.originalRating} naar ${adj.adjustedRating}). Een comeback zou het verschil kunnen maken.</p>`);
          } else {
            formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks. Een comeback zou het verschil kunnen maken.</p>`);
          }
        } else {
          formParts.push(`<p><strong>${player.name}</strong> zoekt naar zijn beste niveau na een lastige reeks. Een comeback zou het verschil kunnen maken.</p>`);
        }
      }
      if (formParts.length > 0) {
        parts.push(...formParts);
      }
      // --- C. Fun facts pool ---
      const funFacts = [];
      // Duo-chemistry
      const whiteDuo = this.findBestDuo(this.enrichSquad(teamWhite.squad));
      const redDuo = this.findBestDuo(this.enrichSquad(teamRed.squad));
      if (whiteDuo) {
        const pct = Math.round(whiteDuo.winRate * 100);
        funFacts.push(`<p>Wist je dat <strong>${whiteDuo.playerA}</strong> en <strong>${whiteDuo.playerB}</strong> samen een winrate van ${pct}% hebben in ${whiteDuo.games} gezamenlijke wedstrijden? ${teamWhite.name} kan daarvan profiteren!</p>`);
      }
      if (redDuo) {
        const pct = Math.round(redDuo.winRate * 100);
        funFacts.push(`<p>Wist je dat <strong>${redDuo.playerA}</strong> en <strong>${redDuo.playerB}</strong> samen een winrate van ${pct}% hebben in ${redDuo.games} gezamenlijke wedstrijden? ${teamRed.name} kan daarvan profiteren!</p>`);
      }
      // Experience comparison
      const whiteExp = whiteAnalysis.totalExperience;
      const redExp = redAnalysis.totalExperience;
      if (whiteExp > 0 || redExp > 0) {
        funFacts.push(`<p>${teamWhite.name} brengt samen <strong>${whiteExp} wedstrijden</strong> ervaring mee dit seizoen, ${teamRed.name} <strong>${redExp}</strong>. ${whiteExp > redExp ? 'Het ervaringsvoordeel ligt bij Wit.' : redExp > whiteExp ? 'Het ervaringsvoordeel ligt bij Rood.' : 'Ervaring is precies gelijk verdeeld!'}</p>`);
      }
      // Newcomer spotlight
      const allNewPlayers = [...whiteAnalysis.newPlayers, ...redAnalysis.newPlayers];
      for (const player of allNewPlayers) {
        const n = player.gamesPlayed || 0;
        funFacts.push(`<p>Voor <strong>${player.name}</strong> wordt dit pas wedstrijd nummer ${n + 1} — spannend debuut tussen ervaren spelers!</p>`);
      }
      // Win streaks
      const allStreaks = [...whiteAnalysis.playersOnWinStreak, ...redAnalysis.playersOnWinStreak];
      for (const {
        player,
        streak
      } of allStreaks) {
        funFacts.push(`<p>Let op: <strong>${player.name}</strong> is al ${streak} wedstrijden ongeslagen! Wie stopt deze reeks?</p>`);
      }
      // Zlatan highlights
      const allZlatan = [...whiteAnalysis.zlatanStars, ...redAnalysis.zlatanStars];
      for (const player of allZlatan) {
        funFacts.push(`<p><strong>${player.name}</strong> staat bekend om zijn zlatanpunten (${player.zlatanPoints}) — verwacht spectaculaire acties!</p>`);
      }
      // Ventiel highlights
      const allVentiel = [...whiteAnalysis.ventielStars, ...redAnalysis.ventielStars];
      for (const player of allVentiel) {
        funFacts.push(`<p><strong>${player.name}</strong> heeft ${player.ventielPoints} ventielpoints — de onbetwiste ventielheld van de groep.</p>`);
      }
      // Select random 2-3 fun facts from pool
      if (funFacts.length > 0) {
        const shuffled = funFacts.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(3, Math.max(2, shuffled.length)));
        parts.push(...selected);
      }
      // Historical team compositions — altijd tonen als gevonden
      const vergelijkbaar = this.findSimilarTeamCompositions();
      const maandNamen = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
      for (const {
        wedstrijd: w,
        score,
        isFlipped
      } of vergelijkbaar) {
        const dag = w.datum.getDate();
        const maand = maandNamen[w.datum.getMonth()];
        const jaar = w.datum.getFullYear();
        const pct = Math.round(score * 100);
        const uitslag = w.scoreWit !== null && w.scoreRood !== null ? `Wit ${w.scoreWit} – ${w.scoreRood} Rood` : null;
        let tekst;
        if (pct === 100 && !isFlipped) {
          tekst = `Exact dezelfde teams als op <strong>${dag} ${maand} ${jaar}</strong>!${uitslag ? ` Toen werd het <strong>${uitslag}</strong>.` : ''} Wordt de geschiedenis herhaald?`;
        } else if (pct === 100 && isFlipped) {
          tekst = `Op <strong>${dag} ${maand} ${jaar}</strong> stonden dezelfde spelers tegenover elkaar, maar dan omgekeerd.${uitslag ? ` Uitslag: <strong>${uitslag}</strong>.` : ''} Revanche time?`;
        } else if (isFlipped) {
          tekst = `<strong>${pct}%</strong> overlap met de wedstrijd van <strong>${dag} ${maand} ${jaar}</strong> — maar Wit en Rood waren toen omgedraaid.${uitslag ? ` Uitslag: <strong>${uitslag}</strong>.` : ''}`;
        } else {
          tekst = `<strong>${pct}%</strong> van de huidige opstelling speelde ook op <strong>${dag} ${maand} ${jaar}</strong>.${uitslag ? ` Toen eindigde het <strong>${uitslag}</strong>.` : ''}`;
        }
        parts.push(`<p>${tekst}</p>`);
      }
      // --- E. Afsluiter — Voorspelling ---
      if (scoreDiff < 1) {
        parts.push('<p><strong>Verdict:</strong> dit wordt een wedstrijd die tot de laatste seconde spannend blijft. Zet je schrap!</p>');
      } else if (scoreDiff < 2) {
        const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
        parts.push(`<p><strong>Verdict:</strong> ${favoriet} begint als lichte favoriet, maar de marges zijn flinterdun. Alles is mogelijk!</p>`);
      } else {
        const favoriet = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamWhite.name : teamRed.name;
        const underdog = whiteAnalysis.totalScore > redAnalysis.totalScore ? teamRed.name : teamWhite.name;
        parts.push(`<p><strong>Verdict:</strong> ${favoriet} start als favoriet, maar onderschat nooit de underdog. ${underdog} heeft niets te verliezen!</p>`);
      }
      return parts.join('');
    }
    generateAICommentary(teamWhite, teamRed, whiteAnalysis, redAnalysis) {
      var _this = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoadingCommentary = true;
        try {
          const payload = _this.buildCommentaryPayload(teamWhite, teamRed, whiteAnalysis, redAnalysis);
          const response = yield fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseBaseUrl}/generateTeamCommentary`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const {
            commentary
          } = yield response.json();
          if (commentary) {
            _this.algorithmExplanation = commentary;
          }
        } catch (err) {
          // Fallback naar template-versie
          console.warn('AI commentary niet beschikbaar, template wordt gebruikt:', err);
          _this.algorithmExplanation = _this.generatePersonalizedExplanation(teamWhite, teamRed, whiteAnalysis, redAnalysis, []);
        } finally {
          _this.isLoadingCommentary = false;
        }
      })();
    }
    buildCommentaryPayload(teamWhite, teamRed, whiteAnalysis, redAnalysis) {
      const whiteDuo = this.findBestDuo(this.enrichSquad(teamWhite.squad));
      const redDuo = this.findBestDuo(this.enrichSquad(teamRed.squad));
      const vergelijkbaar = this.findSimilarTeamCompositions();
      return {
        teamWhite: {
          name: teamWhite.name,
          totalScore: whiteAnalysis.totalScore,
          players: this.enrichSquad(teamWhite.squad).map(p => ({
            name: p.name,
            position: p.position,
            rating: p.rating,
            gamesPlayed: p.gamesPlayed || 0,
            winRatio: p.winRatio ?? null,
            wins: p.wins || 0,
            losses: p.losses || 0,
            ties: p.ties || 0
          }))
        },
        teamRed: {
          name: teamRed.name,
          totalScore: redAnalysis.totalScore,
          players: this.enrichSquad(teamRed.squad).map(p => ({
            name: p.name,
            position: p.position,
            rating: p.rating,
            gamesPlayed: p.gamesPlayed || 0,
            winRatio: p.winRatio ?? null,
            wins: p.wins || 0,
            losses: p.losses || 0,
            ties: p.ties || 0
          }))
        },
        stats: {
          scoreDiff: Math.abs(whiteAnalysis.totalScore - redAnalysis.totalScore),
          playersInForm: [...whiteAnalysis.playersInForm, ...redAnalysis.playersInForm].map(p => ({
            name: p.name,
            recentWins: p.gameHistory?.slice(-5).filter(g => g.result === 3).length
          })),
          playersInPoorForm: [...whiteAnalysis.playersInPoorForm, ...redAnalysis.playersInPoorForm].map(p => p.name),
          winStreaks: [...whiteAnalysis.playersOnWinStreak, ...redAnalysis.playersOnWinStreak].map(({
            player,
            streak
          }) => ({
            name: player.name,
            streak
          })),
          duos: [whiteDuo, redDuo].filter(Boolean),
          newPlayers: [...whiteAnalysis.newPlayers, ...redAnalysis.newPlayers].map(p => p.name),
          zlatanStars: [...whiteAnalysis.zlatanStars, ...redAnalysis.zlatanStars].map(p => ({
            name: p.name,
            points: p.zlatanPoints
          })),
          ventielStars: [...whiteAnalysis.ventielStars, ...redAnalysis.ventielStars].map(p => ({
            name: p.name,
            points: p.ventielPoints
          })),
          experience: {
            white: whiteAnalysis.totalExperience,
            red: redAnalysis.totalExperience
          },
          historischeWedstrijden: vergelijkbaar.map(v => ({
            datum: v.wedstrijd.datum?.toLocaleDateString('nl-NL'),
            score: Math.round(v.score * 100),
            isFlipped: v.isFlipped,
            uitslag: v.wedstrijd.scoreWit !== null ? `${v.wedstrijd.scoreWit}-${v.wedstrijd.scoreRood}` : null
          }))
        }
      };
    }
    clean() {
      this.numOfPlayers = 0;
      this.playerForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
        players: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray([])
      });
      this.isFirst = true;
      this.isGenerated = false;
    }
    addNewPlayer() {
      let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
        position: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(_enums_positions_enum__WEBPACK_IMPORTED_MODULE_1__.Positions.PLAYER.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
        rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
      });
      this.playerForms.controls['players'].push(form);
      this.numOfPlayers++;
    }
    deletePlayer(index) {
      this.playerForms.controls['players'].removeAt(index);
      this.numOfPlayers--;
      if (this.numOfPlayers < 1) this.isFirst = true;
    }
    getTeams() {
      return Object.keys(this.teams);
    }
    getTeam(teamName) {
      return this.teams[teamName];
    }
    getPlayerByName(playerName) {
      return this.playerForms.controls['players'].value.find(player => {
        return player.name == playerName;
      });
    }
    createPlayerForms() {
      let formArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray([]);
      for (let i = 0; i < this.numOfPlayers; i++) {
        let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
          position: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
          rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
        });
        formArr.push(form);
      }
      this.playerForms.controls['players'] = formArr;
      this.isFirst = false;
    }
    GetAanwezigSpelers() {
      this.loadingSubject.next(true);
      this.errorMessage = null;
      // Eerst alle ratings ophalen (huidige seizoen)
      this.teamGenerateService.getCurrentSeasonPlayerStats().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.loadingSubject.next(false)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: playerStats => {
          this.fullPlayerStats = playerStats;
          this.nextMatchService.getNextMatchInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: matchInfo => {
              if (!matchInfo) {
                this.snackbar.error('Geen aankomende wedstrijd gevonden.');
                return;
              }
              const dateString = matchInfo.parsedDate ? this.attendanceService.formatDate(matchInfo.parsedDate) : matchInfo.date;
              // Gebruik AttendanceService in plaats van direct Google Sheets
              this.attendanceService.getPresentPlayers(dateString).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe({
                next: presentPlayers => {
                  if (presentPlayers.length === 0) {
                    this.snackbar.error('Geen aanwezige spelers gevonden voor de volgende wedstrijd.');
                    return;
                  }
                  let formArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray([]);
                  for (let player of presentPlayers) {
                    const playerStat = playerStats.find(p => p.name === player.name);
                    let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
                      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(player.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
                      position: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(playerStat ? playerStat.position : player.position || _enums_positions_enum__WEBPACK_IMPORTED_MODULE_1__.Positions.PLAYER.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
                      rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(playerStat ? playerStat.rating : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
                    });
                    formArr.push(form);
                  }
                  this.playerForms.controls['players'] = formArr;
                  this.numOfPlayers = presentPlayers.length;
                  this.isFirst = false;
                  this.isGenerated = false;
                  this.errorMessage = null;
                },
                error: err => {
                  this.snackbar.error('Fout bij ophalen aanwezigheid: ' + (err.message || err));
                }
              });
            },
            error: err => {
              this.snackbar.error('Fout bij ophalen wedstrijden: ' + (err.message || err));
            }
          });
        },
        error: err => {
          this.snackbar.error('Fout bij ophalen spelersstatistieken: ' + (err.message || err));
        }
      });
    }
    GetAlleActieveSpelers() {
      this.loadingSubject.next(true);
      this.errorMessage = null;
      // Get statistics data to merge with player data (huidige seizoen)
      this.teamGenerateService.getCurrentSeasonPlayerStats().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.loadingSubject.next(false)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: players => {
          this.fullPlayerStats = players;
          // Filter alleen actieve spelers (statistics already include actief status from PlayerService)
          this.activePlayersList = players.filter(p => p.actief);
          if (this.activePlayersList.length > 0) {
            this.GenerateFormFields();
          }
        },
        error: error => {
          this.snackbar.error(error.message || 'Fout bij ophalen spelers.');
        }
      });
    }
    GenerateFormFields() {
      this.numOfPlayers = this.activePlayersList.length;
      let formArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray([]);
      for (let player of this.activePlayersList) {
        const playerName = player.name || player.player || '';
        // Normaliseer positie zodat deze overeenkomt met de enum waarden
        let playerPosition = player.position || null;
        if (playerPosition) {
          // Zoek een match in Positions enum (case-insensitive)
          const match = this.positions.find(pos => pos.toLowerCase() === playerPosition.toLowerCase());
          playerPosition = match || playerPosition;
        }
        let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(playerName, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
          position: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(playerPosition, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
          rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(player.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
        });
        formArr.push(form);
      }
      this.playerForms.controls['players'] = formArr;
      this.isFirst = false;
    }
    saveTeamsToSheet() {
      if (!this.nextMatchInfo || !this.teams.teamWhite || !this.teams.teamRed) {
        this.snackbar.error('Kan teams niet opslaan: ontbrekende gegevens.');
        return;
      }
      // Prevent double-click/double-save
      if (this.isSavingTeams) {
        console.log('⚠️ Save already in progress, ignoring duplicate call');
        return;
      }
      this.isSavingTeams = true;
      this.loadingSubject.next(true);
      this.errorMessage = null;
      // Save to Wedstrijden sheet — id-arrays aanleveren aan WedstrijdenService.
      const teamWhitePlayerIds = this.teams.teamWhite.squad.map(p => p.id).filter(id => typeof id === 'number');
      const teamRedPlayerIds = this.teams.teamRed.squad.map(p => p.id).filter(id => typeof id === 'number');
      // Extra validatie: controleer seizoen en wedstrijdnummer
      const seizoen = this.nextMatchInfo.seizoen;
      const matchNumber = this.nextMatchInfo.matchNumber;
      console.log(`💾 Teams opslaan - Seizoen: ${seizoen || 'onbekend'}, Wedstrijd: ${matchNumber}`);
      // Match-id opzoeken voor de updateTeams-aanroep
      const matchId = this.nextMatchInfo?.wedstrijd?.id;
      if (!matchId) {
        console.error('❌ Geen match-id beschikbaar voor team-update');
        this.isSavingTeams = false;
        this.loadingSubject.next(false);
        this.snackbar.error('Fout: kon wedstrijd niet identificeren.');
        return;
      }
      // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
      // gebruiker wegnavigeert voor de response binnen is.
      this.wedstrijdenService.updateTeams(matchId, teamWhitePlayerIds, teamRedPlayerIds, 'Handmatig', this.algorithmExplanation || undefined).subscribe({
        next: () => {
          console.log(`✅ Teams succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
          this.isTeamsSaved = true;
          this.isSavingTeams = false;
          this.loadingSubject.next(false);
          this.snackbar.success('Teams opgeslagen!');
          this.sendPushNotificationToAll('Opstelling bekend ⚽', 'Bekijk de teams voor de volgende wedstrijd.', window.location.origin + '/opstelling');
        },
        error: err => {
          console.error(`❌ Fout bij opslaan teams voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, err);
          this.isSavingTeams = false;
          this.loadingSubject.next(false);
          this.snackbar.error('Fout bij opslaan teams: ' + (err.message || err));
        }
      });
    }
    onPlayerDrop(event, targetTeamKey) {
      const sourceTeamKey = this.getTeams().find(teamKey => this.getTeam(teamKey).squad === event.previousContainer.data);
      const targetTeam = this.getTeam(targetTeamKey);
      const sourceTeam = this.getTeam(sourceTeamKey);
      if (event.previousContainer === event.container) {
        // Zelfde team, sorteren
        const moved = targetTeam.squad.splice(event.previousIndex, 1)[0];
        targetTeam.squad.splice(event.currentIndex, 0, moved);
      } else {
        // Tussen teams verplaatsen
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
      // Herbereken alle scores (sumOfRatings, totalScore, chemistryScore)
      this.teamGenerateService.recalculateTeamScores(targetTeam);
      if (sourceTeamKey && sourceTeamKey !== targetTeamKey) {
        this.teamGenerateService.recalculateTeamScores(sourceTeam);
      }
    }
    get connectedDropLists() {
      return this.getTeams().map(t => t + '-drop');
    }
    /**
     * Stuur een push notificatie naar alle spelers met toestemming (via backend)
     */
    sendPushNotificationToAll(title, body, url) {
      var _this2 = this;
      fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebaseBaseUrl}/sendPushToAll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
          url
        })
      }).then(/*#__PURE__*/function () {
        var _ref = (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (!res.ok) {
            const text = yield res.text();
            // Backend stuurt tegenwoordig een JSON-body met een `message`-veld;
            // ouder formaat was plain tekst. Beide afhandelen.
            let message = text;
            try {
              const parsed = JSON.parse(text);
              if (parsed && typeof parsed.message === 'string') message = parsed.message;
            } catch {
              // geen JSON — houd tekst zoals hij is
            }
            throw new Error(message || `HTTP ${res.status}`);
          }
          _this2.snackbar.success('Push notificatie verstuurd!');
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(err => {
        const message = err instanceof Error ? err.message : String(err);
        this.snackbar.error('Fout bij versturen push notificatie: ' + message);
      });
    }
    trackByTeamKey(index, key) {
      return key;
    }
    static {
      this.ɵfac = function TeamGeneratorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TeamGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_team_generate_service__WEBPACK_IMPORTED_MODULE_6__.TeamGenerateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_next_match_service__WEBPACK_IMPORTED_MODULE_7__.NextMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_8__.WedstrijdenService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_9__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_10__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: TeamGeneratorComponent,
        selectors: [["app-team-generator"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 7,
        consts: [[1, "error-banner", "mat-elevation-z2"], ["message", "Laden van spelers en teams..."], ["mat-icon-button", "", 3, "click"], [3, "nextMatchInfo"], [1, "pre-generate-player-forms"], [3, "submit"], ["mat-fab", "", "extended", "", "type", "button", 1, "futsal-doorn-btn", 3, "click"], ["subscriptSizing", "dynamic", "appearance", "outline"], ["matInput", "", "type", "number", "name", "something", 3, "ngModelChange", "ngModel"], ["mat-fab", "", "extended", "", "color", "accent", "type", "submit", 3, "disabled"], [1, "add-new-form-container"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [3, "formGroup"], ["formArrayName", "players"], [1, "button-container"], ["mat-fab", "", "extended", "", "id", "generate", 3, "click", "disabled"], ["mat-fab", "", "extended", "", 3, "click", "disabled"], [1, "generation-spinner-container"], ["subscriptSizing", "dynamic"], ["formControlName", "name", "matInput", "", "type", "text"], ["formControlName", "position"], [3, "value"], ["formControlName", "rating"], [1, "dividers"], ["diameter", "50"], [1, "solid"], [1, "algorithm-explanation-card"], [1, "results"], ["class", "each-result", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "save-teams-container"], ["mat-fab", "", "title", "Teams opslaan", 3, "click", "disabled"], ["diameter", "18", 1, "inline-spinner"], [1, "loading-text"], [1, "explanation-content", 3, "innerHTML"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], [1, "each-result"], [1, "team-header"], [1, "team-rating"], [1, "results-details"], ["cdkDropList", "", 1, "team-drop-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo", "id"], ["cdkDrag", "", "class", "player-drag-item", 4, "ngFor", "ngForOf", "ngForTrack"], ["cdkDrag", "", 1, "player-drag-item"], [3, "player", "shirtColor"]],
        template: function TeamGeneratorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, TeamGeneratorComponent_Conditional_0_Template, 8, 1, "div", 0)(1, TeamGeneratorComponent_Conditional_1_Template, 1, 0, "app-loading-state", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, TeamGeneratorComponent_Conditional_3_Template, 2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](ctx.errorMessage ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, ctx.loading$) ? 1 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 5, ctx.loading$) ? 3 : -1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArrayName, _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_2__.NextMatchInfoComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__.LoadingStateComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatFabButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_5__.PlayerCardComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.CdkDrag],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 20px;\n  min-height: 100%;\n}\n\n.pre-generate-player-forms[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n  align-items: flex-start;\n}\n.pre-generate-player-forms[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.pre-generate-player-forms[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 180px;\n  max-width: 300px;\n}\n.pre-generate-player-forms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  margin-bottom: 8px;\n  width: fit-content;\n}\n\n.add-new-form-container[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 10px;\n}\n\n.results[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.team-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n\n.team-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.team-header[_ngcontent-%COMP%]   .team-rating[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.each-result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.results-details[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.each-player[_ngcontent-%COMP%] {\n  width: 600px;\n  min-width: 30%;\n  max-width: 80%;\n  flex-basis: 25px;\n  gap: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.player-card[_ngcontent-%COMP%] {\n  min-width: 300px;\n  padding: 10px;\n  background-color: #fff;\n}\n\n.player-card-image-white[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-white.png');\n  background-size: cover;\n}\n\n.player-card-image-red[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-red.png');\n  background-size: cover;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n\n.error-message[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n\n.futsal-doorn-btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: auto;\n  padding: 0 24px;\n}\n\n.solid[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-top: 2px solid #bbb;\n  width: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 1rem 0;\n}\n\n.generation-spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem 0;\n}\n.generation-spinner-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: 500;\n}\n\n.algorithm-explanation[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 2rem;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.score-explanation[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #616161;\n  margin: 0.5rem 0;\n}\n\napp-next-match-info[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 100%;\n}\n\n.save-teams-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.team-drop-list[_ngcontent-%COMP%] {\n  min-height: 40px;\n  min-width: 320px;\n  background: #f7f7f7;\n  border-radius: 8px;\n  padding: 8px 0 8px 0;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n\n.player-drag-item[_ngcontent-%COMP%] {\n  cursor: grab;\n  margin-bottom: 0;\n}\n\n.team-drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n\n.inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  color: #616161;\n  font-style: italic;\n}\n\n.algorithm-explanation-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 90%;\n  margin: 20px auto;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%] {\n  line-height: 1.6;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  padding: 4px 0;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child:contains(\"\uD83C\uDFC6\") {\n  background: rgba(33, 150, 243, 0.05);\n  padding: 8px;\n  border-radius: 4px;\n  border-left: 3px solid #1976d2;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:contains(\"\uD83D\uDD25\") {\n  background: rgba(255, 87, 34, 0.05);\n  padding: 6px;\n  border-radius: 4px;\n  margin: 4px 0;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:contains(\"\uD83E\uDD45\") {\n  background: rgba(76, 175, 80, 0.05);\n  padding: 6px;\n  border-radius: 4px;\n  margin: 4px 0;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:contains(\"\uD83C\uDF1F\") {\n  background: rgba(255, 193, 7, 0.05);\n  padding: 6px;\n  border-radius: 4px;\n  margin: 4px 0;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:contains(\"\u2B50\") {\n  background: rgba(156, 39, 176, 0.05);\n  padding: 6px;\n  border-radius: 4px;\n  margin: 4px 0;\n  font-weight: 500;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:contains(\"\u2696\uFE0F\") {\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n  border-left: 3px solid #616161;\n  font-weight: 500;\n  margin-top: 8px;\n}\n\n@media (max-width: 768px) {\n  .algorithm-explanation-card[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 16px auto;\n  }\n  .algorithm-explanation-card[_ngcontent-%COMP%]   .explanation-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .dividers[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .results[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .each-result[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    gap: 0px;\n  }\n  form[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .dividers[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .results[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .each-result[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZWFtLWdlbmVyYXRvci90ZWFtLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQUY7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7O0VBRUUsa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JDeEhlO0FEcUhqQjs7QUFNQTtFQUNFLGlEQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtDQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQ3RJZTtFRHVJZixhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJDM0dhO0VENEdiLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFIRjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxnQkMvSGlCO0FENEhyQjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JDcExlO0VEcUxmLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQ3hKYTtFRHlKYixjQ2pNZ0I7RURrTWhCLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQzFPZ0I7RUQyT2hCLGtCQUFBO0FBSkY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUxGO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBTk47QUFRTTtFQUNFLGNDNVBRO0FEc1BoQjtBQVdFO0VBQ0UsZ0JBQUE7QUFUSjtBQVdJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFUTjtBQVdNO0VBQ0UsY0N6UVE7QURnUWhCO0FBYU07RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBWFI7QUFlTTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWJSO0FBaUJNO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZlI7QUFtQk07RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFqQlI7QUFxQk07RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQW5CUjtBQXVCTTtFQUNFLGdCQ2hUUztFRGlUVCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXJCUjs7QUE0QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQXpCRjtFQTJCRTtJQUNFLGVBQUE7RUF6Qko7QUFDRjtBQTZCQSxrQkFBQTtBQUNBO0VBQ0U7SUFDRSxTQUFBO0VBM0JGO0VBOEJBO0lBQ0Usc0JBQUE7RUE1QkY7RUErQkE7SUFDRSxXQUFBO0VBN0JGO0VBZ0NBO0lBQ0Usc0JBQUE7RUE5QkY7RUFpQ0E7SUFDRSxXQUFBO0VBL0JGO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNFLFFBQUE7RUFoQ0Y7RUFtQ0E7SUFDRSxtQkFBQTtFQWpDRjtFQW9DQTtJQUNFLGFBQUE7RUFsQ0Y7RUFxQ0E7SUFDRSxtQkFBQTtFQW5DRjtFQXNDQTtJQUNFLFVBQUE7RUFwQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJlLWdlbmVyYXRlLXBsYXllci1mb3JtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS4ycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC1uZXctZm9ybS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udGVhbS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi50ZWFtLWhlYWRlciBoNCxcclxuLnRlYW0taGVhZGVyIC50ZWFtLXJhdGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZWFjaC1yZXN1bHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1kZXRhaWxzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lYWNoLXBsYXllciB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGZsZXgtYmFzaXM6IDI1cHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheWVyLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmc7XHJcbn1cclxuXHJcbi5wbGF5ZXItY2FyZC1pbWFnZS13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3RiYWxsLXNoaXJ0LXdoaXRlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItY2FyZC1pbWFnZS1yZWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb290YmFsbC1zaGlydC1yZWQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSBtYXQtZXJyb3Ige1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uZnV0c2FsLWRvb3JuLWJ0biB7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbi5zb2xpZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2JiYjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmdlbmVyYXRpb24tc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZ29yaXRobS1leHBsYW5hdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0byAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJnO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1leHBsYW5hdGlvbiB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbmFwcC1uZXh0LW1hdGNoLWluZm8ge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zYXZlLXRlYW1zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnRlYW0tZHJvcC1saXN0IHtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNCk7XHJcbn1cclxuXHJcbi5wbGF5ZXItZHJhZy1pdGVtIHtcclxuICBjdXJzb3I6IGdyYWI7ICBcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGVhbS1kcm9wLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyB7XHJcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxufVxyXG5cclxuLmlubGluZS1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9hZGluZy10ZXh0IHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8vIEFsZ29yaXRobSBleHBsYW5hdGlvbiB1c2luZyBBbmd1bGFyIE1hdGVyaWFsIENhcmRcclxuLmFsZ29yaXRobS1leHBsYW5hdGlvbi1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgXHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBsYW5hdGlvbi1jb250ZW50IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBFbW9qaS1iYXNlZCBzdHlsaW5nIGZvciBkaWZmZXJlbnQgc2VjdGlvbnNcclxuICAgICAgJjpmaXJzdC1jaGlsZDpjb250YWlucyhcIsOwwp/Cj8KGXCIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAxNTAsIDI0MywgMC4wNSk7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGb3JtIGluZGljYXRvcnNcclxuICAgICAgJjpjb250YWlucyhcIsOwwp/ClMKlXCIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgODcsIDM0LCAwLjA1KTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEtlZXBlciBpbmRpY2F0b3JzICBcclxuICAgICAgJjpjb250YWlucyhcIsOwwp/CpcKFXCIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjA1KTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIERldmVsb3BtZW50IGluZGljYXRvcnNcclxuICAgICAgJjpjb250YWlucyhcIsOwwp/CjMKfXCIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjA1KTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEtleSBtYXRjaHVwIGluZGljYXRvcnNcclxuICAgICAgJjpjb250YWlucyhcIsOiwq3CkFwiKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTYsIDM5LCAxNzYsIDAuMDUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGaW5hbCBiYWxhbmNlXHJcbiAgICAgICY6Y29udGFpbnMoXCLDosKawpbDr8K4wo9cIikge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1iZztcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIGV4cGxhbmF0aW9uIGNhcmRcclxuQG1lZGlhIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAuYWxnb3JpdGhtLWV4cGxhbmF0aW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgXHJcbiAgICAuZXhwbGFuYXRpb24tY29udGVudCBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaWEgcXVlcmllcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1tb2JpbGUpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZXN1bHRzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZWFjaC1yZXN1bHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGdhcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmVhY2gtcmVzdWx0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return TeamGeneratorComponent;
})();

/***/ }),

/***/ 19240:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 14876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 50854:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/drag-drop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_DRAG_CONFIG: () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   CDK_DRAG_HANDLE: () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   CDK_DRAG_PARENT: () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   CDK_DRAG_PLACEHOLDER: () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   CDK_DRAG_PREVIEW: () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   CDK_DROP_LIST: () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   CDK_DROP_LIST_GROUP: () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   CdkDrag: () => (/* binding */ CdkDrag),
/* harmony export */   CdkDragHandle: () => (/* binding */ CdkDragHandle),
/* harmony export */   CdkDragPlaceholder: () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   CdkDragPreview: () => (/* binding */ CdkDragPreview),
/* harmony export */   CdkDropList: () => (/* binding */ CdkDropList),
/* harmony export */   CdkDropListGroup: () => (/* binding */ CdkDropListGroup),
/* harmony export */   DragDrop: () => (/* binding */ DragDrop),
/* harmony export */   DragDropModule: () => (/* binding */ DragDropModule),
/* harmony export */   DragDropRegistry: () => (/* binding */ DragDropRegistry),
/* harmony export */   DragRef: () => (/* binding */ DragRef),
/* harmony export */   DropListRef: () => (/* binding */ DropListRef),
/* harmony export */   copyArrayItem: () => (/* binding */ copyArrayItem),
/* harmony export */   moveItemInArray: () => (/* binding */ moveItemInArray),
/* harmony export */   transferArrayItem: () => (/* binding */ transferArrayItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);












/** Creates a deep clone of an element. */
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase();
  // Remove the `id` to avoid having multiple elements with the same id on the page.
  clone.removeAttribute('id');
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }
  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }
  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
// Counter for unique cloned radio button names.
let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */
function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  }
  // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.
  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */
function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');
  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}

/** Gets a mutable version of an element's bounding `DOMRect`. */
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `DOMRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
/**
 * Checks whether some coordinates are within a `DOMRect`.
 * @param clientRect DOMRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `DOMRect`, as well as their bottom/right counterparts.
 * @param domRect `DOMRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a DOMRect.
 * @param rect DOMRect to check against.
 * @param threshold Threshold around the DOMRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/** Keeps track of the scroll position and dimensions of the parents of an element. */
class ParentPositionTracker {
  constructor(_document) {
    this._document = _document;
    /** Cached positions of the scrollable parent elements. */
    this.positions = new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
}

/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement('div');
  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}

/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}

/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all');
  // If there's no transition for `all` or `transform`, we shouldn't do anything.
  if (!property) {
    return 0;
  }
  // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}

/** Inline styles to be set as `!important` while dragging. */
const importantProperties = /*#__PURE__*/new Set([
// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
class PreviewRef {
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    // The null check is necessary for browsers that don't support the popover API.
    // Note that we use a string access for compatibility with Closure.
    if (supportsPopover(this._preview)) {
      this._preview['showPopover']();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    this._preview.addEventListener(name, handler);
  }
  removeEventListener(name, handler) {
    this._preview.removeEventListener(name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      'margin': supportsPopover(preview) ? '0 auto 0 0' : '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': this._zIndex + ''
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('popover', 'manual');
    preview.setAttribute('dir', this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
}
/** Checks whether a specific element supports the popover API. */
function supportsPopover(element) {
  return 'showPopover' in element;
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions$1 = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */
const dragImportantProperties = /*#__PURE__*/new Set([
// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
class DragRef {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach(handle => toggleNativeDragInteractions(handle, value));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */
    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */
    this._hasStartedDragging = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    /** Emits when the item is being moved. */
    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Subscription to pointer movement events. */
    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */
    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being scrolled. */
    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being resized. */
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Cached reference to the boundary element. */
    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */
    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */
    this._handles = [];
    /** Registered handles that are currently disabled. */
    this._disabledHandles = new Set();
    /** Layout direction of the item. */
    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    this.dragStartDelay = 0;
    /**
     * If the parent of the dragged element has a `scale` transform, it can throw off the
     * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
     */
    this.scale = 1;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user starts dragging the item. */
    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has released a drag item, before any animations have started. */
    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user stops dragging an item in the container. */
    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has moved the item into a new container. */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user removes the item its container by dragging it into another container. */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops the item inside a container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */
    this._pointerDown = event => {
      this.beforeStarted.next();
      // Delegate the event based on whether it started from a handle or the element itself.
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging()) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.
          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            if (event.cancelable) {
              event.preventDefault();
            }
            this._hasStartedDragging.set(true);
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.
      if (event.cancelable) {
        event.preventDefault();
      }
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        // If there's a position constraint function, we want the element's top/left to be at the
        // specific position on the page. Use the initial position as a reference if that's the case.
        const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
    this._pointerUp = event => {
      this._endDragSequence(event);
    };
    /** Handles a native `dragstart` event. */
    this._nativeDragStart = event => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        // Usually this isn't necessary since the we prevent the default action in `pointerDown`,
        // but some cases like dragging of links can slip through (see #24403).
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map(handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(handle));
    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.
    const disabledHandles = new Set();
    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        element.addEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = undefined;
      this._rootElement = element;
    }
    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.
    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = undefined;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._getShadowRoot()?.removeEventListener('selectstart', shadowDomSelectStart, activeCapturingEventOptions$1);
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    // Needs to happen before the root element is moved.
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      // In some browsers the global `selectstart` that we maintain in the `DragDropRegistry`
      // doesn't cross the shadow boundary so we have to prevent it at the shadow root (see #28792).
      this._ngZone.runOutsideAngular(() => {
        shadowRoot.addEventListener('selectstart', shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === 'undefined' || ngDevMode ? 'cdk-drag-anchor' : '');
      // Insert an anchor node so that we can restore the element's position in the DOM.
      parent.insertBefore(anchor, element);
      // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.
      this._initialTransform = element.style.transform || '';
      // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1000);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      }); // Emit before notifying the container.
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = undefined;
    }
    // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeTouchstartFromScreenReader)(event) : (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeMousedownFromScreenReader)(event);
    // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.
    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    }
    // Abort if the user is already dragging or is using a mouse button other than the primary one.
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = undefined;
    // Re-enter the NgZone since we bound `document` events on the outside.
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        // Notify the new container that the item has entered.
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
        // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    // Dragging may have been interrupted as a result of the events above.
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    // Apply the class that adds a transition to the preview.
    this._preview.addClass('cdk-drag-animating');
    // Move the preview to the placeholder position.
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          if (!event || this._preview && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === this._preview.element && event.propertyName === 'transform') {
            this._preview?.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    // Stop pointer events on the preview so the user can't
    // interact with it while the preview is animating.
    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ?
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      // If not using a custom constrain we need to account for the pickup position in the element
      // otherwise we do not need to do this, as it has already been accounted for
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    // Amount of pixels the user has dragged since the last time the direction changed.
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    }
    // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.
    const initialTransform = this._previewTemplate?.template ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    // Note: don't use `_clientRectAtStart` here, because we want the latest position.
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
      // DOMRect dimensions are based on the scroll position of the page and its parent
      // node so we have to update the cached boundary DOMRect if the user has scrolled.
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';
    if (previewContainer === 'parent') {
      return initialParent;
    }
    if (previewContainer === 'global') {
      const documentRef = this._document;
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    // Cache the preview element rect if we haven't cached it already or if
    // we cached it too early before the element dimensions were computed.
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
}
/** Clamps a value between a minimum and a maximum. */
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/** Callback invoked for `selectstart` events inside the shadow DOM. */
function shadowDomSelectStart(event) {
  event.preventDefault();
}

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}

/**
 * Strategy that only supports sorting along a single axis.
 * Items are reordered using CSS transforms which allows for sorting to be animated.
 * @docs-private
 */
class SingleAxisSortStrategy {
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
    /** Cache of the dimensions of all the items inside the container. */
    this._itemPositions = [];
    /** Direction in which the list is oriented. */
    this.orientation = 'vertical';
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occurred and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    // How many pixels the item's placeholder should be offset.
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    // How many pixels all the other items should be offset.
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.
    const oldOrder = siblings.slice();
    // Shuffle the array in place.
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      // Update the offset to reflect the new position.
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.
      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    // Note that it's important that we do this after the client rects have been adjusted.
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ?
    // We use the coordinates of where the item entered the drop
    // zone to figure out at which index it should be inserted.
    this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    // If we didn't find a new position reference, it means that either the item didn't start off
    // in this container, or that the item requested to be inserted at the end of the list.
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    // The transform needs to be cleared so it doesn't throw off the measurements.
    placeholder.style.transform = '';
    // Note that usually `start` is called together with `enter` when an item goes into a new
    // container. This will cache item positions, but we need to refresh them since the amount
    // of items has changed.
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    // TODO(crisbeto): may have to wait for the animations to finish.
    this._activeDraggables?.forEach(item => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find(p => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.
    const items = this.orientation === 'horizontal' && this.direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex(currentItem => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    // Since we know the amount that the user has scrolled we can shift all of the
    // client rectangles ourselves. This is cheaper than re-measuring everything and
    // we can avoid inconsistent behavior where we might be measuring the element before
    // its position has changed.
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    // We need two loops for this, because we want all of the cached
    // positions to be up-to-date before we re-sort the item.
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    // Account for differences in the item width/height.
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom';
      // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === 'horizontal';
    // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      // Skip the item itself.
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ?
      // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
}

/**
 * Strategy that only supports sorting on a list that might wrap.
 * Items are reordered by moving their DOM nodes around.
 * @docs-private
 */
class MixedSortStrategy {
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occurred and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */
    this._previousSwap = {
      drag: null,
      deltaX: 0,
      deltaY: 0,
      overlaps: false
    };
    /**
     * Keeps track of the relationship between a node and its next sibling. This information
     * is used to restore the DOM to the order it was in before dragging started.
     */
    this._relatedNodes = [];
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    // Prevent too many swaps over the same item.
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    // Note: it's tempting to save the entire `pointerDelta` object here, however that'll
    // break this functionality, because the same object is passed for all `sort` calls.
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    // In some cases (e.g. when the container has padding) we might not be able to figure
    // out which item to insert the dragged item next to, because the pointer didn't overlap
    // with anything. In that case we find the item that's closest to the pointer.
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    // Moving elements around in the DOM can break things like the `@for` loop, because it
    // uses comment nodes to know where to insert elements. To avoid such issues, we restore
    // the DOM nodes in the list to their original order when the list is reset.
    // Note that this could be simpler if we just saved all the nodes, cleared the root
    // and then appended them in the original order. We don't do it, because it can break
    // down depending on when the snapshot was taken. E.g. we may end up snapshotting the
    // placeholder element which is removed after dragging.
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach(item => {
      if (this._dragDropRegistry.isDragging(item)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = undefined;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex(item => {
      const root = item.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    // Resolve the root node lazily to ensure that the drop list is in its final place in the DOM.
    if (!this._rootNode) {
      this._rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    // Find the Euclidean distance (https://en.wikipedia.org/wiki/Euclidean_distance) between each
    // item and the pointer, and return the smallest one. Note that this is a bit flawed in that DOM
    // nodes are rectangles, not points, so we use the top/left coordinates. It should be enough
    // for our purposes.
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
}

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/** Vertical direction in which we can auto-scroll. */
var AutoScrollVerticalDirection = /*#__PURE__*/function (AutoScrollVerticalDirection) {
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["UP"] = 1] = "UP";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["DOWN"] = 2] = "DOWN";
  return AutoScrollVerticalDirection;
}(AutoScrollVerticalDirection || {});
/** Horizontal direction in which we can auto-scroll. */
var AutoScrollHorizontalDirection = /*#__PURE__*/function (AutoScrollHorizontalDirection) {
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["RIGHT"] = 2] = "RIGHT";
  return AutoScrollHorizontalDirection;
}(AutoScrollHorizontalDirection || {});
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */
    this.disabled = false;
    /** Whether sorting items within the list is disabled. */
    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */
    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */
    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate = () => true;
    /** Function that is used to determine whether an item can be sorted into a particular index. */
    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops an item inside the container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits as the user is swapping items while actively dragging. */
    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is started in a list connected to the current one. */
    this.receivingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is stopped from a list connected to the current one. */
    this.receivingStopped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether an item in the list is being dragged. */
    this._isDragging = false;
    /** Draggable items in the container. */
    this._draggables = [];
    /** Drop lists that are connected to the current one. */
    this._siblings = [];
    /** Connected siblings that currently have a dragged item. */
    this._activeSiblings = new Set();
    /** Subscription to the window being scrolled. */
    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */
    this._verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    /** Horizontal direction in which the list is currently scrolling. */
    this._horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    /** Used to signal to the current auto-scroll sequence when to stop. */
    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
    this._cachedShadowRoot = null;
    /** Elements that can be scrolled while the user is dragging. */
    this._scrollableElements = [];
    /** Direction of the list's layout. */
    this._direction = 'ltr';
    /** Starts the interval that'll auto-scroll the element. */
    this._startScrollInterval = () => {
      this._stopScrolling();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_7__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    const coercedElement = this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(element);
    this._document = _document;
    this.withOrientation('vertical').withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    // Note that this usually happens inside `_draggingStarted` as well, but the dimensions
    // can change when the sort strategy moves the item around inside `enter`.
    this._cacheParentPositions();
    // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging());
      // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.
      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === 'mixed') {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this.element);
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error('Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.');
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    // Check whether we should start scrolling any of the parent containers.
    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    // Otherwise check if we can start scrolling the viewport.
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
    // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error('Invalid DOM structure for drop list. All items must be placed directly inside of the element container.');
        }
      }
    }
    // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `DOMRect`.
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach(sibling => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.
    if (!elementFromPoint) {
      return false;
    }
    // The `DOMRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter(item => item.isDragging());
    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param direction Layout direction of the drop list.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === 'rtl') {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        // In RTL `scrollLeft` will be negative when scrolled.
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}

/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Keeps track of the apps currently containing drag items. */
const activeApps = /*#__PURE__*/new Set();
/**
 * Component used to load the drag&drop reset styles.
 * @docs-private
 */
let _ResetsLoader = /*#__PURE__*/(() => {
  class _ResetsLoader {
    static {
      this.ɵfac = function _ResetsLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ResetsLoader)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ResetsLoader,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-drag-resets-container", ""],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function _ResetsLoader_Template(rf, ctx) {},
        styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return _ResetsLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
// TODO(crisbeto): remove generics when making breaking changes.
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
let DragDropRegistry = /*#__PURE__*/(() => {
  class DragDropRegistry {
    constructor(_ngZone, _document) {
      this._ngZone = _ngZone;
      this._appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
      this._environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector);
      /** Registered drop container instances. */
      this._dropInstances = new Set();
      /** Registered drag item instances. */
      this._dragInstances = new Set();
      /** Drag item instances that are currently being dragged. */
      this._activeDragInstances = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
      /** Keeps track of the event listeners that we've bound to the `document`. */
      this._globalListeners = new Map();
      /**
       * Predicate function to check if an item is being dragged.  Moved out into a property,
       * because it'll be called a lot and we don't want to create a new function every time.
       */
      this._draggingPredicate = item => item.isDragging();
      /**
       * Emits the `touchmove` or `mousemove` events that are dispatched
       * while the user is dragging a drag item instance.
       */
      this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Emits the `touchend` or `mouseup` events that are dispatched
       * while the user is dragging a drag item instance.
       */
      this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Emits when the viewport has been scrolled while the user is dragging an item.
       * @deprecated To be turned into a private member. Use the `scrolled` method instead.
       * @breaking-change 13.0.0
       */
      this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Event listener that will prevent the default browser action while the user is dragging.
       * @param event Event whose default action should be prevented.
       */
      this._preventDefaultWhileDragging = event => {
        if (this._activeDragInstances().length > 0) {
          event.preventDefault();
        }
      };
      /** Event listener for `touchmove` that is bound even if no dragging is happening. */
      this._persistentTouchmoveListener = event => {
        if (this._activeDragInstances().length > 0) {
          // Note that we only want to prevent the default action after dragging has actually started.
          // Usually this is the same time at which the item is added to the `_activeDragInstances`,
          // but it could be pushed back if the user has set up a drag delay or threshold.
          if (this._activeDragInstances().some(this._draggingPredicate)) {
            event.preventDefault();
          }
          this.pointerMove.next(event);
        }
      };
      this._document = _document;
    }
    /** Adds a drop container to the registry. */
    registerDropContainer(drop) {
      if (!this._dropInstances.has(drop)) {
        this._dropInstances.add(drop);
      }
    }
    /** Adds a drag item instance to the registry. */
    registerDragItem(drag) {
      this._dragInstances.add(drag);
      // The `touchmove` event gets bound once, ahead of time, because WebKit
      // won't preventDefault on a dynamically-added `touchmove` listener.
      // See https://bugs.webkit.org/show_bug.cgi?id=184250.
      if (this._dragInstances.size === 1) {
        this._ngZone.runOutsideAngular(() => {
          // The event handler has to be explicitly active,
          // because newer browsers make it passive by default.
          this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
        });
      }
    }
    /** Removes a drop container from the registry. */
    removeDropContainer(drop) {
      this._dropInstances.delete(drop);
    }
    /** Removes a drag item instance from the registry. */
    removeDragItem(drag) {
      this._dragInstances.delete(drag);
      this.stopDragging(drag);
      if (this._dragInstances.size === 0) {
        this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    startDragging(drag, event) {
      // Do not process the same drag twice to avoid memory leaks and redundant listeners
      if (this._activeDragInstances().indexOf(drag) > -1) {
        return;
      }
      this._loadResets();
      this._activeDragInstances.update(instances => [...instances, drag]);
      if (this._activeDragInstances().length === 1) {
        const isTouchEvent = event.type.startsWith('touch');
        // We explicitly bind __active__ listeners here, because newer browsers will default to
        // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
        // use `preventDefault` to prevent the page from scrolling while the user is dragging.
        this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
          handler: e => this.pointerUp.next(e),
          options: true
        }).set('scroll', {
          handler: e => this.scroll.next(e),
          // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
          // the document. See https://github.com/angular/components/issues/17144.
          options: true
        })
        // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        .set('selectstart', {
          handler: this._preventDefaultWhileDragging,
          options: activeCapturingEventOptions
        });
        // We don't have to bind a move event for touch drag sequences, because
        // we already have a persistent global one bound from `registerDragItem`.
        if (!isTouchEvent) {
          this._globalListeners.set('mousemove', {
            handler: e => this.pointerMove.next(e),
            options: activeCapturingEventOptions
          });
        }
        this._ngZone.runOutsideAngular(() => {
          this._globalListeners.forEach((config, name) => {
            this._document.addEventListener(name, config.handler, config.options);
          });
        });
      }
    }
    /** Stops dragging a drag item instance. */
    stopDragging(drag) {
      this._activeDragInstances.update(instances => {
        const index = instances.indexOf(drag);
        if (index > -1) {
          instances.splice(index, 1);
          return [...instances];
        }
        return instances;
      });
      if (this._activeDragInstances().length === 0) {
        this._clearGlobalListeners();
      }
    }
    /** Gets whether a drag item instance is currently being dragged. */
    isDragging(drag) {
      return this._activeDragInstances().indexOf(drag) > -1;
    }
    /**
     * Gets a stream that will emit when any element on the page is scrolled while an item is being
     * dragged.
     * @param shadowRoot Optional shadow root that the current dragging sequence started from.
     *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
     *   be used to include an additional top-level listener at the shadow root level.
     */
    scrolled(shadowRoot) {
      const streams = [this.scroll];
      if (shadowRoot && shadowRoot !== this._document) {
        // Note that this is basically the same as `fromEvent` from rxjs, but we do it ourselves,
        // because we want to guarantee that the event is bound outside of the `NgZone`. With
        // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
        streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(observer => {
          return this._ngZone.runOutsideAngular(() => {
            const eventOptions = true;
            const callback = event => {
              if (this._activeDragInstances().length) {
                observer.next(event);
              }
            };
            shadowRoot.addEventListener('scroll', callback, eventOptions);
            return () => {
              shadowRoot.removeEventListener('scroll', callback, eventOptions);
            };
          });
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...streams);
    }
    ngOnDestroy() {
      this._dragInstances.forEach(instance => this.removeDragItem(instance));
      this._dropInstances.forEach(instance => this.removeDropContainer(instance));
      this._clearGlobalListeners();
      this.pointerMove.complete();
      this.pointerUp.complete();
    }
    /** Clears out the global event listeners from the `document`. */
    _clearGlobalListeners() {
      this._globalListeners.forEach((config, name) => {
        this._document.removeEventListener(name, config.handler, config.options);
      });
      this._globalListeners.clear();
    }
    // TODO(crisbeto): abstract this away into something reusable.
    /** Loads the CSS resets needed for the module to work correctly. */
    _loadResets() {
      if (!activeApps.has(this._appRef)) {
        activeApps.add(this._appRef);
        const componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createComponent)(_ResetsLoader, {
          environmentInjector: this._environmentInjector
        });
        this._appRef.onDestroy(() => {
          activeApps.delete(this._appRef);
          if (activeApps.size === 0) {
            componentRef.destroy();
          }
        });
      }
    }
    static {
      this.ɵfac = function DragDropRegistry_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DragDropRegistry,
        factory: DragDropRegistry.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return DragDropRegistry;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Default configuration to be used when creating a `DragRef`. */
const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
let DragDrop = /*#__PURE__*/(() => {
  class DragDrop {
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
      this._document = _document;
      this._ngZone = _ngZone;
      this._viewportRuler = _viewportRuler;
      this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    createDrag(element, config = DEFAULT_CONFIG) {
      return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    createDropList(element) {
      return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
    static {
      this.ɵfac = function DragDrop_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DragDropRegistry));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DragDrop,
        factory: DragDrop.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return DragDrop;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
const CDK_DRAG_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_DRAG_PARENT');

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_HANDLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */
let CdkDragHandle = /*#__PURE__*/(() => {
  class CdkDragHandle {
    /** Whether starting to drag through this handle is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._stateChanges.next(this);
    }
    constructor(element, _parentDrag) {
      this.element = element;
      this._parentDrag = _parentDrag;
      /** Emits when the state of the handle has changed. */
      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this._disabled = false;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(element.nativeElement, 'cdkDragHandle');
      }
      _parentDrag?._addHandle(this);
    }
    ngOnDestroy() {
      this._parentDrag?._removeHandle(this);
      this._stateChanges.complete();
    }
    static {
      this.ɵfac = function CdkDragHandle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: [2, "cdkDragHandleDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_HANDLE,
          useExisting: CdkDragHandle
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkDragHandle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
const CDK_DRAG_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_DRAG_CONFIG');
const DRAG_HOST_CLASS = 'cdk-drag';
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDropList');
/** Element that can be moved inside a CdkDropList container. */
let CdkDrag = /*#__PURE__*/(() => {
  class CdkDrag {
    static {
      this._dragInstances = [];
    }
    /** Whether starting to drag this element is disabled. */
    get disabled() {
      return this._disabled || this.dropContainer && this.dropContainer.disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._dragRef.disabled = this._disabled;
    }
    constructor(/** Element that the draggable is attached to. */
    element, /** Droppable container that the draggable is a part of. */
    dropContainer,
    /**
     * @deprecated `_document` parameter no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
      this.element = element;
      this.dropContainer = dropContainer;
      this._ngZone = _ngZone;
      this._viewContainerRef = _viewContainerRef;
      this._dir = _dir;
      this._changeDetectorRef = _changeDetectorRef;
      this._selfHandle = _selfHandle;
      this._parentDrag = _parentDrag;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this._handles = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
      /**
       * If the parent of the dragged element has a `scale` transform, it can throw off the
       * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
       */
      this.scale = 1;
      /** Emits when the user starts dragging the item. */
      this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits when the user has released a drag item, before any animations have started. */
      this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits when the user stops dragging an item in the container. */
      this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits when the user has moved the item into a new container. */
      this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits when the user removes the item its container by dragging it into another container. */
      this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits when the user drops the item inside a container. */
      this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Emits as the user is dragging the item. Use with caution,
       * because this event will fire for every pixel that the user has dragged.
       */
      this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(observer => {
        const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(movedEvent => ({
          source: this,
          pointerPosition: movedEvent.pointerPosition,
          event: movedEvent.event,
          delta: movedEvent.delta,
          distance: movedEvent.distance
        }))).subscribe(observer);
        return () => {
          subscription.unsubscribe();
        };
      });
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
      this._dragRef = dragDrop.createDrag(element, {
        dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
        pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
        zIndex: config?.zIndex
      });
      this._dragRef.data = this;
      // We have to keep track of the drag instances in order to be able to match an element to
      // a drag instance. We can't go through the global registry of `DragRef`, because the root
      // element could be different.
      CdkDrag._dragInstances.push(this);
      if (config) {
        this._assignDefaults(config);
      }
      // Note that usually the container is assigned when the drop list is picks up the item, but in
      // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
      // where there are no items on the first change detection pass, but the items get picked up as
      // soon as the user triggers another pass by dragging. This is a problem, because the item would
      // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
      // is too late since the two modes save different kinds of information. We work around it by
      // assigning the drop container both from here and the list.
      if (dropContainer) {
        this._dragRef._withDropContainer(dropContainer._dropListRef);
        dropContainer.addItem(this);
        // The drop container reads this so we need to sync it here.
        dropContainer._dropListRef.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => {
          this._dragRef.scale = this.scale;
        });
      }
      this._syncInputs(this._dragRef);
      this._handleEvents(this._dragRef);
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement() {
      return this._dragRef.getPlaceholderElement();
    }
    /** Returns the root draggable element. */
    getRootElement() {
      return this._dragRef.getRootElement();
    }
    /** Resets a standalone drag item to its initial position. */
    reset() {
      this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    getFreeDragPosition() {
      return this._dragRef.getFreeDragPosition();
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    setFreeDragPosition(value) {
      this._dragRef.setFreeDragPosition(value);
    }
    ngAfterViewInit() {
      // We need to wait until after render, in order for the reference
      // element to be in the proper place in the DOM. This is mostly relevant
      // for draggable elements inside portals since they get stamped out in
      // their original DOM position, and then they get transferred to the portal.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.afterNextRender)(() => {
        this._updateRootElement();
        this._setupHandlesListener();
        this._dragRef.scale = this.scale;
        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      }, {
        injector: this._injector
      });
    }
    ngOnChanges(changes) {
      const rootSelectorChange = changes['rootElementSelector'];
      const positionChange = changes['freeDragPosition'];
      // We don't have to react to the first change since it's being
      // handled in the `afterNextRender` queued up in the constructor.
      if (rootSelectorChange && !rootSelectorChange.firstChange) {
        this._updateRootElement();
      }
      // Scale affects the free drag position so we need to sync it up here.
      this._dragRef.scale = this.scale;
      // Skip the first change since it's being handled in the `afterNextRender` queued up in the
      // constructor.
      if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }
    ngOnDestroy() {
      if (this.dropContainer) {
        this.dropContainer.removeItem(this);
      }
      const index = CdkDrag._dragInstances.indexOf(this);
      if (index > -1) {
        CdkDrag._dragInstances.splice(index, 1);
      }
      // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.
      this._ngZone.runOutsideAngular(() => {
        this._handles.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
      });
    }
    _addHandle(handle) {
      const handles = this._handles.getValue();
      handles.push(handle);
      this._handles.next(handles);
    }
    _removeHandle(handle) {
      const handles = this._handles.getValue();
      const index = handles.indexOf(handle);
      if (index > -1) {
        handles.splice(index, 1);
        this._handles.next(handles);
      }
    }
    _setPreviewTemplate(preview) {
      this._previewTemplate = preview;
    }
    _resetPreviewTemplate(preview) {
      if (preview === this._previewTemplate) {
        this._previewTemplate = null;
      }
    }
    _setPlaceholderTemplate(placeholder) {
      this._placeholderTemplate = placeholder;
    }
    _resetPlaceholderTemplate(placeholder) {
      if (placeholder === this._placeholderTemplate) {
        this._placeholderTemplate = null;
      }
    }
    /** Syncs the root element with the `DragRef`. */
    _updateRootElement() {
      const element = this.element.nativeElement;
      let rootElement = element;
      if (this.rootElementSelector) {
        rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) :
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector);
      }
      if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        assertElementNode(rootElement, 'cdkDrag');
      }
      this._dragRef.withRootElement(rootElement || element);
    }
    /** Gets the boundary element, based on the `boundaryElement` value. */
    _getBoundaryElement() {
      const boundary = this.boundaryElement;
      if (!boundary) {
        return null;
      }
      if (typeof boundary === 'string') {
        return this.element.nativeElement.closest(boundary);
      }
      return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(boundary);
    }
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    _syncInputs(ref) {
      ref.beforeStarted.subscribe(() => {
        if (!ref.isDragging()) {
          const dir = this._dir;
          const dragStartDelay = this.dragStartDelay;
          const placeholder = this._placeholderTemplate ? {
            template: this._placeholderTemplate.templateRef,
            context: this._placeholderTemplate.data,
            viewContainer: this._viewContainerRef
          } : null;
          const preview = this._previewTemplate ? {
            template: this._previewTemplate.templateRef,
            context: this._previewTemplate.data,
            matchSize: this._previewTemplate.matchSize,
            viewContainer: this._viewContainerRef
          } : null;
          ref.disabled = this.disabled;
          ref.lockAxis = this.lockAxis;
          ref.scale = this.scale;
          ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(dragStartDelay);
          ref.constrainPosition = this.constrainPosition;
          ref.previewClass = this.previewClass;
          ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');
          if (dir) {
            ref.withDirection(dir.value);
          }
        }
      });
      // This only needs to be resolved once.
      ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => {
        // If we managed to resolve a parent through DI, use it.
        if (this._parentDrag) {
          ref.withParent(this._parentDrag._dragRef);
          return;
        }
        // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
        // the item was projected into another item by something like `ngTemplateOutlet`.
        let parent = this.element.nativeElement.parentElement;
        while (parent) {
          if (parent.classList.contains(DRAG_HOST_CLASS)) {
            ref.withParent(CdkDrag._dragInstances.find(drag => {
              return drag.element.nativeElement === parent;
            })?._dragRef || null);
            break;
          }
          parent = parent.parentElement;
        }
      });
    }
    /** Handles the events from the underlying `DragRef`. */
    _handleEvents(ref) {
      ref.started.subscribe(startEvent => {
        this.started.emit({
          source: this,
          event: startEvent.event
        });
        // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.
        this._changeDetectorRef.markForCheck();
      });
      ref.released.subscribe(releaseEvent => {
        this.released.emit({
          source: this,
          event: releaseEvent.event
        });
      });
      ref.ended.subscribe(endEvent => {
        this.ended.emit({
          source: this,
          distance: endEvent.distance,
          dropPoint: endEvent.dropPoint,
          event: endEvent.event
        });
        // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.
        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(enterEvent => {
        this.entered.emit({
          container: enterEvent.container.data,
          item: this,
          currentIndex: enterEvent.currentIndex
        });
      });
      ref.exited.subscribe(exitEvent => {
        this.exited.emit({
          container: exitEvent.container.data,
          item: this
        });
      });
      ref.dropped.subscribe(dropEvent => {
        this.dropped.emit({
          previousIndex: dropEvent.previousIndex,
          currentIndex: dropEvent.currentIndex,
          previousContainer: dropEvent.previousContainer.data,
          container: dropEvent.container.data,
          isPointerOverContainer: dropEvent.isPointerOverContainer,
          item: this,
          distance: dropEvent.distance,
          dropPoint: dropEvent.dropPoint,
          event: dropEvent.event
        });
      });
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
      const {
        lockAxis,
        dragStartDelay,
        constrainPosition,
        previewClass,
        boundaryElement,
        draggingDisabled,
        rootElementSelector,
        previewContainer
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.dragStartDelay = dragStartDelay || 0;
      if (lockAxis) {
        this.lockAxis = lockAxis;
      }
      if (constrainPosition) {
        this.constrainPosition = constrainPosition;
      }
      if (previewClass) {
        this.previewClass = previewClass;
      }
      if (boundaryElement) {
        this.boundaryElement = boundaryElement;
      }
      if (rootElementSelector) {
        this.rootElementSelector = rootElementSelector;
      }
      if (previewContainer) {
        this.previewContainer = previewContainer;
      }
    }
    /** Sets up the listener that syncs the handles with the drag ref. */
    _setupHandlesListener() {
      // Listen for any newly-added handles.
      this._handles.pipe(
      // Sync the new handles with the DragRef.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(handles => {
        const handleElements = handles.map(handle => handle.element);
        // Usually handles are only allowed to be a descendant of the drag element, but if
        // the consumer defined a different drag root, we should allow the drag element
        // itself to be a handle too.
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }),
      // Listen if the state of any of the handles changes.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(handles => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...handles.map(item => item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(item))));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
        // Enabled/disable the handle that changed in the DragRef.
        const dragRef = this._dragRef;
        const handle = handleInstance.element.nativeElement;
        handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
      });
    }
    static {
      this.ɵfac = function CdkDrag_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          data: [0, "cdkDragData", "data"],
          lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
          rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
          boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
          dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
          freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
          disabled: [2, "cdkDragDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
          constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
          previewClass: [0, "cdkDragPreviewClass", "previewClass"],
          previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
          scale: [2, "cdkDragScale", "scale", _angular_core__WEBPACK_IMPORTED_MODULE_1__.numberAttribute]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkDrag;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
let CdkDropListGroup = /*#__PURE__*/(() => {
  class CdkDropListGroup {
    constructor() {
      /** Drop lists registered inside the group. */
      this._items = new Set();
      /** Whether starting a dragging sequence from inside this group is disabled. */
      this.disabled = false;
    }
    ngOnDestroy() {
      this._items.clear();
    }
    static {
      this.ɵfac = function CdkDropListGroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDropListGroup)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: [2, "cdkDropListGroupDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
        },
        exportAs: ["cdkDropListGroup"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CDK_DROP_LIST_GROUP,
          useExisting: CdkDropListGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkDropListGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Counter used to generate unique ids for drop zones. */
let _uniqueIdCounter = 0;
/** Container that wraps a set of draggable items. */
let CdkDropList = /*#__PURE__*/(() => {
  class CdkDropList {
    /** Keeps track of the drop lists that are currently on the page. */
    static {
      this._dropLists = [];
    }
    /** Whether starting a dragging sequence from this container is disabled. */
    get disabled() {
      return this._disabled || !!this._group && this._group.disabled;
    }
    set disabled(value) {
      // Usually we sync the directive and ref state right before dragging starts, in order to have
      // a single point of failure and to avoid having to use setters for everything. `disabled` is
      // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
      // the user in a disabled state, so we also need to sync it as it's being set.
      this._dropListRef.disabled = this._disabled = value;
    }
    constructor(/** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
      this.element = element;
      this._changeDetectorRef = _changeDetectorRef;
      this._scrollDispatcher = _scrollDispatcher;
      this._dir = _dir;
      this._group = _group;
      /** Emits when the list has been destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Other draggable containers that this container is connected to and into which the
       * container's items can be transferred. Can either be references to other drop containers,
       * or their unique IDs.
       */
      this.connectedTo = [];
      /**
       * Unique ID for the drop zone. Can be used as a reference
       * in the `connectedTo` of another `CdkDropList`.
       */
      this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
      /**
       * Function that is used to determine whether an item
       * is allowed to be moved into a drop container.
       */
      this.enterPredicate = () => true;
      /** Functions that is used to determine whether an item can be sorted into a particular index. */
      this.sortPredicate = () => true;
      /** Emits when the user drops an item inside the container. */
      this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Emits when the user has moved a new drag item into this container.
       */
      this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Emits when the user removes an item from the container
       * by dragging it into another container.
       */
      this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /** Emits as the user is swapping items while actively dragging. */
      this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      /**
       * Keeps track of the items that are registered with this container. Historically we used to
       * do this with a `ContentChildren` query, however queries don't handle transplanted views very
       * well which means that we can't handle cases like dragging the headers of a `mat-table`
       * correctly. What we do instead is to have the items register themselves with the container
       * and then we sort them based on their position in the DOM.
       */
      this._unsortedItems = new Set();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(element.nativeElement, 'cdkDropList');
      }
      this._dropListRef = dragDrop.createDropList(element);
      this._dropListRef.data = this;
      if (config) {
        this._assignDefaults(config);
      }
      this._dropListRef.enterPredicate = (drag, drop) => {
        return this.enterPredicate(drag.data, drop.data);
      };
      this._dropListRef.sortPredicate = (index, drag, drop) => {
        return this.sortPredicate(index, drag.data, drop.data);
      };
      this._setupInputSyncSubscription(this._dropListRef);
      this._handleEvents(this._dropListRef);
      CdkDropList._dropLists.push(this);
      if (_group) {
        _group._items.add(this);
      }
    }
    /** Registers an items with the drop list. */
    addItem(item) {
      this._unsortedItems.add(item);
      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Removes an item from the drop list. */
    removeItem(item) {
      this._unsortedItems.delete(item);
      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    getSortedItems() {
      return Array.from(this._unsortedItems).sort((a, b) => {
        const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
        // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        // tslint:disable-next-line:no-bitwise
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
    }
    ngOnDestroy() {
      const index = CdkDropList._dropLists.indexOf(this);
      if (index > -1) {
        CdkDropList._dropLists.splice(index, 1);
      }
      if (this._group) {
        this._group._items.delete(this);
      }
      this._unsortedItems.clear();
      this._dropListRef.dispose();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    _setupInputSyncSubscription(ref) {
      if (this._dir) {
        this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
      }
      ref.beforeStarted.subscribe(() => {
        const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceArray)(this.connectedTo).map(drop => {
          if (typeof drop === 'string') {
            const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
            if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
            }
            return correspondingDropList;
          }
          return drop;
        });
        if (this._group) {
          this._group._items.forEach(drop => {
            if (siblings.indexOf(drop) === -1) {
              siblings.push(drop);
            }
          });
        }
        // Note that we resolve the scrollable parents here so that we delay the resolution
        // as long as possible, ensuring that the element is in its final place in the DOM.
        if (!this._scrollableParentsResolved) {
          const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);
          this._dropListRef.withScrollableParents(scrollableParents);
          // Only do this once since it involves traversing the DOM and the parents
          // shouldn't be able to change without the drop list being destroyed.
          this._scrollableParentsResolved = true;
        }
        if (this.elementContainerSelector) {
          const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
          if (!container && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
          }
          ref.withElementContainer(container);
        }
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.sortingDisabled = this.sortingDisabled;
        ref.autoScrollDisabled = this.autoScrollDisabled;
        ref.autoScrollStep = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(this.autoScrollStep, 2);
        ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
      });
    }
    /** Handles events from the underlying DropListRef. */
    _handleEvents(ref) {
      ref.beforeStarted.subscribe(() => {
        this._syncItemsWithRef();
        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(event => {
        this.entered.emit({
          container: this,
          item: event.item.data,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(event => {
        this.exited.emit({
          container: this,
          item: event.item.data
        });
        this._changeDetectorRef.markForCheck();
      });
      ref.sorted.subscribe(event => {
        this.sorted.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          container: this,
          item: event.item.data
        });
      });
      ref.dropped.subscribe(dropEvent => {
        this.dropped.emit({
          previousIndex: dropEvent.previousIndex,
          currentIndex: dropEvent.currentIndex,
          previousContainer: dropEvent.previousContainer.data,
          container: dropEvent.container.data,
          item: dropEvent.item.data,
          isPointerOverContainer: dropEvent.isPointerOverContainer,
          distance: dropEvent.distance,
          dropPoint: dropEvent.dropPoint,
          event: dropEvent.event
        });
        // Mark for check since all of these events run outside of change
        // detection and we're not guaranteed for something else to have triggered it.
        this._changeDetectorRef.markForCheck();
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
      const {
        lockAxis,
        draggingDisabled,
        sortingDisabled,
        listAutoScrollDisabled,
        listOrientation
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
      this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
      this.orientation = listOrientation || 'vertical';
      if (lockAxis) {
        this.lockAxis = lockAxis;
      }
    }
    /** Syncs up the registered drag items with underlying drop list ref. */
    _syncItemsWithRef() {
      this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
    }
    static {
      this.ɵfac = function CdkDropList_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
          data: [0, "cdkDropListData", "data"],
          orientation: [0, "cdkDropListOrientation", "orientation"],
          id: "id",
          lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
          disabled: [2, "cdkDropListDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
          sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
          enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
          sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
          autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
          autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
          elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: undefined
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkDropList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PREVIEW = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
let CdkDragPreview = /*#__PURE__*/(() => {
  class CdkDragPreview {
    constructor(templateRef) {
      this.templateRef = templateRef;
      this._drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_DRAG_PARENT, {
        optional: true
      });
      /** Whether the preview should preserve the same size as the item that is being dragged. */
      this.matchSize = false;
      this._drag?._setPreviewTemplate(this);
    }
    ngOnDestroy() {
      this._drag?._resetPreviewTemplate(this);
    }
    static {
      this.ɵfac = function CdkDragPreview_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          data: "data",
          matchSize: [2, "matchSize", "matchSize", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PREVIEW,
          useExisting: CdkDragPreview
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkDragPreview;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PLACEHOLDER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
let CdkDragPlaceholder = /*#__PURE__*/(() => {
  class CdkDragPlaceholder {
    constructor(templateRef) {
      this.templateRef = templateRef;
      this._drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_DRAG_PARENT, {
        optional: true
      });
      this._drag?._setPlaceholderTemplate(this);
    }
    ngOnDestroy() {
      this._drag?._resetPlaceholderTemplate(this);
    }
    static {
      this.ɵfac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PLACEHOLDER,
          useExisting: CdkDragPlaceholder
        }])]
      });
    }
  }
  return CdkDragPlaceholder;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
let DragDropModule = /*#__PURE__*/(() => {
  class DragDropModule {
    static {
      this.ɵfac = function DragDropModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DragDropModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DragDropModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
      });
    }
  }
  return DragDropModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=873.js.map