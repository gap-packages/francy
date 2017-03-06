/**
 * This class contains methods to deal with JSON.
 */
export default class JsonUtils {

  /**
   * Parses an input nd checks whether this input is valid and returns a JSON object.
   * @param input - the input we want to parse
   * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
   */
  static parse(input) {
    input = typeof input !== "string" ? JSON.stringify(input) : input;
    input = input.replace(/[\n\r\b\s\\]+|(gap>)/g, '');
    let jsonRegex = /{(?:[^])*}/g;
    let match = jsonRegex.exec(input);
    if (match) {
      input = match[0];
      try {
        let json = JSON.parse(input);
        return json.agent === 'francy' ? json : undefined;
      } catch (e) {
        // noop
      }
    }
    return undefined;
  }
}
