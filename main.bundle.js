webpackJsonp([0,3],{

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(545);


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.views = [
            new __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__["a" /* NavigationitemModel */]([], 'Home', 'home', '/home'),
            new __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__["a" /* NavigationitemModel */]([
                new __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__["a" /* NavigationitemModel */]([], 'Company', 'business', '/company'),
                new __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__["a" /* NavigationitemModel */]([], 'Conway\'s Game of Life', 'play_circle_filled', '/conway'),
                new __WEBPACK_IMPORTED_MODULE_1__navigationitem_navigationitem_model__["a" /* NavigationitemModel */]([], 'Stadtanzeiger', 'assignment', '/stadtanzeiger'),
            ], 'Example modules', 'info', ''),
        ];
    }
    AppComponent.prototype.openGitHubRepository = function () {
        location.href = 'https://github.com/PascalTemel/temel.me';
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(874),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CustomerEditDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContactEditDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = (function () {
    function CompanyComponent(_dialog, _snackBar, _viewContainerRef) {
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this._viewContainerRef = _viewContainerRef;
        this.addresses = [
            {
                street: 'Hanns-Klemm-Straße 56',
                town: 'Böblingen',
                type: 'Main',
                zipCode: 71034,
            },
            {
                street: 'Hanns-Klemm-Straße 56',
                town: 'Böblingen',
                type: 'Delivery',
                zipCode: 71034,
            },
            {
                street: 'Hanns-Klemm-Straße 56',
                town: 'Böblingen',
                type: 'Fallback',
                zipCode: 71034,
            },
        ];
        this.contacts = [
            {
                emailAddresses: [
                    'admin@temel.me',
                    'pascal@temel.me',
                ],
                fax: '',
                name: 'Pascal Temel',
                phone: '+49 172 1234567',
                street: 'Foostraße 51',
                town: 'Grafenau',
                zipCode: 71120,
            },
            {
                emailAddresses: [
                    'admin@temel.me',
                    'pascal@temel.me',
                ],
                fax: '',
                name: 'Pascal Temel',
                phone: '+49 172 1234567',
                street: 'Foostraße 51',
                town: 'Grafenau',
                zipCode: 71120,
            },
            {
                emailAddresses: [
                    'admin@temel.me',
                    'pascal@temel.me',
                ],
                fax: '',
                name: 'Pascal Temel',
                phone: '+49 172 1234567',
                street: 'Foostraße 51',
                town: 'Grafenau',
                zipCode: 71120,
            },
            {
                emailAddresses: [
                    'admin@temel.me',
                    'pascal@temel.me',
                ],
                fax: '',
                name: 'Pascal Temel',
                phone: '+49 172 1234567',
                street: 'Foostraße 51',
                town: 'Grafenau',
                zipCode: 71120,
            }
        ];
        this.customer = {
            number: 248291,
            name: 'Foobarbaz AG testtest 123456789',
            phone: '+49 172 1234567',
            fax: '+49 151 0958253',
            website: 'www.google.com',
            emailAddresses: [
                'foo@bar.baz',
                'cyka@blyat.com',
            ],
            group: 'Reseller',
            priceGroup: 'B',
            industry: 'Pharmaceutical',
            revenue: '250m - 499m',
            employees: '1000 - 1999',
            accountManagers: [
                {
                    name: 'Foo bar',
                    responsibility: 'Workstations, Peripherals'
                },
                {
                    name: 'Bin baz',
                    responsibility: 'Servers, Infrastructure'
                },
            ],
            location: 'Böblingen',
            clerk: 'Angela Merkel',
            town: 'Öhringen',
            zipCode: 74613,
            street: 'Weygangstraße 3',
            yearlySales: [
                {
                    year: 2012,
                    sales: 233439.82
                },
                {
                    year: 2013,
                    sales: 504221.49
                },
                {
                    year: 2014,
                    sales: 349505.02
                },
                {
                    year: 2015,
                    sales: 683694.205
                },
                {
                    year: 2016,
                    sales: 90852.198
                },
            ],
        };
    }
    CompanyComponent.prototype.editCustomer = function () {
        var _this = this;
        this.customerEditDialogRef = this._dialog.open(CustomerEditDialog, { data: this.customer, width: '600px' });
        this.customerEditDialogRef.afterClosed().subscribe(function (result) {
            if (typeof (result) === 'object') {
                _this.customer = result;
                _this._snackBar.open('Changes were saved', null, {
                    duration: 3000,
                });
            }
            _this.customerEditDialogRef = null;
        });
    };
    CompanyComponent.prototype.editContact = function (contactIndex) {
        var _this = this;
        this.contactEditDialogRef = this._dialog.open(ContactEditDialog, { data: this.contacts[contactIndex], width: '600px' });
        this.contactEditDialogRef.afterClosed().subscribe(function (result) {
            if (typeof (result) === 'object') {
                _this.contacts[contactIndex] = result;
                _this._snackBar.open('Changes were saved', null, {
                    duration: 3000,
                });
            }
            _this.contactEditDialogRef = null;
        });
    };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'company',
            template: __webpack_require__(875),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ViewContainerRef */]) === 'function' && _c) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a, _b, _c;
}());
var CustomerEditDialog = (function () {
    function CustomerEditDialog(dialogRef, _formBuilder) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        this.groups = [
            { value: 'Consumer', viewValue: 'Consumer' },
            { value: 'Reseller', viewValue: 'Reseller' },
        ];
        this.priceGroups = [
            { value: 'A', viewValue: 'A' },
            { value: 'B', viewValue: 'B' },
            { value: 'C', viewValue: 'C' },
            { value: 'D', viewValue: 'D' },
            { value: 'E', viewValue: 'E' },
            { value: 'F', viewValue: 'F' },
        ];
        var customer = dialogRef.config.data;
        this.form = this._formBuilder.group({
            accountManagers: [customer.accountManagers],
            clerk: [customer.clerk],
            emailAddresses: [customer.emailAddresses],
            employees: [customer.employees],
            fax: [customer.fax],
            group: [customer.group],
            industry: [customer.industry],
            location: [customer.location, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            name: [customer.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            number: [customer.number, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            phone: [customer.phone, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            priceGroup: [customer.priceGroup],
            revenue: [customer.revenue],
            street: [customer.street, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            town: [customer.town, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            website: [customer.website],
            yearlySales: [customer.yearlySales],
            zipCode: [customer.zipCode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
        });
    }
    CustomerEditDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'customer-edit-dialog',
            template: "\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"dialogRef.close(form.value)\">\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Name\" formControlName=\"name\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Phone\" formControlName=\"phone\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Fax\" formControlName=\"fax\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Website\" formControlName=\"website\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Town\" formControlName=\"town\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"ZIP\" formControlName=\"zipCode\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Street\" formControlName=\"street\">\n\t\t\t</md-input-container>\n\t\t\t<md-select placeholder=\"Price Group\" formControlName=\"priceGroup\">\n\t\t\t\t<md-option *ngFor=\"let priceGroup of priceGroups\" [value]=\"priceGroup.value\">\n\t\t\t\t\t{{priceGroup.viewValue}}\n\t\t\t\t</md-option>\n\t\t\t</md-select>\n\t\t\t<md-select placeholder=\"Group\" formControlName=\"group\">\n\t\t\t\t<md-option *ngFor=\"let group of groups\" [value]=\"group.value\">\n\t\t\t\t\t{{group.viewValue}}\n\t\t\t\t</md-option>\n\t\t\t</md-select>\n\t\t\t<md-dialog-actions>\n\t\t\t\t<button md-button type=\"reset\" (click)=\"dialogRef.close()\">Close</button>\n\t\t\t\t<button md-button type=\"submit\">Save</button>\n\t\t\t</md-dialog-actions>\n\t\t</form>\n\t",
            styles: [
                'p { font-family: Roboto, "Helvetica Neue", sans-serif; }'
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object])
    ], CustomerEditDialog);
    return CustomerEditDialog;
    var _a, _b;
}());
var ContactEditDialog = (function () {
    function ContactEditDialog(dialogRef, _formBuilder) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        var contact = dialogRef.config.data;
        this.form = this._formBuilder.group({
            emailAddresses: [contact.emailAddresses],
            fax: [contact.fax, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            name: [contact.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            phone: [contact.phone, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            street: [contact.street, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            town: [contact.town, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            zipCode: [contact.zipCode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
        });
    }
    ContactEditDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'contact-edit-dialog',
            template: "\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"dialogRef.close(form.value)\">\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Name\" formControlName=\"name\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Phone\" formControlName=\"phone\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Fax\" formControlName=\"fax\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Town\" formControlName=\"town\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"ZIP\" formControlName=\"zipCode\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Street\" formControlName=\"street\">\n\t\t\t</md-input-container>\n\t\t\t<md-dialog-actions>\n\t\t\t\t<button md-button type=\"reset\" (click)=\"dialogRef.close()\">Close</button>\n\t\t\t\t<button md-button type=\"submit\">Save</button>\n\t\t\t</md-dialog-actions>\n\t\t</form>\n\t",
            styles: [
                'p { font-family: Roboto, "Helvetica Neue", sans-serif; }'
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object])
    ], ContactEditDialog);
    return ContactEditDialog;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/company.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConwayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConwayComponent = (function () {
    function ConwayComponent(_cd) {
        this._cd = _cd;
        this.columnCount = 100;
        this.iterationCount = 1;
        this.iterationTime = 0;
        this.rowCount = 60;
        this.rows = [];
        this._temporaryRows = [];
        this._startCells = [
            { row: 3, cell: 28 },
            { row: 4, cell: 26 },
            { row: 4, cell: 28 },
            { row: 5, cell: 16 },
            { row: 5, cell: 17 },
            { row: 5, cell: 24 },
            { row: 5, cell: 25 },
            { row: 5, cell: 38 },
            { row: 5, cell: 39 },
            { row: 6, cell: 15 },
            { row: 6, cell: 19 },
            { row: 6, cell: 24 },
            { row: 6, cell: 25 },
            { row: 6, cell: 38 },
            { row: 6, cell: 39 },
            { row: 7, cell: 4 },
            { row: 7, cell: 5 },
            { row: 7, cell: 14 },
            { row: 7, cell: 20 },
            { row: 7, cell: 24 },
            { row: 7, cell: 25 },
            { row: 8, cell: 4 },
            { row: 8, cell: 5 },
            { row: 8, cell: 14 },
            { row: 8, cell: 18 },
            { row: 8, cell: 20 },
            { row: 8, cell: 21 },
            { row: 8, cell: 26 },
            { row: 8, cell: 28 },
            { row: 9, cell: 14 },
            { row: 9, cell: 20 },
            { row: 9, cell: 28 },
            { row: 10, cell: 15 },
            { row: 10, cell: 19 },
            { row: 11, cell: 16 },
            { row: 11, cell: 17 },
        ];
        this.initializeCells();
    }
    ConwayComponent.prototype.calculateNextIteration = function () {
        var _this = this;
        this._temporaryRows = JSON.parse(JSON.stringify(this.rows));
        this._cd.detach();
        this._temporaryRows.forEach(function (row, rowIndex) {
            row.cells.forEach(function (cell, cellIndex) {
                var alive = false;
                var aliveNeighbours = _this._calculateAliveNeighbours(rowIndex, cellIndex);
                if (cell.alive) {
                    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
                        alive = false;
                    }
                    else if (aliveNeighbours === 2 || aliveNeighbours === 3) {
                        alive = true;
                    }
                }
                else if (aliveNeighbours === 3) {
                    alive = true;
                }
                _this.rows[rowIndex].cells[cellIndex].alive = alive;
            });
        });
        this.iterationCount++;
        this._cd.reattach();
    };
    ConwayComponent.prototype.initializeCells = function () {
        var _this = this;
        this.rows = [];
        for (var i = 0; i <= this.rowCount; i++) {
            var row = { cells: [] };
            for (var j = 0; j <= this.columnCount; j++) {
                var cell = { alive: false };
                row.cells.push(cell);
            }
            this.rows.push(row);
        }
        this._startCells.forEach(function (cell) {
            _this.rows[cell.row].cells[cell.cell].alive = true;
        });
    };
    ConwayComponent.prototype.randomizeCells = function () {
        this.rows.forEach(function (row) {
            row.cells.forEach(function (cell) {
                cell.alive = (Math.random() > 0.8 ? true : false);
            });
        });
    };
    ConwayComponent.prototype.start = function () {
        var _this = this;
        this.iterationSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, this.iterationTime * 1000).subscribe(function () { return _this.calculateNextIteration(); });
    };
    ConwayComponent.prototype.stop = function () {
        if (this.iterationSubscription) {
            this.iterationSubscription.unsubscribe();
            this.iterationSubscription = null;
        }
    };
    ConwayComponent.prototype._calculateAliveNeighbours = function (row, cell) {
        var aliveNeighbours = 0;
        // TOP
        if (this._temporaryRows[row - 1]) {
            if (this._temporaryRows[row - 1].cells[cell - 1] && this._temporaryRows[row - 1].cells[cell - 1].alive) {
                aliveNeighbours++;
            }
            if (this._temporaryRows[row - 1].cells[cell].alive) {
                aliveNeighbours++;
            }
            if (this._temporaryRows[row - 1].cells[cell + 1] && this._temporaryRows[row - 1].cells[cell + 1].alive) {
                aliveNeighbours++;
            }
        }
        // CENTER-LEFT
        if (this._temporaryRows[row].cells[cell - 1] && this._temporaryRows[row].cells[cell - 1].alive) {
            aliveNeighbours++;
        }
        // CENTER-RIGHT
        if (this._temporaryRows[row].cells[cell + 1] && this._temporaryRows[row].cells[cell + 1].alive) {
            aliveNeighbours++;
        }
        // BOTTOM
        if (this._temporaryRows[row + 1]) {
            if (this._temporaryRows[row + 1].cells[cell - 1] && this._temporaryRows[row + 1].cells[cell - 1].alive) {
                aliveNeighbours++;
            }
            if (this._temporaryRows[row + 1].cells[cell].alive) {
                aliveNeighbours++;
            }
            if (this._temporaryRows[row + 1].cells[cell + 1] && this._temporaryRows[row + 1].cells[cell + 1].alive) {
                aliveNeighbours++;
            }
        }
        return aliveNeighbours;
    };
    ConwayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'conway',
            template: __webpack_require__(876),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ChangeDetectorRef */]) === 'function' && _a) || Object])
    ], ConwayComponent);
    return ConwayComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/conway.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'home',
            template: __webpack_require__(877),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/home.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationitemModel; });
var NavigationitemModel = (function () {
    function NavigationitemModel(children, description, icon, routerLink) {
        if (children === void 0) { children = []; }
        if (description === void 0) { description = 'info'; }
        if (icon === void 0) { icon = ''; }
        if (routerLink === void 0) { routerLink = ''; }
        this.children = children;
        this.description = description;
        this.icon = icon;
        this.routerLink = routerLink;
    }
    return NavigationitemModel;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/navigationitem.model.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadtanzeigerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StadtanzeigerComponent = (function () {
    function StadtanzeigerComponent() {
        this.announcements = [];
    }
    StadtanzeigerComponent.prototype.createAnnouncement = function (announcement) {
        this.announcements.push(announcement);
    };
    StadtanzeigerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'stadtanzeiger',
            template: __webpack_require__(881),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [])
    ], StadtanzeigerComponent);
    return StadtanzeigerComponent;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/stadtanzeiger.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 544;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(705);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/main.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_company_module__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__conway_conway_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stadtanzeiger_stadtanzeiger_module__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigationitem_navigationitem_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigationitem_navigationitem_component__["a" /* NavigationitemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8__company_company_module__["a" /* CompanyModule */],
                __WEBPACK_IMPORTED_MODULE_9__conway_conway_module__["a" /* ConwayModule */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_11__stadtanzeiger_stadtanzeiger_module__["a" /* StadtanzeigerModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["b" /* appRoutingProviders */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/app.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_company_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conway_conway_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stadtanzeiger_stadtanzeiger_component__ = __webpack_require__(469);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var appRoutes = [
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_1__company_company_component__["a" /* CompanyComponent */] },
    { path: 'conway', component: __WEBPACK_IMPORTED_MODULE_2__conway_conway_component__["a" /* ConwayComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'stadtanzeiger', component: __WEBPACK_IMPORTED_MODULE_4__stadtanzeiger_stadtanzeiger_component__["a" /* StadtanzeigerComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/app.routing.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_component__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyModule = (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__company_component__["b" /* ContactEditDialog */],
                __WEBPACK_IMPORTED_MODULE_4__company_component__["c" /* CustomerEditDialog */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__company_component__["a" /* CompanyComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__company_component__["b" /* ContactEditDialog */],
                __WEBPACK_IMPORTED_MODULE_4__company_component__["c" /* CustomerEditDialog */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: 'de-DE' },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CompanyModule);
    return CompanyModule;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/company.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conway_component__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConwayModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConwayModule = (function () {
    function ConwayModule() {
    }
    ConwayModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__conway_component__["a" /* ConwayComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ConwayModule);
    return ConwayModule;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/conway.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
            ],
            imports: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/home.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(464);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(700);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/Pascal/temel.me/src/index.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigationitem_model__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationitemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationitemComponent = (function () {
    function NavigationitemComponent() {
        this.linkClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */]();
        this.childrenVisible = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], NavigationitemComponent.prototype, "first", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(), 
        __metadata('design:type', Number)
    ], NavigationitemComponent.prototype, "level", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navigationitem_model__["a" /* NavigationitemModel */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__navigationitem_model__["a" /* NavigationitemModel */]) === 'function' && _a) || Object)
    ], NavigationitemComponent.prototype, "navigationitem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */]) === 'function' && _b) || Object)
    ], NavigationitemComponent.prototype, "linkClicked", void 0);
    NavigationitemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'navigationitem',
            template: __webpack_require__(878),
            styles: [__webpack_require__(868)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* trigger */])('rotateArrow', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* style */])({ transform: 'rotate(180deg)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* style */])({ transform: 'rotate(0deg)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('300ms')),
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* trigger */])('expandChildren', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* style */])({ transform: 'translateX(0)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* style */])({ transform: 'translateX(-100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('200ms')
                    ]),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationitemComponent);
    return NavigationitemComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/navigationitem.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadtanzeigerAnnouncementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StadtanzeigerAnnouncementComponent = (function () {
    function StadtanzeigerAnnouncementComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(), 
        __metadata('design:type', Object)
    ], StadtanzeigerAnnouncementComponent.prototype, "announcement", void 0);
    StadtanzeigerAnnouncementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'stadtanzeiger-announcement',
            template: __webpack_require__(879),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [])
    ], StadtanzeigerAnnouncementComponent);
    return StadtanzeigerAnnouncementComponent;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/announcement.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadtanzeigerAnnouncementCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StadtanzeigerAnnouncementCreateComponent = (function () {
    function StadtanzeigerAnnouncementCreateComponent(_formBuilder, _snackBar) {
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.createAnnouncement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */]();
        this.form = this._formBuilder.group({
            anonymous: [false],
            email: [''],
            password: [''],
            price: [''],
            street: [''],
            title: [''],
            town: [''],
            zipCode: [''],
        });
    }
    StadtanzeigerAnnouncementCreateComponent.prototype.submit = function () {
        var message = 'The announcement could not be created, please re-check the form!';
        if (this.form.valid) {
            message = "The announcement has been created!";
            this.createAnnouncement.emit(this.form.value);
            this.form.reset();
        }
        this._snackBar.open(message, null, {
            duration: 3000,
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */]) === 'function' && _a) || Object)
    ], StadtanzeigerAnnouncementCreateComponent.prototype, "createAnnouncement", void 0);
    StadtanzeigerAnnouncementCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'stadtanzeiger-announcement-create',
            template: __webpack_require__(880),
            styles: [__webpack_require__(870)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _c) || Object])
    ], StadtanzeigerAnnouncementCreateComponent);
    return StadtanzeigerAnnouncementCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/create.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement_announcement_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stadtanzeiger_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__announcement_create_create_component__ = __webpack_require__(708);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadtanzeigerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StadtanzeigerModule = (function () {
    function StadtanzeigerModule() {
    }
    StadtanzeigerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__announcement_announcement_component__["a" /* StadtanzeigerAnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_6__announcement_create_create_component__["a" /* StadtanzeigerAnnouncementCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_5__stadtanzeiger_component__["a" /* StadtanzeigerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__stadtanzeiger_component__["a" /* StadtanzeigerComponent */],
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], StadtanzeigerModule);
    return StadtanzeigerModule;
}());
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/stadtanzeiger.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Pascal/temel.me/src/environment.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Pascal/temel.me/src/polyfills.js.map

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "md-sidenav-container {\r\n\tbackground: rgba(0,0,0,0.03);\r\n}\r\n\r\n.fill-remaining-space {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1 1 auto;\r\n\t        flex: 1 1 auto;\r\n}\r\n\r\n.app-content {\r\n\tmargin: 20px;\r\n}\r\n\r\nbutton[md-fab] {\r\n\tposition: absolute;\r\n\tright: 14px;\r\n\tbottom: 14px;\r\n\tz-index: 1;\r\n}\r\n\r\n/*this rule can be activated for visual nesting*/\r\n/*:host >>> navigationitem > md-nav-list.level-2 > md-list-item > div::before {\r\n\tcontent: '-'\r\n}*/\r\n\r\n.no-select, .no-select * {\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n.banner {\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: #3f51b5;\r\n\tcolor: rgba(255, 255, 255, 0.87);\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tfont-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n\tfont-size: 20px;\r\n\tfont-weight: 400;\r\n\theight: 64px;\r\n\tpadding-left: 20px;\r\n}\r\n\r\n:host >>> * {\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n:host >>> .secondary {\r\n\tcolor: rgba(0,0,0,0.54);\r\n}\r\n\r\n:host >>> .faded {\r\n\tcolor: rgba(0,0,0,0.125);\r\n}\r\n\r\n:host >>> .float-right {\r\n\tfloat: right;\r\n}\r\n\r\n:host >>> md-tab-body.mat-tab-body-active {\r\n\tpadding: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "#main-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmax-height: calc(100vh - 106px);\r\n}\r\n\r\n#customer {\r\n\toverflow-y: auto;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n}\r\n\r\n#contacts {\r\n\toverflow-y: auto;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\tmargin-left: 4px;\r\n}\r\n\r\n#details {\r\n\toverflow-y: auto;\r\n\t-webkit-box-flex: 3;\r\n\t    -ms-flex: 3;\r\n\t        flex: 3;\r\n\tmargin-left: 4px;\r\n}\r\n\r\nmd-divider {\r\n\tmargin: 7px 0px 8px 0px; /* 7px because the divider has border-top: 1px */\r\n}\r\n\r\ntable {\r\n\twidth: 100%;\r\n\ttable-layout: fixed;\r\n}\r\n\r\ntr {\r\n\tvertical-align: baseline;\r\n}\r\n\r\ntr > th.title {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n\r\ntd {\r\n\twidth: 50%;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n}\r\n\r\ntd.label {\r\n\ttext-align: right;\r\n\tfont-weight: bold;\r\n}\r\n\r\ntd.value {\r\n\ttext-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, ".cell {\r\n\tborder-right: 1px solid #ccc;\r\n\tborder-bottom: 1px solid #ccc;\r\n\tdisplay: table-cell;\r\n\theight: 9px;\r\n\tmargin-right: -1px;\r\n\tmargin-bottom: -1px;\r\n\twidth: 9px;\r\n}\r\n\r\n.row {\r\n\tdisplay: table-row;\r\n}\r\n\r\n.first-row {\r\n\tborder-top: 1px solid #ccc;\r\n}\r\n\r\n.first-cell {\r\n\tborder-left: 1px solid #ccc;\r\n}\r\n\r\n.alive {\r\n\tbackground-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "md-nav-list[dense].no-padding {\r\n\tpadding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\r\n\t<md-sidenav class=\"app-sidenav no-select\" #sidenav>\r\n\t\t<div class=\"banner\">\r\n\t\t\t<button md-icon-button (click)=\"sidenav.close()\">\r\n\t\t\t\t<md-icon>menu</md-icon>\r\n\t\t\t</button>\r\n\t\t\t<span>Temel.me</span>\r\n\t\t</div>\r\n\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t<md-tab-group>\r\n\t\t\t<md-tab label=\"Navigation\">\r\n\t\t\t\t<navigationitem *ngFor=\"let view of views, let first = first\"\r\n\t\t\t\t\tclass=\"no-select\"\r\n\t\t\t\t\t[first]=\"first\"\r\n\t\t\t\t\t[navigationitem]=\"view\"\r\n\t\t\t\t\t[level]=\"1\"\r\n\t\t\t\t\t(linkClicked)=\"sidenav.close()\"\r\n\t\t\t\t></navigationitem>\r\n\t\t\t</md-tab>\r\n\t\t\t<md-tab label=\"Sidebar\">\r\n\t\t\t\tContent\r\n\t\t\t</md-tab>\r\n\t\t</md-tab-group>\r\n\t</md-sidenav>\r\n\r\n\t<md-toolbar color=\"primary\" class=\"no-select\">\r\n\t\t<button md-icon-button (click)=\"sidenav.open()\">\r\n\t\t\t<md-icon>menu</md-icon>\r\n\t\t</button>\r\n\t\t<span>Temel.me</span>\r\n\r\n\t\t<span class=\"fill-remaining-space\"></span>\r\n\r\n\t\t<span class=\"overflow-hidden\">\r\n\t\t\t<button md-icon-button [md-menu-trigger-for]=\"notificationMenu\">\r\n\t\t\t\t<md-icon>notifications_none</md-icon>\r\n\t\t\t</button>\r\n\t\t\t<md-menu x-position=\"before\" #notificationMenu=\"mdMenu\">\r\n\t\t\t\t<button md-menu-item disabled>No Notifications</button>\r\n\t\t\t</md-menu>\r\n\r\n\t\t\t<button md-icon-button [md-menu-trigger-for]=\"settingsMenu\">\r\n\t\t\t\t<md-icon>settings_notifications</md-icon>\r\n\t\t\t</button>\r\n\t\t\t<md-menu x-position=\"before\" #settingsMenu=\"mdMenu\">\r\n\t\t\t\t<button md-menu-item>Foo</button>\r\n\t\t\t\t<button md-menu-item>Bar</button>\r\n\t\t\t\t<button md-menu-item disabled>Baz</button>\r\n\t\t\t</md-menu>\r\n\t\t</span>\r\n\r\n\t\t<button md-fab mdTooltip=\"View code on GitHub\" mdTooltipPosition=\"before\" (click)=\"openGitHubRepository()\">\r\n\t\t\t<md-icon>code</md-icon>\r\n\t\t</button>\r\n\t</md-toolbar>\r\n\r\n\t<div class=\"app-content\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n\t<md-card id=\"customer\">\r\n\t\t<md-card-title>Customer</md-card-title>\r\n\t\t<md-card-content>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Customer number: {{customer.number}}\">\r\n\t\t\t\t\t<td class=\"label\">#</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.number}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Name: {{customer.name}}\">\r\n\t\t\t\t\t<td class=\"label\">Name</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.name}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Phone: {{customer.phone}}\">\r\n\t\t\t\t\t<td class=\"label\">Phone</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.phone}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Fax: {{customer.fax}}\">\r\n\t\t\t\t\t<td class=\"label\">Fax</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.fax}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Website: {{customer.website}}\">\r\n\t\t\t\t\t<td class=\"label\">Website</td>\r\n\t\t\t\t\t<td class=\"value\"><a href=\"{{(customer.website ? (customer.website.match('^http://') ? customer.website : 'http://' + customer.website) : '')}}\">{{customer.website}}</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"label\">E-Mail addresses</td>\r\n\t\t\t\t\t<td class=\"value\">\r\n\t\t\t\t\t\t<span *ngFor=\"let emailAddress of customer.emailAddresses, let last = last\">\r\n\t\t\t\t\t\t\t<a href=\"mailto:{{emailAddress}}\" mdTooltip=\"{{emailAddress}}\">{{emailAddress}}</a>\r\n\t\t\t\t\t\t\t<br *ngIf=\"!last\">\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Group: {{customer.group}}\">\r\n\t\t\t\t\t<td class=\"label\">Group</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.group}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Price group: {{customer.priceGroup}}\">\r\n\t\t\t\t\t<td class=\"label\">Price group</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.priceGroup}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Industry sector: {{customer.industry}}\">\r\n\t\t\t\t\t<td class=\"label\">Industry sector</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.industry}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Yearly revenue: {{customer.revenue}}\">\r\n\t\t\t\t\t<td class=\"label\">Yearly revenue</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.revenue}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Amount of employees: {{customer.employees}}\">\r\n\t\t\t\t\t<td class=\"label\">Amount of employees</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.employees}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"label\">Account managers</td>\r\n\t\t\t\t\t<td class=\"value\">\r\n\t\t\t\t\t\t<span *ngFor=\"let accountManager of customer.accountManagers, let last = last\" mdTooltip=\"{{accountManager.responsibility}}\">\r\n\t\t\t\t\t\t\t{{accountManager.name}}\r\n\t\t\t\t\t\t\t<br *ngIf=\"!last\">\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Location: {{customer.location}}\">\r\n\t\t\t\t\t<td class=\"label\">Location</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.location}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Clerk: {{customer.clerk}}\">\r\n\t\t\t\t\t<td class=\"label\">Clerk</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.clerk}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr mdTooltip=\"Town: {{customer.town}}\">\r\n\t\t\t\t\t<td class=\"label\">Town</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.town}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"ZIP: {{customer.zipCode}}\">\r\n\t\t\t\t\t<td class=\"label\">ZIP</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.zipCode}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr mdTooltip=\"Street: {{customer.street}}\">\r\n\t\t\t\t\t<td class=\"label\">Street</td>\r\n\t\t\t\t\t<td class=\"value\">{{customer.street}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th colspan=\"2\" class=\"title\">Yearly sales</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr *ngFor=\"let year of customer.yearlySales\">\r\n\t\t\t\t\t<td class=\"label\">{{year.year}}</td>\r\n\t\t\t\t\t<td class=\"value\"  mdTooltip=\"{{year.sales | currency:'EUR':true}}\">{{year.sales | currency:'EUR':true}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</md-card-content>\r\n\t\t<md-card-actions>\r\n\t\t\t<button md-button (click)=\"editCustomer()\" [disabled]=\"customerEditDialogRef\">EDIT</button>\r\n\t\t</md-card-actions>\r\n\t</md-card>\r\n\t<md-card id=\"contacts\">\r\n\t\t<md-card-title>Contacts</md-card-title>\r\n\t\t<md-card-content>\r\n\t\t\t<div *ngFor=\"let contact of contacts, let i = index, let last = last\">\r\n\t\t\t\t<md-card>\r\n\t\t\t\t\t<md-card-title>{{contact.name}}</md-card-title>\r\n\t\t\t\t\t<md-card-content>\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<tr mdTooltip=\"Phone: {{contact.phone}}\">\r\n\t\t\t\t\t\t\t\t<td class=\"label\">Phone</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">{{contact.phone}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr mdTooltip=\"Fax: {{contact.fax}}\">\r\n\t\t\t\t\t\t\t\t<td class=\"label\">Fax</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">{{contact.fax}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td class=\"label\">E-Mail addresses</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">\r\n\t\t\t\t\t\t\t\t\t<span *ngFor=\"let emailAddress of contact.emailAddresses, let last = last\"  mdTooltip=\"{{emailAddress}}\">\r\n\t\t\t\t\t\t\t\t\t\t{{emailAddress}}\r\n\t\t\t\t\t\t\t\t\t\t<br *ngIf=\"!last\">\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<md-divider class=\"faded\"></md-divider>\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<tr mdTooltip=\"Town: {{contact.town}}\">\r\n\t\t\t\t\t\t\t\t<td class=\"label\">Town</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">{{contact.town}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr mdTooltip=\"ZIP: {{contact.zipCode}}\">\r\n\t\t\t\t\t\t\t\t<td class=\"label\">ZIP</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">{{contact.zipCode}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr mdTooltip=\"Street: {{contact.street}}\">\r\n\t\t\t\t\t\t\t\t<td class=\"label\">Street</td>\r\n\t\t\t\t\t\t\t\t<td class=\"value\">{{contact.street}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</md-card-content>\r\n\t\t\t\t\t<md-card-actions>\r\n\t\t\t\t\t\t<button md-button (click)=\"editContact(i)\" [disabled]=\"contactEditDialogRef\">EDIT</button>\r\n\t\t\t\t\t</md-card-actions>\r\n\t\t\t\t</md-card>\r\n\t\t\t\t<br *ngIf=!last>\r\n\t\t\t</div>\r\n\t\t</md-card-content>\r\n\t</md-card>\r\n\t<md-card id=\"details\">\r\n\t\t<md-card-title>Details</md-card-title>\r\n\t\t<md-card-content>\r\n\t\t\t<md-tab-group>\r\n\t\t\t\t<md-tab label=\"Addresses\">\r\n\t\t\t\t\t<md-list>\r\n\t\t\t\t\t\t<div *ngIf=\"!addresses.length\">No addresses have been registered yet.</div>\r\n\t\t\t\t\t\t<div *ngFor=\"let address of addresses\">\r\n\t\t\t\t\t\t\t<md-list-item>\r\n\t\t\t\t\t\t\t\t<md-icon md-list-avatar>contact_mail</md-icon>\r\n\t\t\t\t\t\t\t\t<h4 md-line>{{address.type}}</h4>\r\n\t\t\t\t\t\t\t\t<p md-line>{{address.town}}, {{address.zipCode}}, {{address.street}}</p>\r\n\t\t\t\t\t\t\t</md-list-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-list>\r\n\t\t\t\t</md-tab>\r\n\t\t\t\t<md-tab label=\"Foobar\">\r\n\t\t\t\t\tfoobar\r\n\t\t\t\t</md-tab>\r\n\t\t\t</md-tab-group>\r\n\t\t</md-card-content>\r\n\t</md-card>\r\n</div>\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<md-card>\n\t<md-card-content>\n\t\t<div class=\"row\" *ngFor=\"let row of rows, let rowIndex = index, let firstRow = first\">\n\t\t\t<div class=\"cell\" [class.first-row]=\"firstRow\" [class.first-cell]=\"firstCell\" [class.alive]=\"cell.alive\" *ngFor=\"let cell of row.cells, let cellIndex = index, let firstCell = first\"></div>\n\t\t</div>\n\t</md-card-content>\n\t<md-card-actions>\n\t\tIteration: {{iterationCount}}\n\t\t<button md-button (click)=\"initializeCells()\">INITIALIZE</button>\n\t\t<button md-button (click)=\"randomizeCells()\">RANDOMIZE</button>\n\t\t<button md-button (click)=\"calculateNextIteration()\">NEXT ITERATION</button>\n\t\t<button md-button (click)=\"start()\" [disabled]=\"iterationSubscription\">START</button>\n\t\t<button md-button (click)=\"stop()\"  [disabled]=\"!iterationSubscription\">STOP</button>\n\t\t<md-input-container>\n\t\t\t<input mdInput required type=\"number\" placeholder=\"Delay\" [disabled]=\"iterationSubscription\" [(ngModel)]=\"iterationTime\">\n\t\t\t<span md-suffix>seconds</span>\n\t\t</md-input-container>\n\t</md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<p>\r\n\thome works!\r\n</p>\r\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<md-divider *ngIf=\"!first && level === 1\" class=\"faded\"></md-divider>\r\n<md-nav-list [@expandChildren]=\"showChildren\" dense class=\"no-padding {{'level-' + level}}\">\r\n\t<md-list-item *ngIf=\"navigationitem.children.length > 0\" (click)=\"showChildren = !showChildren\">\r\n\t\t<md-icon md-list-icon>{{navigationitem.icon}}</md-icon>\r\n\t\t<span md-line>{{navigationitem.description}}</span>\r\n\t\t<md-icon [@rotateArrow]=\"showChildren\">keyboard_arrow_down</md-icon>\r\n\t</md-list-item>\r\n\t<md-list-item *ngIf=\"navigationitem.children.length === 0\" (click)=\"linkClicked.emit(null)\" [routerLink]=\"navigationitem.routerLink\">\r\n\t\t<md-icon md-list-icon>{{navigationitem.icon}}</md-icon>\r\n\t\t<span md-line>{{navigationitem.description}}</span>\r\n\t</md-list-item>\r\n</md-nav-list>\r\n<span *ngIf=\"showChildren\">\r\n\t<navigationitem *ngFor=\"let child of navigationitem.children\" [navigationitem]=\"child\" [level]=\"level + 1\" (linkClicked)=\"linkClicked.emit(null)\"></navigationitem>\r\n</span>\r\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<md-list-item>\r\n\t<md-icon md-list-avatar>assignment</md-icon>\r\n\t<h2 md-line>{{announcement.title}} | VHB: {{announcement.price}} €</h2>\r\n\t<p md-line>{{announcement.street}}, {{announcement.zipCode + ' ' + announcement.town}}</p>\r\n</md-list-item>\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"md-inline-form\">\r\n\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n\t\t<table class=\"full-width\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput required placeholder=\"Title\" maxLength=\"60\" formControlName=\"title\" #titleInput>\r\n\t\t\t\t\t<md-hint>{{titleInput.value.length}} / {{titleInput.maxLength}}</md-hint>\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput required placeholder=\"Price\" formControlName=\"price\">\r\n\t\t\t\t\t<span md-prefix>€&nbsp;</span>\r\n\t\t\t\t\t<span md-suffix>.00</span>\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<table class=\"full-width\" cellspacing=\"0\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput required placeholder=\"Street\" formControlName=\"street\">\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput required placeholder=\"City\" formControlName=\"town\">\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput required placeholder=\"ZIP Code\" maxLength=\"5\" formControlName=\"zipCode\" #zipInput>\r\n\t\t\t\t\t<md-hint>{{zipInput.value.length}} / {{zipInput.maxLength}}</md-hint>\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<table class=\"full-width\" cellspacing=\"0\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput type=\"email\" required placeholder=\"E-Mail\" formControlName=\"email\">\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t\t<td><md-input-container class=\"full-width\">\r\n\t\t\t\t\t<input mdInput type=\"password\" required placeholder=\"Password\" formControlName=\"password\">\r\n\t\t\t\t</md-input-container></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<md-checkbox labelPosition=\"before\" formControlName=\"anonymous\">Post announcement anonymously</md-checkbox>\r\n\t\t<div class=\"float-right\">\r\n\t\t\t<button md-raised-button type=\"reset\">Reset</button>\r\n\t\t\t<button md-raised-button color=\"primary\" type=\"submit\">Send</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n\t<md-card-content>\r\n\t\t<md-tab-group>\r\n\t\t\t<md-tab label=\"Announcements\">\r\n\t\t\t\t<md-list>\r\n\t\t\t\t\t<div *ngIf=\"!announcements.length\">No announcements have been posted yet.</div>\r\n\t\t\t\t\t<div *ngFor=\"let announcement of announcements, let last = last\">\r\n\t\t\t\t\t\t<stadtanzeiger-announcement [announcement]=\"announcement\"></stadtanzeiger-announcement>\r\n\t\t\t\t\t\t<md-divider *ngIf=\"!last\"></md-divider>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-list>\r\n\t\t\t</md-tab>\r\n\t\t\t<md-tab label=\"New announcement\">\r\n\t\t\t\t<stadtanzeiger-announcement-create (createAnnouncement)=\"createAnnouncement($event)\"></stadtanzeiger-announcement-create>\r\n\t\t\t</md-tab>\r\n\t\t</md-tab-group>\r\n\t</md-card-content>\r\n</md-card>\r\n"

/***/ })

},[1135]);
//# sourceMappingURL=main.bundle.js.map