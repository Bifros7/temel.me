import { AfterContentInit, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { Dir } from '@angular2-material/core/rtl/dir';
import { MdError } from '@angular2-material/core/errors/error';
/** Exception thrown when two MdSidenav are matching the same side. */
export declare class MdDuplicatedSidenavError extends MdError {
    constructor(align: string);
}
/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 * Please refer to README.md for examples on how to use it.
 */
export declare class MdSidenav {
    private _elementRef;
    /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
    align: 'start' | 'end';
    /** Mode of the sidenav; whether 'over' or 'side'. */
    mode: 'over' | 'push' | 'side';
    /** Whether the sidenav is opened. */
    private _opened;
    /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
    onOpenStart: EventEmitter<void>;
    /** Event emitted when the sidenav is fully opened. */
    onOpen: EventEmitter<void>;
    /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
    onCloseStart: EventEmitter<void>;
    /** Event emitted when the sidenav is fully closed. */
    onClose: EventEmitter<void>;
    /**
     * @param _elementRef The DOM element reference. Used for transition and width calculation.
     *     If not available we do not hook on transitions.
     */
    constructor(_elementRef: ElementRef);
    /**
     * Whether the sidenav is opened. We overload this because we trigger an event when it
     * starts or end.
     */
    opened: boolean;
    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
     * rejected if it didn't). */
    open(): Promise<void>;
    /**
     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
     * rejected if it didn't).
     */
    close(): Promise<void>;
    /**
     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
     * close() when it's closed.
     * @param isOpen
     */
    toggle(isOpen?: boolean): Promise<void>;
    private _isClosing;
    private _isOpening;
    private _isClosed;
    private _isOpened;
    private _isEnd;
    private _modeSide;
    private _modeOver;
    private _modePush;
    private _transition;
    private _openPromise;
    private _openPromiseResolve;
    private _openPromiseReject;
    private _closePromise;
    private _closePromiseResolve;
    private _closePromiseReject;
}
/**
 * <md-sidenav-layout> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinate the backdrop and content styling.
 */
export declare class MdSidenavLayout implements AfterContentInit {
    private _dir;
    private _element;
    private _renderer;
    private _sidenavs;
    start: MdSidenav;
    end: MdSidenav;
    /** The sidenav at the start/end alignment, independent of direction. */
    private _start;
    private _end;
    /**
     * The sidenav at the left/right. When direction changes, these will change as well.
     * They're used as aliases for the above to set the left/right style properly.
     * In LTR, _left == _start and _right == _end.
     * In RTL, _left == _end and _right == _start.
     */
    private _left;
    private _right;
    constructor(_dir: Dir, _element: ElementRef, _renderer: Renderer);
    /** TODO: internal */
    ngAfterContentInit(): void;
    private _setLayoutClass(sidenav, bool);
    /** Validate the state of the sidenav children components. */
    private _validateDrawers();
    private _isSidenavOpen(side);
    /**
     * Return the width of the sidenav, if it's in the proper mode and opened.
     * This may relayout the view, so do not call this often.
     * @param sidenav
     * @param mode
     */
    private _getSidenavEffectiveWidth(sidenav, mode);
}
export declare const MD_SIDENAV_DIRECTIVES: (typeof MdSidenavLayout | typeof MdSidenav)[];
