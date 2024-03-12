import Button from './Button';
const foodData = [
  {
    foodName: 'Cappucino ',
    price: 4.99,
    foodDescription:
      'The combination of coffee, milk, and palm sugar makes this drink have a delicious',
  },
  {
    foodName: 'Coffee Latte ',
    price: 6.25,
    foodDescription:
      'The combination of coffee, milk, and palm sugar makes this drink have a delicious',
  },
  {
    foodName: 'Americano  ',
    price: 8,
    foodDescription:
      'Americano coffee is espresso drinks combined with hot water',
  },
  {
    foodName: 'V60  ',
    price: 5.8,
    foodDescription:
      'The V60 technique is one of the most used techniques by barista.',
  },
];
function MainSection() {
  const data = ['Coffee', 'Food', 'Snack', 'Dessert'];
  return (
    <div className="menuContainer">
      <div className="foodFilter">
        {data.map((item, i) => (
          <Button key={i} btnContent={item} type={'secondBtn'}>
            {' '}
          </Button>
        ))}
      </div>
      <h1>Coffee Menu</h1>
      <div className="foodContainer">
        {foodData.map((food, i) => {
          return (
            <div className="foodItem" key={i}>
              <div className="foodImg"></div>
              <div className="foodInfo">
                <div className="foodInfoHeader">
                  <h2 className="foodName">{food.foodName}</h2>
                  <span className="foodPrice">$ {food.price}</span>
                </div>

                <p className="foodDescription">{food.foodDescription}</p>
                <div className="itemSize">
                  <h3>Size </h3>

                  <Button btnContent={'Small'} type={'secondBtn'} />
                  <Button btnContent={'Large'} type={'secondBtn'} />
                </div>
              </div>
              <div className="quantity">
                <Button btnContent={'-'} type={'secondBtn'} />
                <span className="quantityValue">5</span>
                <Button btnContent={'+'} type={'secondBtn'} />
              </div>

              <Button btnContent={'Add to Cart'} type={'mainBtn'} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainSection;
