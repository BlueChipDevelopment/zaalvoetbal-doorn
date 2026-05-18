"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[971],{

/***/ 59971:
/*!***********************************************************!*\
  !*** ./src/app/components/kalender/kalender.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KalenderComponent: () => (/* binding */ KalenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/date-utils */ 96098);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 20943);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty-state/empty-state.component */ 11301);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _services_next_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/next-match.service */ 5067);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/attendance.service */ 19425);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/player.service */ 6455);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);









































function KalenderComponent_app_loading_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-state", 4);
  }
}
function KalenderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function KalenderComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function KalenderComponent_mat_card_3_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", player_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", player_r4.name, " ");
  }
}
function KalenderComponent_mat_card_3_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.playerSelectError);
  }
}
function KalenderComponent_mat_card_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Selecteer je naam om je aanwezigheid voor toekomstige wedstrijden door te geven.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function KalenderComponent_mat_card_3_app_empty_state_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-empty-state", 18);
  }
}
function KalenderComponent_mat_card_3_app_empty_state_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-empty-state", 19);
  }
}
function KalenderComponent_mat_card_3_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Laden van aanwezigheid status...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Wedstrijd #", match_r5.matchNumber, "");
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleMatchExpansion(match_r5.formattedDate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_11_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleMatchExpansion(match_r5.formattedDate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "person_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_11_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleMatchExpansion(match_r5.formattedDate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getPresenceCounts(match_r5.formattedDate).aanwezig);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getPresenceCounts(match_r5.formattedDate).afwezig);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((tmp_10_0 = ctx_r1.getAttendanceDetails(match_r5.formattedDate)) == null ? null : tmp_10_0.geenReactie == null ? null : tmp_10_0.geenReactie.length) || 0);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Laden aantallen...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Bijwerken...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Opslaan...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_mat_button_toggle_group_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-button-toggle-group", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_mat_button_toggle_group_16_Template_mat_button_toggle_group_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setAttendance(match_r5.formattedDate, $event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-button-toggle", 52)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Aanwezig ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-button-toggle", 53)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Afwezig ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.getAttendanceStatus(match_r5.formattedDate))("disabled", ctx_r1.isSaving(match_r5.formattedDate));
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_mat_chip_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r8.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_mat_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 63)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 66)(4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_mat_chip_7_span_6_Template, 2, 1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", player_r8.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list", 59)(1, "div", 60)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 61)(6, "mat-chip-set");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_mat_chip_7_Template, 7, 2, "mat-chip", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const details_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Aanwezig (", details_r9.aanwezig.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", details_r9.aanwezig)("ngForTrackBy", ctx_r1.trackByPlayerName);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_mat_chip_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r10.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_mat_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 74)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 66)(4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_mat_chip_7_span_6_Template, 2, 1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", player_r10.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list", 70)(1, "div", 71)(2, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 61)(6, "mat-chip-set");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_mat_chip_7_Template, 7, 2, "mat-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const details_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Afwezig (", details_r9.afwezig.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", details_r9.afwezig)("ngForTrackBy", ctx_r1.trackByPlayerName);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_mat_chip_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r11.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_mat_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 78)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 66)(4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_mat_chip_7_span_6_Template, 2, 1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](player_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", player_r11.position);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list", 75)(1, "div", 76)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "help");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 61)(6, "mat-chip-set");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_mat_chip_7_Template, 7, 2, "mat-chip", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const details_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Geen reactie (", details_r9.geenReactie.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", details_r9.geenReactie)("ngForTrackBy", ctx_r1.trackByPlayerName);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_2_Template, 8, 3, "mat-list", 56)(3, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_3_Template, 8, 3, "mat-list", 57)(4, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_mat_list_4_Template, 8, 3, "mat-list", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const details_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", details_r9.aanwezig.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", details_r9.afwezig.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", details_r9.geenReactie.length > 0);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_ng_container_1_Template, 5, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@slideInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.getAttendanceDetails(match_r5.formattedDate));
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 29)(1, "mat-card-content", 30)(2, "div", 31)(3, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 33)(6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_span_10_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_11_Template, 16, 3, "div", 37)(12, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_12_Template, 4, 0, "div", 37)(13, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_13_Template, 4, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_15_Template, 4, 0, "div", 39)(16, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_mat_button_toggle_group_16_Template, 9, 2, "mat-button-toggle-group", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_div_17_Template, 2, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.formatDateForDisplay(match_r5.parsedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](match_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](match_r5.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", match_r5.matchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingCounts && !ctx_r1.isUpdatingCounts(match_r5.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingCounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingCounts && ctx_r1.isUpdatingCounts(match_r5.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isSaving(match_r5.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isSaving(match_r5.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isMatchExpanded(match_r5.formattedDate));
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_divider_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-divider", 79);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_card_1_Template, 18, 10, "mat-card", 27)(2, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_mat_divider_2_Template, 1, 0, "mat-divider", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const match_r5 = ctx.$implicit;
    const last_r12 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", match_r5.parsedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r12);
  }
}
function KalenderComponent_mat_card_3_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, KalenderComponent_mat_card_3_div_11_div_2_ng_container_1_Template, 3, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.futureMatches)("ngForTrackBy", ctx_r1.trackByMatchDate);
  }
}
function KalenderComponent_mat_card_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, KalenderComponent_mat_card_3_div_11_div_1_Template, 4, 0, "div", 21)(2, KalenderComponent_mat_card_3_div_11_div_2_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingStatus);
  }
}
function KalenderComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 7)(1, "mat-card-content")(2, "mat-form-field", 8)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Selecteer Speler");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function KalenderComponent_mat_card_3_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.selectedPlayer, $event) || (ctx_r1.selectedPlayer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function KalenderComponent_mat_card_3_Template_mat_select_selectionChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPlayerSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, KalenderComponent_mat_card_3_mat_option_6_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, KalenderComponent_mat_card_3_mat_error_7_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, KalenderComponent_mat_card_3_div_8_Template, 3, 0, "div", 12)(9, KalenderComponent_mat_card_3_app_empty_state_9_Template, 1, 0, "app-empty-state", 13)(10, KalenderComponent_mat_card_3_app_empty_state_10_Template, 1, 0, "app-empty-state", 14)(11, KalenderComponent_mat_card_3_div_11_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.playerSelectError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.selectedPlayer && ctx_r1.players.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.players.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedPlayer && ctx_r1.futureMatches.length === 0 && !ctx_r1.isLoadingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedPlayer && ctx_r1.futureMatches.length > 0);
  }
}
let KalenderComponent = /*#__PURE__*/(() => {
  class KalenderComponent {
    // Central loading state - component is ready when initial data is loaded
    get isLoading() {
      return this.isLoadingPlayers || this.isLoadingMatches || this.isLoadingCounts;
    }
    constructor(attendanceService, playerService, nextMatchService, snackbar) {
      this.attendanceService = attendanceService;
      this.playerService = playerService;
      this.nextMatchService = nextMatchService;
      this.snackbar = snackbar;
      this.players = [];
      this.selectedPlayer = null;
      this.futureMatches = [];
      this.playerAttendanceStatus = [];
      this.matchPresenceCounts = [];
      this.matchAttendanceDetails = [];
      this.expandedMatches = {};
      // Store all attendance records for reuse
      this.allAttendanceRecords = [];
      this.isLoadingPlayers = false;
      this.isLoadingMatches = false;
      this.isLoadingStatus = false;
      this.isLoadingCounts = false;
      this.updatingCounts = {};
      this.savingStates = {};
      this.errorMessage = null;
      this.playerSelectError = null;
      this.LAST_PLAYER_KEY = 'lastSelectedPlayer';
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    }
    ngOnInit() {
      this.loadPlayers();
      this.loadFutureMatches();
    }
    loadPlayers() {
      this.isLoadingPlayers = true;
      this.playerService.getPlayers().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoadingPlayers = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: players => {
          this.players = players;
          this.errorMessage = null;
          this.loadLastSelectedPlayer();
        },
        error: err => {
          console.error('Error loading players:', err);
          this.errorMessage = 'Fout bij het laden van spelers.';
        }
      });
    }
    loadFutureMatches() {
      this.isLoadingMatches = true;
      this.nextMatchService.getFutureMatches().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoadingMatches = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: matches => {
          this.futureMatches = matches.map(match => ({
            ...match,
            formattedDate: match.parsedDate ? this.formatDate(match.parsedDate) : ''
          }));
          this.errorMessage = null;
          // Load all attendance data using the attendance service (single cached call)
          this.loadAllAttendanceData();
        },
        error: err => {
          console.error('Error loading future matches:', err);
          this.errorMessage = 'Fout bij het laden van toekomstige wedstrijden.';
        }
      });
    }
    loadLastSelectedPlayer() {
      const lastPlayer = localStorage.getItem(this.LAST_PLAYER_KEY);
      if (lastPlayer && this.players.some(player => player.name === lastPlayer)) {
        this.selectedPlayer = lastPlayer;
        // Player attendance status will be loaded by loadAllAttendanceData() when matches are loaded
      } else {
        this.selectedPlayer = null;
        localStorage.removeItem(this.LAST_PLAYER_KEY);
      }
    }
    onPlayerSelectionChange() {
      this.playerSelectError = null;
      this.playerAttendanceStatus = [];
      if (this.selectedPlayer) {
        localStorage.setItem(this.LAST_PLAYER_KEY, this.selectedPlayer);
        if (this.futureMatches.length > 0) {
          this.loadPlayerAttendanceStatusFromStoredData();
        }
      } else {
        localStorage.removeItem(this.LAST_PLAYER_KEY);
        this.playerSelectError = 'Selecteer eerst een speler.';
      }
    }
    loadAllAttendanceData() {
      if (this.futureMatches.length === 0) {
        this.matchPresenceCounts = [];
        this.matchAttendanceDetails = [];
        return;
      }
      this.isLoadingCounts = true;
      // Get all attendance records once and store them for reuse
      this.attendanceService.getAttendanceRecords({
        futureOnly: false
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoadingCounts = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: allRecords => {
          // Store for reuse
          this.allAttendanceRecords = allRecords;
          // Process match presence counts
          this.processMatchPresenceCounts();
          // Load detailed attendance for all matches
          this.loadMatchAttendanceDetailsFromService();
          // Load player attendance status if a player is selected
          if (this.selectedPlayer) {
            this.loadPlayerAttendanceStatusFromStoredData();
          }
        },
        error: err => {
          console.error('Error loading attendance data:', err);
          this.matchPresenceCounts = [];
          this.snackbar.error('Fout bij ophalen aanwezigheid aantallen.');
        }
      });
    }
    processMatchPresenceCounts() {
      const futureDates = this.futureMatches.map(match => this.formatDate(match.parsedDate));
      this.matchPresenceCounts = futureDates.map(date => {
        const dateRecords = this.allAttendanceRecords.filter(record => record.date === date);
        return {
          date,
          aanwezig: dateRecords.filter(r => r.status === 'Ja').length,
          afwezig: dateRecords.filter(r => r.status === 'Nee').length
        };
      });
    }
    loadPlayerAttendanceStatusFromStoredData() {
      if (!this.selectedPlayer || this.futureMatches.length === 0) {
        this.playerAttendanceStatus = [];
        return;
      }
      const currentPlayer = this.selectedPlayer;
      const playerRecords = this.allAttendanceRecords.filter(record => record.playerName === currentPlayer);
      this.playerAttendanceStatus = this.futureMatches.map(match => {
        const formattedDate = this.formatDate(match.parsedDate);
        const attendanceRecord = playerRecords.find(record => record.date === formattedDate);
        return {
          date: formattedDate,
          status: attendanceRecord?.status || null
        };
      });
    }
    loadMatchAttendanceDetailsFromService() {
      const futureDates = this.futureMatches.map(match => this.formatDate(match.parsedDate));
      const detailRequests = futureDates.map(date => this.attendanceService.getMatchAttendanceDetails(date));
      // Use forkJoin to get all match details in parallel, but from cached data
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(detailRequests).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: allDetails => {
          this.matchAttendanceDetails = allDetails.map(details => ({
            date: details.date,
            aanwezig: details.present.map(p => ({
              name: p.name,
              status: 'Ja',
              position: p.position
            })),
            afwezig: details.absent.map(p => ({
              name: p.name,
              status: 'Nee',
              position: p.position
            })),
            geenReactie: details.noResponse.map(p => ({
              name: p.name,
              position: p.position,
              actief: p.playerData?.actief || true
            }))
          }));
        },
        error: err => {
          console.error('Error loading attendance details:', err);
          this.matchAttendanceDetails = [];
        }
      });
    }
    loadPlayerAttendanceStatus() {
      if (!this.selectedPlayer || this.futureMatches.length === 0) {
        this.playerAttendanceStatus = [];
        return;
      }
      this.isLoadingStatus = true;
      const currentPlayer = this.selectedPlayer;
      // Use attendance service to get player attendance for all future dates
      this.attendanceService.getAttendanceForPlayer(currentPlayer).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoadingStatus = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: attendanceRecords => {
          if (this.selectedPlayer === currentPlayer) {
            this.playerAttendanceStatus = this.futureMatches.map(match => {
              const formattedDate = this.formatDate(match.parsedDate);
              const attendanceRecord = attendanceRecords.find(record => record.date === formattedDate);
              return {
                date: formattedDate,
                status: attendanceRecord?.status || null
              };
            });
          }
        },
        error: err => {
          console.error('Error loading attendance status:', err);
          if (this.selectedPlayer === currentPlayer) {
            this.playerAttendanceStatus = [];
            this.snackbar.error('Fout bij ophalen aanwezigheid status.');
          }
        }
      });
    }
    updateMatchPresenceCount(matchDate) {
      this.updatingCounts[matchDate] = true;
      // Use attendance service to get updated counts for specific match
      this.attendanceService.getMatchAttendanceOverviews({
        date: matchDate
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.updatingCounts[matchDate] = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: overviews => {
          if (overviews.length > 0) {
            const overview = overviews[0];
            // Update only the specific match in the array
            const matchIndex = this.matchPresenceCounts.findIndex(c => c.date === matchDate);
            if (matchIndex >= 0) {
              this.matchPresenceCounts[matchIndex] = {
                date: matchDate,
                aanwezig: overview.presentCount,
                afwezig: overview.absentCount
              };
            } else {
              // Add new entry if it doesn't exist
              this.matchPresenceCounts.push({
                date: matchDate,
                aanwezig: overview.presentCount,
                afwezig: overview.absentCount
              });
            }
          }
        },
        error: err => {
          console.error('Error updating presence count for match:', matchDate, err);
        }
      });
    }
    updateMatchAttendanceDetails(matchDate) {
      this.attendanceService.getMatchAttendanceDetails(matchDate).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: details => {
          // Update only the specific match in the array
          const matchIndex = this.matchAttendanceDetails.findIndex(m => m.date === matchDate);
          const matchDetails = {
            date: matchDate,
            aanwezig: details.present.map(p => ({
              name: p.name,
              status: 'Ja',
              position: p.position
            })),
            afwezig: details.absent.map(p => ({
              name: p.name,
              status: 'Nee',
              position: p.position
            })),
            geenReactie: details.noResponse.map(p => ({
              name: p.name,
              position: p.position,
              actief: p.playerData?.actief || true
            }))
          };
          if (matchIndex >= 0) {
            this.matchAttendanceDetails[matchIndex] = matchDetails;
          } else {
            // Add new entry if it doesn't exist
            this.matchAttendanceDetails.push(matchDetails);
          }
        },
        error: err => {
          console.error('Error updating attendance details for match:', matchDate, err);
        }
      });
    }
    setAttendance(matchDate, uiStatus) {
      if (!this.selectedPlayer || this.savingStates[matchDate]) {
        return;
      }
      // Convert UI values to database values
      const dbStatus = uiStatus === 'aanwezig' ? 'Ja' : 'Nee';
      this.savingStates[matchDate] = true;
      const currentPlayer = this.selectedPlayer;
      // Use attendance service to set attendance
      // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
      this.attendanceService.setAttendance({
        date: matchDate,
        playerName: currentPlayer,
        status: dbStatus
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.savingStates[matchDate] = false)).subscribe({
        next: response => {
          if (this.selectedPlayer === currentPlayer) {
            // Update local status
            const statusIndex = this.playerAttendanceStatus.findIndex(s => s.date === matchDate);
            if (statusIndex >= 0) {
              this.playerAttendanceStatus[statusIndex].status = dbStatus;
            } else {
              this.playerAttendanceStatus.push({
                date: matchDate,
                status: dbStatus
              });
            }
            // Refresh presence counts only for this specific match
            this.updateMatchPresenceCount(matchDate);
            this.updateMatchAttendanceDetails(matchDate);
            this.snackbar.success(`Aanwezigheid (${dbStatus === 'Ja' ? 'Aanwezig' : 'Afwezig'}) voor ${currentPlayer} opgeslagen!`);
          }
        },
        error: err => {
          console.error('Error saving attendance:', err);
          const message = err instanceof Error ? err.message : 'Fout bij opslaan aanwezigheid.';
          this.snackbar.error(message);
        }
      });
    }
    getAttendanceStatus(matchDate) {
      const status = this.playerAttendanceStatus.find(s => s.date === matchDate);
      if (!status || !status.status) return null;
      // Convert database values to UI values
      return status.status === 'Ja' ? 'aanwezig' : 'afwezig';
    }
    getPresenceCounts(matchDate) {
      const counts = this.matchPresenceCounts.find(c => c.date === matchDate);
      const details = this.getAttendanceDetails(matchDate);
      const aanwezig = counts ? counts.aanwezig : 0;
      const afwezig = counts ? counts.afwezig : 0;
      const geenReactie = details ? details.geenReactie.length : 0;
      return {
        aanwezig,
        afwezig,
        geenReactie
      };
    }
    getAttendanceDetails(matchDate) {
      return this.matchAttendanceDetails.find(details => details.date === matchDate) || null;
    }
    toggleMatchExpansion(matchDate) {
      this.expandedMatches[matchDate] = !this.expandedMatches[matchDate];
    }
    isMatchExpanded(matchDate) {
      return this.expandedMatches[matchDate] || false;
    }
    getPlayerInitials(name) {
      return name.split(' ').map(n => n.charAt(0).toUpperCase()).join('').substring(0, 2);
    }
    isUpdatingCounts(matchDate) {
      return this.updatingCounts[matchDate] || false;
    }
    isSaving(matchDate) {
      return this.savingStates[matchDate] || false;
    }
    formatDateForDisplay(date) {
      return (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatDateForDisplay)(date);
    }
    formatDate(date) {
      return (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatDateISO)(date);
    }
    trackByMatchDate(index, match) {
      return match.formattedDate || match.date;
    }
    trackByPlayerName(_index, item) {
      return item.name;
    }
    static {
      this.ɵfac = function KalenderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || KalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_4__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_5__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_next_match_service__WEBPACK_IMPORTED_MODULE_3__.NextMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: KalenderComponent,
        selectors: [["app-kalender"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 3,
        consts: [[1, "kalender-container"], ["message", "Laden van wedstrijden en spelers...", 4, "ngIf"], ["class", "error-banner mat-elevation-z2", 4, "ngIf"], ["class", "kalender-card", 4, "ngIf"], ["message", "Laden van wedstrijden en spelers..."], [1, "error-banner", "mat-elevation-z2"], ["mat-icon-button", "", 3, "click"], [1, "kalender-card"], ["appearance", "fill", "subscriptSizing", "dynamic", 1, "player-select"], ["name", "player", 3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "select-prompt", 4, "ngIf"], ["icon", "group_off", "message", "Geen spelers gevonden.", 4, "ngIf"], ["icon", "event_busy", "message", "Geen toekomstige wedstrijden gepland.", 4, "ngIf"], ["class", "matches-container", 4, "ngIf"], [3, "value"], [1, "select-prompt"], ["icon", "group_off", "message", "Geen spelers gevonden."], ["icon", "event_busy", "message", "Geen toekomstige wedstrijden gepland."], [1, "matches-container"], ["class", "loading-status", 4, "ngIf"], ["class", "matches-cards", 4, "ngIf"], [1, "loading-status"], ["mode", "indeterminate", "diameter", "30"], [1, "matches-cards"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "match-card", 4, "ngIf"], ["class", "card-divider", 4, "ngIf"], [1, "match-card"], [1, "match-content"], [1, "match-info"], [1, "match-date"], [1, "match-details"], [1, "match-time"], [1, "match-location"], ["class", "match-number", 4, "ngIf"], ["class", "presence-counts", 4, "ngIf"], [1, "attendance-controls"], ["class", "saving-indicator", 4, "ngIf"], ["class", "attendance-toggle", 3, "value", "disabled", "change", 4, "ngIf"], ["class", "player-details", 4, "ngIf"], [1, "match-number"], [1, "presence-counts"], ["mat-stroked-button", "", "matTooltip", "Klik om spelers te bekijken", 1, "count-button", "present-count", 3, "click"], ["mat-stroked-button", "", "matTooltip", "Klik om spelers te bekijken", 1, "count-button", "absent-count", 3, "click"], ["mat-stroked-button", "", "matTooltip", "Klik om spelers te bekijken", 1, "count-button", "no-response-count", 3, "click"], ["mode", "indeterminate", "diameter", "20"], [1, "loading-text"], [1, "saving-indicator"], ["mode", "indeterminate", "diameter", "24"], [1, "attendance-toggle", 3, "change", "value", "disabled"], ["value", "aanwezig", 1, "toggle-present"], ["value", "afwezig", 1, "toggle-absent"], [1, "player-details"], [1, "attendance-section"], ["class", "player-list present-list", 4, "ngIf"], ["class", "player-list absent-list", 4, "ngIf"], ["class", "player-list no-response-list", 4, "ngIf"], [1, "player-list", "present-list"], ["matSubheader", "", 1, "present-subheader"], [1, "player-chips"], ["class", "player-chip present-chip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "player-chip", "present-chip"], [1, "chip-content"], [1, "player-avatar"], [1, "player-info"], [1, "player-name"], ["class", "player-position", 4, "ngIf"], [1, "player-position"], [1, "player-list", "absent-list"], ["matSubheader", "", 1, "absent-subheader"], ["color", "warn"], ["class", "player-chip absent-chip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "player-chip", "absent-chip"], [1, "player-list", "no-response-list"], ["matSubheader", "", 1, "no-response-subheader"], ["class", "player-chip no-response-chip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "player-chip", "no-response-chip"], [1, "card-divider"]],
        template: function KalenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, KalenderComponent_app_loading_state_1_Template, 1, 0, "app-loading-state", 1)(2, KalenderComponent_div_2_Template, 8, 1, "div", 2)(3, KalenderComponent_mat_card_3_Template, 12, 7, "mat-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__.LoadingStateComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipSet, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__.EmptyStateComponent],
        styles: ["@charset \"UTF-8\";\n.kalender-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.kalender-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n  color: #333;\n}\n\n.loading-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #666;\n}\n\n.player-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #666;\n  font-style: italic;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 40px;\n  text-align: center;\n  color: #666;\n}\n.info-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 32px;\n  height: 32px;\n}\n.info-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.matches-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.matches-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.match-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease, transform 0.2s ease;\n}\n.match-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.match-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  opacity: 0.3;\n}\n\n.match-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .match-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n  }\n}\n\n.match-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.match-info[_ngcontent-%COMP%]   .match-date[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: #333;\n  text-transform: capitalize;\n}\n.match-info[_ngcontent-%COMP%]   .match-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n  margin-bottom: 8px;\n}\n@media (max-width: 768px) {\n  .match-info[_ngcontent-%COMP%]   .match-details[_ngcontent-%COMP%] {\n    gap: 12px;\n    font-size: 0.75rem;\n    flex-wrap: wrap;\n  }\n}\n.match-info[_ngcontent-%COMP%]   .match-details[_ngcontent-%COMP%]   .match-time[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.match-info[_ngcontent-%COMP%]   .match-details[_ngcontent-%COMP%]   .match-location[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCCD \";\n}\n.match-info[_ngcontent-%COMP%]   .match-details[_ngcontent-%COMP%]   .match-number[_ngcontent-%COMP%] {\n  color: #888;\n  font-style: italic;\n}\n\n.presence-counts[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 0.85em;\n  color: #666;\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 16px !important;\n  padding: 6px 12px;\n  min-width: auto;\n  height: 32px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  transition: all 0.2s ease;\n  border: none !important;\n  cursor: pointer;\n  opacity: 0.8;\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 16px;\n  height: 16px;\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button.present-count[_ngcontent-%COMP%], .presence-counts[_ngcontent-%COMP%]   .count-button.absent-count[_ngcontent-%COMP%], .presence-counts[_ngcontent-%COMP%]   .count-button.no-response-count[_ngcontent-%COMP%] {\n  color: #616161;\n  background-color: transparent;\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button.present-count[_ngcontent-%COMP%]:hover, .presence-counts[_ngcontent-%COMP%]   .count-button.absent-count[_ngcontent-%COMP%]:hover, .presence-counts[_ngcontent-%COMP%]   .count-button.no-response-count[_ngcontent-%COMP%]:hover {\n  background-color: rgba(158, 158, 158, 0.08);\n  box-shadow: 0 2px 8px rgba(158, 158, 158, 0.2);\n}\n.presence-counts[_ngcontent-%COMP%]   .count-button.present-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .presence-counts[_ngcontent-%COMP%]   .count-button.absent-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .presence-counts[_ngcontent-%COMP%]   .count-button.no-response-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.presence-counts[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.8em;\n  color: #999;\n}\n\n.player-details[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);\n  border-top: 1px solid #e0e0e0;\n  padding: 20px;\n  margin-top: 0;\n  overflow: hidden;\n}\n.player-details[_ngcontent-%COMP%]   .attendance-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.player-details[_ngcontent-%COMP%]   .attendance-section[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  opacity: 0.4;\n}\n@media (min-width: 768px) {\n  .player-details[_ngcontent-%COMP%]   .attendance-section[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .player-details[_ngcontent-%COMP%]   .attendance-section[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    margin: 3px 0;\n  }\n}\n.player-details[_ngcontent-%COMP%]   .player-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.mat-mdc-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.player-details[_ngcontent-%COMP%]   .player-list[_ngcontent-%COMP%]   .mdc-list-group__subheader[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.player-details[_ngcontent-%COMP%]   .player-list[_ngcontent-%COMP%]   [matSubheader][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 400;\n  font-size: 0.875rem;\n  margin-bottom: 4px;\n  padding: 2px 0;\n}\n.player-details[_ngcontent-%COMP%]   .player-list[_ngcontent-%COMP%]   [matSubheader][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 20px;\n  height: 20px;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.present-list[_ngcontent-%COMP%]   [matSubheader].present-subheader[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.present-list[_ngcontent-%COMP%]   [matSubheader].present-subheader[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.absent-list[_ngcontent-%COMP%]   [matSubheader].absent-subheader[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.absent-list[_ngcontent-%COMP%]   [matSubheader].absent-subheader[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.player-details[_ngcontent-%COMP%]   .player-list.no-response-list[_ngcontent-%COMP%]   [matSubheader].no-response-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.player-details[_ngcontent-%COMP%]   .player-list.no-response-list[_ngcontent-%COMP%]   [matSubheader].no-response-subheader[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n  margin: 1px;\n  height: auto;\n  min-height: 44px;\n  padding: 6px;\n  border-radius: 12px;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background-image: url(\"/assets/images/football-shirt-white.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  font-weight: 600;\n  font-size: 10px;\n  color: #333;\n  text-shadow: 0 0 3px rgba(255, 255, 255, 0.9);\n  position: relative;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-avatar[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  border-radius: 2px;\n  mix-blend-mode: multiply;\n  opacity: 0.3;\n  z-index: -1;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 1.2;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-info[_ngcontent-%COMP%]   .player-position[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  opacity: 0.7;\n  line-height: 1.2;\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip.present-chip[_ngcontent-%COMP%] {\n  background-color: #e8f5e8;\n  border: 1px solid #2e7d32;\n  color: #1b5e20;\n  box-shadow: 0 2px 4px rgba(46, 125, 50, 0.1);\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip.absent-chip[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  border: 1px solid #d32f2f;\n  color: #b71c1c;\n  box-shadow: 0 2px 4px rgba(211, 47, 47, 0.1);\n}\n.player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip.no-response-chip[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: 1px solid #757575;\n  color: #424242;\n  box-shadow: 0 2px 4px rgba(117, 117, 117, 0.1);\n}\n\n.attendance-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .attendance-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.saving-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #666;\n  font-size: 0.875rem;\n}\n\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-present.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #c8e6c9 !important;\n  color: #2e7d32 !important;\n}\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-present.mat-button-toggle-checked[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-present[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-absent.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #ffcdd2 !important;\n  color: #c62828 !important;\n}\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-absent.mat-button-toggle-checked[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c62828 !important;\n}\n.attendance-toggle[_ngcontent-%COMP%]   .toggle-absent[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.status-indicator[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 20px;\n  height: 20px;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-present[_ngcontent-%COMP%] {\n  background-color: #e8f5e8;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-present[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-absent[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-absent[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-unknown[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.status-indicator[_ngcontent-%COMP%]   .status-icon.status-unknown[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n@media (max-width: 480px) {\n  .kalender-container[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n  .kalender-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .match-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .match-info[_ngcontent-%COMP%]   .match-date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .presence-counts[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 6px;\n    justify-content: space-between;\n  }\n  .presence-counts[_ngcontent-%COMP%]   .count-button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-width: auto;\n    max-width: none;\n  }\n  .player-details[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n    min-height: 40px;\n    font-size: 0.85em;\n  }\n  .player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .player-details[_ngcontent-%COMP%]   .player-chips[_ngcontent-%COMP%]   .mat-mdc-chip-set[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .chip-content[_ngcontent-%COMP%]   .player-avatar[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 9px;\n  }\n  .attendance-toggle[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .attendance-toggle[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .attendance-toggle[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .kalender-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #e0e0e0;\n  }\n  .match-info[_ngcontent-%COMP%]   .match-date[_ngcontent-%COMP%] {\n    color: #e0e0e0;\n  }\n  .match-details[_ngcontent-%COMP%] {\n    color: #b0b0b0;\n  }\n  .info-message[_ngcontent-%COMP%] {\n    color: #b0b0b0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9rYWxlbmRlci9rYWxlbmRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EseUJDTGE7QURLakI7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0NmYTtBRFlqQjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFKRjtBQU1FO0VBQ0UsZUNWWTtFRFdaLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7RUFDQSxlQ3RCYTtBRGlCakI7O0FBU0E7RUFDRSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLHdDQ3REa0I7RUR1RGxCLHFEQUFBO0FBTkY7QUFRRTtFQUNFLDBDQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtBQVBKOztBQVdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFSRjtBQVVFO0VBUEY7SUFRSSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRSxPQUFBO0FBUEY7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsbUJDekVXO0VEMEVYLGdCQ2pFaUI7RURrRWpCLFdDOUdhO0VEK0diLDBCQUFBO0FBUEo7QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkNySGE7RURzSGIsbUJDdEZXO0VEdUZYLGtCQUFBO0FBUko7QUFVSTtFQVJGO0lBU0ksU0FBQTtJQUNBLGtCQzVGUztJRDZGVCxlQUFBO0VBUEo7QUFDRjtBQVNJO0VBQ0UsZ0JDckZlO0FEOEVyQjtBQVdNO0VBQ0UsY0FBQTtBQVRSO0FBYUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFYTjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBYkY7QUFlRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkNuSVc7RURvSVgsZ0JDekhpQjtFRDBIakIsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSx3Q0FBQTtBQWJOO0FBZ0JJO0VBQ0Usd0JBQUE7QUFkTjtBQWlCSTtFQUNFLGVDckpXO0VEc0pYLFdBQUE7RUFDQSxZQUFBO0FBZk47QUFrQkk7RUFHRSxjQUFBO0VBQ0EsNkJBQUE7QUFsQk47QUFvQk07RUFDRSwyQ0FBQTtFQUNBLDhDQUFBO0FBbEJSO0FBcUJNO0VBQ0UsY0FBQTtBQW5CUjtBQXdCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBdEJKOztBQTJCQTtFQUNFLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQXhCSjtBQTBCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBeEJOO0FBMkJJO0VBVkY7SUFXSSxRQUFBO0VBeEJKO0VBMEJJO0lBQ0UsYUFBQTtFQXhCTjtBQUNGO0FBNEJFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUExQko7QUE0Qkk7RUFDRSxVQUFBO0FBMUJOO0FBNkJJO0VBQ0UsV0FBQTtBQTNCTjtBQThCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkNwTmU7RURxTmYsbUJDL05TO0VEZ09ULGtCQUFBO0VBQ0EsY0FBQTtBQTVCTjtBQThCTTtFQUNFLGtCQ2pPTztFRGtPUCxXQUFBO0VBQ0EsWUFBQTtBQTVCUjtBQWlDTTtFQUNFLGNBQUE7QUEvQlI7QUFpQ1E7RUFDRSxjQUFBO0FBL0JWO0FBcUNNO0VBQ0UsY0MxUlM7QUR1UGpCO0FBcUNRO0VBQ0UsY0M3Uk87QUQwUGpCO0FBeUNNO0VBQ0UseUJDaFNTO0FEeVBqQjtBQXlDUTtFQUNFLHlCQ25TTztBRDRQakI7QUE2Q0U7RUFDRSxhQUFBO0FBM0NKO0FBOENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTVDUjtBQThDUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE1Q1Y7QUE4Q1U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkN2Ulc7RUR3UlgsZUFBQTtFQUNBLFdDdFVLO0VEdVVMLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQTVDWjtBQStDWTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE3Q2Q7QUFpRFU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBL0NaO0FBaURZO0VBQ0UsZ0JDclRPO0VEc1RQLGdCQUFBO0FBL0NkO0FBa0RZO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFoRGQ7QUFxRFE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FBbkRWO0FBc0RRO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBQXBEVjtBQXVEUTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7QUFyRFY7O0FBNERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXpERjtBQTJERTtFQUxGO0lBTUksdUJBQUE7RUF4REY7QUFDRjs7QUEyREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQ25YYTtBRDJUZjs7QUE4REk7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBM0ROO0FBNkRNO0VBQ0UseUJBQUE7QUEzRFI7QUErREk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTdETjtBQWtFSTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFoRU47QUFrRU07RUFDRSx5QkFBQTtBQWhFUjtBQW9FSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbEVOOztBQXdFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJFSjtBQXVFSTtFQUNFLGtCQ3BhUztFRHFhVCxXQUFBO0VBQ0EsWUFBQTtBQXJFTjtBQXdFSTtFQUNFLHlCQUFBO0FBdEVOO0FBd0VNO0VBQ0UsY0FBQTtBQXRFUjtBQTBFSTtFQUNFLHlCQUFBO0FBeEVOO0FBMEVNO0VBQ0UsY0FBQTtBQXhFUjtBQTRFSTtFQUNFLHlCQUFBO0FBMUVOO0FBNEVNO0VBQ0UsV0FBQTtBQTFFUjs7QUFpRkE7RUFDRTtJQUNFLFlBQUE7RUE5RUY7RUFrRkU7SUFDRSxrQkMzY1M7RUQyWGI7RUFvRkE7SUFDRSxhQUFBO0VBbEZGO0VBcUZBO0lBQ0UsZUN0ZGE7RURtWWY7RUFzRkE7SUFDRSxtQkFBQTtJQUNBLFFBQUE7SUFDQSw4QkFBQTtFQXBGRjtFQXNGRTtJQUNFLE9BQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBcEZKO0VBd0ZBO0lBQ0UsYUFBQTtFQXRGRjtFQTBGTTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUF4RlI7RUEwRlE7SUFDRSxRQUFBO0VBeEZWO0VBMEZVO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBeEZaO0VBaUdFO0lBQ0Usa0JDamdCUztFRGthYjtFQWlHSTtJQUNFLGFBQUE7RUEvRk47RUFrR0k7SUFDRSxlQUFBO0VBaEdOO0FBQ0Y7QUFzR0E7RUFFSTtJQUNFLGNBQUE7RUFyR0o7RUF5R0E7SUFDRSxjQUFBO0VBdkdGO0VBMEdBO0lBQ0UsY0FBQTtFQXhHRjtFQTJHQTtJQUNFLGNBQUE7RUF6R0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuLmthbGVuZGVyLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5rYWxlbmRlci1jYXJkIHtcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmctc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5wbGF5ZXItc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdC1wcm9tcHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmluZm8tbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY2NjtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtNHhsO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0Y2hlcy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXRjaGVzLWNhcmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYXRjaC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6ICRjYXJkLXNoYWRvdztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1kaXZpZGVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLm1hdGNoLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtdGFibGV0KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0Y2gtaW5mbyB7XHJcbiAgZmxleDogMTtcclxuICBcclxuICAubWF0Y2gtZGF0ZSB7XHJcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRjaC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdGNoLXRpbWUge1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdGNoLWxvY2F0aW9uIHtcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnw7DCn8KTwo0gJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0Y2gtbnVtYmVyIHtcclxuICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmVzZW5jZS1jb3VudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIFxyXG4gIC5jb3VudC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5wcmVzZW50LWNvdW50LFxyXG4gICAgJi5hYnNlbnQtY291bnQsXHJcbiAgICAmLm5vLXJlc3BvbnNlLWNvdW50IHtcclxuICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjA4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUGxheWVyIGRldGFpbHMgc2VjdGlvblxyXG4ucGxheWVyLWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYWZhZmEgMCUsICNmMGYwZjAgMTAwJSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgLmF0dGVuZGFuY2Utc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgXHJcbiAgICBtYXQtZGl2aWRlciB7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGxheWVyLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG4gICAgJi5tYXQtbWRjLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWRjLWxpc3QtZ3JvdXBfX3N1YmhlYWRlciB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbbWF0U3ViaGVhZGVyXSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgICBcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5wcmVzZW50LWxpc3Qge1xyXG4gICAgICBbbWF0U3ViaGVhZGVyXS5wcmVzZW50LXN1YmhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYWJzZW50LWxpc3Qge1xyXG4gICAgICBbbWF0U3ViaGVhZGVyXS5hYnNlbnQtc3ViaGVhZGVyIHtcclxuICAgICAgICBjb2xvcjogJGVycm9yLWRhcms7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICRlcnJvci1kYXJrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLm5vLXJlc3BvbnNlLWxpc3Qge1xyXG4gICAgICBbbWF0U3ViaGVhZGVyXS5uby1yZXNwb25zZS1zdWJoZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBsYXllci1jaGlwcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgXHJcbiAgICAubWF0LW1kYy1jaGlwLXNldCB7XHJcbiAgICAgIC5tYXQtbWRjLWNoaXAge1xyXG4gICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jaGlwLWNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBsYXllci1hdmF0YXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9mb290YmFsbC1zaGlydC13aGl0ZS5wbmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBzdWJ0bGUgY29sb3JlZCB0aW50IGJhc2VkIG9uIHN0YXR1c1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAucGxheWVyLWluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wbGF5ZXItbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBsYXllci1wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5wcmVzZW50LWNoaXAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlODtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZTdkMzI7XHJcbiAgICAgICAgICBjb2xvcjogIzFiNWUyMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDQ2LCAxMjUsIDUwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmFic2VudC1jaGlwIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDMyZjJmO1xyXG4gICAgICAgICAgY29sb3I6ICNiNzFjMWM7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyMTEsIDQ3LCA0NywgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5uby1yZXNwb25zZS1jaGlwIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xyXG4gICAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmF0dGVuZGFuY2UtY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNhdmluZy1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLXRvZ2dsZSB7XHJcbiBcclxuICAudG9nZ2xlLXByZXNlbnQge1xyXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzJlN2QzMiAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMmU3ZDMyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudG9nZ2xlLWFic2VudCB7XHJcbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjYzYyODI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNjNjI4MjggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLWluZGljYXRvciB7XHJcbiAgLnN0YXR1cy1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLXByZXNlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU4O1xyXG4gICAgICBcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMmU3ZDMyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLWFic2VudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNjNjI4Mjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5zdGF0dXMtdW5rbm93biB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1vYmlsZSBvcHRpbWl6YXRpb25zXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyAvLyBjdXN0b20gYnJlYWtwb2ludFxyXG4gIC5rYWxlbmRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAua2FsZW5kZXItY2FyZCB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1hdGNoLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdGNoLWluZm8gLm1hdGNoLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVzZW5jZS1jb3VudHMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdhcDogNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAuY291bnQtYnV0dG9uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGxheWVyLWRldGFpbHMge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIFxyXG4gICAgLnBsYXllci1jaGlwcyB7XHJcbiAgICAgIC5tYXQtbWRjLWNoaXAtc2V0IHtcclxuICAgICAgICAubWF0LW1kYy1jaGlwIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmNoaXAtY29udGVudCB7XHJcbiAgICAgICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnBsYXllci1hdmF0YXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYXR0ZW5kYW5jZS10b2dnbGUge1xyXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICBcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGFyayB0aGVtZSBzdXBwb3J0IChvcHRpb25hbClcclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIC5rYWxlbmRlci1jYXJkIHtcclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXRjaC1pbmZvIC5tYXRjaC1kYXRlIHtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gIH1cclxuICBcclxuICAubWF0Y2gtZGV0YWlscyB7XHJcbiAgICBjb2xvcjogI2IwYjBiMDtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogI2IwYjBiMDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
            height: '0',
            opacity: 0,
            overflow: 'hidden'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('300ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
            height: '*',
            opacity: 1
          }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.animate)('300ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_26__.style)({
            height: '0',
            opacity: 0
          }))])])]
        }
      });
    }
  }
  return KalenderComponent;
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

/***/ }),

/***/ 9180:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_ACCORDION: () => (/* binding */ CDK_ACCORDION),
/* harmony export */   CdkAccordion: () => (/* binding */ CdkAccordion),
/* harmony export */   CdkAccordionItem: () => (/* binding */ CdkAccordionItem),
/* harmony export */   CdkAccordionModule: () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);





/** Used to generate unique ID for each accordion. */
let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
let CdkAccordion = /*#__PURE__*/(() => {
  class CdkAccordion {
    constructor() {
      /** Emits when the state of the accordion changes */
      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Stream that emits true/false when openAll/closeAll is triggered. */
      this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** A readonly id value to use for unique selection coordination. */
      this.id = `cdk-accordion-${nextId$1++}`;
      /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
      this.multi = false;
    }
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    openAll() {
      if (this.multi) {
        this._openCloseAllActions.next(true);
      }
    }
    /** Closes all enabled accordion items. */
    closeAll() {
      this._openCloseAllActions.next(false);
    }
    ngOnChanges(changes) {
      this._stateChanges.next(changes);
    }
    ngOnDestroy() {
      this._stateChanges.complete();
      this._openCloseAllActions.complete();
    }
    static {
      this.ɵfac = function CdkAccordion_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkAccordion)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: [2, "multi", "multi", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        exportAs: ["cdkAccordion"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkAccordion;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Used to generate unique ID for each accordion item. */
let nextId = 0;
/**
 * A basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
let CdkAccordionItem = /*#__PURE__*/(() => {
  class CdkAccordionItem {
    /** Whether the AccordionItem is expanded. */
    get expanded() {
      return this._expanded;
    }
    set expanded(expanded) {
      // Only emit events and update the internal value if the value changes.
      if (this._expanded !== expanded) {
        this._expanded = expanded;
        this.expandedChange.emit(expanded);
        if (expanded) {
          this.opened.emit();
          /**
           * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
           * the name value is the id of the accordion.
           */
          const accordionId = this.accordion ? this.accordion.id : this.id;
          this._expansionDispatcher.notify(this.id, accordionId);
        } else {
          this.closed.emit();
        }
        // Ensures that the animation will run when the value is set outside of an `@Input`.
        // This includes cases like the open, close and toggle methods.
        this._changeDetectorRef.markForCheck();
      }
    }
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
      this.accordion = accordion;
      this._changeDetectorRef = _changeDetectorRef;
      this._expansionDispatcher = _expansionDispatcher;
      /** Subscription to openAll/closeAll events. */
      this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
      /** Event emitted every time the AccordionItem is closed. */
      this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted every time the AccordionItem is opened. */
      this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the AccordionItem is destroyed. */
      this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits whenever the expanded state of the accordion changes.
       * Primarily used to facilitate two-way binding.
       * @docs-private
       */
      this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** The unique AccordionItem id. */
      this.id = `cdk-accordion-child-${nextId++}`;
      this._expanded = false;
      /** Whether the AccordionItem is disabled. */
      this.disabled = false;
      /** Unregister function for _expansionDispatcher. */
      this._removeUniqueSelectionListener = () => {};
      this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
        if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
          this.expanded = false;
        }
      });
      // When an accordion item is hosted in an accordion, subscribe to open/close events.
      if (this.accordion) {
        this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
      }
    }
    /** Emits an event for the accordion item being destroyed. */
    ngOnDestroy() {
      this.opened.complete();
      this.closed.complete();
      this.destroyed.emit();
      this.destroyed.complete();
      this._removeUniqueSelectionListener();
      this._openCloseAllSubscription.unsubscribe();
    }
    /** Toggles the expanded state of the accordion item. */
    toggle() {
      if (!this.disabled) {
        this.expanded = !this.expanded;
      }
    }
    /** Sets the expanded state of the accordion item to false. */
    close() {
      if (!this.disabled) {
        this.expanded = false;
      }
    }
    /** Sets the expanded state of the accordion item to true. */
    open() {
      if (!this.disabled) {
        this.expanded = true;
      }
    }
    _subscribeToOpenCloseAllActions() {
      return this.accordion._openCloseAllActions.subscribe(expanded => {
        // Only change expanded state if item is enabled
        if (!this.disabled) {
          this.expanded = expanded;
        }
      });
    }
    static {
      this.ɵfac = function CdkAccordionItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.UniqueSelectionDispatcher));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: [2, "expanded", "expanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: undefined
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkAccordionItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkAccordionModule = /*#__PURE__*/(() => {
  class CdkAccordionModule {
    static {
      this.ɵfac = function CdkAccordionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkAccordionModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkAccordionModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return CdkAccordionModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 12772:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/chips.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHIP: () => (/* binding */ MAT_CHIP),
/* harmony export */   MAT_CHIPS_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHIPS_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHIP_AVATAR: () => (/* binding */ MAT_CHIP_AVATAR),
/* harmony export */   MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHIP_REMOVE: () => (/* binding */ MAT_CHIP_REMOVE),
/* harmony export */   MAT_CHIP_TRAILING_ICON: () => (/* binding */ MAT_CHIP_TRAILING_ICON),
/* harmony export */   MatChip: () => (/* binding */ MatChip),
/* harmony export */   MatChipAvatar: () => (/* binding */ MatChipAvatar),
/* harmony export */   MatChipEditInput: () => (/* binding */ MatChipEditInput),
/* harmony export */   MatChipGrid: () => (/* binding */ MatChipGrid),
/* harmony export */   MatChipGridChange: () => (/* binding */ MatChipGridChange),
/* harmony export */   MatChipInput: () => (/* binding */ MatChipInput),
/* harmony export */   MatChipListbox: () => (/* binding */ MatChipListbox),
/* harmony export */   MatChipListboxChange: () => (/* binding */ MatChipListboxChange),
/* harmony export */   MatChipOption: () => (/* binding */ MatChipOption),
/* harmony export */   MatChipRemove: () => (/* binding */ MatChipRemove),
/* harmony export */   MatChipRow: () => (/* binding */ MatChipRow),
/* harmony export */   MatChipSelectionChange: () => (/* binding */ MatChipSelectionChange),
/* harmony export */   MatChipSet: () => (/* binding */ MatChipSet),
/* harmony export */   MatChipTrailingIcon: () => (/* binding */ MatChipTrailingIcon),
/* harmony export */   MatChipsModule: () => (/* binding */ MatChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
















/** Injection token to be used to override the default options for the chips module. */
const _c0 = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
const _c1 = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChip_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChip_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChipOption_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function MatChipOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c2 = ".mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:\"\";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:\"\"}";
const _c3 = [[["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
const _c4 = ["mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChipRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
  }
}
function MatChipRow_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatChipRow_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
  }
}
function MatChipRow_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }
}
function MatChipRow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatChipRow_Conditional_4_Conditional_0_Template, 1, 0)(1, MatChipRow_Conditional_4_Conditional_1_Template, 1, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.contentEditInput ? 0 : 1);
  }
}
function MatChipRow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}
function MatChipRow_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c5 = ["*"];
const _c6 = ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}";
const MAT_CHIPS_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-chips-default-options', {
  providedIn: 'root',
  factory: () => ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER]
  })
});
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_AVATAR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_TRAILING_ICON = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipTrailingIcon');
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_REMOVE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipRemove');
/**
 * Injection token used to avoid a circular dependency between the `MatChip` and `MatChipAction`.
 */
const MAT_CHIP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChip');

/**
 * Section within a chip.
 * @docs-private
 */
let MatChipAction = /*#__PURE__*/(() => {
  class MatChipAction {
    /** Whether the action is disabled. */
    get disabled() {
      return this._disabled || this._parentChip.disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    /**
     * Determine the value of the disabled attribute for this chip action.
     */
    _getDisabledAttribute() {
      // When this chip action is disabled and focusing disabled chips is not permitted, return empty
      // string to indicate that disabled attribute should be included.
      return this.disabled && !this._allowFocusWhenDisabled ? '' : null;
    }
    /**
     * Determine the value of the tabindex attribute for this chip action.
     */
    _getTabindex() {
      return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString();
    }
    constructor(_elementRef, _parentChip) {
      this._elementRef = _elementRef;
      this._parentChip = _parentChip;
      /** Whether the action is interactive. */
      this.isInteractive = true;
      /** Whether this is the primary action in the chip. */
      this._isPrimary = true;
      this._disabled = false;
      /** Tab index of the action. */
      this.tabIndex = -1;
      /**
       * Private API to allow focusing this chip when it is disabled.
       */
      this._allowFocusWhenDisabled = false;
      if (_elementRef.nativeElement.nodeName === 'BUTTON') {
        _elementRef.nativeElement.setAttribute('type', 'button');
      }
    }
    focus() {
      this._elementRef.nativeElement.focus();
    }
    _handleClick(event) {
      if (!this.disabled && this.isInteractive && this._isPrimary) {
        event.preventDefault();
        this._parentChip._handlePrimaryActionInteraction();
      }
    }
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.SPACE) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing) {
        event.preventDefault();
        this._parentChip._handlePrimaryActionInteraction();
      }
    }
    static {
      this.ɵfac = function MatChipAction_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipAction)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHIP));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipAction,
        selectors: [["", "matChipAction", ""]],
        hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
        hostVars: 9,
        hostBindings: function MatChipAction_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatChipAction_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChipAction_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabindex())("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip__action--primary", ctx._isPrimary)("mdc-evolution-chip__action--presentational", !ctx.isInteractive)("mdc-evolution-chip__action--trailing", !ctx._isPrimary);
          }
        },
        inputs: {
          isInteractive: "isInteractive",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? -1 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
          _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return MatChipAction;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Avatar image within a chip. */
let MatChipAvatar = /*#__PURE__*/(() => {
  class MatChipAvatar {
    static {
      this.ɵfac = function MatChipAvatar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipAvatar)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_AVATAR,
          useExisting: MatChipAvatar
        }])]
      });
    }
  }
  return MatChipAvatar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Non-interactive trailing icon in a chip. */
let MatChipTrailingIcon = /*#__PURE__*/(() => {
  class MatChipTrailingIcon extends MatChipAction {
    constructor() {
      super(...arguments);
      /**
       * MDC considers all trailing actions as a remove icon,
       * but we support non-interactive trailing icons.
       */
      this.isInteractive = false;
      this._isPrimary = false;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatChipTrailingIcon_BaseFactory;
        return function MatChipTrailingIcon_Factory(__ngFactoryType__) {
          return (ɵMatChipTrailingIcon_BaseFactory || (ɵMatChipTrailingIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipTrailingIcon)))(__ngFactoryType__ || MatChipTrailingIcon);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_TRAILING_ICON,
          useExisting: MatChipTrailingIcon
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatChipTrailingIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive to remove the parent chip when the trailing icon is clicked or
 * when the ENTER key is pressed on it.
 *
 * Recommended for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 * ```
 * <mat-chip>
 *   <mat-icon matChipRemove>cancel</mat-icon>
 * </mat-chip>
 * ```
 */
let MatChipRemove = /*#__PURE__*/(() => {
  class MatChipRemove extends MatChipAction {
    constructor() {
      super(...arguments);
      this._isPrimary = false;
    }
    _handleClick(event) {
      if (!this.disabled) {
        event.stopPropagation();
        event.preventDefault();
        this._parentChip.remove();
      }
    }
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.SPACE) && !this.disabled) {
        event.stopPropagation();
        event.preventDefault();
        this._parentChip.remove();
      }
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatChipRemove_BaseFactory;
        return function MatChipRemove_Factory(__ngFactoryType__) {
          return (ɵMatChipRemove_BaseFactory || (ɵMatChipRemove_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipRemove)))(__ngFactoryType__ || MatChipRemove);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-mdc-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
        hostVars: 1,
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", null);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_REMOVE,
          useExisting: MatChipRemove
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatChipRemove;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let uid = 0;
/**
 * Material design styled Chip base component. Used inside the MatChipSet component.
 *
 * Extended by MatChipOption and MatChipRow for different interaction patterns.
 */
let MatChip = /*#__PURE__*/(() => {
  class MatChip {
    _hasFocus() {
      return this._hasFocusInternal;
    }
    /**
     * The value of the chip. Defaults to the content inside
     * the `mat-mdc-chip-action-label` element.
     */
    get value() {
      return this._value !== undefined ? this._value : this._textElement.textContent.trim();
    }
    set value(value) {
      this._value = value;
    }
    /** Whether the chip is disabled. */
    get disabled() {
      return this._disabled || this._chipListDisabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    /**
     * Reference to the MatRipple instance of the chip.
     * @deprecated Considered an implementation detail. To be removed.
     * @breaking-change 17.0.0
     */
    get ripple() {
      return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
    }
    set ripple(v) {
      this._rippleLoader?.attachRipple(this._elementRef.nativeElement, v);
    }
    constructor(_changeDetectorRef, _elementRef, _ngZone, _focusMonitor, _document, animationMode, _globalRippleOptions) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._focusMonitor = _focusMonitor;
      this._globalRippleOptions = _globalRippleOptions;
      /** Emits when the chip is focused. */
      this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Emits when the chip is blurred. */
      this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Role for the root of the chip. */
      this.role = null;
      /** Whether the chip has focus. */
      this._hasFocusInternal = false;
      /** A unique id for the chip. If none is supplied, it will be auto-generated. */
      this.id = `mat-mdc-chip-${uid++}`;
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaLabel` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA label for the content of the chip. */
      this.ariaLabel = null;
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaDescription` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA description for the content of the chip. */
      this.ariaDescription = null;
      /** Id of a span that contains this chip's aria description. */
      this._ariaDescriptionId = `${this.id}-aria-description`;
      /** Whether the chip list is disabled. */
      this._chipListDisabled = false;
      /**
       * Determines whether or not the chip displays the remove styling and emits (removed) events.
       */
      this.removable = true;
      /**
       * Colors the chip for emphasis as if it were selected.
       */
      this.highlighted = false;
      /** Whether the ripple effect is disabled or not. */
      this.disableRipple = false;
      this._disabled = false;
      /** Emitted when a chip is to be removed. */
      this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emitted when the chip is destroyed. */
      this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** The unstyled chip selector for this component. */
      this.basicChipAttrName = 'mat-basic-chip';
      /**
       * Handles the lazy creation of the MatChip ripple.
       * Used to improve initial load time of large applications.
       */
      this._rippleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleLoader);
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._document = _document;
      this._animationsDisabled = animationMode === 'NoopAnimations';
      this._monitorFocus();
      this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
        className: 'mat-mdc-chip-ripple',
        disabled: this._isRippleDisabled()
      });
    }
    ngOnInit() {
      // This check needs to happen in `ngOnInit` so the overridden value of
      // `basicChipAttrName` coming from base classes can be picked up.
      const element = this._elementRef.nativeElement;
      this._isBasicChip = element.hasAttribute(this.basicChipAttrName) || element.tagName.toLowerCase() === this.basicChipAttrName;
    }
    ngAfterViewInit() {
      this._textElement = this._elementRef.nativeElement.querySelector('.mat-mdc-chip-action-label');
      if (this._pendingFocus) {
        this._pendingFocus = false;
        this.focus();
      }
    }
    ngAfterContentInit() {
      // Since the styling depends on the presence of some
      // actions, we have to mark for check on changes.
      this._actionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    ngDoCheck() {
      this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      this._actionChanges?.unsubscribe();
      this.destroyed.emit({
        chip: this
      });
      this.destroyed.complete();
    }
    /**
     * Allows for programmatic removal of the chip.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove() {
      if (this.removable) {
        this.removed.emit({
          chip: this
        });
      }
    }
    /** Whether or not the ripple should be disabled. */
    _isRippleDisabled() {
      return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !!this._globalRippleOptions?.disabled;
    }
    /** Returns whether the chip has a trailing icon. */
    _hasTrailingIcon() {
      return !!(this.trailingIcon || this.removeIcon);
    }
    /** Handles keyboard events on the chip. */
    _handleKeydown(event) {
      // Ignore backspace events where the user is holding down the key
      // so that we don't accidentally remove too many chips.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE && !event.repeat || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DELETE) {
        event.preventDefault();
        this.remove();
      }
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
      if (!this.disabled) {
        // If `focus` is called before `ngAfterViewInit`, we won't have access to the primary action.
        // This can happen if the consumer tries to focus a chip immediately after it is added.
        // Queue the method to be called again on init.
        if (this.primaryAction) {
          this.primaryAction.focus();
        } else {
          this._pendingFocus = true;
        }
      }
    }
    /** Gets the action that contains a specific target node. */
    _getSourceAction(target) {
      return this._getActions().find(action => {
        const element = action._elementRef.nativeElement;
        return element === target || element.contains(target);
      });
    }
    /** Gets all of the actions within the chip. */
    _getActions() {
      const result = [];
      if (this.primaryAction) {
        result.push(this.primaryAction);
      }
      if (this.removeIcon) {
        result.push(this.removeIcon);
      }
      if (this.trailingIcon) {
        result.push(this.trailingIcon);
      }
      return result;
    }
    /** Handles interactions with the primary action of the chip. */
    _handlePrimaryActionInteraction() {
      // Empty here, but is overwritten in child classes.
    }
    /** Starts the focus monitoring process on the chip. */
    _monitorFocus() {
      this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
        const hasFocus = origin !== null;
        if (hasFocus !== this._hasFocusInternal) {
          this._hasFocusInternal = hasFocus;
          if (hasFocus) {
            this._onFocus.next({
              chip: this
            });
          } else {
            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until after the next render.
            (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => this._ngZone.run(() => this._onBlur.next({
              chip: this
            })), {
              injector: this._injector
            });
          }
        }
      });
    }
    static {
      this.ɵfac = function MatChip_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leadingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allLeadingIcons = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTrailingIcons = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allRemoveIcons = _t);
          }
        },
        viewQuery: function MatChip_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatChipAction, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.primaryAction = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-chip"],
        hostVars: 31,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-label", ctx.ariaLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-basic-chip", ctx._isBasicChip)("mat-mdc-standard-chip", !ctx._isBasicChip)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon())("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          role: "role",
          id: "id",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaDescription: [0, "aria-description", "ariaDescription"],
          value: "value",
          color: "color",
          removable: [2, "removable", "removable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          highlighted: [2, "highlighted", "highlighted", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          removed: "removed",
          destroyed: "destroyed"
        },
        exportAs: ["matChip"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP,
          useExisting: MatChip
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 8,
        vars: 3,
        consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", 3, "isInteractive"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
        template: function MatChip_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1)(2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatChip_Conditional_3_Template, 2, 0, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChip_Conditional_7_Template, 2, 0, "span", 6);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInteractive", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.leadingIcon ? 3 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
          }
        },
        dependencies: [MatChipAction],
        styles: [".mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:\"\";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChip;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Event object emitted by MatChipOption when selected or deselected. */
class MatChipSelectionChange {
  constructor(/** Reference to the chip that emitted the event. */
  source, /** Whether the chip that emitted the event is selected. */
  selected, /** Whether the selection change was a result of a user interaction. */
  isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }
}
/**
 * An extension of the MatChip component that supports chip selection. Used with MatChipListbox.
 *
 * Unlike other chips, the user can focus on disabled chip options inside a MatChipListbox. The
 * user cannot click disabled chips.
 */
let MatChipOption = /*#__PURE__*/(() => {
  class MatChipOption extends MatChip {
    constructor() {
      super(...arguments);
      /** Default chip options. */
      this._defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIPS_DEFAULT_OPTIONS, {
        optional: true
      });
      /** Whether the chip list is selectable. */
      this.chipListSelectable = true;
      /** Whether the chip list is in multi-selection mode. */
      this._chipListMultiple = false;
      /** Whether the chip list hides single-selection indicator. */
      this._chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      this._selectable = true;
      this._selected = false;
      /** The unstyled chip selector for this component. */
      this.basicChipAttrName = 'mat-basic-chip-option';
      /** Emitted when the chip is selected or deselected. */
      this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Whether or not the chip is selectable.
     *
     * When a chip is not selectable, changes to its selected state are always
     * ignored. By default an option chip is selectable, and it becomes
     * non-selectable if its parent chip list is not selectable.
     */
    get selectable() {
      return this._selectable && this.chipListSelectable;
    }
    set selectable(value) {
      this._selectable = value;
      this._changeDetectorRef.markForCheck();
    }
    /** Whether the chip is selected. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      this._setSelectedState(value, false, true);
    }
    /**
     * The ARIA selected applied to the chip. Conforms to WAI ARIA best practices for listbox
     * interaction patterns.
     *
     * From [WAI ARIA Listbox authoring practices guide](
     * https://www.w3.org/WAI/ARIA/apg/patterns/listbox/):
     *  "If any options are selected, each selected option has either aria-selected or aria-checked
     *  set to true. All options that are selectable but not selected have either aria-selected or
     *  aria-checked set to false."
     *
     * Set `aria-selected="false"` on not-selected listbox options that are selectable to fix
     * VoiceOver reading every option as "selected" (#25736).
     */
    get ariaSelected() {
      return this.selectable ? this.selected.toString() : null;
    }
    ngOnInit() {
      super.ngOnInit();
      this.role = 'presentation';
    }
    /** Selects the chip. */
    select() {
      this._setSelectedState(true, false, true);
    }
    /** Deselects the chip. */
    deselect() {
      this._setSelectedState(false, false, true);
    }
    /** Selects this chip and emits userInputSelection event */
    selectViaInteraction() {
      this._setSelectedState(true, true, true);
    }
    /** Toggles the current selected state of this chip. */
    toggleSelected(isUserInput = false) {
      this._setSelectedState(!this.selected, isUserInput, true);
      return this.selected;
    }
    _handlePrimaryActionInteraction() {
      if (!this.disabled) {
        // Interacting with the primary action implies that the chip already has focus, however
        // there's a bug in Safari where focus ends up lingering on the previous chip (see #27544).
        // We work around it by explicitly focusing the primary action of the current chip.
        this.focus();
        if (this.selectable) {
          this.toggleSelected(true);
        }
      }
    }
    _hasLeadingGraphic() {
      if (this.leadingIcon) {
        return true;
      }
      // The checkmark graphic communicates selected state for both single-select and multi-select.
      // Include checkmark in single-select to fix a11y issue where selected state is communicated
      // visually only using color (#25886).
      return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
    }
    _setSelectedState(isSelected, isUserInput, emitEvent) {
      if (isSelected !== this.selected) {
        this._selected = isSelected;
        if (emitEvent) {
          this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this.selected
          });
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatChipOption_BaseFactory;
        return function MatChipOption_Factory(__ngFactoryType__) {
          return (ɵMatChipOption_BaseFactory || (ɵMatChipOption_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipOption)))(__ngFactoryType__ || MatChipOption);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChipOption,
        selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]],
        hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"],
        hostVars: 37,
        hostBindings: function MatChipOption_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-description", null)("role", ctx.role);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--filter", !ctx._isBasicChip)("mdc-evolution-chip--selectable", !ctx._isBasicChip)("mat-mdc-chip-selected", ctx.selected)("mat-mdc-chip-multiple", ctx._chipListMultiple)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--selected", ctx.selected)("mdc-evolution-chip--selecting", !ctx._animationsDisabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-primary-graphic", ctx._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
          }
        },
        inputs: {
          selectable: [2, "selectable", "selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          selected: [2, "selected", "selected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatChip,
          useExisting: MatChipOption
        }, {
          provide: MAT_CHIP,
          useExisting: MatChipOption
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 10,
        vars: 8,
        consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]],
        template: function MatChipOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatChipOption_Conditional_3_Template, 5, 0, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChipOption_Conditional_7_Template, 2, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_allowFocusWhenDisabled", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.ariaSelected)("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasLeadingGraphic() ? 3 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._ariaDescriptionId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ariaDescription);
          }
        },
        dependencies: [MatChipAction],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChipOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * A directive that makes a span editable and exposes functions to modify and retrieve the
 * element's contents.
 */
let MatChipEditInput = /*#__PURE__*/(() => {
  class MatChipEditInput {
    constructor(_elementRef, _document) {
      this._elementRef = _elementRef;
      this._document = _document;
    }
    initialize(initialValue) {
      this.getNativeElement().focus();
      this.setValue(initialValue);
    }
    getNativeElement() {
      return this._elementRef.nativeElement;
    }
    setValue(value) {
      this.getNativeElement().textContent = value;
      this._moveCursorToEndOfInput();
    }
    getValue() {
      return this.getNativeElement().textContent || '';
    }
    _moveCursorToEndOfInput() {
      const range = this._document.createRange();
      range.selectNodeContents(this.getNativeElement());
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    static {
      this.ɵfac = function MatChipEditInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipEditInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipEditInput,
        selectors: [["span", "matChipEditInput", ""]],
        hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"],
        standalone: true
      });
    }
  }
  return MatChipEditInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * An extension of the MatChip component used with MatChipGrid and
 * the matChipInputFor directive.
 */
let MatChipRow = /*#__PURE__*/(() => {
  class MatChipRow extends MatChip {
    constructor(changeDetectorRef, elementRef, ngZone, focusMonitor, _document, animationMode, globalRippleOptions, tabIndex) {
      super(changeDetectorRef, elementRef, ngZone, focusMonitor, _document, animationMode, globalRippleOptions);
      this.basicChipAttrName = 'mat-basic-chip-row';
      /**
       * The editing action has to be triggered in a timeout. While we're waiting on it, a blur
       * event might occur which will interrupt the editing. This flag is used to avoid interruptions
       * while the editing action is being initialized.
       */
      this._editStartPending = false;
      this.editable = false;
      /** Emitted when the chip is edited. */
      this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._isEditing = false;
      this.role = 'row';
      this._onBlur.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed)).subscribe(() => {
        if (this._isEditing && !this._editStartPending) {
          this._onEditFinish();
        }
      });
    }
    _hasTrailingIcon() {
      // The trailing icon is hidden while editing.
      return !this._isEditing && super._hasTrailingIcon();
    }
    /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
    _handleFocus() {
      if (!this._isEditing && !this.disabled) {
        this.focus();
      }
    }
    _handleKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER && !this.disabled) {
        if (this._isEditing) {
          event.preventDefault();
          this._onEditFinish();
        } else if (this.editable) {
          this._startEditing(event);
        }
      } else if (this._isEditing) {
        // Stop the event from reaching the chip set in order to avoid navigating.
        event.stopPropagation();
      } else {
        super._handleKeydown(event);
      }
    }
    _handleDoubleclick(event) {
      if (!this.disabled && this.editable) {
        this._startEditing(event);
      }
    }
    _startEditing(event) {
      if (!this.primaryAction || this.removeIcon && this._getSourceAction(event.target) === this.removeIcon) {
        return;
      }
      // The value depends on the DOM so we need to extract it before we flip the flag.
      const value = this.value;
      this._isEditing = this._editStartPending = true;
      // Defer initializing the input until after it has been added to the DOM.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        this._getEditInput().initialize(value);
        this._editStartPending = false;
      }, {
        injector: this._injector
      });
    }
    _onEditFinish() {
      this._isEditing = this._editStartPending = false;
      this.edited.emit({
        chip: this,
        value: this._getEditInput().getValue()
      });
      // If the edit input is still focused or focus was returned to the body after it was destroyed,
      // return focus to the chip contents.
      if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
        this.primaryAction.focus();
      }
    }
    _isRippleDisabled() {
      return super._isRippleDisabled() || this._isEditing;
    }
    /**
     * Gets the projected chip edit input, or the default input if none is projected in. One of these
     * two values is guaranteed to be defined.
     */
    _getEditInput() {
      return this.contentEditInput || this.defaultEditInput;
    }
    static {
      this.ɵfac = function MatChipRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChipRow,
        selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]],
        contentQueries: function MatChipRow_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipEditInput, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentEditInput = _t.first);
          }
        },
        viewQuery: function MatChipRow_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatChipEditInput, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultEditInput = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"],
        hostVars: 27,
        hostBindings: function MatChipRow_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipRow_focus_HostBindingHandler($event) {
              return ctx._handleFocus($event);
            })("dblclick", function MatChipRow_dblclick_HostBindingHandler($event) {
              return ctx._handleDoubleclick($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", ctx.role);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-editing", ctx._isEditing)("mat-mdc-chip-editable", ctx.editable)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
          }
        },
        inputs: {
          editable: "editable"
        },
        outputs: {
          edited: "edited"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatChip,
          useExisting: MatChipRow
        }, {
          provide: MAT_CHIP,
          useExisting: MatChipRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c4,
        decls: 10,
        vars: 9,
        consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], ["matChipEditInput", ""]],
        template: function MatChipRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatChipRow_Conditional_0_Template, 1, 0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatChipRow_Conditional_2_Template, 2, 0, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatChipRow_Conditional_4_Template, 2, 1)(5, MatChipRow_Conditional_5_Template, 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatChipRow_Conditional_7_Template, 2, 0, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._isEditing ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.leadingIcon ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isEditing ? 4 : 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasTrailingIcon() ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._ariaDescriptionId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ariaDescription);
          }
        },
        dependencies: [MatChipAction, MatChipEditInput],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChipRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Basic container component for the MatChip component.
 *
 * Extended by MatChipListbox and MatChipGrid for different interaction patterns.
 */
let MatChipSet = /*#__PURE__*/(() => {
  class MatChipSet {
    /** Combined stream of all of the child chips' focus events. */
    get chipFocusChanges() {
      return this._getChipStream(chip => chip._onFocus);
    }
    /** Combined stream of all of the child chips' destroy events. */
    get chipDestroyedChanges() {
      return this._getChipStream(chip => chip.destroyed);
    }
    /** Combined stream of all of the child chips' remove events. */
    get chipRemovedChanges() {
      return this._getChipStream(chip => chip.removed);
    }
    /** Whether the chip set is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._syncChipsState();
    }
    /** Whether the chip list contains chips or not. */
    get empty() {
      return !this._chips || this._chips.length === 0;
    }
    /** The ARIA role applied to the chip set. */
    get role() {
      if (this._explicitRole) {
        return this._explicitRole;
      }
      return this.empty ? null : this._defaultRole;
    }
    set role(value) {
      this._explicitRole = value;
    }
    /** Whether any of the chips inside of this chip-set has focus. */
    get focused() {
      return this._hasFocusedChip();
    }
    constructor(_elementRef, _changeDetectorRef, _dir) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._dir = _dir;
      /** Index of the last destroyed chip that had focus. */
      this._lastDestroyedFocusedChipIndex = null;
      /** Subject that emits when the component has been destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Role to use if it hasn't been overwritten by the user. */
      this._defaultRole = 'presentation';
      this._disabled = false;
      /** Tabindex of the chip set. */
      this.tabIndex = 0;
      this._explicitRole = null;
      /** Flat list of all the actions contained within the chips. */
      this._chipActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    }
    ngAfterViewInit() {
      this._setUpFocusManagement();
      this._trackChipSetChanges();
      this._trackDestroyedFocusedChip();
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._chipActions.destroy();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
      return this._chips && this._chips.some(chip => chip._hasFocus());
    }
    /** Syncs the chip-set's state with the individual chips. */
    _syncChipsState() {
      this._chips?.forEach(chip => {
        chip._chipListDisabled = this._disabled;
        chip._changeDetectorRef.markForCheck();
      });
    }
    /** Dummy method for subclasses to override. Base chip set cannot be focused. */
    focus() {}
    /** Handles keyboard events on the chip set. */
    _handleKeydown(event) {
      if (this._originatesFromChip(event)) {
        this._keyManager.onKeydown(event);
      }
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
      return index >= 0 && index < this._chips.length;
    }
    /**
     * Removes the `tabindex` from the chip set and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the set from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
      const previous = this._elementRef.nativeElement.tabIndex;
      if (previous !== -1) {
        // Set the tabindex directly on the element, instead of going through
        // the data binding, because we aren't guaranteed that change detection
        // will run quickly enough to allow focus to escape.
        this._elementRef.nativeElement.tabIndex = -1;
        // Note that this needs to be a `setTimeout`, because a `Promise.resolve`
        // doesn't allow enough time for the focus to escape.
        setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
      }
    }
    /**
     * Gets a stream of events from all the chips within the set.
     * The stream will automatically incorporate any newly-added chips.
     */
    _getChipStream(mappingFunction) {
      return this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(...this._chips.map(mappingFunction))));
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
      let currentElement = event.target;
      while (currentElement && currentElement !== this._elementRef.nativeElement) {
        if (currentElement.classList.contains('mat-mdc-chip')) {
          return true;
        }
        currentElement = currentElement.parentElement;
      }
      return false;
    }
    /** Sets up the chip set's focus management logic. */
    _setUpFocusManagement() {
      // Create a flat `QueryList` containing the actions of all of the chips.
      // This allows us to navigate both within the chip and move to the next/previous
      // one using the existing `ListKeyManager`.
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(this._chips)).subscribe(chips => {
        const actions = [];
        chips.forEach(chip => chip._getActions().forEach(action => actions.push(action)));
        this._chipActions.reset(actions);
        this._chipActions.notifyOnChanges();
      });
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr').withHomeAndEnd().skipPredicate(action => this._skipPredicate(action));
      // Keep the manager active index in sync so that navigation picks
      // up from the current chip if the user clicks into the list directly.
      this.chipFocusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(({
        chip
      }) => {
        const action = chip._getSourceAction(document.activeElement);
        if (action) {
          this._keyManager.updateActiveItem(action);
        }
      });
      this._dir?.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
    }
    /**
     * Determines if key manager should avoid putting a given chip action in the tab index. Skip
     * non-interactive and disabled actions since the user can't do anything with them.
     */
    _skipPredicate(action) {
      // Skip chips that the user cannot interact with. `mat-chip-set` does not permit focusing disabled
      // chips.
      return !action.isInteractive || action.disabled;
    }
    /** Listens to changes in the chip set and syncs up the state of the individual chips. */
    _trackChipSetChanges() {
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this.disabled) {
          // Since this happens after the content has been
          // checked, we need to defer it to the next tick.
          Promise.resolve().then(() => this._syncChipsState());
        }
        this._redirectDestroyedChipFocus();
      });
    }
    /** Starts tracking the destroyed chips in order to capture the focused one. */
    _trackDestroyedFocusedChip() {
      this.chipDestroyedChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(event => {
        const chipArray = this._chips.toArray();
        const chipIndex = chipArray.indexOf(event.chip);
        // If the focused chip is destroyed, save its index so that we can move focus to the next
        // chip. We only save the index here, rather than move the focus immediately, because we want
        // to wait until the chip is removed from the chip list before focusing the next one. This
        // allows us to keep focus on the same index if the chip gets swapped out.
        if (this._isValidIndex(chipIndex) && event.chip._hasFocus()) {
          this._lastDestroyedFocusedChipIndex = chipIndex;
        }
      });
    }
    /**
     * Finds the next appropriate chip to move focus to,
     * if the currently-focused chip is destroyed.
     */
    _redirectDestroyedChipFocus() {
      if (this._lastDestroyedFocusedChipIndex == null) {
        return;
      }
      if (this._chips.length) {
        const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
        const chipToFocus = this._chips.toArray()[newIndex];
        if (chipToFocus.disabled) {
          // If we're down to one disabled chip, move focus back to the set.
          if (this._chips.length === 1) {
            this.focus();
          } else {
            this._keyManager.setPreviousItemActive();
          }
        } else {
          chipToFocus.focus();
        }
      } else {
        this.focus();
      }
      this._lastDestroyedFocusedChipIndex = null;
    }
    static {
      this.ɵfac = function MatChipSet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipSet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChipSet,
        selectors: [["mat-chip-set"]],
        contentQueries: function MatChipSet_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChip, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
          }
        },
        hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
        hostVars: 1,
        hostBindings: function MatChipSet_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChipSet_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role);
          }
        },
        inputs: {
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          role: "role",
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c5,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function MatChipSet_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChipSet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Change event object that is emitted when the chip listbox value has changed. */
class MatChipListboxChange {
  constructor(/** Chip listbox that emitted the event. */
  source, /** Value of the chip listbox when the event was emitted. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Provider Expression that allows mat-chip-listbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatChipListbox),
  multi: true
};
/**
 * An extension of the MatChipSet component that supports chip selection.
 * Used with MatChipOption chips.
 */
let MatChipListbox = /*#__PURE__*/(() => {
  class MatChipListbox extends MatChipSet {
    constructor() {
      super(...arguments);
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      this._onTouched = () => {};
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      this._onChange = () => {};
      // TODO: MDC uses `grid` here
      this._defaultRole = 'listbox';
      /** Default chip options. */
      this._defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_CHIPS_DEFAULT_OPTIONS, {
        optional: true
      });
      this._multiple = false;
      /** Orientation of the chip list. */
      this.ariaOrientation = 'horizontal';
      this._selectable = true;
      /**
       * A function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      this.compareWith = (o1, o2) => o1 === o2;
      /** Whether this chip listbox is required. */
      this.required = false;
      this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Event emitted when the selected chip listbox value has been changed by the user. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._chips = undefined;
    }
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      this._multiple = value;
      this._syncListboxProperties();
    }
    /** The array of selected chips inside the chip listbox. */
    get selected() {
      const selectedChips = this._chips.toArray().filter(chip => chip.selected);
      return this.multiple ? selectedChips : selectedChips[0];
    }
    /**
     * Whether or not this chip listbox is selectable.
     *
     * When a chip listbox is not selectable, the selected states for all
     * the chips inside the chip listbox are always ignored.
     */
    get selectable() {
      return this._selectable;
    }
    set selectable(value) {
      this._selectable = value;
      this._syncListboxProperties();
    }
    /** Whether checkmark indicator for single-selection options is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = value;
      this._syncListboxProperties();
    }
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
      return this._getChipStream(chip => chip.selectionChange);
    }
    /** Combined stream of all of the child chips' blur events. */
    get chipBlurChanges() {
      return this._getChipStream(chip => chip._onBlur);
    }
    /** The value of the listbox, which is the combined value of the selected chips. */
    get value() {
      return this._value;
    }
    set value(value) {
      this.writeValue(value);
      this._value = value;
    }
    ngAfterContentInit() {
      if (this._pendingInitialValue !== undefined) {
        Promise.resolve().then(() => {
          this._setSelectionByValue(this._pendingInitialValue, false);
          this._pendingInitialValue = undefined;
        });
      }
      this._chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        // Update listbox selectable/multiple properties on chips
        this._syncListboxProperties();
      });
      this.chipBlurChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._blur());
      this.chipSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(event => {
        if (!this.multiple) {
          this._chips.forEach(chip => {
            if (chip !== event.source) {
              chip._setSelectedState(false, false, false);
            }
          });
        }
        if (event.isUserInput) {
          this._propagateChanges();
        }
      });
    }
    /**
     * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
     * are no selected chips.
     */
    focus() {
      if (this.disabled) {
        return;
      }
      const firstSelectedChip = this._getFirstSelectedChip();
      if (firstSelectedChip && !firstSelectedChip.disabled) {
        firstSelectedChip.focus();
      } else if (this._chips.length > 0) {
        this._keyManager.setFirstItemActive();
      } else {
        this._elementRef.nativeElement.focus();
      }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    writeValue(value) {
      if (this._chips) {
        this._setSelectionByValue(value, false);
      } else if (value != null) {
        this._pendingInitialValue = value;
      }
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /** Selects all chips with value. */
    _setSelectionByValue(value, isUserInput = true) {
      this._clearSelection();
      if (Array.isArray(value)) {
        value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
      } else {
        this._selectValue(value, isUserInput);
      }
    }
    /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
    _blur() {
      if (!this.disabled) {
        // Wait to see if focus moves to an individual chip.
        setTimeout(() => {
          if (!this.focused) {
            this._markAsTouched();
          }
        });
      }
    }
    _keydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.TAB) {
        super._allowFocusEscape();
      }
    }
    /** Marks the field as touched */
    _markAsTouched() {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    }
    /** Emits change event to set the model value. */
    _propagateChanges() {
      let valueToEmit = null;
      if (Array.isArray(this.selected)) {
        valueToEmit = this.selected.map(chip => chip.value);
      } else {
        valueToEmit = this.selected ? this.selected.value : undefined;
      }
      this._value = valueToEmit;
      this.change.emit(new MatChipListboxChange(this, valueToEmit));
      this._onChange(valueToEmit);
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Deselects every chip in the listbox.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
      this._chips.forEach(chip => {
        if (chip !== skip) {
          chip.deselect();
        }
      });
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput) {
      const correspondingChip = this._chips.find(chip => {
        return chip.value != null && this.compareWith(chip.value, value);
      });
      if (correspondingChip) {
        isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
      }
      return correspondingChip;
    }
    /** Syncs the chip-listbox selection state with the individual chips. */
    _syncListboxProperties() {
      if (this._chips) {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
          this._chips.forEach(chip => {
            chip._chipListMultiple = this.multiple;
            chip.chipListSelectable = this._selectable;
            chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
            chip._changeDetectorRef.markForCheck();
          });
        });
      }
    }
    /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
    _getFirstSelectedChip() {
      if (Array.isArray(this.selected)) {
        return this.selected.length ? this.selected[0] : undefined;
      } else {
        return this.selected;
      }
    }
    /**
     * Determines if key manager should avoid putting a given chip action in the tab index. Skip
     * non-interactive actions since the user can't do anything with them.
     */
    _skipPredicate(action) {
      // Override the skip predicate in the base class to avoid skipping disabled chips. Allow
      // disabled chip options to receive focus to align with WAI ARIA recommendation. Normally WAI
      // ARIA's instructions are to exclude disabled items from the tab order, but it makes a few
      // exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      return !action.isInteractive;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatChipListbox_BaseFactory;
        return function MatChipListbox_Factory(__ngFactoryType__) {
          return (ɵMatChipListbox_BaseFactory || (ɵMatChipListbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatChipListbox)))(__ngFactoryType__ || MatChipListbox);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChipListbox,
        selectors: [["mat-chip-listbox"]],
        contentQueries: function MatChipListbox_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipOption, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
          }
        },
        hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"],
        hostVars: 11,
        hostBindings: function MatChipListbox_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipListbox_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipListbox_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipListbox_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabIndex", ctx.disabled || ctx.empty ? -1 : ctx.tabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-multiselectable", ctx.multiple)("aria-orientation", ctx.ariaOrientation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-required", ctx.required);
          }
        },
        inputs: {
          multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
          selectable: [2, "selectable", "selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          compareWith: "compareWith",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          value: "value"
        },
        outputs: {
          change: "change"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c5,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function MatChipListbox_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c6],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChipListbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Change event object that is emitted when the chip grid value has changed. */
class MatChipGridChange {
  constructor(/** Chip grid that emitted the event. */
  source, /** Value of the chip grid when the event was emitted. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * An extension of the MatChipSet component used with MatChipRow chips and
 * the matChipInputFor directive.
 */
let MatChipGrid = /*#__PURE__*/(() => {
  class MatChipGrid extends MatChipSet {
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
      return this.ngControl ? !!this.ngControl.disabled : this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._syncChipsState();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
      return this._chipInput.id;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
      return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get placeholder() {
      return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
    get focused() {
      return this._chipInput.focused || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = value;
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
      return !this.empty || this.focused;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
    /** An object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /** Combined stream of all of the child chips' blur events. */
    get chipBlurChanges() {
      return this._getChipStream(chip => chip._onBlur);
    }
    /** Whether the chip grid is in an error state. */
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    constructor(elementRef, changeDetectorRef, dir, parentForm, parentFormGroup, defaultErrorStateMatcher, ngControl) {
      super(elementRef, changeDetectorRef, dir);
      this.ngControl = ngControl;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      this.controlType = 'mat-chip-grid';
      this._defaultRole = 'grid';
      /**
       * List of element ids to propagate to the chipInput's aria-describedby attribute.
       */
      this._ariaDescribedbyIds = [];
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      this._onTouched = () => {};
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      this._onChange = () => {};
      this._value = [];
      /** Emits when the chip grid value has been changed by the user. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits whenever the raw value of the chip-grid changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._chips = undefined;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
      this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__._ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    }
    ngAfterContentInit() {
      this.chipBlurChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        this._blur();
        this.stateChanges.next();
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.chipFocusChanges, this._chips.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this.stateChanges.next());
    }
    ngAfterViewInit() {
      super.ngAfterViewInit();
      if (!this._chipInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('mat-chip-grid must be used in combination with matChipInputFor.');
      }
    }
    ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      }
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.stateChanges.complete();
    }
    /** Associates an HTML input element with this chip grid. */
    registerInput(inputElement) {
      this._chipInput = inputElement;
      this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
      if (!this.disabled && !this._originatesFromChip(event)) {
        this.focus();
      }
    }
    /**
     * Focuses the first chip in this chip grid, or the associated input when there
     * are no eligible chips.
     */
    focus() {
      if (this.disabled || this._chipInput.focused) {
        return;
      }
      if (!this._chips.length || this._chips.first.disabled) {
        // Delay until the next tick, because this can cause a "changed after checked"
        // error if the input does something on focus (e.g. opens an autocomplete).
        Promise.resolve().then(() => this._chipInput.focus());
      } else {
        const activeItem = this._keyManager.activeItem;
        if (activeItem) {
          activeItem.focus();
        } else {
          this._keyManager.setFirstItemActive();
        }
      }
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
      // We must keep this up to date to handle the case where ids are set
      // before the chip input is registered.
      this._ariaDescribedbyIds = ids;
      this._chipInput?.setDescribedByIds(ids);
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    writeValue(value) {
      // The user is responsible for creating the child chips, so we just store the value.
      this._value = value;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @docs-private
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this.stateChanges.next();
    }
    /** Refreshes the error state of the chip grid. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip grid. */
    _blur() {
      if (!this.disabled) {
        // Check whether the focus moved to chip input.
        // If the focus is not moved to chip input, mark the field as touched. If the focus moved
        // to chip input, do nothing.
        // Timeout is needed to wait for the focus() event trigger on chip input.
        setTimeout(() => {
          if (!this.focused) {
            this._propagateChanges();
            this._markAsTouched();
          }
        });
      }
    }
    /**
     * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the grid from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
      if (!this._chipInput.focused) {
        super._allowFocusEscape();
      }
    }
    /** Handles custom keyboard events. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      const activeItem = this._keyManager.activeItem;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.TAB) {
        if (this._chipInput.focused && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.hasModifierKey)(event, 'shiftKey') && this._chips.length && !this._chips.last.disabled) {
          event.preventDefault();
          if (activeItem) {
            this._keyManager.setActiveItem(activeItem);
          } else {
            this._focusLastChip();
          }
        } else {
          // Use the super method here since it doesn't check for the input
          // focused state. This allows focus to escape if there's only one
          // disabled chip left in the list.
          super._allowFocusEscape();
        }
      } else if (!this._chipInput.focused) {
        // The up and down arrows are supposed to navigate between the individual rows in the grid.
        // We do this by filtering the actions down to the ones that have the same `_isPrimary`
        // flag as the active action and moving focus between them ourseles instead of delegating
        // to the key manager. For more information, see #29359 and:
        // https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/#ex2_label
        if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DOWN_ARROW) && activeItem) {
          const eligibleActions = this._chipActions.filter(action => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
          const currentIndex = eligibleActions.indexOf(activeItem);
          const delta = event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.UP_ARROW ? -1 : 1;
          event.preventDefault();
          if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
            this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
          }
        } else {
          super._handleKeydown(event);
        }
      }
      this.stateChanges.next();
    }
    _focusLastChip() {
      if (this._chips.length) {
        this._chips.last.focus();
      }
    }
    /** Emits change event to set the model value. */
    _propagateChanges() {
      const valueToEmit = this._chips.length ? this._chips.toArray().map(chip => chip.value) : [];
      this._value = valueToEmit;
      this.change.emit(new MatChipGridChange(this, valueToEmit));
      this.valueChange.emit(valueToEmit);
      this._onChange(valueToEmit);
      this._changeDetectorRef.markForCheck();
    }
    /** Mark the field as touched */
    _markAsTouched() {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
    static {
      this.ɵfac = function MatChipGrid_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipGrid)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControl, 10));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatChipGrid,
        selectors: [["mat-chip-grid"]],
        contentQueries: function MatChipGrid_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChipRow, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._chips = _t);
          }
        },
        hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"],
        hostVars: 10,
        hostBindings: function MatChipGrid_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipGrid_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipGrid_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.disabled || ctx._chips && ctx._chips.length === 0 ? -1 : ctx.tabIndex)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-invalid", ctx.errorState)("mat-mdc-chip-list-required", ctx.required);
          }
        },
        inputs: {
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          placeholder: "placeholder",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          value: "value",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldControl,
          useExisting: MatChipGrid
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c5,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function MatChipGrid_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c6],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatChipGrid;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Increasing integer for generating unique ids.
let nextUniqueId = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of a `<mat-chip-grid>`.
 */
let MatChipInput = /*#__PURE__*/(() => {
  class MatChipInput {
    /** Register input for chip list */
    get chipGrid() {
      return this._chipGrid;
    }
    set chipGrid(value) {
      if (value) {
        this._chipGrid = value;
        this._chipGrid.registerInput(this);
      }
    }
    /** Whether the input is disabled. */
    get disabled() {
      return this._disabled || this._chipGrid && this._chipGrid.disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    /** Whether the input is empty. */
    get empty() {
      return !this.inputElement.value;
    }
    constructor(_elementRef, defaultOptions, formField) {
      this._elementRef = _elementRef;
      /** Whether the control is focused. */
      this.focused = false;
      /**
       * Whether or not the chipEnd event will be emitted when the input is blurred.
       */
      this.addOnBlur = false;
      /** Emitted when a chip is to be added. */
      this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** The input's placeholder text. */
      this.placeholder = '';
      /** Unique id for the input. */
      this.id = `mat-mdc-chip-list-input-${nextUniqueId++}`;
      this._disabled = false;
      this.inputElement = this._elementRef.nativeElement;
      this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
      if (formField) {
        this.inputElement.classList.add('mat-mdc-form-field-input-control');
      }
    }
    ngOnChanges() {
      this._chipGrid.stateChanges.next();
    }
    ngOnDestroy() {
      this.chipEnd.complete();
    }
    /** Utility method to make host definition/tests more clear. */
    _keydown(event) {
      if (this.empty && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE) {
        // Ignore events where the user is holding down backspace
        // so that we don't accidentally remove too many chips.
        if (!event.repeat) {
          this._chipGrid._focusLastChip();
        }
        event.preventDefault();
      } else {
        this._emitChipEnd(event);
      }
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */
    _blur() {
      if (this.addOnBlur) {
        this._emitChipEnd();
      }
      this.focused = false;
      // Blur the chip list if it is not focused
      if (!this._chipGrid.focused) {
        this._chipGrid._blur();
      }
      this._chipGrid.stateChanges.next();
    }
    _focus() {
      this.focused = true;
      this._chipGrid.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    _emitChipEnd(event) {
      if (!event || this._isSeparatorKey(event) && !event.repeat) {
        this.chipEnd.emit({
          input: this.inputElement,
          value: this.inputElement.value,
          chipInput: this
        });
        event?.preventDefault();
      }
    }
    _onInput() {
      // Let chip list know whenever the value changes.
      this._chipGrid.stateChanges.next();
    }
    /** Focuses the input. */
    focus() {
      this.inputElement.focus();
    }
    /** Clears the input */
    clear() {
      this.inputElement.value = '';
    }
    setDescribedByIds(ids) {
      const element = this._elementRef.nativeElement;
      // Set the value directly in the DOM since this binding
      // is prone to "changed after checked" errors.
      if (ids.length) {
        element.setAttribute('aria-describedby', ids.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
    /** Checks whether a keycode is one of the configured separators. */
    _isSeparatorKey(event) {
      return !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.hasModifierKey)(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
    static {
      this.ɵfac = function MatChipInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MAT_FORM_FIELD, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"],
        hostVars: 6,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipGrid && ctx._chipGrid.ngControl ? ctx._chipGrid.ngControl.invalid : null)("aria-required", ctx._chipGrid && ctx._chipGrid.required || null)("required", ctx._chipGrid && ctx._chipGrid.required || null);
          }
        },
        inputs: {
          chipGrid: [0, "matChipInputFor", "chipGrid"],
          addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatChipInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CHIP_DECLARATIONS = [MatChip, MatChipAvatar, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon];
let MatChipsModule = /*#__PURE__*/(() => {
  class MatChipsModule {
    static {
      this.ɵfac = function MatChipsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatChipsModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatChipsModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: {
            separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER]
          }
        }],
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });
    }
  }
  return MatChipsModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 19322:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/expansion.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPANSION_PANEL_ANIMATION_TIMING: () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   MAT_ACCORDION: () => (/* binding */ MAT_ACCORDION),
/* harmony export */   MAT_EXPANSION_PANEL: () => (/* binding */ MAT_EXPANSION_PANEL),
/* harmony export */   MAT_EXPANSION_PANEL_DEFAULT_OPTIONS: () => (/* binding */ MAT_EXPANSION_PANEL_DEFAULT_OPTIONS),
/* harmony export */   MatAccordion: () => (/* binding */ MatAccordion),
/* harmony export */   MatExpansionModule: () => (/* binding */ MatExpansionModule),
/* harmony export */   MatExpansionPanel: () => (/* binding */ MatExpansionPanel),
/* harmony export */   MatExpansionPanelActionRow: () => (/* binding */ MatExpansionPanelActionRow),
/* harmony export */   MatExpansionPanelContent: () => (/* binding */ MatExpansionPanelContent),
/* harmony export */   MatExpansionPanelDescription: () => (/* binding */ MatExpansionPanelDescription),
/* harmony export */   MatExpansionPanelHeader: () => (/* binding */ MatExpansionPanelHeader),
/* harmony export */   MatExpansionPanelTitle: () => (/* binding */ MatExpansionPanelTitle),
/* harmony export */   matExpansionAnimations: () => (/* binding */ matExpansionAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 9180);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);














/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */
const _c0 = ["body"];
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
const MAT_ACCORDION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');

/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM. This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(0deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(180deg)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '0px',
    visibility: 'hidden'
  })),
  /*#__PURE__*/
  // Clear the `visibility` while open, otherwise the content will be visible when placed in
  // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
  // that have a `visibility` of their own (see #27436).
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '*',
    visibility: ''
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))])
};

/**
 * Token used to provide a `MatExpansionPanel` to `MatExpansionPanelContent`.
 * Used to avoid circular imports between `MatExpansionPanel` and `MatExpansionPanelContent`.
 */
const MAT_EXPANSION_PANEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL');

/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
let MatExpansionPanelContent = /*#__PURE__*/(() => {
  class MatExpansionPanelContent {
    constructor(_template, _expansionPanel) {
      this._template = _template;
      this._expansionPanel = _expansionPanel;
    }
    static {
      this.ɵfac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]],
        standalone: true
      });
    }
  }
  return MatExpansionPanelContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
let MatExpansionPanel = /*#__PURE__*/(() => {
  class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem {
    /** Whether the toggle indicator should be hidden. */
    get hideToggle() {
      return this._hideToggle || this.accordion && this.accordion.hideToggle;
    }
    set hideToggle(value) {
      this._hideToggle = value;
    }
    /** The position of the expansion indicator. */
    get togglePosition() {
      return this._togglePosition || this.accordion && this.accordion.togglePosition;
    }
    set togglePosition(value) {
      this._togglePosition = value;
    }
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
      super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
      this._viewContainerRef = _viewContainerRef;
      this._animationMode = _animationMode;
      this._hideToggle = false;
      /** An event emitted after the body's expansion animation happens. */
      this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** An event emitted after the body's collapse animation happens. */
      this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Stream that emits for changes in `@Input` properties. */
      this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      /** ID for the associated header element. Used for a11y labelling. */
      this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
      this.accordion = accordion;
      this._document = _document;
      this._animationsDisabled = _animationMode === 'NoopAnimations';
      if (defaultOptions) {
        this.hideToggle = defaultOptions.hideToggle;
      }
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing() {
      if (this.accordion) {
        return this.expanded && this.accordion.displayMode === 'default';
      }
      return false;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
      return this.expanded ? 'expanded' : 'collapsed';
    }
    /** Toggles the expanded state of the expansion panel. */
    toggle() {
      this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */
    close() {
      this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */
    open() {
      this.expanded = true;
    }
    ngAfterContentInit() {
      if (this._lazyContent && this._lazyContent._expansionPanel === this) {
        // Render the content as soon as the panel becomes open.
        this.opened.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(() => this.expanded && !this._portal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(() => {
          this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
        });
      }
    }
    ngOnChanges(changes) {
      this._inputChanges.next(changes);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus() {
      if (this._body) {
        const focusedElement = this._document.activeElement;
        const bodyElement = this._body.nativeElement;
        return focusedElement === bodyElement || bodyElement.contains(focusedElement);
      }
      return false;
    }
    /** Called when the expansion animation has started. */
    _animationStarted(event) {
      if (!isInitialAnimation(event) && !this._animationsDisabled && this._body) {
        // Prevent the user from tabbing into the content while it's animating.
        // TODO(crisbeto): maybe use `inert` to prevent focus from entering while closed as well
        // instead of `visibility`? Will allow us to clean up some code but needs more testing.
        this._body?.nativeElement.setAttribute('inert', '');
      }
    }
    /** Called when the expansion animation has finished. */
    _animationDone(event) {
      if (!isInitialAnimation(event)) {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
        // Re-enable tabbing once the animation is finished.
        if (!this._animationsDisabled && this._body) {
          this._body.nativeElement.removeAttribute('inert');
        }
      }
    }
    static {
      this.ɵfac = function MatExpansionPanel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationsDisabled)("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          hideToggle: [2, "hideToggle", "hideToggle", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          togglePosition: "togglePosition"
        },
        outputs: {
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: undefined
        }, {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["body", ""], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.start", function MatExpansionPanel_Template_div_animation_bodyExpansion_start_1_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._animationStarted($event));
            })("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._animationDone($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.CdkPortalOutlet],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color, var(--mat-app-surface));color:var(--mat-expansion-container-text-color, var(--mat-app-on-surface));border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font, var(--mat-app-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-app-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-app-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-app-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-app-body-large-tracking))}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-app-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });
    }
  }
  return MatExpansionPanel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Checks whether an animation is the initial setup animation. */
function isInitialAnimation(event) {
  return event.fromState === 'void';
}
/**
 * Actions of a `<mat-expansion-panel>`.
 */
let MatExpansionPanelActionRow = /*#__PURE__*/(() => {
  class MatExpansionPanelActionRow {
    static {
      this.ɵfac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanelActionRow)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"],
        standalone: true
      });
    }
  }
  return MatExpansionPanelActionRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Header element of a `<mat-expansion-panel>`.
 */
let MatExpansionPanelHeader = /*#__PURE__*/(() => {
  class MatExpansionPanelHeader {
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
      this.panel = panel;
      this._element = _element;
      this._focusMonitor = _focusMonitor;
      this._changeDetectorRef = _changeDetectorRef;
      this._animationMode = _animationMode;
      this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription.EMPTY;
      /** Tab index of the header. */
      this.tabIndex = 0;
      const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(changes => !!(changes['hideToggle'] || changes['togglePosition']))) : rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
      this.tabIndex = parseInt(tabIndex || '') || 0;
      // Since the toggle state depends on an @Input on the panel, we
      // need to subscribe and trigger change detection manually.
      this._parentChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(changes => {
        return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
      }))).subscribe(() => this._changeDetectorRef.markForCheck());
      // Avoids focus being lost if the panel contained the focused element and was closed.
      panel.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, 'program'));
      if (defaultOptions) {
        this.expandedHeight = defaultOptions.expandedHeight;
        this.collapsedHeight = defaultOptions.collapsedHeight;
      }
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled() {
      return this.panel.disabled;
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
      if (!this.disabled) {
        this.panel.toggle();
      }
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
      return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
      return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
      return this.panel.id;
    }
    /** Gets the toggle position for the header. */
    _getTogglePosition() {
      return this.panel.togglePosition;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
      return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */
    _getHeaderHeight() {
      const isExpanded = this._isExpanded();
      if (isExpanded && this.expandedHeight) {
        return this.expandedHeight;
      } else if (!isExpanded && this.collapsedHeight) {
        return this.collapsedHeight;
      }
      return null;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event) {
      switch (event.keyCode) {
        // Toggle for space and enter keys.
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.SPACE:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.ENTER:
          if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.hasModifierKey)(event)) {
            event.preventDefault();
            this._toggle();
          }
          break;
        default:
          if (this.panel.accordion) {
            this.panel.accordion._handleHeaderKeydown(event);
          }
          return;
      }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin, options) {
      if (origin) {
        this._focusMonitor.focusVia(this._element, origin, options);
      } else {
        this._element.nativeElement.focus(options);
      }
    }
    ngAfterViewInit() {
      this._focusMonitor.monitor(this._element).subscribe(origin => {
        if (origin && this.panel.accordion) {
          this.panel.accordion._handleHeaderFocus(this);
        }
      });
    }
    ngOnDestroy() {
      this._parentChangeSubscription.unsubscribe();
      this._focusMonitor.stopMonitoring(this._element);
    }
    static {
      this.ɵfac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight",
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 3,
        consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_Conditional_4_Template, 3, 1, "span", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-content-hide-toggle", !ctx._showToggle());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._showToggle() ? 4 : -1);
          }
        },
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font, var(--mat-app-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-app-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-app-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-app-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-app-title-medium-tracking))}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-app-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-app-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-app-on-surface-variant))}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-app-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-app-on-surface-variant));display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });
    }
  }
  return MatExpansionPanelHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
let MatExpansionPanelDescription = /*#__PURE__*/(() => {
  class MatExpansionPanelDescription {
    static {
      this.ɵfac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanelDescription)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"],
        standalone: true
      });
    }
  }
  return MatExpansionPanelDescription;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
let MatExpansionPanelTitle = /*#__PURE__*/(() => {
  class MatExpansionPanelTitle {
    static {
      this.ɵfac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionPanelTitle)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"],
        standalone: true
      });
    }
  }
  return MatExpansionPanelTitle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directive for a Material Design Accordion.
 */
let MatAccordion = /*#__PURE__*/(() => {
  class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion {
    constructor() {
      super(...arguments);
      /** Headers belonging to this accordion. */
      this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
      /** Whether the expansion indicator should be hidden. */
      this.hideToggle = false;
      /**
       * Display mode used for all expansion panels in the accordion. Currently two display
       * modes exist:
       *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
       *     panel at a different elevation from the rest of the accordion.
       *  flat - no spacing is placed around expanded panels, showing all panels at the same
       *     elevation.
       */
      this.displayMode = 'default';
      /** The position of the expansion indicator. */
      this.togglePosition = 'after';
    }
    ngAfterContentInit() {
      this._headers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._headers)).subscribe(headers => {
        this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
        this._ownHeaders.notifyOnChanges();
      });
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event) {
      this._keyManager.onKeydown(event);
    }
    _handleHeaderFocus(header) {
      this._keyManager.updateActiveItem(header);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._keyManager?.destroy();
      this._ownHeaders.destroy();
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatAccordion_BaseFactory;
        return function MatAccordion_Factory(__ngFactoryType__) {
          return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAccordion)))(__ngFactoryType__ || MatAccordion);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          hideToggle: [2, "hideToggle", "hideToggle", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          displayMode: "displayMode",
          togglePosition: "togglePosition"
        },
        exportAs: ["matAccordion"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_ACCORDION,
          useExisting: MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatAccordion;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatExpansionModule = /*#__PURE__*/(() => {
  class MatExpansionModule {
    static {
      this.ɵfac = function MatExpansionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatExpansionModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatExpansionModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule]
      });
    }
  }
  return MatExpansionModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=971.js.map