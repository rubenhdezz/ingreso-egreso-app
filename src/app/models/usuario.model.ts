export class Usuario {

    static fromFirebase({email, uid, nombre}: {email: string, uid:string, nombre: string}) {
        return new Usuario(uid, nombre, email);
    }


    constructor(
        public uid: string | undefined | null,
        public nombre: string | undefined | null,
        public email: string | undefined | null
    ) {}
}