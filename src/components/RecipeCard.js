import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import '../styles/RecipeCard.css';

import img1 from '../images/IMG_1526.jpg'
import img2 from '../images/IMG_1551.JPG'
import img3 from '../images/IMG_1552.JPG'

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
					<Card.Img variant="top" src={img3} />
					<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
					</Card.Body>
					<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</Button>

			<Button variant="light">
				<Card className="text-center" style={{margin: "0rem"}}>
					<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
					<Card.Text>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Text>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card className="text-center" style={{margin: "0rem"}}>
					<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
					<Card.Text>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Text>
					</Card.Body>
				</Card>
			</Button>

			<Button variant="light">
				<Card style={{margin: "0rem"}}>
					<Card.Img src={img2} />
				</Card>
			</Button>

			<Button variant="light">
				<Card className="text-right" style={{margin: "0rem"}}>
					<blockquote className="blockquote mb-0 card-body">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
						erat a ante.
					</p>
					<footer className="blockquote-footer">
						<small className="text-muted">
						Someone famous in <cite title="Source Title">Source Title</cite>
						</small>
					</footer>
					</blockquote>
				</Card>
			</Button>

		</CardColumns>	
	);
  }

export default RecipeCard;