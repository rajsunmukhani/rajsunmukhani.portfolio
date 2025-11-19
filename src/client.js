// code for sanity setup in frontend


// sanityClient is now updated to createClient
import  {createClient}  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url/";

export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2025-11-14',
    useCdn:false,
    token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);