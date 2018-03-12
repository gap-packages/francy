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
    if (typeof input === 'string') {
      input = input.replace(/[\n\r\b]+|(gap>)/g, '');
      let jsonRegex = /{(?:[^])*}/g;
      let match = jsonRegex.exec(input);
      if (!match) return;
      input = JSON.parse(match[0]);
    }
    return input.mime === JsonUtils.MIME || partial ? input : undefined;
  }

  /**
   * Returns a static string representing the mime type supported by this package
   */
  static get MIME() {
    return 'application/vnd.francy+json';
  }
}
