import type { Doc } from '../lib/spacex-api'

type Params = {
	id: string
}

export async function getLaunchById({ id }: Params) {
	const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

	const launch: Doc = await res.json()
	return launch
}
