import '../blogPost/blogpost.css';
import article6 from "../../assets/img/article6.png";
import portrait6 from "../../assets/img/portrait6.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost6 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Healthy Lunchbox Recipes: Delicious Dishes</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait6} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Gauri Rohatgi</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>28 October 2022</h4>
            </div>
        </div>
            <p className='titletext'>Lunchbox Recipes: With colleges and offices opening up rapidly,
             you might be in the search of delicious and interesting lunch box ideas. Here are 5 easy,
             healthy, and quick recipes that you can pack in the coming days.</p>  
            <p className='center-img'>
            <img src={article6} alt="Egg." />
            </p>
        </div>
        <div className='content'>
                <p>Now that it finally feels like we are done with the third wave of the COVID 19, 
                    schools, offices, and many government organisations are being opened to the public.
                    Empty roads and vacant offices have sprung back into action and we are once again
                    ready to throw ourselves into the hustle and bustle of city life. We are slowly 
                    getting back to the normal state of existence, one that is free from all the
                    work-from-home shenanigans. This means no more weekday brunches and no more lazy 
                    meals in your pyjamas. It is time to pack that lunch and get going for the day. </p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>5 Healthy And Easy Lunchbox Recipes:</h2>
            <h3>1. Peas & Potato Sandwich:</h3>
            <h4>Starting the list with one of the most loved and easy recipes that is great for a quick 
                lunch. The peas and potato sandwich is easy to make and the sandwich filling is delicious. 
                Packed between slices of bread is the zingy mix of mashed potatoes, peas, spices, curry leaves,
                and lime. This peas and potatoes sandwich is sure to be a hit amongst all ages</h4>
            <h3>2. Instant Rava Dosa:</h3>
            <h4>Love south Indian meals but think they are too time-consuming? Well, not anymore! 
                This instant rava dosa will be ready in less than 30 minutes and is the perfect lunch
                box recipe for those sudden cravings. With just a couple of ingredients, you can create magic </h4>
            <h3>3. Vegetarian Burritos Recipe:</h3>
            <h4>You can never go wrong with a quick and nutritious recipe like veg burritos. Simple to
                 make and packed with delicious Mexican flavours, lunchtime will no more be boring and 
                 monotonous. You can zhuzh up the recipes a little according to your preference, but for
                 the simplest and most classic burrito</h4>
            <h3>4. Bombay Toast:</h3>
            <h4>A classic when it comes to toast recipes, this quick and easy Bombay toast will spruce 
                up your plain boring lunch breaks. Pan-fried sandwiches filled with cucumber, tomatoes,
                 onion, and potatoes; this fuss-free recipe is also full of nutrients. Add some paneer 
                 slices for that extra boost of protein and deliciousness.</h4>
            <h3>5. Spicy Aloo Tikki:</h3>
            <h4>Who doesn't love aloo tikki? The best part is that they are pretty easy to make and can
                 be very fulfilling when paired with fruits and veggies. Create a delicious lunch platter
                 filled with these flavoursome tikkis and some boiled veggies on the side.</h4>
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
export default BlogPost6;
