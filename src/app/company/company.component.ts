import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector: 'company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.css']
})
export class CompanyComponent {
	public customer: any = {
		number: 248291,
		name: 'Foobarbaz AG testtest 123456789',
		phone: '+49 172 1234567',
		fax: '+49 151 0958253',
		website: 'www.google.com',
		emailAddresses: [
			'foo@bar.baz',
			'cyka@blyat.com',
		],
		group: 'Reseller',
		priceGroup: 'B',
		industry: 'Pharmaceutical',
		revenue: '250m - 499m',
		employees: '1000 - 1999',
		accountManagers: [
			{
				name: 'Foo bar',
				responsibility: 'Workstations, Peripherals'
			},
			{
				name: 'Bin baz',
				responsibility: 'Servers, Infrastructure'
			},
		],
		location: 'Böblingen',
		clerk: 'Angela Merkel',
		town: 'Öhringen',
		zipCode: 74613,
		street: 'Weygangstraße 3',
		yearlySales: [
			{
				year: 2012,
				sales: 233439.82
			},
			{
				year: 2013,
				sales: 504221.49
			},
			{
				year: 2014,
				sales: 349505.02
			},
			{
				year: 2015,
				sales: 683694.205
			},
			{
				year: 2016,
				sales: 90852.198
			},
		],
	}
	public customerEditDialogRef: MdDialogRef<CustomerEditDialog>;
	private _customerEditDialogCloseResult: string;

	public constructor(
		private _dialog: MdDialog,
		private _viewContainerRef: ViewContainerRef
	) { }

	public editCustomer(): void {
		this.customerEditDialogRef = this._dialog.open(CustomerEditDialog);

		this.customerEditDialogRef.afterClosed().subscribe((result) => {
			this._customerEditDialogCloseResult = result;
			this.customerEditDialogRef = null;
		});
	}
}

@Component({
	selector: 'customer-edit-dialog',
	template: `
		<p>Not implemented yet</p>
		<button md-button (click)="dialogRef.close('foo')">Close dialog</button>
	`,
	styles: [
		'p { font-family: Roboto, "Helvetica Neue", sans-serif; }'
	]
})
export class CustomerEditDialog {
	constructor(public dialogRef: MdDialogRef<CustomerEditDialog>) { }
}
