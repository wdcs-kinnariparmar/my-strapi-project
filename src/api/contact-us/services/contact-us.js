'use strict';

/**
 * contact-us service
 */

module.exports = () => ({
    getContactUs: async () => {
        try {
            const entries = await strapi.entityService.findMany(
                // @ts-ignore
                "api::contact-us.contact-us"
            )
            return entries
        } catch (err) {
            return err;
        }
    },

    createContactUs: async (contactInfo) => {
        console.log("contactInfo",contactInfo);
        try {
            // const entry = await strapi.entityService.create(
            //     // @ts-ignore
            //     "api::contact-us.contact-us",
            //     contactInfo
            //   );
            // console.log("entries", entry);

            return { message: "Contact information created successfully", data: {} };

        } catch (err) {
            return err;
        }
    },

    updateContactUs: async () => {
        try {
            const entries = await strapi.entityService.findMany(
                // @ts-ignore
                "api::contact-us.contact-us"
            )
            return entries
        } catch (err) {
            return err;
        }
    },

    deleteContactUs: async () => {
        try {
            const entries = await strapi.entityService.findMany(
                // @ts-ignore
                "api::contact-us.contact-us"
            )
            return entries
        } catch (err) {
            return err;
        }
    }
});
