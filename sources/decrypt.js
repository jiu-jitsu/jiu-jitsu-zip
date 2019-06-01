
/**
 *
 */

const zlib = require(`zlib`)

/**
 *
 */

module.exports = (message, options) => {

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

	const decoded = zlib.unzipSync(Buffer.from(message, `base64`)).toString(`utf8`)

	/**
	 *
	 */

	try {
		return JSON.parse(decoded)
	} catch (cause) {
		return decoded
	}

}
