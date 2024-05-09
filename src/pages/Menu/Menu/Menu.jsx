import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTittle from '../../../component/sectionTittle/SectionTittle';
import MenuCategory from '../MenuCategory/MenuCategory';
import prizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(items => items.category === 'offered')
    const pizza = menu.filter(items => items.category === 'pizza')
    const dessert = menu.filter(items => items.category === 'dessert')
    const salad = menu.filter(items => items.category === 'salad')
    const soup = menu.filter(items => items.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            {/* {main menu} */}
            <Cover img={coverImg} tittle={"OUR MENU"}></Cover>
            <SectionTittle subTittle={"Don't Miss"} tittle={"TODAY'S OFFER"}></SectionTittle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* {pizza} */}
            <MenuCategory items={pizza} img={prizzaImg} tittle={"pizza"}></MenuCategory>
            {/* {dessert} */}
            <MenuCategory items={dessert} img={dessertImg} tittle={"dessert"}></MenuCategory>
            {/* {salad} */}
            <MenuCategory items={salad} img={saladImg} tittle={"salad"}></MenuCategory>
            {/* {soup} */}
            <MenuCategory items={soup} img={soupImg} tittle={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;