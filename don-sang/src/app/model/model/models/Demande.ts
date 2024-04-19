export interface ApiResponse<T>{
    message?:string;
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