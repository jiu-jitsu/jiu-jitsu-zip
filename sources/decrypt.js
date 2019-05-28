
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

	return zlib.unzipSync(Buffer.from(message, `base64`)).toString(`utf8`)

}
