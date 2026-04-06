import { blogRepository } from "../repositories/blog.repository";
import { CreateBlogInput, UpdateBlogInput } from "../schemas/blog.schema";

export const blogService = {
  getBlogs: () => blogRepository.findAll(),
  getBlogById: (id: string) => blogRepository.findById(id),

  createBlog: (input: CreateBlogInput) => blogRepository.create(input),

  updateBlog: (id: string, input: UpdateBlogInput) =>
    blogRepository.update(id, input),

  deleteBlog: (id: string) => blogRepository.delete(id),
};
