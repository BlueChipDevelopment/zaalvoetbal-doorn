"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[471],{

/***/ 89047:
/*!*****************************************************!*\
  !*** ./src/app/services/achievement-definitions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACHIEVEMENT_DEFINITIONS: () => (/* binding */ ACHIEVEMENT_DEFINITIONS)
/* harmony export */ });
const ACHIEVEMENT_DEFINITIONS = [{
  key: 'matches_played',
  category: 'milestone',
  title: 'Veteraan',
  description: 'Aantal gespeelde wedstrijden.',
  icon: 'directions_run',
  tiers: [{
    tier: 'bronze',
    threshold: 10
  }, {
    tier: 'silver',
    threshold: 50
  }, {
    tier: 'gold',
    threshold: 100
  }, {
    tier: 'platinum',
    threshold: 250
  }]
}, {
  key: 'matches_won',
  category: 'milestone',
  title: 'Winnaar',
  description: 'Aantal gewonnen wedstrijden.',
  icon: 'emoji_events',
  tiers: [{
    tier: 'bronze',
    threshold: 10
  }, {
    tier: 'silver',
    threshold: 50
  }, {
    tier: 'gold',
    threshold: 100
  }]
}, {
  key: 'zlatan_points',
  category: 'milestone',
  title: 'Zlatan',
  description: 'Totaal aantal Zlatan-punten.',
  icon: 'military_tech',
  tiers: [{
    tier: 'bronze',
    threshold: 5
  }, {
    tier: 'silver',
    threshold: 25
  }, {
    tier: 'gold',
    threshold: 50
  }]
}, {
  key: 'streak_3',
  category: 'streak',
  title: 'Hat-trick',
  description: '3 wedstrijden op rij gewonnen.',
  icon: 'local_fire_department'
}, {
  key: 'streak_5',
  category: 'streak',
  title: 'Onstuitbaar',
  description: '5 wedstrijden op rij gewonnen.',
  icon: 'local_fire_department'
}, {
  key: 'streak_7',
  category: 'streak',
  title: 'Legendarisch',
  description: '7 wedstrijden op rij gewonnen.',
  icon: 'local_fire_department'
}, {
  key: 'season_champion',
  category: 'season',
  title: 'Seizoenskampioen',
  description: 'Top-1 klassement van een afgerond seizoen.',
  icon: 'workspace_premium'
}, {
  key: 'season_podium',
  category: 'season',
  title: 'Podium',
  description: 'Top-3 klassement van een afgerond seizoen.',
  icon: 'looks_3'
}, {
  key: 'season_full_attend',
  category: 'season',
  title: 'Altijd aanwezig',
  description: 'Gespeeld in elke wedstrijd van een afgerond seizoen.',
  icon: 'event_available'
}];

/***/ }),

/***/ 57086:
/*!**************************************************!*\
  !*** ./src/app/services/achievements.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AchievementsService: () => (/* binding */ AchievementsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _achievement_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievement-definitions */ 89047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ 6455);
/* harmony import */ var _wedstrijden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wedstrijden.service */ 40237);
/* harmony import */ var _game_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.statistics.service */ 94165);







let AchievementsService = /*#__PURE__*/(() => {
  class AchievementsService {
    constructor(playerService, wedstrijdenService, statsService) {
      this.playerService = playerService;
      this.wedstrijdenService = wedstrijdenService;
      this.statsService = statsService;
    }
    getPlayerAchievements(playerId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
        matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
        stats: this.statsService.getFullPlayerStats(null),
        seasons: this.statsService.getAvailableSeasons(),
        current: this.statsService.getCurrentSeason()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
        matches,
        stats,
        seasons,
        current
      }) => {
        const completed = (seasons ?? []).filter(s => s !== current);
        const seasonStats$ = completed.length === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(completed.map(season => this.statsService.getFullPlayerStats(season).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(s => ({
          season,
          stats: s
        })))));
        return seasonStats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(perSeason => this.buildForPlayer(playerId, matches, stats, perSeason)));
      }));
    }
    getAllAchievements() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
        players: this.playerService.getPlayers(),
        matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
        stats: this.statsService.getFullPlayerStats(null),
        seasons: this.statsService.getAvailableSeasons(),
        current: this.statsService.getCurrentSeason()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
        players,
        matches,
        stats,
        seasons,
        current
      }) => {
        const completed = (seasons ?? []).filter(s => s !== current);
        const seasonStats$ = completed.length === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(completed.map(season => this.statsService.getFullPlayerStats(season).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(s => ({
          season,
          stats: s
        })))));
        return seasonStats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(perSeason => {
          const perPlayer = {};
          const ids = players.map(p => p.id).filter(id => typeof id === 'number');
          for (const id of ids) {
            perPlayer[id] = this.buildForPlayer(id, matches, stats, perSeason);
          }
          const summaries = this.summarize(perPlayer, ids.length);
          return {
            perPlayer,
            summaries
          };
        }));
      }));
    }
    getAchievementRecords() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
        players: this.playerService.getPlayers(),
        all: this.getAllAchievements()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
        players,
        all
      }) => {
        const nameById = new Map();
        players.forEach(p => {
          if (typeof p.id === 'number') nameById.set(p.id, p.name);
        });
        const groups = new Map();
        for (const [pidStr, list] of Object.entries(all.perPlayer)) {
          const playerId = Number(pidStr);
          const name = nameById.get(playerId);
          if (!name) continue;
          for (const a of list) {
            if (!a.tier) continue;
            const groupKey = `${a.key}:${a.tier}`;
            let group = groups.get(groupKey);
            if (!group) {
              group = {
                key: groupKey,
                title: a.title,
                description: a.description,
                icon: a.icon,
                category: a.category,
                tier: a.tier,
                holders: []
              };
              groups.set(groupKey, group);
            }
            const occurrenceCount = a.occurrences?.length ?? 1;
            group.holders.push({
              playerId,
              name,
              occurrenceCount
            });
          }
        }
        const catOrder = {
          milestone: 1,
          streak: 2,
          season: 3
        };
        const tierOrder = {
          platinum: 4,
          gold: 3,
          silver: 2,
          bronze: 1
        };
        const defOrder = new Map();
        _achievement_definitions__WEBPACK_IMPORTED_MODULE_0__.ACHIEVEMENT_DEFINITIONS.forEach((d, i) => defOrder.set(d.key, i));
        return Array.from(groups.values()).map(g => ({
          ...g,
          holders: [...g.holders].sort((a, b) => b.occurrenceCount - a.occurrenceCount || a.name.localeCompare(b.name))
        })).sort((a, b) => {
          const co = catOrder[a.category] - catOrder[b.category];
          if (co !== 0) return co;
          const baseA = a.key.split(':')[0];
          const baseB = b.key.split(':')[0];
          const da = defOrder.get(baseA) ?? 999;
          const db = defOrder.get(baseB) ?? 999;
          if (da !== db) return da - db;
          return tierOrder[b.tier] - tierOrder[a.tier];
        });
      }));
    }
    getTopChipsForPlayer(playerId, max) {
      return this.getAllAchievements().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
        perPlayer,
        summaries
      }) => {
        const summaryByKey = new Map(summaries.map(s => [`${s.key}:${s.tier ?? ''}`, s]));
        const own = (perPlayer[playerId] ?? []).filter(a => a.tier !== null);
        const tierOrder = {
          platinum: 4,
          gold: 3,
          silver: 2,
          bronze: 1
        };
        return [...own].sort((a, b) => {
          const ra = summaryByKey.get(`${a.key}:${a.tier ?? ''}`)?.rarity ?? 1;
          const rb = summaryByKey.get(`${b.key}:${b.tier ?? ''}`)?.rarity ?? 1;
          if (ra !== rb) return ra - rb;
          const ta = tierOrder[a.tier ?? ''] ?? 0;
          const tb = tierOrder[b.tier ?? ''] ?? 0;
          if (ta !== tb) return tb - ta;
          return a.key.localeCompare(b.key);
        }).slice(0, max);
      }));
    }
    summarize(perPlayer, totalPlayers) {
      const counts = new Map();
      for (const list of Object.values(perPlayer)) {
        for (const a of list) {
          if (a.tier === null) continue;
          const k = `${a.key}:${a.tier}`;
          const existing = counts.get(k);
          if (existing) existing.count++;else counts.set(k, {
            key: a.key,
            tier: a.tier,
            count: 1
          });
        }
      }
      const safeTotal = Math.max(totalPlayers, 1);
      return Array.from(counts.values()).map(c => ({
        key: c.key,
        tier: c.tier,
        holdersCount: c.count,
        totalPlayers: safeTotal,
        rarity: c.count / safeTotal
      }));
    }
    buildForPlayer(playerId, matches, stats, perSeason) {
      const playerStats = stats.find(s => s.id === playerId);
      if (!playerStats) return [];
      const sortedMatches = this.matchesForPlayer(playerId, matches);
      const result = [];
      for (const def of _achievement_definitions__WEBPACK_IMPORTED_MODULE_0__.ACHIEVEMENT_DEFINITIONS) {
        if (def.category === 'milestone') {
          result.push(this.buildMilestone(def, playerStats, sortedMatches));
        }
      }
      const streakInfo = this.computeWinStreak(sortedMatches);
      for (const def of _achievement_definitions__WEBPACK_IMPORTED_MODULE_0__.ACHIEVEMENT_DEFINITIONS) {
        if (def.category === 'streak') {
          result.push(this.buildStreak(def, streakInfo));
        }
      }
      const seasonResults = this.computeSeasonOccurrences(playerId, matches, perSeason);
      for (const def of _achievement_definitions__WEBPACK_IMPORTED_MODULE_0__.ACHIEVEMENT_DEFINITIONS) {
        if (def.category === 'season') {
          result.push(this.buildSeasonBadge(def, seasonResults));
        }
      }
      return result;
    }
    matchesForPlayer(playerId, matches) {
      const sorted = [...matches].filter(m => m.datum).sort((a, b) => a.datum.getTime() - b.datum.getTime());
      const views = [];
      for (const m of sorted) {
        const inWit = (m.teamWit || []).includes(playerId);
        const inRood = (m.teamRood || []).includes(playerId);
        if (!inWit && !inRood) continue;
        const own = inWit ? m.scoreWit ?? 0 : m.scoreRood ?? 0;
        const opp = inWit ? m.scoreRood ?? 0 : m.scoreWit ?? 0;
        const outcome = own > opp ? 'W' : own < opp ? 'L' : 'D';
        views.push({
          match: m,
          outcome,
          isZlatan: m.zlatanPlayerId === playerId
        });
      }
      return views;
    }
    buildMilestone(def, stats, views) {
      const valueFn = MILESTONE_VALUES[def.key];
      const matchValueFn = MILESTONE_MATCH_VALUES[def.key];
      const current = valueFn(stats);
      const tiers = def.tiers ?? [];
      const earnedTier = [...tiers].reverse().find(t => current >= t.threshold) ?? null;
      const nextTier = tiers.find(t => current < t.threshold) ?? null;
      const target = nextTier?.threshold ?? earnedTier?.threshold ?? tiers[0]?.threshold ?? 0;
      let earnedAt = null;
      if (earnedTier) {
        let acc = 0;
        for (const v of views) {
          acc += matchValueFn(v);
          if (acc >= earnedTier.threshold) {
            earnedAt = v.match.datum;
            break;
          }
        }
      }
      return {
        key: def.key,
        category: def.category,
        tier: earnedTier?.tier ?? null,
        title: tierTitle(def, earnedTier?.tier ?? null),
        description: def.description,
        icon: def.icon,
        earnedAt,
        progress: {
          current,
          target
        }
      };
    }
    computeWinStreak(views) {
      let longest = 0;
      let run = 0;
      const reachedAt = new Map();
      for (const v of views) {
        if (v.outcome === 'W') {
          run++;
          if (!reachedAt.has(run)) reachedAt.set(run, v.match.datum);
          if (run > longest) longest = run;
        } else {
          run = 0;
        }
      }
      return {
        longest,
        reachedAt
      };
    }
    buildStreak(def, info) {
      const target = STREAK_TARGETS[def.key];
      const earned = info.longest >= target;
      return {
        key: def.key,
        category: def.category,
        tier: earned ? 'bronze' : null,
        title: def.title,
        description: def.description,
        icon: def.icon,
        earnedAt: earned ? info.reachedAt.get(target) ?? null : null,
        progress: {
          current: info.longest,
          target
        }
      };
    }
    computeSeasonOccurrences(playerId, matches, perSeason) {
      const out = {
        season_champion: [],
        season_podium: [],
        season_full_attend: []
      };
      for (const {
        season,
        stats
      } of perSeason) {
        const seasonMatches = matches.filter(m => m.seizoen === season && m.datum).sort((a, b) => a.datum.getTime() - b.datum.getTime());
        const lastDate = seasonMatches.length > 0 ? seasonMatches[seasonMatches.length - 1].datum : null;
        const ranking = [...stats].filter(s => typeof s.id === 'number').sort((a, b) => b.totalPoints - a.totalPoints);
        const top1 = ranking[0]?.totalPoints ?? -Infinity;
        const top3Threshold = ranking[2]?.totalPoints ?? -Infinity;
        const me = stats.find(s => s.id === playerId);
        if (me && me.totalPoints === top1 && me.totalPoints > 0) {
          out['season_champion'].push({
            season,
            date: lastDate
          });
        }
        if (me && me.totalPoints >= top3Threshold && me.totalPoints > 0) {
          out['season_podium'].push({
            season,
            date: lastDate
          });
        }
        if (seasonMatches.length > 0) {
          const playedAll = seasonMatches.every(m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId));
          if (playedAll) out['season_full_attend'].push({
            season,
            date: lastDate
          });
        }
      }
      return out;
    }
    buildSeasonBadge(def, occurrencesByKey) {
      const occurrences = occurrencesByKey[def.key] ?? [];
      const earned = occurrences.length > 0;
      const earnedAt = earned ? occurrences.reduce((min, o) => {
        if (!o.date) return min;
        return !min || o.date < min ? o.date : min;
      }, null) : null;
      return {
        key: def.key,
        category: def.category,
        tier: earned ? 'bronze' : null,
        title: def.title,
        description: def.description,
        icon: def.icon,
        earnedAt,
        occurrences: earned ? occurrences : undefined
      };
    }
    static {
      this.ɵfac = function AchievementsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AchievementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_wedstrijden_service__WEBPACK_IMPORTED_MODULE_2__.WedstrijdenService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_game_statistics_service__WEBPACK_IMPORTED_MODULE_3__.GameStatisticsService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: AchievementsService,
        factory: AchievementsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AchievementsService;
})();
const STREAK_TARGETS = {
  streak_3: 3,
  streak_5: 5,
  streak_7: 7
};
const MILESTONE_VALUES = {
  matches_played: s => s.gamesPlayed,
  matches_won: s => s.wins,
  zlatan_points: s => s.zlatanPoints
};
const MILESTONE_MATCH_VALUES = {
  matches_played: () => 1,
  matches_won: v => v.outcome === 'W' ? 1 : 0,
  zlatan_points: v => v.isZlatan ? 1 : 0
};
function tierTitle(def, tier) {
  if (!def.tiers || !tier) return def.title;
  const labels = {
    bronze: 'Brons',
    silver: 'Zilver',
    gold: 'Goud',
    platinum: 'Platina'
  };
  return `${def.title} – ${labels[tier]}`;
}

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

/***/ 50256:
/*!*********************************************!*\
  !*** ./src/app/services/records.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordsService: () => (/* binding */ RecordsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.service */ 6455);
/* harmony import */ var _wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wedstrijden.service */ 40237);
/* harmony import */ var _game_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.statistics.service */ 94165);






const MIN_MATCHES_FOR_WINRATE = 10;
let RecordsService = /*#__PURE__*/(() => {
  class RecordsService {
    constructor(playerService, wedstrijdenService, statsService) {
      this.playerService = playerService;
      this.wedstrijdenService = wedstrijdenService;
      this.statsService = statsService;
    }
    /**
     * Bereken alle records over de hele match-historie (all-time).
     */
    getRecords() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        spelers: this.playerService.getPlayers(),
        wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
        fullStats: this.statsService.getFullPlayerStats(null)
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
        spelers,
        wedstrijden,
        fullStats
      }) => this.computeRecords(spelers, wedstrijden, fullStats)));
    }
    /**
     * Bereken seizoen-MVP's: per AFGEROND seizoen de speler met de hoogste
     * totalPoints. Het lopende seizoen (getCurrentSeason) wordt overgeslagen —
     * MVP staat pas vast als het seizoen klaar is.
     */
    getSeasonMVPs() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        seasons: this.statsService.getAvailableSeasons(),
        current: this.statsService.getCurrentSeason()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
        seasons,
        current
      }) => {
        const completed = (seasons ?? []).filter(s => s !== current);
        if (completed.length === 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(completed.map(season => this.statsService.getFullPlayerStats(season).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(stats => this.buildSeasonMvp(season, stats)))));
      }));
    }
    /**
     * Combineer all-time records + seizoen-MVP's tot één lijst.
     */
    getAllRecords() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this.getRecords(), this.getSeasonMVPs()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([records, mvps]) => [...records, ...mvps]));
    }
    /**
     * Filter records waarvan deze speler een holder is (single of shared).
     * Inclusief seizoen-MVP's.
     */
    getRecordsForPlayer(playerId) {
      return this.getAllRecords().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(records => records.filter(r => r.holders.some(h => h.playerId === playerId))));
    }
    buildSeasonMvp(season, stats) {
      return this.buildTopRecord({
        key: `mvp-${season}`,
        title: `MVP seizoen ${season}`,
        icon: 'workspace_premium',
        unit: 'punten',
        higherIsBetter: true,
        stats,
        valueFn: p => p.totalPoints
      });
    }
    computeRecords(spelers, wedstrijden, fullStats) {
      const categories = [];
      // 1) Hoogste rating
      categories.push(this.buildTopRecord({
        key: 'highest-rating',
        title: 'Hoogste rating (all-time)',
        icon: 'star',
        unit: '',
        higherIsBetter: true,
        stats: fullStats,
        valueFn: p => p.rating
      }));
      // 2) Meeste wedstrijden
      categories.push(this.buildTopRecord({
        key: 'most-matches',
        title: 'Meeste wedstrijden',
        icon: 'directions_run',
        unit: 'wedstrijden',
        higherIsBetter: true,
        stats: fullStats,
        valueFn: p => p.gamesPlayed
      }));
      // 3) Langste win-streak
      const winStreaks = this.computeStreaks(spelers, wedstrijden, 'W');
      categories.push(this.buildTopFromMap({
        key: 'longest-win-streak',
        title: 'Langste win-streak',
        icon: 'local_fire_department',
        unit: 'wedstrijden',
        higherIsBetter: true,
        values: winStreaks,
        spelers
      }));
      // 4) Langste verlies-streak
      const lossStreaks = this.computeStreaks(spelers, wedstrijden, 'L');
      categories.push(this.buildTopFromMap({
        key: 'longest-loss-streak',
        title: 'Langste verlies-streak',
        icon: 'trending_down',
        unit: 'wedstrijden',
        higherIsBetter: true,
        values: lossStreaks,
        spelers
      }));
      // 5) Meeste Zlatan-punten
      categories.push(this.buildTopRecord({
        key: 'most-zlatans',
        title: 'Meeste Zlatan-punten',
        icon: 'military_tech',
        unit: 'punten',
        higherIsBetter: true,
        stats: fullStats,
        valueFn: p => p.zlatanPoints
      }));
      // 6) Meeste Ventiel-punten
      categories.push(this.buildTopRecord({
        key: 'most-ventiels',
        title: 'Meeste Ventiel-punten',
        icon: 'mood_bad',
        unit: 'punten',
        higherIsBetter: true,
        stats: fullStats,
        valueFn: p => p.ventielPoints
      }));
      // 7) Beste win-percentage (min 10 wedstrijden)
      const eligible = fullStats.filter(p => p.gamesPlayed >= MIN_MATCHES_FOR_WINRATE);
      categories.push(this.buildTopRecord({
        key: 'highest-winrate',
        title: 'Beste win-percentage',
        icon: 'emoji_events',
        unit: '%',
        higherIsBetter: true,
        stats: eligible,
        valueFn: p => p.winRatio
      }));
      return categories;
    }
    buildTopRecord(opts) {
      const eligible = opts.stats.filter(p => typeof p.id === 'number');
      let holders = [];
      if (eligible.length > 0) {
        const values = eligible.map(opts.valueFn);
        const top = opts.higherIsBetter ? Math.max(...values) : Math.min(...values);
        // Als top 0 is en hoger=better, geef geen holders (niemand heeft het record)
        if (!(opts.higherIsBetter && top === 0)) {
          holders = eligible.filter(p => opts.valueFn(p) === top).map(p => ({
            playerId: p.id,
            name: p.name,
            value: top
          })).sort((a, b) => a.name.localeCompare(b.name));
        }
      }
      return {
        key: opts.key,
        title: opts.title,
        icon: opts.icon,
        unit: opts.unit,
        higherIsBetter: opts.higherIsBetter,
        holders
      };
    }
    buildTopFromMap(opts) {
      const spelersById = new Map();
      opts.spelers.forEach(p => {
        if (typeof p.id === 'number') spelersById.set(p.id, p);
      });
      let holders = [];
      const entries = Array.from(opts.values.entries()).filter(([, v]) => v > 0);
      if (entries.length > 0) {
        const values = entries.map(([, v]) => v);
        const top = opts.higherIsBetter ? Math.max(...values) : Math.min(...values);
        holders = entries.filter(([, v]) => v === top).map(([id, v]) => {
          const sp = spelersById.get(id);
          return sp ? {
            playerId: id,
            name: sp.name,
            value: v
          } : null;
        }).filter(h => h !== null).sort((a, b) => a.name.localeCompare(b.name));
      }
      return {
        key: opts.key,
        title: opts.title,
        icon: opts.icon,
        unit: opts.unit,
        higherIsBetter: opts.higherIsBetter,
        holders
      };
    }
    /**
     * Bereken longest streak van het opgegeven outcome-type per speler.
     */
    computeStreaks(spelers, wedstrijden, target) {
      const result = new Map();
      const sorted = [...wedstrijden].sort((a, b) => {
        if (!a.datum || !b.datum) return 0;
        return a.datum.getTime() - b.datum.getTime();
      });
      spelers.forEach(p => {
        if (typeof p.id !== 'number') return;
        const id = p.id;
        let longest = 0;
        let run = 0;
        sorted.forEach(m => {
          const inWit = (m.teamWit || []).includes(id);
          const inRood = (m.teamRood || []).includes(id);
          if (!inWit && !inRood) return;
          const scoreWit = m.scoreWit ?? 0;
          const scoreRood = m.scoreRood ?? 0;
          const ownScore = inWit ? scoreWit : scoreRood;
          const oppScore = inWit ? scoreRood : scoreWit;
          let outcome;
          if (ownScore > oppScore) outcome = 'W';else if (ownScore < oppScore) outcome = 'L';else outcome = 'D';
          if (outcome === target) {
            run++;
            if (run > longest) longest = run;
          } else {
            run = 0;
          }
        });
        result.set(id, longest);
      });
      return result;
    }
    static {
      this.ɵfac = function RecordsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__.WedstrijdenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_game_statistics_service__WEBPACK_IMPORTED_MODULE_2__.GameStatisticsService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: RecordsService,
        factory: RecordsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return RecordsService;
})();

/***/ })

}]);
//# sourceMappingURL=471.js.map