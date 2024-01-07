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
import star from "../../assets/img/star.png";
import orangepie from "../../assets/img/orangepie.png";
import pasta from "../../assets/img/pasta.png";
import rice from "../../assets/img/rice.png";
import chef from "../../assets/img/chef.png";
import post from "../../assets/img/post.png";
import post2 from "../../assets/img/post2.png";
import post3 from "../../assets/img/post3.png";
import post4 from "../../assets/img/post4.png";
import insta2 from "../../assets/img/insta2.svg";
import veg from "../../assets/img/veg.png";
import plate from "../../assets/img/plate.png";


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
            <h2>Don’t forget to eat<br /> healthy food</h2>
            <img className= 'adv' src={adv} alt="Advertisement." />
            <img className= 'star' src={star} alt="Star." />
        </div>
        </div>
        <div className= 'recipes3'>
        <div className= 'six'>
            <Like className="like" />
            <img src={orangepie} alt="Orangepie." />
            <h4>Fruity Pancake with Orange & Blueberry</h4>
            <div className= 'iconsrecipes'>
                <div className= 'timing'>
                <Timer className="timer" />
                <p>30 minutes</p>
                </div>
                <div className= 'category'>
                <Forkknife className="forkknife" />
                <p>Sweet</p>
                </div>
            </div>
        </div>
            <div className= 'seven'>
                <Like className="like" />
                <img src={rice} alt="Rice." />
                <h4>The Best Easy One Pot Chicken and Rice</h4>
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
            <div className= 'eight'>
                <Like className="like" />
                <img src={pasta} alt="Pasta." />
                <h4>The Creamiest Creamy Chicken and Bacon Pasta</h4>
                <div className= 'iconsrecipes'>
                <div className= 'timing'>
                <Timer className="timer" />
                <p>30 minutes</p>
                </div>
                <div className= 'category'>
                <Forkknife className="forkknife" />
                <p>Noodles</p>
                </div>
                </div>
            </div>
        </div>
        <div className= 'sectionchef'>
           <div className='cheftext'>
            <h2>Everyone can be a<br /> chef in their own kitchen</h2>
            <h3>Welcome to The Foodieland where we share restaurant-quality<br />
                 recipes you can easily make at home. We’re so happy to have 
                 you here at our dinner table and we’re here for you with 
                 hundreds of recipes to feed you and your family. Feel free 
                 to browse through some of our featured recipes here, or visit
                 our recipe index where you can browse by different cuts of
                 meat and other categories. Or use the search bar at the top
                 of every page to search by recipe or ingredient.</h3>
            <div className= 'button2'>
                <a href= "/about">
                <div className= 'textbutton2'>
                    <p>Learn More</p>
                </div>
                </a>
            </div>
            </div>
            <img src={chef} alt="Chef." />
        </div>
        <div className='classinstagram'>
            <h2>Check out @foodieland on Instagram</h2>
            <p>In the past years, we have used our social
                media page on Facebook to consequently supply updates,
                news and fun facts to people that are interested in Follow-Me.
                From now on, in addition to Facebook posts, we will also start 
                posting interesting news on Instagram.</p>
            <div className='postsinstagram'>
            <img src={post} alt="Post." />
            <img src={post2} alt="Post2." />
            <img src={post3} alt="Post3." />
            <img src={post4} alt="Post4." />
            </div>
            <div className= 'button3'>
                <a href= "https://www.instagram.com/">
                <div className= 'textbutton3'>
                    <p>Visit Our Instagram</p>
                    <img src={insta2} alt="Logoinstagram." />
                </div>
                </a>
            </div>
        </div>
        <div className='emailform'>
            <h2>Deliciousness to your inbox</h2>
            <h3>Subscribe to receive free updated and recipes vie e-mail</h3>
            <div className='vegetables'>
                <img src={veg} alt="Vegetables." />
                <form>
                <input type="email" name="email" placeholder="Your E-mail Address ..." required />
                <button className='buttonsubmit'>Subscribe</button>
                </form>
                <img src={plate} alt="Plate." />
            </div>
        </div>
        
        </>
    )
}
export default Home;   