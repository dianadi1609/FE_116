import '../blogPost/blogpost.css';
import article8 from "../../assets/img/article8.png";
import portrait2 from "../../assets/img/portrait2.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost8 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>How To Make Garlic Bread Without Using An Oven</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait2} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Gauri Rohatgi</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>20 November 2022</h4>
            </div>
        </div>
            <p className='titletext'>If you love garlic bread as much as we do, here we have something special for you.
                     We have found one recipe for making restaurant-style garlic bread at home and 
                     that too without an oven.</p>  
            <p className='center-img'>
            <img src={article8} alt="Fried." />
            </p>
        </div>
        <div className='content'>
            <p>When it's about Italian cuisine, garlic bread is one of the recipes that is adored by all.
                Just the aroma of freshly baked garlic bread is enough for us to bite into a piece or two.
                Picture this - a delicious crisp bread, topped with baked cheese and crushed garlic cloves,
                would you be able to resist? Well, if you ask us, it is just so irresistible.
                Pair it with pasta or chicken steak, or even grilled veggies or just enjoy as
                is - the choice is yours! If you love garlic bread as much as we do, here we have
                something special for you. </p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>To begin with the recipe, dissolve sugar in a quarter cup of lukewarm water, add yeast
                 to it and mix it and keep it aside for some time.</h2>
            <h4>To begin with the recipe, dissolve sugar in a quarter cup of lukewarm water, add yeast 
                to it and mix it and keep it aside for some time.</h4>
            <h4>Now take all-purpose flour (maida) in a big bowl, add salt, garlic powder and oregano 
                and mix it well. In between this time the yeast will become fluffy, add it to the maida,
                 mix it and knead a soft dough. Pour some oil on the dough and once again knead it and
                 keep it aside.</h4>
            <h4>Yes, you read it right, potato chips can be used to coat fried foods and the results
                 are actually much better than what you can imagine them to be! You may use the 
                 classic salted flavour, crush the chips into tiny pieces and coat the chicken or
                  other ingredients. Freeze for 5-10 minutes so the chips and the batter holding them 
                  on the surface dries up. Heat oil, fry until golden, and enjoy!</h4>
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
export default BlogPost8;
