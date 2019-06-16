/**
 * This class contains methods to handle this application JSON data.
 */
export default class JsonUtils {

  /**
   * Parses an input, checks whether this input is valid and returns a JSON object.
   * 
   * @param input - the input to parse
   * @returns {object} - if the input is a valid JSON object returns an object
   */
  static parse(input) {
    if (!input) return;
    if (typeof input === 'string') {
      let jsonRegex = /{(?:[^])*}/g;
      let match = jsonRegex.exec(input);
      if (match) {
        input = JSON.parse(match[0]);
      } else {
        input = { output: input };
      }
    }
    return input;
  }

  /**
   * Returns a static string representing the mime type supported by this package
   * 
   * @returns {string} constant string 'application/vnd.francy+json'
   */
  static get MIME() {
    return 'application/vnd.francy+json';
  }
  
}

export const MIME = JsonUtils.MIME;
