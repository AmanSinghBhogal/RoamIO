"use server";

import { connectToDB } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addBlog = async (formData) => {
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
        revalidatePath("/blog");

    } catch (error) {
        console.log(error);
        return {error: "Opps! Something Went Wrong!"};
    }

}

export const deleteBlog = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        
        connectToDB();
        await Post.findByIdAndDelete(id);
        console.log("Post deleted successfully!");
        revalidatePath("/blog");

    } catch (error) {
        console.log(error);
        return { error: "Could not delete the post!"};
    }
}