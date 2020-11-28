import { getDatabase } from "../../src/database";
import { ObjectId } from "mongodb";

export default async (request, response) => {
    const mongodb = await getDatabase();

    // const deletePlatform = await mongodb.db().collection("platforms").findOne({_id: request.body.id});
    // console.log(deletePlatform);
    
    
    console.log("ID : "+request.body.id);

    const deletePlatform = request.body.id;


    if (deletePlatform !== null) {
       await mongodb.db().collection("platforms")
       .deleteOne({ _id: new ObjectId(deletePlatform) })


        response.redirect("/admin");
        response.status(204).end();
        
      } else {
        response.status(404).end();
      }

    // response.json(request.body);
    // response.end();
}

// db.collection("platforms").deleteOne({ _id: platform._id });
