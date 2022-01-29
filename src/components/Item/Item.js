import { Button, Card } from "react-bootstrap"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    )
}