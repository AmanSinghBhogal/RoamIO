import { addBlog, deleteBlog } from "@/lib/action";

const AddBlog = () => {
  return (
    <div>
        <form action={addBlog}>
            <input type="text" name="title" placeholder="Enter Post Title" />
            <input type="text" name="desc" placeholder="Enter Post Desc" />
            <input type="text" name="userId" placeholder="Enter User ID" />
            <input type="text" name="slug" placeholder="Enter Slug" />
            <input type="submit" value="Post" />
        </form>
        <form action={deleteBlog}>
            <input type="text" name="id" placeholder="Enter Post id" />
            <input type="submit" value="Delete Post" />
        </form>
    </div>
  )
}

export default AddBlog;