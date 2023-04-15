import SanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";


 export const client =  SanityClient({
    projectId:'',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token:''
});

const  builder = ImageUrlBuilder(client);

export const urlFor = (source) =>builder.image(source);