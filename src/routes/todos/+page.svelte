<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>My Todos</h1>

{#if data.todos.length > 0}
	<ul>
		{#each data.todos as todo (todo.id)}
			<li>{todo.title}</li>
		{/each}
	</ul>
{:else}
	<p>No todos available</p>
{/if}
