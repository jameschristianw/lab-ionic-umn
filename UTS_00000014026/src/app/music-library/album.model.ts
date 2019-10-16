import { Songs } from './songs.model';

export class Album{
    constructor(
        public id: string,
        public name: string,
        public artist: string,
        public imgUrl: string,
        public songs: Songs[]
    ){}
}