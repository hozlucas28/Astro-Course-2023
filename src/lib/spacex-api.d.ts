export type SpaceXResponse = {
	docs: Doc[]
	totalDocs: number
	offset: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: null
	nextPage: number
}

export type Doc = {
	fairings: Fairings | null
	links: Links
	staticFireDateUTC: Date | null
	staticFireDateUnix: number | null
	net: boolean
	window: number
	rocket: Rocket
	success: boolean
	failures: Failure[]
	details: null | string
	crew: any[]
	ships: string[]
	capsules: string[]
	payloads: string[]
	launchpad: Launchpad
	flight_number: number
	name: string
	dateUTC: Date
	dateUnix: number
	dateLocal: Date
	datePrecision: DatePrecision
	upcoming: boolean
	cores: Core[]
	autoUpdate: boolean
	tbd: boolean
	launchLibraryID: null
	id: string
}

export type Core = {
	core: string
	flight: number
	gridfins: boolean
	legs: boolean
	reused: boolean
	landingAttempt: boolean
	landingSuccess: boolean | null
	landingType: null | string
	landpad: null
}

export enum DatePrecision {
	Hour = 'hour',
}

export type Failure = {
	time: number
	altitude: number | null
	reason: string
}

export type Fairings = {
	reused: boolean | null
	recoveryAttempt: boolean | null
	recovered: boolean | null
	ships: any[]
}

export enum Launchpad {
	The5E9E4501F509094Ba4566F84 = '5e9e4501f509094ba4566f84',
	The5E9E4502F509092B78566F87 = '5e9e4502f509092b78566f87',
	The5E9E4502F5090995De566F86 = '5e9e4502f5090995de566f86',
}

export type Links = {
	patch: Patch
	reddit: Reddit
	flickr: Flickr
	presskit: null | string
	webcast: string
	youtubeID: string
	article: string
	wikipedia: string
}

export type Flickr = {
	small: any[]
	original: any[]
}

export type Patch = {
	small: string
	large: string
}

export type Reddit = {
	campaign: null
	launch: null | string
	media: null
	recovery: null
}

export enum Rocket {
	The5E9D0D95Eda69955F709D1Eb = '5e9d0d95eda69955f709d1eb',
	The5E9D0D95Eda69973A809D1Ec = '5e9d0d95eda69973a809d1ec',
}
