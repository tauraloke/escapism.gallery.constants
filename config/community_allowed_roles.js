"use strict";
const cur = require("../enum/community_user_roles.json");

module.exports = {
  [cur.FOUNDER]: [cur.ADMIN, cur.MODER, cur.REVIEWER, cur.USER, cur.BANNED],
  [cur.ADMIN]: [cur.REVIEWER, cur.MODER, cur.USER, cur.BANNED],
  [cur.MODER]: [cur.USER, cur.BANNED],
};
