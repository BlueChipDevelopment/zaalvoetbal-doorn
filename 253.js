"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[253],{

/***/ 77945:
/*!*********************************************************************!*\
  !*** ./src/app/components/loading-state/loading-state.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingStateComponent: () => (/* binding */ LoadingStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





function LoadingStateComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
let LoadingStateComponent = /*#__PURE__*/(() => {
  class LoadingStateComponent {
    constructor() {
      this.diameter = 50;
    }
    static {
      this.ɵfac = function LoadingStateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LoadingStateComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingStateComponent,
        selectors: [["app-loading-state"]],
        inputs: {
          message: "message",
          diameter: "diameter"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 2,
        consts: [[1, "loading-state"], ["mode", "indeterminate", 3, "diameter"], ["class", "message", 4, "ngIf"], [1, "message"]],
        template: function LoadingStateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadingStateComponent_p_2_Template, 2, 1, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", ctx.diameter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinner],
        styles: [".loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  gap: 0.75rem;\n}\n.loading-state[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXN0YXRlL2xvYWRpbmctc3RhdGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGO0FBRUU7RUFDRSxTQUFBO0VBQ0EseUJDRGE7RURFYixtQkM4Qlc7QUQ5QmYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXNfdmFyaWFibGVzJztcblxuLmxvYWRpbmctc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBnYXA6IDAuNzVyZW07XG4gIC5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5NzZkMjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNjE2MTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM0M2EwNDc7XHJcbiRzdWNjZXNzLWRhcms6ICAgIzJlN2QzMjtcclxuJGVycm9yLWNvbG9yOiAgICAjZjQ0MzM2O1xyXG4kZXJyb3ItZGFyazogICAgICNkMzJmMmY7XHJcbiRlcnJvci1saWdodC1iZzogI2ZmZWJlZTtcclxuJGxpZ2h0LWJnOiAgICAgICAjZmZmO1xyXG4kdGV4dC1jb2xvcjogICAgICMzMzM7ICAgICAgICAvLyBEb25rZXJlIHRla3N0IGtsZXVyIHZvb3IgaGVhZGVycyBlbiBiZWxhbmdyaWprZSB0ZWtzdFxyXG4kdGV4dC1zZWNvbmRhcnk6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJHRleHQtbXV0ZWQ6ICAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRib3JkZXItY29sb3I6ICAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbi8vIFRyb3BoeSB0aWVycyAoa2xhc3NlbWVudCB0b3AtMylcclxuJHRyb3BoeS1nb2xkOiAgICNmZmQ3MDA7XHJcbiR0cm9waHktc2lsdmVyOiAjYzBjMGMwO1xyXG4kdHJvcGh5LWJyb256ZTogI2NlODk0NjtcclxuXHJcbi8vIEFjaGlldmVtZW50IHRpZXJzIMOiwoDClCBoZXJnZWJydWlrIHRyb3BoeS1rbGV1cmVuLCB2b2VnIHBsYXRpbnVtIHRvZS5cclxuJHRpZXItYnJvbnplOiAgICR0cm9waHktYnJvbnplO1xyXG4kdGllci1zaWx2ZXI6ICAgJHRyb3BoeS1zaWx2ZXI7XHJcbiR0aWVyLWdvbGQ6ICAgICAkdHJvcGh5LWdvbGQ7XHJcbiR0aWVyLXBsYXRpbnVtOiAjYjlmMmZmO1xyXG5cclxuLy8gRWxldmF0aW9uXHJcbiRjYXJkLXNoYWRvdzogICAgICAgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJGNhcmQtc2hhZG93LWhvdmVyOiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4vLyBCcmVha3BvaW50cyDDosKAwpQgTWF0ZXJpYWwtYWxpZ25lZC4gR2VicnVpayB2aWEgQG1lZGlhIChtYXgtd2lkdGg6ICRicC0uLi4pLlxyXG4vLyAtIG1vYmlsZSAgOiBwaG9uZS1wb3J0cmFpdCArIHNtYWxsIHBob25lLWxhbmRzY2FwZVxyXG4vLyAtIHRhYmxldCAgOiB0YWJsZXQtcG9ydHJhaXRcclxuLy8gLSBkZXNrdG9wIDogdGFibGV0LWxhbmRzY2FwZSArIGRlc2t0b3BcclxuJGJwLW1vYmlsZTogIDYwMHB4O1xyXG4kYnAtdGFibGV0OiAgNzY4cHg7XHJcbiRicC1kZXNrdG9wOiAxMDI0cHg7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LW1haW46ICdSb2JvdG8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbi8vIEZvbnQgU2l6ZXNcclxuJGZvbnQtc2l6ZS14czogMC43NXJlbTsgICAgICAvLyAxMnB4XHJcbiRmb250LXNpemUtc206IDAuODc1cmVtOyAgICAgLy8gMTRweCAgXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgICAgICAgLy8gMTZweFxyXG4kZm9udC1zaXplLWxnOiAxLjEyNXJlbTsgICAgIC8vIDE4cHhcclxuJGZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAgICAvLyAyMHB4XHJcbiRmb250LXNpemUtMnhsOiAxLjVyZW07ICAgICAgLy8gMjRweFxyXG4kZm9udC1zaXplLTN4bDogMS44NzVyZW07ICAgIC8vIDMwcHhcclxuJGZvbnQtc2l6ZS00eGw6IDJyZW07ICAgICAgICAvLyAzMnB4XHJcbiRmb250LXNpemUtNXhsOiAyLjVyZW07ICAgICAgLy8gNDBweFxyXG5cclxuLy8gRm9udCBXZWlnaHRzXHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuXHJcbi8vIExpbmUgSGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtdGlnaHQ6IDEuMjU7XHJcbiRsaW5lLWhlaWdodC1ub3JtYWw6IDEuNTtcclxuJGxpbmUtaGVpZ2h0LXJlbGF4ZWQ6IDEuNjI1OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return LoadingStateComponent;
})();

/***/ }),

/***/ 40237:
/*!*************************************************!*\
  !*** ./src/app/services/wedstrijden.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WedstrijdenService: () => (/* binding */ WedstrijdenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _data_sources_match_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-sources/match-data-source */ 34789);




let WedstrijdenService = /*#__PURE__*/(() => {
  class WedstrijdenService {
    constructor(dataSource) {
      this.dataSource = dataSource;
      this.wedstrijdenCache$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
      this.cacheTimestamp = 0;
      this.CACHE_DURATION = 3 * 60 * 1000;
    }
    getWedstrijden(filter) {
      return this.getCachedWedstrijden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(wedstrijden => this.applyFilter(wedstrijden, filter)));
    }
    getGespeeldeWedstrijden() {
      return this.getWedstrijden({
        gespeeld: true
      });
    }
    getToekomstigeWedstrijden() {
      return this.getWedstrijden({
        gespeeld: false
      });
    }
    getBeschikbareSeizoen() {
      return this.getCachedWedstrijden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(wedstrijden => {
        const seizoenMap = new Map();
        wedstrijden.filter(w => w.datum !== null).forEach(wedstrijd => {
          const seizoen = wedstrijd.seizoen;
          if (seizoen) {
            if (!seizoenMap.has(seizoen)) {
              seizoenMap.set(seizoen, {
                totaal: 0,
                gespeeld: 0
              });
            }
            const stats = seizoenMap.get(seizoen);
            stats.totaal++;
            if (wedstrijd.scoreWit !== null && wedstrijd.scoreRood !== null) {
              stats.gespeeld++;
            }
          }
        });
        return Array.from(seizoenMap.entries()).map(([seizoen, stats]) => ({
          seizoen,
          aantalWedstrijden: stats.totaal,
          aantalGespeeld: stats.gespeeld
        })).sort((a, b) => b.seizoen.localeCompare(a.seizoen));
      }));
    }
    getWedstrijdenVoorSeizoen(seizoen) {
      return this.getWedstrijden({
        seizoen
      });
    }
    refreshCache() {
      this.wedstrijdenCache$.next(null);
      this.cacheTimestamp = 0;
      return this.getCachedWedstrijden();
    }
    findWedstrijdBySeizoenAndNummer(seizoen, wedstrijdNummer) {
      return this.getCachedWedstrijden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(wedstrijden => wedstrijden.find(w => w.seizoen === seizoen && w.id === wedstrijdNummer) || null));
    }
    addWedstrijd(wedstrijd) {
      return this.dataSource.add(wedstrijd).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Error adding wedstrijd:', error);
        throw error;
      }));
    }
    updateWedstrijd(wedstrijd) {
      return this.dataSource.update(wedstrijd).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Error updating wedstrijd:', error);
        throw error;
      }));
    }
    /**
     * Bulk-update score + zlatan voor één wedstrijd. Vervangt de directe
     * `batchUpdateSheet`-aanroep in score.component.
     */
    updateScore(matchId, scoreWhite, scoreRed, zlatanPlayerId) {
      return this.dataSource.updateScore(matchId, scoreWhite, scoreRed, zlatanPlayerId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Error updating score:', error);
        throw error;
      }));
    }
    /**
     * Update team-rosters (id-arrays) + generatietype + optionele voorbeschouwing.
     * Vervangt de directe `batchUpdateSheet`-aanroep in team-generator.component.
     */
    updateTeams(matchId, teamWit, teamRood, teamGeneration, voorbeschouwing) {
      return this.dataSource.updateTeams(matchId, teamWit, teamRood, teamGeneration, voorbeschouwing).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Error updating teams:', error);
        throw error;
      }));
    }
    getCachedWedstrijden() {
      const now = Date.now();
      const cachedData = this.wedstrijdenCache$.value;
      if (cachedData && now - this.cacheTimestamp < this.CACHE_DURATION) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(cachedData);
      }
      return this.dataSource.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(wedstrijden => {
        this.wedstrijdenCache$.next(wedstrijden);
        this.cacheTimestamp = now;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Error fetching wedstrijden data:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
    }
    applyFilter(wedstrijden, filter) {
      if (!filter) return wedstrijden;
      let filtered = wedstrijden;
      if (filter.seizoen) {
        filtered = filtered.filter(w => w.seizoen === filter.seizoen);
      }
      if (filter.gespeeld !== undefined) {
        filtered = filtered.filter(w => {
          const isGespeeld = w.scoreWit !== null && w.scoreRood !== null;
          return filter.gespeeld ? isGespeeld : !isGespeeld;
        });
      }
      return filtered;
    }
    static {
      this.ɵfac = function WedstrijdenService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WedstrijdenService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_data_sources_match_data_source__WEBPACK_IMPORTED_MODULE_0__.MatchDataSource));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: WedstrijdenService,
        factory: WedstrijdenService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return WedstrijdenService;
})();

/***/ })

}]);
//# sourceMappingURL=253.js.map