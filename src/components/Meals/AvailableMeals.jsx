import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Macaroni and Cheese",
    description: "Mom's Specialty",
    price: 12.99,
  },
  {
    id: "m6",
    name: "Meatloaf ala Cris",
    description: "Moar Onions? You got it.",
    price: 15.99,
  },
  {
    id: "m7",
    name: "Green Eggs and Ham",
    description: "You would eat it on a plane, you would eat it on a train.",
    price: 10.99,
  },
  {
    id: "m8",
    name: "Poutine",
    description: "Not the guy.",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
