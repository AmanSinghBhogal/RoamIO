import { connectToDB } from "./utils";
import { Post } from "./models";

export const addBlog = async (formData) => {
    "use server";
    const { title, desc, userId, slug } = Object.fromEntries(formData);
    console.log(`Title: ${title}, desc: ${desc}, userID: ${userId}, slug: ${slug}`);

    try {
        connectToDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("Status: 201, New Post Added!");

    } catch (error) {
        console.log(error);
        return {error: "Opps! Something Went Wrong!"};
    }

}