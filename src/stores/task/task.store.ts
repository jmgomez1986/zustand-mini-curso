import { create, StateCreator } from 'zustand';
import { Task } from '../../interfaces';

interface TaskState {
  task: Record<string, Task>;
}

interface TaskActions {}

type TaskStore = TaskState & TaskActions;

const storeApi: StateCreator<TaskStore> = (set) => ({
  task: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },
});

export const useTaskStore = create<TaskStore>()(storeApi);
