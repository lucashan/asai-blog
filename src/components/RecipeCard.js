import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import '../styles/RecipeCard.css';

import img1 from '../images/IMG_1526.jpg'
import img2 from '../images/IMG_1551.JPG'
import img3 from '../images/IMG_1552.JPG'
import img4 from '../images/IMG_1562.jpg'
import img5 from '../images/pasta.JPG' 
import img6 from '../images/paella.jpg' 
import img7 from '../images/eggs_benedict.jpg' 

function RecipeCard() {
	return (
		<CardColumns style={{width: "85%", height: "85%", margin: 'auto'}}>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img variant="top" src={img1} />
					<Card.Body>
					<Card.Title>Bruschetta with Tomato and Basil</Card.Title>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img variant="top" src={img4} />
					<Card.Body>
					<Card.Title>Lasagna with Red and White Sauce</Card.Title>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img variant="top" src={img5} />
					<Card.Body>
					<Card.Title>Prosciutto Fettucine Carbonara</Card.Title>
					</Card.Body>
				</Card>
			</Button>
			
			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img variant="top" src={img3} />
					<Card.Body>
					<Card.Title>Souffle Cheesecake</Card.Title>
					</Card.Body>
				</Card>
			</Button>



			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img src={img2} />
					<Card.Body>
					<Card.Title>Galbi Jim with Cheese</Card.Title>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img src={img6} />
					<Card.Body>
					<Card.Title>Spanish Paella</Card.Title>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img src={img7} />
					<Card.Body>
					<Card.Title>Eggs Benedict with Strawberries and French Toast</Card.Title>
					</Card.Body>
				</Card>
			</Button>

		</CardColumns>	
	);
  }

export default RecipeCard;