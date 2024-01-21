import '../blogPost/blogpost.css';
import article3 from "../../assets/img/article3.png";
import portrait3 from "../../assets/img/portrait3.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";



function BlogPost3 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Mango Pickle, Onion Pickle And More: 5 Instant Pickle Recipes</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait3} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Gauri Rohatgi</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>05 March 2022</h4>
            </div>
        </div>
            <p className='titletext'>Here we bring you a list of pickle recipes that
             you can make in a matter of minutes. They need just 15-20 minutes to get 
             ready. So, what are you waiting for? Let's get started with the list</p>  
            <p className='center-img'>
            <img src={article3} alt="Pickle." />
            </p>
        </div>
        <div className='content'>
            <p>Flavourful, tangy and delicious, pickle (achaar) makes for one of the most
                preferred accompaniments in India. And why not?! They are super versatile
                and can go well with just about anything. Indeed, a great accompaniment,
                pickles can instantly provide an explosion of flavours to recipes like 
                dal chawal, pulao, khichdi and even parathas or roti. Pickle, or achaar,
                comes in many variations, for instance, mango pickle, lemon pickle,
                green chilli pickle and many more. Moreover, most of these pickle 
                recipes require time for fermentation.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>Here's A List Of 5 Instant Pickle Recipes You Must Try At Home:</h2>
            <h3>1. Instant Mango Pickle: Our Recommendation</h3>
            <h4>One of the most popular pickle recipes! This heavenly pickle recipe instantly
                 adds that much-needed zest to any boring meal. Wondering how</h4>
            <h3>E2. 3-Ingredient Onion Pickle</h3>
            <h4>Making achar seems to be a challenging task, but trust us, the recipe of
                 this pyaaz ka achar is so easy, quick and requires just 3 ingredients in 
                 its preparation. Red onion, white vinegar and salt! That's all you need!</h4>
            <h3>3. Low-Cal, Oil-Free Adrak Ka Achaar</h3>
            <h4>Now this one is for the fitness freaks! This 2-minute recipe can be easily prepared
                 in the comforts of your kitchen, without any hassle. Once you have prepared the
                 achaar, just pour it in a glass jar and enjoy! </h4>
            <h3>4. Ginger Chilli Pickle</h3>
            <h4>Here we bring you another instant ginger chilli pickle for all the desi food lovers
                 out there. To make this, you just need four ingredients such as lemon juice, ginger,
                 green chillies and salt.</h4>
            <h3>5. Green Chilli Fry</h3>
            <h4>Made with green chilli (hari mirch) mixed with some strong spices, this instant pickle
                 recipe is a must-try. You can even store this green chilli condiment in the refrigerator
                 for up to 10 days.</h4>
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
export default BlogPost3;
