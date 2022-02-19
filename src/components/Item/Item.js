import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const Item = ( {id, nombre, precio, img, desc, oferta} ) => {

    const precioFinal = oferta ? precio * 0.85 : precio

    return (
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                { oferta &&
                    <>
                        <Card.Title>15% OFF</Card.Title>
                        <Card.Text>Free shipping</Card.Text>
                    </>
                }
                <Card.Text>
                    Precio: ${precioFinal}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}