const path = require('path');

module.exports = unipath;

/**
 * Create a path.join partial.
 *
 * @param {...string} bases - Base paths
 * @returns {partial} Path join partial
 */
function unipath(...bases) {
  return partial;

  /**
   * Resolve base with paths.
   *
   * @param {...string} paths - Paths to join to base
   * @returns {string} Resolved path
   */
  function partial(...paths) {
    const baseList = bases.length ? bases : [ '.' ];
    const pathList = paths.length ? paths : [ '.' ];

    return path.resolve(path.join(...baseList, ...pathList));
  }
}
