import { ChangeEvent, FC, useState } from 'react';

import { Task } from '@/interfaces';
import { taskPickerService } from '@/components/TaskPicker/service';

import { INPUT_PLACEHOLDER, TEXTAREA_PLACEHOLDER } from './constants';
import styles from './taskmenu.module.css';
import { TaskMenuProps } from './types';

export const TaskMenu: FC<TaskMenuProps> = ({ getPickedDate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isNeedShowTasks, setIsNeedShowTasks] = useState(false);
  const [tasks, setTasks] = useState(
    taskPickerService.getTasksByDate(getPickedDate()),
  );

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleRemoveTaskClick = (task: Task) => () => {
    taskPickerService.removeTaskFromLocalStorage(task);
    setTasks(taskPickerService.getTasksByDate(task.date));
  };

  const handleAddTaskClick = () => {
    if (title === '') return;
    const pickedDate = getPickedDate();
    const task: Task = {
      date: pickedDate,
      description: description,
      title: title,
    };
    if (taskPickerService.checkDuplicateTasks(task.title, pickedDate)) {
      return;
    }
    taskPickerService.addTaskToLocalStorage(task);
  };

  const handleViewTasksClick = () => {
    setIsNeedShowTasks(true);
    setTasks(taskPickerService.getTasksByDate(getPickedDate()));
  };
  return (
    <div className={styles.taskMenuWrapper}>
      {isNeedShowTasks ? (
        <ol>
          {tasks?.map(task => (
            <li key={task.title + task.date}>
              <div className={styles.liTitle}>
                {task.title}
                <button onClick={handleRemoveTaskClick(task)} />
              </div>
              {task.description}
            </li>
          ))}
        </ol>
      ) : (
        <div className={styles.taskMenu}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder={INPUT_PLACEHOLDER}
            data-testid="task-menu-input"
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder={TEXTAREA_PLACEHOLDER}
            data-testid="task-menu-textarea"
          />
          <div className={styles.btnWrapper}>
            <button
              onClick={handleAddTaskClick}
              data-testid="task-menu-add-task"
            >
              Add Task
            </button>
            <button
              onClick={handleViewTasksClick}
              data-testid="task-menu-view-tasks"
            >
              View Tasks
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
