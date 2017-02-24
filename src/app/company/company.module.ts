import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { CompanyComponent, ContactEditDialog, CustomerEditDialog } from './company.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [
		CompanyComponent,
		ContactEditDialog,
		CustomerEditDialog,
	],
	bootstrap: [
		CompanyComponent,
	],
	entryComponents: [
		ContactEditDialog,
		CustomerEditDialog,
	],
	providers: [
		{provide: LOCALE_ID, useValue: 'de-DE'},
	]
})
export class CompanyModule { }
