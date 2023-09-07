import queryString from "query-string";
import { API } from "../constants";

/**
 *
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 *  @param {string} options.seed
 *  @param {string} options.nat
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOption = {
    results: API.RESULTS,
    page: API.PAGE,
    seed: API.KEY,
    nat: API.NAT,
  };
  const readOptions = { ...defaultOption, ...options };

  return fetch(`${API.URL}?${queryString.stringify(readOptions)}`).then(
    (response) => response.json()
  );
};
