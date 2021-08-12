import { Archivo } from "./Archivo";

export class Abogado{
    correo:string;
    contrasena:string;
    nombre:string;
    apellidos:string;
    provincia:string;
    dni:string;
    n_letrado:string;
    imagen: string;
    descripcion: string;
    constructor(){
        this.correo  = "";
        this.contrasena = "";
        this.nombre = "";
        this.apellidos = "";
        this.provincia = "";
        this.dni  = "";
        this.n_letrado = "";
        this.descripcion = "";
        this.imagen = "";
    }
}