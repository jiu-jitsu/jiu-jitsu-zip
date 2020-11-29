
/**
 *
 */

const util = require("util")
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

	const encodedBuffer = await util.promisify(zlib.gzip)(message)
	const encodedString = encodedBuffer.toString(options.encoding)

	/**
	 *
	 */

	return encodedString

}
