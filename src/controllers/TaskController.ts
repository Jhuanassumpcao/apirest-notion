import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskProperties } from '../types/NotionTypes';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async getTask(req: Request, res: Response) {
    try {
      const task = await this.taskService.getTaskById(Number(req.params.id));
      res.json(task);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const properties: TaskProperties = req.body;
      const updatedTask = await this.taskService.updateTaskById(Number(req.params.id), properties);
      res.json(updatedTask);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  async archiveTask(req: Request, res: Response) {
    try {
      const archivedTask = await this.taskService.archiveTaskById(Number(req.params.id));
      res.json(archivedTask);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const properties: TaskProperties = req.body;
      const newTask = await this.taskService.createTask(properties);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
