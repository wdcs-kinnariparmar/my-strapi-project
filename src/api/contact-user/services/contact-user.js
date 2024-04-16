"use strict";

/**
 * contact-user service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  // @ts-ignore
  "api::contact-user.contact-user",
  ({ strapi }) => ({
    async find(...args) {
      const { results, pagination } = await super.find(...args);

      const filteredResults = results.map((contact) => ({
        name: contact.name,
        email: contact.email,
        isDeleted: contact.isDeleted,
      }));

      return { results: filteredResults, pagination };
    },

    async create(data) {
      const { data: contactInfo } = data;
      // @ts-ignore
      if (
        !contactInfo.email ||
        // @ts-ignore
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)
      ) {
        // throw new Error("Invalid email format");
        return "Invalid email format";
      }

      // Call the original create method from Strapi
      // @ts-ignore
      const createdContact = await strapi.entityService.create("api::contact-user.contact-user",
        { data: contactInfo }
      );

      return createdContact;
    },

    async update(id, data) {
      if (data && data.data) {
        const { data: contactInfo } = data;

        const updateData = Object.keys(contactInfo)
          .filter((key) => key !== "id")
          .reduce((acc, key) => {
            acc[key] = contactInfo[key];
            return acc;
          }, {});
        const updatedContact = await super.update(id, { data: updateData });

        return updatedContact;
      } else {
        return Promise.reject(new Error("Invalid request body"));
      }
    },

    async delete(id) {
      // Find the entry to be deleted
      // @ts-ignore
      const contactToDelete = await strapi.entityService.findOne("api::contact-user.contact-user",
        id
      );

      if (!contactToDelete) {
        return Promise.reject(new Error("Entry not found"));
      }

      contactToDelete.isDeleted = true;
      // @ts-ignore
      await strapi.entityService.update("api::contact-user.contact-user", id, {
        data: contactToDelete,
      });

      return { message: "Entry marked as Deleted" };
    },
  })
);
