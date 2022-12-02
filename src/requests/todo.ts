// userId: 1, id: 1, title: "delectus aut autem", completed: false}
// userId: 1
// id: 1
// title: "delectus aut autem"
// completed: false

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTheFirstTodo(): Promise<Todo> {
  try {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await (await response).json();
    return todo;
  } catch (e) {
    throw e;
  }
}
