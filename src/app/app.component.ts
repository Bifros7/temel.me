import { Component } from '@angular/core';

import { NavigationitemModel } from './navigationitem/navigationitem.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private _child: NavigationitemModel = new NavigationitemModel(
		[],
		'Child',
		'child_care',
		'/stadtanzeiger'
	)
	private _views: Array<NavigationitemModel> = [
		new NavigationitemModel(
			[this._child,this._child,this._child,this._child,this._child,this._child,],
			'CRM',
			'account_circle',
			'',
		),
		new NavigationitemModel(
			[this._child,this._child,this._child,this._child,this._child,this._child,],
			'ERP',
			'monetization_on',
			'',
		)
	];

	private _openGitHubRepository(): void {
		location.href = 'https://github.com/Bifros7/temel.me';
	}
}
