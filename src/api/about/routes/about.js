'use strict';

/**
 * about router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreRouter('api::about.about');
