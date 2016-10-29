import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CompanyComponent } from './company.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule.forRoot(),
	],
	declarations: [
		CompanyComponent,
	],
	bootstrap: [
		CompanyComponent,
	],
	providers: [
		{provide: LOCALE_ID, useValue: 'de-DE'},
	]
})
export class CompanyModule { }
