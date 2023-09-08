import type { SpaceXResponse } from '../lib/spacex-api'

export async function getLaunches() {
	const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: {},
			options: {
				limit: 12,
				sort: {
					data_unix: 'asc',
				},
			},
		}),
	})

	const { docs: launches }: SpaceXResponse = await res.json()

	return launches
}
