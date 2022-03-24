export interface Task {
    id?:number,
    name?: string,
    status?: boolean,
    level?: number
}
export interface StateType {
    count: number;
    tasks: Task[]
}
