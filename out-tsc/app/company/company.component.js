var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
var CompanyComponent = (function () {
    function CompanyComponent(_dialog, _viewContainerRef) {
        this._dialog = _dialog;
        this._viewContainerRef = _viewContainerRef;
        this.contacts = [
            {
                emailAddresses: [
                    'admin@temel.me',
                    'pascal@temel.me',
                ],
                fax: '',
                name: 'Pascal Temel',
                phone: '49 172 1234567',
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
                phone: '49 172 1234567',
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
                phone: '49 172 1234567',
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
                phone: '49 172 1234567',
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
            _this._customerEditDialogCloseResult = result;
            console.log(_this._customerEditDialogCloseResult);
            _this.customerEditDialogRef = null;
        });
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    Component({
        selector: 'company',
        templateUrl: './company.component.html',
        styleUrls: ['./company.component.css']
    }),
    __metadata("design:paramtypes", [MdDialog,
        ViewContainerRef])
], CompanyComponent);
export { CompanyComponent };
var CustomerEditDialog = (function () {
    function CustomerEditDialog(dialogRef, _formBuilder) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        var customer = dialogRef.config.data;
        this.form = this._formBuilder.group({
            accountManagers: [customer.accountManagers],
            clerk: [customer.clerk],
            emailAddresses: [customer.emailAddresses],
            employees: [customer.employees],
            fax: [customer.fax],
            group: [customer.group],
            industry: [customer.industry],
            location: [customer.location, Validators.required],
            name: [customer.name, Validators.required],
            number: [customer.number, Validators.required],
            phone: [customer.phone, Validators.required],
            priceGroup: [customer.priceGroup],
            revenue: [customer.revenue],
            street: [customer.street, Validators.required],
            town: [customer.town, Validators.required],
            website: [customer.website],
            yearlySales: [customer.yearlySales],
            zipCode: [customer.zipCode, Validators.required],
        });
    }
    return CustomerEditDialog;
}());
CustomerEditDialog = __decorate([
    Component({
        selector: 'customer-edit-dialog',
        template: "\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"dialogRef.close(form.value)\">\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Name\" formControlName=\"name\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Phone\" formControlName=\"phone\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Fax\" formControlName=\"fax\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Website\" formControlName=\"website\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Town\" formControlName=\"town\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"ZIP\" formControlName=\"zipCode\">\n\t\t\t</md-input-container>\n\t\t\t<md-input-container class=\"full-width\">\n\t\t\t\t<input mdInput required placeholder=\"Street\" formControlName=\"street\">\n\t\t\t</md-input-container>\n\t\t\t<md-dialog-actions>\n\t\t\t\t<button md-button type=\"reset\" (click)=\"dialogRef.close()\">Close</button>\n\t\t\t\t<button md-button type=\"submit\">Save</button>\n\t\t\t</md-dialog-actions>\n\t\t</form>\n\t",
        styles: [
            'p { font-family: Roboto, "Helvetica Neue", sans-serif; }'
        ]
    }),
    __metadata("design:paramtypes", [MdDialogRef,
        FormBuilder])
], CustomerEditDialog);
export { CustomerEditDialog };
//# sourceMappingURL=../../../../src/app/company/company.component.js.map