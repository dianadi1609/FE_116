import '../blogPost/blogpost.css';
import article10 from "../../assets/img/article10.png";
import portrait4 from "../../assets/img/portrait4.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost10 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Summer Special: Mango Sandwich Is The Recent Trend</h2>      
            <div className='details'>
            <div className='imgandname'>
            <div className='details1'>
                <img src={portrait4} alt="Portrait." />
            </div>
            <div className= 'details1.2'>
                <h3>Priyaja Bakshi</h3>
            </div>
            </div>
            <div className= 'details1_22'>
                <h4>17 November 2022</h4>
            </div>
        </div>
            <p className='titletext'>Made with just about 2-3 major ingredients, the mango sandwich is 
                    another fun way to include mango in your diet. Use chilled ingredients
                    for the best experience!</p>  
            <p className='center-img'>
            <img src={article10} alt="Fried." />
            </p>
        </div>
        <div className='content'>
            <p>Mango Sandwich Recipe: Made with just about 2-3 major ingredients, the mango sandwich
                 is another fun way to include mango in your diet. Chill in the fridge before eating 
                 or use chilled ingredients for the best experience!</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h3>How to Make Mango Sandwich:</h3>
            <h4>1. In a bowl, mix together cream/Greek yogurt, cardamom powder, sugar, and mango puree 
                finely smashed mango pieces also work. Let it chill in the fridge.</h4>
            <h4>2. Take bread slices and cut the brown edges.</h4>
            <h4>3. Spread the chilled cream mix on the bread slices, place 4-5 mango slices on each bread, 
                and sandwich with another slice of bread.</h4>
            <h4>4. Potato chips:</h4>
            <h4>5. Keep in the fridge for 5 mins more if you want or enjoy it as is!</h4>
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
export default BlogPost10;