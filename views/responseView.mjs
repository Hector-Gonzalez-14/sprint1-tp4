export function renderizarSuperheroe(superheroe) {
    return JSON.stringify(superheroe, null, 2);
}

export function renderizarListaSuperheroes(superheroes) {
    return JSON.stringify(superheroes, null, 2);
}

export function renderizarMensajeError(mensaje) {
    return JSON.stringify({ error: mensaje }, null, 2);
}