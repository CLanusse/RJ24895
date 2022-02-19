

export const configBtns = (counter, max, min, restar, sumar) => {
    const configRestar = {
        className: `btn ${counter === min ? 'btn-outline-danger' : 'btn-outline-primary '}`,
        disabled: counter === min,
        onClick: restar
    }
    
    const configSumar = {
        className: `btn ${counter === max ? 'btn-danger' : 'btn-primary '}`,
        disabled: counter === max,
        onClick: sumar
    }

    return {configRestar, configSumar}
}