import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Task, TaskStatus } from '../../interfaces';

interface TaskState {
  draggingTaskId?: string;
  tasks: Record<string, Task>;
}

interface TaskActions {
  getTaskByStatus: (status: TaskStatus) => Task[];

  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;
  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
}

type TaskStore = TaskState & TaskActions;

const storeApi: StateCreator<TaskStore> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },
  getTaskByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;
    return Object.values(tasks).filter((task) => task.status === status);
  },
  setDraggingTaskId: (taskId: string) => {
    set({ draggingTaskId: taskId });
  },
  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },
  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    const task = get().tasks[taskId];
    task.status = status;

    set((state) => ({
      tasks: {
        ...state.tasks,
        [taskId]: task,
      },
    }));
  },
});

// Se consume como un hook y como las reglas de React dicen, cuando es un hook, debe comenzar con'use' y debe
// ser llamado dentro de un componente funcional o dentro de otro hook.
export const useTaskStore = create<TaskStore>()(
  devtools(storeApi, { name: 'task-store' }),
);
