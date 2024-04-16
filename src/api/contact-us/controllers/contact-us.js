'use strict';

/**
 * A set of functions called "actions" for `contact-us`
 */

module.exports = {
  getContactUs: async (ctx, next) => {
    try {
      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .getContactUs();

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },

  createContactUs: async (ctx, next) => {
    try {
      const { contactInfo } = ctx.request.body;

      if (!contactInfo) {
        return ('Missing "contactInfo" property in request body');
      }

      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .createContactUs(contactInfo);

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },

  updateContactUs: async (ctx, next) => {
    const { contactInfo } = ctx.request.body;
    const { id } = ctx.params;

    if (!contactInfo || !id) {
      ctx.status = 400;
      ctx.body = 'Missing "contactInfo" or "id" property in request body';
      return;
    }

    try {

      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .updateContactUs(id, contactInfo);

      ctx.body = data;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { message: err.message || 'An error occurred during the update process' };
    }
  },

  deleteContactUs: async (ctx, next) => {
    try {
      const { id } = ctx.params;

      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .deleteContactUs(id);

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
