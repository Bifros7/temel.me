import { ChangeDetectorRef, OnDestroy } from '@angular/core';
export declare type ProgressCircleMode = 'determinate' | 'indeterminate';
/**
 * <md-progress-circle> component.
 */
export declare class MdProgressCircle implements OnDestroy {
    private _changeDetectorRef;
    /** The id of the last requested animation. */
    private _lastAnimationId;
    /** The id of the indeterminate interval. */
    private _interdeterminateInterval;
    /** The current path value, representing the progres circle. */
    private _currentPath;
    currentPath: string;
    /** Clean up any animations that were running. */
    ngOnDestroy(): void;
    /**
     * Value of the progress circle.
     *
     * Input:number
     * _value is bound to the host as the attribute aria-valuenow.
     */
    private _value;
    value: number;
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     */
    mode: ProgressCircleMode;
    private _mode;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    private _animateCircle(animateFrom, animateTo, ease, duration, rotation);
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    private _startIndeterminateAnimation();
    /**
     * Removes interval, ending the animation.
     */
    private _cleanupIndeterminateAnimation();
}
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-circle> instance.
 */
export declare class MdSpinner extends MdProgressCircle {
    constructor(changeDetectorRef: ChangeDetectorRef);
}
export declare const MD_PROGRESS_CIRCLE_DIRECTIVES: typeof MdProgressCircle[];
