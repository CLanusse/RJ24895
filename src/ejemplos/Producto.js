import { Button, Card } from "react-bootstrap"



export const Producto = ( {title, content} ) => {

    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}