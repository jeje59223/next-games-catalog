import { getDatabase } from "../../src/database";

export default async (request, response) => {
    const mongodb = await getDatabase();
    // const platforms = await mongodb.db().collection("platforms").find().toArray();
    // console.log(platforms);

    if(request.method === "POST"){
        const createdPlatform =  {
            name: request.body.name,
            slug: request.body.slug,
            platform_logo: {
                height: 1000,
                url: request.body.logo,
                width: 1000
            }
        }
            
        //response.json(createdPlatform)
        // save db
        mongodb.db().collection("platforms").insertOne(createdPlatform);

        //response.status(201).json(createdPlatform);
        // 
    
        // on redirige vers la nouvelle platform
        response.redirect("/platform/"+request.body.slug);
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }
}

// request.body.name; // on recupere le nom de la platform