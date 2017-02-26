import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface ICell {
	alive: boolean;
}

export interface IRow {
	cells: Array<ICell>;
}

@Component({
	selector: 'conway',
	templateUrl: './conway.component.html',
	styleUrls: ['./conway.component.css']
})
export class ConwayComponent {
	public columnCount: number = 100;
	public iterationCount: number = 1;
	public iterationSubscription: Subscription;
	public iterationTime: number = 0;
	public rowCount: number = 60;
	public rows: Array<IRow> = [];

	private _temporaryRows: Array<IRow> = [];
	private _startCells: Array<{row: number, cell: number}> = [
		{ row: 3, cell: 28 },
		{ row: 4, cell: 26 },
		{ row: 4, cell: 28 },
		{ row: 5, cell: 16 },
		{ row: 5, cell: 17 },
		{ row: 5, cell: 24 },
		{ row: 5, cell: 25 },
		{ row: 5, cell: 38 },
		{ row: 5, cell: 39 },
		{ row: 6, cell: 15 },
		{ row: 6, cell: 19 },
		{ row: 6, cell: 24 },
		{ row: 6, cell: 25 },
		{ row: 6, cell: 38 },
		{ row: 6, cell: 39 },
		{ row: 7, cell: 4 },
		{ row: 7, cell: 5 },
		{ row: 7, cell: 14 },
		{ row: 7, cell: 20 },
		{ row: 7, cell: 24 },
		{ row: 7, cell: 25 },
		{ row: 8, cell: 4 },
		{ row: 8, cell: 5 },
		{ row: 8, cell: 14 },
		{ row: 8, cell: 18 },
		{ row: 8, cell: 20 },
		{ row: 8, cell: 21 },
		{ row: 8, cell: 26 },
		{ row: 8, cell: 28 },
		{ row: 9, cell: 14 },
		{ row: 9, cell: 20 },
		{ row: 9, cell: 28 },
		{ row: 10, cell: 15 },
		{ row: 10, cell: 19 },
		{ row: 11, cell: 16 },
		{ row: 11, cell: 17 },
	];

	constructor(private _cd: ChangeDetectorRef) {
		this.initializeCells();
	}

	public calculateNextIteration(): void {
		this._temporaryRows = JSON.parse(JSON.stringify(this.rows));

		this._cd.detach();

		this._temporaryRows.forEach((row, rowIndex) => {
			row.cells.forEach((cell, cellIndex) => {
				let alive: boolean = false;
				let aliveNeighbours = this._calculateAliveNeighbours(rowIndex, cellIndex);

				if (cell.alive) {
					if (aliveNeighbours < 2 || aliveNeighbours > 3) {
						alive = false;
					}
					else if (aliveNeighbours === 2 || aliveNeighbours === 3) {
						alive = true;
					}
				}
				else if (aliveNeighbours === 3) {
					alive = true;
				}

				this.rows[rowIndex].cells[cellIndex].alive = alive;
			});
		});

		this.iterationCount++;
		this._cd.reattach();
	}

	public initializeCells(): void {
		this.rows = [];

		for (let i = 0; i <= this.rowCount; i++) {
			let row: IRow = { cells: [] };

			for (let j = 0; j <= this.columnCount; j++) {
				let cell: ICell = { alive: false };
				row.cells.push(cell);
			}

			this.rows.push(row);
		}

		this._startCells.forEach((cell) => {
			this.rows[cell.row].cells[cell.cell].alive = true;
		})
	}

	public randomizeCells(): void {
		this.rows.forEach((row) => {
			row.cells.forEach((cell) => {
				cell.alive = (Math.random() > 0.8 ? true : false);
			});
		});
	}

	public start(): void {
		this.iterationSubscription = Observable.timer(0, this.iterationTime * 1000).subscribe(() => this.calculateNextIteration());
	}

	public stop(): void {
		if (this.iterationSubscription) {
			this.iterationSubscription.unsubscribe();
			this.iterationSubscription = null;
		}
	}

	private _calculateAliveNeighbours(row: number, cell: number): number {
		let aliveNeighbours: number = 0;

		// TOP
		if (this._temporaryRows[row-1]) {
			if (this._temporaryRows[row-1].cells[cell-1] && this._temporaryRows[row-1].cells[cell-1].alive) {
				aliveNeighbours++;
			}
			if (this._temporaryRows[row-1].cells[cell].alive) {
				aliveNeighbours++;
			}
			if (this._temporaryRows[row-1].cells[cell+1] && this._temporaryRows[row-1].cells[cell+1].alive) {
				aliveNeighbours++;
			}
		}

		// CENTER-LEFT
		if (this._temporaryRows[row].cells[cell-1] && this._temporaryRows[row].cells[cell-1].alive) {
			aliveNeighbours++;
		}

		// CENTER-RIGHT
		if (this._temporaryRows[row].cells[cell+1] && this._temporaryRows[row].cells[cell+1].alive) {
			aliveNeighbours++;
		}

		// BOTTOM
		if (this._temporaryRows[row+1]) {
			if (this._temporaryRows[row+1].cells[cell-1] && this._temporaryRows[row+1].cells[cell-1].alive) {
				aliveNeighbours++;
			}
			if (this._temporaryRows[row+1].cells[cell].alive) {
				aliveNeighbours++;
			}
			if (this._temporaryRows[row+1].cells[cell+1] && this._temporaryRows[row+1].cells[cell+1].alive) {
				aliveNeighbours++;
			}
		}

		return aliveNeighbours;
	}
}
