import { NotionTaskRepository } from '../repositories/NotionTaskRepository';
import { TaskProperties } from '../types/NotionTypes';

export class TaskService {
  constructor(private taskRepository: NotionTaskRepository) {}

  async getTaskById(id: number) {
    const task = await this.taskRepository.findTaskById(id);
    if (!task) throw new Error('Tarefa não encontrada');
    return task;
  }

  async updateTaskById(id: number, properties: TaskProperties) {
    const task = await this.getTaskById(id);
    return await this.taskRepository.updateTask(task.id, properties);
  }

  async archiveTaskById(id: number) {
    const task = await this.getTaskById(id);
    return await this.taskRepository.archiveTask(task.id);
  }

  async createTask(properties: TaskProperties) {
    return await this.taskRepository.createTask(properties);
  }
}
