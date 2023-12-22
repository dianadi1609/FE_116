import './home.css';
import { ReactComponent as Timer } from "../../assets/img/timer.svg";
import { ReactComponent as Forkknife } from "../../assets/img/forkknife.svg";
import portrait from '../../assets/img/portrait.png';
import playlogo from "../../assets/img/playlogo.svg";
import chiken from "../../assets/img/chiken.png";
import breakfast from "../../assets/img/breakfast.png";
import vegan from "../../assets/img/vegan.png";
import meat from "../../assets/img/meat.png";
import dessert from "../../assets/img/dessert.png";
import lunch from "../../assets/img/lunch.png";
import chocolate from "../../assets/img/chocolate.png";
import cheeseburger from "../../assets/img/cheeseburger.png";
import salmon from "../../assets/img/salmon.png";
import pancake from "../../assets/img/pancake.png";
import salad from "../../assets/img/salad.png";
import cheese from "../../assets/img/cheese.png";
import adv from "../../assets/img/adv.png";

import { ReactComponent as Like } from "../../assets/img/like.svg"; 





function Home () {
    return (
        <>
        <div className= 'vector'></div>
        <div className= 'mainside'>
        <div className= 'leftside'>
            <h2>Spicy delicious<br/> chicken wings</h2>
            <p>There's nothing better than a crispy-on-the-outside, juicy-on-the-inside, 
                hot-as-heck <br/>chicken wing. Whether fried in sriracha or grilled with cayenne pepper, 
                these recipes<br /> for spicy wings are sure to set your senses aflame. Gather your hot sauce 
                and chiles,<br /> and make sure to have a cold beverage ready.</p>
        </div>
        <div className= 'icons'>
            <div className= 'lefticon'>
            <span><i><Timer className="timer" /></i></span>
            <span className='25min'>25 minutes</span>
            </div>
            <div className= 'righticon'>
            <span><i><Forkknife className="forkknife" /></i></span>
            <span className='lunchicon'>lunch</span>
            </div>
        </div>
        <div className= 'flex'>
        <div className='flex1'>
            <div>
            <img src={portrait} alt="Portrait." />
        </div>
        <div className= 'text'>
            <p>Robert H. Houston</p>
            <p>5 June 2022</p>
        </div>
        </div>
        <div className= 'button'>
            <a href= "/recipes">
             <div className= 'textbutton'>
                <p>View Recipes</p>
                <img src={playlogo} alt="Playlogo." />
             </div>
            </a>
        </div>
        </div>
        </div>
        <div className= 'chiken'>
            <img src={chiken} alt="Chiken." />
        </div>
        <div className= 'categories'>
            <h2>Categories</h2>
            <button>View All Categories</button>
        </div>
        <div className= 'allcategories'>
            <div className= 'breakfast'>
                <img src={breakfast} alt="Breakfast." />
                <h3>Breakfast</h3>
            </div>
            <div className= 'vegan'>
                <img src={vegan} alt="Vegan." />
                <h3>Vegan</h3>
            </div>
            <div className= 'meat'>
                <img src={meat} alt="Meat." />
                <h3>Meat</h3>
            </div>
            <div className= 'dessert'>
                <img src={dessert} alt="Dessert." />
                <h3>Dessert</h3>
            </div>
            <div className= 'lunch'>
                <img src={lunch} alt="Lunch." />
                <h3>Lunch</h3>
            </div>
            <div className= 'chocolate'>
                <img src={chocolate} alt="Chocolate." />
                <h3>Chocolate</h3>
            </div>
        </div>
        <div className= 'sectionrecipe'>
            <h2>Simple and tasty recipes</h2>
            <p>Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals to fuss-free sides and cakes</p>
        </div>
        <div className= 'recipes'>
        <div className= 'first'>
            <Like className="like" />
            <img src={cheeseburger} alt="Cheeseburger." />
            <h4>Big and Juicy Wagyu Beef Cheeseburger</h4>
            <div className= 'iconsrecipes'>
                <div className= 'timing'>
                <Timer className="timer" />
                <p>30 minutes</p>
                </div>
                <div className= 'category'>
                <Forkknife className="forkknife" />
                <p>Snack</p>
                </div>
            </div>
        </div>
            <div className= 'second'>
                <Like className="like" />
                <img src={salmon} alt="Salmon." />
                <h4>Fresh Lime Roasted Salmon with Ginger Sauce</h4>
            <div className= 'iconsrecipes'>
            <div className= 'timing'>
                <Timer className="timer" />
                <p>30 minutes</p>
            </div>
                <div className= 'category'>
                <Forkknife className="forkknife" />
                <p>Fish</p>
                </div>
            </div>
            </div>
            <div className= 'third'>
                <Like className="like" />
                <img src={pancake} alt="Pancake." />
                <h4>Strawberry Oatmeal Pancake with Honey Syrup</h4>
                <div className= 'iconsrecipes'>
                <div className= 'timing'>
                <Timer className="timer" />
                <p>30 minutes</p>
                </div>
                <div className= 'category'>
                <Forkknife className="forkknife" />
                <p>Breakfast</p>
                </div>
                </div>
            </div>
        </div>
        <div className= 'recipes2'>
        <div className= 'four'>
            <Like className="like" />
            <img src={salad} alt="Salad." />
            <h4>Fresh and Healthy Mixed Mayonnaise Salad</h4>
            <div className= 'iconsrecipes'>
            <div className= 'timing'>
            <Timer className="timer" />
            <p>30 minutes</p>
            </div>
            <div className= 'category'>
            <Forkknife className="forkknife" />
            <p>Healthy</p>
            </div>
            </div>
        </div>
        <div className= 'five'>
            <Like className="like" />
            <img src={cheese} alt="Cheese." />
            <h4>Chicken Meatballs with Cream Cheese</h4>
            <div className= 'iconsrecipes'>
            <div className= 'timing'>
            <Timer className="timer" />
            <p>30 minutes</p>
            </div>
            <div className= 'category'>
            <Forkknife className="Meat" />
            <p>Healthy</p>
            </div>
            </div>
        </div>
        <div className= 'advert'>
            <h2>Don’t forget to eat healthy food</h2>
            <img src={adv} alt="Advertisement." />

        </div>
        </div>
        </>
    )
}
export default Home;   