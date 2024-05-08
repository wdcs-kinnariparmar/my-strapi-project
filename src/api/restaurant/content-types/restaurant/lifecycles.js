module.exports = {
    async afterCreate(event) {
        const {result} = event;
        if(result){
            await strapi.entityService.create(
                // @ts-ignore
                "api::user-journey.user-journey",
                {data: {
                    title: `restaurant a ${result.name} restaurant`
                }}
            );
        }
        try {
            await strapi.plugins['email'].services.email.send({
             // to: recipients
                to: "kinnari.parmar@webcluesinfotech.com",
                from: "kinnari.parmar@webcluesinfotech.com",
                subject: `A New ${result.name} Restaurant Created !`,
                text: `the Restaurant Name is ${result.name}`,
            })
        } catch(err) {
            console.log(err)
        }
    },
    async afterUpdate(event) {
        const {result} = event;
        if(result){
            await strapi.entityService.create(
                // @ts-ignore
                "api::user-journey.user-journey",
                {data: {
                    title: `update a ${result.name} restaurant`
                }}
            );
        }
        
    },
    async afterDelete(event) {
        const {result} = event;
        if(result){
            await strapi.entityService.create(
                // @ts-ignore
                "api::user-journey.user-journey",
                {data: {
                    title: `delete a ${result.name} restaurant`
                }}
            );
        }
        
    }
}