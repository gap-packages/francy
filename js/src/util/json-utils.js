/**
 * This class contains methods to deal with JSON.
 */
export default class JsonUtils {

  /**
   * Parses an input nd checks whether this input is valid and returns a JSON object.
   * @param input - the input to parse
   * @param partial - if the input is not a complete Francy JSON Object, defaults to false
   * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
   */
  static parse(input, partial = false) {
    if (!input) return;
    input = typeof input !== 'string' ? JSON.stringify(input) : input;
    input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
    let jsonRegex = /{(?:[^])*}/g;
    let match = jsonRegex.exec(input);
    if (match) {
      input = match[0];
      try {
        let json = JSON.parse(input);
        return json.mime === JsonUtils.MIME || partial ? json : undefined;
      }
      catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }
  }

  /**
   * Returns a static string representing the mime type supported by this package
   */
  static get MIME() {
    return 'application/vnd.francy+json';
  }
}
