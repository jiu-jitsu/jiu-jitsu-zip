
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
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Array) {
		return message
	}

	/**
	 *
	 */

	if (!options.encoding) {
		options.encoding = "base64"
	}

	/**
	 *
	 */

	message = Buffer.from(message, options.encoding)

	/**
	 *
	 */

	const decodedBuffer = await new Promise((resolve) => zlib.unzip(message, resolve))
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
