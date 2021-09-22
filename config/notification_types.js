"use strict";
const notificationTypes = require("../enum/notification_types.json");

module.exports = {
  [notificationTypes["SUBSCRIBED_TO_YOU"]]: {},
  [notificationTypes["SUGGEST_NEW_TRANSLATION"]]: { is_reportable: true },
  [notificationTypes["SUGGEST_UPDATED_TRANSLATION"]]: { is_reportable: true },
  [notificationTypes["DELETED_YOUR_TRANSLATION"]]: { is_reportable: true },
  [notificationTypes["APPROVED_YOUR_TRANSLATION"]]: {},
  [notificationTypes["REJECTED_YOUR_TRANSLATION"]]: {},
  [notificationTypes["DELETED_YOUR_POST"]]: { is_reportable: true },
  [notificationTypes["COMPLETED_QUEST_WAS_VOTED_PRO"]]: {},
  [notificationTypes["COMPLETED_QUEST_WAS_VOTED_CONTRA"]]: {
    is_reportable: true,
  },
  [notificationTypes["COMPLETED_QUEST_WAS_ACCEPTED"]]: {},
  [notificationTypes["COMPLETED_QUEST_WAS_REJECTED"]]: {},
  [notificationTypes["LEVEL_UP"]]: {},
  [notificationTypes["GOT_EXPIERENCE"]]: {},
  [notificationTypes["INVITATION_TO_COMMUNITY"]]: {},
  [notificationTypes["GOT_NEW_COMMUNITY_ROLE"]]: {},
  [notificationTypes["SUGGEST_TAG"]]: { is_reportable: true },
  [notificationTypes["YOUR_COMMENT_HAS_BEEN_DELETED"]]: { is_reportable: true },
  [notificationTypes["WEBNAME_HIGHLIGHTED_AT_POST"]]: {},
  [notificationTypes["WEBNAME_HIGHLIGHTED_AT_COMMENT"]]: {},
  [notificationTypes["COMMENT_HAS_BEEN_ANSWERED"]]: {},
  [notificationTypes["POST_HAS_BEEN_ANSWERED"]]: {},
  [notificationTypes["STRIKE_FOR_YOU"]]: { is_reportable: true },
};
