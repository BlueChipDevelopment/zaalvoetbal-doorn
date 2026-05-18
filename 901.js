"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[901],{

/***/ 73901:
/*!*****************************************************!*\
  !*** ./src/app/components/score/score.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoreComponent: () => (/* binding */ ScoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/date-utils */ 96098);
/* harmony import */ var _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-match-info/next-match-info.component */ 11673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player-card/player-card.component */ 24137);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_next_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/next-match.service */ 5067);
/* harmony import */ var _services_game_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game.statistics.service */ 94165);
/* harmony import */ var _services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/wedstrijden.service */ 40237);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);































function ScoreComponent_app_loading_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading-state", 4);
  }
}
function ScoreComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScoreComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function ScoreComponent_div_3_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", player_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", player_r4.name, " ");
  }
}
function ScoreComponent_div_3_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-player-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", player_r5)("shirtColor", "white");
  }
}
function ScoreComponent_div_3_div_22_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-player-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", player_r6)("shirtColor", "red");
  }
}
function ScoreComponent_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "mat-card", 17)(2, "mat-card-header")(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Team Wit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ScoreComponent_div_3_div_22_div_6_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card", 17)(8, "mat-card-header")(9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Team Rood");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ScoreComponent_div_3_div_22_div_12_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.teamWhitePlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.teamRedPlayers);
  }
}
function ScoreComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-next-match-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 8)(3, "mat-form-field", 9)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Score Wit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScoreComponent_div_3_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.whiteGoals, $event) || (ctx_r1.whiteGoals = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 9)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Score Rood");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScoreComponent_div_3_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.redGoals, $event) || (ctx_r1.redGoals = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-form-field", 9)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Zlatan");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ScoreComponent_div_3_Template_mat_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selectedZlatanId, $event) || (ctx_r1.selectedZlatanId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "-- Geen --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ScoreComponent_div_3_mat_option_17_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ScoreComponent_div_3_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitScores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " OPSLAAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ScoreComponent_div_3_div_22_Template, 13, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nextMatchInfo", ctx_r1.nextMatchInfo)("matchNumber", ctx_r1.nextMatch.matchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.whiteGoals);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.redGoals);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedZlatanId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.participatingPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.whiteGoals === null || ctx_r1.redGoals === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.participatingPlayers.length > 0);
  }
}
function ScoreComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Alle wedstrijden zijn gespeeld of er zijn geen wedstrijden gepland.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
let ScoreComponent = /*#__PURE__*/(() => {
  class ScoreComponent {
    constructor(_snackBar, router, nextMatchService, gameStatisticsService, wedstrijdenService, snackbar) {
      this._snackBar = _snackBar;
      this.router = router;
      this.nextMatchService = nextMatchService;
      this.gameStatisticsService = gameStatisticsService;
      this.wedstrijdenService = wedstrijdenService;
      this.snackbar = snackbar;
      this.nextMatch = null;
      this.nextMatchInfo = null;
      this.teamWhitePlayers = [];
      this.teamRedPlayers = [];
      /** Spelers (Player objecten met id) die in beide teams zitten — gebruikt door de Zlatan-dropdown. */
      this.participatingPlayers = [];
      this.whiteGoals = null;
      this.redGoals = null;
      this.selectedZlatanId = null;
      this.isLoading = true;
      this.errorMessage = null;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.DestroyRef);
    }
    ngOnInit() {
      this.loadNextMatch();
    }
    loadNextMatch() {
      this.isLoading = true;
      this.errorMessage = null;
      this.nextMatch = null;
      this.whiteGoals = null;
      this.redGoals = null;
      this.selectedZlatanId = null;
      this.participatingPlayers = [];
      // Haal eerst alle spelersstats op via gameStatisticsService
      this.gameStatisticsService.getFullPlayerStats().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: playerStats => {
          this.nextMatchService.getNextMatchInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: info => {
              this.nextMatchInfo = info;
              if (info && info.wedstrijd) {
                const wedstrijd = info.wedstrijd;
                this.nextMatch = {
                  matchNumber: wedstrijd.id ?? 0,
                  date: info.parsedDate ? (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateTimeISO)() : info.date,
                  teamWhitePlayerIds: wedstrijd.teamWit ?? [],
                  teamRedPlayerIds: wedstrijd.teamRood ?? [],
                  teamWhiteGoals: wedstrijd.scoreWit ?? undefined,
                  teamRedGoals: wedstrijd.scoreRood ?? undefined,
                  zlatanPlayerId: wedstrijd.zlatanPlayerId,
                  rowNumber: info.rowNumber // direct uit NextMatchInfo
                };
                // Bouw de player objecten voor de cards
                if (this.nextMatch) {
                  this.teamWhitePlayers = this.parsePlayers(this.nextMatch.teamWhitePlayerIds, playerStats);
                  this.teamRedPlayers = this.parsePlayers(this.nextMatch.teamRedPlayerIds, playerStats);
                  // Combineer unieke spelers (op id) voor de dropdown
                  const seen = new Set();
                  this.participatingPlayers = [...this.teamWhitePlayers, ...this.teamRedPlayers].filter(p => {
                    if (typeof p.id !== 'number' || seen.has(p.id)) return false;
                    seen.add(p.id);
                    return true;
                  });
                }
                this.isLoading = false;
              } else {
                this.errorMessage = 'Geen aankomende wedstrijd gevonden.';
                this.isLoading = false;
              }
            },
            error: error => {
              this.errorMessage = 'Fout bij het laden van wedstrijden.';
              this.isLoading = false;
            }
          });
        },
        error: error => {
          this.errorMessage = 'Fout bij het laden van spelers.';
          this.isLoading = false;
        }
      });
    }
    /**
     * Zet een array van player-ids om naar een array van Player objecten via playerStats lookup.
     */
    parsePlayers(playerIds, playerStats) {
      return (playerIds ?? []).map(id => {
        const match = playerStats.find(p => p.id === id);
        if (!match) {
          console.warn('No match for player id:', id, 'in playerStats');
          return {
            id,
            name: '',
            position: '',
            rating: 0
          };
        }
        return match;
      }).filter(p => !!p.name);
    }
    submitScores() {
      if (this.nextMatch && this.whiteGoals !== null && this.redGoals !== null) {
        const rowIndexToUpdate = this.nextMatch.rowNumber;
        if (!rowIndexToUpdate) {
          this.snackbar.error('Kan wedstrijd niet identificeren voor het opslaan van scores.');
          return;
        }
        // Extra validatie: controleer of we de juiste wedstrijd hebben
        const matchNumber = this.nextMatch.matchNumber;
        const seizoen = this.nextMatchInfo?.wedstrijd?.seizoen;
        const absoluteId = this.nextMatchInfo?.wedstrijd?.id; // Gebruik het absolute ID voor vergelijking
        if (seizoen && absoluteId) {
          // Dubbele controle via wedstrijdenService
          this.nextMatchService.getNextMatchInfo().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef)).subscribe({
            next: currentMatchInfo => {
              // Vergelijk op seizoen + absolute ID (stabiel)
              if (currentMatchInfo?.wedstrijd?.seizoen === seizoen && currentMatchInfo?.wedstrijd?.id === absoluteId) {
                // Veilig om scores op te slaan
                this.performScoreUpdate(rowIndexToUpdate);
              } else {
                this.snackbar.info('Wedstrijdgegevens zijn veranderd. Herlaad de pagina.');
              }
            },
            error: () => {
              // Fallback: gebruik de oorspronkelijke methode
              this.performScoreUpdate(rowIndexToUpdate);
            }
          });
        } else {
          // Fallback voor bestaande wedstrijden zonder seizoen of ID
          this.performScoreUpdate(rowIndexToUpdate);
        }
      } else {
        this.snackbar.info('Vul eerst beide scores in.');
      }
    }
    performScoreUpdate(rowIndexToUpdate) {
      const matchNumber = this.nextMatch?.matchNumber;
      const seizoen = this.nextMatchInfo?.wedstrijd?.seizoen;
      const matchId = this.nextMatchInfo?.wedstrijd?.id;
      console.log(`💾 Scores opslaan - Seizoen: ${seizoen || 'onbekend'}, Wedstrijd: ${matchNumber}, ID: ${matchId}`);
      if (!matchId) {
        console.error('❌ Geen match-id beschikbaar voor score-update');
        this.snackbar.error('Fout: kon wedstrijd niet identificeren.');
        return;
      }
      // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
      // gebruiker wegnavigeert voor de response binnen is.
      this.wedstrijdenService.updateScore(matchId, this.whiteGoals, this.redGoals, this.selectedZlatanId).subscribe({
        next: () => {
          console.log(`✅ Scores succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
          this._snackBar.open('Scores en Zlatan succesvol opgeslagen!', 'OK', {
            duration: 3000,
            panelClass: ['futsal-notification', 'futsal-notification-success']
          }).afterDismissed().subscribe(() => {
            this.router.navigate(['/klassement']);
          });
        },
        error: error => {
          console.error(`❌ Fout bij opslaan scores voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, error);
          this.snackbar.error('Fout bij opslaan. Probeer het opnieuw.');
        }
      });
    }
    static {
      this.ɵfac = function ScoreComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_next_match_service__WEBPACK_IMPORTED_MODULE_4__.NextMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_game_statistics_service__WEBPACK_IMPORTED_MODULE_5__.GameStatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_6__.WedstrijdenService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: ScoreComponent,
        selectors: [["app-score"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 4,
        consts: [[1, "score-container"], ["message", "Laden van volgende wedstrijd...", 4, "ngIf"], ["class", "error-banner mat-elevation-z2", 4, "ngIf"], [4, "ngIf"], ["message", "Laden van volgende wedstrijd..."], [1, "error-banner", "mat-elevation-z2"], ["mat-icon-button", "", 3, "click"], [3, "nextMatchInfo", "matchNumber"], [1, "score-inputs"], ["subscriptSizing", "dynamic", "appearance", "fill"], ["matInput", "", "type", "number", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["name", "zlatanSelect", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-fab", "", "extended", "", 1, "futsal-doorn-btn", 3, "click", "disabled"], ["class", "teams-container", 4, "ngIf"], [1, "teams-container"], [1, "team-card"], ["mat-card-title", ""], [4, "ngFor", "ngForOf"], [3, "player", "shirtColor"]],
        template: function ScoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ScoreComponent_app_loading_state_1_Template, 1, 0, "app-loading-state", 1)(2, ScoreComponent_div_2_Template, 8, 1, "div", 2)(3, ScoreComponent_div_3_Template, 23, 9, "div", 3)(4, ScoreComponent_div_4_Template, 3, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.nextMatch);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && !ctx.nextMatch);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _next_match_info_next_match_info_component__WEBPACK_IMPORTED_MODULE_1__.NextMatchInfoComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_2__.LoadingStateComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatFabButton, _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_3__.PlayerCardComponent],
        styles: [".score-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.score-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.score-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.score-inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n@media (max-width: 600px) {\n  .score-inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .score-inputs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.player-card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n}\n\n.player-card-image-white[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-white.png');\n  background-size: cover;\n}\n\n.player-card-image-red[_ngcontent-%COMP%] {\n  background-image: url('football-shirt-red.png');\n  background-size: cover;\n}\n\n.player-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.teams-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.team-card[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: fit-content;\n  margin-bottom: 20px;\n  background-color: transparent;\n  box-shadow: none;\n}\n.team-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   div[mat-card-title][_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.team-card[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 5px 0;\n}\n\n.futsal-doorn-btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: auto;\n  padding: 0 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY29yZS9zY29yZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUVFLGdCQUFBO0FBRko7O0FBT0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFKRjtFQU1FO0lBQ0UsZ0JBQUE7RUFKSjtBQUNGO0FBUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JDcENlO0FEOEJqQjs7QUFTQTtFQUNFLGlEQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFTQTtFQUNFLCtDQUFBO0VBQ0Esc0JBQUE7QUFORjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVRO0VBQ0ksb0JBQUE7QUFSWjs7QUFjQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBWEo7O0FBY0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWEYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXNfdmFyaWFibGVzJztcclxuXHJcbi5zY29yZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2NvcmUtY29udGFpbmVyIGgyLCBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zY29yZS1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIENlbnRlciB0aGUgaXRlbXMgaG9yaXpvbnRhbGx5XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gQWxpZ24gaXRlbXMgdmVydGljYWxseSBpbiB0aGUgY2VudGVyXHJcbiAgZ2FwOiAxNXB4OyAvLyBBZGp1c3QgZ2FwIGJldHdlZW4gaXRlbXNcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDsgLy8gQWxsb3cgaXRlbXMgdG8gd3JhcCBvbnRvIHRoZSBuZXh0IGxpbmVcclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIG1pbi13aWR0aCBhcyBuZWVkZWQgZm9yIHJlc3BvbnNpdmVuZXNzXHJcbiAgICBtaW4td2lkdGg6IDE1MHB4OyAvLyBFeGFtcGxlOiBzZXQgYSBtaW5pbXVtIHdpZHRoXHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3Igc21hbGxlciBzY3JlZW5zXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnAtbW9iaWxlKSB7XHJcbiAgLnNjb3JlLWlucHV0cyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvLyBTdGFjayBpdGVtcyB2ZXJ0aWNhbGx5XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvLyBDZW50ZXIgaXRlbXMgaW4gdGhlIGNvbHVtblxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7IC8vIEFkZCBzcGFjZSBhYm92ZSB0aGUgYnV0dG9uIHdoZW4gc3RhY2tlZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBsYXllci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7IC8vIFNldCBleHBsaWNpdCB3aWR0aCBpbnN0ZWFkIG9mIG1pbi13aWR0aFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IC8vIENlbnRlciB0aGUgY2FyZCB3aXRoaW4gaXRzIGNvbnRhaW5lciBpZiBuZWVkZWRcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJnOyBcclxufVxyXG5cclxuLnBsYXllci1jYXJkLWltYWdlLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9vdGJhbGwtc2hpcnQtd2hpdGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnBsYXllci1jYXJkLWltYWdlLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3RiYWxsLXNoaXJ0LXJlZC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vLyBFbnN1cmUgbWF0LWNhcmQtaGVhZGVyIGVsZW1lbnRzIGFsaWduIGl0ZW1zIGNvcnJlY3RseVxyXG4ucGxheWVyLWNhcmQgbWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luOiAwIDhweDsgLy8gQWRqdXN0IHNwYWNpbmcgaWYgbmVlZGVkXHJcbn1cclxuXHJcbi50ZWFtcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsgLy8gUmVzdG9yZSBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLy8gUmVzdG9yZSBqdXN0aWZ5LWNvbnRlbnRcclxuICAgIGdhcDogMjBweDsgLy8gUmVzdG9yZSBnYXBcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgLy8gUmVzdG9yZSBmbGV4LXdyYXBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8vIFJlc3RvcmUgbWFyZ2luLWJvdHRvbVxyXG59XHJcblxyXG4udGVhbS1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7IC8vIEtlZXAgbWluaW11bSB3aWR0aFxyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50OyAvLyBTZXQgd2lkdGggYmFzZWQgb24gY29udGVudFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLy8gQWRkIG1hcmdpbiBiZWxvdyBjYXJkc1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8vIFJlbW92ZSB3aGl0ZSBiYWNrZ3JvdW5kXHJcbiAgICBib3gtc2hhZG93OiBub25lOyAvLyBSZW1vdmUgYm94LXNoYWRvdyBmcm9tIHRlYW0gY2FyZHNcclxuXHJcbiAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGRpdlttYXQtY2FyZC10aXRsZV0geyAvLyBUYXJnZXQgdGhlIHRpdGxlIGRpdiBzcGVjaWZpY2FsbHlcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7IC8vIEFkZCBwYWRkaW5nIGJlbG93IHRoZSB0aXRsZSB0ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGp1c3RtZW50cyBmb3IgbGlzdCBpdGVtcyBpbnNpZGUgY2FyZHMgaWYgbmVlZGVkXHJcbi50ZWFtLWNhcmQgbWF0LWxpc3QtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87IC8vIEFkanVzdCBoZWlnaHQgaWYgcGxheWVyIG5hbWVzIHdyYXBcclxuICAgIHBhZGRpbmc6IDVweCAwOyAvLyBBZGQgc29tZSBwYWRkaW5nXHJcbn1cclxuXHJcbi5mdXRzYWwtZG9vcm4tYnRuIHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ScoreComponent;
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
//# sourceMappingURL=901.js.map