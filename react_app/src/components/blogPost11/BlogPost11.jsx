import '../blogPost/blogpost.css';
import article11 from "../../assets/img/article11.png";
import portrait5 from "../../assets/img/portrait5.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost11 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>How To Make Egg And Potato Salad For A Quick Meal</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait5} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Somdatta Saha</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>30 May 2022</h4>
            </div>
        </div>
            <p className='titletext'>This egg-potato salad recipe is light, wholesome and takes less 
                    than 30 minutes for preparation. Find the recipe inside.</p>  
            <p className='center-img'>
            <img src={article11} alt="Egg." />
            </p>
        </div>
        <div className='content'>
            <p>Eggs are one of the most versatile foods one can think of. Be it for breakfast
                or a wholesome lunch, we just need an egg or two to put together a full-fledged meal.
                Besides, it is super healthy too. Enriched with protein, vitamins A, B, D and E, eggs
                help promote bone health, better skin and hair and load us up with essential nutrients
                for overall nourishment. Besides, it has low fat and cholesterol content, making eggs
                great for managing weight and heart health. This is why experts from around the world 
                recommend consumption of at least one egg daily for wholesome nourishment.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h3>How To Make Egg and Potato Salad:</h3>
            <h4>1. To make this dish, we need boiled eggs, boiled potatoes, mayonnaise, gherkins, parsley,
                 chives, salt and pepper. It is to be mentioned here, make sure you use a hardboiled egg to
                 get the best result</h4>
            <h4>2. Now that you have all the ingredients handy, let's get started with the recipe. First,
                 deskin and dice the potatoes, chop eggs, gherkins, parsley and chives.</h4>
            <h4>3. Now, take eggs, gherkins, parsley and chives in a bowl and mix it well with mayonnaise,
                 salt and pepper. Now, add the potatoes to it and coat each slice of potato well.</h4>
            <h4>4. That's it; your egg salad is ready to be served in just no time.</h4>
            <h4>5. While this quick and easy egg salad tastes amazing, you can also use it as the stuffing for 
                your breakfast sandwich. Just add it as a filling in between two bread slices and toast.</h4>
            <h4>6. Try this delicious recipe today and let us know how you liked it.</h4>
        </div>
        <div className= 'advertflex'>
            <h2>Don’t forget to eat<br /> healthy food</h2>
            <img className= 'adv' src={adv} alt="Advertisement." />
            <img className= 'star' src={star} alt="Star." />
        </div>
        </div>
        </>
    )
}
export default BlogPost11;