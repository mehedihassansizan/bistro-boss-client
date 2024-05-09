
const MenuItem = ({items}) => {
    const {name, image, price, recipe} = items;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h1>{name}-----------</h1>
                <p>{recipe}</p>
            </div>
            us
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;