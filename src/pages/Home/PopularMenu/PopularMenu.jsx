
import SectionTittle from "../../../component/sectionTittle/SectionTittle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from '../../../Hooks/useMenu'

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(items => items.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(items => items.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])

    return (
        <section className="mb-20">
            <SectionTittle subTittle={"Check it out"} tittle={"FROM OUR MENU"}></SectionTittle> 
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(items => <MenuItem key={items._id} items={items}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full menu</button>         
        </section>
    );
};

export default PopularMenu;