export class Collegue {


    constructor(private _nom:string, private _urlImage:string, private _score:number){
    }

    public get nom():string{
        return this._nom
    }
    public get urlImage():string{
        return this._urlImage
    }
    public get score():number{
        return this._score
    }

    public set nom(nom:string){
        this._nom = nom
    }
    public set urlImage(urlImage:string){
        this._urlImage = urlImage
    }
    public set score(score:number){
        this._score = score
    }
}
