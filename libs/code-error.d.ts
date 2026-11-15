/**
 * Standardized error representation.
 */
declare class CodeError extends Error {

	/**
	 * Error code.
	 */
	code: string;

	/**
	 * Error message.
	 */
	message: string;

	/**
	 * Underlying error cause, if any.
	 */
	cause: Error | null;

	/**
	 * Meta info (optional).
	 */
	meta: any | null | undefined;

	/**
	 * Creates a new instance of CodeError.
	 *
	 * @param code The error code.
	 * @param message The descriptive error message.
	 * @param cause The underlying error cause.
	 * @param meta Optional meta info.
	 */
	constructor(code: string, message?: string | null | undefined, cause?: Error | null, meta?: any | null | undefined);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @param obj Plain object or instance to convert.
	 * @returns A new CodeError instance, or null if obj is falsy.
	 */
	static from(obj: CodeError | any | null): CodeError | null;

	/**
	 * Starts a new builder to construct an CodeError instance.
	 *
	 * @returns A new CodeErrorBuilder instance.
	 */
	static builder(): CodeErrorBuilder;
}

/**
 * Builder for constructing CodeError instances.
 */
declare class CodeErrorBuilder {

	/**
	 * Error code.
	 */
	#code: string | null | undefined;

	/**
	 * Error message describing the error.
	 */
	#message: string | null | undefined;

	/**
	 * Underlying error cause, if any.
	 */
	#cause: Error | null;

	/**
	 * Error message describing the error.
	 */
	#meta: any | null | undefined;

	/**
	 * Creates a new instance of CodeErrorBuilder.
	 */
	constructor();

	/**
	 * Sets the error code.
	 *
	 * @param code The error code.
	 * @returns The builder instance for chaining.
	 */
	code(code: string | null | undefined): CodeErrorBuilder;

	/**
	 * Sets the error message.
	 *
	 * @param message The descriptive error message.
	 * @returns The builder instance for chaining.
	 */
	message(message: string | null | undefined): CodeErrorBuilder;

	/**
	 * Sets the underlying error cause.
	 *
	 * @param cause The underlying Error instance.
	 * @returns The builder instance for chaining.
	 */
	cause(cause: Error | null): CodeErrorBuilder;

	/**
	 * Sets the meta info.
	 *
	 * @param meta The meta info.
	 * @returns The builder instance for chaining.
	 */
	meta(meta: any | null | undefined): CodeErrorBuilder;

	/**
	 * Builds the CodeError instance.
	 *
	 * @returns A new CodeError instance.
	 */
	build(): CodeError;
}

export default CodeError;