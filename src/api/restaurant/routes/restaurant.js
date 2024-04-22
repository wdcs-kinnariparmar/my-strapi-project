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
    },
    find: {
      middlewares: ["global::my-middleware"],
    },
    update: {
      middlewares: ["api::restaurant.is-owner"],
    },
  },
});
