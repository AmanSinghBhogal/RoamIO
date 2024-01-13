import { Post, User } from "./models";
import { connectToDB } from "./utils";

export const getPosts = async () => {
    try {
        connectToDB();
        const Posts = await Post.find();
        return Posts;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts");
    }
};

export const getPost = async (Inslug) => {
    try {
        connectToDB();
        const post = await Post.findOne({slug: Inslug});
        return post;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post by Slug");
    }
}

export const getUsers = async () => {
    try {

        connectToDB();
        const users = await User.find();
        return users;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch all users");
    }
}

export const getUser = async (id) => {
    try {

        connectToDB();
        const user = await User.findById(id);
        return user;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user by _id");
    }
}