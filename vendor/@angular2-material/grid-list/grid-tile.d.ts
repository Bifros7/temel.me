import { Renderer, ElementRef, QueryList, AfterContentInit } from '@angular/core';
import { MdLine, MdLineSetter } from '@angular2-material/core/line/line';
export declare class MdGridTile {
    private _renderer;
    private _element;
    _rowspan: number;
    _colspan: number;
    constructor(_renderer: Renderer, _element: ElementRef);
    rowspan: number;
    colspan: number;
}
export declare class MdGridTileText implements AfterContentInit {
    private _renderer;
    private _element;
    /**
     *  Helper that watches the number of lines in a text area and sets
     * a class on the host element that matches the line count.
     */
    _lineSetter: MdLineSetter;
    _lines: QueryList<MdLine>;
    constructor(_renderer: Renderer, _element: ElementRef);
    ngAfterContentInit(): void;
}
