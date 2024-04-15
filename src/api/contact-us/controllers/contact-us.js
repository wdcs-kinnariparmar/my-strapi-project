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
      throw new Error('Missing "contactInfo" property in request body');
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
    try {
      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .updateContactUs();

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },

  deleteContactUs: async (ctx, next) => {
    try {
      const data = await strapi
      // @ts-ignore
      .service("api::contact-us.contact-us")
      .deleteContactUs();

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
