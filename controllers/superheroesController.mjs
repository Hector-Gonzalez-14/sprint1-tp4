import { obtenerSuperheroe, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresA30 } from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes, renderizarMensajeError } from '../views/responseView.mjs';

export function obtenerSuperheroeController(req, res) {
    const { id } = req.params;
    const superheroe = obtenerSuperheroe(id);

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send(renderizarMensajeError('Superhéroe no encontrado'));
    }
}

export function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send(renderizarMensajeError('No se encontraron superhéroes con ese criterio'));
    }
}

export function obtenerSuperheroesMayoresA30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresA30();
    res.send(renderizarListaSuperheroes(superheroes));
}