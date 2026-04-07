import { userRepository } from "../repositories/user.repository";
import { CreateUserInput, UpdateUserInput } from "../schemas/user.schema";

export const userService = {
  async createUser(input: CreateUserInput) {
    return userRepository.create(input);
  },

  async updateUser(id: string, input: UpdateUserInput) {
    const data = { ...input };
    return userRepository.update(id, data);
  },

  getUsers: () => userRepository.findAll(),
  getUserById: (id: string) => userRepository.findById(id),
  deleteUser: (id: string) => userRepository.delete(id),
};
