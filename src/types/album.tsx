export interface Album {
    data: {
        artists: [],
        coverArt: {sources: [{url: string}]},
        date: {year: number},
        name: string,
        uri: string
    }
}