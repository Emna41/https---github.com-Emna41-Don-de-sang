export interface ApiResponse<T>{
    message:string;
    data:T;
}
export interface IDon{
    id: number;
    nom:string;
    username:string;
    typesang:string;
    numtel:string;
    information:string;
    
}
export interface ISang{
    id: number;
    nom:string;
    username:string;
    localisation:string;
    rendez_vous:Date;
    gender:string;
    numtel:number;
    banque:string;
    typesang:string;
    maladies:string
}