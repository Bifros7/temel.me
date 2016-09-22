import { QueryList, ElementRef, Renderer, AfterContentInit } from '@angular/core';
import { MdLine, MdLineSetter } from '@angular2-material/core/line/line';
export declare class MdList {
}
export declare class MdListAvatar {
}
export declare class MdListItem implements AfterContentInit {
    private _renderer;
    private _element;
    _lineSetter: MdLineSetter;
    _lines: QueryList<MdLine>;
    private _hasAvatar;
    constructor(_renderer: Renderer, _element: ElementRef);
    /** TODO: internal */
    ngAfterContentInit(): void;
}
export declare const MD_LIST_DIRECTIVES: (typeof MdList | typeof MdListItem)[];
