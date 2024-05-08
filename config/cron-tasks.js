module.exports = {
  /**
   * Cron job with timezone example.
   * Every Monday at 1am for Asia/Dhaka timezone.
   * List of valid timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
   */

  myJob: {
    task: ({ strapi }) => {
      console.log("cron scheduler+++++");
      /* Add your own logic here */
    },
    //   options: {
    //     rule: "0 0 1 * * 1",
    //     tz: "Asia/Dhaka",
    //   },

    // only run once after 10 seconds
    // options: new Date(Date.now() + 10000),

    // options: {
    //   rule: "* * * * * *",
    //   // start 10 seconds from now
    //   start: new Date(Date.now() + 10000),
    //   // end 20 seconds from now
    //   end: new Date(Date.now() + 20000),
    // },
  },

  /**
   * Simple example.
   * Everyday at 11:15 AM.
   */

  "15 11 * * *": ({ strapi }) => {
    console.log("Everyday at 11:15 AM this cron will work");
    // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
  },
};
