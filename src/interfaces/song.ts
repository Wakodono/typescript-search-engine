import Artist from "./artist";
import Album from "./album";

interface Song {
  id: number;
  readable: boolean;
  title: string;
  duration: number;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

export default Song;
