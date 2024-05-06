"use strict";

/**
 * restaurant router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// @ts-ignore
module.exports = createCoreRouter("api::restaurant.restaurant", {
  config: {
    findOne: {
      middlewares: ["api::restaurant.is-owner"],
      policies: ['api::restaurant.is-authenticated']
    },
    find: {
      middlewares: ["global::my-middleware"],
      policies: ['global::global-is-authenticated']
    },
    update: {
      middlewares: ["api::restaurant.is-owner"],
    },
  },
});
