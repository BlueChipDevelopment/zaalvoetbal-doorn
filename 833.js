"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[833],{

/***/ 89833:
/*!*****************************************************************!*\
  !*** ./src/app/components/wedstrijden/wedstrijden.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WedstrijdenComponent: () => (/* binding */ WedstrijdenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/player-name.pipe */ 28445);
/* harmony import */ var _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty-state/empty-state.component */ 11301);
/* harmony import */ var _services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wedstrijden.service */ 40237);












function WedstrijdenComponent_app_loading_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-state", 4);
  }
}
function WedstrijdenComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WedstrijdenComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function WedstrijdenComponent_ng_container_3_div_1_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function WedstrijdenComponent_ng_container_3_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "playerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WedstrijdenComponent_ng_container_3_div_1_ng_container_7_ng_container_4_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const id_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, id_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r4);
  }
}
function WedstrijdenComponent_ng_container_3_div_1_ng_container_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function WedstrijdenComponent_ng_container_3_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "playerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WedstrijdenComponent_ng_container_3_div_1_ng_container_12_ng_container_4_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const id_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, id_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r6);
  }
}
function WedstrijdenComponent_ng_container_3_div_1_span_16_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "smart_toy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WedstrijdenComponent_ng_container_3_div_1_span_16_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WedstrijdenComponent_ng_container_3_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Teams: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WedstrijdenComponent_ng_container_3_div_1_span_16_mat_icon_4_Template, 2, 0, "mat-icon", 24)(5, WedstrijdenComponent_ng_container_3_div_1_span_16_mat_icon_5_Template, 2, 0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("automatisch", wedstrijd_r7.teamGeneratie === "Automatisch")("handmatig", wedstrijd_r7.teamGeneratie === "Handmatig");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wedstrijd_r7.teamGeneratie);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", wedstrijd_r7.teamGeneratie === "Automatisch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", wedstrijd_r7.teamGeneratie === "Handmatig");
  }
}
function WedstrijdenComponent_ng_container_3_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Zlatan: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "playerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wedstrijd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-left", wedstrijd_r7.teamGeneratie ? "1rem" : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, wedstrijd_r7.zlatanPlayerId)));
  }
}
function WedstrijdenComponent_ng_container_3_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ventiel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "playerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wedstrijd_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, wedstrijd_r7.ventielPlayerId)));
  }
}
function WedstrijdenComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WedstrijdenComponent_ng_container_3_div_1_ng_container_7_Template, 5, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WedstrijdenComponent_ng_container_3_div_1_ng_container_12_Template, 5, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WedstrijdenComponent_ng_container_3_div_1_span_16_Template, 6, 7, "span", 20)(17, WedstrijdenComponent_ng_container_3_div_1_span_17_Template, 6, 7, "span", 21)(18, WedstrijdenComponent_ng_container_3_div_1_span_18_Template, 6, 5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wedstrijd_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 9, wedstrijd_r7.datum, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", wedstrijd_r7.teamWit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", wedstrijd_r7.scoreWit, " - ", wedstrijd_r7.scoreRood, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", wedstrijd_r7.teamRood);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Locatie: ", wedstrijd_r7.locatie, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", wedstrijd_r7.teamGeneratie);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", wedstrijd_r7.zlatanPlayerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", wedstrijd_r7.ventielPlayerId);
  }
}
function WedstrijdenComponent_ng_container_3_app_empty_state_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-empty-state", 29);
  }
}
function WedstrijdenComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WedstrijdenComponent_ng_container_3_div_1_Template, 19, 12, "div", 7)(2, WedstrijdenComponent_ng_container_3_app_empty_state_2_Template, 1, 0, "app-empty-state", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.wedstrijden)("ngForTrackBy", ctx_r1.trackByWedstrijd);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.wedstrijden.length === 0);
  }
}
let WedstrijdenComponent = /*#__PURE__*/(() => {
  class WedstrijdenComponent {
    constructor(wedstrijdenService) {
      this.wedstrijdenService = wedstrijdenService;
      this.wedstrijden = [];
      this.isLoading = true;
      this.errorMessage = null;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    }
    ngOnInit() {
      this.wedstrijdenService.getGespeeldeWedstrijden().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: wedstrijden => {
          // Sort by date, most recent first
          this.wedstrijden = wedstrijden.sort((a, b) => {
            // Datum is now a Date object, so compare directly
            if (!a.datum || !b.datum) return 0;
            return b.datum.getTime() - a.datum.getTime();
          });
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Fout bij het laden van wedstrijden.';
          this.isLoading = false;
        }
      });
    }
    trackByWedstrijd(_index, w) {
      return w.datum ? w.datum.toISOString() : `${w.seizoen ?? ''}-${w.id ?? _index}`;
    }
    static {
      this.ɵfac = function WedstrijdenComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WedstrijdenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_3__.WedstrijdenService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: WedstrijdenComponent,
        selectors: [["app-wedstrijden"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 3,
        consts: [[1, "wedstrijden-container"], ["message", "Wedstrijden laden...", 4, "ngIf"], ["class", "error-banner mat-elevation-z2", 4, "ngIf"], [4, "ngIf"], ["message", "Wedstrijden laden..."], [1, "error-banner", "mat-elevation-z2"], ["mat-icon-button", "", 3, "click"], ["class", "wedstrijd-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["icon", "sports_soccer", "message", "Nog geen gespeelde wedstrijden met uitslag.", 4, "ngIf"], [1, "wedstrijd-card"], [1, "wedstrijd-header"], [1, "wedstrijd-teams"], [1, "team", "team-wit"], ["src", "assets/images/football-shirt-white.png", "alt", "Team Wit"], [4, "ngFor", "ngForOf"], [1, "wedstrijd-score"], [1, "team", "team-rood"], ["src", "assets/images/football-shirt-red.png", "alt", "Team Rood"], [1, "wedstrijd-locatie"], [1, "wedstrijd-specials"], ["class", "team-generatie", 3, "automatisch", "handmatig", 4, "ngIf"], [3, "margin-left", 4, "ngIf"], ["style", "margin-left:1rem;", 4, "ngIf"], [1, "team-generatie"], ["class", "auto-icon", 4, "ngIf"], ["class", "manual-icon", 4, "ngIf"], [1, "auto-icon"], [1, "manual-icon"], [2, "margin-left", "1rem"], ["icon", "sports_soccer", "message", "Nog geen gespeelde wedstrijden met uitslag."]],
        template: function WedstrijdenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WedstrijdenComponent_app_loading_state_1_Template, 1, 0, "app-loading-state", 1)(2, WedstrijdenComponent_div_2_Template, 8, 1, "div", 2)(3, WedstrijdenComponent_ng_container_3_Template, 3, 3, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage);
          }
        },
        dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_0__.LoadingStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_1__.PlayerNamePipe, _empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_2__.EmptyStateComponent],
        styles: [".wedstrijden-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 1rem;\n}\n\n.wedstrijd-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n  padding: 1.5rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.wedstrijd-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #1976d2;\n}\n\n.wedstrijd-teams[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.25rem;\n}\n\n.team[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 200px;\n  min-width: 120px;\n  max-width: 200px;\n}\n\n.team-rood[_ngcontent-%COMP%], .team-wit[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n}\n\n.team-rood[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team-wit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n.wedstrijd-score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #333;\n  white-space: nowrap;\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px;\n  text-align: center;\n}\n\n.wedstrijd-locatie[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #616161;\n}\n\n.team-generatie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.team-generatie.automatisch[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.team-generatie.automatisch[_ngcontent-%COMP%]   .auto-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.team-generatie.handmatig[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.team-generatie.handmatig[_ngcontent-%COMP%]   .manual-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (max-width: 500px) {\n  .wedstrijden-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .wedstrijd-card[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n  .wedstrijd-teams[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .team[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    max-width: 100%;\n    justify-content: center;\n  }\n  .wedstrijd-score[_ngcontent-%COMP%] {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWRzdHJpamRlbi93ZWRzdHJpamRlbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JDTmU7RURPZixtQkFBQTtFQUNBLHdDQ1VrQjtFRFRsQixtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQU5GOztBQVNBO0VBQ0UsZ0JDOEJpQjtFRDdCakIsbUJDa0JhO0VEakJiLGNDMUJjO0FEb0JoQjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JDV2E7QURqQmY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkNYYztFRFlkLGdCQ0hpQjtFRElqQixXQXhETTtFQXlETixtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkMxQmE7RUQyQmIsY0NuRWdCO0FENkRsQjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFORjtBQVFFO0VBQ0UsY0MxRWE7QURvRWpCO0FBT0k7RUFDRSxjQzVFVztFRDZFWCxlQ3RDVztFRHVDWCxXQUFBO0VBQ0EsWUFBQTtBQUxOO0FBU0U7RUFDRSxjQ3ZGWTtBRGdGaEI7QUFRSTtFQUNFLGNDekZVO0VEMEZWLGVDaERXO0VEaURYLFdBQUE7RUFDQSxZQUFBO0FBTk47O0FBWUE7RUFDRTtJQUNFLGVBQUE7RUFURjtFQVdBO0lBQ0Usb0JBQUE7RUFURjtFQVdBO0lBQ0Usc0JBQUE7SUFDQSxXQUFBO0VBVEY7RUFXQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBVEY7RUFXQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQVRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXNfdmFyaWFibGVzJztcclxuXHJcbi8vIExva2FsZSB2YXJpYWJlbGVuXHJcbiRzY29yZTogIzMzMztcclxuXHJcbi8vIC5sb2FkaW5nLXNwaW5uZXIgc3R5bGluZyBpcyBudSBnbG9iYWFsIGluIHN0eWxlcy5zY3NzXHJcblxyXG4ud2Vkc3RyaWpkZW4tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi53ZWRzdHJpamQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogJGxpZ2h0LWJnO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogJGNhcmQtc2hhZG93O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLndlZHN0cmlqZC1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ud2Vkc3RyaWpkLXRlYW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14bDtcclxufVxyXG5cclxuLnRlYW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4udGVhbS1yb29kLCAudGVhbS13aXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRlYW0tcm9vZCBpbWcsIC50ZWFtLXdpdCBpbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLndlZHN0cmlqZC1zY29yZSB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLTJ4bDtcclxuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XHJcbiAgY29sb3I6ICRzY29yZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2Vkc3RyaWpkLWxvY2F0aWUge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxuLnRlYW0tZ2VuZXJhdGllIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG5cclxuICAmLmF1dG9tYXRpc2NoIHtcclxuICAgIGNvbG9yOiAkc3VjY2Vzcy1kYXJrO1xyXG4gICAgLmF1dG8taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc3VjY2Vzcy1kYXJrO1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaGFuZG1hdGlnIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIC5tYW51YWwtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIHZlcmJldGVyaW5nZW5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IC8vIGN1c3RvbSBicmVha3BvaW50XHJcbiAgLndlZHN0cmlqZGVuLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG4gIC53ZWRzdHJpamQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICB9XHJcbiAgLndlZHN0cmlqZC10ZWFtcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIC50ZWFtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC53ZWRzdHJpamQtc2NvcmUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return WedstrijdenComponent;
})();

/***/ })

}]);
//# sourceMappingURL=833.js.map