export class movies{
    ID: number;
    Title: string;
    Director: string;
    ReleaseDate: string = new Date().toDateString();


    constructor(ID: number, Title: string, Director: string, ReleaseDate: string){
        this.ID = ID;
        this.Title = Title;
        this.Director = Director;
        this.ReleaseDate = ReleaseDate;
    }
}