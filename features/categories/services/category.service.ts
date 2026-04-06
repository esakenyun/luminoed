import { categoryRepository } from "../repositories/category.repository";
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from "../schemas/category.schema";

export const categoryService = {
  getCategories: () => categoryRepository.findAll(),
  getCategoryById: (id: string) => categoryRepository.findById(id),

  createCategory: (input: CreateCategoryInput) =>
    categoryRepository.create(input),

  updateCategory: (id: string, input: UpdateCategoryInput) =>
    categoryRepository.update(id, input),

  deleteCategory: (id: string) => categoryRepository.delete(id),
};
