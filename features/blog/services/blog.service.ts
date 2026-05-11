import { blogRepository } from "../repositories/blog.repository";
import { CreateBlogInput, UpdateBlogInput } from "../schemas/blog.schema";

export const blogService = {
  // ─── Admin ──────────────────────────────────────────────────────────────────
  getBlogs: () => blogRepository.findAll(),
  getBlogById: (id: number) => blogRepository.findById(id),
  getBlogBySlug: (slug: string) => blogRepository.findBySlug(slug),

  // ─── Public listing (paginated) ─────────────────────────────────────────────
  /**
   * Returns `{ blogs, total, hasMore }` for the public blog listing page.
   * Delegates to `findPublished` which leverages the composite DB index and
   * omits the heavy `content` field so the payload stays small.
   */
  getPublishedBlogs: async (page: number, limit: number) => {
    const [blogs, total] = await blogRepository.findPublished(page, limit);
    return {
      blogs,
      total,
      hasMore: page * limit < total,
    };
  },

  // ─── Mutations ───────────────────────────────────────────────────────────────
  createBlog: (input: CreateBlogInput) => blogRepository.create(input),
  updateBlog: (id: number, input: UpdateBlogInput) =>
    blogRepository.update(id, input),
  deleteBlog: (id: number) => blogRepository.delete(id),
};
