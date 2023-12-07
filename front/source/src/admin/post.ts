class Post {
    private name!: string;
    private author!: string;
    private descruption!: string;
    private slug!: string;
    private content!: string;
    private tags= <string[]>[];
    private comments = <string[]>[];
    private likes!: number;
    private shares!: number;
    private category!: string;

}

export {Post}