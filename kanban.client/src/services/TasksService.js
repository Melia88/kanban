import { AppState } from '../AppState'
import { api } from './AxiosService'

class TasksService {
  async createTask(body) {
    const res = await api.post('api/tasks', body)
    AppState.tasks = [...AppState.tasks, res.data]
  }
}
export const tasksService = new TasksService()