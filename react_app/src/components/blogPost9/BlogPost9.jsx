import '../blogPost/blogpost.css';
import article9 from "../../assets/img/article9.png";
import portrait3 from "../../assets/img/portrait3.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost9 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>A Lip-Smacking Recipe That Will Fire Up Your Meals</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait3} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Somdatta Saha</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>03 May 2022</h4>
            </div>
        </div>
            <p className='titletext'>The onion chutney is all things flavourful and has a taste that 
            you have never had before. It is comforting, spicy, and makes for a perfect side dish</p>  
            <p className='center-img'>
            <img src={article9} alt="Chutney." />
            </p>
        </div>
        <div className='content'>
            <p>Indian meals consist of a variety of items. Be it dal, roti, rice, sabzi, salad, achar
                and even chutneys. All these things complete our thalis and leave us drooling. 
                However, many people conceive of chutney just as a side dish to accompany a meal.
                But, its importance in Indian cuisine is so much more than that. It not only adds
                flavours to our meals but also gives a punch of nutrition. In different houses,
                chutneys are made in various ways. Although, the goal is the same- to make a
                side dish that will add variety to your meals. Till now, we are sure that you
                have made all kinds of chutneys like imly, pudina, peanut, coconut, tomato,
                and even mango or amla chutney, so to give that a twist, here we have a new recipe.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
        <h2>Onion Chutney Recipe: Here's How To Make Onion Chutney:</h2>
            <h3>1. Tomato Chutney</h3>
            <h4>When you talk about homemade chutneys, this tangy delight will be among the first
                 ones to come to mind. This recipe calls for cooking tomatoes in a variety of spices.
                  You can relish it with pakodas or simply as an accompaniment to your regular meal.</h4>
            <h3>2. Raw Mango Kaccha Aam Chutney</h3>
            <h4>We bet you love to devour juicy fresh mangoes in summer. But, here's how you can put
                 unripe mangoes to use. Prepare this raw mango chutney with a bunch of spices during
                 summer and preserve it for later use.</h4>
            <h3>3. All-Purpose Garlic Chutney Powder</h3>
            <h4>Are you familiar with the red powder chutney that comes with your plate of vada pav?
                 Well, you can prepare it at home too, easily. Not just vada pav, you can enjoy this 
                 chutney with any food of your choice. It's a great combination of garlic, peanuts and 
                 sesame seeds. Add Kashmiri chili powder for that gorgeous red colour.</h4>
            <h3>4. Coconut Chutney</h3>
            <h4>How can we miss coconut chutney? South Indian delicacies like idli-sambar or dosa
                 are incomplete without this yummy condiment. This recipe will hardly take 10 minutes
                 of your time. It is high on taste and nutrition.</h4>
            <h3>5. Mint And Turmeric Chutney Village Style</h3>
            <h4>If you want to enjoy a chutney prepared in rustic style, refer to this recipe.
                This chutney is often relished with fritters or other fried items. It is a
                delicious mixture of mint, turmeric, and coriander leaves. Use your traditional
                silbatta stone spice grinder to prepare this delectable chutney and you will
                be left licking your fingers.</h4>
            <h3>6. Plum Chutney</h3>
            <h4>You can prepare a tasty side dish with plums as well. Plums come together for 
                this chutney along with a host of spices. If you haven't tried this yet, this is
                the right time to do so.</h4>
            <h3>7. Amla Chutney</h3>
            <h4>If you are bored with your regular meals, how about trying out this yummy chutney? 
                Amla is rich in vitamin C and antioxidants. But if not for the health benefits,
                 you must try it out for the taste.</h4>
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
export default BlogPost9;