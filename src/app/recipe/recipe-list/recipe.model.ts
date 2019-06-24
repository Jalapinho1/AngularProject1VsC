export class Recipe {
    public name: string;
    public descriptor: string;
    public imagePath: string;

    constructor(name: string,desc: string,imagePath: string){
        this.name = name;
        this.descriptor = desc;
        this.imagePath = imagePath;
    }
}