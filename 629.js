"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[629],{

/***/ 57629:
/*!***************************************************************!*\
  !*** ./src/app/components/opstelling/opstelling.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpstellingComponent: () => (/* binding */ OpstellingComponent)
/* harmony export */ });
/* harmony import */ var C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player-card/player-card.component */ 24137);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _services_next_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/next-match.service */ 5067);
/* harmony import */ var _services_game_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game.statistics.service */ 94165);
/* harmony import */ var _services_team_generate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/team-generate.service */ 69309);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/snackbar.service */ 62365);






















function OpstellingComponent_app_loading_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading-state", 5);
  }
}
function OpstellingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function OpstellingComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OpstellingComponent_div_3_div_1_Template_p_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.showDetailedAnalysis = !ctx_r0.showDetailedAnalysis);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Klik voor uitgebreide analyse");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.commentaryTeaser, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.showDetailedAnalysis ? "expand_less" : "expand_more");
  }
}
function OpstellingComponent_div_3_mat_card_2_mat_progress_spinner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-progress-spinner", 24);
  }
}
function OpstellingComponent_div_3_mat_card_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Voorbeschouwing wordt geschreven... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function OpstellingComponent_div_3_mat_card_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r0.algorithmExplanation, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function OpstellingComponent_div_3_mat_card_2_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OpstellingComponent_div_3_mat_card_2_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.showFullExplanation = !ctx_r0.showFullExplanation);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.showFullExplanation ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.showFullExplanation ? "Minder tonen" : "Meer details", " ");
  }
}
function OpstellingComponent_div_3_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 16)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Voorbeschouwing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, OpstellingComponent_div_3_mat_card_2_mat_progress_spinner_6_Template, 1, 0, "mat-progress-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content")(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, OpstellingComponent_div_3_mat_card_2_p_9_Template, 2, 0, "p", 19)(10, OpstellingComponent_div_3_mat_card_2_div_10_Template, 1, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-card-actions", 21)(12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OpstellingComponent_div_3_mat_card_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.showDetailedAnalysis = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Verberg details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, OpstellingComponent_div_3_mat_card_2_button_16_Template, 4, 2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingCommentary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingCommentary && !ctx_r0.algorithmExplanation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.algorithmExplanation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.algorithmExplanation.length > 800 && !ctx_r0.isLoadingCommentary);
  }
}
function OpstellingComponent_div_3_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const team_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, ctx_r0.getTeamRating(team_r6.value), "1.0-0"));
  }
}
function OpstellingComponent_div_3_div_4_ng_container_6_app_player_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-player-card", 34);
  }
  if (rf & 2) {
    const player_r7 = ctx.$implicit;
    const team_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", player_r7)("shirtColor", team_r6.key === "teamWhite" ? "white" : "red");
  }
}
function OpstellingComponent_div_3_div_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OpstellingComponent_div_3_div_4_ng_container_6_app_player_card_1_Template, 1, 2, "app-player-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const team_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", team_r6.value);
  }
}
function OpstellingComponent_div_3_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Geen spelers in deze opstelling.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function OpstellingComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OpstellingComponent_div_3_div_4_div_4_Template, 5, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, OpstellingComponent_div_3_div_4_ng_container_6_Template, 2, 1, "ng-container", 31)(7, OpstellingComponent_div_3_div_4_ng_template_7_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const team_r6 = ctx.$implicit;
    const geenOpstelling_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](team_r6.key === "teamWhite" ? "Team Wit" : "Team Rood");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", team_r6.value && team_r6.value.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", team_r6.value.length > 0)("ngIfElse", geenOpstelling_r8);
  }
}
function OpstellingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OpstellingComponent_div_3_div_1_Template, 5, 3, "div", 7)(2, OpstellingComponent_div_3_mat_card_2_Template, 17, 4, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OpstellingComponent_div_3_div_4_Template, 9, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 11)(6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OpstellingComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.copyOpstellingLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.teams && ctx_r0.teams.teamWhite && ctx_r0.teams.teamRed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.showDetailedAnalysis && ctx_r0.teams && ctx_r0.teams.teamWhite && ctx_r0.teams.teamRed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.orderedTeams);
  }
}
function OpstellingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " De opstelling wordt automatisch getoond op ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Refresh deze pagina na het verstrijken van de tijd.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.countdown, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 2, ctx_r0.revealTime, "EEEE d MMMM yyyy HH:mm"));
  }
}
let OpstellingComponent = /*#__PURE__*/(() => {
  class OpstellingComponent {
    constructor(nextMatchService, gameStatisticsService, teamGenerateService, snackbar) {
      this.nextMatchService = nextMatchService;
      this.gameStatisticsService = gameStatisticsService;
      this.teamGenerateService = teamGenerateService;
      this.snackbar = snackbar;
      this.teams = null;
      this.orderedTeams = [];
      this.loading = true;
      this.error = null;
      this.opstellingUrl = window.location.origin + '/opstelling';
      this.nextMatchInfo = null;
      this.showDetailedAnalysis = false;
      this.revealTime = null;
      this.countdown = null;
      this.algorithmExplanation = '';
      this.showFullExplanation = false;
      this.isLoadingCommentary = false;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
      this.countdownInterval = null;
    }
    ngOnDestroy() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }
    }
    ngOnInit() {
      this.loading = true;
      this.nextMatchService.getNextMatchInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: info => {
          this.nextMatchInfo = info;
          if (info && info.wedstrijd && info.wedstrijd.teamWit?.length && info.wedstrijd.teamRood?.length) {
            // Opstelling is bekend
            this.loadPlayerCards(info);
          } else {
            // Opstelling nog niet bekend, bereken reveal time
            this.setCountdown(info);
            this.loading = false;
          }
        },
        error: () => {
          this.error = 'Fout bij laden van wedstrijdinformatie.';
          this.loading = false;
        }
      });
    }
    loadPlayerCards(info) {
      this.gameStatisticsService.getCurrentSeason().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(currentSeason => this.gameStatisticsService.getFullPlayerStats(currentSeason)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: playerStats => {
          const teamWhite = this.parsePlayers(info.wedstrijd.teamWit, playerStats);
          const teamRed = this.parsePlayers(info.wedstrijd.teamRood, playerStats);
          this.teams = {
            teamWhite,
            teamRed
          };
          this.orderedTeams = [{
            key: 'teamWhite',
            value: teamWhite
          }, {
            key: 'teamRed',
            value: teamRed
          }];
          // Gebruik opgeslagen voorbeschouwing, anders AI genereren
          if (info.wedstrijd.voorbeschouwing) {
            this.algorithmExplanation = info.wedstrijd.voorbeschouwing;
          } else {
            this.generateComprehensiveAnalysis(teamWhite, teamRed);
          }
          this.loading = false;
        },
        error: () => {
          this.error = 'Fout bij laden van spelers.';
          this.loading = false;
        }
      });
    }
    parsePlayers(playerIds, playerStats) {
      return (playerIds ?? []).map(id => {
        const match = playerStats.find(p => p.id === id);
        return match || {
          id,
          name: '',
          position: '',
          rating: null
        };
      }).filter(p => !!p.name);
    }
    setCountdown(info) {
      if (!info || !info.parsedDate) return;
      // Reveal time = 3.5 uur voor wedstrijd
      const reveal = new Date(info.parsedDate.getTime());
      reveal.setHours(reveal.getHours() - 3, reveal.getMinutes() - 30);
      this.revealTime = reveal;
      this.updateCountdown();
      if (this.countdownInterval) clearInterval(this.countdownInterval);
      this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
    }
    updateCountdown() {
      if (!this.revealTime) return;
      const now = new Date();
      const diff = this.revealTime.getTime() - now.getTime();
      if (diff <= 0) {
        this.countdown = 'De opstelling wordt elk moment bekend gemaakt!';
        return;
      }
      const totalHours = diff / (1000 * 60 * 60);
      // Show days if more than 24 hours until reveal
      if (totalHours > 24) {
        const days = Math.floor(totalHours / 24);
        this.countdown = `${days} dag${days === 1 ? '' : 'en'} tot de opstelling bekend wordt.`;
      } else {
        // Show detailed countdown (hours, minutes, seconds) within 24 hours
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(diff % (1000 * 60) / 1000);
        this.countdown = `${hours}u ${minutes}m ${seconds}s tot de opstelling bekend wordt.`;
      }
    }
    copyOpstellingLink() {
      navigator.clipboard.writeText(this.opstellingUrl);
      this.snackbar.success('Link naar de opstelling gekopieerd!');
    }
    getTeamRating(team) {
      if (!team || !Array.isArray(team)) return 0;
      return team.reduce((sum, p) => sum + (p && p.rating ? p.rating : 0), 0);
    }
    getTeamPlayerNames(teamKey) {
      const team = this.teams?.[teamKey];
      if (!team || !Array.isArray(team)) return '';
      return team.map(p => p.name).join(', ');
    }
    getTeamRatingDifference() {
      if (!this.teams) return '0.0';
      const whiteRating = this.getTeamRating(this.teams.teamWhite);
      const redRating = this.getTeamRating(this.teams.teamRed);
      return Math.abs(whiteRating - redRating).toFixed(1);
    }
    get commentaryTeaser() {
      if (this.algorithmExplanation) {
        const match = this.algorithmExplanation.match(/<p[^>]*>(.*?)<\/p>/i);
        if (match) {
          // Strip HTML tags en trim
          return match[1].replace(/<[^>]+>/g, '').trim();
        }
      }
      return this.getBalanceDescription();
    }
    getBalanceDescription() {
      const diff = parseFloat(this.getTeamRatingDifference());
      if (diff < 1.0) {
        return 'Extreem evenwichtige opstelling - spannende wedstrijd gegarandeerd! 🔥';
      } else if (diff < 2.0) {
        return 'Goede balans tussen de teams met kleine tactische verschillen. ⚽';
      } else if (diff < 3.0) {
        return 'Één team heeft een licht voordeel, maar vorm kan alles veranderen. 💪';
      } else {
        return 'Duidelijk verschil in sterkte - underdog kan verrassen! 🌟';
      }
    }
    getDetailedBalanceAnalysis() {
      const diff = parseFloat(this.getTeamRatingDifference());
      const whiteRating = this.getTeamRating(this.teams?.teamWhite || []);
      const redRating = this.getTeamRating(this.teams?.teamRed || []);
      let analysis = `Met een verschil van ${diff} punten tussen de teams, `;
      if (diff < 1.0) {
        analysis += 'is deze wedstrijd bijna perfecte gebalanceerd. Beide teams hebben vrijwel gelijke kansen op winst. Vorm op de dag en teamwork zullen het verschil maken.';
      } else if (diff < 2.0) {
        const strongerTeam = whiteRating > redRating ? 'Team Wit' : 'Team Rood';
        analysis += `heeft ${strongerTeam} een licht voordeel op papier. Dit kleine verschil kan echter gemakkelijk weggenomen worden door goede tactiek en inzet.`;
      } else if (diff < 3.0) {
        const strongerTeam = whiteRating > redRating ? 'Team Wit' : 'Team Rood';
        analysis += `is ${strongerTeam} de favoriet voor deze wedstrijd. Toch blijft voetbal onvoorspelbaar en kan de underdog met de juiste mentaliteit verrassen.`;
      } else {
        const strongerTeam = whiteRating > redRating ? 'Team Wit' : 'Team Rood';
        const weakerTeam = whiteRating > redRating ? 'Team Rood' : 'Team Wit';
        analysis += `heeft ${strongerTeam} een duidelijke voorsprong. ${weakerTeam} zal extra hard moeten werken, maar in zaalvoetbal kunnen individuele acties en geluk alles veranderen!`;
      }
      return analysis;
    }
    // Comprehensive team analysis methods
    generateComprehensiveAnalysis(teamWhite, teamRed) {
      if (!teamWhite.length || !teamRed.length) {
        this.algorithmExplanation = '';
        return;
      }
      this.generateAICommentary(teamWhite, teamRed);
    }
    generateAICommentary(teamWhite, teamRed) {
      var _this = this;
      return (0,C_github_Zaalvoetbal_Doorn_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoadingCommentary = true;
        try {
          const payload = _this.buildCommentaryPayload(teamWhite, teamRed);
          const response = yield fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseBaseUrl}/generateTeamCommentary`, {
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
          const mockTeamWhite = {
            name: 'Team Wit',
            squad: teamWhite,
            sumOfRatings: _this.getTeamRating(teamWhite),
            totalScore: _this.getTeamRating(teamWhite),
            shirtcolor: 'white',
            attack: 0,
            defense: 0,
            condition: 0,
            chemistryScore: 0
          };
          const mockTeamRed = {
            name: 'Team Rood',
            squad: teamRed,
            sumOfRatings: _this.getTeamRating(teamRed),
            totalScore: _this.getTeamRating(teamRed),
            shirtcolor: 'red',
            attack: 0,
            defense: 0,
            condition: 0,
            chemistryScore: 0
          };
          const whiteAnalysis = _this.analyzeTeam(mockTeamWhite);
          const redAnalysis = _this.analyzeTeam(mockTeamRed);
          _this.algorithmExplanation = _this.generatePersonalizedExplanation(mockTeamWhite, mockTeamRed, whiteAnalysis, redAnalysis, _this.determineMainFactors(whiteAnalysis, redAnalysis));
        } finally {
          _this.isLoadingCommentary = false;
        }
      })();
    }
    buildCommentaryPayload(teamWhite, teamRed) {
      const whiteScore = this.getTeamRating(teamWhite);
      const redScore = this.getTeamRating(teamRed);
      const whiteDuo = this.findBestDuo(teamWhite);
      const redDuo = this.findBestDuo(teamRed);
      const toFormStats = players => players.filter(p => p.gameHistory && p.gameHistory.length >= 3).map(p => {
        const recent = p.gameHistory.slice(-5);
        return {
          name: p.name,
          winPct: recent.filter(g => g.result === 3).length / recent.length
        };
      });
      const whiteForm = toFormStats(teamWhite);
      const redForm = toFormStats(teamRed);
      return {
        teamWhite: {
          name: 'Team Wit',
          totalScore: whiteScore,
          players: teamWhite.map(p => ({
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
          name: 'Team Rood',
          totalScore: redScore,
          players: teamRed.map(p => ({
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
          scoreDiff: Math.abs(whiteScore - redScore),
          playersInForm: [...whiteForm, ...redForm].filter(p => p.winPct > 0.7).map(p => ({
            name: p.name,
            recentWins: Math.round(p.winPct * 5)
          })),
          playersInPoorForm: [...whiteForm, ...redForm].filter(p => p.winPct < 0.3).map(p => p.name),
          winStreaks: this.findWinStreaks([...teamWhite, ...teamRed]).map(({
            player,
            streak
          }) => ({
            name: player.name,
            streak
          })),
          duos: [whiteDuo, redDuo].filter(Boolean),
          newPlayers: [...teamWhite, ...teamRed].filter(p => !p.gamesPlayed || p.gamesPlayed <= 3).map(p => p.name),
          zlatanStars: [...teamWhite, ...teamRed].filter(p => (p.zlatanPoints || 0) >= 3).map(p => ({
            name: p.name,
            points: p.zlatanPoints
          })),
          ventielStars: [...teamWhite, ...teamRed].filter(p => (p.ventielPoints || 0) >= 3).map(p => ({
            name: p.name,
            points: p.ventielPoints
          })),
          experience: {
            white: teamWhite.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0),
            red: teamRed.reduce((sum, p) => sum + (p.gamesPlayed || 0), 0)
          },
          historischeWedstrijden: []
        }
      };
    }
    findBestDuo(squad) {
      let best = null;
      for (let i = 0; i < squad.length; i++) {
        for (let j = i + 1; j < squad.length; j++) {
          const a = squad[i];
          const b = squad[j];
          if (!a.gameHistory || !b.gameHistory) continue;
          let together = 0;
          let wins = 0;
          for (const game of a.gameHistory) {
            if (game.teammates?.includes(b.name)) {
              together++;
              if (game.result === 3) wins++;
            }
          }
          if (together >= 3) {
            const winRate = wins / together;
            if (!best || winRate > best.winRate || winRate === best.winRate && together > best.games) {
              best = {
                playerA: a.name,
                playerB: b.name,
                winRate,
                games: together
              };
            }
          }
        }
      }
      return best;
    }
    findWinStreaks(squad) {
      return squad.map(player => {
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
    }
    analyzeTeam(team) {
      const squad = team.squad;
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
      // Find experienced players (>10 games played)
      const experiencedPlayers = squad.filter(player => player.gamesPlayed && player.gamesPlayed > 10);
      // Find new players (<=3 games played)
      const newPlayers = squad.filter(player => !player.gamesPlayed || player.gamesPlayed <= 3);
      // Find keepers
      const keepers = squad.filter(player => player.position === 'Keeper' || player.position === 'GOAL_KEEPER');
      // Find top rated player
      const topPlayer = squad.reduce((top, player) => (player.rating || 0) > (top.rating || 0) ? player : top);
      // Calculate average rating
      const avgRating = squad.length > 0 ? squad.reduce((sum, p) => sum + (p.rating || 0), 0) / squad.length : 0;
      return {
        playersInForm,
        playersInPoorForm,
        experiencedPlayers,
        newPlayers,
        keepers,
        topPlayer,
        avgRating,
        totalScore: team.totalScore || 0
      };
    }
    determineMainFactors(whiteAnalysis, redAnalysis) {
      const factors = [];
      // Check if form is a major factor
      if (whiteAnalysis.playersInForm.length > 0 || redAnalysis.playersInForm.length > 0) {
        factors.push('form');
      }
      // Check if experience balancing is important
      const expDiff = Math.abs(whiteAnalysis.experiencedPlayers.length - redAnalysis.experiencedPlayers.length);
      if (expDiff <= 1 && (whiteAnalysis.experiencedPlayers.length > 0 || redAnalysis.experiencedPlayers.length > 0)) {
        factors.push('experience');
      }
      // Check if new player integration is happening
      if (whiteAnalysis.newPlayers.length > 0 || redAnalysis.newPlayers.length > 0) {
        factors.push('development');
      }
      // Check keeper situation
      if (whiteAnalysis.keepers.length > 0 && redAnalysis.keepers.length > 0) {
        factors.push('keepers');
      }
      // Always include balance as base factor
      factors.push('balance');
      return factors;
    }
    generatePersonalizedExplanation(teamWhite, teamRed, whiteAnalysis, redAnalysis, factors) {
      let explanation = '';
      const scoreDiff = Math.abs(whiteAnalysis.totalScore - redAnalysis.totalScore).toFixed(1);
      // Form analysis
      if (factors.includes('form')) {
        if (whiteAnalysis.playersInForm.length > 0) {
          const formPlayers = whiteAnalysis.playersInForm.map(p => p.name).join(' en ');
          explanation += `<p>🔥 <strong>Team Wit</strong> heeft een voordeel door de uitstekende vorm van ${formPlayers}.</p>`;
        }
        if (redAnalysis.playersInForm.length > 0) {
          const formPlayers = redAnalysis.playersInForm.map(p => p.name).join(' en ');
          explanation += `<p>🔥 <strong>Team Rood</strong> heeft een voordeel door de uitstekende vorm van ${formPlayers}.</p>`;
        }
        // Mention players in poor form
        const allPoorForm = [...whiteAnalysis.playersInPoorForm, ...redAnalysis.playersInPoorForm];
        if (allPoorForm.length > 0) {
          const poorFormNames = allPoorForm.map(p => p.name).join(', ');
          explanation += `<p>⚠️ ${poorFormNames} ${allPoorForm.length === 1 ? 'heeft' : 'hebben'} recent mindere vorm - kans op comeback!</p>`;
        }
      }
      // Keeper analysis
      if (factors.includes('keepers')) {
        const whiteKeeper = whiteAnalysis.keepers[0];
        const redKeeper = redAnalysis.keepers[0];
        if (whiteKeeper && redKeeper) {
          explanation += `<p>🥅 Keeper-duel: <strong>${whiteKeeper.name}</strong> vs <strong>${redKeeper.name}</strong> - beide teams hebben sterke laatste verdediging.</p>`;
        } else if (whiteKeeper) {
          explanation += `<p>🥅 <strong>Team Wit</strong> heeft voordeel met keeper ${whiteKeeper.name}, Team Rood moet creatief verdedigen.</p>`;
        } else if (redKeeper) {
          explanation += `<p>🥅 <strong>Team Rood</strong> heeft voordeel met keeper ${redKeeper.name}, Team Wit moet creatief verdedigen.</p>`;
        }
      }
      // Experience vs Development
      if (factors.includes('development')) {
        const allNewPlayers = [...whiteAnalysis.newPlayers, ...redAnalysis.newPlayers];
        if (allNewPlayers.length > 0) {
          const newNames = allNewPlayers.map(p => p.name).join(', ');
          explanation += `<p>🌟 <strong>Ontwikkeling</strong>: ${newNames} ${allNewPlayers.length === 1 ? 'speelt' : 'spelen'} tussen ervaren spelers voor optimale groei.</p>`;
        }
      }
      if (factors.includes('experience')) {
        const whiteExp = whiteAnalysis.experiencedPlayers;
        const redExp = redAnalysis.experiencedPlayers;
        if (whiteExp.length > redExp.length) {
          explanation += `<p>🏆 <strong>Team Wit</strong> heeft meer ervaring met ${whiteExp.map(p => p.name).join(', ')}.</p>`;
        } else if (redExp.length > whiteExp.length) {
          explanation += `<p>🏆 <strong>Team Rood</strong> heeft meer ervaring met ${redExp.map(p => p.name).join(', ')}.</p>`;
        } else if (whiteExp.length > 0 && redExp.length > 0) {
          explanation += `<p>🏆 Ervaring is gelijk verdeeld: ${whiteExp.map(p => p.name).join(', ')} vs ${redExp.map(p => p.name).join(', ')}.</p>`;
        }
      }
      // Key player matchups
      if (whiteAnalysis.topPlayer && redAnalysis.topPlayer) {
        explanation += `<p>⭐ <strong>Sleutel-duel</strong>: ${whiteAnalysis.topPlayer.name} (${whiteAnalysis.topPlayer.rating}) vs ${redAnalysis.topPlayer.name} (${redAnalysis.topPlayer.rating}) - deze strijd kan de wedstrijd bepalen!</p>`;
      }
      // Final balance assessment
      explanation += `<p><strong>⚖️ Score-verschil</strong>: ${scoreDiff} punten - `;
      if (parseFloat(scoreDiff) < 1.0) {
        explanation += 'extreem spannende wedstrijd verwacht!';
      } else if (parseFloat(scoreDiff) < 2.0) {
        explanation += 'evenwichtige wedstrijd met kleine voordelen.';
      } else {
        explanation += 'één team heeft voordeel, maar vorm kan alles veranderen!';
      }
      explanation += '</p>';
      return explanation;
    }
    // Helper methods for Team object properties
    calculateTeamAttack(players) {
      if (!players.length) return 0;
      // Simple calculation: average rating of attackers or all players if no specific attackers
      const attackers = players.filter(p => p.position && p.position.toLowerCase().includes('aanval'));
      const relevantPlayers = attackers.length > 0 ? attackers : players;
      return relevantPlayers.reduce((sum, p) => sum + (p.rating || 0), 0) / relevantPlayers.length;
    }
    calculateTeamDefense(players) {
      if (!players.length) return 0;
      // Simple calculation: average rating of defenders/keepers or all players if no specific defenders
      const defenders = players.filter(p => p.position && (p.position.toLowerCase().includes('verdedig') || p.position.toLowerCase().includes('keeper') || p.position.toLowerCase().includes('goal')));
      const relevantPlayers = defenders.length > 0 ? defenders : players;
      return relevantPlayers.reduce((sum, p) => sum + (p.rating || 0), 0) / relevantPlayers.length;
    }
    calculateTeamCondition(players) {
      if (!players.length) return 0;
      // Simple calculation: average rating (could be more sophisticated with fitness data)
      return players.reduce((sum, p) => sum + (p.rating || 0), 0) / players.length;
    }
    static {
      this.ɵfac = function OpstellingComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OpstellingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_next_match_service__WEBPACK_IMPORTED_MODULE_4__.NextMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_game_statistics_service__WEBPACK_IMPORTED_MODULE_5__.GameStatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_team_generate_service__WEBPACK_IMPORTED_MODULE_6__.TeamGenerateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: OpstellingComponent,
        selectors: [["app-opstelling"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 4,
        consts: [["geenOpstelling", ""], [1, "opstelling-container"], ["message", "Opstelling laden...", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], [4, "ngIf"], ["message", "Opstelling laden..."], [1, "error-banner"], ["class", "team-analysis-quote", 4, "ngIf"], ["class", "algorithm-explanation-card", 4, "ngIf"], [1, "results"], ["class", "each-result", 4, "ngFor", "ngForOf"], [1, "share-link-container"], ["mat-fab", "", "title", "Kopieer link naar opstelling", 3, "click"], [1, "team-analysis-quote"], [1, "balance-description", "clickable", 3, "click", "title"], [1, "expand-icon"], [1, "algorithm-explanation-card"], ["diameter", "18", "mode", "indeterminate", "class", "inline-spinner", 4, "ngIf"], [1, "detailed-analysis"], ["class", "loading-text", 4, "ngIf"], ["class", "explanation-content", 3, "innerHTML", 4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["diameter", "18", "mode", "indeterminate", 1, "inline-spinner"], [1, "loading-text"], [1, "explanation-content", 3, "innerHTML"], [1, "each-result"], [1, "team-header"], ["class", "team-rating", 4, "ngIf"], [1, "results-details"], [4, "ngIf", "ngIfElse"], [1, "team-rating"], [3, "player", "shirtColor", 4, "ngFor", "ngForOf"], [3, "player", "shirtColor"], [1, "countdown-container"], [1, "countdown-timer"], [1, "countdown-date"], [1, "countdown-note"]],
        template: function OpstellingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, OpstellingComponent_app_loading_state_1_Template, 1, 0, "app-loading-state", 2)(2, OpstellingComponent_div_2_Template, 5, 1, "div", 3)(3, OpstellingComponent_div_3_Template, 9, 3, "div", 4)(4, OpstellingComponent_div_4_Template, 13, 5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.teams && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.teams && ctx.countdown);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__.LoadingStateComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatFabButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_1__.PlayerCardComponent],
        styles: [".inline-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  color: #616161;\n  font-style: italic;\n}\n\n.opstelling-container[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n@media (max-width: 768px) {\n  .opstelling-container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n.team-analysis-quote[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 16px auto 24px auto;\n  padding: 0 16px;\n}\n.team-analysis-quote[_ngcontent-%COMP%]   .balance-description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.125rem;\n  font-weight: 400;\n  font-style: italic;\n  margin: 0;\n  line-height: 1.5;\n  padding: 16px 24px;\n}\n.team-analysis-quote[_ngcontent-%COMP%]   .balance-description.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: color 0.2s ease, transform 0.1s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 4px;\n}\n.team-analysis-quote[_ngcontent-%COMP%]   .balance-description.clickable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.team-analysis-quote[_ngcontent-%COMP%]   .balance-description.clickable[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 18px;\n  height: 18px;\n  color: #616161;\n  transition: color 0.2s ease;\n}\n\n.algorithm-explanation-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 16px auto 24px auto;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%] {\n  line-height: 1.6;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-summary[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 16px;\n  border-radius: 4px;\n  border-left: 4px solid #1976d2;\n  margin-top: 16px;\n}\n.algorithm-explanation-card[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .team-analysis-quote[_ngcontent-%COMP%] {\n    margin: 8px auto 16px auto;\n    padding: 0 8px;\n  }\n  .team-analysis-quote[_ngcontent-%COMP%]   .balance-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 12px 20px;\n  }\n  .results[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    flex-direction: row !important;\n    gap: 4px;\n    padding: 10px 4px;\n    overflow-x: auto;\n  }\n  .each-result[_ngcontent-%COMP%] {\n    margin: 2px 1px !important;\n    padding: 4px 2px !important;\n    min-width: calc(50% - 6px) !important;\n    max-width: calc(50% - 6px) !important;\n    flex-shrink: 0;\n  }\n  .each-result[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 8px;\n  }\n  .each-result[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin: 0 0 4px 0;\n    line-height: 1.1;\n    font-weight: 600;\n  }\n  .each-result[_ngcontent-%COMP%]   .team-header[_ngcontent-%COMP%]   .team-rating[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin: 0 0 4px 0;\n    line-height: 1;\n  }\n  .share-link-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n    app-player-card .player-card {\n    min-width: auto;\n    max-width: none;\n    width: 100%;\n    margin: 2px;\n  }\n    app-player-card .player-card mat-card-content {\n    padding: 8px !important;\n  }\n    app-player-card .player-card mat-card-header {\n    padding: 4px 8px !important;\n  }\n    app-player-card .player-card mat-card-header mat-card-title {\n    font-size: 0.75rem;\n    line-height: 1.2;\n  }\n    app-player-card .player-card mat-card-header mat-card-subtitle {\n    font-size: 10px;\n    line-height: 1.1;\n  }\n    app-player-card .player-card .player-card-image-white, \n     app-player-card .player-card .player-card-image-red {\n    width: 40px !important;\n    height: 40px !important;\n  }\n}\n.results[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.each-result[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 16px;\n  padding: 16px;\n  background: #fff;\n  border-radius: 8px;\n  min-width: 250px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n\n.results-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  width: 100%;\n}\n\n.team-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.team-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.team-header[_ngcontent-%COMP%]   .team-rating[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #666;\n}\n\n.share-link-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n}\n\n@media (max-width: 768px) {\n  .share-link-container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.countdown-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n.countdown-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #1976d2;\n  margin-bottom: 12px;\n}\n.countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1976d2;\n  margin-bottom: 8px;\n  letter-spacing: 2px;\n  text-align: center;\n  word-break: break-word;\n}\n.countdown-container[_ngcontent-%COMP%]   .countdown-date[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #616161;\n  margin-bottom: 4px;\n  text-align: center;\n  word-break: break-word;\n}\n.countdown-container[_ngcontent-%COMP%]   .countdown-note[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #616161;\n  text-align: center;\n  word-break: break-word;\n}\n\n@media (max-width: 600px) {\n  .countdown-container[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .countdown-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 36px;\n    width: 36px;\n    height: 36px;\n  }\n  .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .countdown-container[_ngcontent-%COMP%]   .countdown-date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .countdown-container[_ngcontent-%COMP%]   .countdown-note[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcHN0ZWxsaW5nL29wc3RlbGxpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxjQ1BnQjtFRFFoQixrQkFBQTtBQURGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxlQUFBO0VBRkY7QUFDRjtBQU1BO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkNZVztFRFhYLGdCQ21CaUI7RURsQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU1NO0VBQ0UsMkJBQUE7QUFKUjtBQU9NO0VBQ0UsbUJDVE87RURVUCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNDdERVO0VEdURWLDJCQUFBO0FBTFI7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBVEY7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFWTjtBQVlNO0VBQ0UsY0MxRVE7QURnRWhCO0FBZUU7RUFDRSxnQkFBQTtBQWJKO0FBZUk7RUFDRSxjQUFBO0FBYk47QUFlTTtFQUNFLGNDdEZRO0FEeUVoQjtBQWlCSTtFQUNFLGdCQ3BGVztFRHFGWCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBZk47QUFpQk07RUFDRSxnQkFBQTtBQWZSOztBQXFCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxjQUFBO0VBbEJGO0VBb0JFO0lBQ0UsbUJDckVTO0lEc0VULGtCQUFBO0VBbEJKO0VBc0JBO0lBQ0UsNEJBQUE7SUFDQSw4QkFBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBcEJGO0VBdUJBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHFDQUFBO0lBQ0EscUNBQUE7SUFDQSxjQUFBO0VBckJGO0VBdUJFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQXJCSjtFQXVCSTtJQUNFLGVDN0ZTO0lEOEZULGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkNyRmU7RURnRXJCO0VBd0JJO0lBQ0Usa0JDdEdPO0lEdUdQLGlCQUFBO0lBQ0EsY0FBQTtFQXRCTjtFQTRCQTtJQUNFLGFBQUE7RUExQkY7RUE4QkE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBNUJGO0VBOEJFO0lBQ0UsdUJBQUE7RUE1Qko7RUErQkU7SUFDRSwyQkFBQTtFQTdCSjtFQStCSTtJQUNFLGtCQ2pJTztJRGtJUCxnQkFBQTtFQTdCTjtFQWdDSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQTlCTjtFQWtDRTs7SUFFRSxzQkFBQTtJQUNBLHVCQUFBO0VBaENKO0FBQ0Y7QUFvQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQ25NZTtFRG9NZixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxrQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQ3ZMYztFRHdMZCxnQkNoTHFCO0VEaUxyQixXQUFBO0FBbENGOztBQXFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBbENGOztBQXNDQTtFQUNFO0lBQ0Usd0JBQUE7RUFuQ0Y7QUFDRjtBQXNDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXBDRjtBQXNDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNDblFZO0VEb1FaLG1CQUFBO0FBcENKO0FBdUNFO0VBQ0UsaUJDeE5ZO0VEeU5aLGdCQ25OZTtFRG9OZixjQzFRWTtFRDJRWixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXJDSjtBQXdDRTtFQUNFLG1CQ3ZPVztFRHdPWCxjQ2xSYztFRG1SZCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF0Q0o7QUF5Q0U7RUFDRSxtQkNqUFc7RURrUFgsY0MxUmM7RUQyUmQsa0JBQUE7RUFDQSxzQkFBQTtBQXZDSjs7QUEyQ0E7RUFDRTtJQUNFLGdCQUFBO0VBeENGO0VBMENFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBeENKO0VBMkNFO0lBQ0UsaUJDL1BVO0VEc05kO0VBNENFO0lBQ0UsZUN0UVc7RUQ0TmY7RUE2Q0U7SUFDRSxrQkM1UVM7RURpT2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlc192YXJpYWJsZXMnO1xyXG5cclxuLmlubGluZS1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9hZGluZy10ZXh0IHtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8vIE1haW4gY29udGFpbmVyIGZvciBtb2JpbGUgbWFyZ2luc1xyXG4ub3BzdGVsbGluZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAub3BzdGVsbGluZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGVhbSBhbmFseXNpcyBxdW90ZSAtIHN0eWxlZCBhcyBibG9ja3F1b3RlXHJcbi50ZWFtLWFuYWx5c2lzLXF1b3RlIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMTZweCBhdXRvIDI0cHggYXV0bztcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgXHJcbiAgLmJhbGFuY2UtZGVzY3JpcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgXHJcbiAgICAmLmNsaWNrYWJsZSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmV4cGFuZC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGV0YWlsZWQgYW5hbHlzaXMgY2FyZCBzdHlsaW5nXHJcbi5hbGdvcml0aG0tZXhwbGFuYXRpb24tY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDE2cHggYXV0byAyNHB4IGF1dG87XHJcbiAgXHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRhaWxlZC1hbmFseXNpcyB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgIFxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5hbHlzaXMtc3VtbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1iZztcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJGJwLXRhYmxldCkge1xyXG4gIC50ZWFtLWFuYWx5c2lzLXF1b3RlIHtcclxuICAgIG1hcmdpbjogOHB4IGF1dG8gMTZweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBcclxuICAgIC5iYWxhbmNlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXN1bHRzIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IC8vIEZvcmNlIHRlYW1zIHRvIHN0YXkgc2lkZSBieSBzaWRlXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgLy8gQWxsb3cgaG9yaXpvbnRhbCBzY3JvbGwgaWYgbmVlZGVkXHJcbiAgfVxyXG4gIFxyXG4gIC5lYWNoLXJlc3VsdCB7XHJcbiAgICBtYXJnaW46IDJweCAxcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDRweCAycHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSA2cHgpICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGV4YWN0bHkgNTAlIHdpZHRoXHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gNnB4KSAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1zaHJpbms6IDA7IC8vIFByZXZlbnQgc2hyaW5raW5nIGJlbG93IG1pbi13aWR0aFxyXG4gICAgXHJcbiAgICAudGVhbS1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIFxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGVhbS1yYXRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBIaWRlIHNoYXJlIGxpbmsgY29udGFpbmVyIG9uIG1vYmlsZVxyXG4gIC5zaGFyZS1saW5rLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvLyBNYWtlIHBsYXllciBjYXJkcyBtdWNoIHNtYWxsZXIgb24gbW9iaWxlXHJcbiAgOjpuZy1kZWVwIGFwcC1wbGF5ZXItY2FyZCAucGxheWVyLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIFxyXG4gICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiA0cHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIG1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGxheWVyLWNhcmQtaW1hZ2Utd2hpdGUsXHJcbiAgICAucGxheWVyLWNhcmQtaW1hZ2UtcmVkIHtcclxuICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmVhY2gtcmVzdWx0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNCk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFweDsgLy8gU21hbGwgZ2FwIGJldHdlZW4gcGxheWVyIGNhcmRzXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZWFtLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnRlYW0taGVhZGVyIGg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZWFtLWhlYWRlciAudGVhbS1yYXRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtMnhsO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWJvbGQ7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5zaGFyZS1saW5rLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyBIaWRlIHNoYXJlIGxpbmsgb24gbW9iaWxlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnAtdGFibGV0KSB7XHJcbiAgLnNoYXJlLWxpbmstY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudGRvd24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY291bnRkb3duLXRpbWVyIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS01eGw7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC5jb3VudGRvd24tZGF0ZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG5cclxuICAuY291bnRkb3duLW5vdGUge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICRicC1tb2JpbGUpIHtcclxuICAuY291bnRkb3duLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICB3aWR0aDogMzZweDtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudGRvd24tdGltZXIge1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtMnhsO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudGRvd24tZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudGRvd24tbm90ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return OpstellingComponent;
})();

/***/ })

}]);
//# sourceMappingURL=629.js.map