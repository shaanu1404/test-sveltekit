<script lang="ts">
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;
</script>

<h1>Welcome to {data.title}</h1>
<p>Visit {@html data.link} to read the documentation</p>

{#if form?.email && form?.message}
	<p>
		Hi {form?.email}, you message "{form?.message}" is recieved.
	</p>
{/if}

<form method="post">
	<h2>Contact us</h2>
	<input type="email" name="email" placeholder="enter your email" />
	<textarea name="message" id="message" rows="3" placeholder="enter your message" />
	<button type="submit">Submit</button>
</form>

<div class="mt-5">
	<a href="/todos">Todos</a>
</div>

<style>
	form {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.mt-5 {
		margin-top: 1.25rem;
	}
</style>
