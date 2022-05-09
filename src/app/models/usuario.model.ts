export class Usuario {
    constructor(
        public uid: string | undefined,
        public nombre: string | undefined,
        public email: string | undefined | null
    ) {

    }
}