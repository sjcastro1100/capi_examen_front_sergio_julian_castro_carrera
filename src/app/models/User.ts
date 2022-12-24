
export interface userParams {
    id : any;
    nombre: any;
    fecha_nacimiento: any;
    edad : any;
    email : any;
    direccion : any;
}
export class User{
   

    private props: Partial<userParams> = {}
    constructor(data:any = null){
        if(data){
            this.initParams(data)
        }
        else
            this.initEmpty()
    }
    initEmpty(){
        this.props.id = null;
        this.props.edad = null;
        this.props.nombre = null;
        this.props.email = null;
        this.props.direccion = null;
        this.props.fecha_nacimiento = null;
    }
    initParams(data:any){
        this.props.id = data.id;
        this.props.edad = data.edad;
        this.props.nombre = data.edad;
        this.props.email = data.email;
        this.props.direccion = data.direccion;
        this.props.fecha_nacimiento = data.fecha_nacimiento;
        
    }

    set nombre(value:any) { this.props.nombre = value}
    set id(value:any) { this.props.id = value}
    set edad(value:any) { this.props.edad = value}
    set email(value:any) { this.props.email = value}
    set direccion(value:any) { this.props.direccion = value}
    set fecha_nacimiento(value:any) { this.props.fecha_nacimiento = value}

    get nombre() { return this.props.nombre}
    get id() { return this.props.id}
    get edad() { return this.props.edad}
    get email() { return this.props.email}
    get direccion() { return this.props.direccion}
    get fecha_nacimiento() { return this.props.fecha_nacimiento}
}