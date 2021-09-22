"use strict";
const cur = require("../enum/community_user_roles.json");

module.exports = {
  [cur.FOUNDER]: [
    "can_post",
    "can_update",
    "can_delete",
    "can_manage_roles",
    "can_delete_comments",
    "can_delete_posts",
    "can_review",
    "can_invite",
    "can_see_logs",
  ],
  [cur.ADMIN]: [
    "can_post",
    "can_update",
    "can_manage_roles",
    "can_delete_comments",
    "can_delete_posts",
    "can_review",
    "can_invite",
    "can_see_logs",
  ],
  [cur.MODER]: [
    "can_post",
    "can_manage_roles",
    "can_delete_comments",
    "can_delete_posts",
    "can_review",
    "can_invite",
    "can_see_logs",
  ],
  [cur.REVIEWER]: ["can_post", "can_review", "can_comment"],
  [cur.USER]: ["can_post", "can_comment"],
  [cur.BANNED]: [],
};
