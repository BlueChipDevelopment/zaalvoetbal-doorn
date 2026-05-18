"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[309],{

/***/ 58464:
/*!*****************************************!*\
  !*** ./src/app/enums/positions.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Positions: () => (/* binding */ Positions)
/* harmony export */ });
var Positions = /*#__PURE__*/function (Positions) {
  Positions["PLAYER"] = "Speler";
  Positions["GOAL_KEEPER"] = "Keeper";
  return Positions;
}(Positions || {});

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

/***/ }),

/***/ 69309:
/*!***************************************************!*\
  !*** ./src/app/services/team-generate.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamGenerateService: () => (/* binding */ TeamGenerateService)
/* harmony export */ });
/* harmony import */ var _enums_positions_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/positions.enum */ 58464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-utils */ 96098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _game_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.statistics.service */ 94165);





let TeamGenerateService = /*#__PURE__*/(() => {
  class TeamGenerateService {
    constructor(gameStatisticsService) {
      this.gameStatisticsService = gameStatisticsService;
      this.generatedTeams = [];
      this.lastGenerationResult = null;
    }
    generateTeams(players) {
      if (!players || players.length === 0) {
        return null;
      }
      const result = this.completeTeamGeneration(players);
      this.lastGenerationResult = result;
      return result;
    }
    getLastGenerationResult() {
      return this.lastGenerationResult;
    }
    completeTeamGeneration(players) {
      const goalKeepers = players.filter(player => player.position === _enums_positions_enum__WEBPACK_IMPORTED_MODULE_0__.Positions.GOAL_KEEPER);
      const fieldPlayers = players.filter(player => player.position !== _enums_positions_enum__WEBPACK_IMPORTED_MODULE_0__.Positions.GOAL_KEEPER);
      // Keeper verdeling: bij 2 keepers → 1 per team. Bij 0 of 1 → keeper als veldspeler.
      // Bij 3+ keepers: 1 per team, rest als veldspeler.
      let keeperWhite = null;
      let keeperRed = null;
      let extraFieldPlayers = [];
      let keepersLocked = false;
      if (goalKeepers.length >= 2) {
        // Shuffle keepers for random assignment
        const shuffledKeepers = this.shuffle([...goalKeepers]);
        keeperWhite = shuffledKeepers[0];
        keeperRed = shuffledKeepers[1];
        extraFieldPlayers = shuffledKeepers.slice(2); // Rest als veldspeler
        keepersLocked = true;
      } else {
        // 0 of 1 keeper: behandel als veldspeler
        extraFieldPlayers = [...goalKeepers];
      }
      const allFieldPlayers = [...fieldPlayers, ...extraFieldPlayers];
      // Collect form adjustments
      const formAdjustments = [];
      // Calculate effective rating for each field player
      const playerScores = allFieldPlayers.map(player => {
        const formMultiplier = this.calculateRecentForm(player);
        const adjustedRating = player.rating * formMultiplier;
        if (formMultiplier > 1.3 || formMultiplier < 0.7) {
          formAdjustments.push({
            playerName: player.name,
            originalRating: player.rating,
            adjustedRating: Number(adjustedRating.toFixed(1)),
            formMultiplier: Number(formMultiplier.toFixed(2))
          });
        }
        return {
          player,
          adjustedRating
        };
      });
      // Brute-force: vind de optimale verdeling
      const n = allFieldPlayers.length;
      const halfSize = Math.floor(n / 2);
      let bestDifference = Infinity;
      let bestCombinations = [];
      let totalDifference = 0;
      let combinationsChecked = 0;
      const totalScore = playerScores.reduce((sum, ps) => sum + ps.adjustedRating, 0);
      // Generate all combinations of size halfSize from n players
      const indices = Array.from({
        length: n
      }, (_, i) => i);
      const generateCombinations = (start, combo) => {
        if (combo.length === halfSize) {
          combinationsChecked++;
          const teamAScore = combo.reduce((sum, idx) => sum + playerScores[idx].adjustedRating, 0);
          const teamBScore = totalScore - teamAScore;
          const diff = Math.abs(teamAScore - teamBScore);
          totalDifference += diff;
          if (diff < bestDifference) {
            bestDifference = diff;
            bestCombinations = [combo.slice()];
          } else if (diff === bestDifference) {
            bestCombinations.push(combo.slice());
          }
          return;
        }
        const remaining = halfSize - combo.length;
        for (let i = start; i <= n - remaining; i++) {
          combo.push(i);
          generateCombinations(i + 1, combo);
          combo.pop();
        }
      };
      generateCombinations(0, []);
      // Random keuze bij gelijke scores voor variatie
      const chosenCombo = bestCombinations[Math.floor(Math.random() * bestCombinations.length)];
      const averageDifference = combinationsChecked > 0 ? totalDifference / combinationsChecked : 0;
      // Build teams
      const teamWhiteFieldPlayers = [];
      const teamRedFieldPlayers = [];
      const chosenSet = new Set(chosenCombo);
      for (let i = 0; i < n; i++) {
        if (chosenSet.has(i)) {
          teamWhiteFieldPlayers.push(allFieldPlayers[i]);
        } else {
          teamRedFieldPlayers.push(allFieldPlayers[i]);
        }
      }
      const whiteSquad = keeperWhite ? [keeperWhite, ...teamWhiteFieldPlayers] : [...teamWhiteFieldPlayers];
      const redSquad = keeperRed ? [keeperRed, ...teamRedFieldPlayers] : [...teamRedFieldPlayers];
      const teamWhite = this.buildTeam('Team Wit', 'white', whiteSquad);
      const teamRed = this.buildTeam('Team Rood', 'red', redSquad);
      this.generatedTeams = [teamWhite, teamRed];
      return {
        teams: [teamWhite, teamRed],
        combinationsChecked,
        scoreDifference: Number(bestDifference.toFixed(1)),
        averageDifference: Number(averageDifference.toFixed(1)),
        formAdjustments,
        keepersLocked
      };
    }
    buildTeam(name, shirtcolor, squad) {
      const sumOfRatings = squad.reduce((sum, p) => sum + (p.rating || 0), 0);
      const totalScore = this.calculateTeamScoreFromPlayers(squad);
      const chemistryScore = this.calculateTeamChemistryFromPlayers(squad);
      return {
        name,
        squad,
        totalScore,
        shirtcolor,
        attack: 0,
        defense: 0,
        condition: 0,
        sumOfRatings,
        chemistryScore
      };
    }
    recalculateTeamScores(team) {
      team.sumOfRatings = team.squad.reduce((sum, p) => sum + (p.rating || 0), 0);
      team.totalScore = this.calculateTeamScoreFromPlayers(team.squad);
      team.chemistryScore = this.calculateTeamChemistryFromPlayers(team.squad);
    }
    cleanGeneratedTeams() {
      this.generatedTeams = [];
      this.lastGenerationResult = null;
    }
    getGeneratedTeams() {
      return this.generatedTeams;
    }
    getFullPlayerStats(season) {
      return this.gameStatisticsService.getFullPlayerStats(season);
    }
    getCurrentSeasonPlayerStats() {
      return this.gameStatisticsService.getCurrentSeason().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(currentSeason => {
        return this.gameStatisticsService.getFullPlayerStats(currentSeason);
      }));
    }
    // Helper method to shuffle an array
    shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    // Calculate player's recent form based on last 5 games (0.5 to 1.5 multiplier)
    calculateRecentForm(player) {
      if (!player.gameHistory || player.gameHistory.length === 0) {
        return 1.0; // Neutral form for players without history
      }
      // Get last 5 games, sorted by date (most recent first)
      const recentGames = [...player.gameHistory].sort((a, b) => {
        const dateA = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(a.date);
        const dateB = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(b.date);
        if (!dateA || !dateB) return 0;
        return dateB.getTime() - dateA.getTime();
      }).slice(0, 5);
      if (recentGames.length === 0) return 1.0;
      // Calculate form based on results (3=win, 2=tie, 1=loss)
      const recentPoints = recentGames.reduce((sum, game) => sum + game.result, 0);
      const maxPossible = recentGames.length * 3;
      const formRatio = recentPoints / maxPossible;
      // Convert to multiplier between 0.5 (very poor form) and 1.5 (excellent form)
      return 0.5 + formRatio * 1.0;
    }
    getPlayerStatsFromCache(playerName) {
      return this.gameStatisticsService.getPlayerStatsByName(playerName) || null;
    }
    // Calculate team chemistry from Player objects directly (no cache dependency)
    calculateTeamChemistryFromPlayers(squad) {
      if (squad.length <= 1) return 0;
      let positionBonus = 0;
      let ratingSum = 0;
      for (const player of squad) {
        if (player.position === _enums_positions_enum__WEBPACK_IMPORTED_MODULE_0__.Positions.GOAL_KEEPER.toString() || player.position === _enums_positions_enum__WEBPACK_IMPORTED_MODULE_0__.Positions.GOAL_KEEPER) {
          positionBonus += 0.2;
        } else {
          positionBonus += 0.5;
        }
        ratingSum += player.rating || 0;
      }
      const teamSizeFactor = Math.min(squad.length / 11, 1);
      const averageRating = squad.length > 0 ? ratingSum / squad.length : 5;
      const ratingFactor = averageRating / 10;
      const chemistryValue = 3 * teamSizeFactor + positionBonus + 2 * ratingFactor;
      return Number(chemistryValue.toFixed(2));
    }
    // Calculate team score from Player objects directly (no cache dependency)
    calculateTeamScoreFromPlayers(squad) {
      if (!squad.length) return 0;
      let totalScore = 0;
      for (const player of squad) {
        if (player && player.rating) {
          const formMultiplier = this.calculateRecentForm(player);
          const adjustedRating = player.rating * formMultiplier;
          totalScore += adjustedRating;
        }
      }
      return totalScore;
    }
    static {
      this.ɵfac = function TeamGenerateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TeamGenerateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_game_statistics_service__WEBPACK_IMPORTED_MODULE_2__.GameStatisticsService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: TeamGenerateService,
        factory: TeamGenerateService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TeamGenerateService;
})();

/***/ })

}]);
//# sourceMappingURL=309.js.map