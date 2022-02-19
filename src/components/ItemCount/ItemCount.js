import { configBtns } from "./configBtns"


export const ItemCount = ({max, min = 0, counter, setCounter}) => {

    const handleSumar = (e) => {
        // op lógico AND
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const {configRestar, configSumar} = configBtns(counter, max, min, handleRestar, handleSumar)

    return (
        <div>
            <button {...configRestar}>
                -
            </button>
            <span className="mx-3">{counter}</span>
            <button {...configSumar}>
                +
            </button>
        </div>
    )
}