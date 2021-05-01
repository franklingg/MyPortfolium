import {Schema, model, Document} from 'mongoose';

export interface TaskModel extends Document {
    title: string,
    description?: string,
    priority?: number,
    done?: boolean
}

const TaskSchema = new Schema ({
    title: {
        type: String,
        unique: true,
        required: [true, "Título não informado"]
    },
    description: {
        type: String,
        required: false
    },
    priority:{
        type: Number,
        min: [1, 'Prioridade inferior ao permitido'],
        max: [5, 'Prioridade superior ao permitido'],
        default: 1,
        required: false
    },
    done:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default model<TaskModel>('Task', TaskSchema);