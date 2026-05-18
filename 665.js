"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[665],{

/***/ 17665:
/*!***************************************************************!*\
  !*** ./src/app/components/attendance/attendance.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceComponent: () => (/* binding */ AttendanceComponent)
/* harmony export */ });
/* harmony import */ var C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/date-utils */ 96098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-match-info/next-match-info.component */ 11673);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player-card/player-card.component */ 24137);
/* harmony import */ var _pwa_install_guide_pwa_install_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pwa-install-guide/pwa-install-guide.component */ 79329);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/attendance.service */ 19425);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/player.service */ 6455);
/* harmony import */ var _services_next_match_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/next-match.service */ 5067);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/notification.service */ 87473);
/* harmony import */ var _services_pwa_install_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/pwa-install.service */ 52640);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);



































const _c0 = a0 => ["/speler", a0];
function AttendanceComponent_app_loading_state_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-loading-state", 5);
  }
}
function AttendanceComponent_div_3_div_2_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AttendanceComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "notifications_none");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Notificaties ontvangen?");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 17)(7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AttendanceComponent_div_3_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.enableNotifications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AttendanceComponent_div_3_div_2_mat_icon_8_Template, 2, 0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AttendanceComponent_div_3_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.dismissNotificationPrompt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " Later ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r2.notificationLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.notificationLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.notificationLoading ? "Bezig..." : "Ja", " ");
  }
}
function AttendanceComponent_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AttendanceComponent_div_3_ng_container_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function AttendanceComponent_div_3_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", player_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", player_r5.name, " ");
  }
}
function AttendanceComponent_div_3_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.playerSelectError);
  }
}
function AttendanceComponent_div_3_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-progress-spinner", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Opslaan...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_div_3_div_10_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Je hebt aangegeven aanwezig te zijn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_div_3_div_10_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 36)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Je hebt aangegeven afwezig te zijn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_div_3_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AttendanceComponent_div_3_div_10_div_10_div_2_Template, 5, 0, "div", 32)(3, AttendanceComponent_div_3_div_10_div_10_div_3_Template, 5, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", ctx_r2.attendanceStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "Ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", "Nee");
  }
}
function AttendanceComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AttendanceComponent_div_3_div_10_div_1_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AttendanceComponent_div_3_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.setAttendance("Ja"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Ik doe mee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AttendanceComponent_div_3_div_10_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.setAttendance("Nee"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Ik kan niet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AttendanceComponent_div_3_div_10_div_10_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r2.isLoadingStatus || ctx_r2.attendanceStatus === "Ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r2.isLoadingStatus || ctx_r2.attendanceStatus === "Nee");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r2.attendanceStatus === "Ja" || ctx_r2.attendanceStatus === "Nee") && !ctx_r2.isLoadingStatus);
  }
}
function AttendanceComponent_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 38)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Selecteer je naam om je aanwezigheid door te geven.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Geen spelers gevonden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AttendanceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-next-match-info", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AttendanceComponent_div_3_div_2_Template, 12, 3, "div", 7)(3, AttendanceComponent_div_3_ng_container_3_Template, 9, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-form-field", 8)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Selecteer Speler");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AttendanceComponent_div_3_Template_mat_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r2.selectedPlayer, $event) || (ctx_r2.selectedPlayer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function AttendanceComponent_div_3_Template_mat_select_selectionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onPlayerSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AttendanceComponent_div_3_mat_option_8_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AttendanceComponent_div_3_mat_error_9_Template, 2, 1, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AttendanceComponent_div_3_div_10_Template, 11, 4, "div", 11)(11, AttendanceComponent_div_3_div_11_Template, 3, 0, "div", 12)(12, AttendanceComponent_div_3_div_12_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nextMatchInfo", ctx_r2.nextMatchInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.showNotificationPrompt);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r2.isLoadingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.playerSelectError);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.selectedPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r2.selectedPlayer && ctx_r2.players.length > 0 && !ctx_r2.isLoadingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.players.length === 0 && !ctx_r2.isLoadingPlayers);
  }
}
function AttendanceComponent_div_4_ng_container_4_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-player-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, item_r7.playerData.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("player", item_r7.playerData);
  }
}
function AttendanceComponent_div_4_ng_container_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r7.name);
  }
}
function AttendanceComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AttendanceComponent_div_4_ng_container_4_ng_container_1_a_1_Template, 2, 4, "a", 42)(2, AttendanceComponent_div_4_ng_container_4_ng_container_1_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.playerData);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r7.playerData);
  }
}
function AttendanceComponent_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AttendanceComponent_div_4_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.status === "Ja");
  }
}
function AttendanceComponent_div_4_ng_container_8_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-player-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, item_r8.playerData.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("player", item_r8.playerData);
  }
}
function AttendanceComponent_div_4_ng_container_8_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r8.name);
  }
}
function AttendanceComponent_div_4_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AttendanceComponent_div_4_ng_container_8_ng_container_1_a_1_Template, 2, 4, "a", 42)(2, AttendanceComponent_div_4_ng_container_8_ng_container_1_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r8.playerData);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r8.playerData);
  }
}
function AttendanceComponent_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AttendanceComponent_div_4_ng_container_8_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r8.status === "Nee");
  }
}
function AttendanceComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AttendanceComponent_div_4_ng_container_4_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 40)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AttendanceComponent_div_4_ng_container_8_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Aanwezig (", ctx_r2.presentCount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.attendanceList)("ngForTrackBy", ctx_r2.trackByAttendanceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Afwezig (", ctx_r2.absentCount, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.attendanceList)("ngForTrackBy", ctx_r2.trackByAttendanceName);
  }
}
function AttendanceComponent_app_pwa_install_guide_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-pwa-install-guide", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function AttendanceComponent_app_pwa_install_guide_5_Template_app_pwa_install_guide_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.closePwaGuide());
    })("installed", function AttendanceComponent_app_pwa_install_guide_5_Template_app_pwa_install_guide_installed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onPwaInstalled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
let AttendanceComponent = /*#__PURE__*/(() => {
  class AttendanceComponent {
    constructor(attendanceService, playerService, nextMatchService, notificationService, pwaInstallService, snackbar) {
      this.attendanceService = attendanceService;
      this.playerService = playerService;
      this.nextMatchService = nextMatchService;
      this.notificationService = notificationService;
      this.pwaInstallService = pwaInstallService;
      this.snackbar = snackbar;
      this.players = [];
      this.selectedPlayer = null;
      this.nextGameDate = null;
      this.nextGameDateRaw = null;
      this.nextMatchInfo = null;
      this.isLoadingPlayers = false;
      this.isLoadingStatus = false;
      this.attendanceStatus = null;
      this.attendanceList = [];
      this.presentCount = 0;
      this.absentCount = 0;
      this.LAST_PLAYER_KEY = 'lastSelectedPlayer';
      this.errorMessage = null; // Algemene foutmeldingen (API, etc)
      this.playerSelectError = null; // Alleen voor veldvalidatie spelerselectie
      // Notification properties
      this.notificationsSupported = false;
      this.notificationsEnabled = false;
      this.playerNotificationsEnabled = false; // Player-specific status
      this.notificationLoading = false;
      this.notificationStatusLoading = false;
      this.showNotificationPrompt = false;
      this.showPwaInstallGuide = false;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
    }
    ngOnInit() {
      this.isLoadingPlayers = true;
      // Haal nextMatch en spelers parallel op i.p.v. gekettind.
      // De aanwezigheids-details worden pas opgehaald zodra we de datum kennen.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)({
        info: this.nextMatchService.getNextMatchInfo(),
        players: this.playerService.getPlayers()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(({
        info,
        players
      }) => {
        this.nextMatchInfo = info;
        this.nextGameDate = info?.parsedDate || null;
        this.nextGameDateRaw = info?.date || null;
        this.players = players;
        this.errorMessage = null;
        this.loadLastSelectedPlayer();
        if (!this.nextGameDate) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
        }
        const formattedDate = this.formatDate(this.nextGameDate);
        return this.attendanceService.getMatchAttendanceDetailsWithPlayerStatus(formattedDate, this.selectedPlayer || undefined);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.isLoadingPlayers = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: details => {
          if (!details) {
            this.attendanceList = [];
            this.presentCount = 0;
            this.absentCount = 0;
            return;
          }
          this.applyAttendanceDetails(details);
        },
        error: err => {
          console.error('Error loading initial attendance data:', err);
          this.errorMessage = 'Fout bij het laden van gegevens.';
          this.attendanceList = [];
          this.presentCount = 0;
          this.absentCount = 0;
        }
      });
      // Setup notification status (onafhankelijk van data-loading)
      this.setupNotifications();
    }
    loadPlayersAndThenAttendance() {
      // Behouden voor eventuele externe callers; delegeert naar de nieuwe flow.
      this.isLoadingPlayers = true;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)({
        info: this.nextMatchService.getNextMatchInfo(),
        players: this.playerService.getPlayers()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(({
        info,
        players
      }) => {
        this.nextMatchInfo = info;
        this.nextGameDate = info?.parsedDate || null;
        this.nextGameDateRaw = info?.date || null;
        this.players = players;
        this.errorMessage = null;
        this.loadLastSelectedPlayer();
        if (!this.nextGameDate) return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(null);
        const formattedDate = this.formatDate(this.nextGameDate);
        return this.attendanceService.getMatchAttendanceDetailsWithPlayerStatus(formattedDate, this.selectedPlayer || undefined);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.isLoadingPlayers = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: details => details && this.applyAttendanceDetails(details),
        error: err => {
          console.error('Error loading players or attendance:', err);
          this.errorMessage = 'Fout bij het laden van gegevens.';
          this.attendanceList = [];
          this.presentCount = 0;
          this.absentCount = 0;
        }
      });
    }
    applyAttendanceDetails(details) {
      this.attendanceList = [...details.present.map(player => ({
        speler: player.name,
        status: 'Ja',
        playerObj: player.playerData || this.createDefaultPlayer(player.name, player.position),
        playerData: player.playerData || this.createDefaultPlayer(player.name, player.position),
        name: player.name
      })), ...details.absent.map(player => ({
        speler: player.name,
        status: 'Nee',
        playerObj: player.playerData || this.createDefaultPlayer(player.name, player.position),
        playerData: player.playerData || this.createDefaultPlayer(player.name, player.position),
        name: player.name
      }))];
      this.presentCount = details.present.length;
      this.absentCount = details.absent.length;
      this.errorMessage = null;
      if (this.selectedPlayer && details.playerStatus !== undefined) {
        this.attendanceStatus = details.playerStatus;
      }
    }
    loadAttendanceList() {
      if (!this.nextGameDate) {
        this.attendanceList = [];
        this.presentCount = 0;
        this.absentCount = 0;
        return;
      }
      const formattedDate = this.formatDate(this.nextGameDate);
      // Gebruik de gecombineerde methode die zowel de lijst als player status in één keer ophaalt
      this.attendanceService.getMatchAttendanceDetailsWithPlayerStatus(formattedDate, this.selectedPlayer || undefined).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: details => {
          // Combineer present en absent spelers voor de lijst
          this.attendanceList = [...details.present.map(player => ({
            speler: player.name,
            status: 'Ja',
            playerObj: player.playerData || this.createDefaultPlayer(player.name, player.position),
            playerData: player.playerData || this.createDefaultPlayer(player.name, player.position),
            name: player.name
          })), ...details.absent.map(player => ({
            speler: player.name,
            status: 'Nee',
            playerObj: player.playerData || this.createDefaultPlayer(player.name, player.position),
            playerData: player.playerData || this.createDefaultPlayer(player.name, player.position),
            name: player.name
          }))];
          this.presentCount = details.present.length;
          this.absentCount = details.absent.length;
          this.errorMessage = null;
          // Zet de attendance status direct vanuit de gecombineerde response
          if (this.selectedPlayer && details.playerStatus !== undefined) {
            this.attendanceStatus = details.playerStatus;
          }
        },
        error: err => {
          this.attendanceList = [];
          this.presentCount = 0;
          this.absentCount = 0;
          this.errorMessage = 'Fout bij het laden van aanwezigheid.';
          console.error('Error loading attendance list:', err);
        }
      });
    }
    loadPlayers() {
      this.isLoadingPlayers = true;
      this.playerService.getPlayers().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.isLoadingPlayers = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe({
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
    loadLastSelectedPlayer() {
      const lastPlayer = localStorage.getItem(this.LAST_PLAYER_KEY);
      if (lastPlayer && this.players.some(player => player.name === lastPlayer)) {
        this.selectedPlayer = lastPlayer;
        // Check player-specific notification status
        this.checkPlayerNotificationStatus();
        // De attendance status wordt nu gecontroleerd in loadAttendanceList() na het laden van de data
      } else {
        this.selectedPlayer = null;
        this.attendanceStatus = null;
        this.playerNotificationsEnabled = false;
        this.updateNotificationPrompt();
        localStorage.removeItem(this.LAST_PLAYER_KEY);
      }
    }
    onPlayerSelectionChange() {
      this.attendanceStatus = null;
      this.playerSelectError = null;
      if (this.selectedPlayer) {
        localStorage.setItem(this.LAST_PLAYER_KEY, this.selectedPlayer);
        // Herlaad de attendance list met de nieuwe player status
        this.loadAttendanceList();
        // Check player-specific notification status
        this.checkPlayerNotificationStatus();
      } else {
        localStorage.removeItem(this.LAST_PLAYER_KEY);
        this.playerSelectError = 'Selecteer eerst een speler.';
        this.playerNotificationsEnabled = false;
        this.updateNotificationPrompt();
      }
    }
    fetchCurrentAttendanceStatus() {
      if (!this.selectedPlayer || !this.nextGameDate) {
        this.attendanceStatus = null;
        return;
      }
      // Eerst proberen de status uit de reeds geladen attendanceList te halen
      const existingEntry = this.attendanceList.find(entry => entry.speler === this.selectedPlayer);
      if (existingEntry) {
        this.attendanceStatus = existingEntry.status;
        return;
      }
      // Fallback: gebruik de gecombineerde methode voor consistentie
      this.isLoadingStatus = true;
      const formattedDate = this.formatDate(this.nextGameDate);
      const currentPlayer = this.selectedPlayer;
      this.attendanceService.getMatchAttendanceDetailsWithPlayerStatus(formattedDate, currentPlayer).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.isLoadingStatus = false), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: details => {
          if (this.selectedPlayer === currentPlayer) {
            this.attendanceStatus = details.playerStatus || null;
            this.errorMessage = null;
          }
        },
        error: err => {
          console.error(`Error fetching attendance status for ${currentPlayer}:`, err);
          if (this.selectedPlayer === currentPlayer) {
            this.attendanceStatus = null;
            this.snackbar.error('Fout bij ophalen aanwezigheid status.');
          }
        }
      });
    }
    setAttendance(status) {
      this.playerSelectError = null;
      if (!this.selectedPlayer || !this.nextGameDate || this.isLoadingStatus) {
        if (!this.selectedPlayer || !this.nextGameDate) {
          this.playerSelectError = 'Selecteer eerst een speler.';
        }
        return;
      }
      this.isLoadingStatus = true;
      const formattedDate = this.formatDate(this.nextGameDate);
      const currentPlayer = this.selectedPlayer;
      // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
      this.attendanceService.setAttendance({
        date: formattedDate,
        playerName: currentPlayer,
        status: status
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.isLoadingStatus = false)).subscribe({
        next: response => {
          console.log('Attendance saved:', response);
          if (this.selectedPlayer === currentPlayer) {
            this.attendanceStatus = status;
            this.snackbar.success(`Aanwezigheid (${status}) voor ${currentPlayer} opgeslagen!`);
          }
          this.loadAttendanceList(); // Refresh de lijst na opslaan
        },
        error: err => {
          console.error('Error saving attendance:', err);
          const message = err instanceof Error ? err.message : 'Fout bij opslaan aanwezigheid.';
          this.snackbar.error(message);
        }
      });
    }
    setupNotifications() {
      this.notificationService.isSupported.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe(supported => {
        this.notificationsSupported = supported;
        this.updateNotificationPrompt();
      });
      this.notificationService.isEnabled.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_17__.takeUntilDestroyed)(this.destroyRef)).subscribe(enabled => {
        this.notificationsEnabled = enabled;
        this.updateNotificationPrompt();
      });
    }
    updateNotificationPrompt() {
      // Check if prompt was dismissed for this session
      const dismissedForSession = sessionStorage.getItem('notification-prompt-dismissed');
      // Show prompt for any selected player if supported but player doesn't have notifications enabled and not loading and not dismissed for this player
      const playerSpecificKey = `notification-prompt-dismissed-${this.selectedPlayer}`;
      const dismissedForThisPlayer = sessionStorage.getItem(playerSpecificKey);
      this.showNotificationPrompt = !!this.selectedPlayer && this.notificationsSupported && !this.playerNotificationsEnabled && !this.notificationStatusLoading && !dismissedForThisPlayer;
      console.log('🔔 Show notification prompt:', this.showNotificationPrompt, 'for player:', this.selectedPlayer, 'loading:', this.notificationStatusLoading);
    }
    checkPlayerNotificationStatus() {
      var _this = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.selectedPlayer) {
          _this.playerNotificationsEnabled = false;
          _this.notificationStatusLoading = false;
          _this.updateNotificationPrompt();
          return;
        }
        _this.notificationStatusLoading = true;
        _this.updateNotificationPrompt(); // Update to hide prompt while loading
        try {
          _this.playerNotificationsEnabled = yield _this.notificationService.checkPlayerNotificationStatus(_this.selectedPlayer);
          console.log(`🔔 Player ${_this.selectedPlayer} notifications enabled:`, _this.playerNotificationsEnabled);
        } catch (error) {
          console.error('Error checking player notification status:', error);
          _this.playerNotificationsEnabled = false;
        } finally {
          _this.notificationStatusLoading = false;
          _this.updateNotificationPrompt();
        }
      })();
    }
    enableNotifications() {
      var _this2 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // iOS Safari ondersteunt Web Push alleen als de app is toegevoegd aan het beginscherm
        // en vandaar wordt gestart. In een gewone Safari-tab faalt Notification.requestPermission()
        // stil of met "denied". We sturen die gebruikers dus eerst naar de installatie-uitleg
        // en proberen pas permission na terugkeer vanaf het home-screen icoon.
        if (_this2.pwaInstallService.isIOS && !_this2.pwaInstallService.isStandalone) {
          _this2.showPwaInstallGuide = true;
          return;
        }
        _this2.notificationLoading = true;
        try {
          const success = yield _this2.notificationService.requestPermission(_this2.selectedPlayer || undefined);
          if (success) {
            _this2.snackbar.success('Notificaties succesvol ingeschakeld.');
            // Check updated player notification status
            yield _this2.checkPlayerNotificationStatus();
            // Laat de install-guide alleen zien voor mobiele gebruikers die de app nog niet
            // hebben geïnstalleerd — desktop-gebruikers hebben er weinig aan.
            const pwaAcknowledged = localStorage.getItem('pwa-install-acknowledged');
            if (!pwaAcknowledged && _this2.pwaInstallService.isMobile && !_this2.pwaInstallService.isStandalone) {
              _this2.showPwaInstallGuide = true;
            }
          } else {
            _this2.snackbar.error('Kon notificaties niet inschakelen');
          }
        } catch (error) {
          console.error('Error enabling notifications:', error);
          _this2.snackbar.error('Fout bij inschakelen notificaties');
        } finally {
          _this2.notificationLoading = false;
        }
      })();
    }
    getNotificationStatus() {
      return this.notificationService.getNotificationCapabilities();
    }
    createDefaultPlayer(name, position) {
      return {
        name: name,
        position: position || '',
        rating: 1,
        gamesPlayed: 0,
        totalPoints: 0,
        wins: 0,
        losses: 0,
        ties: 0,
        winRatio: 0,
        gameHistory: [],
        zlatanPoints: 0,
        ventielPoints: 0,
        actief: true
      };
    }
    dismissNotificationPrompt() {
      this.showNotificationPrompt = false;
      // Store that user dismissed it for this specific player
      if (this.selectedPlayer) {
        const playerSpecificKey = `notification-prompt-dismissed-${this.selectedPlayer}`;
        sessionStorage.setItem(playerSpecificKey, 'true');
      }
    }
    closePwaGuide() {
      this.showPwaInstallGuide = false;
    }
    onPwaInstalled() {
      this.snackbar.success('App geïnstalleerd. Notificaties zijn nu actief.');
    }
    formatDate(date) {
      return (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.formatDateISO)(date);
    }
    trackByAttendanceName(_index, item) {
      return item.name;
    }
    static {
      this.ɵfac = function AttendanceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_6__.AttendanceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_7__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_next_match_service__WEBPACK_IMPORTED_MODULE_8__.NextMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_pwa_install_service__WEBPACK_IMPORTED_MODULE_10__.PwaInstallService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: AttendanceComponent,
        selectors: [["app-attendance"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
        decls: 6,
        vars: 4,
        consts: [[1, "attendance-card"], ["message", "Laden van aanwezigheid data...", 4, "ngIf"], [4, "ngIf"], ["class", "attendance-overview", 4, "ngIf"], [3, "close", "installed", 4, "ngIf"], ["message", "Laden van aanwezigheid data..."], [3, "nextMatchInfo"], ["class", "notification-banner", 4, "ngIf"], ["appearance", "fill", 1, "player-select"], ["name", "player", 3, "ngModelChange", "selectionChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "attendance-buttons", 4, "ngIf"], ["class", "select-prompt", 4, "ngIf"], [1, "notification-banner"], [1, "banner-content"], [1, "banner-icon"], [1, "banner-text"], [1, "banner-actions"], ["mat-button", "", "color", "primary", "size", "small", 3, "click", "disabled"], ["mat-button", "", "size", "small", 3, "click"], [1, "error-banner", "mat-elevation-z2"], ["mat-icon-button", "", 3, "click"], [3, "value"], [1, "attendance-buttons"], ["class", "saving-indicator", 4, "ngIf"], ["mat-fab", "", "extended", "", "color", "primary", 1, "btn-yes", 3, "click", "disabled"], ["mat-fab", "", "extended", "", "color", "warn", 1, "btn-no", 3, "click", "disabled"], ["class", "status-confirmation", 4, "ngIf"], [1, "saving-indicator"], ["mode", "indeterminate", "diameter", "50"], [1, "status-confirmation"], [3, "ngSwitch"], ["class", "status-row status-yes", 4, "ngSwitchCase"], ["class", "status-row status-no", 4, "ngSwitchCase"], [1, "status-row", "status-yes"], [1, "icon-green"], [1, "status-row", "status-no"], ["color", "warn"], [1, "select-prompt"], [1, "attendance-overview"], [1, "attendance-col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "card-link", 3, "routerLink", 4, "ngIf"], [1, "card-link", 3, "routerLink"], [3, "player"], [3, "close", "installed"]],
        template: function AttendanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AttendanceComponent_app_loading_state_2_Template, 1, 0, "app-loading-state", 1)(3, AttendanceComponent_div_3_Template, 13, 10, "div", 2)(4, AttendanceComponent_div_4_Template, 9, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AttendanceComponent_app_pwa_install_guide_5_Template, 1, 0, "app-pwa-install-guide", 4);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoadingPlayers && !ctx.isLoadingStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLoadingPlayers);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.attendanceList.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showPwaInstallGuide);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__.LoadingStateComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLink, _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_3__.NextMatchInfoComponent, _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_4__.PlayerCardComponent, _pwa_install_guide_pwa_install_guide_component__WEBPACK_IMPORTED_MODULE_5__.PwaInstallGuideComponent],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.attendance-card[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  max-width: 700px;\n  width: 100%;\n  margin: 20px auto;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n@media (max-width: 900px) {\n  .attendance-card[_ngcontent-%COMP%] {\n    max-width: 98vw;\n    padding: 10px;\n  }\n}\n@media (max-width: 600px) {\n  .attendance-card[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    margin: 10px 0;\n    padding: 6px;\n  }\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.notification-banner[_ngcontent-%COMP%] {\n  background: rgba(25, 118, 210, 0.08);\n  border: 1px solid rgba(25, 118, 210, 0.2);\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #1976d2;\n  flex-shrink: 0;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: #333;\n  font-weight: 500;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1;\n  padding: 6px 12px;\n  min-width: auto;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: #1565c0;\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[color=primary][disabled][_ngcontent-%COMP%] {\n  background-color: rgba(25, 118, 210, 0.5);\n  color: rgba(255, 255, 255, 0.7);\n}\n.notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 600px) {\n  .notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 8px;\n  }\n  .notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .notification-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 4px 8px;\n  }\n}\n\n.player-select[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.attendance-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 15px;\n}\n.attendance-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1em;\n  margin-bottom: 15px;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  font-size: 1.1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.attendance-buttons[_ngcontent-%COMP%]   .btn-yes[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n.attendance-buttons[_ngcontent-%COMP%]   .btn-no[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n.attendance-buttons[_ngcontent-%COMP%]   .btn-maybe[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: white;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled.btn-yes {\n  background-color: #4CAF50;\n  color: white;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled.btn-no {\n  background-color: #f44336;\n  color: white;\n}\n.attendance-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled.btn-maybe {\n  background-color: #ff9800;\n  color: white;\n}\n\n.status-confirmation[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px 20px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 1.1rem;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);\n  border: 2px solid #1976d2;\n  background: #f5faff;\n}\n.status-confirmation[_ngcontent-%COMP%]   .status-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-confirmation.status-yes[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #388e3c;\n  border: 1px solid #81c784;\n}\n.status-confirmation.status-no[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #e57373;\n}\n.status-confirmation.status-maybe[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #ff9800;\n  border: 1px solid #ffd54f;\n}\n\n.select-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  color: grey;\n  margin-top: 20px;\n}\n\n.next-match-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  padding: 1.5rem;\n  padding-top: 0.5rem;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  border: 1px solid #90caf9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.next-match-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 15px;\n  letter-spacing: 0.0125em;\n  line-height: 2.5rem;\n}\n\n.next-match-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.next-match-location[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.icon-green[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n\n.attendance-overview[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n  flex-wrap: nowrap;\n}\n\n.attendance-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.attendance-col[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n\n@media (max-width: 700px) {\n  .attendance-overview[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .attendance-col[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n  }\n    app-player-card .player-card {\n    min-width: auto;\n    max-width: none;\n    width: 100%;\n    margin: 2px;\n  }\n    app-player-card .player-card mat-card-content {\n    padding: 8px !important;\n  }\n    app-player-card .player-card mat-card-header {\n    padding: 4px 8px !important;\n  }\n    app-player-card .player-card mat-card-header mat-card-title {\n    font-size: 12px !important;\n    line-height: 1.2;\n  }\n    app-player-card .player-card mat-card-header mat-card-subtitle {\n    font-size: 10px !important;\n    line-height: 1.1;\n  }\n    app-player-card .player-card .player-card-image-white, \n     app-player-card .player-card .player-card-image-red {\n    width: 40px !important;\n    height: 40px !important;\n  }\n}\n.card-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsbUJBQUE7QUFIRjs7QUFPQTtFQUNFLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQ3hEVTtFRHlEVixjQUFBO0FBSk47QUFPSTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsV0N2RFc7RUR3RFgsZ0JBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBTk47QUFRTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFRUTtFQUNFLHlCQy9FTTtFRGdGTixZQUFBO0FBTlY7QUFRVTtFQUNFLHlCQUFBO0FBTlo7QUFTVTtFQUNFLHlDQUFBO0VBQ0EsK0JBQUE7QUFQWjtBQVdRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVFY7QUFlRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxRQUFBO0VBYko7RUFlSTtJQUNFLGVBQUE7RUFiTjtFQWdCSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWROO0FBQ0Y7O0FBb0JBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBakJGOztBQW9CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQWpCRjtBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWxCSjtBQW9CSTtFQUNFLGlCQUFBO0FBbEJOO0FBc0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBcEJKO0FBdUJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBckJKO0FBd0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBdEJKO0FBMEJFO0VBQ0UsWUFBQTtBQXhCSjtBQXlCSTtFQUFZLHlCQUFBO0VBQTJCLFlBQUE7QUFyQjNDO0FBc0JJO0VBQVcseUJBQUE7RUFBMkIsWUFBQTtBQWxCMUM7QUFtQkk7RUFBYyx5QkFBQTtFQUEyQixZQUFBO0FBZjdDOztBQW1CQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7QUFrQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBaEJKO0FBbUJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFqQko7QUFtQkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWpCSjtBQW1CRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBakJKOztBQXFCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXFCQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFsQkY7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBc0JBO0VBQ0U7SUFDRSxXQUFBO0VBbkJGO0VBdUJFO0lBQ0UsZUFBQTtJQUNBLHFCQUFBO0VBckJKO0VBMEJBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQXhCRjtFQTBCRTtJQUNFLHVCQUFBO0VBeEJKO0VBMkJFO0lBQ0UsMkJBQUE7RUF6Qko7RUEyQkk7SUFDRSwwQkFBQTtJQUNBLGdCQUFBO0VBekJOO0VBNEJJO0lBQ0UsMEJBQUE7SUFDQSxnQkFBQTtFQTFCTjtFQThCRTs7SUFFRSxzQkFBQTtJQUNBLHVCQUFBO0VBNUJKO0FBQ0Y7QUFnQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQTlCRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7IC8vIGN1c3RvbSBicmVha3BvaW50XHJcbiAgLmF0dGVuZGFuY2UtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDk4dnc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICRicC1tb2JpbGUpIHtcclxuICAuYXR0ZW5kYW5jZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLy8gU3VidGxlIE5vdGlmaWNhdGlvbiBCYW5uZXIgU3R5bGluZ1xyXG4ubm90aWZpY2F0aW9uLWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeS1jb2xvciwgMC4wOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgLmJhbm5lci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgIC5iYW5uZXItaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyLXRleHQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcblxyXG4gICAgICAgICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVjMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnktY29sb3IsIDAuNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtbW9iaWxlKSB7XHJcbiAgICAuYmFubmVyLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICAgIGdhcDogOHB4O1xyXG5cclxuICAgICAgLmJhbm5lci10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYW5uZXItYWN0aW9ucyBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnBsYXllci1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDsgLy8gTWFrZSBidXR0b25zIGZ1bGwgd2lkdGggd2l0aGluIGNvbnRhaW5lclxyXG4gIGdhcDogMTVweDsgLy8gU3BhY2UgYmV0d2VlbiBidXR0b25zXHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4OyAvLyBNYWtlIGJ1dHRvbnMgdGFsbGVyXHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi15ZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLy8gR3JlZW5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idG4tbm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLy8gUmVkXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYnRuLW1heWJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7IC8vIE9yYW5nZVxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gU3R5bGUgZm9yIGRpc2FibGVkIGJ1dHRvbnMgdG8ga2VlcCBjb2xvcnNcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgJi5idG4teWVzIHsgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgY29sb3I6IHdoaXRlOyB9XHJcbiAgICAmLmJ0bi1ubyB7IGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gICAgJi5idG4tbWF5YmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwOyBjb2xvcjogd2hpdGU7IH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtY29uZmlybWF0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDMzLCAxNTAsIDI0MywgMC4wOCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcclxuXHJcbiAgLnN0YXR1cy1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmLnN0YXR1cy15ZXMge1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZjVlOTtcclxuICAgIGNvbG9yOiAjMzg4ZTNjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgxYzc4NDtcclxuICB9XHJcbiAgJi5zdGF0dXMtbm8ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZWJlZTtcclxuICAgIGNvbG9yOiAjYzYyODI4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1NzM3MztcclxuICB9XHJcbiAgJi5zdGF0dXMtbWF5YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjhlMTtcclxuICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZDU0ZjtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtcHJvbXB0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTBjYWY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5leHQtbWF0Y2gtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxMjVlbTtcclxuICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4ubmV4dC1tYXRjaC1kYXRlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmV4dC1tYXRjaC1sb2NhdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmljb24tZ3JlZW4ge1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZS1vdmVydmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDsgLy8gS2VlcCBzaWRlIGJ5IHNpZGUgYWx3YXlzXHJcbn1cclxuXHJcbi5hdHRlbmRhbmNlLWNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDA7IC8vIEFsbG93IHNocmlua2luZyBiZWxvdyBjb250ZW50IHdpZHRoXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXB4OyAvLyBTbWFsbCBnYXAgYmV0d2VlbiBwbGF5ZXIgY2FyZHNcclxuICBcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHsgLy8gY3VzdG9tIGJyZWFrcG9pbnRcclxuICAuYXR0ZW5kYW5jZS1vdmVydmlldyB7XHJcbiAgICBnYXA6IDAuNXJlbTsgLy8gU21hbGxlciBnYXAgb24gbW9iaWxlXHJcbiAgfVxyXG4gIFxyXG4gIC5hdHRlbmRhbmNlLWNvbCB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWFrZSBwbGF5ZXIgY2FyZHMgbXVjaCBzbWFsbGVyIG9uIG1vYmlsZSAoc2FtZSBhcyBvcHN0ZWxsaW5nKVxyXG4gIDo6bmctZGVlcCBhcHAtcGxheWVyLWNhcmQgLnBsYXllci1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBcclxuICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogNHB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgICAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIG1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wbGF5ZXItY2FyZC1pbWFnZS13aGl0ZSxcclxuICAgIC5wbGF5ZXItY2FyZC1pbWFnZS1yZWQge1xyXG4gICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AttendanceComponent;
})();

/***/ }),

/***/ 87473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date-utils */ 96098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _data_sources_notification_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-sources/notification-data-source */ 6203);






let NotificationService = /*#__PURE__*/(() => {
  class NotificationService {
    constructor(dataSource) {
      this.dataSource = dataSource;
      this.isSupported$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
      this.isEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
      this.subscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
      // VAPID public key (from environment)
      this.vapidPublicKey = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.vapidPublicKey;
      this.checkSupport();
      this.checkCurrentStatus();
    }
    get isSupported() {
      return this.isSupported$.asObservable();
    }
    get isEnabled() {
      return this.isEnabled$.asObservable();
    }
    get currentSubscription() {
      return this.subscription$.asObservable();
    }
    get isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent);
    }
    checkSupport() {
      const isSupported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
      this.isSupported$.next(isSupported);
      console.log('🔔 Push notifications supported:', isSupported, this.isIOS ? '(iOS device detected)' : '');
    }
    checkCurrentStatus() {
      var _this = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.isSupported$.value) {
          return;
        }
        try {
          const registration = yield navigator.serviceWorker.ready;
          const subscription = yield registration.pushManager.getSubscription();
          if (subscription) {
            _this.subscription$.next(subscription);
            _this.isEnabled$.next(true);
            console.log('✅ Found existing push subscription');
          } else {
            _this.isEnabled$.next(false);
            console.log('❌ No existing push subscription found');
          }
        } catch (error) {
          console.error('❌ Error checking notification status:', error);
          _this.isEnabled$.next(false);
        }
      })();
    }
    requestPermission(playerName) {
      var _this2 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this2.isSupported$.value) {
          console.log('❌ Push notifications not supported on this device/browser');
          return false;
        }
        try {
          // Check current permission state first - critical safety check
          if (Notification.permission === 'denied') {
            console.log('❌ Notification permission was previously denied by user');
            console.log('💡 User must manually enable notifications in browser settings');
            _this2.isEnabled$.next(false);
            return false;
          }
          // Request notification permission (skip prompt if already granted)
          let permission = Notification.permission;
          if (permission !== 'granted') {
            console.log('📱 Requesting notification permission from user...');
            permission = yield Notification.requestPermission();
          } else {
            console.log('✅ Notification permission already granted');
          }
          if (permission !== 'granted') {
            console.log('❌ Notification permission not granted:', permission);
            return false;
          }
          console.log('✅ Notification permission confirmed, proceeding with subscription...');
          // Get service worker registration
          const registration = yield navigator.serviceWorker.ready;
          // Subscribe to push notifications
          const applicationServerKey = _this2.urlBase64ToUint8Array(_this2.vapidPublicKey);
          const subscription = yield registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey
          });
          console.log('✅ Push subscription created:', subscription);
          // Store subscription
          _this2.subscription$.next(subscription);
          _this2.isEnabled$.next(true);
          // Save subscription to backend
          try {
            yield _this2.saveSubscriptionToServer(subscription, playerName);
            console.log('✅ Notification setup completed successfully');
          } catch (saveError) {
            console.error('⚠️ Notifications enabled locally but failed to save to server:', saveError);
            // Save to localStorage as fallback
            _this2.saveSubscriptionToLocalStorage(subscription);
            console.log('📱 Subscription saved to localStorage as fallback');
          }
          return true;
        } catch (error) {
          console.error('❌ Error requesting notification permission:', error);
          _this2.isEnabled$.next(false);
          return false;
        }
      })();
    }
    disableNotifications() {
      var _this3 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const subscription = _this3.subscription$.value;
          if (subscription) {
            // Unsubscribe from push notifications
            yield subscription.unsubscribe();
            console.log('✅ Push subscription unsubscribed');
            // Remove subscription from backend (we'll implement this later)
            yield _this3.removeSubscriptionFromServer(subscription);
          }
          _this3.subscription$.next(null);
          _this3.isEnabled$.next(false);
          return true;
        } catch (error) {
          console.error('❌ Error disabling notifications:', error);
          return false;
        }
      })();
    }
    saveSubscriptionToServer(subscription, playerName) {
      var _this4 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const record = {
            endpoint: subscription.endpoint,
            keysP256dh: _this4.arrayBufferToBase64(subscription.getKey('p256dh')),
            keysAuth: _this4.arrayBufferToBase64(subscription.getKey('auth')),
            userAgent: navigator.userAgent,
            timestamp: (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentDateTimeISO)(),
            active: true,
            playerName: (playerName || '').trim()
          };
          console.log('💾 Saving subscription to server:', record);
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this4.dataSource.addSubscription(record));
          console.log('✅ Subscription saved successfully');
        } catch (error) {
          console.error('❌ Error saving subscription to server:', error);
          if (error instanceof TypeError) {
            console.error('Network error - check if backend is accessible');
          }
          throw error;
        }
      })();
    }
    removeSubscriptionFromServer(subscription) {
      var _this5 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          console.log('🗑️ Removing subscription from server:', subscription.endpoint);
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this5.dataSource.deactivateSubscription(subscription.endpoint));
          console.log('✅ Subscription marked as inactive on server');
        } catch (error) {
          console.error('❌ Error removing subscription from server:', error);
          // Don't throw — local state already updated
        }
      })();
    }
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
    arrayBufferToBase64(buffer) {
      if (!buffer) return '';
      const bytes = new Uint8Array(buffer);
      let binary = '';
      bytes.forEach(byte => binary += String.fromCharCode(byte));
      return window.btoa(binary);
    }
    saveSubscriptionToLocalStorage(subscription) {
      try {
        const subscriptionData = {
          endpoint: subscription.endpoint,
          keys: {
            p256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
            auth: this.arrayBufferToBase64(subscription.getKey('auth'))
          },
          userAgent: navigator.userAgent,
          timestamp: (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentDateTimeISO)(),
          active: true
        };
        localStorage.setItem('futsal-notification-subscription', JSON.stringify(subscriptionData));
      } catch (error) {
        console.error('❌ Error saving subscription to localStorage:', error);
      }
    }
    checkPlayerNotificationStatus(playerName) {
      var _this6 = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const normalizedPlayerName = playerName.trim();
        try {
          if (!_this6.isSupported$.value) {
            return false;
          }
          const registration = yield navigator.serviceWorker.ready;
          const browserSubscription = yield registration.pushManager.getSubscription();
          if (!browserSubscription) {
            console.log(`❌ No browser subscription found for ${normalizedPlayerName}`);
            return false;
          }
          const subs = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this6.dataSource.getAllSubscriptions());
          const match = subs.find(s => s.endpoint === browserSubscription.endpoint && s.active && s.playerName === normalizedPlayerName);
          if (match) {
            console.log(`✅ Found active notification subscription for ${normalizedPlayerName}`);
            return true;
          }
          console.log(`❌ No active subscription found for ${normalizedPlayerName}`);
          return false;
        } catch (error) {
          console.error('Error checking player notification status:', error);
          return false;
        }
      })();
    }
    getNotificationCapabilities() {
      if (!('serviceWorker' in navigator)) {
        return ['Je browser ondersteunt geen service workers'];
      }
      if (!('PushManager' in window)) {
        return ['Je browser ondersteunt geen push notifications'];
      }
      if (!('Notification' in window)) {
        return ['Je browser ondersteunt geen notifications'];
      }
      if (this.isIOS) {
        return ['iOS Safari ondersteunt web push notifications (vanaf iOS 16.4)', 'Je krijgt notificaties zelfs als Safari gesloten is', 'Voor de beste ervaring: voeg deze site toe aan je startscherm', 'Zorg dat je iOS 16.4 of nieuwer hebt geïnstalleerd'];
      }
      return ['Je browser ondersteunt push notifications volledig!', 'Je ontvangt notificaties zelfs als de app gesloten is', 'Notificaties werken op Android, Windows en Mac'];
    }
    static {
      this.ɵfac = function NotificationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_data_sources_notification_data_source__WEBPACK_IMPORTED_MODULE_3__.NotificationDataSource));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return NotificationService;
})();

/***/ }),

/***/ 56196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 93335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 89285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=665.js.map