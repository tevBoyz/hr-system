function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-form/candidate-form.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-form/candidate-form.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_candidateForm_candidateFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card\n  ><form\n    #candidateForm=\"ngForm\"\n    (ngSubmit)=\"onSubmit(candidateForm)\"\n    novalidate\n  >\n    <!-- Inputs with [(ngModel)] + required -->\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"First Name\"\n        [(ngModel)]=\"candidate.firstName\"\n        name=\"firstName\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Last Name\"\n        [(ngModel)]=\"candidate.lastName\"\n        name=\"lastName\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Department</mat-label>\n      <mat-select\n        [(ngModel)]=\"candidate.departmentId\"\n        name=\"departmentId\"\n        required\n      >\n        <mat-option *ngFor=\"let dept of departments\" [value]=\"dept.id\">\n          {{ dept.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Email\"\n        [(ngModel)]=\"candidate.email\"\n        name=\"email\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Phone\"\n        [(ngModel)]=\"candidate.phone\"\n        name=\"phone\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Resume URL\"\n        [(ngModel)]=\"candidate.resumeUrl\"\n        name=\"resumeUrl\"\n      />\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"cancel-btn\"\n      [routerLink]=\"['/candidates']\"\n    >\n      Cancel\n    </button>\n  </form>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-list/candidate-list.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-list/candidate-list.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_candidateList_candidateListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"top-bar\">\n    <mat-card-title>Candidate DB</mat-card-title>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [routerLink]=\"['/candidates/add']\"\n    >\n      Add Candidate\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"candidates\" class=\"mat-elevation-z8 candTable\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell *matHeaderCellDef>First Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.firstName }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell *matHeaderCellDef>Last Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.lastName }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef>Email</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.email }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"departmentId\">\n      <th mat-header-cell *matHeaderCellDef>Application Department</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ getDepartmentName(element.departmentId) }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-button\n          color=\"accent\"\n          [routerLink]=\"['/candidates/edit', element.id]\"\n        >\n          Edit\n        </button>\n        <button mat-button color=\"warn\" (click)=\"deleteCandidate(element.id)\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n    <tr\n      mat-header-row\n      *matHeaderRowDef=\"[\n        'id',\n        'firstName',\n        'lastName',\n        'email',\n        'departmentId',\n        'actions'\n      ]\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"\n        let row;\n        columns: [\n          'id',\n          'firstName',\n          'lastName',\n          'email',\n          'departmentId',\n          'actions'\n        ]\n      \"\n    ></tr>\n  </table>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-form/company-form.component.html": (
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-form/company-form.component.html ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_companyForm_companyFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card\n  ><form #companyForm=\"ngForm\" (ngSubmit)=\"onSubmit(companyForm)\" novalidate>\n    <!-- Inputs with [(ngModel)] + required -->\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Name\"\n        [(ngModel)]=\"company.name\"\n        name=\"name\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Location\"\n        [(ngModel)]=\"company.location\"\n        name=\"location\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Established Year\"\n        [(ngModel)]=\"company.establishedYear\"\n        name=\"establishedYear\"\n      />\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"cancel-btn\"\n      [routerLink]=\"['/comapanies']\"\n    >\n      Cancel\n    </button>\n  </form>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-list/company-list.component.html": (
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-list/company-list.component.html ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_companyList_companyListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"top-bar\">\n    <mat-card-title>Company DB</mat-card-title>\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/companies/add']\">\n      Add Company\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"companies\" class=\"mat-elevation-z8 candTable\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"location\">\n      <th mat-header-cell *matHeaderCellDef>Location</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.location }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"establishedYear\">\n      <th mat-header-cell *matHeaderCellDef>Established Year</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.establishedYear }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-button\n          color=\"accent\"\n          [routerLink]=\"['/companies/edit', element.id]\"\n        >\n          Edit\n        </button>\n        <button mat-button color=\"warn\" (click)=\"deleteCompany(element.id)\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n    <tr\n      mat-header-row\n      *matHeaderRowDef=\"[\n        'id',\n        'name',\n        'location',\n        'establishedYear',\n        'actions'\n      ]\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"\n        let row;\n        columns: ['id', 'name', 'location', 'establishedYear', 'actions']\n      \"\n    ></tr>\n  </table>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-form/department-form.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-form/department-form.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_departmentForm_departmentFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card\n  ><form\n    #departmentForm=\"ngForm\"\n    (ngSubmit)=\"onSubmit(departmentForm)\"\n    novalidate\n  >\n    <!-- Inputs with [(ngModel)] + required -->\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Name\"\n        [(ngModel)]=\"department.name\"\n        name=\"name\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Company</mat-label>\n      <mat-select [(ngModel)]=\"department.companyId\" name=\"companyId\">\n        <mat-option *ngFor=\"let company of companies\" [value]=\"company.id\">\n          {{ company.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"cancel-btn\"\n      [routerLink]=\"['/departments']\"\n    >\n      Cancel\n    </button>\n  </form>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-list/department-list.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-list/department-list.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_departmentList_departmentListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"top-bar\">\n    <mat-card-title>Department DB</mat-card-title>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [routerLink]=\"['/departments/add']\"\n    >\n      Add Department\n    </button>\n  </div>\n  <table\n    mat-table\n    [dataSource]=\"departments\"\n    class=\"mat-elevation-z8 candTable\"\n  >\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company ID</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ getCompanyName(element.companyId) }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-button\n          color=\"accent\"\n          [routerLink]=\"['/departments/edit', element.id]\"\n        >\n          Edit\n        </button>\n        <button mat-button color=\"warn\" (click)=\"deleteDepartment(element.id)\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n    <tr\n      mat-header-row\n      *matHeaderRowDef=\"['id', 'name', 'companyId', 'actions']\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: ['id', 'name', 'companyId', 'actions']\"\n    ></tr>\n  </table>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-form/employee-form.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-form/employee-form.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_employeeForm_employeeFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card\n  ><form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\" novalidate>\n    <!-- Inputs with [(ngModel)] + required -->\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"First Name\"\n        [(ngModel)]=\"employee.firstName\"\n        name=\"firstName\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Last Name\"\n        [(ngModel)]=\"employee.lastName\"\n        name=\"lastName\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Email\"\n        [(ngModel)]=\"employee.email\"\n        name=\"email\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Phone\"\n        [(ngModel)]=\"employee.phone\"\n        name=\"phone\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Company</mat-label>\n      <mat-select [(ngModel)]=\"employee.companyId\" name=\"companyId\">\n        <mat-option *ngFor=\"let company of companies\" [value]=\"company.id\">\n          {{ company.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Department</mat-label>\n      <mat-select [(ngModel)]=\"employee.departmentId\" name=\"departmentId\">\n        <mat-option *ngFor=\"let dept of departments\" [value]=\"dept.id\">\n          {{ dept.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Salary</mat-label>\n      <mat-select [(ngModel)]=\"employee.salaryId\" name=\"salaryId\">\n        <mat-option *ngFor=\"let salary of salaries\" [value]=\"salary.id\">\n          {{ salary.amount }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Resume URL\"\n        [(ngModel)]=\"employee.resumeUrl\"\n        name=\"resumeUrl\"\n      />\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"cancel-btn\"\n      [routerLink]=\"['/employees']\"\n    >\n      Cancel\n    </button>\n  </form>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_employeeList_employeeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"top-bar\">\n    <mat-card-title>Employee DB</mat-card-title>\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/employees/add']\">\n      Add Employee\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"employees\" class=\"mat-elevation-z8 candTable\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell *matHeaderCellDef>First Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.firstName }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell *matHeaderCellDef>Last Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.lastName }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef>Email</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.email }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ getCompanyName(element.companyId) }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"departmentId\">\n      <th mat-header-cell *matHeaderCellDef>Department</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ getDepartmentName(element.departmentId) }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"salaryId\">\n      <th mat-header-cell *matHeaderCellDef>Salary</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ getSalaryAmount(element.salaryID) }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-button\n          color=\"accent\"\n          [routerLink]=\"['/employees/edit', element.id]\"\n        >\n          Edit\n        </button>\n        <button mat-button color=\"warn\" (click)=\"deleteEmployee(element.id)\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n    <tr\n      mat-header-row\n      *matHeaderRowDef=\"[\n        'id',\n        'firstName',\n        'lastName',\n        'email',\n        'companyId',\n        'departmentId',\n        'salaryId',\n        'actions'\n      ]\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"\n        let row;\n        columns: [\n          'id',\n          'firstName',\n          'lastName',\n          'email',\n          'companyId',\n          'departmentId',\n          'salaryId',\n          'actions'\n        ]\n      \"\n    ></tr>\n  </table>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_home_homeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"home-toolbar\">\n  <span class=\"toolbar-title\">HR Management System</span>\n</mat-toolbar>\n\n<mat-card class=\"home-nav-card\">\n  <mat-button-toggle-group\n    [value]=\"getActiveSection()\"\n    appearance=\"standard\"\n    class=\"toggle-group\"\n  >\n    <mat-button-toggle value=\"candidates\" [routerLink]=\"['/candidates']\">\n      <mat-icon>person</mat-icon>\n      &nbsp;Candidates\n    </mat-button-toggle>\n\n    <mat-button-toggle value=\"employees\" [routerLink]=\"['/employees']\">\n      <mat-icon>badge</mat-icon>\n      &nbsp;Employees\n    </mat-button-toggle>\n\n    <mat-button-toggle value=\"companies\" [routerLink]=\"['/companies']\">\n      <mat-icon>business</mat-icon>\n      &nbsp;Companies\n    </mat-button-toggle>\n\n    <mat-button-toggle value=\"departments\" [routerLink]=\"['/departments']\">\n      <mat-icon>domain</mat-icon>\n      &nbsp;Departments\n    </mat-button-toggle>\n\n    <mat-button-toggle value=\"salaries\" [routerLink]=\"['/salaries']\">\n      <mat-icon>attach_money</mat-icon>\n      &nbsp;Salaries\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</mat-card>\n\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-form/salary-form.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-form/salary-form.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_salaryForm_salaryFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card\n  ><form #salaryForm=\"ngForm\" (ngSubmit)=\"onSubmit(salaryForm)\" novalidate>\n    <!-- Inputs with [(ngModel)] + required -->\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Grade\"\n        [(ngModel)]=\"salary.grade\"\n        name=\"grade\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Amount\"\n        [(ngModel)]=\"salary.amount\"\n        name=\"amount\"\n        required\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Currency\"\n        [(ngModel)]=\"salary.currency\"\n        name=\"currency\"\n        required\n      />\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button\n      mat-raised-button\n      color=\"warn\"\n      class=\"cancel-btn\"\n      [routerLink]=\"['/salaries']\"\n    >\n      Cancel\n    </button>\n  </form>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-list/salary-list.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-list/salary-list.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_salaryList_salaryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"top-bar\">\n    <mat-card-title>Salary DB</mat-card-title>\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/salaries/add']\">\n      Add Salary\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"salaries\" class=\"mat-elevation-z8 candTable\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"grade\">\n      <th mat-header-cell *matHeaderCellDef>Grade</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.grade }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.amount }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"currency\">\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.currency }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-button\n          color=\"accent\"\n          [routerLink]=\"['/salaries/edit', element.id]\"\n        >\n          Edit\n        </button>\n        <button mat-button color=\"warn\" (click)=\"deleteSalary(element.id)\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n    <tr\n      mat-header-row\n      *matHeaderRowDef=\"['id', 'grade', 'amount', 'currency', 'actions']\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"\n        let row;\n        columns: ['id', 'grade', 'amount', 'currency', 'actions']\n      \"\n    ></tr>\n  </table>\n</mat-card>\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/candidate-list/candidate-list.component */"./src/app/components/candidate-list/candidate-list.component.ts");
    /* harmony import */
    var _components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/candidate-form/candidate-form.component */"./src/app/components/candidate-form/candidate-form.component.ts");
    /* harmony import */
    var _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-form/employee-form.component */"./src/app/components/employee-form/employee-form.component.ts");
    /* harmony import */
    var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */"./src/app/components/employee-list/employee-list.component.ts");
    /* harmony import */
    var _components_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/company-form/company-form.component */"./src/app/components/company-form/company-form.component.ts");
    /* harmony import */
    var _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/company-list/company-list.component */"./src/app/components/company-list/company-list.component.ts");
    /* harmony import */
    var _components_department_form_department_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/department-form/department-form.component */"./src/app/components/department-form/department-form.component.ts");
    /* harmony import */
    var _components_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/department-list/department-list.component */"./src/app/components/department-list/department-list.component.ts");
    /* harmony import */
    var _components_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/salary-form/salary-form.component */"./src/app/components/salary-form/salary-form.component.ts");
    /* harmony import */
    var _components_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/salary-list/salary-list.component */"./src/app/components/salary-list/salary-list.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
      children: [
      // Candidate routes
      {
        path: 'candidates',
        component: _components_candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_3__["CandidateListComponent"]
      }, {
        path: 'candidates/add',
        component: _components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_4__["CandidateFormComponent"]
      }, {
        path: 'candidates/edit/:id',
        component: _components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_4__["CandidateFormComponent"]
      },
      // Employee routes
      {
        path: 'employees',
        component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"]
      }, {
        path: 'employees/add',
        component: _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeFormComponent"]
      }, {
        path: 'employees/edit/:id',
        component: _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeFormComponent"]
      },
      // Company routes
      {
        path: 'companies',
        component: _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_8__["CompanyListComponent"]
      }, {
        path: 'companies/add',
        component: _components_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_7__["CompanyFormComponent"]
      }, {
        path: 'companies/edit/:id',
        component: _components_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_7__["CompanyFormComponent"]
      },
      // Department routes
      {
        path: 'departments',
        component: _components_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_10__["DepartmentListComponent"]
      }, {
        path: 'departments/add',
        component: _components_department_form_department_form_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentFormComponent"]
      }, {
        path: 'departments/edit/:id',
        component: _components_department_form_department_form_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentFormComponent"]
      },
      // Salary routes
      {
        path: 'salaries',
        component: _components_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_12__["SalaryListComponent"]
      }, {
        path: 'salaries/add',
        component: _components_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_11__["SalaryFormComponent"]
      }, {
        path: 'salaries/edit/:id',
        component: _components_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_11__["SalaryFormComponent"]
      },
      // Default route
      {
        path: '',
        redirectTo: 'candidates',
        pathMatch: 'full'
      }]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'hr-system';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */"./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var src_shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/material.module */"./src/shared/material.module.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-memory-data.service */"./src/app/in-memory-data.service.ts");
    /* harmony import */
    var _components_candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/candidate-list/candidate-list.component */"./src/app/components/candidate-list/candidate-list.component.ts");
    /* harmony import */
    var _components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/candidate-form/candidate-form.component */"./src/app/components/candidate-form/candidate-form.component.ts");
    /* harmony import */
    var _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employee-form/employee-form.component */"./src/app/components/employee-form/employee-form.component.ts");
    /* harmony import */
    var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */"./src/app/components/employee-list/employee-list.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/company-list/company-list.component */"./src/app/components/company-list/company-list.component.ts");
    /* harmony import */
    var _components_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company-form/company-form.component */"./src/app/components/company-form/company-form.component.ts");
    /* harmony import */
    var _components_department_form_department_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/department-form/department-form.component */"./src/app/components/department-form/department-form.component.ts");
    /* harmony import */
    var _components_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/department-list/department-list.component */"./src/app/components/department-list/department-list.component.ts");
    /* harmony import */
    var _components_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/salary-list/salary-list.component */"./src/app/components/salary-list/salary-list.component.ts");
    /* harmony import */
    var _components_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/salary-form/salary-form.component */"./src/app/components/salary-form/salary-form.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_12__["CandidateListComponent"], _components_candidate_form_candidate_form_component__WEBPACK_IMPORTED_MODULE_13__["CandidateFormComponent"], _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeFormComponent"], _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeListComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_17__["CompanyListComponent"], _components_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_18__["CompanyFormComponent"], _components_department_form_department_form_component__WEBPACK_IMPORTED_MODULE_19__["DepartmentFormComponent"], _components_department_list_department_list_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentListComponent"], _components_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_21__["SalaryListComponent"], _components_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_22__["SalaryFormComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], src_shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], {
        delay: 500
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/candidate-form/candidate-form.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/candidate-form/candidate-form.component.ts ***!
    \***********************************************************************/
  /*! exports provided: CandidateFormComponent */
  /***/
  function _src_app_components_candidateForm_candidateFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CandidateFormComponent", function () {
      return CandidateFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_candidate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/candidate-service.service */"./src/app/services/candidate-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/department-service.service */"./src/app/services/department-service.service.ts");
    var CandidateFormComponent = /*#__PURE__*/function () {
      function CandidateFormComponent(service, route, router, snackBar, departmentService) {
        _classCallCheck(this, CandidateFormComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.departmentService = departmentService;
        this.candidate = {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          departmentId: 0,
          phone: '',
          resumeUrl: ''
        };
        this.departments = [];
        this.isEdit = false;
      }
      return _createClass(CandidateFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.loadDepartments();
          var id = this.route.snapshot.params['id'];
          if (id) {
            this.isEdit = true;
            this.service.getCandidate(+id).subscribe(function (data) {
              return _this.candidate = data;
            });
          }
        }
      }, {
        key: "loadDepartments",
        value: function loadDepartments() {
          var _this2 = this;
          this.departmentService.getDepartments().subscribe(function (data) {
            return _this2.departments = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;
          if (this.candidate.firstName === '' || this.candidate.lastName === '' || this.candidate.email === '' || this.candidate.phone === '') {
            this.snackBar.open('Missing field! No entry made.', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/candidates']);
          } else {
            var request = this.isEdit ? this.service.updateCandidate(this.candidate) : this.service.addCandidate(Object.assign({}, this.candidate, {
              id: undefined
            })); // ✅ Force ID to be generated
            request.subscribe(function () {
              return _this3.router.navigate(['/candidates']);
            });
          }
        }
      }]);
    }();
    CandidateFormComponent.ctorParameters = function () {
      return [{
        type: _services_candidate_service_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"]
      }];
    };
    CandidateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-candidate-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidate-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-form/candidate-form.component.html"))["default"]
    })], CandidateFormComponent);

    /***/
  }),
  /***/"./src/app/components/candidate-list/candidate-list.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/candidate-list/candidate-list.component.ts ***!
    \***********************************************************************/
  /*! exports provided: CandidateListComponent */
  /***/
  function _src_app_components_candidateList_candidateListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CandidateListComponent", function () {
      return CandidateListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_candidate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/candidate-service.service */"./src/app/services/candidate-service.service.ts");
    /* harmony import */
    var src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/department-service.service */"./src/app/services/department-service.service.ts");
    var CandidateListComponent = /*#__PURE__*/function () {
      function CandidateListComponent(candidateService, departmentService) {
        _classCallCheck(this, CandidateListComponent);
        this.candidateService = candidateService;
        this.departmentService = departmentService;
        this.candidates = [];
        this.departments = [];
        this.departmentsLoaded = false;
      }
      return _createClass(CandidateListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.loadCandidates();
          this.departmentService.getDepartments().subscribe(function (data) {
            return _this4.departments = data;
          });
          this.departmentsLoaded = true;
        }
      }, {
        key: "getDepartmentName",
        value: function getDepartmentName(id) {
          if (!this.departments || this.departments.length === 0) {
            return 'Loading...'; // or ''
          }
          var dept = this.departments.find(function (d) {
            return d.id === +id;
          });
          return dept ? dept.name : 'Unknown';
        }
      }, {
        key: "loadCandidates",
        value: function loadCandidates() {
          var _this5 = this;
          this.candidateService.getCandidates().subscribe(function (data) {
            return _this5.candidates = data;
          });
        }
      }, {
        key: "deleteCandidate",
        value: function deleteCandidate(id) {
          var _this6 = this;
          var confirm = window.confirm("Are you sure?");
          if (confirm) {
            this.candidateService.deleteCandidate(id).subscribe(function () {
              return _this6.loadCandidates();
            });
          }
        }
      }]);
    }();
    CandidateListComponent.ctorParameters = function () {
      return [{
        type: _services_candidate_service_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"]
      }, {
        type: src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]
      }];
    };
    CandidateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-candidate-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidate-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/candidate-list/candidate-list.component.html"))["default"]
    })], CandidateListComponent);

    /***/
  }),
  /***/"./src/app/components/company-form/company-form.component.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/components/company-form/company-form.component.ts ***!
    \*******************************************************************/
  /*! exports provided: CompanyFormComponent */
  /***/
  function _src_app_components_companyForm_companyFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CompanyFormComponent", function () {
      return CompanyFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company-service.service */"./src/app/services/company-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    var CompanyFormComponent = /*#__PURE__*/function () {
      function CompanyFormComponent(service, route, router, snackBar) {
        _classCallCheck(this, CompanyFormComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.company = {
          id: 0,
          name: '',
          location: '',
          establishedYear: 0
        };
        this.isEdit = false;
      }
      return _createClass(CompanyFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          var id = this.route.snapshot.params['id'];
          if (id) {
            this.isEdit = true;
            this.service.getCompany(+id).subscribe(function (data) {
              return _this7.company = data;
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;
          if (this.company.name === '' || this.company.location === '') {
            this.snackBar.open('Missing field! No entry made.', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/companies']);
          } else {
            var request = this.isEdit ? this.service.updateCompany(this.company) : this.service.addCompany(Object.assign({}, this.company, {
              id: undefined
            })); // Force ID to be generated
            request.subscribe(function () {
              return _this8.router.navigate(['/companies']);
            });
          }
        }
      }]);
    }();
    CompanyFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };
    CompanyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-form/company-form.component.html"))["default"]
    })], CompanyFormComponent);

    /***/
  }),
  /***/"./src/app/components/company-list/company-list.component.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/components/company-list/company-list.component.ts ***!
    \*******************************************************************/
  /*! exports provided: CompanyListComponent */
  /***/
  function _src_app_components_companyList_companyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function () {
      return CompanyListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_company_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company-service.service */"./src/app/services/company-service.service.ts");
    var CompanyListComponent = /*#__PURE__*/function () {
      function CompanyListComponent(companyService) {
        _classCallCheck(this, CompanyListComponent);
        this.companyService = companyService;
        this.companies = [];
      }
      return _createClass(CompanyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCompanies();
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          var _this9 = this;
          this.companyService.getCompanies().subscribe(function (data) {
            return _this9.companies = data;
          });
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          var _this0 = this;
          var confirm = window.confirm("Are you sure?");
          if (confirm) {
            this.companyService.deleteCompany(id).subscribe(function () {
              return _this0.loadCompanies();
            });
          }
        }
      }]);
    }();
    CompanyListComponent.ctorParameters = function () {
      return [{
        type: _services_company_service_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }];
    };
    CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/company-list/company-list.component.html"))["default"]
    })], CompanyListComponent);

    /***/
  }),
  /***/"./src/app/components/department-form/department-form.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/department-form/department-form.component.ts ***!
    \*************************************************************************/
  /*! exports provided: DepartmentFormComponent */
  /***/
  function _src_app_components_departmentForm_departmentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DepartmentFormComponent", function () {
      return DepartmentFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/department-service.service */"./src/app/services/department-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/company-service.service */"./src/app/services/company-service.service.ts");
    var DepartmentFormComponent = /*#__PURE__*/function () {
      function DepartmentFormComponent(service, route, router, snackBar, companyService) {
        _classCallCheck(this, DepartmentFormComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.department = {
          id: 0,
          name: '',
          companyId: 0
        };
        this.companies = [];
        this.isEdit = false;
      }
      return _createClass(DepartmentFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this1 = this;
          var id = this.route.snapshot.params['id'];
          if (id) {
            this.isEdit = true;
            this.service.getDepartment(+id).subscribe(function (data) {
              return _this1.department = data;
            });
          }
          this.loadCompanies();
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          var _this10 = this;
          this.companyService.getCompanies().subscribe(function (data) {
            _this10.companies = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;
          if (this.department.name === '') {
            this.snackBar.open('Missing field! No entry made.', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/departments']);
          } else {
            var request = this.isEdit ? this.service.updateDepartment(this.department) : this.service.addDepartment(Object.assign({}, this.department, {
              id: undefined
            })); // Force ID to be generated
            request.subscribe(function () {
              return _this11.router.navigate(['/departments']);
            });
          }
        }
      }]);
    }();
    DepartmentFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
      }];
    };
    DepartmentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-department-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-form/department-form.component.html"))["default"]
    })], DepartmentFormComponent);

    /***/
  }),
  /***/"./src/app/components/department-list/department-list.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/department-list/department-list.component.ts ***!
    \*************************************************************************/
  /*! exports provided: DepartmentListComponent */
  /***/
  function _src_app_components_departmentList_departmentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DepartmentListComponent", function () {
      return DepartmentListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_department_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/department-service.service */"./src/app/services/department-service.service.ts");
    /* harmony import */
    var src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company-service.service */"./src/app/services/company-service.service.ts");
    var DepartmentListComponent = /*#__PURE__*/function () {
      function DepartmentListComponent(departmentService, companyService) {
        _classCallCheck(this, DepartmentListComponent);
        this.departmentService = departmentService;
        this.companyService = companyService;
        this.departments = [];
        this.companies = [];
      }
      return _createClass(DepartmentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDepartments();
          this.loadCompanies();
        }
      }, {
        key: "loadDepartments",
        value: function loadDepartments() {
          var _this12 = this;
          this.departmentService.getDepartments().subscribe(function (data) {
            return _this12.departments = data;
          });
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          var _this13 = this;
          this.companyService.getCompanies().subscribe(function (data) {
            return _this13.companies = data;
          });
        }
      }, {
        key: "getCompanyName",
        value: function getCompanyName(companyId) {
          var company = this.companies.find(function (c) {
            return c.id === +companyId;
          });
          return company ? company.name : 'Unknown Company';
        }
      }, {
        key: "deleteDepartment",
        value: function deleteDepartment(id) {
          var _this14 = this;
          var confirm = window.confirm("Are you sure?");
          if (confirm) {
            this.departmentService.deleteDepartment(id).subscribe(function () {
              return _this14.loadDepartments();
            });
          }
        }
      }]);
    }();
    DepartmentListComponent.ctorParameters = function () {
      return [{
        type: _services_department_service_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]
      }, {
        type: src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }];
    };
    DepartmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-department-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/department-list/department-list.component.html"))["default"]
    })], DepartmentListComponent);

    /***/
  }),
  /***/"./src/app/components/employee-form/employee-form.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/employee-form/employee-form.component.ts ***!
    \*********************************************************************/
  /*! exports provided: EmployeeFormComponent */
  /***/
  function _src_app_components_employeeForm_employeeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function () {
      return EmployeeFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_employee_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee-service.service */"./src/app/services/employee-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/company-service.service */"./src/app/services/company-service.service.ts");
    /* harmony import */
    var src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/department-service.service */"./src/app/services/department-service.service.ts");
    /* harmony import */
    var src_app_services_salary_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/salary-service.service */"./src/app/services/salary-service.service.ts");
    var EmployeeFormComponent = /*#__PURE__*/function () {
      function EmployeeFormComponent(service, route, router, snackBar, companyService, departmentService, salaryService) {
        _classCallCheck(this, EmployeeFormComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.companyService = companyService;
        this.departmentService = departmentService;
        this.salaryService = salaryService;
        //IDs being 0 means its a default value for a new employee, not associated with any department or company
        this.employee = {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          resumeUrl: '',
          companyId: 0,
          departmentId: 0,
          salaryId: 0
        };
        this.companies = [];
        this.departments = [];
        this.salaries = [];
        this.isEdit = false;
      }
      return _createClass(EmployeeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;
          var id = this.route.snapshot.params['id'];
          if (id) {
            this.isEdit = true;
            this.service.getEmployee(+id).subscribe(function (data) {
              return _this15.employee = data;
            });
          }
          this.loadCompanies();
          this.loadDepartments();
          this.loadSalaries();
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          var _this16 = this;
          this.companyService.getCompanies().subscribe(function (data) {
            _this16.companies = data;
          });
        }
      }, {
        key: "loadDepartments",
        value: function loadDepartments() {
          var _this17 = this;
          this.departmentService.getDepartments().subscribe(function (data) {
            _this17.departments = data;
          });
        }
      }, {
        key: "loadSalaries",
        value: function loadSalaries() {
          var _this18 = this;
          this.salaryService.getSalaries().subscribe(function (data) {
            _this18.salaries = data;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this19 = this;
          if (this.employee.firstName === '' || this.employee.lastName === '' || this.employee.email === '' || this.employee.phone === '') {
            this.snackBar.open('Missing field! No entry made.', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/employees']);
          } else {
            var request = this.isEdit ? this.service.updateEmployee(this.employee) : this.service.addEmployee(Object.assign({}, this.employee, {
              id: undefined
            })); // ✅ Force ID to be generated
            request.subscribe(function () {
              return _this19.router.navigate(['/employees']);
            });
          }
        }
      }]);
    }();
    EmployeeFormComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]
      }, {
        type: src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"]
      }, {
        type: src_app_services_salary_service_service__WEBPACK_IMPORTED_MODULE_7__["SalaryService"]
      }];
    };
    EmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-form/employee-form.component.html"))["default"]
    })], EmployeeFormComponent);

    /***/
  }),
  /***/"./src/app/components/employee-list/employee-list.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/employee-list/employee-list.component.ts ***!
    \*********************************************************************/
  /*! exports provided: EmployeeListComponent */
  /***/
  function _src_app_components_employeeList_employeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_employee_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee-service.service */"./src/app/services/employee-service.service.ts");
    /* harmony import */
    var src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company-service.service */"./src/app/services/company-service.service.ts");
    /* harmony import */
    var src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/department-service.service */"./src/app/services/department-service.service.ts");
    /* harmony import */
    var src_app_services_salary_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/salary-service.service */"./src/app/services/salary-service.service.ts");
    var EmployeeListComponent = /*#__PURE__*/function () {
      function EmployeeListComponent(employeeService, companyService, departmentService, salaryService) {
        _classCallCheck(this, EmployeeListComponent);
        this.employeeService = employeeService;
        this.companyService = companyService;
        this.departmentService = departmentService;
        this.salaryService = salaryService;
        this.employees = [];
        this.companies = [];
        this.departments = [];
        this.salaries = [];
      }
      return _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEmployees();
          this.loadCompanies();
          this.loadDepartments();
          this.loadSalaries();
        }
      }, {
        key: "loadEmployees",
        value: function loadEmployees() {
          var _this20 = this;
          this.employeeService.getEmployees().subscribe(function (data) {
            return _this20.employees = data;
          });
        }
      }, {
        key: "loadCompanies",
        value: function loadCompanies() {
          var _this21 = this;
          this.companyService.getCompanies().subscribe(function (data) {
            return _this21.companies = data;
          });
        }
      }, {
        key: "loadDepartments",
        value: function loadDepartments() {
          var _this22 = this;
          this.departmentService.getDepartments().subscribe(function (data) {
            return _this22.departments = data;
          });
        }
      }, {
        key: "loadSalaries",
        value: function loadSalaries() {
          var _this23 = this;
          this.salaryService.getSalaries().subscribe(function (data) {
            return _this23.salaries = data;
          });
        }
      }, {
        key: "getCompanyName",
        value: function getCompanyName(companyId) {
          var company = this.companies.find(function (c) {
            return c.id === +companyId;
          });
          return company ? company.name : 'Unknown Company';
        }
      }, {
        key: "getDepartmentName",
        value: function getDepartmentName(departmentId) {
          var department = this.departments.find(function (d) {
            return d.id === +departmentId;
          });
          return department ? department.name : 'Unknown Department';
        }
      }, {
        key: "getSalaryAmount",
        value: function getSalaryAmount(salaryId) {
          var salary = this.salaries.find(function (s) {
            return s.id === +salaryId;
          });
          return salary ? "".concat(salary.currency, " ").concat(salary.amount) : 'Unknown Salary';
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          var _this24 = this;
          var confirm = window.confirm("Are you sure?");
          if (confirm) {
            this.employeeService.deleteEmployee(id).subscribe(function () {
              return _this24.loadEmployees();
            });
          }
        }
      }]);
    }();
    EmployeeListComponent.ctorParameters = function () {
      return [{
        type: _services_employee_service_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: src_app_services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }, {
        type: src_app_services_department_service_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]
      }, {
        type: src_app_services_salary_service_service__WEBPACK_IMPORTED_MODULE_5__["SalaryService"]
      }];
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee-list/employee-list.component.html"))["default"]
    })], EmployeeListComponent);

    /***/
  }),
  /***/"./src/app/components/home/home.component.css": (
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_home_homeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".home-toolbar {\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.home-nav-card {\r\n  margin: 16px;\r\n  padding: 12px;\r\n  background-color: #424242; /* For dark theme */\r\n  color: white;\r\n}\r\n\r\n.toggle-group {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 12px;\r\n}\r\n\r\n.btns {\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n\r\n.content {\r\n  padding: 16px;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-checked {\r\n  background-color: #7b1fa2 !important; /* Primary color from Angular Material */\r\n  color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUIsRUFBRSxtQkFBbUI7RUFDOUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQyxFQUFFLHdDQUF3QztFQUM5RSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtdG9vbGJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaG9tZS1uYXYtY2FyZCB7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjsgLyogRm9yIGRhcmsgdGhlbWUgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2dnbGUtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmJ0bnMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyICFpbXBvcnRhbnQ7IC8qIFByaW1hcnkgY29sb3IgZnJvbSBBbmd1bGFyIE1hdGVyaWFsICovXHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/components/home/home.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function _src_app_components_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);
        this.router = router;
      }
      return _createClass(HomeComponent, [{
        key: "getActiveSection",
        value: function getActiveSection() {
          var currentRoute = this.router.url;
          if (currentRoute.includes('/employees')) {
            return 'employees';
          } else if (currentRoute.includes('/companies')) {
            return 'companies';
          } else if (currentRoute.includes('/departments')) {
            return 'departments';
          } else if (currentRoute.includes('/candidates')) {
            return 'candidates';
          } else if (currentRoute.includes('/companies')) {
            return 'companies';
          } else {
            return 'salaries';
          }
        }
      }]);
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */"./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);

    /***/
  }),
  /***/"./src/app/components/salary-form/salary-form.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/components/salary-form/salary-form.component.ts ***!
    \*****************************************************************/
  /*! exports provided: SalaryFormComponent */
  /***/
  function _src_app_components_salaryForm_salaryFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SalaryFormComponent", function () {
      return SalaryFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_salary_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/salary-service.service */"./src/app/services/salary-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    var SalaryFormComponent = /*#__PURE__*/function () {
      function SalaryFormComponent(service, route, router, snackBar) {
        _classCallCheck(this, SalaryFormComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.salary = {
          id: 0,
          grade: '',
          amount: 0,
          currency: ''
        };
        this.isEdit = false;
      }
      return _createClass(SalaryFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;
          var id = this.route.snapshot.params['id'];
          if (id) {
            this.isEdit = true;
            this.service.getSalary(+id).subscribe(function (data) {
              return _this25.salary = data;
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this26 = this;
          if (this.salary.grade === '' || this.salary.amount === 0 || this.salary.currency === '') {
            this.snackBar.open('Missing field! No entry made.', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/salaries']);
          } else {
            var request = this.isEdit ? this.service.updateSalary(this.salary) : this.service.addSalary(Object.assign({}, this.salary, {
              id: undefined
            })); // ✅ Force ID to be generated
            request.subscribe(function () {
              return _this26.router.navigate(['/salaries']);
            });
          }
        }
      }]);
    }();
    SalaryFormComponent.ctorParameters = function () {
      return [{
        type: _services_salary_service_service__WEBPACK_IMPORTED_MODULE_2__["SalaryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };
    SalaryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-salary-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salary-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-form/salary-form.component.html"))["default"]
    })], SalaryFormComponent);

    /***/
  }),
  /***/"./src/app/components/salary-list/salary-list.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/components/salary-list/salary-list.component.ts ***!
    \*****************************************************************/
  /*! exports provided: SalaryListComponent */
  /***/
  function _src_app_components_salaryList_salaryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SalaryListComponent", function () {
      return SalaryListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_salary_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/salary-service.service */"./src/app/services/salary-service.service.ts");
    var SalaryListComponent = /*#__PURE__*/function () {
      function SalaryListComponent(salaryService) {
        _classCallCheck(this, SalaryListComponent);
        this.salaryService = salaryService;
        this.salaries = [];
      }
      return _createClass(SalaryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadSalaries();
        }
      }, {
        key: "loadSalaries",
        value: function loadSalaries() {
          var _this27 = this;
          this.salaryService.getSalaries().subscribe(function (data) {
            return _this27.salaries = data;
          });
        }
      }, {
        key: "deleteSalary",
        value: function deleteSalary(id) {
          var _this28 = this;
          var confirm = window.confirm("Are you sure?");
          if (confirm) {
            this.salaryService.deleteSalary(id).subscribe(function () {
              return _this28.loadSalaries();
            });
          }
        }
      }]);
    }();
    SalaryListComponent.ctorParameters = function () {
      return [{
        type: _services_salary_service_service__WEBPACK_IMPORTED_MODULE_2__["SalaryService"]
      }];
    };
    SalaryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-salary-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salary-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/salary-list/salary-list.component.html"))["default"]
    })], SalaryListComponent);

    /***/
  }),
  /***/"./src/app/in-memory-data.service.ts": (
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/
  /*! exports provided: InMemoryDataService */
  /***/
  function _src_app_inMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var STORAGE_KEYS = {
      candidates: 'candidates',
      employees: 'employees',
      companies: 'companies',
      departments: 'departments',
      salaries: 'salaries'
    };
    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }
      return _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var candidatesData = localStorage.getItem(STORAGE_KEYS.candidates);
          var employeesData = localStorage.getItem(STORAGE_KEYS.employees);
          var companyData = localStorage.getItem(STORAGE_KEYS.companies);
          var departmentData = localStorage.getItem(STORAGE_KEYS.departments);
          var salaryData = localStorage.getItem(STORAGE_KEYS.salaries);
          var candidates = candidatesData ? JSON.parse(candidatesData) : [];
          var employees = employeesData ? JSON.parse(employeesData) : [];
          var companies = companyData ? JSON.parse(companyData) : [];
          var departments = departmentData ? JSON.parse(departmentData) : [];
          var salaries = salaryData ? JSON.parse(salaryData) : [];
          return {
            candidates: candidates,
            employees: employees,
            companies: companies,
            departments: departments,
            salaries: salaries
          };
        }
      }, {
        key: "genId",
        value: function genId(collection) {
          return collection.length > 0 ? Math.max.apply(Math, _toConsumableArray(collection.map(function (item) {
            return item.id;
          }))) + 1 : 1;
        }
      }, {
        key: "responseInterceptor",
        value: function responseInterceptor(resOptions, reqInfo) {
          var collectionName = reqInfo.collectionName;
          if (['candidates', 'employees', 'companies', 'departments', 'salaries'].includes(collectionName)) {
            var collection = reqInfo.utils.getDb()[collectionName];
            localStorage.setItem(STORAGE_KEYS[collectionName], JSON.stringify(collection));
          }
          return resOptions;
        }
      }]);
    }();
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InMemoryDataService);

    /***/
  }),
  /***/"./src/app/services/candidate-service.service.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/services/candidate-service.service.ts ***!
    \*******************************************************/
  /*! exports provided: CandidateService */
  /***/
  function _src_app_services_candidateServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CandidateService", function () {
      return CandidateService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var CandidateService = /*#__PURE__*/function () {
      function CandidateService(http) {
        _classCallCheck(this, CandidateService);
        this.http = http;
        this.apiUrl = 'api/candidates';
      }
      return _createClass(CandidateService, [{
        key: "getCandidates",
        value: function getCandidates() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getCandidate",
        value: function getCandidate(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "addCandidate",
        value: function addCandidate(candidate) {
          return this.http.post(this.apiUrl, candidate);
        }
      }, {
        key: "updateCandidate",
        value: function updateCandidate(candidate) {
          return this.http.put("".concat(this.apiUrl, "/").concat(candidate.id), candidate);
        }
      }, {
        key: "deleteCandidate",
        value: function deleteCandidate(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);
    }();
    CandidateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    CandidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CandidateService);

    /***/
  }),
  /***/"./src/app/services/company-service.service.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/services/company-service.service.ts ***!
    \*****************************************************/
  /*! exports provided: CompanyService */
  /***/
  function _src_app_services_companyServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var CompanyService = /*#__PURE__*/function () {
      function CompanyService(http) {
        _classCallCheck(this, CompanyService);
        this.http = http;
        this.apiUrl = 'api/companies';
      }
      return _createClass(CompanyService, [{
        key: "getCompanies",
        value: function getCompanies() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getCompany",
        value: function getCompany(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "addCompany",
        value: function addCompany(company) {
          return this.http.post(this.apiUrl, company);
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          return this.http.put("".concat(this.apiUrl, "/").concat(company.id), company);
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);
    }();
    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CompanyService);

    /***/
  }),
  /***/"./src/app/services/department-service.service.ts": (
  /*!********************************************************!*\
    !*** ./src/app/services/department-service.service.ts ***!
    \********************************************************/
  /*! exports provided: DepartmentService */
  /***/
  function _src_app_services_departmentServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DepartmentService", function () {
      return DepartmentService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var DepartmentService = /*#__PURE__*/function () {
      function DepartmentService(http) {
        _classCallCheck(this, DepartmentService);
        this.http = http;
        this.apiUrl = 'api/departments';
      }
      return _createClass(DepartmentService, [{
        key: "getDepartments",
        value: function getDepartments() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getDepartment",
        value: function getDepartment(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "addDepartment",
        value: function addDepartment(department) {
          return this.http.post(this.apiUrl, department);
        }
      }, {
        key: "updateDepartment",
        value: function updateDepartment(department) {
          return this.http.put("".concat(this.apiUrl, "/").concat(department.id), department);
        }
      }, {
        key: "deleteDepartment",
        value: function deleteDepartment(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);
    }();
    DepartmentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DepartmentService);

    /***/
  }),
  /***/"./src/app/services/employee-service.service.ts": (
  /*!******************************************************!*\
    !*** ./src/app/services/employee-service.service.ts ***!
    \******************************************************/
  /*! exports provided: EmployeeService */
  /***/
  function _src_app_services_employeeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);
        this.http = http;
        this.apiUrl = 'api/employees';
      }
      return _createClass(EmployeeService, [{
        key: "getEmployees",
        value: function getEmployees() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getEmployee",
        value: function getEmployee(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(employee) {
          return this.http.post(this.apiUrl, employee);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee) {
          return this.http.put("".concat(this.apiUrl, "/").concat(employee.id), employee);
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);
    }();
    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);

    /***/
  }),
  /***/"./src/app/services/salary-service.service.ts": (
  /*!****************************************************!*\
    !*** ./src/app/services/salary-service.service.ts ***!
    \****************************************************/
  /*! exports provided: SalaryService */
  /***/
  function _src_app_services_salaryServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SalaryService", function () {
      return SalaryService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var SalaryService = /*#__PURE__*/function () {
      function SalaryService(http) {
        _classCallCheck(this, SalaryService);
        this.http = http;
        this.apiUrl = 'api/salaries';
      }
      return _createClass(SalaryService, [{
        key: "getSalaries",
        value: function getSalaries() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getSalary",
        value: function getSalary(id) {
          return this.http.get("".concat(this.apiUrl, "/").concat(id));
        }
      }, {
        key: "addSalary",
        value: function addSalary(salary) {
          return this.http.post(this.apiUrl, salary);
        }
      }, {
        key: "updateSalary",
        value: function updateSalary(salary) {
          return this.http.put("".concat(this.apiUrl, "/").concat(salary.id), salary);
        }
      }, {
        key: "deleteSalary",
        value: function deleteSalary(id) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
        }
      }]);
    }();
    SalaryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    SalaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SalaryService);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/"./src/shared/material.module.ts": (
  /*!***************************************!*\
    !*** ./src/shared/material.module.ts ***!
    \***************************************/
  /*! exports provided: MaterialModule */
  /***/
  function _src_shared_materialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */"./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */"./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */
    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */"./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */
    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */"./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */"./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */
    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */"./node_modules/@angular/material/esm2015/select.js");

    // Optional if using icons

    var MaterialModule = /*#__PURE__*/_createClass(function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    });
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]]
    })], MaterialModule);

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! G:\HR Management\hr-system\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map