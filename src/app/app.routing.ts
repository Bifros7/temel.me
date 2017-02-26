import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { ConwayComponent } from './conway/conway.component';
import { HomeComponent } from './home/home.component';
import { StadtanzeigerComponent } from './stadtanzeiger/stadtanzeiger.component';

const appRoutes: Routes = [
	{ path: 'company', component: CompanyComponent },
	{ path: 'conway', component: ConwayComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'stadtanzeiger', component: StadtanzeigerComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', component: HomeComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
