export interface Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist;
    album: Album;
    type: string;
}

export interface TrackDetail extends Track {
    isrc: string;
    share: string;
    track_position: number;
    disk_number: number;
    release_date: Date;
    bpm: number;
    gain: number;
    available_countries: string[];
    contributors: Artist[];
}

export interface Album {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
}

export interface Artist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
}