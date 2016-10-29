import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CompanyComponent, CustomerEditDialog } from './company.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule.forRoot(),
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
		{provide: LOCALE_ID, useValue: 'de-DE'},
	]
})
export class CompanyModule { }
