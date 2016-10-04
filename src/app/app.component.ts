import { Component } from '@angular/core';

import { NavigationitemModel } from './navigationitem/navigationitem.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private _child1: NavigationitemModel = new NavigationitemModel(
		[],
		'Child 1',
		'child_care',
		'/'
	)
	private _child2: NavigationitemModel = new NavigationitemModel(
		[],
		'Child 2',
		'donut_small',
		'/stadtanzeiger'
	)
	private _child3: NavigationitemModel = new NavigationitemModel(
		[],
		'Child 3',
		'event',
		'/home'
	)
	private _childNested: NavigationitemModel = new NavigationitemModel(
		[this._child1, this._child2, this._child3,],
		'Nested child',
		'view_list',
		'/stadtanzeiger'
	)

	private _views: Array<NavigationitemModel> = [
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'CRM',
			'account_circle',
			'',
		),
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'ERP',
			'monetization_on',
			'',
		),
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'CRM',
			'account_circle',
			'',
		),
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'ERP',
			'monetization_on',
			'',
		),
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'CRM',
			'account_circle',
			'',
		),
		new NavigationitemModel(
			[this._child1, this._child2, this._childNested, this._child3,],
			'ERP',
			'monetization_on',
			'',
		),
	];

	private _openGitHubRepository(): void {
		location.href = 'https://github.com/PascalTemel/temel.me';
	}
}
