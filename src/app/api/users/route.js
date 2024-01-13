import { connectToDB } from "@/lib/utils";
import { User } from "@/lib/models";

export const dynamic = "force-dynamic";
export const revalidate = 1; //revalidate api every 1 second

export const GET = async (request) => {
    try {
        await connectToDB();

        const users = await User.find();

        return new Response(JSON.stringify(users), { status: 200 });
        
    } catch (error) {
        
        return new Response("Failed to fetch users data", { status: 500 });
    }
}