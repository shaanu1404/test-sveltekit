import type { PageLoad } from './$types'

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

export async function load({ fetch }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    const todos: Todo[] = await response.json();
    return {
        todos
    }
}