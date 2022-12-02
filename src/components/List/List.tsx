import React, { useEffect, useState } from 'react';
import { getTheFirstTodo, Todo } from '../../requests/todo';

export default function List() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    async function execute() {
      try {
        const _todo = await getTheFirstTodo();
        setTodo(_todo);
      } catch (e) {
        throw e;
      }
    }

    execute();
  }, []);
  return <div>{todo ? <h5>{todo.title}</h5> : <div>Loading...</div>}</div>;
}
