import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(nextCycle: number): TaskModel['type'] {
  if (nextCycle % 8 === 0) return 'longBreakTime';
  return nextCycle % 2 === 0 ? 'shortBreakTime' : 'workTime';
}
