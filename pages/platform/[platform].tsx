import React from "react-bootstrap";
import Platforms from "../platforms";
import {useRouter} from "next/router";
import { getDatabase } from "../../src/database";

const Platform = (platform) => {
    const router = useRouter();
    console.log(platform);
    
    
    return (
        <div>{JSON.stringify(platform)}</div>
        )
}

export async function getServerSideProps (context) {
    const mongodb = await getDatabase();
    const gamesPlatform = context.params.platform;
    console.log("platform : " + context.params.platform);

    const platform = await mongodb.db().collection("platforms").findOne({slug: gamesPlatform});
    
    return {
        props: {
            platform: JSON.parse(JSON.stringify(platform))
        }
    }
}

export default Platform;

