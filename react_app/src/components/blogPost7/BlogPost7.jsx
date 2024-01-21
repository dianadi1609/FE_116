import '../blogPost/blogpost.css';
import article7 from "../../assets/img/article7.png";
import portrait1 from "../../assets/img/portrait1.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost7 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>5 Things You Can Use Instead Of Breadcrumbs To Coat Fried Foods</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait1} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Wade Warren</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>10 August 2022</h4>
            </div>
        </div>
            <p className='titletext'>Ran out of breadcrumbs? Use these 5 food items which work the same for
                   coating fried foods and snacks.</p>  
            <p className='center-img'>
            <img src={article7} alt="Fried." />
            </p>
        </div>
        <div className='content'>
                <p>Imagine this: you are halfway done preparing a potato 
                cutlet or fried chicken, the marinade was perfect and now all you have to do is 
                coat the dish and deep fry it to perfection. Suddenly, it hits you; you don't
                have breadcrumbs to coat the dish! Now what? Do you alter the recipe altogether
                or give up and have a non-crunchy cutlet or chicken? Well, you do none! Because 
                there are many handy breadcrumbs swaps that you can make from everyday foods
                available in your pantry and we are here to give you 5 options today!</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>5 Things You Can Use Instead Of Breadcrumbs To Coat Fried Foods:</h2>
            <h3>1. Cornflakes:</h3>
            <h4>You might have heard of this many times, but does it actually work? Well, not only does 
                it make your food extra crunchy, but the cornflakes also add a hint of added flavor to 
                your food. Crush cornflakes into your desired fineness and use just as you would use
                breadcrumbs.</h4>
            <h3>2. Rolled oats:</h3>
            <h4>Shocked? Well, we were too! When we first tried using rolled oats to coat our food, we
                 were skeptical. But, the result spoke for itself and we haven't looked back ever since.
                  Use rolled oats and add some extra seasoning in the mix before coating and enjoy
                 delicious fried foods from now on!</h4>
            <h3>3. Potato chips:</h3>
            <h4>Yes, you read it right, potato chips can be used to coat fried foods and the results
                 are actually much better than what you can imagine them to be! You may use the 
                 classic salted flavour, crush the chips into tiny pieces and coat the chicken or
                  other ingredients. Freeze for 5-10 minutes so the chips and the batter holding them 
                  on the surface dries up. Heat oil, fry until golden, and enjoy!</h4>
            <h3>4. Semolina (Suji):</h3>
            <h4>It might not be the most common thing to use, but suji also helps create an evenly
                 crunchy coat on top of some fried foods. In fact, many street vendors like coating
                 aloo chop and cutlets in suji for the grainy and crunchy texture that it delivers.</h4>
            <h3>5. Biscuits:</h3>
            <h4>You need to be a little careful when using biscuits for coating foods. Not all biscuits
                 will work for the process and make sure not to make a very fine powder out of them.
                  Use biscuits with mild flavours like Marie or even rusk biscuits. If crackers are
                 available near you, they work great for the process too!</h4>
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
export default BlogPost7;
