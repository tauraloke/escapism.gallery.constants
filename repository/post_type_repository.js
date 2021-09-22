"use strict";
/**
 * @file Should be accessable from frontend, so it can not use DB
 */
const postTypes = require("escapism.gallery.constants/enum/post_types.json");

module.exports = {
  /**
   * Find post type
   * @param {BigInteger} id
   */
  getPostTypeById: (type_id) => {
    return Object.entries(postTypes).find((t) => t[1].id == type_id)[1];
  },

  /**
   * Calculate post type by its route
   * @param {String} stream_slug
   */
  getPostTypeIdBySlug: (stream_slug) => {
    let postTypeId = Object.keys(postTypes).find(
      (t) => postTypes[t].stream_slug === stream_slug
    );
    if (postTypeId === undefined) {
      throw "Cannot find post type!";
    }
    return postTypeId;
  },

  isPostTypeWithThisSlugCreatableViaMainForm: (stream_slug) => {
    return Object.keys(postTypes)
      .filter((t) => postTypes[t].creatable_via_main_form)
      .map((t) => postTypes[t].stream_slug)
      .includes(stream_slug);
  },
};
