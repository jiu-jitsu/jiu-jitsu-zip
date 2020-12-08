
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
		return value
	}

	/**
	 *
	 */

	if (value.constructor === Array) {
		return value
	}

	/**
	 *
	 */

	value = Buffer.from(value, "base64")

	/**
	 *
	 */

	const decodedBuffer = await util.promisify(zlib.unzip)(value)
	const decodedString = decodedBuffer.toString()

	/**
	 *
	 */

	try {
		return JSON.parse(decodedString)
	} catch (error) {
		return decodedString
	}

}
