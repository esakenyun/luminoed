import { blogRepository } from "../repositories/blog.repository";
import { CreateBlogInput, UpdateBlogInput } from "../schemas/blog.schema";

export const blogService = {
  getBlogs: () => blogRepository.findAll(),
  getBlogById: (id: number) => blogRepository.findById(id),
  getBlogBySlug: (slug: string) => blogRepository.findBySlug(slug),

  createBlog: (input: CreateBlogInput) => blogRepository.create(input),

  updateBlog: (id: number, input: UpdateBlogInput) =>
    blogRepository.update(id, input),

  deleteBlog: (id: number) => blogRepository.delete(id),
};
