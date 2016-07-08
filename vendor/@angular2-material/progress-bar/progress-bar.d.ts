/**
 * <md-progress-bar> component.
 */
export declare class MdProgressBar {
    /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
    private _value;
    value: number;
    /** Buffer value of the progress bar. Defaults to zero. */
    private _bufferValue;
    bufferValue: number;
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     */
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
export declare const MD_PROGRESS_BAR_DIRECTIVES: typeof MdProgressBar[];
