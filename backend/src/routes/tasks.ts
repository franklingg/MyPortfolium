
import {Router} from 'express';
import TaskController from '../controllers/TaskController';

const router = Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.createTask);
router.put('/', TaskController.updateTask);
//router.delete('/', TaskController.deleteTask);

export default router;