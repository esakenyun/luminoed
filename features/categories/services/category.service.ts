import { categoryRepository } from "../repositories/category.repository";
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from "../schemas/category.schema";

export const categoryService = {
  getCategories: () => categoryRepository.findAll(),
  getCategoryById: (id: number) => categoryRepository.findById(id),

  createCategory: (input: CreateCategoryInput) =>
    categoryRepository.create(input),

  updateCategory: (id: number, input: UpdateCategoryInput) =>
    categoryRepository.update(id, input),

  deleteCategory: (id: number) => categoryRepository.delete(id),
};
