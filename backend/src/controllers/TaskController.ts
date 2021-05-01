import { Request, Response } from "express";
import {Error} from 'mongoose';
import Tasks, {TaskModel} from '../models/Task';

interface Controller {
    getTasks: (request: TaskRequest, response: Response)=> void,
    createTask: (request: TaskRequest, response: Response)=> void,
    updateTask: (request: TaskRequest, response: Response)=> void,
    deleteTask: (request: TaskRequest, response: Response)=> void,
}
interface TaskRequest extends Request {
    body: TaskModel & { newTitle?: string }
}

function getMongooseError(err: Error.ValidationError): string {
    let [where] = Object.keys(err.errors);
    return err.errors[where].message;
}

const TaskController : Controller = {
    getTasks(_, res) {
        Tasks.find({}, (err, tasks)=>{
            if(err) {return res.status(400).send('Não foi possível buscar as tarefas')}
            res.status(200).send(tasks);
        });
    },
    createTask(req, res){
        const {title} = req.body;
        if(!title) return res.status(400).send('Título não informado');
        const task : TaskModel = req.body;
        Tasks.create(task)
        .then(createdTask => res.status(201).send(createdTask))
        .catch(err => res.status(400).send(getMongooseError(err)) );
    },
    updateTask(req, res){
        const {title, newTitle} = req.body;
        if(!title) return res.status(400).send('Título não informado');

        Tasks.findOneAndUpdate({title: title}, {...req.body, title: newTitle}, {new: true})
        .then( updatedTask => {
            if(!updatedTask)  return res.status(400).send('Tarefa não encontrada');
            res.status(203).send(updatedTask);
        })
        .catch(err => res.status(400).send(getMongooseError(err)));
    },
    deleteTask(req, res){
        const {title} = req.body
        if(!title) return res.status(400).send('Título não informado');

        Tasks.findOneAndDelete({title: title})
        .then( deletedTask => {
            if(!deletedTask)  return res.status(400).send('Tarefa não encontrada');
            res.status(204).send(undefined);
        })
        .catch(err => res.status(400).send(getMongooseError(err)));
    }
}

export default TaskController;