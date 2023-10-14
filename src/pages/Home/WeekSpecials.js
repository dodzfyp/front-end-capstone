import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import fish from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$9.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$6.59',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Grilled Fish',
    image: fish,
    price: '$8.00',
    description: `One of the rarest fish grilled with mustard to enhance the taste your tastebuds.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
