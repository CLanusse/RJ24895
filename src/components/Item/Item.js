import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
    )
}