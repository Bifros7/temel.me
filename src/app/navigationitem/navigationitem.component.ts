import { Component, Input } from '@angular/core';

import { NavigationitemModel } from './navigationitem.model';

@Component({
	selector: 'navigationitem',
	templateUrl: './navigationitem.component.html',
	styleUrls: ['./navigationitem.component.css']
})
export class NavigationitemComponent {
	@Input() public navigationitem: NavigationitemModel;

	private _childrenVisible: boolean = false;
}
