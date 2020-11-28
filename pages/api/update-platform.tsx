import { ObjectId } from "mongodb";
import { getDatabase } from "../../src/database";

export default async (request, response) => {
  const mongodb = await getDatabase();

  console.log(request.body)

  // const id = request.body._id;

  
  

  if (request.method === "POST") {
    const newPlatform = {
      name: request.body.name,
      slug: request.body.slug,
      platform_logo: {
        height: 1000,
        url: request.body.logo,
        width: 1000,
      },
    };
// console.log(mongodb.db().collection("platforms"));
// response.json(newPlatform);
// console.log("ID : "+request.body.id);

    await mongodb.db()
          .collection("platforms")
          .updateOne({ _id: new ObjectId(request.body.id) }, { $set: newPlatform } );


          // response.status(201).json(newPlatform);
        response.redirect("/admin");
        response.end();
  }else {
    response.statusCode = 405;
    response.end();
  }
};
