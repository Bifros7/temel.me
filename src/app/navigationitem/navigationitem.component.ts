import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'

import { NavigationitemModel } from './navigationitem.model';

@Component({
	selector: 'navigationitem',
	templateUrl: './navigationitem.component.html',
	styleUrls: ['./navigationitem.component.css'],
	animations: [
		trigger('showChildren', [
			transition(':enter', [
				style({transform: 'translateX(-100%)', opacity: 0}),
				animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
			]),
		]),
		trigger('rotateArrow', [
			state('up' , style({ transform: 'rotate(180deg)' })),
			state('down', style({ transform: 'rotate(0deg)' })),
			transition('up => down', animate('200ms')),
			transition('down => up', animate('200ms')),
		])
	]
})
export class NavigationitemComponent {
	public childrenVisible: boolean = false;
	public arrowDirection: string = 'down';

	@Input() public first: boolean;
	@Input() public level: number;
	@Input() public navigationitem: NavigationitemModel;
	@Output() public linkClicked: EventEmitter<void> = new EventEmitter<void>();

	public toggle(): void {
		this.childrenVisible = !this.childrenVisible;
		this.arrowDirection = this.arrowDirection === 'up' ? 'down' : 'up';
	}
}
