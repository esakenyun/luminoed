import { userRepository } from "../repositories/user.repository";
import { CreateUserInput, UpdateUserInput } from "../schemas/user.schema";

export const userService = {
  async createUser(input: CreateUserInput) {
    return userRepository.create(input);
  },

  async updateUser(id: number, input: UpdateUserInput) {
    const data = { ...input };
    return userRepository.update(id, data);
  },

  getUsers: () => userRepository.findAll(),
  getUserById: (id: number) => userRepository.findById(id),
  deleteUser: (id: number) => userRepository.delete(id),
};
