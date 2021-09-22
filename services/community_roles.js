/**
 * @file Should be accessable from frontend
 */
"use strict";
const RIGHTS = require("../config/community_user_access.js");

module.exports = {
  /**
   * Check a user right in a community
   * @param {CommunityUser} userlink
   * @param {String} right
   * @returns {Boolean}
   */
  hasUserlinkThisRight: (userlink, right) => {
    if (!userlink || !RIGHTS[userlink.role]) {
      return false;
    }
    return RIGHTS[userlink.role].includes(right);
  },

  /**
   * Get list of role IDs with this right
   * @param {String} right
   */
  getRolesWithThisRight: (right) => {
    return Object.keys(RIGHTS).filter((k) => RIGHTS[k].includes(right));
  },
};
