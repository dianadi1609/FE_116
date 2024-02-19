import './about.css';
import experience from "../../assets/img/experience.jpg";
import chef1 from "../../assets/img/chef-1.png";
import chef2 from "../../assets/img/chef-2.png";
import chef3 from "../../assets/img/chef-3.png";
import chef4 from "../../assets/img/chef-4.png";



function About () {
    return (
        <>
        <div className= 'vector'></div>
        <div className='aboutus'>
            <div className='abouttext'>
                <h2>23 Years Of Experience In Cooking Services</h2>
                <h3>Edamam Cooking Experience was born to share, through culinary experiences, our love for Tuscany and its produce. Created over 20 years ago by chef Elisa Berghi, today the company is managed by Paola together with Chef Lorenzo Grassi and a team of partners who share their same experience, ethics and love for their work.
                    Edamam Cooking Experience thus maintains a family-style management: for us, every customer is unique and deserves special care. We cook professionally, always offering an accurate and tailor-made service, to satisfy every palate. 
                    We like to rediscover traditional recipes and value the products of our land, also through creativity and innovation. We use organically grown ingredients as much as possible, wild herbs and local varieties of meats, cold cuts, cheeses and vegetables, produced by small farmers in the Chianti area, where we live.
                    We enjoy what we do, we do it with passion and we are convinced that it is the most authentic way to share the love of good food and simple life of the region.</h3>
            </div>
            <div className='aboutimg'>
                <img src={experience} alt="Chiefs." />
            </div>
        </div>
        <div className='sectionschefs'>
            <h2>Our Professional Chefs</h2>
        </div>
        <div className='chefsflex'>
            <div className='chef'>
                <img src={chef1} alt="Chiefs." />
                <h2>Marcellus H. Waddell</h2>
                <p>Senior Chef</p>
            </div>
            <div className='chef'>
                <img src={chef2} alt="Chiefs." />
                <h2>Ronald W. Robison</h2>
                <p>Senior Chef</p>
            </div>
            <div className='chef'>
                <img src={chef3} alt="Chiefs." />
                <h2>Kenneth B. Deshazo</h2>
                <p>Senior Chef</p>
            </div>
            <div className='chef'>
                <img src={chef4} alt="Chiefs." />
                <h2>Robert H. Houston</h2>
                <p>Senior Chef</p>
            </div>
        </div>
        </>
    )
}

export default About;