import '../blogPost/blogpost.css';
import article12 from "../../assets/img/article12.png";
import portrait6 from "../../assets/img/portrait6.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost12 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>Watch: How To Make Chocolate Sauce In 5 Mins</h2>      
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
                <h4>08 May 2022</h4>
            </div>
        </div>
            <p className='titletext'>We found a super easy chocolate sauce recipe
             that is not only fuss-free but also takes just five minutes for preparation.</p>  
            <p className='center-img'>
            <img src={article12} alt="Chocolate." />
            </p>
        </div>
        <div className='content'>
            <p>Picture this - freshly baked rich chocolate cake with a thick layer of chocolate 
                sauce on the top; sounds delicious, isn't it? If you are like us, then you understand 
                how versatile a bottle of chocolate sauce can be. Spread it on the cake, or ice cream,
                better still add it to your milkshake, a decent amount of chocolate sauce can make
                anything taste better. We love having chocolate sauce with toasted bread and biscuits
                too - which means, you can go as creative as you want with a bottle of chocolate 
                sauce at home. What if you suddenly run out of the sauce while baking a cake?! The
                most common reply will be, going to the nearest grocery store and getting hold of a
                new bottle. But we say, why to step out when you can make the chocolate sauce while
                sitting at home?! You heard us.</p>
                <p>We found a super easy chocolate sauce recipe that is not only fuss-free but also
                    takes just five minutes for preparation. All you need in the recipe are sugar,
                    cocoa powder, water, cornflour and vanilla essence. This instant chocolate sauce
                    recipe has been shared by celebrity chef Pankaj Bhadouria on her official Instagram
                    handle. "Don't have Chocolate Sauce at home and need it immediately? Don't worry! 
                    Try my easy 5 Minute Chocolate Sauce recipe!" she wrote alongside the post. Take
                    a look at the quick and easy recipe of instant chocolate sauce.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h3>5-Min Chocolate Sauce Recipe | How To Make Instant Chocolate Sauce:</h3>
            <h4>1. To make the chocolate sauce, first prepare light sugar syrup by adding some sugar and
                 water in a saucepan</h4>
            <h4>2. Now, add cocoa powder to it and mix and fold.</h4>
            <h4>3. Now, take eggs, gherkins, parsley and chives in a bowl and mix it well with mayonnaise,
                 salt and pepper. Now, add the potatoes to it and coat each slice of potato well.</h4>
            <h4>4. Meanwhile, prepare a corn slurry and add it to the pan. Boil it until the sauce turns glossy.</h4>
            <h4>5. Add vanilla essence and your instant chocolate sauce is ready to be used.</h4>
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
export default BlogPost12;