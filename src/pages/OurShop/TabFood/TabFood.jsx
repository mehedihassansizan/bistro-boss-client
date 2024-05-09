
import FoodCard from '../../../component/FoodCard/FoodCard';

const TabFood = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-6'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default TabFood;