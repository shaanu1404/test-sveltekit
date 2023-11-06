import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const email = data.get('email'), message = data.get('message')
        return {
            email, message
        }
    }
}