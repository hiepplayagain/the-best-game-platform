import { createFileRoute, redirect } from '@tanstack/react-router'
import Auth from '../pages/Auth'
import { useAuthStore } from '../stores/useAuthStore'

export const Route = createFileRoute('/auth')({
	beforeLoad: () => {
		const { user } = useAuthStore.getState();

		if (user) {
			throw redirect({
				to: '/',
				replace: true
			})
		}
	},
	component: Auth,
})


