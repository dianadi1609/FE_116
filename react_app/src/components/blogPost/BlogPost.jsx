import './blogpost.css';
import article1 from "../../assets/img/article1.png";
import portrait1 from "../../assets/img/portrait1.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";



function BlogPost () {
    return (
        <>
        <div className='titlepost1'>
            <h2>7 Desi Sandwich Recipes For An Easy And Masaledaar Breakfast</h2>      
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
                <h4>12 November 2021</h4>
            </div>
        </div>
            <p className='titletext'>We have created a list of easy sandwich recipes you can
             make for breakfast. But the highlight of these recipes is that they come with a desi twist</p>  
            <p className='center-img'>
            <img src={article1} alt="Sandwich." />
            </p>
        </div>
        <div className='content'>
            <p>Waking up in the morning, we can't help but wonder what's on our breakfast menu! After
                fasting for so many hours during our sleep, it is only natural for our tummy to growl
                for some delicious breakfast. But from experience, we have realized that making 
                breakfast classics like chole bhature and aloo paratha can be time-consuming.
                Then how do we satisfy our cravings without spending a lot of time in the kitchen?
                By indulging in a sandwich! We have created a list of easy sandwich recipes you 
                can make for breakfast. But the highlight of these recipes is that they come with 
                a desi twist.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>7 Desi Sandwiches You Can Make For A Scrumptious Breakfast:</h2>
            <h3>1.Tandoori Chicken Sandwich - Our Recommendation</h3>
            <h4>Tandoori chicken lovers shall love this
                 meaty treat! To make this sandwich at home, all you have to do is fill the sandwich with<br />
                 leftover tandoori chicken, veggies, cheese and sauces. Biting into this tandoori sandwich
                 is a true delight.</h4>
            <h3>2.Bombay Sandwich</h3>
            <h4>Right from the streets of Mumbai, this street-style Bombay sandwich is a spicy delight for
                 foodies. Crispy and delicious,<br /> this sandwich is filled with green chutney, chaat masala,
                 potatoes and cucumbers and it is ready in no more than 20 minutes.</h4>
            <h3>3.Double Aloo-Veg Masala Sandwich</h3>
            <h4>This double-layered potato sandwich is made with intensely decadent layers of mashed vegetables
                 and potatoes slid in between<br /> three bread slices. To make the masala filing, you would need to
                  make a spicy mixture of aloo, chopped capsicum, bell peppers,<br /> onions and tomatoes.</h4>
            <h3>4.Dahi Sandwich</h3>
            <h4>With the goodness of yoghurt and veggies, this sandwich is quite the summer treat. To make
                 this creamy sandwich, just mix your<br /> choice of veggies with yoghurt and season it with salt
                  and pepper, spread the filling on the bread and toast it.</h4>
            <h3>5.Naan Sandwich</h3>
            <h4>As the name suggests, this sandwich is made from naan, not bread! Sounds interesting, doesn't 
                it? For the stuffing, you can add<br /> some mint chutney and sliced tomato, cucumber, and onion or 
                you can add in a little extra effort and go all the way in and prepare a soya aloo paneer filling.</h4>
            <h3>6.Paneer Bhurji Sandwich</h3>
            <h4>This paneer sandwich comes with a desi twist. With turmeric powder, red chilli powder and garlic,
                 the flavourful paneer bhurji<br /> is placed in the bread to make a desi sandwich. Enjoy this sandwich
                  as a filling snack or a delicious breakfast.</h4>
            <h3>7.Railway Omelette Sandwich</h3>
            <h4>When we think about railways, we can't help but reminisce about the food we enjoy on our
                 travels. The train breakfast always had<br /> the delicious omelette sandwich on the menu.
                  We have found a way to recreate it easily at home.</h4>
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
export default BlogPost;
