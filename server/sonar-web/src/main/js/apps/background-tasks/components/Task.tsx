/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { AppState } from '../../../types/appstate';
import { EditionKey } from '../../../types/editions';
import { Task as ITask } from '../../../types/tasks';
import TaskActions from './TaskActions';
import TaskComponent from './TaskComponent';
import TaskDate from './TaskDate';
import TaskDay from './TaskDay';
import TaskExecutionTime from './TaskExecutionTime';
import TaskId from './TaskId';
import TaskNodeName from './TaskNodeName';
import TaskStatus from './TaskStatus';
import TaskSubmitter from './TaskSubmitter';

interface Props {
  component?: unknown;
  onCancelTask: (task: ITask) => Promise<void>;
  onFilterTask: (task: ITask) => void;
  task: ITask;
  previousTask?: ITask;
  appState: AppState;
}

export default function Task(props: Props) {
  const { task, component, onCancelTask, onFilterTask, previousTask, appState } = props;

  return (
    <tr>
      <TaskStatus status={task.status} />
      <TaskComponent task={task} />
      <TaskId id={task.id} />
      <TaskSubmitter submitter={task.submitterLogin} />
      {appState?.edition === EditionKey.datacenter && <TaskNodeName nodeName={task.nodeName} />}
      <TaskDay
        prevSubmittedAt={previousTask && previousTask.submittedAt}
        submittedAt={task.submittedAt}
      />
      <TaskDate date={task.submittedAt} />
      <TaskDate baseDate={task.submittedAt} date={task.startedAt} />
      <TaskDate baseDate={task.submittedAt} date={task.executedAt} />
      <TaskExecutionTime ms={task.executionTimeMs} />
      <TaskActions
        component={component}
        onCancelTask={onCancelTask}
        onFilterTask={onFilterTask}
        task={task}
      />
    </tr>
  );
}
