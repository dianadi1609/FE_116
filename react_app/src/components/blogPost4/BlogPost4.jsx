import '../blogPost/blogpost.css';
import article4 from "../../assets/img/article4.png";
import portrait4 from "../../assets/img/portrait4.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost4 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Indian Cooking Tips: 5 Desi Egg-Based Snack Recipes</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait4} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Gauri Rohatgi</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>28 October 2022</h4>
            </div>
        </div>
            <p className='titletext'>One food that we can never get enough of is egg!
                Do you know why? It is because eggs are so versatile! You can make any kind
                of dish using eggs, from breakfast, lunch, dinner to even dessert! Besides
                that, Eggs are extremely healthy, they are known for their being excellent 
                sources of protein and vitamin D. Proteins from eggs help repair our muscles
                and Vitamin D helps our bones absorb calcium so that they remain strong and healthy. </p>  
            <p className='center-img'>
            <img src={article4} alt="Egg." />
            </p>
        </div>
        <div className='content'>
                <p>Looking for unique party snack recipes? We have found five
                 egg-based delicious snacks that have an Indian/desi tadka</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>Desi Egg Recipes: Here Are 5 Desi Egg-Based Snacks:</h2>
            <h3>1.Tandoori Egg</h3>
            <h4>If you love a juicy tikka then this recipe is for you! Tandoori egg or egg tikka
                is a delicious and spicy dish that can be had as a snack or served as a side dish
                with biryani. This dish is basically deviled eggs coated with a variety of aromatic
                tandoori masalas.</h4>
            <h3>2.Egg Chaat</h3>
            <h4>We all love sweet and sour flavours; it is why we enjoy chaat papdi and gol gappa. 
                We have found a way to extend the khatta meetha flavour of the chaat to the beloved 
                egg! This egg chaat has tastes lip-smacking good.</h4>
            <h3>3.Egg Kebab</h3>
            <h4>Kebabs fan, we have something special for you! Egg kebab is a popular snack made with
                hard-boiled eggs, gram flour and seasoning like chilli powder, chaat masala, ginger-garlic
                paste. This can be the perfect party snack for you!</h4>
            <h3>4.Egg Pakoda</h3>
            <h4>This South Indian Egg cutlet recipe is right from the Malabar coast of Kerala. Boiled eggs
                 are prepared in a spicy potato-based masala that is coated in breadcrumbs and deep-fried 
                 to get crunchy yummy eggs.</h4>
            <h3>5.Egg Cutlet</h3>
            <h4>Our favourite pakoda has an eggy twist. We have found a way to incorporate the egg into our 
                classic teatime pakoda. This egg pakoda snack is made by stuffing boiled eggs with an 
                aloo-egg yolk masala and coated with pakoda batter and then deep-fried.</h4>
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
export default BlogPost4;
