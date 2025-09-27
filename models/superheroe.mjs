export default class Superheroe {
    constructor(id, nombreSuperHeroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperHeroe = nombreSuperHeroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }

    validar() {
        if (!this.nombreSuperHeroe || this.nombreSuperHeroe.trim() === '') {
            throw new Error('El nombre del superhéroe es obligatorio.');
        }
        if (!this.poder || !Array.isArray(this.poder) || this.poder.length === 0) {
            throw new Error('El superhéroe debe tener al menos un poder.');
        }
    }
}