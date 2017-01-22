import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

export interface IContact {
	emailAddresses: Array<string>;
	fax: string;
	name: string;
	phone: string;
	street: string;
	town: string;
	zipCode: number;
}

export interface ICustomer {
	accountManagers: Array<{name: string, responsibility: string}>;
	clerk: string;
	emailAddresses: Array<string>;
	employees: string;
	fax: string;
	group: string;
	industry: string;
	location: string;
	name: string;
	number: number;
	phone: string;
	priceGroup: string;
	revenue: string;
	street: string;
	town: string;
	website: string;
	yearlySales: Array<{year: number, sales: number}>;
	zipCode: number;
}

@Component({
	selector: 'company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.css']
})
export class CompanyComponent {
	public contacts: Array<IContact> = [
		{
			emailAddresses: [
				'admin@temel.me',
				'pascal@temel.me',
			],
			fax: '',
			name: 'Pascal Temel',
			phone: '49 172 1234567',
			street: 'Foostraße 51',
			town: 'Grafenau',
			zipCode: 71120,
		},
		{
			emailAddresses: [
				'admin@temel.me',
				'pascal@temel.me',
			],
			fax: '',
			name: 'Pascal Temel',
			phone: '49 172 1234567',
			street: 'Foostraße 51',
			town: 'Grafenau',
			zipCode: 71120,
		},
		{
			emailAddresses: [
				'admin@temel.me',
				'pascal@temel.me',
			],
			fax: '',
			name: 'Pascal Temel',
			phone: '49 172 1234567',
			street: 'Foostraße 51',
			town: 'Grafenau',
			zipCode: 71120,
		},
		{
			emailAddresses: [
				'admin@temel.me',
				'pascal@temel.me',
			],
			fax: '',
			name: 'Pascal Temel',
			phone: '49 172 1234567',
			street: 'Foostraße 51',
			town: 'Grafenau',
			zipCode: 71120,
		}
	];
	public customer: ICustomer = {
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
