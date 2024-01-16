import { connectToDB } from "@/lib/utils";
import { Post } from "@/lib/models";

export const revalidate = 1; //revalidate api every 1 second
// GET endpoint:  GET from 'http://localhost:3000/api/posts/[slug]'

export const GET = async (request, { params }) => {
    try {
        connectToDB();
        const post = await Post.find({slug: params.slug});

        if(!post.length){
            return new Response("Post Not Found", { status: 404 });
        }

        return new Response(JSON.stringify(post), { status: 200 });

    } catch (error) {
        
        return new Response("Failed to fetch post data", { status: 500 });
    }
}

// Patch Endpoint
export const PATCH = async (request, { params }) => {

    const { title, desc, img } = await request.json();

    try {
        connectToDB();
        
        const existingPost = await Post.find({slug: params.slug});

        if(!existingPost.length){
            return new Response("Post Not Found", { status: 404 });
        }

        existingPost.title = title;
        existingPost.desc = desc;
        existingPost.img = img;

        await existingPost.save();

        return new Response(JSON.stringify(existingPost), { status: 200 });   

    } catch (error) {
        
        return new Response("Failed to update post.", { status: 500 });

    }
}

// Delete Endpoint:
export const DELETE = async (request, { params }) => {
    try {
        connectToDB();

        await Post.findByIdAndDelete(params.id);

        return new Response("Post Deleted Successfully", { status: 200 });
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to Delete Post!", { status: 500 });
    }
}