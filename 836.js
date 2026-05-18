"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[836],{

/***/ 71703:
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/admin-notificaties/admin-notificaties.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotificatiesComponent: () => (/* binding */ AdminNotificatiesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _test_broadcast_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-broadcast-dialog.component */ 69128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_beheer_notificaties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/beheer-notificaties.service */ 50103);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);












function AdminNotificatiesComponent_ng_container_12_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Speler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_12_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.playerName || "\u2014");
  }
}
function AdminNotificatiesComponent_ng_container_12_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_12_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r3.device);
  }
}
function AdminNotificatiesComponent_ng_container_12_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Aangemeld");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_12_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, row_r4.createdAt, "dd-MM-yyyy"));
  }
}
function AdminNotificatiesComponent_ng_container_12_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Laatst gezien");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_12_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r5.lastSeenAt ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, row_r5.lastSeenAt, "dd-MM-yyyy") : "\u2014");
  }
}
function AdminNotificatiesComponent_ng_container_12_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_12_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", row_r6.active)("inactive", !row_r6.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6.active ? "\u2713 Actief" : "\u2717 Inactief", " ");
  }
}
function AdminNotificatiesComponent_ng_container_12_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
  }
}
function AdminNotificatiesComponent_ng_container_12_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 25);
  }
}
function AdminNotificatiesComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminNotificatiesComponent_ng_container_12_th_5_Template, 2, 0, "th", 14)(6, AdminNotificatiesComponent_ng_container_12_td_6_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminNotificatiesComponent_ng_container_12_th_8_Template, 2, 0, "th", 14)(9, AdminNotificatiesComponent_ng_container_12_td_9_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AdminNotificatiesComponent_ng_container_12_th_11_Template, 2, 0, "th", 14)(12, AdminNotificatiesComponent_ng_container_12_td_12_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminNotificatiesComponent_ng_container_12_th_14_Template, 2, 0, "th", 14)(15, AdminNotificatiesComponent_ng_container_12_td_15_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminNotificatiesComponent_ng_container_12_th_17_Template, 2, 0, "th", 14)(18, AdminNotificatiesComponent_ng_container_12_td_18_Template, 3, 5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AdminNotificatiesComponent_ng_container_12_tr_19_Template, 1, 0, "tr", 20)(20, AdminNotificatiesComponent_ng_container_12_tr_20_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subs_r7 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Totaal: ", subs_r7.length, " abonnement(en).");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", subs_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.subscriptionColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r7.subscriptionColumns);
  }
}
function AdminNotificatiesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Laden\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verstuurd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, row_r9.sentAt, "dd-MM-yyyy HH:mm"));
  }
}
function AdminNotificatiesComponent_ng_container_17_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r10.type);
  }
}
function AdminNotificatiesComponent_ng_container_17_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Titel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r11.title || "\u2014");
  }
}
function AdminNotificatiesComponent_ng_container_17_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ontvangers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_7_0 = row_r12.recipientsCount) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0);
  }
}
function AdminNotificatiesComponent_ng_container_17_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Geslaagd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_7_0 = row_r13.succeededCount) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0);
  }
}
function AdminNotificatiesComponent_ng_container_17_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verlopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_17_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_7_0 = row_r14.expiredCount) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0);
  }
}
function AdminNotificatiesComponent_ng_container_17_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
  }
}
function AdminNotificatiesComponent_ng_container_17_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 25);
  }
}
function AdminNotificatiesComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminNotificatiesComponent_ng_container_17_th_5_Template, 2, 0, "th", 14)(6, AdminNotificatiesComponent_ng_container_17_td_6_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminNotificatiesComponent_ng_container_17_th_8_Template, 2, 0, "th", 14)(9, AdminNotificatiesComponent_ng_container_17_td_9_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AdminNotificatiesComponent_ng_container_17_th_11_Template, 2, 0, "th", 14)(12, AdminNotificatiesComponent_ng_container_17_td_12_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminNotificatiesComponent_ng_container_17_th_14_Template, 2, 0, "th", 14)(15, AdminNotificatiesComponent_ng_container_17_td_15_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminNotificatiesComponent_ng_container_17_th_17_Template, 2, 0, "th", 14)(18, AdminNotificatiesComponent_ng_container_17_td_18_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AdminNotificatiesComponent_ng_container_17_th_20_Template, 2, 0, "th", 14)(21, AdminNotificatiesComponent_ng_container_17_td_21_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AdminNotificatiesComponent_ng_container_17_tr_22_Template, 1, 0, "tr", 20)(23, AdminNotificatiesComponent_ng_container_17_tr_23_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const history_r15 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Laatste ", history_r15.length, " verzonden notificatie(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", history_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.historyColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r7.historyColumns);
  }
}
function AdminNotificatiesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Laden\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminNotificatiesComponent_ng_container_22_ng_container_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r16.name);
  }
}
function AdminNotificatiesComponent_ng_container_22_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Nog niet bereikbaar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AdminNotificatiesComponent_ng_container_22_ng_container_8_li_4_Template, 2, 1, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", a_r17.unreachablePlayers);
  }
}
function AdminNotificatiesComponent_ng_container_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m_r18.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", m_r18.newSubsCount * 20, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m_r18.newSubsCount);
  }
}
function AdminNotificatiesComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 32)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Bereik nu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "actieve spelers met werkende push-subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminNotificatiesComponent_ng_container_22_ng_container_8_Template, 5, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "section", 32)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Groei laatste 12 maanden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AdminNotificatiesComponent_ng_container_22_div_13_Template, 6, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 32)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Push-resultaten 30 dagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 37)(18, "div", 38)(19, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "verzonden notificaties");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 38)(24, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "totale ontvangers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 38)(29, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "geslaagd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 38)(34, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "verlopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", a_r17.reachableCount, " / ", a_r17.totalActiveCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", a_r17.unreachablePlayers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", a_r17.growthByMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r17.last30DaysStats.reminders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r17.last30DaysStats.recipients);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r17.last30DaysStats.succeeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](a_r17.last30DaysStats.expired);
  }
}
function AdminNotificatiesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Laden\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let AdminNotificatiesComponent = /*#__PURE__*/(() => {
  class AdminNotificatiesComponent {
    constructor(beheer, dialog, snackbar) {
      this.beheer = beheer;
      this.dialog = dialog;
      this.snackbar = snackbar;
      this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
      this.subscriptionColumns = ['playerName', 'device', 'createdAt', 'lastSeenAt', 'active'];
      this.historyColumns = ['sentAt', 'type', 'title', 'recipientsCount', 'succeededCount', 'expiredCount'];
    }
    ngOnInit() {
      this.subscriptions$ = this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.beheer.getSubscriptionsForAdmin()));
      this.history$ = this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.beheer.getReminderHistory(50)));
      this.analytics$ = this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.beheer.getAnalytics()));
    }
    refreshAll() {
      this.refresh$.next();
    }
    openTestBroadcast() {
      const dialogRef = this.dialog.open(_test_broadcast_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TestBroadcastDialogComponent, {
        width: '480px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (!result) return;
        this.beheer.sendTestBroadcast(result.title, result.body).subscribe({
          next: r => {
            this.snackbar.info(`Verstuurd: ${r.sent}/${r.total} (verlopen: ${r.deactivated})`);
            setTimeout(() => this.refreshAll(), 1500);
          },
          error: err => {
            console.error('Test-broadcast failed:', err);
            this.snackbar.error('Versturen mislukt — check console.');
          }
        });
      });
    }
    static {
      this.ɵfac = function AdminNotificatiesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminNotificatiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_beheer_notificaties_service__WEBPACK_IMPORTED_MODULE_1__.BeheerNotificatiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminNotificatiesComponent,
        selectors: [["app-admin-notificaties"]],
        decls: 26,
        vars: 12,
        consts: [["loadingSubs", ""], ["loadingHistory", ""], ["loadingAnalytics", ""], [1, "notif-admin"], [1, "header-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["label", "Abonnementen"], [4, "ngIf", "ngIfElse"], ["label", "Geschiedenis"], ["label", "Analytics"], [1, "hint"], ["mat-table", "", 1, "full-width", 3, "dataSource"], ["matColumnDef", "playerName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "device"], ["matColumnDef", "createdAt"], ["matColumnDef", "lastSeenAt"], ["matColumnDef", "active"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "sentAt"], ["matColumnDef", "type"], ["matColumnDef", "title"], ["matColumnDef", "recipientsCount"], ["matColumnDef", "succeededCount"], ["matColumnDef", "expiredCount"], [1, "analytics-block"], [1, "big-number"], [4, "ngIf"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "stats-row"], [1, "stat-cell"], [1, "stat-value"], [1, "stat-label"], [4, "ngFor", "ngForOf"], [1, "bar-row"], [1, "bar-label"], [1, "bar-fill"], [1, "bar-value"]],
        template: function AdminNotificatiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminNotificatiesComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.refreshAll());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "refresh");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Verversen ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminNotificatiesComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openTestBroadcast());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "send");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Test-broadcast ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-tab-group")(11, "mat-tab", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AdminNotificatiesComponent_ng_container_12_Template, 21, 4, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminNotificatiesComponent_ng_template_14_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-tab", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminNotificatiesComponent_ng_container_17_Template, 24, 4, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AdminNotificatiesComponent_ng_template_19_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-tab", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AdminNotificatiesComponent_ng_container_22_Template, 38, 8, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AdminNotificatiesComponent_ng_template_24_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            const loadingSubs_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
            const loadingHistory_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
            const loadingAnalytics_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 6, ctx.subscriptions$))("ngIfElse", loadingSubs_r19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 8, ctx.history$))("ngIfElse", loadingHistory_r20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 10, ctx.analytics$))("ngIfElse", loadingAnalytics_r21);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".notif-admin[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.notif-admin[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.notif-admin[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0.5rem 0;\n}\n.notif-admin[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.notif-admin[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #43a047;\n  font-weight: 500;\n}\n.notif-admin[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.analytics-block[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n.analytics-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.analytics-block[_ngcontent-%COMP%]   .big-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0.25rem 0;\n}\n.analytics-block[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.analytics-block[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5rem 1fr 2rem;\n  align-items: center;\n  gap: 0.5rem;\n}\n.analytics-block[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.analytics-block[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  background: #1976d2;\n  height: 1rem;\n  min-width: 2px;\n  border-radius: 2px;\n  max-width: 100%;\n}\n.analytics-block[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n.analytics-block[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.analytics-block[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: rgba(25, 118, 210, 0.06);\n  border-radius: 6px;\n  min-width: 7rem;\n}\n.analytics-block[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1976d2;\n}\n.analytics-block[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1ub3RpZmljYXRpZXMvYWRtaW4tbm90aWZpY2F0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQWMsV0FBQTtBQUFoQjtBQUVFO0VBQVUsY0FBQTtFQUFnQixnQkFBQTtBQUU1QjtBQURFO0VBQVksY0FBQTtBQUlkOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjtBQUZFO0VBQUsscUJBQUE7QUFLUDtBQUhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUZFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREU7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHSjtBQURJO0VBQWEsa0JBQUE7RUFBb0IseUJBQUE7QUFLckM7QUFKSTtFQUFZLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGVBQUE7QUFXdkY7QUFWSTtFQUFhLGtDQUFBO0VBQW9DLGlCQUFBO0FBY3JEO0FBWEU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFhSjtBQVZFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUo7QUFWSTtFQUFjLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBQUE7QUFldkQ7QUFkSTtFQUFjLGtCQUFBO0VBQW9CLHlCQUFBO0FBa0J0QyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZi1hZG1pbiB7XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cblxuICAuaGludCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG5cbiAgLmZ1bGwtd2lkdGggeyB3aWR0aDogMTAwJTsgfVxuXG4gIC5hY3RpdmUgeyBjb2xvcjogIzQzYTA0NzsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAuaW5hY3RpdmUgeyBjb2xvcjogIzllOWU5ZTsgfVxufVxuXG4uYW5hbHl0aWNzLWJsb2NrIHtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcblxuICBoMyB7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxuXG4gIC5iaWctbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgfVxuXG4gIC5iYXItY2hhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuMjVyZW07XG4gIH1cblxuICAuYmFyLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gMWZyIDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcblxuICAgIC5iYXItbGFiZWwgeyBmb250LXNpemU6IDAuODVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IH1cbiAgICAuYmFyLWZpbGwgeyBiYWNrZ3JvdW5kOiAjMTk3NmQyOyBoZWlnaHQ6IDFyZW07IG1pbi13aWR0aDogMnB4OyBib3JkZXItcmFkaXVzOiAycHg7IG1heC13aWR0aDogMTAwJTsgfVxuICAgIC5iYXItdmFsdWUgeyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB0ZXh0LWFsaWduOiByaWdodDsgfVxuICB9XG5cbiAgLnN0YXRzLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLnN0YXQtY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUsIDExOCwgMjEwLCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWluLXdpZHRoOiA3cmVtO1xuXG4gICAgLnN0YXQtdmFsdWUgeyBmb250LXNpemU6IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxOTc2ZDI7IH1cbiAgICAuc3RhdC1sYWJlbCB7IGZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return AdminNotificatiesComponent;
})();

/***/ }),

/***/ 69128:
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin/admin-notificaties/test-broadcast-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestBroadcastDialogComponent: () => (/* binding */ TestBroadcastDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);








let TestBroadcastDialogComponent = /*#__PURE__*/(() => {
  class TestBroadcastDialogComponent {
    constructor(fb, dialogRef) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.form = this.fb.group({
        title: ['Test broadcast', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        body: ['Dit is een test van Zaalvoetbal Doorn.', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        confirm: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.requiredTrue]
      });
    }
    cancel() {
      this.dialogRef.close();
    }
    send() {
      if (this.form.invalid) return;
      const {
        title,
        body
      } = this.form.value;
      this.dialogRef.close({
        title,
        body
      });
    }
    static {
      this.ɵfac = function TestBroadcastDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TestBroadcastDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TestBroadcastDialogComponent,
        selectors: [["app-test-broadcast-dialog"]],
        decls: 24,
        vars: 2,
        consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title", "maxlength", "80"], ["matInput", "", "formControlName", "body", "maxlength", "200", "rows", "3"], ["formControlName", "confirm"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
        template: function TestBroadcastDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Test-broadcast versturen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TestBroadcastDialogComponent_Template_form_ngSubmit_2_listener() {
              return ctx.send();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dit verstuurt een echte push-notificatie naar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "alle actieve abonnementen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ". Gebruik dit alleen als je echt wilt testen.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 2)(10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Titel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 2)(14, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Bericht");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "textarea", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-checkbox", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Ja, ik weet wat ik doe \u2014 verstuur naar alle actieve gebruikers. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-dialog-actions", 6)(20, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestBroadcastDialogComponent_Template_button_click_20_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Annuleren");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Versturen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox],
        encapsulation: 2
      });
    }
  }
  return TestBroadcastDialogComponent;
})();

/***/ }),

/***/ 53661:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 26273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent
}];
let AdminRoutingModule = /*#__PURE__*/(() => {
  class AdminRoutingModule {
    static {
      this.ɵfac = function AdminRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
    }
  }
  return AdminRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 52805:
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-spelers/admin-spelers.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSpelersComponent: () => (/* binding */ AdminSpelersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _speler_dialog_speler_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speler-dialog/speler-dialog.component */ 19046);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/player.service */ 6455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loading-state/loading-state.component */ 77945);













function AdminSpelersComponent_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Spelernaam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminSpelersComponent_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r1.name);
  }
}
function AdminSpelersComponent_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Positie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminSpelersComponent_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r2.position);
  }
}
function AdminSpelersComponent_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actief");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminSpelersComponent_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.getActiefText(player_r3.actief));
  }
}
function AdminSpelersComponent_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Acties");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminSpelersComponent_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSpelersComponent_div_4_td_13_Template_button_click_1_listener() {
      const player_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.editPlayer(player_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function AdminSpelersComponent_div_4_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 17);
  }
}
function AdminSpelersComponent_div_4_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 18);
  }
}
function AdminSpelersComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AdminSpelersComponent_div_4_th_3_Template, 2, 0, "th", 7)(4, AdminSpelersComponent_div_4_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AdminSpelersComponent_div_4_th_6_Template, 2, 0, "th", 7)(7, AdminSpelersComponent_div_4_td_7_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AdminSpelersComponent_div_4_th_9_Template, 2, 0, "th", 7)(10, AdminSpelersComponent_div_4_td_10_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdminSpelersComponent_div_4_th_12_Template, 2, 0, "th", 7)(13, AdminSpelersComponent_div_4_td_13_Template, 4, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AdminSpelersComponent_div_4_tr_14_Template, 1, 0, "tr", 12)(15, AdminSpelersComponent_div_4_tr_15_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
  }
}
function AdminSpelersComponent_app_loading_state_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-state", 19);
  }
}
let AdminSpelersComponent = /*#__PURE__*/(() => {
  class AdminSpelersComponent {
    constructor(playerService, dialog, snackbar) {
      this.playerService = playerService;
      this.dialog = dialog;
      this.snackbar = snackbar;
      this.displayedColumns = ['name', 'position', 'actief', 'actions'];
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
      this.loading = true;
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    }
    ngOnInit() {
      this.loadPlayers();
    }
    loadPlayers() {
      this.loading = true;
      this.playerService.refreshPlayers().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: players => {
          this.dataSource.data = players;
          this.loading = false;
        },
        error: error => {
          console.error('Error loading players:', error);
          this.loading = false;
        }
      });
    }
    addPlayer() {
      const dialogRef = this.dialog.open(_speler_dialog_speler_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SpelerDialogComponent, {
        width: '500px',
        data: {
          player: null,
          mode: 'add'
        }
      });
      dialogRef.afterClosed().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(result => {
        if (result) {
          // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
          this.playerService.addPlayer(result).subscribe({
            next: () => {
              this.loadPlayers();
            },
            error: error => {
              console.error('Error adding player:', error);
              this.snackbar.error('Fout bij toevoegen speler: ' + error.message);
            }
          });
        }
      });
    }
    editPlayer(player) {
      const dialogRef = this.dialog.open(_speler_dialog_speler_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SpelerDialogComponent, {
        width: '500px',
        data: {
          player: {
            ...player
          },
          mode: 'edit',
          originalName: player.name
        }
      });
      dialogRef.afterClosed().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(result => {
        if (result) {
          // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
          this.playerService.updatePlayer(result.originalName, result.player).subscribe({
            next: () => {
              this.loadPlayers();
            },
            error: error => {
              console.error('Error updating player:', error);
              this.snackbar.error('Fout bij wijzigen speler: ' + error.message);
            }
          });
        }
      });
    }
    getActiefText(actief) {
      return actief ? 'Ja' : 'Nee';
    }
    static {
      this.ɵfac = function AdminSpelersComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminSpelersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AdminSpelersComponent,
        selectors: [["app-admin-spelers"]],
        decls: 6,
        vars: 2,
        consts: [[1, "spelers-container"], ["mat-fab", "", "color", "primary", "aria-label", "Voeg speler toe", 1, "fab-add", 3, "click"], ["class", "table-container", 4, "ngIf"], ["message", "Spelers laden...", 4, "ngIf"], [1, "table-container"], ["mat-table", "", 1, "spelers-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "actief"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", "aria-label", "Wijzig speler", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["message", "Spelers laden..."]],
        template: function AdminSpelersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSpelersComponent_Template_button_click_1_listener() {
              return ctx.addPlayer();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AdminSpelersComponent_div_4_Template, 16, 3, "div", 2)(5, AdminSpelersComponent_app_loading_state_5_Template, 1, 0, "app-loading-state", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_3__.LoadingStateComponent],
        styles: [".spelers-container[_ngcontent-%COMP%]   .fab-add[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 100;\n}\n.spelers-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.spelers-container[_ngcontent-%COMP%]   .spelers-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.spelers-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #616161;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zcGVsZXJzL2FkbWluLXNwZWxlcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNDbkJjO0FEY2xCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5zcGVsZXJzLWNvbnRhaW5lciB7XHJcbiAgLmZhYi1hZGQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyNHB4O1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG5cclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3BlbGVycy10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICMxOTc2ZDI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTYxNjE7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNDNhMDQ3O1xyXG4kc3VjY2Vzcy1kYXJrOiAgICMyZTdkMzI7XHJcbiRlcnJvci1jb2xvcjogICAgI2Y0NDMzNjtcclxuJGVycm9yLWRhcms6ICAgICAjZDMyZjJmO1xyXG4kZXJyb3ItbGlnaHQtYmc6ICNmZmViZWU7XHJcbiRsaWdodC1iZzogICAgICAgI2ZmZjtcclxuJHRleHQtY29sb3I6ICAgICAjMzMzOyAgICAgICAgLy8gRG9ua2VyZSB0ZWtzdCBrbGV1ciB2b29yIGhlYWRlcnMgZW4gYmVsYW5ncmlqa2UgdGVrc3RcclxuJHRleHQtc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0ZXh0LW11dGVkOiAgICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYm9yZGVyLWNvbG9yOiAgIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4vLyBUcm9waHkgdGllcnMgKGtsYXNzZW1lbnQgdG9wLTMpXHJcbiR0cm9waHktZ29sZDogICAjZmZkNzAwO1xyXG4kdHJvcGh5LXNpbHZlcjogI2MwYzBjMDtcclxuJHRyb3BoeS1icm9uemU6ICNjZTg5NDY7XHJcblxyXG4vLyBBY2hpZXZlbWVudCB0aWVycyDDosKAwpQgaGVyZ2VicnVpayB0cm9waHkta2xldXJlbiwgdm9lZyBwbGF0aW51bSB0b2UuXHJcbiR0aWVyLWJyb256ZTogICAkdHJvcGh5LWJyb256ZTtcclxuJHRpZXItc2lsdmVyOiAgICR0cm9waHktc2lsdmVyO1xyXG4kdGllci1nb2xkOiAgICAgJHRyb3BoeS1nb2xkO1xyXG4kdGllci1wbGF0aW51bTogI2I5ZjJmZjtcclxuXHJcbi8vIEVsZXZhdGlvblxyXG4kY2FyZC1zaGFkb3c6ICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRjYXJkLXNoYWRvdy1ob3ZlcjogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuLy8gQnJlYWtwb2ludHMgw6LCgMKUIE1hdGVyaWFsLWFsaWduZWQuIEdlYnJ1aWsgdmlhIEBtZWRpYSAobWF4LXdpZHRoOiAkYnAtLi4uKS5cclxuLy8gLSBtb2JpbGUgIDogcGhvbmUtcG9ydHJhaXQgKyBzbWFsbCBwaG9uZS1sYW5kc2NhcGVcclxuLy8gLSB0YWJsZXQgIDogdGFibGV0LXBvcnRyYWl0XHJcbi8vIC0gZGVza3RvcCA6IHRhYmxldC1sYW5kc2NhcGUgKyBkZXNrdG9wXHJcbiRicC1tb2JpbGU6ICA2MDBweDtcclxuJGJwLXRhYmxldDogIDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1tYWluOiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVzXHJcbiRmb250LXNpemUteHM6IDAuNzVyZW07ICAgICAgLy8gMTJweFxyXG4kZm9udC1zaXplLXNtOiAwLjg3NXJlbTsgICAgIC8vIDE0cHggIFxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07ICAgICAgIC8vIDE2cHhcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07ICAgICAvLyAxOHB4XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgICAgLy8gMjBweFxyXG4kZm9udC1zaXplLTJ4bDogMS41cmVtOyAgICAgIC8vIDI0cHhcclxuJGZvbnQtc2l6ZS0zeGw6IDEuODc1cmVtOyAgICAvLyAzMHB4XHJcbiRmb250LXNpemUtNHhsOiAycmVtOyAgICAgICAgLy8gMzJweFxyXG4kZm9udC1zaXplLTV4bDogMi41cmVtOyAgICAgIC8vIDQwcHhcclxuXHJcbi8vIEZvbnQgV2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcblxyXG4vLyBMaW5lIEhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LXRpZ2h0OiAxLjI1O1xyXG4kbGluZS1oZWlnaHQtbm9ybWFsOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1yZWxheGVkOiAxLjYyNTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return AdminSpelersComponent;
})();

/***/ }),

/***/ 19046:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/admin-spelers/speler-dialog/speler-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpelerDialogComponent: () => (/* binding */ SpelerDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);












function SpelerDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Spelernaam is verplicht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SpelerDialogComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r1, " ");
  }
}
function SpelerDialogComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Positie is verplicht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
let SpelerDialogComponent = /*#__PURE__*/(() => {
  class SpelerDialogComponent {
    constructor(fb, dialogRef, data) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.data = data;
      this.positions = ['Keeper', 'Speler'];
      this.isEditMode = data.mode === 'edit';
      this.spelerForm = this.fb.group({
        name: [data.player?.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        position: [data.player?.position || 'Speler', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        actief: [data.player?.actief !== undefined ? data.player.actief : true]
      });
      // Disable name field in edit mode to prevent changing the identifier
      if (this.isEditMode) {
        this.spelerForm.get('name')?.disable();
      }
    }
    ngOnInit() {}
    onCancel() {
      this.dialogRef.close();
    }
    onSave() {
      if (this.spelerForm.valid) {
        const formValue = this.spelerForm.getRawValue(); // getRawValue includes disabled fields
        const player = {
          name: formValue.name,
          position: formValue.position,
          actief: formValue.actief
        };
        if (this.isEditMode) {
          this.dialogRef.close({
            player,
            originalName: this.data.originalName || this.data.player?.name
          });
        } else {
          this.dialogRef.close(player);
        }
      }
    }
    getDialogTitle() {
      return this.isEditMode ? 'Speler Wijzigen' : 'Speler Toevoegen';
    }
    static {
      this.ɵfac = function SpelerDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SpelerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpelerDialogComponent,
        selectors: [["app-speler-dialog"]],
        decls: 24,
        vars: 6,
        consts: [["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["formControlName", "position", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "toggle-field"], ["formControlName", "actief"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [3, "value"]],
        template: function SpelerDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Spelernaam");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpelerDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2)(10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Positie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SpelerDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SpelerDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Actief");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-slide-toggle", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-dialog-actions", 9)(20, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpelerDialogComponent_Template_button_click_20_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Annuleren");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpelerDialogComponent_Template_button_click_22_listener() {
              return ctx.onSave();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Opslaan ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            let tmp_2_0;
            let tmp_4_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getDialogTitle());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.spelerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.spelerForm.get("name")) == null ? null : tmp_2_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.spelerForm.get("position")) == null ? null : tmp_4_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.spelerForm.valid);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.full-width[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 8px;\n}\n\n.toggle-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding: 12px 0;\n}\n.toggle-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #616161;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 400px;\n  padding: 20px;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zcGVsZXJzL3NwZWxlci1kaWFsb2cvc3BlbGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNDbEJjO0FEZ0JsQjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIFxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return SpelerDialogComponent;
})();

/***/ }),

/***/ 46089:
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/admin-wedstrijden/admin-wedstrijden.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWedstrijdenComponent: () => (/* binding */ AdminWedstrijdenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _wedstrijd_dialog_wedstrijd_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wedstrijd-dialog/wedstrijd-dialog.component */ 65247);
/* harmony import */ var _services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/wedstrijden.service */ 40237);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/player.service */ 6455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 62365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loading-state/loading-state.component */ 77945);
/* harmony import */ var _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/player-name.pipe */ 28445);















function AdminWedstrijdenComponent_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Seizoen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wedstrijd_r1.seizoen);
  }
}
function AdminWedstrijdenComponent_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatDate(wedstrijd_r2.datum));
  }
}
function AdminWedstrijdenComponent_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Team Wit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getTeamNames(wedstrijd_r4.teamWit));
  }
}
function AdminWedstrijdenComponent_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Team Rood");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getTeamNames(wedstrijd_r5.teamRood));
  }
}
function AdminWedstrijdenComponent_div_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Score Wit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatScore(wedstrijd_r6.scoreWit));
  }
}
function AdminWedstrijdenComponent_div_4_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Score Rood");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatScore(wedstrijd_r7.scoreRood));
  }
}
function AdminWedstrijdenComponent_div_4_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Zlatan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "playerName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const wedstrijd_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, wedstrijd_r8.zlatanPlayerId)) || "-");
  }
}
function AdminWedstrijdenComponent_div_4_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Acties");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminWedstrijdenComponent_div_4_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminWedstrijdenComponent_div_4_td_25_Template_button_click_1_listener() {
      const wedstrijd_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editWedstrijd(wedstrijd_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AdminWedstrijdenComponent_div_4_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function AdminWedstrijdenComponent_div_4_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 22);
  }
}
function AdminWedstrijdenComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AdminWedstrijdenComponent_div_4_th_3_Template, 2, 0, "th", 7)(4, AdminWedstrijdenComponent_div_4_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AdminWedstrijdenComponent_div_4_th_6_Template, 2, 0, "th", 7)(7, AdminWedstrijdenComponent_div_4_td_7_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminWedstrijdenComponent_div_4_th_9_Template, 2, 0, "th", 7)(10, AdminWedstrijdenComponent_div_4_td_10_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AdminWedstrijdenComponent_div_4_th_12_Template, 2, 0, "th", 7)(13, AdminWedstrijdenComponent_div_4_td_13_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AdminWedstrijdenComponent_div_4_th_15_Template, 2, 0, "th", 7)(16, AdminWedstrijdenComponent_div_4_td_16_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AdminWedstrijdenComponent_div_4_th_18_Template, 2, 0, "th", 7)(19, AdminWedstrijdenComponent_div_4_td_19_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AdminWedstrijdenComponent_div_4_th_21_Template, 2, 0, "th", 7)(22, AdminWedstrijdenComponent_div_4_td_22_Template, 4, 5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AdminWedstrijdenComponent_div_4_th_24_Template, 2, 0, "th", 7)(25, AdminWedstrijdenComponent_div_4_td_25_Template, 4, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AdminWedstrijdenComponent_div_4_tr_26_Template, 1, 0, "tr", 16)(27, AdminWedstrijdenComponent_div_4_tr_27_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function AdminWedstrijdenComponent_app_loading_state_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading-state", 23);
  }
}
let AdminWedstrijdenComponent = /*#__PURE__*/(() => {
  class AdminWedstrijdenComponent {
    constructor(wedstrijdenService, playerService, dialog, snackbar) {
      this.wedstrijdenService = wedstrijdenService;
      this.playerService = playerService;
      this.dialog = dialog;
      this.snackbar = snackbar;
      this.displayedColumns = ['seizoen', 'datum', 'teamWit', 'teamRood', 'scoreWit', 'scoreRood', 'zlatan', 'actions'];
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
      this.loading = true;
      this.allPlayers = [];
      this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_6__.DestroyRef);
    }
    ngOnInit() {
      this.playerService.getPlayers().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe(players => {
        this.allPlayers = players;
      });
      this.loadWedstrijden();
    }
    loadWedstrijden() {
      this.loading = true;
      this.wedstrijdenService.refreshCache().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe({
        next: wedstrijden => {
          // Sort by date descending (newest first)
          const sorted = wedstrijden.sort((a, b) => {
            if (!a.datum) return 1;
            if (!b.datum) return -1;
            return b.datum.getTime() - a.datum.getTime();
          });
          this.dataSource.data = sorted;
          this.loading = false;
        },
        error: error => {
          console.error('Error loading wedstrijden:', error);
          this.loading = false;
        }
      });
    }
    addWedstrijd() {
      const dialogRef = this.dialog.open(_wedstrijd_dialog_wedstrijd_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WedstrijdDialogComponent, {
        width: '700px',
        data: null
      });
      dialogRef.afterClosed().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe(result => {
        if (result) {
          // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
          this.wedstrijdenService.addWedstrijd(result).subscribe({
            next: () => {
              this.loadWedstrijden();
            },
            error: error => {
              console.error('Error adding wedstrijd:', error);
              this.snackbar.error('Fout bij toevoegen wedstrijd: ' + error.message);
            }
          });
        }
      });
    }
    editWedstrijd(wedstrijd) {
      const dialogRef = this.dialog.open(_wedstrijd_dialog_wedstrijd_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WedstrijdDialogComponent, {
        width: '700px',
        data: {
          ...wedstrijd
        }
      });
      dialogRef.afterClosed().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe(result => {
        if (result) {
          // Mutation: geen takeUntilDestroyed zodat de write doorgaat bij navigatie.
          this.wedstrijdenService.updateWedstrijd(result).subscribe({
            next: () => {
              this.loadWedstrijden();
            },
            error: error => {
              console.error('Error updating wedstrijd:', error);
              this.snackbar.error('Fout bij wijzigen wedstrijd: ' + error.message);
            }
          });
        }
      });
    }
    formatDate(datum) {
      if (!datum) return '-';
      const day = String(datum.getDate()).padStart(2, '0');
      const month = String(datum.getMonth() + 1).padStart(2, '0');
      const year = datum.getFullYear();
      return `${day}-${month}-${year}`;
    }
    formatScore(score) {
      return score !== null ? String(score) : '-';
    }
    getTeamNames(teamIds) {
      if (!teamIds || teamIds.length === 0) return '';
      const names = teamIds.map(id => this.allPlayers.find(p => p.id === id)?.name ?? '').filter(Boolean).join(', ');
      return names.length > 50 ? names.substring(0, 50) + '...' : names;
    }
    static {
      this.ɵfac = function AdminWedstrijdenComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminWedstrijdenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_wedstrijden_service__WEBPACK_IMPORTED_MODULE_1__.WedstrijdenService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AdminWedstrijdenComponent,
        selectors: [["app-admin-wedstrijden"]],
        decls: 6,
        vars: 2,
        consts: [[1, "wedstrijden-container"], ["mat-fab", "", "color", "primary", "aria-label", "Voeg wedstrijd toe", 1, "fab-add", 3, "click"], ["class", "table-container", 4, "ngIf"], ["message", "Wedstrijden laden...", 4, "ngIf"], [1, "table-container"], ["mat-table", "", 1, "wedstrijden-table", 3, "dataSource"], ["matColumnDef", "seizoen"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "datum"], ["matColumnDef", "teamWit"], ["matColumnDef", "teamRood"], ["matColumnDef", "scoreWit"], ["matColumnDef", "scoreRood"], ["matColumnDef", "zlatan"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", "aria-label", "Wijzig wedstrijd", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["message", "Wedstrijden laden..."]],
        template: function AdminWedstrijdenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminWedstrijdenComponent_Template_button_click_1_listener() {
              return ctx.addWedstrijd();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AdminWedstrijdenComponent_div_4_Template, 28, 3, "div", 2)(5, AdminWedstrijdenComponent_app_loading_state_5_Template, 1, 0, "app-loading-state", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_4__.LoadingStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_5__.PlayerNamePipe],
        styles: [".wedstrijden-container[_ngcontent-%COMP%]   .fab-add[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 100;\n}\n.wedstrijden-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.wedstrijden-container[_ngcontent-%COMP%]   .wedstrijden-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wedstrijden-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #616161;\n}\n@media screen and (max-width: 768px) {\n  .wedstrijden-container[_ngcontent-%COMP%]   .wedstrijden-table[_ngcontent-%COMP%]   .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi13ZWRzdHJpamRlbi9hZG1pbi13ZWRzdHJpamRlbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0NuQmM7QURjbEI7QUFRRTtFQUVJO0lBQWUsYUFBQTtFQU5uQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi53ZWRzdHJpamRlbi1jb250YWluZXIge1xyXG4gIC5mYWItYWRkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjRweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLndlZHN0cmlqZGVuLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAgIC53ZWRzdHJpamRlbi10YWJsZSB7XHJcbiAgICAgIC5oaWRlLW1vYmlsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMTk3NmQyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE2MTYxO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzQzYTA0NztcclxuJHN1Y2Nlc3MtZGFyazogICAjMmU3ZDMyO1xyXG4kZXJyb3ItY29sb3I6ICAgICNmNDQzMzY7XHJcbiRlcnJvci1kYXJrOiAgICAgI2QzMmYyZjtcclxuJGVycm9yLWxpZ2h0LWJnOiAjZmZlYmVlO1xyXG4kbGlnaHQtYmc6ICAgICAgICNmZmY7XHJcbiR0ZXh0LWNvbG9yOiAgICAgIzMzMzsgICAgICAgIC8vIERvbmtlcmUgdGVrc3Qga2xldXIgdm9vciBoZWFkZXJzIGVuIGJlbGFuZ3JpamtlIHRla3N0XHJcbiR0ZXh0LXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGV4dC1tdXRlZDogICAgIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJvcmRlci1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuLy8gVHJvcGh5IHRpZXJzIChrbGFzc2VtZW50IHRvcC0zKVxyXG4kdHJvcGh5LWdvbGQ6ICAgI2ZmZDcwMDtcclxuJHRyb3BoeS1zaWx2ZXI6ICNjMGMwYzA7XHJcbiR0cm9waHktYnJvbnplOiAjY2U4OTQ2O1xyXG5cclxuLy8gQWNoaWV2ZW1lbnQgdGllcnMgw6LCgMKUIGhlcmdlYnJ1aWsgdHJvcGh5LWtsZXVyZW4sIHZvZWcgcGxhdGludW0gdG9lLlxyXG4kdGllci1icm9uemU6ICAgJHRyb3BoeS1icm9uemU7XHJcbiR0aWVyLXNpbHZlcjogICAkdHJvcGh5LXNpbHZlcjtcclxuJHRpZXItZ29sZDogICAgICR0cm9waHktZ29sZDtcclxuJHRpZXItcGxhdGludW06ICNiOWYyZmY7XHJcblxyXG4vLyBFbGV2YXRpb25cclxuJGNhcmQtc2hhZG93OiAgICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kY2FyZC1zaGFkb3ctaG92ZXI6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzIMOiwoDClCBNYXRlcmlhbC1hbGlnbmVkLiBHZWJydWlrIHZpYSBAbWVkaWEgKG1heC13aWR0aDogJGJwLS4uLikuXHJcbi8vIC0gbW9iaWxlICA6IHBob25lLXBvcnRyYWl0ICsgc21hbGwgcGhvbmUtbGFuZHNjYXBlXHJcbi8vIC0gdGFibGV0ICA6IHRhYmxldC1wb3J0cmFpdFxyXG4vLyAtIGRlc2t0b3AgOiB0YWJsZXQtbGFuZHNjYXBlICsgZGVza3RvcFxyXG4kYnAtbW9iaWxlOiAgNjAwcHg7XHJcbiRicC10YWJsZXQ6ICA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuJGZvbnQtbWFpbjogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplc1xyXG4kZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgICAgIC8vIDEycHhcclxuJGZvbnQtc2l6ZS1zbTogMC44NzVyZW07ICAgICAvLyAxNHB4ICBcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAgICAgICAvLyAxNnB4XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtOyAgICAgLy8gMThweFxyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgICAgIC8vIDIwcHhcclxuJGZvbnQtc2l6ZS0yeGw6IDEuNXJlbTsgICAgICAvLyAyNHB4XHJcbiRmb250LXNpemUtM3hsOiAxLjg3NXJlbTsgICAgLy8gMzBweFxyXG4kZm9udC1zaXplLTR4bDogMnJlbTsgICAgICAgIC8vIDMycHhcclxuJGZvbnQtc2l6ZS01eGw6IDIuNXJlbTsgICAgICAvLyA0MHB4XHJcblxyXG4vLyBGb250IFdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XHJcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG5cclxuLy8gTGluZSBIZWlnaHRzXHJcbiRsaW5lLWhlaWdodC10aWdodDogMS4yNTtcclxuJGxpbmUtaGVpZ2h0LW5vcm1hbDogMS41O1xyXG4kbGluZS1oZWlnaHQtcmVsYXhlZDogMS42MjU7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AdminWedstrijdenComponent;
})();

/***/ }),

/***/ 65247:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/admin-wedstrijden/wedstrijd-dialog/wedstrijd-dialog.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WedstrijdDialogComponent: () => (/* binding */ WedstrijdDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/player.service */ 6455);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);













function WedstrijdDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Seizoen is verplicht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WedstrijdDialogComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Datum is verplicht ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WedstrijdDialogComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", player_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r2.name);
  }
}
function WedstrijdDialogComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", player_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r3.name);
  }
}
function WedstrijdDialogComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optie_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", optie_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", optie_r4, " ");
  }
}
function WedstrijdDialogComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Score moet minimaal 0 zijn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WedstrijdDialogComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Score moet minimaal 0 zijn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WedstrijdDialogComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", player_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r5.name);
  }
}
function WedstrijdDialogComponent_mat_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", player_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r6.name);
  }
}
let WedstrijdDialogComponent = /*#__PURE__*/(() => {
  class WedstrijdDialogComponent {
    constructor(fb, playerService, dialogRef, data) {
      this.fb = fb;
      this.playerService = playerService;
      this.dialogRef = dialogRef;
      this.data = data;
      this.teamGeneratieOpties = ['Automatisch', 'Handmatig'];
      this.allPlayers$ = this.playerService.getPlayers();
      this.wedstrijdForm = this.fb.group({
        seizoen: [data?.seizoen || this.getCurrentSeizoen(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        datum: [data?.datum || null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        teamWit: [data?.teamWit || []],
        teamRood: [data?.teamRood || []],
        teamGeneratie: [data?.teamGeneratie || ''],
        scoreWit: [data?.scoreWit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        scoreRood: [data?.scoreRood, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        zlatanPlayerId: [data?.zlatanPlayerId ?? null],
        ventielPlayerId: [data?.ventielPlayerId ?? null]
      });
    }
    ngOnInit() {}
    getCurrentSeizoen() {
      const now = new Date();
      const month = now.getMonth(); // 0-11
      const year = now.getFullYear();
      // Seizoen loopt van augustus (7) tot juli (6)
      if (month < 7) {
        return `${year - 1}-${year}`;
      } else {
        return `${year}-${year + 1}`;
      }
    }
    onCancel() {
      this.dialogRef.close();
    }
    onSave() {
      if (this.wedstrijdForm.valid) {
        const formValue = this.wedstrijdForm.value;
        const updatedWedstrijd = {
          ...this.data,
          seizoen: formValue.seizoen,
          datum: formValue.datum,
          teamWit: formValue.teamWit || [],
          teamRood: formValue.teamRood || [],
          teamGeneratie: formValue.teamGeneratie || '',
          scoreWit: formValue.scoreWit !== '' && formValue.scoreWit !== null ? Number(formValue.scoreWit) : null,
          scoreRood: formValue.scoreRood !== '' && formValue.scoreRood !== null ? Number(formValue.scoreRood) : null,
          zlatanPlayerId: formValue.zlatanPlayerId ?? null,
          ventielPlayerId: formValue.ventielPlayerId ?? null
        };
        this.dialogRef.close(updatedWedstrijd);
      }
    }
    getDialogTitle() {
      return this.data ? 'Wedstrijd Wijzigen' : 'Wedstrijd Toevoegen';
    }
    static {
      this.ɵfac = function WedstrijdDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WedstrijdDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WedstrijdDialogComponent,
        selectors: [["app-wedstrijd-dialog"]],
        decls: 70,
        vars: 24,
        consts: [["picker", ""], ["mat-dialog-title", ""], [3, "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "half-width"], ["matInput", "", "formControlName", "seizoen", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "datum", "required", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["appearance", "outline", 1, "full-width"], ["formControlName", "teamWit", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "teamRood", "multiple", ""], ["formControlName", "teamGeneratie"], ["value", ""], ["matInput", "", "type", "number", "formControlName", "scoreWit", "min", "0"], ["matInput", "", "type", "number", "formControlName", "scoreRood", "min", "0"], ["formControlName", "zlatanPlayerId"], [3, "value"], ["formControlName", "ventielPlayerId"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]],
        template: function WedstrijdDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content")(3, "form", 2)(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Seizoen *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WedstrijdDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 4)(11, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Datum *");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7)(14, "mat-datepicker-toggle", 8)(15, "mat-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WedstrijdDialogComponent_mat_error_17_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 9)(19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Team Wit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, WedstrijdDialogComponent_mat_option_22_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 9)(25, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Team Rood");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, WedstrijdDialogComponent_mat_option_28_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 9)(31, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Team Generatie (optioneel)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 13)(34, "mat-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Geen selectie");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, WedstrijdDialogComponent_mat_option_36_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3)(38, "mat-form-field", 4)(39, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Score Wit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, WedstrijdDialogComponent_mat_error_42_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 4)(44, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Score Rood");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, WedstrijdDialogComponent_mat_error_47_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3)(49, "mat-form-field", 4)(50, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Zlatan");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-select", 17)(53, "mat-option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Geen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, WedstrijdDialogComponent_mat_option_55_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 4)(58, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Ventiel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-select", 19)(61, "mat-option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Geen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, WedstrijdDialogComponent_mat_option_63_Template, 2, 2, "mat-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-dialog-actions", 20)(66, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WedstrijdDialogComponent_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Annuleren");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WedstrijdDialogComponent_Template_button_click_68_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSave());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Opslaan ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            let tmp_3_0;
            let tmp_6_0;
            let tmp_10_0;
            let tmp_11_0;
            const picker_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getDialogTitle());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.wedstrijdForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.wedstrijdForm.get("seizoen")) == null ? null : tmp_3_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", picker_r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", picker_r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.wedstrijdForm.get("datum")) == null ? null : tmp_6_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, ctx.allPlayers$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 18, ctx.allPlayers$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teamGeneratieOpties);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.wedstrijdForm.get("scoreWit")) == null ? null : tmp_10_0.hasError("min"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.wedstrijdForm.get("scoreRood")) == null ? null : tmp_11_0.hasError("min"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 20, ctx.allPlayers$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 22, ctx.allPlayers$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.wedstrijdForm.valid);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.half-width[_ngcontent-%COMP%] {\n  width: 48%;\n  margin-bottom: 16px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 4%;\n}\n.form-row[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 8px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 600px;\n  padding: 20px;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi13ZWRzdHJpamRlbi93ZWRzdHJpamQtZGlhbG9nL3dlZHN0cmlqZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0FBREo7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXNfdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5oYWxmLXdpZHRoIHtcclxuICB3aWR0aDogNDglO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiA0JTtcclxuICBcclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return WedstrijdDialogComponent;
})();

/***/ }),

/***/ 26273:
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _admin_spelers_admin_spelers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-spelers/admin-spelers.component */ 52805);
/* harmony import */ var _admin_wedstrijden_admin_wedstrijden_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-wedstrijden/admin-wedstrijden.component */ 46089);
/* harmony import */ var _admin_notificaties_admin_notificaties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-notificaties/admin-notificaties.component */ 71703);





let AdminComponent = /*#__PURE__*/(() => {
  class AdminComponent {
    constructor() {}
    static {
      this.ɵfac = function AdminComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 10,
        vars: 0,
        consts: [[1, "admin-container"], ["label", "Spelerbeheer"], ["label", "Wedstrijdbeheer"], ["label", "Notificatiebeheer"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Beheer");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-tab-group")(4, "mat-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-admin-spelers");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-admin-wedstrijden");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-tab", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-admin-notificaties");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
        },
        dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _admin_spelers_admin_spelers_component__WEBPACK_IMPORTED_MODULE_0__.AdminSpelersComponent, _admin_wedstrijden_admin_wedstrijden_component__WEBPACK_IMPORTED_MODULE_1__.AdminWedstrijdenComponent, _admin_notificaties_admin_notificaties_component__WEBPACK_IMPORTED_MODULE_2__.AdminNotificatiesComponent],
        styles: [".admin-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.admin-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.admin-container[_ngcontent-%COMP%]     .mat-mdc-tab-body-content {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5hZG1pbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1tZGMtdGFiLWJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return AdminComponent;
})();

/***/ }),

/***/ 96836:
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/player-name.pipe */ 28445);
/* harmony import */ var _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-state/loading-state.component */ 77945);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ 53661);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ 26273);
/* harmony import */ var _admin_spelers_admin_spelers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-spelers/admin-spelers.component */ 52805);
/* harmony import */ var _admin_wedstrijden_admin_wedstrijden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-wedstrijden/admin-wedstrijden.component */ 46089);
/* harmony import */ var _admin_spelers_speler_dialog_speler_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-spelers/speler-dialog/speler-dialog.component */ 19046);
/* harmony import */ var _admin_wedstrijden_wedstrijd_dialog_wedstrijd_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-wedstrijden/wedstrijd-dialog/wedstrijd-dialog.component */ 65247);
/* harmony import */ var _admin_notificaties_admin_notificaties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-notificaties/admin-notificaties.component */ 71703);
/* harmony import */ var _admin_notificaties_test_broadcast_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-notificaties/test-broadcast-dialog.component */ 69128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);


























let AdminModule = /*#__PURE__*/(() => {
  class AdminModule {
    static {
      this.ɵfac = function AdminModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AdminModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__.LoadingStateComponent]
      });
    }
  }
  return AdminModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent, _admin_spelers_admin_spelers_component__WEBPACK_IMPORTED_MODULE_4__.AdminSpelersComponent, _admin_wedstrijden_admin_wedstrijden_component__WEBPACK_IMPORTED_MODULE_5__.AdminWedstrijdenComponent, _admin_spelers_speler_dialog_speler_dialog_component__WEBPACK_IMPORTED_MODULE_6__.SpelerDialogComponent, _admin_wedstrijden_wedstrijd_dialog_wedstrijd_dialog_component__WEBPACK_IMPORTED_MODULE_7__.WedstrijdDialogComponent, _admin_notificaties_admin_notificaties_component__WEBPACK_IMPORTED_MODULE_8__.AdminNotificatiesComponent, _admin_notificaties_test_broadcast_dialog_component__WEBPACK_IMPORTED_MODULE_9__.TestBroadcastDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _pipes_player_name_pipe__WEBPACK_IMPORTED_MODULE_0__.PlayerNamePipe, _loading_state_loading_state_component__WEBPACK_IMPORTED_MODULE_1__.LoadingStateComponent]
  });
})();

/***/ }),

/***/ 50103:
/*!*********************************************************!*\
  !*** ./src/app/services/beheer-notificaties.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeheerNotificatiesService: () => (/* binding */ BeheerNotificatiesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _utils_user_agent_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/user-agent-parser */ 92765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _data_sources_supabase_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-sources/supabase-client.service */ 72484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);







let BeheerNotificatiesService = /*#__PURE__*/(() => {
  class BeheerNotificatiesService {
    constructor(supabase, http) {
      this.supabase = supabase;
      this.http = http;
    }
    getSubscriptionsForAdmin() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.client.from('push_subscriptions').select('id, endpoint, user_agent, active, created_at, last_seen_at, player_id, players:player_id(id, name)').order('active', {
        ascending: false
      }).order('last_seen_at', {
        ascending: false,
        nullsFirst: false
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
        data,
        error
      }) => {
        if (error) throw error;
        return (data ?? []).map(row => ({
          id: row.id,
          endpoint: row.endpoint,
          playerName: row.players?.name ?? null,
          playerId: row.player_id ?? null,
          device: (0,_utils_user_agent_parser__WEBPACK_IMPORTED_MODULE_1__.parseUserAgent)(row.user_agent),
          active: !!row.active,
          createdAt: row.created_at ?? null,
          lastSeenAt: row.last_seen_at ?? null
        }));
      }));
    }
    getReminderHistory(limit = 50) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.client.from('reminder_log').select('id, sent_at, type, title, body, recipients_count, succeeded_count, expired_count').order('sent_at', {
        ascending: false
      }).limit(limit)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
        data,
        error
      }) => {
        if (error) throw error;
        return (data ?? []).map(row => ({
          id: row.id,
          sentAt: row.sent_at,
          type: row.type,
          title: row.title,
          body: row.body,
          recipientsCount: row.recipients_count,
          succeededCount: row.succeeded_count,
          expiredCount: row.expired_count
        }));
      }));
    }
    getAnalytics() {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.client.from('players').select('id, name, actief').eq('actief', true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.client.from('push_subscriptions').select('player_id, active, created_at')), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.supabase.client.from('reminder_log').select('recipients_count, succeeded_count, expired_count, sent_at').gte('sent_at', thirtyDaysAgo))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([playersRes, subsRes, logRes]) => {
        if (playersRes.error) throw playersRes.error;
        if (subsRes.error) throw subsRes.error;
        if (logRes.error) throw logRes.error;
        const activePlayers = playersRes.data ?? [];
        const subs = subsRes.data ?? [];
        const log = logRes.data ?? [];
        const reachablePlayerIds = new Set(subs.filter(s => s.active && s.player_id !== null).map(s => s.player_id));
        const reachableCount = activePlayers.filter(p => reachablePlayerIds.has(p.id)).length;
        const unreachablePlayers = activePlayers.filter(p => !reachablePlayerIds.has(p.id)).map(p => ({
          id: p.id,
          name: p.name
        }));
        const monthBuckets = new Map();
        const now = new Date();
        for (let i = 11; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          monthBuckets.set(key, 0);
        }
        for (const s of subs) {
          if (!s.created_at) continue;
          const d = new Date(s.created_at);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          if (monthBuckets.has(key)) {
            monthBuckets.set(key, (monthBuckets.get(key) ?? 0) + 1);
          }
        }
        const growthByMonth = Array.from(monthBuckets.entries()).map(([month, newSubsCount]) => ({
          month,
          newSubsCount
        }));
        const last30DaysStats = log.reduce((acc, r) => ({
          reminders: acc.reminders + 1,
          recipients: acc.recipients + (r.recipients_count ?? 0),
          succeeded: acc.succeeded + (r.succeeded_count ?? 0),
          expired: acc.expired + (r.expired_count ?? 0)
        }), {
          reminders: 0,
          recipients: 0,
          succeeded: 0,
          expired: 0
        });
        return {
          reachableCount,
          totalActiveCount: activePlayers.length,
          unreachablePlayers,
          growthByMonth,
          last30DaysStats
        };
      }));
    }
    sendTestBroadcast(title, body, url) {
      const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseBaseUrl}/sendPushToAll`;
      return this.http.post(endpoint, {
        type: 'broadcast-test',
        title,
        body,
        url: url || undefined
      });
    }
    static {
      this.ɵfac = function BeheerNotificatiesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BeheerNotificatiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_data_sources_supabase_client_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: BeheerNotificatiesService,
        factory: BeheerNotificatiesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return BeheerNotificatiesService;
})();

/***/ }),

/***/ 92765:
/*!********************************************!*\
  !*** ./src/app/utils/user-agent-parser.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)
/* harmony export */ });
/**
 * Vertaalt een browser user-agent string naar een leesbare "<browser> op <os>" string.
 * Returnt 'Onbekend' bij lege/null/onbekende input.
 *
 * Volgorde van detectie is belangrijk:
 *  - Edge moet vóór Chrome (Edg/ string staat ook 'Chrome' in)
 *  - iPhone vóór Mac (iPhone-UA bevat 'Mac OS X')
 *  - Android vóór Linux
 */
function parseUserAgent(ua) {
  if (!ua) return 'Onbekend';
  let browser = null;
  if (/\bEdg\//.test(ua)) browser = 'Edge';else if (/\bChrome\//.test(ua)) browser = 'Chrome';else if (/\bFirefox\//.test(ua)) browser = 'Firefox';else if (/\bSafari\//.test(ua) && /\bVersion\//.test(ua)) browser = 'Safari';
  let os = null;
  if (/iPhone|iPod/.test(ua)) os = 'iPhone';else if (/iPad/.test(ua)) os = 'iPad';else if (/Android/.test(ua)) os = 'Android';else if (/Windows NT/.test(ua)) os = 'Windows';else if (/Mac OS X/.test(ua)) os = 'Mac';else if (/Linux/.test(ua)) os = 'Linux';
  if (!browser || !os) return 'Onbekend';
  return `${browser} op ${os}`;
}

/***/ }),

/***/ 97024:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_CHECKBOX_REQUIRED_VALIDATOR: () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   MatCheckbox: () => (/* binding */ MatCheckbox),
/* harmony export */   MatCheckboxChange: () => (/* binding */ MatCheckboxChange),
/* harmony export */   MatCheckboxModule: () => (/* binding */ MatCheckboxModule),
/* harmony export */   MatCheckboxRequiredValidator: () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   TransitionCheckState: () => (/* binding */ TransitionCheckState),
/* harmony export */   _MatCheckboxRequiredValidatorModule: () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 74646);





/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate',
    disabledInteractive: false
  };
}

/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
var TransitionCheckState = /*#__PURE__*/function (TransitionCheckState) {
  /** The initial state of the component before any user interaction. */
  TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
  /** The state representing the component when it's becoming checked. */
  TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
  /** The state representing the component when it's becoming unchecked. */
  TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
  /** The state representing the component when it's becoming indeterminate. */
  TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
  return TransitionCheckState;
}(TransitionCheckState || {});
/**
 * @deprecated Will stop being exported.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by checkbox. */
class MatCheckboxChange {}
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = /*#__PURE__*/MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
let MatCheckbox = /*#__PURE__*/(() => {
  class MatCheckbox {
    /** Focuses the checkbox. */
    focus() {
      this._inputElement.nativeElement.focus();
    }
    /** Creates the change event that will be emitted by the checkbox. */
    _createChangeEvent(isChecked) {
      const event = new MatCheckboxChange();
      event.source = this;
      event.checked = isChecked;
      return event;
    }
    /** Gets the element on which to add the animation CSS classes. */
    _getAnimationTargetElement() {
      return this._inputElement?.nativeElement;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() {
      return `${this.id || this._uniqueId}-input`;
    }
    constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._ngZone = _ngZone;
      this._animationMode = _animationMode;
      this._options = _options;
      /** CSS classes to add when transitioning between the different checkbox states. */
      this._animationClasses = {
        uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
        uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
        checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
        checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
        indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
        indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked'
      };
      /**
       * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
       * take precedence so this may be omitted.
       */
      this.ariaLabel = '';
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      this.ariaLabelledby = null;
      /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
      this.labelPosition = 'after';
      /** Name value will be applied to the input element if present */
      this.name = null;
      /** Event emitted when the checkbox's `checked` value changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the checkbox's `indeterminate` value changes. */
      this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
       * @docs-private
       */
      this._onTouched = () => {};
      this._currentAnimationClass = '';
      this._currentCheckState = TransitionCheckState.Init;
      this._controlValueAccessorChangeFn = () => {};
      this._validatorChangeFn = () => {};
      this._checked = false;
      this._disabled = false;
      this._indeterminate = false;
      this._options = this._options || defaults;
      this.color = this._options.color || defaults.color;
      this.tabIndex = parseInt(tabIndex) || 0;
      this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
      this.disabledInteractive = _options?.disabledInteractive ?? false;
    }
    ngOnChanges(changes) {
      if (changes['required']) {
        this._validatorChangeFn();
      }
    }
    ngAfterViewInit() {
      this._syncIndeterminate(this._indeterminate);
    }
    /** Whether the checkbox is checked. */
    get checked() {
      return this._checked;
    }
    set checked(value) {
      if (value != this.checked) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    /** Whether the checkbox is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      if (value !== this.disabled) {
        this._disabled = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() {
      return this._indeterminate;
    }
    set indeterminate(value) {
      const changed = value != this._indeterminate;
      this._indeterminate = value;
      if (changed) {
        if (this._indeterminate) {
          this._transitionCheckState(TransitionCheckState.Indeterminate);
        } else {
          this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        }
        this.indeterminateChange.emit(this._indeterminate);
      }
      this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
      // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
      // component will be only marked for check, but no actual change detection runs automatically.
      // Instead of going back into the zone in order to trigger a change detection which causes
      // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
      // an explicit change detection for the checkbox view and its children.
      this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
      this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    // Implemented as a part of Validator.
    validate(control) {
      return this.required && control.value !== true ? {
        'required': true
      } : null;
    }
    // Implemented as a part of Validator.
    registerOnValidatorChange(fn) {
      this._validatorChangeFn = fn;
    }
    _transitionCheckState(newState) {
      let oldState = this._currentCheckState;
      let element = this._getAnimationTargetElement();
      if (oldState === newState || !element) {
        return;
      }
      if (this._currentAnimationClass) {
        element.classList.remove(this._currentAnimationClass);
      }
      this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
      this._currentCheckState = newState;
      if (this._currentAnimationClass.length > 0) {
        element.classList.add(this._currentAnimationClass);
        // Remove the animation class to avoid animation when the checkbox is moved between containers
        const animationClass = this._currentAnimationClass;
        this._ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            element.classList.remove(animationClass);
          }, 1000);
        });
      }
    }
    _emitChangeEvent() {
      this._controlValueAccessorChangeFn(this.checked);
      this.change.emit(this._createChangeEvent(this.checked));
      // Assigning the value again here is redundant, but we have to do it in case it was
      // changed inside the `change` listener which will cause the input to be out of sync.
      if (this._inputElement) {
        this._inputElement.nativeElement.checked = this.checked;
      }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
      this.checked = !this.checked;
      this._controlValueAccessorChangeFn(this.checked);
    }
    _handleInputClick() {
      const clickAction = this._options?.clickAction;
      // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
      if (!this.disabled && clickAction !== 'noop') {
        // When user manually click on the checkbox, `indeterminate` is set to false.
        if (this.indeterminate && clickAction !== 'check') {
          Promise.resolve().then(() => {
            this._indeterminate = false;
            this.indeterminateChange.emit(this._indeterminate);
          });
        }
        this._checked = !this._checked;
        this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        // Emit our custom change event if the native input emitted one.
        // It is important to only emit it, if the native input triggered one, because
        // we don't want to trigger a change event, when the `checked` variable changes for example.
        this._emitChangeEvent();
      } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === 'noop') {
        // Reset native input when clicked with noop. The native checkbox becomes checked after
        // click, reset it to be align with `checked` value of `mat-checkbox`.
        this._inputElement.nativeElement.checked = this.checked;
        this._inputElement.nativeElement.indeterminate = this.indeterminate;
      }
    }
    _onInteractionEvent(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
      event.stopPropagation();
    }
    _onBlur() {
      // When a focused element becomes disabled, the browser *immediately* fires a blur event.
      // Angular does not expect events to be raised during change detection, so any state change
      // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
      // See https://github.com/angular/angular/issues/17793. To work around this, we defer
      // telling the form control it has been touched until the next tick.
      Promise.resolve().then(() => {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
      });
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
      // Don't transition if animations are disabled.
      if (this._animationMode === 'NoopAnimations') {
        return '';
      }
      switch (oldState) {
        case TransitionCheckState.Init:
          // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
          // [checked] bound to it.
          if (newState === TransitionCheckState.Checked) {
            return this._animationClasses.uncheckedToChecked;
          } else if (newState == TransitionCheckState.Indeterminate) {
            return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
          }
          break;
        case TransitionCheckState.Unchecked:
          return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
        case TransitionCheckState.Checked:
          return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
        case TransitionCheckState.Indeterminate:
          return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
      }
      return '';
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
      const nativeCheckbox = this._inputElement;
      if (nativeCheckbox) {
        nativeCheckbox.nativeElement.indeterminate = value;
      }
    }
    _onInputClick() {
      this._handleInputClick();
    }
    _onTouchTargetClick() {
      this._handleInputClick();
      if (!this.disabled) {
        // Normally the input should be focused already, but if the click
        // comes from the touch target, then we might have to focus it ourselves.
        this._inputElement.nativeElement.focus();
      }
    }
    /**
     *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
     *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
     *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
     *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
     *  bubbles when the label is clicked.
     */
    _preventBubblingFromLabel(event) {
      if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
        event.stopPropagation();
      }
    }
    static {
      this.ɵfac = function MatCheckbox_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCheckbox,
        selectors: [["mat-checkbox"]],
        viewQuery: function MatCheckbox_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-checkbox"],
        hostVars: 16,
        hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "mat-accent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
          }
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          id: "id",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          labelPosition: "labelPosition",
          name: "name",
          value: "value",
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
          color: "color",
          disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          checked: [2, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          indeterminate: [2, "indeterminate", "indeterminate", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange"
        },
        exportAs: ["matCheckbox"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
          useExisting: MatCheckbox,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c2,
        decls: 15,
        vars: 20,
        consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
        template: function MatCheckbox_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._preventBubblingFromLabel($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4, 0)(3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onTouchTargetClick());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatCheckbox_Template_input_blur_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onBlur());
            })("click", function MatCheckbox_Template_input_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onInputClick());
            })("change", function MatCheckbox_Template_input_change_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onInteractionEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            const checkbox_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelPosition", ctx.labelPosition);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--selected", ctx.checked);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("name", ctx.name)("value", ctx.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__._MatInternalFormField],
        styles: [".mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCheckbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 *
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
let MatCheckboxRequiredValidator = /*#__PURE__*/(() => {
  class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatCheckboxRequiredValidator_BaseFactory;
        return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
          return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(__ngFactoryType__ || MatCheckboxRequiredValidator);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCheckboxRequiredValidator,
        selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatCheckboxRequiredValidator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
let _MatCheckboxRequiredValidatorModule = /*#__PURE__*/(() => {
  class _MatCheckboxRequiredValidatorModule {
    static {
      this.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCheckboxRequiredValidatorModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatCheckboxRequiredValidatorModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return _MatCheckboxRequiredValidatorModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatCheckboxModule = /*#__PURE__*/(() => {
  class MatCheckboxModule {
    static {
      this.ɵfac = function MatCheckboxModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCheckboxModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCheckboxModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });
    }
  }
  return MatCheckboxModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 61977:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/datepicker.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRange: () => (/* binding */ DateRange),
/* harmony export */   DefaultMatCalendarRangeStrategy: () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MAT_DATEPICKER_VALIDATORS: () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   MAT_DATEPICKER_VALUE_ACCESSOR: () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   MAT_DATE_RANGE_SELECTION_STRATEGY: () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MatCalendar: () => (/* binding */ MatCalendar),
/* harmony export */   MatCalendarBody: () => (/* binding */ MatCalendarBody),
/* harmony export */   MatCalendarCell: () => (/* binding */ MatCalendarCell),
/* harmony export */   MatCalendarHeader: () => (/* binding */ MatCalendarHeader),
/* harmony export */   MatDateRangeInput: () => (/* binding */ MatDateRangeInput),
/* harmony export */   MatDateRangePicker: () => (/* binding */ MatDateRangePicker),
/* harmony export */   MatDateSelectionModel: () => (/* binding */ MatDateSelectionModel),
/* harmony export */   MatDatepicker: () => (/* binding */ MatDatepicker),
/* harmony export */   MatDatepickerActions: () => (/* binding */ MatDatepickerActions),
/* harmony export */   MatDatepickerApply: () => (/* binding */ MatDatepickerApply),
/* harmony export */   MatDatepickerCancel: () => (/* binding */ MatDatepickerCancel),
/* harmony export */   MatDatepickerContent: () => (/* binding */ MatDatepickerContent),
/* harmony export */   MatDatepickerInput: () => (/* binding */ MatDatepickerInput),
/* harmony export */   MatDatepickerInputEvent: () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   MatDatepickerIntl: () => (/* binding */ MatDatepickerIntl),
/* harmony export */   MatDatepickerModule: () => (/* binding */ MatDatepickerModule),
/* harmony export */   MatDatepickerToggle: () => (/* binding */ MatDatepickerToggle),
/* harmony export */   MatDatepickerToggleIcon: () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   MatEndDate: () => (/* binding */ MatEndDate),
/* harmony export */   MatMonthView: () => (/* binding */ MatMonthView),
/* harmony export */   MatMultiYearView: () => (/* binding */ MatMultiYearView),
/* harmony export */   MatRangeDateSelectionModel: () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   MatSingleDateSelectionModel: () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   MatStartDate: () => (/* binding */ MatStartDate),
/* harmony export */   MatYearView: () => (/* binding */ MatYearView),
/* harmony export */   matDatepickerAnimations: () => (/* binding */ matDatepickerAnimations),
/* harmony export */   yearsPerPage: () => (/* binding */ yearsPerPage),
/* harmony export */   yearsPerRow: () => (/* binding */ yearsPerRow)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 95541);
























/** @docs-private */
const _c0 = ["mat-calendar-body", ""];
function _forTrack0($index, $item) {
  return this._trackRow($item);
}
const _forTrack1 = ($index, $item) => $item.id;
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 0)(1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0._cellClicked(item_r3, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ɵ$index_14_r4 = ctx.$index;
    const ɵ$index_7_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", ɵ$index_7_r5)("data-mat-col", ɵ$index_14_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(ɵ$index_7_r5, ɵ$index_14_r4) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ɵ$index_7_r5 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ɵ$index_7_r5 === 0 && ctx_r0._firstRowOffset ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](row_r6);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 2)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
  }
}
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._goToDateInView($event, "month"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._goToDateInView($event, "year"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {}
const _c2 = ["button"];
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following ` + `to your app config: provideNativeDateAdapter, provideDateFnsAdapter, ` + `provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}

/** Datepicker data that requires internationalization. */
let MatDatepickerIntl = /*#__PURE__*/(() => {
  class MatDatepickerIntl {
    constructor() {
      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** A label for the calendar popup (used by screen readers). */
      this.calendarLabel = 'Calendar';
      /** A label for the button used to open the calendar popup (used by screen readers). */
      this.openCalendarLabel = 'Open calendar';
      /** Label for the button used to close the calendar popup. */
      this.closeCalendarLabel = 'Close calendar';
      /** A label for the previous month button (used by screen readers). */
      this.prevMonthLabel = 'Previous month';
      /** A label for the next month button (used by screen readers). */
      this.nextMonthLabel = 'Next month';
      /** A label for the previous year button (used by screen readers). */
      this.prevYearLabel = 'Previous year';
      /** A label for the next year button (used by screen readers). */
      this.nextYearLabel = 'Next year';
      /** A label for the previous multi-year button (used by screen readers). */
      this.prevMultiYearLabel = 'Previous 24 years';
      /** A label for the next multi-year button (used by screen readers). */
      this.nextMultiYearLabel = 'Next 24 years';
      /** A label for the 'switch to month view' button (used by screen readers). */
      this.switchToMonthViewLabel = 'Choose date';
      /** A label for the 'switch to year view' button (used by screen readers). */
      this.switchToMultiYearViewLabel = 'Choose month and year';
      /**
       * A label for the first date of a range of dates (used by screen readers).
       * @deprecated Provide your own internationalization string.
       * @breaking-change 17.0.0
       */
      this.startDateLabel = 'Start date';
      /**
       * A label for the last date of a range of dates (used by screen readers).
       * @deprecated Provide your own internationalization string.
       * @breaking-change 17.0.0
       */
      this.endDateLabel = 'End date';
    }
    /** Formats a range of years (used for visuals). */
    formatYearRange(start, end) {
      return `${start} \u2013 ${end}`;
    }
    /** Formats a label for a range of years (used by screen readers). */
    formatYearRangeLabel(start, end) {
      return `${start} to ${end}`;
    }
    static {
      this.ɵfac = function MatDatepickerIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerIntl)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatDatepickerIntl,
        factory: MatDatepickerIntl.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatDatepickerIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let uniqueIdCounter$1 = 0;
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
    this.id = uniqueIdCounter$1++;
  }
}
let calendarBodyId = 1;
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Event options that can be used to bind a passive, capturing event. */
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Event options that can be used to bind a passive, non-capturing event. */
const passiveEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
let MatCalendarBody = /*#__PURE__*/(() => {
  class MatCalendarBody {
    ngAfterViewChecked() {
      if (this._focusActiveCellAfterViewChecked) {
        this._focusActiveCell();
        this._focusActiveCellAfterViewChecked = false;
      }
    }
    constructor(_elementRef, _ngZone) {
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
      /**
       * Used to focus the active cell after change detection has run.
       */
      this._focusActiveCellAfterViewChecked = false;
      /** The number of columns in the table. */
      this.numCols = 7;
      /** The cell number of the active cell in the table. */
      this.activeCell = 0;
      /** Whether a range is being selected. */
      this.isRange = false;
      /**
       * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
       * maintained even as the table resizes.
       */
      this.cellAspectRatio = 1;
      /** Start of the preview range. */
      this.previewStart = null;
      /** End of the preview range. */
      this.previewEnd = null;
      /** Emits when a new value is selected. */
      this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the preview has changed as a result of a user action. */
      this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the date at the possible start of a drag event. */
      this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
      this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._didDragSinceMouseDown = false;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      /**
       * Tracking function for rows based on their identity. Ideally we would use some sort of
       * key on the row, but that would require a breaking change for the `rows` input. We don't
       * use the built-in identity tracking, because it logs warnings.
       */
      this._trackRow = row => row;
      /**
       * Event handler for when the user enters an element
       * inside the calendar body (e.g. by hovering in or focus).
       */
      this._enterHandler = event => {
        if (this._skipNextFocus && event.type === 'focus') {
          this._skipNextFocus = false;
          return;
        }
        // We only need to hit the zone when we're selecting a range.
        if (event.target && this.isRange) {
          const cell = this._getCellFromElement(event.target);
          if (cell) {
            this._ngZone.run(() => this.previewChange.emit({
              value: cell.enabled ? cell : null,
              event
            }));
          }
        }
      };
      this._touchmoveHandler = event => {
        if (!this.isRange) return;
        const target = getActualTouchTarget(event);
        const cell = target ? this._getCellFromElement(target) : null;
        if (target !== event.target) {
          this._didDragSinceMouseDown = true;
        }
        // If the initial target of the touch is a date cell, prevent default so
        // that the move is not handled as a scroll.
        if (getCellElement(event.target)) {
          event.preventDefault();
        }
        this._ngZone.run(() => this.previewChange.emit({
          value: cell?.enabled ? cell : null,
          event
        }));
      };
      /**
       * Event handler for when the user's pointer leaves an element
       * inside the calendar body (e.g. by hovering out or blurring).
       */
      this._leaveHandler = event => {
        // We only need to hit the zone when we're selecting a range.
        if (this.previewEnd !== null && this.isRange) {
          if (event.type !== 'blur') {
            this._didDragSinceMouseDown = true;
          }
          // Only reset the preview end value when leaving cells. This looks better, because
          // we have a gap between the cells and the rows and we don't want to remove the
          // range just for it to show up again when the user moves a few pixels to the side.
          if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
            this._ngZone.run(() => this.previewChange.emit({
              value: null,
              event
            }));
          }
        }
      };
      /**
       * Triggered on mousedown or touchstart on a date cell.
       * Respsonsible for starting a drag sequence.
       */
      this._mousedownHandler = event => {
        if (!this.isRange) return;
        this._didDragSinceMouseDown = false;
        // Begin a drag if a cell within the current range was targeted.
        const cell = event.target && this._getCellFromElement(event.target);
        if (!cell || !this._isInRange(cell.compareValue)) {
          return;
        }
        this._ngZone.run(() => {
          this.dragStarted.emit({
            value: cell.rawValue,
            event
          });
        });
      };
      /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
      this._mouseupHandler = event => {
        if (!this.isRange) return;
        const cellElement = getCellElement(event.target);
        if (!cellElement) {
          // Mouseup happened outside of datepicker. Cancel drag.
          this._ngZone.run(() => {
            this.dragEnded.emit({
              value: null,
              event
            });
          });
          return;
        }
        if (cellElement.closest('.mat-calendar-body') !== this._elementRef.nativeElement) {
          // Mouseup happened inside a different month instance.
          // Allow it to handle the event.
          return;
        }
        this._ngZone.run(() => {
          const cell = this._getCellFromElement(cellElement);
          this.dragEnded.emit({
            value: cell?.rawValue ?? null,
            event
          });
        });
      };
      /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
      this._touchendHandler = event => {
        const target = getActualTouchTarget(event);
        if (target) {
          this._mouseupHandler({
            target
          });
        }
      };
      this._id = `mat-calendar-body-${calendarBodyId++}`;
      this._startDateLabelId = `${this._id}-start-date`;
      this._endDateLabelId = `${this._id}-end-date`;
      _ngZone.runOutsideAngular(() => {
        const element = _elementRef.nativeElement;
        // `touchmove` is active since we need to call `preventDefault`.
        element.addEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
        element.addEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
        element.addEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
        element.addEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
        element.addEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
        element.addEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
        element.addEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
        if (this._platform.isBrowser) {
          window.addEventListener('mouseup', this._mouseupHandler);
          window.addEventListener('touchend', this._touchendHandler);
        }
      });
    }
    /** Called when a cell is clicked. */
    _cellClicked(cell, event) {
      // Ignore "clicks" that are actually canceled drags (eg the user dragged
      // off and then went back to this cell to undo).
      if (this._didDragSinceMouseDown) {
        return;
      }
      if (cell.enabled) {
        this.selectedValueChange.emit({
          value: cell.value,
          event
        });
      }
    }
    _emitActiveDateChange(cell, event) {
      if (cell.enabled) {
        this.activeDateChange.emit({
          value: cell.value,
          event
        });
      }
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
      return this.startValue === value || this.endValue === value;
    }
    ngOnChanges(changes) {
      const columnChanges = changes['numCols'];
      const {
        rows,
        numCols
      } = this;
      if (changes['rows'] || columnChanges) {
        this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
      }
      if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
        this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
      }
      if (columnChanges || !this._cellWidth) {
        this._cellWidth = `${100 / numCols}%`;
      }
    }
    ngOnDestroy() {
      const element = this._elementRef.nativeElement;
      element.removeEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
      element.removeEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
      element.removeEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
      element.removeEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
      element.removeEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
      element.removeEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
      element.removeEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.removeEventListener('mouseup', this._mouseupHandler);
        window.removeEventListener('touchend', this._touchendHandler);
      }
    }
    /** Returns whether a cell is active. */
    _isActiveCell(rowIndex, colIndex) {
      let cellNumber = rowIndex * this.numCols + colIndex;
      // Account for the fact that the first row may not have as many cells.
      if (rowIndex) {
        cellNumber -= this._firstRowOffset;
      }
      return cellNumber == this.activeCell;
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     *
     * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
     * (issue #24330).
     *
     * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
     * reader enabled:
     *
     * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
     * 2. Pressing and holding the PageDown key with repeated keys enabled.
     *
     * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
     * increased. Test 2 got slightly better until the duration was long enough to interfere with
     * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
     * and holding pagedown caused the entire page to scroll.
     *
     * Since repeated key speed can verify across machines, determined that any duration could
     * potentially interfere with repeated keys. 0ms would be best because it almost entirely
     * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
     * Adding delay also complicates writing tests.
     */
    _focusActiveCell(movePreview = true) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      }, {
        injector: this._injector
      });
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _scheduleFocusActiveCellAfterViewChecked() {
      this._focusActiveCellAfterViewChecked = true;
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
      return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
      return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
      return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */
    _isComparisonStart(value) {
      return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
      if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
        return false;
      }
      let previousCell = this.rows[rowIndex][colIndex - 1];
      if (!previousCell) {
        const previousRow = this.rows[rowIndex - 1];
        previousCell = previousRow && previousRow[previousRow.length - 1];
      }
      return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
      if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
        return false;
      }
      let nextCell = this.rows[rowIndex][colIndex + 1];
      if (!nextCell) {
        const nextRow = this.rows[rowIndex + 1];
        nextCell = nextRow && nextRow[0];
      }
      return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */
    _isComparisonEnd(value) {
      return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */
    _isInComparisonRange(value) {
      return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */
    _isComparisonIdentical(value) {
      // Note that we don't need to null check the start/end
      // here, because the `value` will always be defined.
      return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
      return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
      return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
      return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Gets ids of aria descriptions for the start and end of a date range. */
    _getDescribedby(value) {
      if (!this.isRange) {
        return null;
      }
      if (this.startValue === value && this.endValue === value) {
        return `${this._startDateLabelId} ${this._endDateLabelId}`;
      } else if (this.startValue === value) {
        return this._startDateLabelId;
      } else if (this.endValue === value) {
        return this._endDateLabelId;
      }
      return null;
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */
    _getCellFromElement(element) {
      const cell = getCellElement(element);
      if (cell) {
        const row = cell.getAttribute('data-mat-row');
        const col = cell.getAttribute('data-mat-col');
        if (row && col) {
          return this.rows[parseInt(row)][parseInt(col)];
        }
      }
      return null;
    }
    static {
      this.ɵfac = function MatCalendarBody_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendarBody,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: [1, "mat-calendar-body"],
        inputs: {
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName"
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange",
          activeDateChange: "activeDateChange",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded"
        },
        exportAs: ["matCalendarBody"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        decls: 7,
        vars: 5,
        consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
        template: function MatCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, MatCalendarBody_For_2_Template, 4, 1, "tr", 1, _forTrack0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._startDateLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.startDateAccessibleName, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._endDateLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.endDateAccessibleName, "\n");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-app-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-app-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-app-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-app-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-app-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-app-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-app-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-app-secondary))}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendarBody;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
  return node?.nodeName === 'TD';
}
/**
 * Gets the date table cell element that is or contains the specified element.
 * Or returns null if element is not part of a date cell.
 */
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute('data-mat-row') != null ? cell : null;
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
/**
 * Extracts the element that actually corresponds to a touch event's location
 * (rather than the element that initiated the sequence of touch events).
 */
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}

/** A class representing a range of dates. */
class DateRange {
  constructor(/** The start date of the range. */
  start, /** The end date of the range. */
  end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
let MatDateSelectionModel = /*#__PURE__*/(() => {
  class MatDateSelectionModel {
    constructor(/** The current selection. */
    selection, _adapter) {
      this.selection = selection;
      this._adapter = _adapter;
      this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Emits when the selection has changed. */
      this.selectionChanged = this._selectionChanged;
      this.selection = selection;
    }
    /**
     * Updates the current selection in the model.
     * @param value New selection that should be assigned.
     * @param source Object that triggered the selection change.
     */
    updateSelection(value, source) {
      const oldValue = this.selection;
      this.selection = value;
      this._selectionChanged.next({
        selection: value,
        source,
        oldValue
      });
    }
    ngOnDestroy() {
      this._selectionChanged.complete();
    }
    _isValidDateInstance(date) {
      return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
    static {
      this.ɵfac = function MatDateSelectionModel_Factory(__ngFactoryType__) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatDateSelectionModel,
        factory: MatDateSelectionModel.ɵfac
      });
    }
  }
  return MatDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
let MatSingleDateSelectionModel = /*#__PURE__*/(() => {
  class MatSingleDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
      super(null, adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a single date selection, the added date
     * simply overwrites the previous selection
     */
    add(date) {
      super.updateSelection(date, this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
      return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */
    isComplete() {
      return this.selection != null;
    }
    /** Clones the selection model. */
    clone() {
      const clone = new MatSingleDateSelectionModel(this._adapter);
      clone.updateSelection(this.selection, this);
      return clone;
    }
    static {
      this.ɵfac = function MatSingleDateSelectionModel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatSingleDateSelectionModel,
        factory: MatSingleDateSelectionModel.ɵfac
      });
    }
  }
  return MatSingleDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
let MatRangeDateSelectionModel = /*#__PURE__*/(() => {
  class MatRangeDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
      super(new DateRange(null, null), adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a date range selection, the added date
     * fills in the next `null` value in the range. If both the start and the end already have a date,
     * the selection is reset so that the given date is the new `start` and the `end` is null.
     */
    add(date) {
      let {
        start,
        end
      } = this.selection;
      if (start == null) {
        start = date;
      } else if (end == null) {
        end = date;
      } else {
        start = date;
        end = null;
      }
      super.updateSelection(new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
      const {
        start,
        end
      } = this.selection;
      // Empty ranges are valid.
      if (start == null && end == null) {
        return true;
      }
      // Complete ranges are only valid if both dates are valid and the start is before the end.
      if (start != null && end != null) {
        return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
      }
      // Partial ranges are valid if the start/end is valid.
      return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */
    isComplete() {
      return this.selection.start != null && this.selection.end != null;
    }
    /** Clones the selection model. */
    clone() {
      const clone = new MatRangeDateSelectionModel(this._adapter);
      clone.updateSelection(this.selection, this);
      return clone;
    }
    static {
      this.ɵfac = function MatRangeDateSelectionModel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatRangeDateSelectionModel,
        factory: MatRangeDateSelectionModel.ɵfac
      });
    }
  }
  return MatRangeDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};

/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
let DefaultMatCalendarRangeStrategy = /*#__PURE__*/(() => {
  class DefaultMatCalendarRangeStrategy {
    constructor(_dateAdapter) {
      this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date, currentRange) {
      let {
        start,
        end
      } = currentRange;
      if (start == null) {
        start = date;
      } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
        end = date;
      } else {
        start = date;
        end = null;
      }
      return new DateRange(start, end);
    }
    createPreview(activeDate, currentRange) {
      let start = null;
      let end = null;
      if (currentRange.start && !currentRange.end && activeDate) {
        start = currentRange.start;
        end = activeDate;
      }
      return new DateRange(start, end);
    }
    createDrag(dragOrigin, originalRange, newDate) {
      let start = originalRange.start;
      let end = originalRange.end;
      if (!start || !end) {
        // Can't drag from an incomplete range.
        return null;
      }
      const adapter = this._dateAdapter;
      const isRange = adapter.compareDate(start, end) !== 0;
      const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
      const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
      const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
      if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
        start = newDate;
        if (adapter.compareDate(newDate, end) > 0) {
          end = adapter.addCalendarYears(end, diffYears);
          end = adapter.addCalendarMonths(end, diffMonths);
          end = adapter.addCalendarDays(end, diffDays);
        }
      } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
        end = newDate;
        if (adapter.compareDate(newDate, start) < 0) {
          start = adapter.addCalendarYears(start, diffYears);
          start = adapter.addCalendarMonths(start, diffMonths);
          start = adapter.addCalendarDays(start, diffDays);
        }
      } else {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
      return new DateRange(start, end);
    }
    static {
      this.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DefaultMatCalendarRangeStrategy,
        factory: DefaultMatCalendarRangeStrategy.ɵfac
      });
    }
  }
  return DefaultMatCalendarRangeStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
const DAYS_PER_WEEK = 7;
let uniqueIdCounter = 0;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
let MatMonthView = /*#__PURE__*/(() => {
  class MatMonthView {
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      const oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setRanges(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateFormats = _dateFormats;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rangeStrategy = _rangeStrategy;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Origin of active drag, or null when dragging is not active. */
      this.activeDrag = null;
      /** Emits when a new date is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is selected. */
      this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the user initiates a date range drag via mouse or touch. */
      this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the user completes or cancels a date range drag.
       * Emits null when the drag was canceled or the newly selected date range if completed.
       */
      this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnChanges(changes) {
      const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
      if (comparisonChange && !comparisonChange.firstChange) {
        this._setRanges(this.selected);
      }
      if (changes['activeDrag'] && !this.activeDrag) {
        this._clearPreview();
      }
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */
    _dateSelected(event) {
      const date = event.value;
      const selectedDate = this._getDateFromDayOfMonth(date);
      let rangeStartDate;
      let rangeEndDate;
      if (this._selected instanceof DateRange) {
        rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
        rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
      } else {
        rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
      }
      if (rangeStartDate !== date || rangeEndDate !== date) {
        this.selectedChange.emit(selectedDate);
      }
      this._userSelection.emit({
        value: selectedDate,
        event: event.event
      });
      this._clearPreview();
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const month = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromDayOfMonth(month);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this._activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          this._selectionKeyPressed = true;
          if (this._canSelect(this._activeDate)) {
            // Prevent unexpected default actions such as form submission.
            // Note that we only prevent the default action here while the selection happens in
            // `keyup` below. We can't do the selection here, because it can cause the calendar to
            // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
            // because it's too late (see #23305).
            event.preventDefault();
          }
          return;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE:
          // Abort the current range selection if the user presses escape mid-selection.
          if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
            this._clearPreview();
            // If a drag is in progress, cancel the drag without changing the
            // current selection.
            if (this.activeDrag) {
              this.dragEnded.emit({
                value: null,
                event
              });
            } else {
              this.selectedChange.emit(null);
              this._userSelection.emit({
                value: null,
                event
              });
            }
            event.preventDefault();
            event.stopPropagation(); // Prevents the overlay from closing.
          }
          return;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
        this._focusActiveCellAfterViewChecked();
      }
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
          this._dateSelected({
            value: this._dateAdapter.getDate(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    /** Initializes this month view. */
    _init() {
      this._setRanges(this.selected);
      this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
      this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
      let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
      this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
      this._initWeekdays();
      this._createWeekCells();
      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview) {
      this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */
    _previewChanged({
      event,
      value: cell
    }) {
      if (this._rangeStrategy) {
        // We can assume that this will be a range, because preview
        // events aren't fired for single date selections.
        const value = cell ? cell.rawValue : null;
        const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
        this._previewStart = this._getCellCompareValue(previewRange.start);
        this._previewEnd = this._getCellCompareValue(previewRange.end);
        if (this.activeDrag && value) {
          const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
          if (dragRange) {
            this._previewStart = this._getCellCompareValue(dragRange.start);
            this._previewEnd = this._getCellCompareValue(dragRange.end);
          }
        }
        // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
        // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
        // when navigating one month back using the keyboard which will cause this handler
        // to throw a "changed after checked" error when updating the preview state.
        this._changeDetectorRef.detectChanges();
      }
    }
    /**
     * Called when the user has ended a drag. If the drag/drop was successful,
     * computes and emits the new range selection.
     */
    _dragEnded(event) {
      if (!this.activeDrag) return;
      if (event.value) {
        // Propagate drag effect
        const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
        this.dragEnded.emit({
          value: dragDropResult ?? null,
          event: event.event
        });
      } else {
        this.dragEnded.emit({
          value: null,
          event: event.event
        });
      }
    }
    /**
     * Takes a day of the month and returns a new date in the same month and year as the currently
     *  active date. The returned date will have the same day of the month as the argument date.
     */
    _getDateFromDayOfMonth(dayOfMonth) {
      return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
    }
    /** Initializes the weekdays. */
    _initWeekdays() {
      const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
      const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
      const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
      // Rotate the labels for days of the week based on the configured first day of the week.
      let weekdays = longWeekdays.map((long, i) => {
        return {
          long,
          narrow: narrowWeekdays[i],
          id: uniqueIdCounter++
        };
      });
      this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */
    _createWeekCells() {
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
      const dateNames = this._dateAdapter.getDateNames();
      this._weeks = [[]];
      for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
        if (cell == DAYS_PER_WEEK) {
          this._weeks.push([]);
          cell = 0;
        }
        const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
        const enabled = this._shouldEnableDate(date);
        const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
        const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
        this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
      }
    }
    /** Date filter for the month */
    _shouldEnableDate(date) {
      return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
      return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    _hasSameMonthAndYear(d1, d2) {
      return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */
    _getCellCompareValue(date) {
      if (date) {
        // We use the time since the Unix epoch to compare dates in this view, rather than the
        // cell values, because we need to support ranges that span across multiple months/years.
        const year = this._dateAdapter.getYear(date);
        const month = this._dateAdapter.getMonth(date);
        const day = this._dateAdapter.getDate(date);
        return new Date(year, month, day).getTime();
      }
      return null;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */
    _setRanges(selectedValue) {
      if (selectedValue instanceof DateRange) {
        this._rangeStart = this._getCellCompareValue(selectedValue.start);
        this._rangeEnd = this._getCellCompareValue(selectedValue.end);
        this._isRange = true;
      } else {
        this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
        this._isRange = false;
      }
      this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
      this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
    /** Gets whether a date can be selected in the month view. */
    _canSelect(date) {
      return !this.dateFilter || this.dateFilter(date);
    }
    /** Clears out preview state. */
    _clearPreview() {
      this._previewStart = this._previewEnd = null;
    }
    static {
      this.ɵfac = function MatMonthView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMonthView,
        selectors: [["mat-month-view"]],
        viewQuery: function MatMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName",
          activeDrag: "activeDrag"
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMonthView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 8,
        vars: 14,
        consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
        template: function MatMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, MatMonthView_For_4_Template, 5, 2, "th", 2, _forTrack1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
              return ctx._dateSelected($event);
            })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
              return ctx._updateActiveDate($event);
            })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
              return ctx._previewChanged($event);
            })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
              return ctx.dragStarted.emit($event);
            })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
              return ctx._dragEnded($event);
            })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._weekdays);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatMonthView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
let MatMultiYearView = /*#__PURE__*/(() => {
  class MatMultiYearView {
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      let oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setSelectedYear(value);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Emits when a new year is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the selected year. This doesn't imply a change on the selected date */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */
    _init() {
      this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
      // We want a range years such that we maximize the number of
      // enabled dates visible at once. This prevents issues where the minimum year
      // is the last item of a page OR the maximum year is the first item of a page.
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view.
      const activeYear = this._dateAdapter.getYear(this._activeDate);
      const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
      this._years = [];
      for (let i = 0, row = []; i < yearsPerPage; i++) {
        row.push(minYearOfPage + i);
        if (row.length == yearsPerRow) {
          this._years.push(row.map(year => this._createCellForYear(year)));
          row = [];
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    _yearSelected(event) {
      const year = event.value;
      const selectedYear = this._dateAdapter.createDate(year, 0, 1);
      const selectedDate = this._getDateFromYear(year);
      this.yearSelected.emit(selectedYear);
      this.selectedChange.emit(selectedDate);
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const year = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromYear(year);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeydown(event) {
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          this._selectionKeyPressed = true;
          break;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
      this._focusActiveCellAfterViewChecked();
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed) {
          this._yearSelected({
            value: this._dateAdapter.getYear(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    _getActiveCell() {
      return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /**
     * Takes a year and returns a new date on the same day and month as the currently active date
     *  The returned date will have the same year as the argument date.
     */
    _getDateFromYear(year) {
      const activeMonth = this._dateAdapter.getMonth(this.activeDate);
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
      const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
      return normalizedDate;
    }
    /** Creates an MatCalendarCell for the given year. */
    _createCellForYear(year) {
      const date = this._dateAdapter.createDate(year, 0, 1);
      const yearName = this._dateAdapter.getYearName(date);
      const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
      return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */
    _shouldEnableYear(year) {
      // disable if the year is greater than maxDate lower than minDate
      if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
        return false;
      }
      // enable if it reaches here and there's no filter defined
      if (!this.dateFilter) {
        return true;
      }
      const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
      // If any date in the year is enabled count the year as enabled.
      for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }
      return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */
    _setSelectedYear(value) {
      this._selectedYear = null;
      if (value instanceof DateRange) {
        const displayValue = value.start || value.end;
        if (displayValue) {
          this._selectedYear = this._dateAdapter.getYear(displayValue);
        }
      } else if (value) {
        this._selectedYear = this._dateAdapter.getYear(value);
      }
    }
    static {
      this.ɵfac = function MatMultiYearView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMultiYearView,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function MatMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMultiYearView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 7,
        consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
        template: function MatMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._yearSelected($event);
            })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
              return ctx._updateActiveDate($event);
            })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatMultiYearView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
let MatYearView = /*#__PURE__*/(() => {
  class MatYearView {
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      let oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateFormats = _dateFormats;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Emits when a new month is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the selected month. This doesn't imply a change on the selected date */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */
    _monthSelected(event) {
      const month = event.value;
      const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      this.monthSelected.emit(selectedMonth);
      const selectedDate = this._getDateFromMonth(month);
      this.selectedChange.emit(selectedDate);
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const month = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromMonth(month);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          this._selectionKeyPressed = true;
          break;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
        this._focusActiveCellAfterViewChecked();
      }
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed) {
          this._monthSelected({
            value: this._dateAdapter.getMonth(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    /** Initializes this year view. */
    _init() {
      this._setSelectedMonth(this.selected);
      this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
      this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
      let monthNames = this._dateAdapter.getMonthNames('short');
      // First row of months only contains 5 elements so we can fit the year label on the same row.
      this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /** Schedules the matCalendarBody to focus the active cell after change detection has run */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
      return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
    }
    /**
     * Takes a month and returns a new date in the same day and year as the currently active date.
     *  The returned date will have the same month as the argument date.
     */
    _getDateFromMonth(month) {
      const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
      return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    }
    /** Creates an MatCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
      return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */
    _shouldEnableMonth(month) {
      const activeYear = this._dateAdapter.getYear(this.activeDate);
      if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
        return false;
      }
      if (!this.dateFilter) {
        return true;
      }
      const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
      // If any date in the month is enabled count the month as enabled.
      for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    _isYearAndMonthAfterMaxDate(year, month) {
      if (this.maxDate) {
        const maxYear = this._dateAdapter.getYear(this.maxDate);
        const maxMonth = this._dateAdapter.getMonth(this.maxDate);
        return year > maxYear || year === maxYear && month > maxMonth;
      }
      return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    _isYearAndMonthBeforeMinDate(year, month) {
      if (this.minDate) {
        const minYear = this._dateAdapter.getYear(this.minDate);
        const minMonth = this._dateAdapter.getMonth(this.minDate);
        return year < minYear || year === minYear && month < minMonth;
      }
      return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */
    _setSelectedMonth(value) {
      if (value instanceof DateRange) {
        this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
      } else {
        this._selectedMonth = this._getMonthInCurrentYear(value);
      }
    }
    static {
      this.ɵfac = function MatYearView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatYearView,
        selectors: [["mat-year-view"]],
        viewQuery: function MatYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matYearView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 9,
        consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
        template: function MatYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._monthSelected($event);
            })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
              return ctx._updateActiveDate($event);
            })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatYearView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let calendarHeaderId = 1;
/** Default header for MatCalendar */
let MatCalendarHeader = /*#__PURE__*/(() => {
  class MatCalendarHeader {
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
      this._intl = _intl;
      this.calendar = calendar;
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      this._id = `mat-calendar-header-${calendarHeaderId++}`;
      this._periodButtonLabelId = `${this._id}-period-label`;
      this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The display text for the current calendar view. */
    get periodButtonText() {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYearName(this.calendar.activeDate);
      }
      return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
    }
    /** The aria description for the current calendar view. */
    get periodButtonDescription() {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYearName(this.calendar.activeDate);
      }
      // Format a label for the window of years displayed in the multi-year calendar view. Use
      // `formatYearRangeLabel` because it is TTS friendly.
      return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
    }
    /** The `aria-label` for changing the calendar view. */
    get periodButtonLabel() {
      return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
      return {
        'month': this._intl.prevMonthLabel,
        'year': this._intl.prevYearLabel,
        'multi-year': this._intl.prevMultiYearLabel
      }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
      return {
        'month': this._intl.nextMonthLabel,
        'year': this._intl.nextYearLabel,
        'multi-year': this._intl.nextMultiYearLabel
      }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
      this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
      if (!this.calendar.minDate) {
        return true;
      }
      return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
      return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
      }
      // Otherwise we are in 'multi-year' view.
      return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
    /**
     * Format two individual labels for the minimum year and maximum year available in the multi-year
     * calendar view. Returns an array of two strings where the first string is the formatted label
     * for the minimum year, and the second string is the formatted label for the maximum year.
     */
    _formatMinAndMaxYearLabels() {
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view, and the last year is
      // just yearsPerPage - 1 away.
      const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
      const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
      const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
      const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
      const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
      return [minYearLabel, maxYearLabel];
    }
    static {
      this.ɵfac = function MatCalendarHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendarHeader,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 17,
        vars: 11,
        consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"], ["mat-button", "", "type", "button", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],
        template: function MatCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_4_listener() {
              return ctx.currentPeriodClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_11_listener() {
              return ctx.previousClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_14_listener() {
              return ctx.nextClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._periodButtonLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendarHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** A calendar that is used as part of the datepicker. */
let MatCalendar = /*#__PURE__*/(() => {
  class MatCalendar {
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() {
      return this._startAt;
    }
    set startAt(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() {
      return this._clampedActiveDate;
    }
    set activeDate(value) {
      this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
      this.stateChanges.next();
      this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */
    get currentView() {
      return this._currentView;
    }
    set currentView(value) {
      const viewChangedResult = this._currentView !== value ? value : null;
      this._currentView = value;
      this._moveFocusOnNextTick = true;
      this._changeDetectorRef.markForCheck();
      if (viewChangedResult) {
        this.viewChanged.emit(viewChangedResult);
      }
    }
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      this._changeDetectorRef = _changeDetectorRef;
      /**
       * Used for scheduling that focus should be moved to the active cell on the next tick.
       * We need to schedule it, rather than do it immediately, because we have to wait
       * for Angular to re-evaluate the view children.
       */
      this._moveFocusOnNextTick = false;
      /** Whether the calendar should be started in month or year view. */
      this.startView = 'month';
      /** Emits when the currently selected date changes. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits the year chosen in multiyear view.
       * This doesn't imply a change on the selected date.
       */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits the month chosen in year view.
       * This doesn't imply a change on the selected date.
       */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the current view changes.
       */
      this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      /** Emits when any date is selected. */
      this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits a new date range value when the user completes a drag drop operation. */
      this._userDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Origin of active drag, or null when dragging is not active. */
      this._activeDrag = null;
      /**
       * Emits whenever there is a state change that the header may need to respond to.
       */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._intlChanges = _intl.changes.subscribe(() => {
        _changeDetectorRef.markForCheck();
        this.stateChanges.next();
      });
    }
    ngAfterContentInit() {
      this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.ComponentPortal(this.headerComponent || MatCalendarHeader);
      this.activeDate = this.startAt || this._dateAdapter.today();
      // Assign to the private property since we don't want to move focus on init.
      this._currentView = this.startView;
    }
    ngAfterViewChecked() {
      if (this._moveFocusOnNextTick) {
        this._moveFocusOnNextTick = false;
        this.focusActiveCell();
      }
    }
    ngOnDestroy() {
      this._intlChanges.unsubscribe();
      this.stateChanges.complete();
    }
    ngOnChanges(changes) {
      // Ignore date changes that are at a different time on the same day. This fixes issues where
      // the calendar re-renders when there is no meaningful change to [minDate] or [maxDate]
      // (#24435).
      const minDateChange = changes['minDate'] && !this._dateAdapter.sameDate(changes['minDate'].previousValue, changes['minDate'].currentValue) ? changes['minDate'] : undefined;
      const maxDateChange = changes['maxDate'] && !this._dateAdapter.sameDate(changes['maxDate'].previousValue, changes['maxDate'].currentValue) ? changes['maxDate'] : undefined;
      const changeRequiringRerender = minDateChange || maxDateChange || changes['dateFilter'];
      if (changeRequiringRerender && !changeRequiringRerender.firstChange) {
        const view = this._getCurrentViewComponent();
        if (view) {
          // Schedule focus to be moved to the active date since re-rendering
          // can blur the active cell. See #29265.
          this._moveFocusOnNextTick = true;
          // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
          // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
          this._changeDetectorRef.detectChanges();
          view._init();
        }
      }
      this.stateChanges.next();
    }
    /** Focuses the active date. */
    focusActiveCell() {
      this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
      this._getCurrentViewComponent()._init();
    }
    /** Handles date selection in the month view. */
    _dateSelected(event) {
      const date = event.value;
      if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
        this.selectedChange.emit(date);
      }
      this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date, view) {
      this.activeDate = date;
      this.currentView = view;
    }
    /** Called when the user starts dragging to change a date range. */
    _dragStarted(event) {
      this._activeDrag = event;
    }
    /**
     * Called when a drag completes. It may end in cancelation or in the selection
     * of a new range.
     */
    _dragEnded(event) {
      if (!this._activeDrag) return;
      if (event.value) {
        this._userDragDrop.emit(event);
      }
      this._activeDrag = null;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    _getCurrentViewComponent() {
      // The return type is explicitly written as a union to ensure that the Closure compiler does
      // not optimize calls to _init(). Without the explicit return type, TypeScript narrows it to
      // only the first component type. See https://github.com/angular/components/issues/22996.
      return this.monthView || this.yearView || this.multiYearView;
    }
    static {
      this.ɵfac = function MatCalendar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendar,
        selectors: [["mat-calendar"]],
        viewQuery: function MatCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          headerComponent: "headerComponent",
          startAt: "startAt",
          startView: "startView",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          _userSelection: "_userSelection",
          _userDragDrop: "_userDragDrop"
        },
        exportAs: ["matCalendar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
        template: function MatCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_Case_2_Template, 1, 11, "mat-month-view", 2)(3, MatCalendar_Case_3_Template, 1, 6, "mat-year-view", 3)(4, MatCalendar_Case_4_Template, 1, 6, "mat-multi-year-view", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
          }
        },
        dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
        styles: [".mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-app-title-small-weight));--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-app-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-app-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-app-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('transformPanel', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dropdown', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  })]))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dialog', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    transform: 'none',
    opacity: 1
  })]))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms linear', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeInCalendar', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('enter', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 1
  })),
  /*#__PURE__*/
  // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
  // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => *', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
};

/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
let MatDatepickerContent = /*#__PURE__*/(() => {
  class MatDatepickerContent {
    constructor(_elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._globalModel = _globalModel;
      this._dateAdapter = _dateAdapter;
      this._rangeSelectionStrategy = _rangeSelectionStrategy;
      this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
      /** Emits when an animation has finished. */
      this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Whether there is an in-progress animation. */
      this._isAnimating = false;
      /** Portal with projected action buttons. */
      this._actionsPortal = null;
      this._closeButtonText = intl.closeCalendarLabel;
    }
    ngOnInit() {
      this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
    }
    ngAfterViewInit() {
      this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      }));
      this._calendar.focusActiveCell();
    }
    ngOnDestroy() {
      this._subscriptions.unsubscribe();
      this._animationDone.complete();
    }
    _handleUserSelection(event) {
      const selection = this._model.selection;
      const value = event.value;
      const isRange = selection instanceof DateRange;
      // If we're selecting a range and we have a selection strategy, always pass the value through
      // there. Otherwise don't assign null values to the model, unless we're selecting a range.
      // A null value when picking a range means that the user cancelled the selection (e.g. by
      // pressing escape), whereas when selecting a single value it means that the value didn't
      // change. This isn't very intuitive, but it's here for backwards-compatibility.
      if (isRange && this._rangeSelectionStrategy) {
        const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
        this._model.updateSelection(newSelection, this);
      } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
        this._model.add(value);
      }
      // Delegate closing the overlay to the actions.
      if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
        this.datepicker.close();
      }
    }
    _handleUserDragDrop(event) {
      this._model.updateSelection(event.value, this);
    }
    _startExitAnimation() {
      this._animationState = 'void';
      this._changeDetectorRef.markForCheck();
    }
    _handleAnimationEvent(event) {
      this._isAnimating = event.phaseName === 'start';
      if (!this._isAnimating) {
        this._animationDone.next();
      }
    }
    _getSelected() {
      return this._model.selection;
    }
    /** Applies the current pending selection to the global model. */
    _applyPendingSelection() {
      if (this._model !== this._globalModel) {
        this._globalModel.updateSelection(this._model.selection, this);
      }
    }
    /**
     * Assigns a new portal containing the datepicker actions.
     * @param portal Portal with the actions to be assigned.
     * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
     * necessary if the portal is assigned during initialization, but it may be required if it's
     * added at a later point.
     */
    _assignActions(portal, forceRerender) {
      // If we have actions, clone the model so that we have the ability to cancel the selection,
      // otherwise update the global model directly. Note that we want to assign this as soon as
      // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
      this._model = portal ? this._globalModel.clone() : this._globalModel;
      this._actionsPortal = portal;
      if (forceRerender) {
        this._changeDetectorRef.detectChanges();
      }
    }
    static {
      this.ɵfac = function MatDatepickerContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerContent,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function MatDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 5,
        hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
              return ctx._handleAnimationEvent($event);
            })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
              return ctx._handleAnimationEvent($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matDatepickerContent"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 27,
        consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
        template: function MatDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
              return ctx.datepicker._selectYear($event);
            })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
              return ctx.datepicker._selectMonth($event);
            })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
              return ctx.datepicker._viewChanged($event);
            })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
              return ctx._handleUserSelection($event);
            })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
              return ctx._handleUserDragDrop($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
              return ctx._closeButtonFocused = true;
            })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
              return ctx._closeButtonFocused = false;
            })("click", function MatDatepickerContent_Template_button_click_3_listener() {
              return ctx.datepicker.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            let tmp_3_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== undefined ? tmp_3_0 : undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.datepicker.panelClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
          }
        },
        dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkTrapFocus, MatCalendar, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
        styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-app-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-app-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-app-corner-large))}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-app-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
        encapsulation: 2,
        data: {
          animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });
    }
  }
  return MatDatepickerContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Base class for a datepicker. */
let MatDatepickerBase = /*#__PURE__*/(() => {
  class MatDatepickerBase {
    /** The date to open the calendar to initially. */
    get startAt() {
      // If an explicit startAt is set we start there, otherwise we start at whatever the currently
      // selected value is.
      return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
    }
    set startAt(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * Theme color of the datepicker's calendar. This API is supported in M2 themes only, it
     * has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    get color() {
      return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
    }
    set color(value) {
      this._color = value;
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
      return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
      if (value !== this._disabled) {
        this._disabled = value;
        this.stateChanges.next(undefined);
      }
    }
    /** Classes to be passed to the date picker panel. */
    get panelClass() {
      return this._panelClass;
    }
    set panelClass(value) {
      this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceStringArray)(value);
    }
    /** Whether the calendar is open. */
    get opened() {
      return this._opened;
    }
    set opened(value) {
      if (value) {
        this.open();
      } else {
        this.close();
      }
    }
    /** The minimum selectable date. */
    _getMinDate() {
      return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    _getMaxDate() {
      return this.datepickerInput && this.datepickerInput.max;
    }
    _getDateFilter() {
      return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    constructor(_overlay,
    /**
     * @deprecated parameter is unused and will be removed
     * @breaking-change 19.0.0
     */
    _unusedNgZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
      this._overlay = _overlay;
      this._viewContainerRef = _viewContainerRef;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._model = _model;
      this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
      /** The view that the calendar should start in. */
      this.startView = 'month';
      /**
       * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
       * than a dropdown and elements have more padding to allow for bigger touch targets.
       */
      this.touchUi = false;
      /** Preferred position of the datepicker in the X axis. */
      this.xPosition = 'start';
      /** Preferred position of the datepicker in the Y axis. */
      this.yPosition = 'below';
      /**
       * Whether to restore focus to the previously-focused element when the calendar is closed.
       * Note that automatic focus restoration is an accessibility feature and it is recommended that
       * you provide your own equivalent, if you decide to turn it off.
       */
      this.restoreFocus = true;
      /**
       * Emits selected year in multiyear view.
       * This doesn't imply a change on the selected date.
       */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits selected month in year view.
       * This doesn't imply a change on the selected date.
       */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the current view changes.
       */
      this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      /** Emits when the datepicker has been opened. */
      this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the datepicker has been closed. */
      this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._opened = false;
      /** The id for the datepicker calendar. */
      this.id = `mat-datepicker-${datepickerUid++}`;
      /** The element that was focused before the datepicker was opened. */
      this._focusedElementBeforeOpen = null;
      /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
      this._backdropHarnessClass = `${this.id}-backdrop`;
      /** Emits when the datepicker's state changes. */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      this._scrollStrategy = scrollStrategy;
      this._model.selectionChanged.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const positionChange = changes['xPosition'] || changes['yPosition'];
      if (positionChange && !positionChange.firstChange && this._overlayRef) {
        const positionStrategy = this._overlayRef.getConfig().positionStrategy;
        if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.FlexibleConnectedPositionStrategy) {
          this._setConnectedPositions(positionStrategy);
          if (this.opened) {
            this._overlayRef.updatePosition();
          }
        }
      }
      this.stateChanges.next(undefined);
    }
    ngOnDestroy() {
      this._destroyOverlay();
      this.close();
      this._inputStateChanges.unsubscribe();
      this.stateChanges.complete();
    }
    /** Selects the given date */
    select(date) {
      this._model.add(date);
    }
    /** Emits the selected year in multiyear view */
    _selectYear(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    _selectMonth(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /** Emits changed view */
    _viewChanged(view) {
      this.viewChanged.emit(view);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */
    registerInput(input) {
      if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('A MatDatepicker can only be associated with a single input.');
      }
      this._inputStateChanges.unsubscribe();
      this.datepickerInput = input;
      this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
      return this._model;
    }
    /**
     * Registers a portal containing action buttons with the datepicker.
     * @param portal Portal to be registered.
     */
    registerActions(portal) {
      if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('A MatDatepicker can only be associated with a single actions row.');
      }
      this._actionsPortal = portal;
      this._componentRef?.instance._assignActions(portal, true);
    }
    /**
     * Removes a portal containing action buttons from the datepicker.
     * @param portal Portal to be removed.
     */
    removeActions(portal) {
      if (portal === this._actionsPortal) {
        this._actionsPortal = null;
        this._componentRef?.instance._assignActions(null, true);
      }
    }
    /** Open the calendar. */
    open() {
      // Skip reopening if there's an in-progress animation to avoid overlapping
      // sequences which can cause "changed after checked" errors. See #25837.
      if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
        return;
      }
      if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Attempted to open an MatDatepicker with no associated input.');
      }
      this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      this._openOverlay();
      this._opened = true;
      this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
      // Skip reopening if there's an in-progress animation to avoid overlapping
      // sequences which can cause "changed after checked" errors. See #25837.
      if (!this._opened || this._componentRef?.instance._isAnimating) {
        return;
      }
      const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function';
      const completeClose = () => {
        // The `_opened` could've been reset already if
        // we got two events in quick succession.
        if (this._opened) {
          this._opened = false;
          this.closedStream.emit();
        }
      };
      if (this._componentRef) {
        const {
          instance,
          location
        } = this._componentRef;
        instance._startExitAnimation();
        instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => {
          const activeElement = this._document.activeElement;
          // Since we restore focus after the exit animation, we have to check that
          // the user didn't move focus themselves inside the `close` handler.
          if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
            this._focusedElementBeforeOpen.focus();
          }
          this._focusedElementBeforeOpen = null;
          this._destroyOverlay();
        });
      }
      if (canRestoreFocus) {
        // Because IE moves focus asynchronously, we can't count on it being restored before we've
        // marked the datepicker as closed. If the event fires out of sequence and the element that
        // we're refocusing opens the datepicker on focus, the user could be stuck with not being
        // able to close the calendar at all. We work around it by making the logic, that marks
        // the datepicker as closed, async as well.
        setTimeout(completeClose);
      } else {
        completeClose();
      }
    }
    /** Applies the current pending selection on the overlay to the model. */
    _applyPendingSelection() {
      this._componentRef?.instance?._applyPendingSelection();
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
    _forwardContentValues(instance) {
      instance.datepicker = this;
      instance.color = this.color;
      instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
      instance._assignActions(this._actionsPortal, false);
    }
    /** Opens the overlay with the calendar. */
    _openOverlay() {
      this._destroyOverlay();
      const isDialog = this.touchUi;
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
      const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayConfig({
        positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
        hasBackdrop: true,
        backdropClass: [isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop', this._backdropHarnessClass],
        direction: this._dir,
        scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
        panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`
      }));
      this._getCloseStream(overlayRef).subscribe(event => {
        if (event) {
          event.preventDefault();
        }
        this.close();
      });
      // The `preventDefault` call happens inside the calendar as well, however focus moves into
      // it inside a timeout which can give browsers a chance to fire off a keyboard event in-between
      // that can scroll the page (see #24969). Always block default actions of arrow keys for the
      // entire overlay so the page doesn't get scrolled by accident.
      overlayRef.keydownEvents().subscribe(event => {
        const keyCode = event.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN) {
          event.preventDefault();
        }
      });
      this._componentRef = overlayRef.attach(portal);
      this._forwardContentValues(this._componentRef.instance);
      // Update the position once the calendar has rendered. Only relevant in dropdown mode.
      if (!isDialog) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          overlayRef.updatePosition();
        }, {
          injector: this._injector
        });
      }
    }
    /** Destroys the current overlay. */
    _destroyOverlay() {
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._overlayRef = this._componentRef = null;
      }
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDialogStrategy() {
      return this._overlay.position().global().centerHorizontally().centerVertically();
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDropdownStrategy() {
      const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
      return this._setConnectedPositions(strategy);
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
      const primaryX = this.xPosition === 'end' ? 'end' : 'start';
      const secondaryX = primaryX === 'start' ? 'end' : 'start';
      const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
      const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
      return strategy.withPositions([{
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY
      }, {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY
      }, {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY
      }, {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY
      }]);
    }
    /** Gets an observable that will emit when the overlay is supposed to be closed. */
    _getCloseStream(overlayRef) {
      const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
        // Closing on alt + up is only valid when there's an input associated with the datepicker.
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event) || this.datepickerInput && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, modifier));
      })));
    }
    static {
      this.ɵfac = function MatDatepickerBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerBase,
        inputs: {
          calendarHeaderComponent: "calendarHeaderComponent",
          startAt: "startAt",
          startView: "startView",
          color: "color",
          touchUi: [2, "touchUi", "touchUi", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          xPosition: "xPosition",
          yPosition: "yPosition",
          restoreFocus: [2, "restoreFocus", "restoreFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          dateClass: "dateClass",
          panelClass: "panelClass",
          opened: [2, "opened", "opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          openedStream: "opened",
          closedStream: "closed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatDatepickerBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
let MatDatepicker = /*#__PURE__*/(() => {
  class MatDatepicker extends MatDatepickerBase {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatDatepicker_BaseFactory;
        return function MatDatepicker_Factory(__ngFactoryType__) {
          return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(__ngFactoryType__ || MatDatepicker);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepicker,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
          provide: MatDatepickerBase,
          useExisting: MatDatepicker
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepicker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
  constructor(/** Reference to the datepicker input component that emitted the event. */
  target, /** Reference to the native input element associated with the datepicker input. */
  targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
}
/** Base class for datepicker inputs. */
let MatDatepickerInputBase = /*#__PURE__*/(() => {
  class MatDatepickerInputBase {
    /** The value of the input. */
    get value() {
      return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    }
    set value(value) {
      this._assignValueProgrammatically(value);
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() {
      return !!this._disabled || this._parentDisabled();
    }
    set disabled(value) {
      const newValue = value;
      const element = this._elementRef.nativeElement;
      if (this._disabled !== newValue) {
        this._disabled = newValue;
        this.stateChanges.next(undefined);
      }
      // We need to null check the `blur` method, because it's undefined during SSR.
      // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
      // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
      // element has been inserted.
      if (newValue && this._isInitialized && element.blur) {
        // Normally, native input elements automatically blur if they turn disabled. This behavior
        // is problematic, because it would mean that it triggers another change detection cycle,
        // which then causes a changed after checked error if the input element was focused before.
        element.blur();
      }
    }
    /** Gets the base validator functions. */
    _getValidators() {
      return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */
    _registerModel(model) {
      this._model = model;
      this._valueChangesSubscription.unsubscribe();
      if (this._pendingValue) {
        this._assignValue(this._pendingValue);
      }
      this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
        if (this._shouldHandleChangeEvent(event)) {
          const value = this._getValueFromModel(event.selection);
          this._lastValueValid = this._isValidValue(value);
          this._cvaOnChange(value);
          this._onTouched();
          this._formatValue(value);
          this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
      });
    }
    constructor(_elementRef, _dateAdapter, _dateFormats) {
      this._elementRef = _elementRef;
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      /** Emits when a `change` event is fired on this `<input>`. */
      this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when an `input` event is fired on this `<input>`. */
      this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the internal state has changed */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._onTouched = () => {};
      this._validatorOnChange = () => {};
      this._cvaOnChange = () => {};
      this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** The form control validator for whether the input parses. */
      this._parseValidator = () => {
        return this._lastValueValid ? null : {
          'matDatepickerParse': {
            'text': this._elementRef.nativeElement.value
          }
        };
      };
      /** The form control validator for the date filter. */
      this._filterValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        return !controlValue || this._matchesFilter(controlValue) ? null : {
          'matDatepickerFilter': true
        };
      };
      /** The form control validator for the min date. */
      this._minValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const min = this._getMinDate();
        return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
          'matDatepickerMin': {
            'min': min,
            'actual': controlValue
          }
        };
      };
      /** The form control validator for the max date. */
      this._maxValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const max = this._getMaxDate();
        return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
          'matDatepickerMax': {
            'max': max,
            'actual': controlValue
          }
        };
      };
      /** Whether the last value set on the input was valid. */
      this._lastValueValid = false;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      // Update the displayed date when the locale changes.
      this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
        this._assignValueProgrammatically(this.value);
      });
    }
    ngAfterViewInit() {
      this._isInitialized = true;
    }
    ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
    ngOnDestroy() {
      this._valueChangesSubscription.unsubscribe();
      this._localeSubscription.unsubscribe();
      this.stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
      this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
      return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
      this._assignValueProgrammatically(value);
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
      this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    _onKeydown(event) {
      const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
      const isAltDownArrow = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, modifier));
      if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
        this._openPopup();
        event.preventDefault();
      }
    }
    _onInput(value) {
      const lastValueWasValid = this._lastValueValid;
      let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
      this._lastValueValid = this._isValidValue(date);
      date = this._dateAdapter.getValidDateOrNull(date);
      const hasChanged = !this._dateAdapter.sameDate(date, this.value);
      // We need to fire the CVA change event for all
      // nulls, otherwise the validators won't run.
      if (!date || hasChanged) {
        this._cvaOnChange(date);
      } else {
        // Call the CVA change handler for invalid values
        // since this is what marks the control as dirty.
        if (value && !this.value) {
          this._cvaOnChange(date);
        }
        if (lastValueWasValid !== this._lastValueValid) {
          this._validatorOnChange();
        }
      }
      if (hasChanged) {
        this._assignValue(date);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    }
    _onChange() {
      this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
      // Reformat the input only if we have a valid value.
      if (this.value) {
        this._formatValue(this.value);
      }
      this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
      this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */
    _assignValue(value) {
      // We may get some incoming values before the model was
      // assigned. Save the value so that we can assign it later.
      if (this._model) {
        this._assignValueToModel(value);
        this._pendingValue = null;
      } else {
        this._pendingValue = value;
      }
    }
    /** Whether a value is considered valid. */
    _isValidValue(value) {
      return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */
    _parentDisabled() {
      return false;
    }
    /** Programmatically assigns a value to the input. */
    _assignValueProgrammatically(value) {
      value = this._dateAdapter.deserialize(value);
      this._lastValueValid = this._isValidValue(value);
      value = this._dateAdapter.getValidDateOrNull(value);
      this._assignValue(value);
      this._formatValue(value);
    }
    /** Gets whether a value matches the current date filter. */
    _matchesFilter(value) {
      const filter = this._getDateFilter();
      return !filter || filter(value);
    }
    static {
      this.ɵfac = function MatDatepickerInputBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerInputBase,
        inputs: {
          value: "value",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatDatepickerInputBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}

/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
let MatDatepickerInput = /*#__PURE__*/(() => {
  class MatDatepickerInput extends MatDatepickerInputBase {
    /** The datepicker that this input is associated with. */
    set matDatepicker(datepicker) {
      if (datepicker) {
        this._datepicker = datepicker;
        this._ariaOwns.set(datepicker.opened ? datepicker.id : null);
        this._closedSubscription = datepicker.closedStream.subscribe(() => {
          this._onTouched();
          this._ariaOwns.set(null);
        });
        this._openedSubscription = datepicker.openedStream.subscribe(() => {
          this._ariaOwns.set(datepicker.id);
        });
        this._registerModel(datepicker.registerInput(this));
      }
    }
    /** The minimum valid date. */
    get min() {
      return this._min;
    }
    set min(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;
        this._validatorOnChange();
      }
    }
    /** The maximum valid date. */
    get max() {
      return this._max;
    }
    set max(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;
        this._validatorOnChange();
      }
    }
    /** Function that can be used to filter out dates within the datepicker. */
    get dateFilter() {
      return this._dateFilter;
    }
    set dateFilter(value) {
      const wasMatchingValue = this._matchesFilter(this.value);
      this._dateFilter = value;
      if (this._matchesFilter(this.value) !== wasMatchingValue) {
        this._validatorOnChange();
      }
    }
    constructor(elementRef, dateAdapter, dateFormats, _formField) {
      super(elementRef, dateAdapter, dateFormats);
      this._formField = _formField;
      this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._openedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** The id of the panel owned by this input. */
      this._ariaOwns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
      if (this._formField) {
        return this._formField.getLabelId();
      }
      return this._elementRef.nativeElement.getAttribute('aria-labelledby');
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
      return this.value;
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
    }
    /** Opens the associated datepicker. */
    _openPopup() {
      if (this._datepicker) {
        this._datepicker.open();
      }
    }
    _getValueFromModel(modelValue) {
      return modelValue;
    }
    _assignValueToModel(value) {
      if (this._model) {
        this._model.updateSelection(value, this);
      }
    }
    /** Gets the input's minimum date. */
    _getMinDate() {
      return this._min;
    }
    /** Gets the input's maximum date. */
    _getMaxDate() {
      return this._max;
    }
    /** Gets the input's date filtering function. */
    _getDateFilter() {
      return this._dateFilter;
    }
    _shouldHandleChangeEvent(event) {
      return event.source !== this;
    }
    static {
      this.ɵfac = function MatDatepickerInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerInput,
        selectors: [["input", "matDatepicker", ""]],
        hostAttrs: [1, "mat-datepicker-input"],
        hostVars: 6,
        hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatDatepickerInput_change_HostBindingHandler() {
              return ctx._onChange();
            })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", ctx._ariaOwns())("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
          }
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: [0, "matDatepickerFilter", "dateFilter"]
        },
        exportAs: ["matDatepickerInput"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
          useExisting: MatDatepickerInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatDatepickerInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Can be used to override the icon of a `matDatepickerToggle`. */
let MatDatepickerToggleIcon = /*#__PURE__*/(() => {
  class MatDatepickerToggleIcon {
    static {
      this.ɵfac = function MatDatepickerToggleIcon_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerToggleIcon)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerToggleIcon,
        selectors: [["", "matDatepickerToggleIcon", ""]],
        standalone: true
      });
    }
  }
  return MatDatepickerToggleIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDatepickerToggle = /*#__PURE__*/(() => {
  class MatDatepickerToggle {
    /** Whether the toggle button is disabled. */
    get disabled() {
      if (this._disabled === undefined && this.datepicker) {
        return this.datepicker.disabled;
      }
      return !!this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
      this._intl = _intl;
      this._changeDetectorRef = _changeDetectorRef;
      this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      const parsedTabIndex = Number(defaultTabIndex);
      this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    ngOnChanges(changes) {
      if (changes['datepicker']) {
        this._watchStateChanges();
      }
    }
    ngOnDestroy() {
      this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
      this._watchStateChanges();
    }
    _open(event) {
      if (this.datepicker && !this.disabled) {
        this.datepicker.open();
        event.stopPropagation();
      }
    }
    _watchStateChanges() {
      const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      const datepickerToggled = this.datepicker ? (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      this._stateChanges.unsubscribe();
      this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    static {
      this.ɵfac = function MatDatepickerToggle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerToggle,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 8,
        hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
              return ctx._open($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
          }
        },
        inputs: {
          datepicker: [0, "for", "datepicker"],
          tabIndex: "tabIndex",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: "disableRipple"
        },
        exportAs: ["matDatepickerToggle"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 6,
        consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
        template: function MatDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._customIcon ? 2 : -1);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
        styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-app-on-surface-variant))}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-app-on-surface-variant))}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepickerToggle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// This file contains the `_computeAriaAccessibleName` function, which computes what the *expected*
// ARIA accessible name would be for a given element. Implements a subset of ARIA specification
// [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/).
//
// Specification accname-1.2 can be summarized by returning the result of the first method
// available.
//
//  1. `aria-labelledby` attribute
//     ```
//       <!-- example using aria-labelledby-->
//       <label id='label-id'>Start Date</label>
//       <input aria-labelledby='label-id'/>
//     ```
//  2. `aria-label` attribute (e.g. `<input aria-label="Departure"/>`)
//  3. Label with `for`/`id`
//     ```
//       <!-- example using for/id -->
//       <label for="current-node">Label</label>
//       <input id="current-node"/>
//     ```
//  4. `placeholder` attribute (e.g. `<input placeholder="06/03/1990"/>`)
//  5. `title` attribute (e.g. `<input title="Check-In"/>`)
//  6. text content
//     ```
//       <!-- example using text content -->
//       <label for="current-node"><span>Departure</span> Date</label>
//       <input id="current-node"/>
//     ```
/**
 * Computes the *expected* ARIA accessible name for argument element based on [accname-1.2
 * specification](https://www.w3.org/TR/accname-1.2/). Implements a subset of accname-1.2,
 * and should only be used for the Datepicker's specific use case.
 *
 * Intended use:
 * This is not a general use implementation. Only implements the parts of accname-1.2 that are
 * required for the Datepicker's specific use case. This function is not intended for any other
 * use.
 *
 * Limitations:
 *  - Only covers the needs of `matStartDate` and `matEndDate`. Does not support other use cases.
 *  - See NOTES's in implementation for specific details on what parts of the accname-1.2
 *  specification are not implemented.
 *
 *  @param element {HTMLInputElement} native &lt;input/&gt; element of `matStartDate` or
 *  `matEndDate` component. Corresponds to the 'Root Element' from accname-1.2
 *
 *  @return expected ARIA accessible name of argument &lt;input/&gt;
 */
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
/**
 * Determine if argument node is an Element based on `nodeType` property. This function is safe to
 * use with server-side rendering.
 */
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Determine if argument node is an HTMLInputElement based on `nodeName` property. This funciton is
 * safe to use with server-side rendering.
 */
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === 'INPUT';
}
/**
 * Determine if argument node is an HTMLTextAreaElement based on `nodeName` property. This
 * funciton is safe to use with server-side rendering.
 */
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === 'TEXTAREA';
}
/**
 * Calculate the expected ARIA accessible name for given DOM Node. Given DOM Node may be either the
 * "Root node" passed to `_computeAriaAccessibleName` or "Current node" as result of recursion.
 *
 * @return the accessible name of argument DOM Node
 *
 * @param currentNode node to determine accessible name of
 * @param isDirectlyReferenced true if `currentNode` is the root node to calculate ARIA accessible
 * name of. False if it is a result of recursion.
 */
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  // NOTE: this differs from accname-1.2 specification.
  //  - Does not implement Step 1. of accname-1.2: '''If `currentNode`'s role prohibits naming,
  //    return the empty string ("")'''.
  //  - Does not implement Step 2.A. of accname-1.2: '''if current node is hidden and not directly
  //    referenced by aria-labelledby... return the empty string.'''
  // acc-name-1.2 Step 2.B.: aria-labelledby
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.('aria-labelledby')?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map(idRef => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(' ');
    }
  }
  // acc-name-1.2 Step 2.C.: aria-label
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute('aria-label')?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  // acc-name-1.2 Step 2.D. attribute or element that defines a text alternative
  //
  // NOTE: this differs from accname-1.2 specification.
  // Only implements Step 2.D. for `<label>`,`<input/>`, and `<textarea/>` element. Does not
  // implement other elements that have an attribute or element that defines a text alternative.
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    // use label with a `for` attribute referencing the current node
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map(x => _computeAriaAccessibleNameInternal(x, false)).join(' ');
    }
    // use placeholder if available
    const placeholder = currentNode.getAttribute('placeholder')?.trim();
    if (placeholder) {
      return placeholder;
    }
    // use title if available
    const title = currentNode.getAttribute('title')?.trim();
    if (title) {
      return title;
    }
  }
  // NOTE: this differs from accname-1.2 specification.
  //  - does not implement acc-name-1.2 Step 2.E.: '''if the current node is a control embedded
  //     within the label... then include the embedded control as part of the text alternative in
  //     the following manner...'''. Step 2E applies to embedded controls such as textbox, listbox,
  //     range, etc.
  //  - does not implement acc-name-1.2 step 2.F.: check that '''role allows name from content''',
  //    which applies to `currentNode` and its children.
  //  - does not implement acc-name-1.2 Step 2.F.ii.: '''Check for CSS generated textual content'''
  //    (e.g. :before and :after).
  //  - does not implement acc-name-1.2 Step 2.I.: '''if the current node has a Tooltip attribute,
  //    return its value'''
  // Return text content with whitespace collapsed into a single space character. Accomplish
  // acc-name-1.2 steps 2F, 2G, and 2H.
  return (currentNode.textContent || '').replace(/\s+/g, ' ').trim();
}

/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
let MatDateRangeInputPartBase = /*#__PURE__*/(() => {
  class MatDateRangeInputPartBase extends MatDatepickerInputBase {
    /** Object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /** Whether the input is in an error state. */
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
      super(_elementRef, dateAdapter, dateFormats);
      this._rangeInput = _rangeInput;
      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._injector = _injector;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this._dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, {
        optional: true
      });
      this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__._ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
    }
    ngOnInit() {
      // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
      // injecting its `NgControl` so that the error state is handled correctly. This introduces a
      // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
      // itself. Usually we can work around it for the CVA, but there's no API to do it for the
      // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
      // everything has been resolved.
      const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, {
        optional: true,
        self: true
      });
      if (ngControl) {
        this.ngControl = ngControl;
        this._errorStateTracker.ngControl = ngControl;
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
    /** Gets whether the input is empty. */
    isEmpty() {
      return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */
    _getPlaceholder() {
      return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */
    focus() {
      this._elementRef.nativeElement.focus();
    }
    /** Gets the value that should be used when mirroring the input's size. */
    getMirrorValue() {
      const element = this._elementRef.nativeElement;
      const value = element.value;
      return value.length > 0 ? value : element.placeholder;
    }
    /** Refreshes the error state of the input. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** Handles `input` events on the input element. */
    _onInput(value) {
      super._onInput(value);
      this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */
    _openPopup() {
      this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */
    _getMinDate() {
      return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */
    _getMaxDate() {
      return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */
    _getDateFilter() {
      return this._rangeInput.dateFilter;
    }
    _parentDisabled() {
      return this._rangeInput._groupDisabled;
    }
    _shouldHandleChangeEvent({
      source
    }) {
      return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
    }
    _assignValueProgrammatically(value) {
      super._assignValueProgrammatically(value);
      const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
      opposite?._validatorOnChange();
    }
    /** return the ARIA accessible name of the input element */
    _getAccessibleName() {
      return _computeAriaAccessibleName(this._elementRef.nativeElement);
    }
    static {
      this.ɵfac = function MatDateRangeInputPartBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDateRangeInputPartBase,
        inputs: {
          errorStateMatcher: "errorStateMatcher"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatDateRangeInputPartBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Input for entering the start date in a `mat-date-range-input`. */
let MatStartDate = /*#__PURE__*/(() => {
  class MatStartDate extends MatDateRangeInputPartBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
      super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
      /** Validator that checks that the start date isn't after the end date. */
      this._startValidator = control => {
        const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const end = this._model ? this._model.selection.end : null;
        return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
          'matStartDateInvalid': {
            'end': end,
            'actual': start
          }
        };
      };
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
    }
    _getValueFromModel(modelValue) {
      return modelValue.start;
    }
    _shouldHandleChangeEvent(change) {
      if (!super._shouldHandleChangeEvent(change)) {
        return false;
      } else {
        return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
      }
    }
    _assignValueToModel(value) {
      if (this._model) {
        const range = new DateRange(value, this._model.selection.end);
        this._model.updateSelection(range, this);
      }
    }
    _formatValue(value) {
      super._formatValue(value);
      // Any time the input value is reformatted we need to tell the parent.
      this._rangeInput._handleChildValueChange();
    }
    _onKeydown(event) {
      const endInput = this._rangeInput._endInput;
      const element = this._elementRef.nativeElement;
      const isLtr = this._dir?.value !== 'rtl';
      // If the user hits RIGHT (LTR) when at the end of the input (and no
      // selection), move the cursor to the start of the end input.
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
        event.preventDefault();
        endInput._elementRef.nativeElement.setSelectionRange(0, 0);
        endInput.focus();
      } else {
        super._onKeydown(event);
      }
    }
    static {
      this.ɵfac = function MatStartDate_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatStartDate,
        selectors: [["input", "matStartDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatStartDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatStartDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatStartDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns ? ctx._rangeInput._ariaOwns() : (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
          useExisting: MatStartDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
          useExisting: MatStartDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatStartDate;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Input for entering the end date in a `mat-date-range-input`. */
let MatEndDate = /*#__PURE__*/(() => {
  class MatEndDate extends MatDateRangeInputPartBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
      super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
      /** Validator that checks that the end date isn't before the start date. */
      this._endValidator = control => {
        const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const start = this._model ? this._model.selection.start : null;
        return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
          'matEndDateInvalid': {
            'start': start,
            'actual': end
          }
        };
      };
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
    }
    _getValueFromModel(modelValue) {
      return modelValue.end;
    }
    _shouldHandleChangeEvent(change) {
      if (!super._shouldHandleChangeEvent(change)) {
        return false;
      } else {
        return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
      }
    }
    _assignValueToModel(value) {
      if (this._model) {
        const range = new DateRange(this._model.selection.start, value);
        this._model.updateSelection(range, this);
      }
    }
    _moveCaretToEndOfStartInput() {
      const startInput = this._rangeInput._startInput._elementRef.nativeElement;
      const value = startInput.value;
      if (value.length > 0) {
        startInput.setSelectionRange(value.length, value.length);
      }
      startInput.focus();
    }
    _onKeydown(event) {
      const element = this._elementRef.nativeElement;
      const isLtr = this._dir?.value !== 'rtl';
      // If the user is pressing backspace on an empty end input, move focus back to the start.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.BACKSPACE && !element.value) {
        this._moveCaretToEndOfStartInput();
      }
      // If the user hits LEFT (LTR) when at the start of the input (and no
      // selection), move the cursor to the end of the start input.
      else if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
        event.preventDefault();
        this._moveCaretToEndOfStartInput();
      } else {
        super._onKeydown(event);
      }
    }
    static {
      this.ɵfac = function MatEndDate_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatEndDate,
        selectors: [["input", "matEndDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatEndDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatEndDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatEndDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns ? ctx._rangeInput._ariaOwns() : (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
          useExisting: MatEndDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
          useExisting: MatEndDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatEndDate;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let nextUniqueId = 0;
let MatDateRangeInput = /*#__PURE__*/(() => {
  class MatDateRangeInput {
    /** Current value of the range input. */
    get value() {
      return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */
    get shouldLabelFloat() {
      return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */
    get placeholder() {
      const start = this._startInput?._getPlaceholder() || '';
      const end = this._endInput?._getPlaceholder() || '';
      return start || end ? `${start} ${this.separator} ${end}` : '';
    }
    /** The range picker that this input is associated with. */
    get rangePicker() {
      return this._rangePicker;
    }
    set rangePicker(rangePicker) {
      if (rangePicker) {
        this._model = rangePicker.registerInput(this);
        this._rangePicker = rangePicker;
        this._closedSubscription.unsubscribe();
        this._openedSubscription.unsubscribe();
        this._ariaOwns.set(this.rangePicker.opened ? rangePicker.id : null);
        this._closedSubscription = rangePicker.closedStream.subscribe(() => {
          this._startInput?._onTouched();
          this._endInput?._onTouched();
          this._ariaOwns.set(null);
        });
        this._openedSubscription = rangePicker.openedStream.subscribe(() => {
          this._ariaOwns.set(rangePicker.id);
        });
        this._registerModel(this._model);
      }
    }
    /** Whether the input is required. */
    get required() {
      return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
    }
    set required(value) {
      this._required = value;
    }
    /** Function that can be used to filter out dates within the date range picker. */
    get dateFilter() {
      return this._dateFilter;
    }
    set dateFilter(value) {
      const start = this._startInput;
      const end = this._endInput;
      const wasMatchingStart = start && start._matchesFilter(start.value);
      const wasMatchingEnd = end && end._matchesFilter(start.value);
      this._dateFilter = value;
      if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
        start._validatorOnChange();
      }
      if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
        end._validatorOnChange();
      }
    }
    /** The minimum valid date. */
    get min() {
      return this._min;
    }
    set min(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;
        this._revalidate();
      }
    }
    /** The maximum valid date. */
    get max() {
      return this._max;
    }
    set max(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;
        this._revalidate();
      }
    }
    /** Whether the input is disabled. */
    get disabled() {
      return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
    }
    set disabled(value) {
      if (value !== this._groupDisabled) {
        this._groupDisabled = value;
        this.stateChanges.next(undefined);
      }
    }
    /** Whether the input is in an error state. */
    get errorState() {
      if (this._startInput && this._endInput) {
        return this._startInput.errorState || this._endInput.errorState;
      }
      return false;
    }
    /** Whether the datepicker input is empty. */
    get empty() {
      const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
      const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
      return startEmpty && endEmpty;
    }
    constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dateAdapter = _dateAdapter;
      this._formField = _formField;
      this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._openedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Unique ID for the group. */
      this.id = `mat-date-range-input-${nextUniqueId++}`;
      /** Whether the control is focused. */
      this.focused = false;
      /** Name of the form control. */
      this.controlType = 'mat-date-range-input';
      /** The id of the panel owned by this input. */
      this._ariaOwns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
      this._groupDisabled = false;
      /** Value for the `aria-describedby` attribute of the inputs. */
      this._ariaDescribedBy = null;
      /** Separator text to be shown between the inputs. */
      this.separator = '–';
      /** Start of the comparison range that should be shown in the calendar. */
      this.comparisonStart = null;
      /** End of the comparison range that should be shown in the calendar. */
      this.comparisonEnd = null;
      /** Emits when the input's state has changed. */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      this.disableAutomaticLabeling = true;
      if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      // The datepicker module can be used both with MDC and non-MDC form fields. We have
      // to conditionally add the MDC input class so that the range picker looks correctly.
      if (_formField?._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
        _elementRef.nativeElement.classList.add('mat-mdc-input-element', 'mat-mdc-form-field-input-control', 'mdc-text-field__input');
      }
      // TODO(crisbeto): remove `as any` after #18206 lands.
      this.ngControl = control;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    setDescribedByIds(ids) {
      this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    onContainerClick() {
      if (!this.focused && !this.disabled) {
        if (!this._model || !this._model.selection.start) {
          this._startInput.focus();
        } else {
          this._endInput.focus();
        }
      }
    }
    ngAfterContentInit() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._startInput) {
          throw Error('mat-date-range-input must contain a matStartDate input');
        }
        if (!this._endInput) {
          throw Error('mat-date-range-input must contain a matEndDate input');
        }
      }
      if (this._model) {
        this._registerModel(this._model);
      }
      // We don't need to unsubscribe from this, because we
      // know that the input streams will be completed on destroy.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
        this.stateChanges.next(undefined);
      });
    }
    ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
    ngOnDestroy() {
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
      this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */
    getStartValue() {
      return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */
    getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */
    getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
      return this._formField ? this._formField.getLabelId() : null;
    }
    /** Gets the value that is used to mirror the state input. */
    _getInputMirrorValue(part) {
      const input = part === 'start' ? this._startInput : this._endInput;
      return input ? input.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */
    _shouldHidePlaceholders() {
      return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */
    _handleChildValueChange() {
      this.stateChanges.next(undefined);
      this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */
    _openDatepicker() {
      if (this._rangePicker) {
        this._rangePicker.open();
      }
    }
    /** Whether the separate text should be hidden. */
    _shouldHideSeparator() {
      return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */
    _getAriaLabelledby() {
      const formField = this._formField;
      return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    _getStartDateAccessibleName() {
      return this._startInput._getAccessibleName();
    }
    _getEndDateAccessibleName() {
      return this._endInput._getAccessibleName();
    }
    /** Updates the focused state of the range input. */
    _updateFocus(origin) {
      this.focused = origin !== null;
      this.stateChanges.next();
    }
    /** Re-runs the validators on the start/end inputs. */
    _revalidate() {
      if (this._startInput) {
        this._startInput._validatorOnChange();
      }
      if (this._endInput) {
        this._endInput._validatorOnChange();
      }
    }
    /** Registers the current date selection model with the start/end inputs. */
    _registerModel(model) {
      if (this._startInput) {
        this._startInput._registerModel(model);
      }
      if (this._endInput) {
        this._endInput._registerModel(model);
      }
    }
    /** Checks whether a specific range input directive is required. */
    _isTargetRequired(target) {
      return target?.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
    }
    static {
      this.ɵfac = function MatDateRangeInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDateRangeInput,
        selectors: [["mat-date-range-input"]],
        contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-date-range-input"],
        hostVars: 8,
        hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
          }
        },
        inputs: {
          rangePicker: "rangePicker",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          dateFilter: "dateFilter",
          min: "min",
          max: "max",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          separator: "separator",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        exportAs: ["matDateRangeInput"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
          useExisting: MatDateRangeInput
        }, {
          provide: MAT_DATE_RANGE_INPUT_PARENT,
          useExisting: MatDateRangeInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c6,
        decls: 11,
        vars: 5,
        consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
        template: function MatDateRangeInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
              return ctx._updateFocus($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("start"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("end"));
          }
        },
        dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkMonitorFocus],
        styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-app-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDateRangeInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
let MatDateRangePicker = /*#__PURE__*/(() => {
  class MatDateRangePicker extends MatDatepickerBase {
    _forwardContentValues(instance) {
      super._forwardContentValues(instance);
      const input = this.datepickerInput;
      if (input) {
        instance.comparisonStart = input.comparisonStart;
        instance.comparisonEnd = input.comparisonEnd;
        instance.startDateAccessibleName = input._getStartDateAccessibleName();
        instance.endDateAccessibleName = input._getEndDateAccessibleName();
      }
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatDateRangePicker_BaseFactory;
        return function MatDateRangePicker_Factory(__ngFactoryType__) {
          return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(__ngFactoryType__ || MatDateRangePicker);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDateRangePicker,
        selectors: [["mat-date-range-picker"]],
        exportAs: ["matDateRangePicker"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
          provide: MatDatepickerBase,
          useExisting: MatDateRangePicker
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDateRangePicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDateRangePicker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Button that will close the datepicker and assign the current selection to the data model. */
let MatDatepickerApply = /*#__PURE__*/(() => {
  class MatDatepickerApply {
    constructor(_datepicker) {
      this._datepicker = _datepicker;
    }
    _applySelection() {
      this._datepicker._applyPendingSelection();
      this._datepicker.close();
    }
    static {
      this.ɵfac = function MatDatepickerApply_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerApply,
        selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
        hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() {
              return ctx._applySelection();
            });
          }
        },
        standalone: true
      });
    }
  }
  return MatDatepickerApply;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Button that will close the datepicker and discard the current selection. */
let MatDatepickerCancel = /*#__PURE__*/(() => {
  class MatDatepickerCancel {
    constructor(_datepicker) {
      this._datepicker = _datepicker;
    }
    static {
      this.ɵfac = function MatDatepickerCancel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerCancel,
        selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
        hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() {
              return ctx._datepicker.close();
            });
          }
        },
        standalone: true
      });
    }
  }
  return MatDatepickerCancel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
let MatDatepickerActions = /*#__PURE__*/(() => {
  class MatDatepickerActions {
    constructor(_datepicker, _viewContainerRef) {
      this._datepicker = _datepicker;
      this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(this._template, this._viewContainerRef);
      this._datepicker.registerActions(this._portal);
    }
    ngOnDestroy() {
      this._datepicker.removeActions(this._portal);
      // Needs to be null checked since we initialize it in `ngAfterViewInit`.
      if (this._portal && this._portal.isAttached) {
        this._portal?.detach();
      }
    }
    static {
      this.ɵfac = function MatDatepickerActions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerActions,
        selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
        viewQuery: function MatDatepickerActions_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [[1, "mat-datepicker-actions"]],
        template: function MatDatepickerActions_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
          }
        },
        styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepickerActions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDatepickerModule = /*#__PURE__*/(() => {
  class MatDatepickerModule {
    static {
      this.ɵfac = function MatDatepickerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatDatepickerModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule]
      });
    }
  }
  return MatDatepickerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 38223:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tabs.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TAB: () => (/* binding */ MAT_TAB),
/* harmony export */   MAT_TABS_CONFIG: () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   MAT_TAB_CONTENT: () => (/* binding */ MAT_TAB_CONTENT),
/* harmony export */   MAT_TAB_GROUP: () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   MAT_TAB_LABEL: () => (/* binding */ MAT_TAB_LABEL),
/* harmony export */   MatInkBar: () => (/* binding */ MatInkBar),
/* harmony export */   MatPaginatedTabHeader: () => (/* binding */ MatPaginatedTabHeader),
/* harmony export */   MatTab: () => (/* binding */ MatTab),
/* harmony export */   MatTabBody: () => (/* binding */ MatTabBody),
/* harmony export */   MatTabBodyPortal: () => (/* binding */ MatTabBodyPortal),
/* harmony export */   MatTabChangeEvent: () => (/* binding */ MatTabChangeEvent),
/* harmony export */   MatTabContent: () => (/* binding */ MatTabContent),
/* harmony export */   MatTabGroup: () => (/* binding */ MatTabGroup),
/* harmony export */   MatTabHeader: () => (/* binding */ MatTabHeader),
/* harmony export */   MatTabLabel: () => (/* binding */ MatTabLabel),
/* harmony export */   MatTabLabelWrapper: () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   MatTabLink: () => (/* binding */ MatTabLink),
/* harmony export */   MatTabNav: () => (/* binding */ MatTabNav),
/* harmony export */   MatTabNavPanel: () => (/* binding */ MatTabNavPanel),
/* harmony export */   MatTabsModule: () => (/* binding */ MatTabsModule),
/* harmony export */   _MAT_INK_BAR_POSITIONER: () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   _MAT_INK_BAR_POSITIONER_FACTORY: () => (/* binding */ _MAT_INK_BAR_POSITIONER_FACTORY),
/* harmony export */   matTabsAnimations: () => (/* binding */ matTabsAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers/private */ 98615);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/observers */ 39539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 47172);



















/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c1 = ["tabListContainer"];
const _c2 = ["tabList"];
const _c3 = ["tabListInner"];
const _c4 = ["nextPaginator"];
const _c5 = ["previousPaginator"];
const _c6 = a0 => ({
  animationDuration: a0
});
const _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {}
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const tab_r4 = ctx_r2.$implicit;
      const ɵ$index_3_r5 = ctx_r2.$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const tabHeader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._handleClick(tab_r4, tabHeader_r7, ɵ$index_3_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const ɵ$index_3_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._tabFocusChanged($event, ɵ$index_3_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ɵ$index_3_r5 = ctx.$index;
    const tabNode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r4.labelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tab--active", ctx_r5.selectedIndex === ɵ$index_3_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabLabelId(ɵ$index_3_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r5._getTabIndex(ɵ$index_3_r5))("aria-posinset", ɵ$index_3_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(ɵ$index_3_r5))("aria-selected", ctx_r5.selectedIndex === ɵ$index_3_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._setTabBodyWrapperHeight($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ɵ$index_23_r11 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r10.bodyClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-body-active", ctx_r5.selectedIndex === ɵ$index_23_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabContentId(ɵ$index_23_r11))("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === ɵ$index_23_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(ɵ$index_23_r11))("aria-hidden", ctx_r5.selectedIndex !== ɵ$index_23_r11);
  }
}
const _c10 = ["mat-tab-nav-bar", ""];
const _c11 = ["mat-tab-link", ""];
const MAT_TAB_CONTENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
let MatTabContent = /*#__PURE__*/(() => {
  class MatTabContent {
    constructor(/** Content for the tab. */template) {
      this.template = template;
    }
    static {
      this.ɵfac = function MatTabContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTabContent,
        selectors: [["", "matTabContent", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_CONTENT,
          useExisting: MatTabContent
        }])]
      });
    }
  }
  return MatTabContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
/** Used to flag tab labels for use with the portal directive */
let MatTabLabel = /*#__PURE__*/(() => {
  class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortal {
    constructor(templateRef, viewContainerRef, _closestTab) {
      super(templateRef, viewContainerRef);
      this._closestTab = _closestTab;
    }
    static {
      this.ɵfac = function MatTabLabel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTabLabel,
        selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_LABEL,
          useExisting: MatTabLabel
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatTabLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
let MatTab = /*#__PURE__*/(() => {
  class MatTab {
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */
    get templateLabel() {
      return this._templateLabel;
    }
    set templateLabel(value) {
      this._setTemplateLabelInput(value);
    }
    /** @docs-private */
    get content() {
      return this._contentPortal;
    }
    constructor(_viewContainerRef, _closestTabGroup) {
      this._viewContainerRef = _viewContainerRef;
      this._closestTabGroup = _closestTabGroup;
      /** whether the tab is disabled. */
      this.disabled = false;
      /**
       * Template provided in the tab content that will be used if present, used to enable lazy-loading
       */
      this._explicitContent = undefined;
      /** Plain text label for the tab, used when there is no template label. */
      this.textLabel = '';
      /** Portal that will be the hosted content of the tab */
      this._contentPortal = null;
      /** Emits whenever the internal state of the tab changes. */
      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * The relatively indexed position where 0 represents the center, negative is left, and positive
       * represents the right.
       */
      this.position = null;
      /**
       * The initial relatively index origin of the tab if it was created and selected after there
       * was already a selected tab. Provides context of what position the tab should originate from.
       */
      this.origin = null;
      /**
       * Whether the tab is currently active.
       */
      this.isActive = false;
    }
    ngOnChanges(changes) {
      if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
        this._stateChanges.next();
      }
    }
    ngOnDestroy() {
      this._stateChanges.complete();
    }
    ngOnInit() {
      this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setTemplateLabelInput(value) {
      // Only update the label if the query managed to find one. This works around an issue where a
      // user may have manually set `templateLabel` during creation mode, which would then get
      // clobbered by `undefined` when the query resolves. Also note that we check that the closest
      // tab matches the current one so that we don't pick up labels from nested tabs.
      if (value && value._closestTab === this) {
        this._templateLabel = value;
      }
    }
    static {
      this.ɵfac = function MatTab_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTab,
        selectors: [["mat-tab"]],
        contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabel, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabContent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
          }
        },
        viewQuery: function MatTab_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
          }
        },
        hostAttrs: ["hidden", ""],
        inputs: {
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          textLabel: [0, "label", "textLabel"],
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          labelClass: "labelClass",
          bodyClass: "bodyClass"
        },
        exportAs: ["matTab"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB,
          useExisting: MatTab
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatTab_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2
      });
    }
  }
  return MatTab;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Class that is applied when a tab indicator is active. */
const ACTIVE_CLASS = 'mdc-tab-indicator--active';
/** Class that is applied when the tab indicator should not transition. */
const NO_TRANSITION_CLASS = 'mdc-tab-indicator--no-transition';
/**
 * Abstraction around the MDC tab indicator that acts as the tab header's ink bar.
 * @docs-private
 */
class MatInkBar {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach(item => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find(item => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      // The ink bar won't animate unless we give it the `DOMRect` of the previous item.
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
}
let InkBarItem = /*#__PURE__*/(() => {
  class InkBarItem {
    constructor() {
      this._elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      this._fitToContent = false;
    }
    /** Whether the ink bar should fit to the entire tab or just its content. */
    get fitInkBarToContent() {
      return this._fitToContent;
    }
    set fitInkBarToContent(newValue) {
      if (this._fitToContent !== newValue) {
        this._fitToContent = newValue;
        if (this._inkBarElement) {
          this._appendInkBarElement();
        }
      }
    }
    /** Aligns the ink bar to the current item. */
    activateInkBar(previousIndicatorClientRect) {
      const element = this._elementRef.nativeElement;
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
        element.classList.add(ACTIVE_CLASS);
        return;
      }
      // This animation uses the FLIP approach. You can read more about it at the link below:
      // https://aerotwist.com/blog/flip-your-animations/
      // Calculate the dimensions based on the dimensions of the previous indicator
      const currentClientRect = element.getBoundingClientRect();
      const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      element.classList.add(NO_TRANSITION_CLASS);
      this._inkBarContentElement.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);
      // Force repaint before updating classes and transform to ensure the transform properly takes effect
      element.getBoundingClientRect();
      element.classList.remove(NO_TRANSITION_CLASS);
      element.classList.add(ACTIVE_CLASS);
      this._inkBarContentElement.style.setProperty('transform', '');
    }
    /** Removes the ink bar from the current item. */
    deactivateInkBar() {
      this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
    }
    /** Initializes the foundation. */
    ngOnInit() {
      this._createInkBarElement();
    }
    /** Destroys the foundation. */
    ngOnDestroy() {
      this._inkBarElement?.remove();
      this._inkBarElement = this._inkBarContentElement = null;
    }
    /** Creates and appends the ink bar element. */
    _createInkBarElement() {
      const documentNode = this._elementRef.nativeElement.ownerDocument || document;
      const inkBarElement = this._inkBarElement = documentNode.createElement('span');
      const inkBarContentElement = this._inkBarContentElement = documentNode.createElement('span');
      inkBarElement.className = 'mdc-tab-indicator';
      inkBarContentElement.className = 'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
      inkBarElement.appendChild(this._inkBarContentElement);
      this._appendInkBarElement();
    }
    /**
     * Appends the ink bar to the tab host element or content, depending on whether
     * the ink bar should fit to content.
     */
    _appendInkBarElement() {
      if (!this._inkBarElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Ink bar element has not been created and cannot be appended');
      }
      const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector('.mdc-tab__content') : this._elementRef.nativeElement;
      if (!parentElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Missing element to host the ink bar');
      }
      parentElement.appendChild(this._inkBarElement);
    }
    static {
      this.ɵfac = function InkBarItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InkBarItem)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: InkBarItem,
        inputs: {
          fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return InkBarItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = element => ({
    left: element ? (element.offsetLeft || 0) + 'px' : '0',
    width: element ? (element.offsetWidth || 0) + 'px' : '0'
  });
  return method;
}
/** Injection token for the MatInkBar's Positioner. */
const _MAT_INK_BAR_POSITIONER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});

/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
let MatTabLabelWrapper = /*#__PURE__*/(() => {
  class MatTabLabelWrapper extends InkBarItem {
    constructor(elementRef) {
      super();
      this.elementRef = elementRef;
      /** Whether the tab is disabled. */
      this.disabled = false;
    }
    /** Sets focus on the wrapper element */
    focus() {
      this.elementRef.nativeElement.focus();
    }
    getOffsetLeft() {
      return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
      return this.elementRef.nativeElement.offsetWidth;
    }
    static {
      this.ɵfac = function MatTabLabelWrapper_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTabLabelWrapper,
        selectors: [["", "matTabLabelWrapper", ""]],
        hostVars: 3,
        hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatTabLabelWrapper;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Config used to bind passive event listeners */
const passiveEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
let MatPaginatedTabHeader = /*#__PURE__*/(() => {
  class MatPaginatedTabHeader {
    /** The index of the active tab. */
    get selectedIndex() {
      return this._selectedIndex;
    }
    set selectedIndex(v) {
      const value = isNaN(v) ? 0 : v;
      if (this._selectedIndex != value) {
        this._selectedIndexChanged = true;
        this._selectedIndex = value;
        if (this._keyManager) {
          this._keyManager.updateActiveItem(value);
        }
      }
    }
    constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._viewportRuler = _viewportRuler;
      this._dir = _dir;
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._animationMode = _animationMode;
      /** The distance in pixels that the tab labels should be translated to the left. */
      this._scrollDistance = 0;
      /** Whether the header should scroll to the selected index after the view has been checked. */
      this._selectedIndexChanged = false;
      /** Emits when the component is destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Whether the controls for pagination should be displayed */
      this._showPaginationControls = false;
      /** Whether the tab list can be scrolled more towards the end of the tab label list. */
      this._disableScrollAfter = true;
      /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
      this._disableScrollBefore = true;
      /** Stream that will stop the automated scrolling. */
      this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Whether pagination should be disabled. This can be used to avoid unnecessary
       * layout recalculations if it's known that pagination won't be required.
       */
      this.disablePagination = false;
      this._selectedIndex = 0;
      /** Event emitted when the option is selected. */
      this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when a label is focused. */
      this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._sharedResizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_4__.SharedResizeObserver);
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
      _ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
          this._stopInterval();
        });
      });
    }
    ngAfterViewInit() {
      // We need to handle these events manually, because we want to bind passive event listeners.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        this._handlePaginatorPress('before');
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        this._handlePaginatorPress('after');
      });
    }
    ngAfterContentInit() {
      const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('ltr');
      // We need to debounce resize events because the alignment logic is expensive.
      // If someone animates the width of tabs, we don't want to realign on every animation frame.
      // Once we haven't seen any more resize events in the last 32ms (~2 animaion frames) we can
      // re-align.
      const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(32), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed));
      // Note: We do not actually need to watch these events for proper functioning of the tabs,
      // the resize events above should capture any viewport resize that we care about. However,
      // removing this is fairly breaking for screenshot tests, so we're leaving it here for now.
      const viewportResize = this._viewportRuler.change(150).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed));
      const realign = () => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
      };
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap()
      // Allow focus to land on disabled tabs, as per https://w3c.github.io/aria-practices/#kbd_disabled_controls
      .skipPredicate(() => false);
      this._keyManager.updateActiveItem(this._selectedIndex);
      // Note: We do not need to realign after the first render for proper functioning of the tabs
      // the resize events above should fire when we first start observing the element. However,
      // removing this is fairly breaking for screenshot tests, so we're leaving it here for now.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(realign, {
        injector: this._injector
      });
      // On dir change or resize, realign the ink bar and update the orientation of
      // the key manager if the direction has changed.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        // We need to defer this to give the browser some time to recalculate
        // the element dimensions. The call has to be wrapped in `NgZone.run`,
        // because the viewport change handler runs outside of Angular.
        this._ngZone.run(() => {
          Promise.resolve().then(() => {
            // Clamp the scroll distance, because it can change with the number of tabs.
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
            realign();
          });
        });
        this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
      });
      // If there is a change in the focus key manager we need to emit the `indexFocused`
      // event in order to provide a public event that notifies about focus changes. Also we realign
      // the tabs container by scrolling the new focused tab into the visible section.
      this._keyManager.change.subscribe(newFocusIndex => {
        this.indexFocused.emit(newFocusIndex);
        this._setTabFocus(newFocusIndex);
      });
    }
    /** Sends any changes that could affect the layout of the items. */
    _itemsResized() {
      if (typeof ResizeObserver !== 'function') {
        return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
      }
      return this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(tabItems => new rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable(observer => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver(entries => observer.next(entries));
        tabItems.forEach(item => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skip)(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(entries => entries.some(e => e.contentRect.width > 0 && e.contentRect.height > 0)));
    }
    ngAfterContentChecked() {
      // If the number of tab labels have changed, check if scrolling should be enabled
      if (this._tabLabelCount != this._items.length) {
        this.updatePagination();
        this._tabLabelCount = this._items.length;
        this._changeDetectorRef.markForCheck();
      }
      // If the selected index has changed, scroll to the label and check if the scrolling controls
      // should be disabled.
      if (this._selectedIndexChanged) {
        this._scrollToLabel(this._selectedIndex);
        this._checkScrollingControls();
        this._alignInkBarToSelectedTab();
        this._selectedIndexChanged = false;
        this._changeDetectorRef.markForCheck();
      }
      // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
      // then translate the header to reflect this.
      if (this._scrollDistanceChanged) {
        this._updateTabScrollPosition();
        this._scrollDistanceChanged = false;
        this._changeDetectorRef.markForCheck();
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._destroyed.next();
      this._destroyed.complete();
      this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */
    _handleKeydown(event) {
      // We don't handle any key bindings with a modifier key.
      if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
        return;
      }
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE:
          if (this.focusIndex !== this.selectedIndex) {
            const item = this._items.get(this.focusIndex);
            if (item && !item.disabled) {
              this.selectFocusedIndex.emit(this.focusIndex);
              this._itemSelected(event);
            }
          }
          break;
        default:
          this._keyManager.onKeydown(event);
      }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    _onContentChanges() {
      const textContent = this._elementRef.nativeElement.textContent;
      // We need to diff the text content of the header, because the MutationObserver callback
      // will fire even if the text content didn't change which is inefficient and is prone
      // to infinite loops if a poorly constructed expression is passed in (see #14249).
      if (textContent !== this._currentTextContent) {
        this._currentTextContent = textContent || '';
        // The content observer runs outside the `NgZone` by default, which
        // means that we need to bring the callback back in ourselves.
        this._ngZone.run(() => {
          this.updatePagination();
          this._alignInkBarToSelectedTab();
          this._changeDetectorRef.markForCheck();
        });
      }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    updatePagination() {
      this._checkPaginationEnabled();
      this._checkScrollingControls();
      this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
      return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
      if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
        return;
      }
      this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    _isValidIndex(index) {
      return this._items ? !!this._items.toArray()[index] : true;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    _setTabFocus(tabIndex) {
      if (this._showPaginationControls) {
        this._scrollToLabel(tabIndex);
      }
      if (this._items && this._items.length) {
        this._items.toArray()[tabIndex].focus();
        // Do not let the browser manage scrolling to focus the element, this will be handled
        // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
        // should be the full width minus the offset width.
        const containerEl = this._tabListContainer.nativeElement;
        const dir = this._getLayoutDirection();
        if (dir == 'ltr') {
          containerEl.scrollLeft = 0;
        } else {
          containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
        }
      }
    }
    /** The layout direction of the containing app. */
    _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    _updateTabScrollPosition() {
      if (this.disablePagination) {
        return;
      }
      const scrollDistance = this.scrollDistance;
      const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
      // Don't use `translate3d` here because we don't want to create a new layer. A new layer
      // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
      // and ripples will exceed the boundaries of the visible tab bar.
      // See: https://github.com/angular/components/issues/10276
      // We round the `transform` here, because transforms with sub-pixel precision cause some
      // browsers to blur the content of the element.
      this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
      // Setting the `transform` on IE will change the scroll offset of the parent, causing the
      // position to be thrown off in some cases. We have to reset it ourselves to ensure that
      // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
      // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
      if (this._platform.TRIDENT || this._platform.EDGE) {
        this._tabListContainer.nativeElement.scrollLeft = 0;
      }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    get scrollDistance() {
      return this._scrollDistance;
    }
    set scrollDistance(value) {
      this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollHeader(direction) {
      const viewLength = this._tabListContainer.nativeElement.offsetWidth;
      // Move the scroll distance one-third the length of the tab list's viewport.
      const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
      return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */
    _handlePaginatorClick(direction) {
      this._stopInterval();
      this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollToLabel(labelIndex) {
      if (this.disablePagination) {
        return;
      }
      const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
      if (!selectedLabel) {
        return;
      }
      // The view length is the visible width of the tab labels.
      const viewLength = this._tabListContainer.nativeElement.offsetWidth;
      const {
        offsetLeft,
        offsetWidth
      } = selectedLabel.elementRef.nativeElement;
      let labelBeforePos, labelAfterPos;
      if (this._getLayoutDirection() == 'ltr') {
        labelBeforePos = offsetLeft;
        labelAfterPos = labelBeforePos + offsetWidth;
      } else {
        labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
        labelBeforePos = labelAfterPos - offsetWidth;
      }
      const beforeVisiblePos = this.scrollDistance;
      const afterVisiblePos = this.scrollDistance + viewLength;
      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
      }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkPaginationEnabled() {
      if (this.disablePagination) {
        this._showPaginationControls = false;
      } else {
        const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
        const containerWidth = this._elementRef.nativeElement.offsetWidth;
        // Usually checking that the scroll width is greater than the container width should be
        // enough, but on Safari at specific widths the browser ends up rounding up when there's
        // no pagination and rounding down once the pagination is added. This can throw the component
        // into an infinite loop where the pagination shows up and disappears constantly. We work
        // around it by adding a threshold to the calculation. From manual testing the threshold
        // can be lowered to 2px and still resolve the issue, but we set a higher one to be safe.
        // This shouldn't cause any content to be clipped, because tabs have a 24px horizontal
        // padding. See b/316395154 for more information.
        const isEnabled = scrollWidth - containerWidth >= 5;
        if (!isEnabled) {
          this.scrollDistance = 0;
        }
        if (isEnabled !== this._showPaginationControls) {
          this._showPaginationControls = isEnabled;
          this._changeDetectorRef.markForCheck();
        }
      }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkScrollingControls() {
      if (this.disablePagination) {
        this._disableScrollAfter = this._disableScrollBefore = true;
      } else {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance() {
      const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
      const viewLength = this._tabListContainer.nativeElement.offsetWidth;
      return lengthOfTabList - viewLength || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */
    _alignInkBarToSelectedTab() {
      const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
      const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
      if (selectedLabelWrapper) {
        this._inkBar.alignToElement(selectedLabelWrapper);
      } else {
        this._inkBar.hide();
      }
    }
    /** Stops the currently-running paginator interval.  */
    _stopInterval() {
      this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */
    _handlePaginatorPress(direction, mouseEvent) {
      // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
      // null check the `button`, but we do it so we don't break tests that use fake events.
      if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
        return;
      }
      // Avoid overlapping timers.
      this._stopInterval();
      // Start a timer after the delay and keep firing based on the interval.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
      // Keep the timer going until something tells it to stop or the component is destroyed.
      .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this._stopScrolling, this._destroyed))).subscribe(() => {
        const {
          maxScrollDistance,
          distance
        } = this._scrollHeader(direction);
        // Stop the timer if we've reached the start or the end.
        if (distance === 0 || distance >= maxScrollDistance) {
          this._stopInterval();
        }
      });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */
    _scrollTo(position) {
      if (this.disablePagination) {
        return {
          maxScrollDistance: 0,
          distance: 0
        };
      }
      const maxScrollDistance = this._getMaxScrollDistance();
      this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
      // Mark that the scroll distance has changed so that after the view is checked, the CSS
      // transformation can move the header.
      this._scrollDistanceChanged = true;
      this._checkScrollingControls();
      return {
        maxScrollDistance,
        distance: this._scrollDistance
      };
    }
    static {
      this.ɵfac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatPaginatedTabHeader,
        inputs: {
          disablePagination: [2, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
        },
        outputs: {
          selectFocusedIndex: "selectFocusedIndex",
          indexFocused: "indexFocused"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return MatPaginatedTabHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
let MatTabHeader = /*#__PURE__*/(() => {
  class MatTabHeader extends MatPaginatedTabHeader {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
      super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      /** Whether the ripple effect is disabled or not. */
      this.disableRipple = false;
    }
    ngAfterContentInit() {
      this._inkBar = new MatInkBar(this._items);
      super.ngAfterContentInit();
    }
    _itemSelected(event) {
      event.preventDefault();
    }
    static {
      this.ɵfac = function MatTabHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabHeader,
        selectors: [["mat-tab-header"]],
        contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabHeader_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-header"],
        hostVars: 4,
        hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
          }
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 13,
        vars: 10,
        consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
        template: function MatTabHeader_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
            })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
            })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
            })("click", function MatTabHeader_Template_div_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
            })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
        styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
        encapsulation: 2
      });
    }
  }
  return MatTabHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');

/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('translateTab', [
  /*#__PURE__*/
  // Transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('center, void, left-origin-center, right-origin-center', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'none',
    visibility: 'visible'
  })),
  /*#__PURE__*/
  // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('left', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px',
    // Normally this is redundant since we detach the content from the DOM, but if the user
    // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
    visibility: 'hidden'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('right', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px',
    visibility: 'hidden'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('* => left, * => right, left => center, right => center', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('void => left-origin-center', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('void => right-origin-center', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
let MatTabBodyPortal = /*#__PURE__*/(() => {
  class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
      super(componentFactoryResolver, viewContainerRef, _document);
      this._host = _host;
      /** Subscription to events for when the tab body begins centering. */
      this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
      /** Subscription to events for when the tab body finishes leaving from center position. */
      this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
      super.ngOnInit();
      this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
        if (this._host._content && isCentering && !this.hasAttached()) {
          this.attach(this._host._content);
        }
      });
      this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
        if (!this._host.preserveContent) {
          this.detach();
        }
      });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
      super.ngOnDestroy();
      this._centeringSub.unsubscribe();
      this._leavingSub.unsubscribe();
    }
    static {
      this.ɵfac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_25__.DOCUMENT));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTabBodyPortal,
        selectors: [["", "matTabBodyHost", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatTabBodyPortal;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
let MatTabBody = /*#__PURE__*/(() => {
  class MatTabBody {
    /** The shifted index position of the tab body, where zero represents the active center tab. */
    set position(position) {
      this._positionIndex = position;
      this._computePositionAnimationState();
    }
    constructor(_elementRef, _dir, changeDetectorRef) {
      this._elementRef = _elementRef;
      this._dir = _dir;
      /** Subscription to the directionality change observable. */
      this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
      /** Emits when an animation on the tab is complete. */
      this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Event emitted when the tab begins to animate towards the center as the active tab. */
      this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */
      this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */
      this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the tab completes its animation towards the center. */
      this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      // Note that the default value will always be overwritten by `MatTabBody`, but we need one
      // anyway to prevent the animations module from throwing an error if the body is used on its own.
      /** Duration for the tab's animation. */
      this.animationDuration = '500ms';
      /** Whether the tab's content should be kept in the DOM while it's off-screen. */
      this.preserveContent = false;
      if (_dir) {
        this._dirChangeSubscription = _dir.change.subscribe(dir => {
          this._computePositionAnimationState(dir);
          changeDetectorRef.markForCheck();
        });
      }
      this._translateTabComplete.subscribe(event => {
        // If the transition to the center is complete, emit an event.
        if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
          this._onCentered.emit();
        }
        if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
          this._afterLeavingCenter.emit();
        }
      });
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit() {
      if (this._position == 'center' && this.origin != null) {
        this._position = this._computePositionFromOrigin(this.origin);
      }
    }
    ngOnDestroy() {
      this._dirChangeSubscription.unsubscribe();
      this._translateTabComplete.complete();
    }
    _onTranslateTabStarted(event) {
      const isCentering = this._isCenterPosition(event.toState);
      this._beforeCentering.emit(isCentering);
      if (isCentering) {
        this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
      }
    }
    /** The text direction of the containing app. */
    _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */
    _isCenterPosition(position) {
      return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */
    _computePositionAnimationState(dir = this._getLayoutDirection()) {
      if (this._positionIndex < 0) {
        this._position = dir == 'ltr' ? 'left' : 'right';
      } else if (this._positionIndex > 0) {
        this._position = dir == 'ltr' ? 'right' : 'left';
      } else {
        this._position = 'center';
      }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */
    _computePositionFromOrigin(origin) {
      const dir = this._getLayoutDirection();
      if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
        return 'left-origin-center';
      }
      return 'right-origin-center';
    }
    static {
      this.ɵfac = function MatTabBody_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabBody,
        selectors: [["mat-tab-body"]],
        viewQuery: function MatTabBody_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-body"],
        inputs: {
          _content: [0, "content", "_content"],
          origin: "origin",
          animationDuration: "animationDuration",
          preserveContent: "preserveContent",
          position: "position"
        },
        outputs: {
          _onCentering: "_onCentering",
          _beforeCentering: "_beforeCentering",
          _afterLeavingCenter: "_afterLeavingCenter",
          _onCentered: "_onCentered"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 3,
        vars: 6,
        consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
        template: function MatTabBody_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onTranslateTabStarted($event));
            })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._translateTabComplete.next($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c7, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx.animationDuration)));
          }
        },
        dependencies: [MatTabBodyPortal, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollable],
        styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"],
        encapsulation: 2,
        data: {
          animation: [matTabsAnimations.translateTab]
        }
      });
    }
  }
  return MatTabBody;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** Boolean constant that determines whether the tab group supports the `backgroundColor` input */
const ENABLE_BACKGROUND_INPUT = true;
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
let MatTabGroup = /*#__PURE__*/(() => {
  class MatTabGroup {
    /** Whether the ink bar should fit its width to the size of the tab label content. */
    get fitInkBarToContent() {
      return this._fitInkBarToContent;
    }
    set fitInkBarToContent(value) {
      this._fitInkBarToContent = value;
      this._changeDetectorRef.markForCheck();
    }
    /** The index of the active tab. */
    get selectedIndex() {
      return this._selectedIndex;
    }
    set selectedIndex(value) {
      this._indexToSelect = isNaN(value) ? null : value;
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() {
      return this._animationDuration;
    }
    set animationDuration(value) {
      const stringValue = value + '';
      this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
    }
    /**
     * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
     * accessibility when the tab does not have focusable elements or if it has scrollable content.
     * The `tabindex` will be removed automatically for inactive tabs.
     * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
     */
    get contentTabIndex() {
      return this._contentTabIndex;
    }
    set contentTabIndex(value) {
      this._contentTabIndex = isNaN(value) ? null : value;
    }
    /**
     * Theme color of the background of the tab group. This API is supported in M2 themes only, it
     * has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     *
     * @deprecated The background color should be customized through Sass theming APIs.
     * @breaking-change 20.0.0 Remove this input
     */
    get backgroundColor() {
      return this._backgroundColor;
    }
    set backgroundColor(value) {
      if (!ENABLE_BACKGROUND_INPUT) {
        throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
      }
      const classList = this._elementRef.nativeElement.classList;
      classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
      if (value) {
        classList.add('mat-tabs-with-background', `mat-background-${value}`);
      }
      this._backgroundColor = value;
    }
    constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._animationMode = _animationMode;
      /** All of the tabs that belong to the group. */
      this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
      /** The tab index that should be selected after the content has been checked. */
      this._indexToSelect = 0;
      /** Index of the tab that was focused last. */
      this._lastFocusedTabIndex = null;
      /** Snapshot of the height of the tab body wrapper before another tab is activated. */
      this._tabBodyWrapperHeight = 0;
      /** Subscription to tabs being added/removed. */
      this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
      /** Subscription to changes in the tab labels. */
      this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
      this._fitInkBarToContent = false;
      /** Whether tabs should be stretched to fill the header. */
      this.stretchTabs = true;
      /** Whether the tab group should grow to the size of the active tab. */
      this.dynamicHeight = false;
      this._selectedIndex = null;
      /** Position of the tab header. */
      this.headerPosition = 'above';
      /**
       * Whether pagination should be disabled. This can be used to avoid unnecessary
       * layout recalculations if it's known that pagination won't be required.
       */
      this.disablePagination = false;
      /** Whether ripples in the tab group are disabled. */
      this.disableRipple = false;
      /**
       * By default tabs remove their content from the DOM while it's off-screen.
       * Setting this to `true` will keep it in the DOM which will prevent elements
       * like iframes and videos from reloading next time it comes back into the view.
       */
      this.preserveContent = false;
      /** Output to enable support for two-way binding on `[(selectedIndex)]` */
      this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when focus has changed within a tab group. */
      this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the body animation has completed */
      this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the tab selection has changed. */
      this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      /** Whether the tab group is rendered on the server. */
      this._isServer = !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform).isBrowser;
      this._groupId = nextId++;
      this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
      this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
      this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
      if (defaultConfig?.contentTabIndex != null) {
        this.contentTabIndex = defaultConfig.contentTabIndex;
      }
      this.preserveContent = !!defaultConfig?.preserveContent;
      this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
      this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
      // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
      // the amount of tabs changes before the actual change detection runs.
      const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
      // If there is a change in selected index, emit a change event. Should not trigger if
      // the selected index has not yet been initialized.
      if (this._selectedIndex != indexToSelect) {
        const isFirstRun = this._selectedIndex == null;
        if (!isFirstRun) {
          this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          // Preserve the height so page doesn't scroll up during tab change.
          // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change
          const wrapper = this._tabBodyWrapper.nativeElement;
          wrapper.style.minHeight = wrapper.clientHeight + 'px';
        }
        // Changing these values after change detection has run
        // since the checked content may contain references to them.
        Promise.resolve().then(() => {
          this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
          if (!isFirstRun) {
            this.selectedIndexChange.emit(indexToSelect);
            // Clear the min-height, this was needed during tab change to avoid
            // unnecessary scrolling.
            this._tabBodyWrapper.nativeElement.style.minHeight = '';
          }
        });
      }
      // Setup the position for each tab and optionally setup an origin on the next selected tab.
      this._tabs.forEach((tab, index) => {
        tab.position = index - indexToSelect;
        // If there is already a selected tab, then set up an origin for the next selected tab
        // if it doesn't have one already.
        if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
          tab.origin = indexToSelect - this._selectedIndex;
        }
      });
      if (this._selectedIndex !== indexToSelect) {
        this._selectedIndex = indexToSelect;
        this._lastFocusedTabIndex = null;
        this._changeDetectorRef.markForCheck();
      }
    }
    ngAfterContentInit() {
      this._subscribeToAllTabChanges();
      this._subscribeToTabLabels();
      // Subscribe to changes in the amount of tabs, in order to be
      // able to re-render the content as new tabs are added or removed.
      this._tabsSubscription = this._tabs.changes.subscribe(() => {
        const indexToSelect = this._clampTabIndex(this._indexToSelect);
        // Maintain the previously-selected tab if a new tab is added or removed and there is no
        // explicit change that selects a different tab.
        if (indexToSelect === this._selectedIndex) {
          const tabs = this._tabs.toArray();
          let selectedTab;
          for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].isActive) {
              // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
              // event, otherwise the consumer may end up in an infinite loop in some edge cases like
              // adding a tab within the `selectedIndexChange` event.
              this._indexToSelect = this._selectedIndex = i;
              this._lastFocusedTabIndex = null;
              selectedTab = tabs[i];
              break;
            }
          }
          // If we haven't found an active tab and a tab exists at the selected index, it means
          // that the active tab was swapped out. Since this won't be picked up by the rendering
          // loop in `ngAfterContentChecked`, we need to sync it up manually.
          if (!selectedTab && tabs[indexToSelect]) {
            Promise.resolve().then(() => {
              tabs[indexToSelect].isActive = true;
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            });
          }
        }
        this._changeDetectorRef.markForCheck();
      });
    }
    /** Listens to changes in all of the tabs. */
    _subscribeToAllTabChanges() {
      // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
      // some that are inside of nested tab groups. We filter them out manually by checking that
      // the closest group to the tab is the current one.
      this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._allTabs)).subscribe(tabs => {
        this._tabs.reset(tabs.filter(tab => {
          return tab._closestTabGroup === this || !tab._closestTabGroup;
        }));
        this._tabs.notifyOnChanges();
      });
    }
    ngOnDestroy() {
      this._tabs.destroy();
      this._tabsSubscription.unsubscribe();
      this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */
    realignInkBar() {
      if (this._tabHeader) {
        this._tabHeader._alignInkBarToSelectedTab();
      }
    }
    /**
     * Recalculates the tab group's pagination dimensions.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    updatePagination() {
      if (this._tabHeader) {
        this._tabHeader.updatePagination();
      }
    }
    /**
     * Sets focus to a particular tab.
     * @param index Index of the tab to be focused.
     */
    focusTab(index) {
      const header = this._tabHeader;
      if (header) {
        header.focusIndex = index;
      }
    }
    _focusChanged(index) {
      this._lastFocusedTabIndex = index;
      this.focusChange.emit(this._createChangeEvent(index));
    }
    _createChangeEvent(index) {
      const event = new MatTabChangeEvent();
      event.index = index;
      if (this._tabs && this._tabs.length) {
        event.tab = this._tabs.toArray()[index];
      }
      return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */
    _subscribeToTabLabels() {
      if (this._tabLabelSubscription) {
        this._tabLabelSubscription.unsubscribe();
      }
      this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    _clampTabIndex(index) {
      // Note the `|| 0`, which ensures that values like NaN can't get through
      // and which would otherwise throw the component into an infinite loop
      // (since Math.max(NaN, 0) === NaN).
      return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i) {
      return `mat-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */
    _getTabContentId(i) {
      return `mat-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight) {
      if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
        return;
      }
      const wrapper = this._tabBodyWrapper.nativeElement;
      wrapper.style.height = this._tabBodyWrapperHeight + 'px';
      // This conditional forces the browser to paint the height so that
      // the animation to the new height can have an origin.
      if (this._tabBodyWrapper.nativeElement.offsetHeight) {
        wrapper.style.height = tabHeight + 'px';
      }
    }
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight() {
      const wrapper = this._tabBodyWrapper.nativeElement;
      this._tabBodyWrapperHeight = wrapper.clientHeight;
      wrapper.style.height = '';
      this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */
    _handleClick(tab, tabHeader, index) {
      tabHeader.focusIndex = index;
      if (!tab.disabled) {
        this.selectedIndex = index;
      }
    }
    /** Retrieves the tabindex for the tab. */
    _getTabIndex(index) {
      const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
      return index === targetIndex ? 0 : -1;
    }
    /** Callback for when the focused state of a tab has changed. */
    _tabFocusChanged(focusOrigin, index) {
      // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
      // can cause the tab to be moved out from under the pointer, interrupting the
      // click sequence (see #21898). We don't need to scroll the tab into view for
      // such cases anyway, because it will be done when the tab becomes selected.
      if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
        this._tabHeader.focusIndex = index;
      }
    }
    static {
      this.ɵfac = function MatTabGroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabGroup,
        selectors: [["mat-tab-group"]],
        contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
          }
        },
        viewQuery: function MatTabGroup_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-group"],
        hostVars: 10,
        hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
          }
        },
        inputs: {
          color: "color",
          fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          dynamicHeight: [2, "dynamicHeight", "dynamicHeight", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
          contentTabIndex: [2, "contentTabIndex", "contentTabIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
          disablePagination: [2, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          preserveContent: [2, "preserveContent", "preserveContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          backgroundColor: "backgroundColor",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          focusChange: "focusChange",
          animationDone: "animationDone",
          selectedTabChange: "selectedTabChange"
        },
        exportAs: ["matTabGroup"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_TAB_GROUP,
          useExisting: MatTabGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 9,
        vars: 8,
        consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "class", "content", "position", "origin", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "content", "position", "origin", "animationDuration", "preserveContent"]],
        template: function MatTabGroup_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._focusChanged($event));
            })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.selectedIndex = $event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatTabGroup_For_3_Template, 8, 17, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatTabGroup_Conditional_4_Template, 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, MatTabGroup_For_8_Template, 1, 13, "mat-tab-body", 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isServer ? 4 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
          }
        },
        dependencies: [MatTabHeader, MatTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkMonitorFocus, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, MatTabBody],
        styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"],
        encapsulation: 2
      });
    }
  }
  return MatTabGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {}

// Increasing integer for generating unique ids for tab nav components.
let nextUniqueId = 0;
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
let MatTabNav = /*#__PURE__*/(() => {
  class MatTabNav extends MatPaginatedTabHeader {
    /** Whether the ink bar should fit its width to the size of the tab label content. */
    get fitInkBarToContent() {
      return this._fitInkBarToContent.value;
    }
    set fitInkBarToContent(value) {
      this._fitInkBarToContent.next(value);
      this._changeDetectorRef.markForCheck();
    }
    get animationDuration() {
      return this._animationDuration;
    }
    set animationDuration(value) {
      const stringValue = value + '';
      this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
    }
    /**
     * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
     * has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    get backgroundColor() {
      return this._backgroundColor;
    }
    set backgroundColor(value) {
      const classList = this._elementRef.nativeElement.classList;
      classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
      if (value) {
        classList.add('mat-tabs-with-background', `mat-background-${value}`);
      }
      this._backgroundColor = value;
    }
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
      super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      this._fitInkBarToContent = new rxjs__WEBPACK_IMPORTED_MODULE_26__.BehaviorSubject(false);
      /** Whether tabs should be stretched to fill the header. */
      this.stretchTabs = true;
      /** Whether the ripple effect is disabled or not. */
      this.disableRipple = false;
      /**
       * Theme color of the nav bar. This API is supported in M2 themes only, it has
       * no effect in M3 themes.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.io/guide/theming#using-component-color-variants.
       */
      this.color = 'primary';
      this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
      this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
      this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    }
    _itemSelected() {
      // noop
    }
    ngAfterContentInit() {
      this._inkBar = new MatInkBar(this._items);
      // We need this to run before the `changes` subscription in parent to ensure that the
      // selectedIndex is up-to-date by the time the super class starts looking for it.
      this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        this.updateActiveLink();
      });
      super.ngAfterContentInit();
    }
    ngAfterViewInit() {
      if (!this.tabPanel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('A mat-tab-nav-panel must be specified via [tabPanel].');
      }
      super.ngAfterViewInit();
    }
    /** Notifies the component that the active link has been changed. */
    updateActiveLink() {
      if (!this._items) {
        return;
      }
      const items = this._items.toArray();
      for (let i = 0; i < items.length; i++) {
        if (items[i].active) {
          this.selectedIndex = i;
          this._changeDetectorRef.markForCheck();
          if (this.tabPanel) {
            this.tabPanel._activeTabId = items[i].id;
          }
          return;
        }
      }
      // The ink bar should hide itself if no items are active.
      this.selectedIndex = -1;
      this._inkBar.hide();
    }
    _getRole() {
      return this.tabPanel ? 'tablist' : this._elementRef.nativeElement.getAttribute('role');
    }
    static {
      this.ɵfac = function MatTabNav_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabNav,
        selectors: [["", "mat-tab-nav-bar", ""]],
        contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        viewQuery: function MatTabNav_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
        hostVars: 17,
        hostBindings: function MatTabNav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._getRole());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          animationDuration: "animationDuration",
          backgroundColor: "backgroundColor",
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          color: "color",
          tabPanel: "tabPanel"
        },
        exportAs: ["matTabNavBar", "matTabNav"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c10,
        ngContentSelectors: _c0,
        decls: 13,
        vars: 6,
        consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
        template: function MatTabNav_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
            })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
            })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
            })("click", function MatTabNav_Template_div_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
            })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
        styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
        encapsulation: 2
      });
    }
  }
  return MatTabNav;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Link inside a `mat-tab-nav-bar`.
 */
let MatTabLink = /*#__PURE__*/(() => {
  class MatTabLink extends InkBarItem {
    /** Whether the link is active. */
    get active() {
      return this._isActive;
    }
    set active(value) {
      if (value !== this._isActive) {
        this._isActive = value;
        this._tabNavBar.updateActiveLink();
      }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */
    get rippleDisabled() {
      return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
    }
    constructor(_tabNavBar, /** @docs-private */elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
      super();
      this._tabNavBar = _tabNavBar;
      this.elementRef = elementRef;
      this._focusMonitor = _focusMonitor;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /** Whether the tab link is active or not. */
      this._isActive = false;
      /** Whether the tab link is disabled. */
      this.disabled = false;
      /** Whether ripples are disabled on the tab link. */
      this.disableRipple = false;
      this.tabIndex = 0;
      /** Unique id for the tab. */
      this.id = `mat-tab-link-${nextUniqueId++}`;
      this.rippleConfig = globalRippleOptions || {};
      this.tabIndex = parseInt(tabIndex) || 0;
      if (animationMode === 'NoopAnimations') {
        this.rippleConfig.animation = {
          enterDuration: 0,
          exitDuration: 0
        };
      }
      _tabNavBar._fitInkBarToContent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(fitInkBarToContent => {
        this.fitInkBarToContent = fitInkBarToContent;
      });
    }
    /** Focuses the tab link. */
    focus() {
      this.elementRef.nativeElement.focus();
    }
    ngAfterViewInit() {
      this._focusMonitor.monitor(this.elementRef);
    }
    ngOnDestroy() {
      this._destroyed.next();
      this._destroyed.complete();
      super.ngOnDestroy();
      this._focusMonitor.stopMonitoring(this.elementRef);
    }
    _handleFocus() {
      // Since we allow navigation through tabbing in the nav bar, we
      // have to update the focused index whenever the link receives focus.
      this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
    }
    _handleKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER) {
        if (this.disabled) {
          event.preventDefault();
        } else if (this._tabNavBar.tabPanel) {
          // Only prevent the default action on space since it can scroll the page.
          // Don't prevent enter since it can break link navigation.
          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE) {
            event.preventDefault();
          }
          this.elementRef.nativeElement.click();
        }
      }
    }
    _getAriaControls() {
      return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute('aria-controls');
    }
    _getAriaSelected() {
      if (this._tabNavBar.tabPanel) {
        return this.active ? 'true' : 'false';
      } else {
        return this.elementRef.nativeElement.getAttribute('aria-selected');
      }
    }
    _getAriaCurrent() {
      return this.active && !this._tabNavBar.tabPanel ? 'page' : null;
    }
    _getRole() {
      return this._tabNavBar.tabPanel ? 'tab' : this.elementRef.nativeElement.getAttribute('role');
    }
    _getTabIndex() {
      if (this._tabNavBar.tabPanel) {
        return this._isActive && !this.disabled ? 0 : -1;
      } else {
        return this.disabled ? -1 : this.tabIndex;
      }
    }
    static {
      this.ɵfac = function MatTabLink_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabLink,
        selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
        hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
        hostVars: 11,
        hostBindings: function MatTabLink_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
              return ctx._handleFocus();
            })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
          }
        },
        inputs: {
          active: [2, "active", "active", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
          id: "id"
        },
        exportAs: ["matTabLink"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c11,
        ngContentSelectors: _c0,
        decls: 5,
        vars: 2,
        consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
        template: function MatTabLink_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2)(3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple],
        styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatTabLink;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Tab panel component associated with MatTabNav.
 */
let MatTabNavPanel = /*#__PURE__*/(() => {
  class MatTabNavPanel {
    constructor() {
      /** Unique id for the tab panel. */
      this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
    }
    static {
      this.ɵfac = function MatTabNavPanel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabNavPanel)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatTabNavPanel,
        selectors: [["mat-tab-nav-panel"]],
        hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
        hostVars: 2,
        hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._activeTabId)("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        exportAs: ["matTabNavPanel"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatTabNavPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatTabNavPanel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatTabsModule = /*#__PURE__*/(() => {
  class MatTabsModule {
    static {
      this.ɵfac = function MatTabsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTabsModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTabsModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule]
      });
    }
  }
  return MatTabsModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=836.js.map