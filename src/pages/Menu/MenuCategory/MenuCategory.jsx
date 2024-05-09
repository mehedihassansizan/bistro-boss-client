import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({items, img, tittle}) => {
    return (
        <div className="mt-8">
            {tittle && <Cover img={img} tittle={tittle}></Cover>}
             <div className="grid md:grid-cols-2 gap-6 my-12">
                {
                    items.map(items => <MenuItem key={items._id} items={items}></MenuItem>)
                }
            </div>
            <Link to={`/shop/${tittle}`}><button className="btn btn-outline border-0 border-b-4 mt-4">See All Food</button></Link>
        </div>
    );
};

export default MenuCategory;