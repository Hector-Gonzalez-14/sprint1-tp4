import SuperheroesRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesRepository();

export function obtenerSuperheroe(id) {
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === parseInt(id));
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => {
        const valorAtributo = hero[atributo];
        if (Array.isArray(valorAtributo)) {
            return valorAtributo.some(val => 
                String(val).toLowerCase().includes(valor.toLowerCase())
            );
        }
        return String(valorAtributo).toLowerCase().includes(valor.toLowerCase());
    });
}

export function obtenerSuperheroesMayoresA30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => 
        hero.edad > 30 && 
        hero.planetaOrigen === 'Tierra' && 
        hero.poder.length >= 2
    );
}