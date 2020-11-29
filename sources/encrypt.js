
/**
 *
 */

const zlib = require("zlib")

/**
 *
 */

module.exports = async (message, options = {}) => {

	/**
	 *
	 */

	if (!message) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Object) {
		message = JSON.stringify(message)
	}

	/**
	 *
	 */

	if (message.constructor === Array) {
		message = JSON.stringify(message)
	}

	/**
	 *
	 */

	if (!options.encoding) {
		options.encoding = "base64"
	}

	/**
	 * @type {Buffer} encodedBuffer
	 */

	const encodedBuffer = await new Promise((resolve) => zlib.gzip(message, resolve))
	const encodedString = encodedBuffer.toString(options.encoding)

	/**
	 *
	 */

	return encodedString

}
