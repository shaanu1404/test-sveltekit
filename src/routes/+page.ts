import type { PageLoad } from './$types'

export const load = (({ }) => {
    return {
        title: 'My Sveltekit Homepage',
        link: `<a href="https://kit.svelte.dev">kit.svelte.dev</a>`
    }
}) satisfies PageLoad