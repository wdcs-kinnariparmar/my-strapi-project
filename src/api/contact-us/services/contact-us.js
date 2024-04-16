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
        try {
            const entity = await strapi.entityService.create(
                // @ts-ignore
                "api::contact-us.contact-us",
                {data: contactInfo}
            );

            return { message: "Contact information created successfully", data: entity };
        } catch (err) {
            console.error('Error creating contact information:', err); 
            return { error: err.message };
        }
    },

    updateContactUs: async (id, updatedInfo) => {
        
        if (!id || !updatedInfo) {
            return { error: 'Missing required data: id and updated information' };
        }

        try {

            const entry = await strapi.entityService.update(
            // @ts-ignore
            "api::contact-us.contact-us",
            id,
            { data: updatedInfo }
            );

            return { message: "Contact information updated successfully", data: entry };
        } catch (err) {
            console.error('Error updating contact information:', err); 
            return { error: err.message };
        }
    },

    deleteContactUs: async (id) => {
        if (!id) {
            return { error: 'Missing required data: id' };
        }

        try {
            const entry = await strapi.entityService.delete(
                // @ts-ignore
                "api::contact-us.contact-us",
                id
            );

            return { message: "Contact information deleted successfully" };
        } catch (err) {
            console.error('Error deleting contact information:', err);
            return { error: err.message }; 
        }
    }
});
