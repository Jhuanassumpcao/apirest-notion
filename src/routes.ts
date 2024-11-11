import express from 'express';
import { TaskController } from './controllers/TaskController.js';
import { TaskService } from './services/TaskService.js';
import { NotionTaskRepository } from './repositories/NotionTaskRepository.js';

const router = express.Router();

const notionTaskRepository = new NotionTaskRepository();
const taskService = new TaskService(notionTaskRepository);
const taskController = new TaskController(taskService);

router.get('/tasks/:id', (req, res) => taskController.getTask(req, res));
router.put('/tasks/:id', (req, res) => taskController.updateTask(req, res));
router.delete('/tasks/:id', (req, res) => taskController.archiveTask(req, res));
router.post('/tasks', (req, res) => taskController.createTask(req, res));

export default router;
