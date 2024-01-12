import { Post, User } from "./models";
import { connectToDB } from "./utils";

const users = [
    {
        id: 1,
        name: 'Aman Singh Bhogal'
    },
    {
        id: 2,
        name: 'XYZ'
    },
];

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: '......',
        userId: 1
    },
    {
        id: 2,
        title: 'Post 2',
        body: '......',
        userId: 2
    },
    {
        id: 3,
        title: 'Post 3',
        body: '......',
        userId: 1
    },
    {
        id: 4,
        title: 'Post 4',
        body: '......',
        userId: 2
    },
]



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
        const post = await Post.find({slug: Inslug});
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