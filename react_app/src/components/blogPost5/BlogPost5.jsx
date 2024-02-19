import '../blogPost/blogpost.css';
import article5 from "../../assets/img/article5.png";
import portrait5 from "../../assets/img/portrait5.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost5 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Weight Loss: 5 Delicious Low Cal Egg Salad Recipes</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait5} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Pragya Subedy</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>20 September 2022</h4>
            </div>
        </div>
            <p className='titletext'>Struggling to lose those extra kilos? We have some amazing 
                recipes for you. These eggs salad recipes are not only healthy but also delicious!</p>  
            <p className='center-img'>
            <img src={article5} alt="Salad." />
            </p>
        </div>
        <div className='content'>
                <p>We understand how challenging it is to lose those extra kilos.
                    We are in a constant struggle to find the right kind of food and maintain a healthy
                    eating pattern. It is why we are always looking for recipes that are healthy and hearty!
                    Salads are the go-to food for weight loss - they are low in calories and known to 
                    facilitate weight loss. Another great thing you can do for your weight loss journey is
                    adding eggs to your salads!</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>Here Are 5 Low Cal Egg Salads For Weight Loss:</h2>
            <h3>1.Egg Tomato Salad</h3>
            <h4>Tomatoes and eggs, both come with a non-complicated, fuss-free reputation.
                 It hardly takes minutes to boil eggs, and tomatoes can be tucked in raw.
                  This salad never feels plain or boring, thanks to the pungent flavours of
                   tomato and garlic.</h4>
            <h3>2.Green Bean Salad With Eggs</h3>
            <h4>The two prime ingredients used in this salad are green beans and eggs. What makes 
                this salad different is that its dressing is not at all fattening. The recipe uses
                 olive oil, which is known to be a much healthier alternative than other oils and 
                 fat-laden dressings like mayonnaise.</h4>
            <h3>3.Breakfast Salad</h3>
            <h4>This salad has the nutrients of egg making it a good way to start the morning. 
                This salad has chicken sausages, eggs, lettuce, capsicum and tomatoes. Garnish
                with a honey mustard dressing and breakfast is ready!</h4>
            <h3>4.Warm Frisee Salad</h3>
            <h4>Salads are usually cold, but this salad will make you a fan of warm salads. This salad
                 uses scallions, shitake mushrooms, frisee combined with a mild dressing. Most salads
                 use boiled eggs but this salad uses delicious poached eggs.</h4>
            <h3>5.Egg Chaat Salad</h3>
            <h4>Chaat lovers will rejoice with this healthy egg salad. Egg chaat combines the healthiness 
                of boiled eggs with irresistible chaat pata flavours. Mix boiled eggs with sweet and sour 
                chutney and top it with spring onions and boondi!</h4>
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
export default BlogPost5;
