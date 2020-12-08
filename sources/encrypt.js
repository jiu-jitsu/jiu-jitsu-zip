
/**
 *
 */

const util = require("util")
const zlib = require("zlib")

/**
 *
 */

module.exports = async (value) => {

	/**
	 *
	 */

	if (!value) {
		return value
	}

	/**
	 *
	 */

	if (value.constructor === Object) {
		value = JSON.stringify(value)
	}

	/**
	 *
	 */

	if (value.constructor === Array) {
		value = JSON.stringify(value)
	}

	/**
	 * @type {Buffer} encodedBuffer
	 */

	const encodedBuffer = await util.promisify(zlib.gzip)(value)
	const encodedString = encodedBuffer.toString("base64")

	/**
	 *
	 */

	return encodedString

}
