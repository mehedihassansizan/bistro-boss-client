import SectionTittle from '../../../component/sectionTittle/SectionTittle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-bg bg-fixed pt-6 text-white md:mt-36 mb-16'>
    
            <SectionTittle subTittle={"Check in out"} tittle={"From your menu"}></SectionTittle>

            <div className='md:flex justify-center items-center pb-32 md:px-32 bg-slate-400 bg-opacity-30 pt-32'>
                <div>
                    <img className='rounded-lg' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-5'>
                    <h4>March 20, 2023</h4>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Default</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;