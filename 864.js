"use strict";
(self["webpackChunkzaalvoetbal_doorn"] = self["webpackChunkzaalvoetbal_doorn"] || []).push([[864],{

/***/ 59864:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/button-toggle.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS: () => (/* binding */ MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   MAT_BUTTON_TOGGLE_GROUP: () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP),
/* harmony export */   MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR: () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR),
/* harmony export */   MatButtonToggle: () => (/* binding */ MatButtonToggle),
/* harmony export */   MatButtonToggleChange: () => (/* binding */ MatButtonToggleChange),
/* harmony export */   MatButtonToggleGroup: () => (/* binding */ MatButtonToggleGroup),
/* harmony export */   MatButtonToggleModule: () => (/* binding */ MatButtonToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);









/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */
const _c0 = ["button"];
const _c1 = ["*"];
function MatButtonToggle_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function MatButtonToggle_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS', {
  providedIn: 'root',
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
/**
 * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
 * It serves as alternative token to the actual `MatButtonToggleGroup` class which
 * could cause unnecessary retention of the class and its component metadata.
 */
const MAT_BUTTON_TOGGLE_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatButtonToggleGroup');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatButtonToggleGroup),
  multi: true
};
// Counter used to generate unique IDs.
let uniqueIdCounter = 0;
/** Change event object emitted by button toggle. */
class MatButtonToggleChange {
  constructor(/** The button toggle that emits the event. */
  source, /** The value assigned to the button toggle. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/** Exclusive selection button toggle group that behaves like a radio-button group. */
let MatButtonToggleGroup = /*#__PURE__*/(() => {
  class MatButtonToggleGroup {
    /** `name` attribute for the underlying `input` element. */
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
      this._markButtonsForCheck();
    }
    /** Value of the toggle group. */
    get value() {
      const selected = this._selectionModel ? this._selectionModel.selected : [];
      if (this.multiple) {
        return selected.map(toggle => toggle.value);
      }
      return selected[0] ? selected[0].value : undefined;
    }
    set value(newValue) {
      this._setSelectionByValue(newValue);
      this.valueChange.emit(this.value);
    }
    /** Selected button toggles in the group. */
    get selected() {
      const selected = this._selectionModel ? this._selectionModel.selected : [];
      return this.multiple ? selected : selected[0] || null;
    }
    /** Whether multiple button toggles can be selected. */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      this._multiple = value;
      this._markButtonsForCheck();
    }
    /** Whether multiple button toggle group is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._markButtonsForCheck();
    }
    /** Whether buttons in the group should be interactive while they're disabled. */
    get disabledInteractive() {
      return this._disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
      this._markButtonsForCheck();
    }
    /** The layout direction of the toggle button group. */
    get dir() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = value;
      this._markButtonsForCheck();
    }
    /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
    get hideMultipleSelectionIndicator() {
      return this._hideMultipleSelectionIndicator;
    }
    set hideMultipleSelectionIndicator(value) {
      this._hideMultipleSelectionIndicator = value;
      this._markButtonsForCheck();
    }
    constructor(_changeDetector, defaultOptions, _dir) {
      this._changeDetector = _changeDetector;
      this._dir = _dir;
      this._multiple = false;
      this._disabled = false;
      this._disabledInteractive = false;
      /**
       * The method to be called in order to update ngModel.
       * Now `ngModel` binding is not supported in multiple selection mode.
       */
      this._controlValueAccessorChangeFn = () => {};
      /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
      this._onTouched = () => {};
      this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
      /**
       * Event that emits whenever the value of the group changes.
       * Used to facilitate two-way data binding.
       * @docs-private
       */
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the group's value changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
      this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
      this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
    }
    ngOnInit() {
      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__.SelectionModel(this.multiple, undefined, false);
    }
    ngAfterContentInit() {
      this._selectionModel.select(...this._buttonToggles.filter(toggle => toggle.checked));
      if (!this.multiple) {
        this._initializeTabIndex();
      }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    writeValue(value) {
      this.value = value;
      this._changeDetector.markForCheck();
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
    /** Handle keydown event calling to single-select button toggle. */
    _keydown(event) {
      if (this.multiple || this.disabled) {
        return;
      }
      const target = event.target;
      const buttonId = target.id;
      const index = this._buttonToggles.toArray().findIndex(toggle => {
        return toggle.buttonId === buttonId;
      });
      let nextButton = null;
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.SPACE:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.ENTER:
          nextButton = this._buttonToggles.get(index) || null;
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.UP_ARROW:
          nextButton = this._getNextButton(index, -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.LEFT_ARROW:
          nextButton = this._getNextButton(index, this.dir === 'ltr' ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.DOWN_ARROW:
          nextButton = this._getNextButton(index, 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.RIGHT_ARROW:
          nextButton = this._getNextButton(index, this.dir === 'ltr' ? 1 : -1);
          break;
        default:
          return;
      }
      if (nextButton) {
        event.preventDefault();
        nextButton._onButtonClick();
        nextButton.focus();
      }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent(toggle) {
      const event = new MatButtonToggleChange(toggle, this.value);
      this._rawValue = event.value;
      this._controlValueAccessorChangeFn(event.value);
      this.change.emit(event);
    }
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */
    _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
      // Deselect the currently-selected toggle, if we're in single-selection
      // mode and the button being toggled isn't selected at the moment.
      if (!this.multiple && this.selected && !toggle.checked) {
        this.selected.checked = false;
      }
      if (this._selectionModel) {
        if (select) {
          this._selectionModel.select(toggle);
        } else {
          this._selectionModel.deselect(toggle);
        }
      } else {
        deferEvents = true;
      }
      // We need to defer in some cases in order to avoid "changed after checked errors", however
      // the side-effect is that we may end up updating the model value out of sequence in others
      // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
      if (deferEvents) {
        Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
      } else {
        this._updateModelValue(toggle, isUserInput);
      }
    }
    /** Checks whether a button toggle is selected. */
    _isSelected(toggle) {
      return this._selectionModel && this._selectionModel.isSelected(toggle);
    }
    /** Determines whether a button toggle should be checked on init. */
    _isPrechecked(toggle) {
      if (typeof this._rawValue === 'undefined') {
        return false;
      }
      if (this.multiple && Array.isArray(this._rawValue)) {
        return this._rawValue.some(value => toggle.value != null && value === toggle.value);
      }
      return toggle.value === this._rawValue;
    }
    /** Initializes the tabindex attribute using the radio pattern. */
    _initializeTabIndex() {
      this._buttonToggles.forEach(toggle => {
        toggle.tabIndex = -1;
      });
      if (this.selected) {
        this.selected.tabIndex = 0;
      } else {
        for (let i = 0; i < this._buttonToggles.length; i++) {
          const toggle = this._buttonToggles.get(i);
          if (!toggle.disabled) {
            toggle.tabIndex = 0;
            break;
          }
        }
      }
      this._markButtonsForCheck();
    }
    /** Obtain the subsequent toggle to which the focus shifts. */
    _getNextButton(startIndex, offset) {
      const items = this._buttonToggles;
      for (let i = 1; i <= items.length; i++) {
        const index = (startIndex + offset * i + items.length) % items.length;
        const item = items.get(index);
        if (item && !item.disabled) {
          return item;
        }
      }
      return null;
    }
    /** Updates the selection state of the toggles in the group based on a value. */
    _setSelectionByValue(value) {
      this._rawValue = value;
      if (!this._buttonToggles) {
        return;
      }
      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('Value must be an array in multiple-selection mode.');
        }
        this._clearSelection();
        value.forEach(currentValue => this._selectValue(currentValue));
      } else {
        this._clearSelection();
        this._selectValue(value);
      }
    }
    /** Clears the selected toggles. */
    _clearSelection() {
      this._selectionModel.clear();
      this._buttonToggles.forEach(toggle => {
        toggle.checked = false;
        // If the button toggle is in single select mode, initialize the tabIndex.
        if (!this.multiple) {
          toggle.tabIndex = -1;
        }
      });
    }
    /** Selects a value if there's a toggle that corresponds to it. */
    _selectValue(value) {
      const correspondingOption = this._buttonToggles.find(toggle => {
        return toggle.value != null && toggle.value === value;
      });
      if (correspondingOption) {
        correspondingOption.checked = true;
        this._selectionModel.select(correspondingOption);
        if (!this.multiple) {
          // If the button toggle is in single select mode, reset the tabIndex.
          correspondingOption.tabIndex = 0;
        }
      }
    }
    /** Syncs up the group's value with the model and emits the change event. */
    _updateModelValue(toggle, isUserInput) {
      // Only emit the change event for user input.
      if (isUserInput) {
        this._emitChangeEvent(toggle);
      }
      // Note: we emit this one no matter whether it was a user interaction, because
      // it is used by Angular to sync up the two-way data binding.
      this.valueChange.emit(this.value);
    }
    /** Marks all of the child button toggles to be checked. */
    _markButtonsForCheck() {
      this._buttonToggles?.forEach(toggle => toggle._markForCheck());
    }
    static {
      this.ɵfac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatButtonToggleGroup,
        selectors: [["mat-button-toggle-group"]],
        contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
          }
        },
        hostAttrs: [1, "mat-button-toggle-group"],
        hostVars: 6,
        hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          appearance: "appearance",
          name: "name",
          vertical: [2, "vertical", "vertical", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          value: "value",
          multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          valueChange: "valueChange",
          change: "change"
        },
        exportAs: ["matButtonToggleGroup"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
          provide: MAT_BUTTON_TOGGLE_GROUP,
          useExisting: MatButtonToggleGroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return MatButtonToggleGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Single button inside of a toggle group. */
let MatButtonToggle = /*#__PURE__*/(() => {
  class MatButtonToggle {
    /** Unique ID for the underlying `button` element. */
    get buttonId() {
      return `${this.id}-button`;
    }
    /** Tabindex of the toggle. */
    get tabIndex() {
      return this._tabIndex;
    }
    set tabIndex(value) {
      this._tabIndex = value;
      this._markForCheck();
    }
    /** The appearance style of the button. */
    get appearance() {
      return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
    }
    set appearance(value) {
      this._appearance = value;
    }
    /** Whether the button is checked. */
    get checked() {
      return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
    }
    set checked(value) {
      if (value !== this._checked) {
        this._checked = value;
        if (this.buttonToggleGroup) {
          this.buttonToggleGroup._syncButtonToggle(this, this._checked);
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    /** Whether the button is disabled. */
    get disabled() {
      return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    /** Whether the button should remain interactive when it is disabled. */
    get disabledInteractive() {
      return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
    }
    constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._focusMonitor = _focusMonitor;
      this._checked = false;
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      this.ariaLabelledby = null;
      this._disabled = false;
      /** Event emitted when the group value changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      const parsedTabIndex = Number(defaultTabIndex);
      this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      this.buttonToggleGroup = toggleGroup;
      this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
      this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
    }
    ngOnInit() {
      const group = this.buttonToggleGroup;
      this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;
      if (group) {
        if (group._isPrechecked(this)) {
          this.checked = true;
        } else if (group._isSelected(this) !== this._checked) {
          // As side effect of the circular dependency between the toggle group and the button,
          // we may end up in a state where the button is supposed to be checked on init, but it
          // isn't, because the checked value was assigned too early. This can happen when Ivy
          // assigns the static input value before the `ngOnInit` has run.
          group._syncButtonToggle(this, this._checked);
        }
      }
    }
    ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
      const group = this.buttonToggleGroup;
      this._focusMonitor.stopMonitoring(this._elementRef);
      // Remove the toggle from the selection once it's destroyed. Needs to happen
      // on the next tick in order to avoid "changed after checked" errors.
      if (group && group._isSelected(this)) {
        group._syncButtonToggle(this, false, false, true);
      }
    }
    /** Focuses the button. */
    focus(options) {
      this._buttonElement.nativeElement.focus(options);
    }
    /** Checks the button toggle due to an interaction with the underlying native button. */
    _onButtonClick() {
      if (this.disabled) {
        return;
      }
      const newChecked = this.isSingleSelector() ? true : !this._checked;
      if (newChecked !== this._checked) {
        this._checked = newChecked;
        if (this.buttonToggleGroup) {
          this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
          this.buttonToggleGroup._onTouched();
        }
      }
      if (this.isSingleSelector()) {
        const focusable = this.buttonToggleGroup._buttonToggles.find(toggle => {
          return toggle.tabIndex === 0;
        });
        // Modify the tabindex attribute of the last focusable button toggle to -1.
        if (focusable) {
          focusable.tabIndex = -1;
        }
        // Modify the tabindex attribute of the presently selected button toggle to 0.
        this.tabIndex = 0;
      }
      // Emit a change event when it's the single selector
      this.change.emit(new MatButtonToggleChange(this, this.value));
    }
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
      // When the group value changes, the button will not be notified.
      // Use `markForCheck` to explicit update button toggle's status.
      this._changeDetectorRef.markForCheck();
    }
    /** Gets the name that should be assigned to the inner DOM node. */
    _getButtonName() {
      if (this.isSingleSelector()) {
        return this.buttonToggleGroup.name;
      }
      return this.name || null;
    }
    /** Whether the toggle is in single selection mode. */
    isSingleSelector() {
      return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
    }
    static {
      this.ɵfac = function MatButtonToggle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatButtonToggle,
        selectors: [["mat-button-toggle"]],
        viewQuery: function MatButtonToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
          }
        },
        hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
        hostVars: 14,
        hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
              return ctx.focus();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          id: "id",
          name: "name",
          value: "value",
          tabIndex: "tabIndex",
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          appearance: "appearance",
          checked: [2, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          change: "change"
        },
        exportAs: ["matButtonToggle"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 8,
        vars: 14,
        consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-label-content"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
        template: function MatButtonToggle_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onButtonClick());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatButtonToggle_Conditional_3_Template, 1, 1, "mat-pseudo-checkbox", 3)(4, MatButtonToggle_Conditional_4_Template, 1, 1, "mat-pseudo-checkbox", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4)(7, "span", 5);
          }
          if (rf & 2) {
            const button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.buttonToggleGroup && ctx.checked && !ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator ? 3 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.buttonToggleGroup && ctx.checked && ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator ? 4 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatPseudoCheckbox],
        styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-app-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-app-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-app-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-app-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-app-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatButtonToggle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatButtonToggleModule = /*#__PURE__*/(() => {
  class MatButtonToggleModule {
    static {
      this.ɵfac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatButtonToggleModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatButtonToggleModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, MatButtonToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]
      });
    }
  }
  return MatButtonToggleModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=864.js.map