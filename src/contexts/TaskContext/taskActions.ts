import type { TaskModel } from '../../models/TaskModel';

// const is more compatible and lightweight than enum
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionTypes = typeof TaskActionTypes;

export type TaskActionModel =
  | {
      type: TaskActionTypes['START_TASK'];
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes['INTERRUPT_TASK'];
    }
  | {
      type: TaskActionTypes['RESET_STATE'];
    };
