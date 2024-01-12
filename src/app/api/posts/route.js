import { connectToDB } from "@/lib/utils";
import { Post } from "@/lib/models";

export const dynamic = "force-dynamic";
export const revalidate = 1; //revalidate api every 1 second

export const GET = async (request) => {
    try {
        await connectToDB();

        const posts = await Post.find();

        return new Response(JSON.stringify(posts), { status: 200 });
        
    } catch (error) {
        
        return new Response("Failed to fetch posts data", { status: 500 });
    }
}