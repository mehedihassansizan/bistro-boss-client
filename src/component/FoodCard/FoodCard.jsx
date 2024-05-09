

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-800 absolute mt-4 mr-6 py-2 px-4 right-0 text-white">{price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
