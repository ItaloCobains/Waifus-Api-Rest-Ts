import { ObjectId } from "mongodb";

export default class Waifu {
  constructor(
    public nameAuthor: string,
    public waifuName: string,
    public waifuInfo: string,
    public waifuAnime: string,
    public id?: ObjectId
  ) {}
}
