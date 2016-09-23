import { animate, Component, EventEmitter, Input, Output, state, style, transition, trigger } from '@angular/core';

import { NavigationitemModel } from './navigationitem.model';

@Component({
	selector: 'navigationitem',
	templateUrl: './navigationitem.component.html',
	styleUrls: ['./navigationitem.component.css'],
	animations: [
		trigger('rotateArrow', [
			state('true' , style({ transform: 'rotate(180deg)' })),
			state('false', style({ transform: 'rotate(0deg)' })),
			transition('* => *', animate('300ms')),
		]),
		trigger('expandChildren', [
			state('true', style({ transform: 'translateX(0)' })),
			transition('void => *', [
				style({ transform: 'translateX(-100%)' }),
				animate('200ms')
			]),
		])
	]
})
export class NavigationitemComponent {
	@Input() public navigationitem: NavigationitemModel;
	@Output() public linkClicked: EventEmitter<void> = new EventEmitter<void>();

	private _childrenVisible: boolean = false;
}
