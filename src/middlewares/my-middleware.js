module.exports = (config, { strapi }) => {
  return async (ctx, next) => {

    const allowedRoutes = [
      "about",
      "demo",
      "products",
      "categories",
      "restaurants",
    ];
    const url = ctx.request.url.split("/")[2];

    if (allowedRoutes.includes(url)) {
      try {
        // Extract authorization header
        const authorizationHeader = ctx.request.headers.authorization;

        // Check for token and Bearer prefix
        if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
          const token = authorizationHeader.split(" ")[1]; // Extract token

          // Verify JWT token
          const decoded = await strapi.plugins[
            "users-permissions"
          ].services.jwt.verify(token);

          if (decoded && decoded.id) {
            const { id } = decoded;
            const user = await strapi.entityService.findOne(
              "plugin::users-permissions.user",
              id,
              { populate: "*" }
            );
            ctx.state.user = user;
            // Check if user is logged in
            if (!ctx.state.user) {
              return ctx.unauthorized(
                "You must be logged in to access this resource-=-=-=-="
              );
            }
            return next(); // Allow access if token is valid
          }
        }
      } catch (err) {
        console.error("Error verifying JWT token:", err);
        return ctx.unauthorized("Invalid or expired token"); // Handle invalid token
      }
    }
    return next();// Allow access to non-restricted routes
  };
};
