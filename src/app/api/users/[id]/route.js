import { connectToDB } from "@/lib/utils";
import { User } from "@/lib/models";

export const revalidate = 1; //revalidate api every 1 second
// GET endpoint:  GET from 'http://localhost:3000/api/users/[id]'

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const user = await User.findById(params.id);

        if(!user){
            return new Response("User Not Found", { status: 404 });
        }

        return new Response(JSON.stringify(user), { status: 200 });

    } catch (error) {
        
        return new Response("Failed to fetch User data", { status: 500 });
    }
}