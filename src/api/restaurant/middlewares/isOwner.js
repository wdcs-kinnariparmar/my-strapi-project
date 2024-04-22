'use strict';

/**
 * `isOwner` middleware
 */

module.exports = (config, { strapi }) => {

  // Add your own logic here.
  return async (ctx, next) => {

    const isAuthenticated = ctx.state.isAuthenticated;

    if (!isAuthenticated) {
      return ctx.unauthorized("This action is unauthorized.");
    } else {
      const entryId = ctx.params.id ? ctx.params.id : undefined;
      let entry = {};
  
      if (entryId) {
        entry = await strapi.entityService.findOne(
          // replace the next line with your proper content-type identifier
          "api::restaurant.restaurant",
          entryId,
          { populate: "*" }
        );
      }

      return next();
    }
  };
};
