var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent, CustomerEditDialog } from './company.component';
var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MaterialModule,
            ReactiveFormsModule
        ],
        declarations: [
            CompanyComponent,
            CustomerEditDialog,
        ],
        bootstrap: [
            CompanyComponent,
        ],
        entryComponents: [
            CustomerEditDialog,
        ],
        providers: [
            { provide: LOCALE_ID, useValue: 'de-DE' },
        ]
    })
], CompanyModule);
export { CompanyModule };
//# sourceMappingURL=../../../../src/app/company/company.module.js.map