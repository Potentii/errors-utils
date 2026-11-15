export default class CodeError extends Error {

	/**
	 * @type {string}
	 */
	code;
	/**
	 * @type {string}
	 */
	message;
	/**
	 * @type {?Error}
	 */
	cause;
	/**
	 * @type {?*}
	 */
	meta;


	/**
	 *
	 * @param {string} code
	 * @param {?string} [message]
	 * @param {?Error} [cause]
	 * @param {?*} [meta]
	 */
	constructor(code, message, cause, meta) {
		super(message);
		this.name = this.constructor.name;
		this.code = code;
		this.message = message || '';
		this.cause = cause;
		this.meta = meta;

		if ('captureStackTrace' in Error)
			Error.captureStackTrace(this, CodeError);
		else
			this.stack = (new Error()).stack;

		if (cause?.stack) {
			if (!this.stack)
				this.stack = '';
			this.stack += `\nCaused by: ${cause?.stack}`;
		}
	}


	/**
	 * Converts a plain object into a new instance of this class
	 * @param {CodeError|object} obj
	 * @return {?CodeError}
	 */
	static from(obj) {
		if (!obj) return null;
		return new CodeError(
			obj.code,
			obj.message,
			obj.cause,
			obj.meta,
		);
	}


	/**
	 * Starts a new builder
	 * @return {CodeErrorBuilder}
	 */
	static builder() {
		return new CodeErrorBuilder();
	}

}


class CodeErrorBuilder {
	/**
	 * @type {?string}
	 */
	#code;
	/**
	 * @type {?string}
	 */
	#message;
	/**
	 * @type {?Error}
	 */
	#cause;
	/**
	 * @type {?*}
	 */
	#meta;


	/**
	 *
	 * @param {?string} code
	 * @return {CodeErrorBuilder}
	 */
	code(code) {
		this.#code = code;
		return this;
	}

	/**
	 *
	 * @param {?string} message
	 * @return {CodeErrorBuilder}
	 */
	message(message) {
		this.#message = message;
		return this;
	}

	/**
	 *
	 * @param {?Error} cause
	 * @return {CodeErrorBuilder}
	 */
	cause(cause) {
		this.#cause = cause;
		return this;
	}

	/**
	 *
	 * @param {?*} meta
	 * @return {CodeErrorBuilder}
	 */
	meta(meta) {
		this.#meta = meta;
		return this;
	}


	/**
	 * Builds the object
	 * @return {CodeError}
	 */
	build() {
		return new CodeError(this.#code, this.#message, this.#cause, this.#meta);
	}
}




