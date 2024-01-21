import './blogpost2.css';
import article2 from "../../assets/img/article2.png";
import portrait2 from "../../assets/img/portrait2.png";
import adv from "../../assets/img/adv.png";
import star from "../../assets/img/star.png";


function BlogPost2 () {
    return (
        <>
       <div className='titlepost1'>
            <h2>High Protein: 5 Protein-Rich Dinner Recipes You Can Rustle Up In Just 20 Mins</h2>      
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
                <h4>05 June 2022</h4>
            </div>
        </div>
            <p className='titletext'>We bring you a list of 5 protein-rich dinner recipes that
                 you can rustle up in just 20 minutes.</p>  
            <p className='center-img'>
            <img src={article2} alt="Sandwich." />
            </p>
        </div>
        <div className='content'>
            <p>Ever wondered why nutritionists and experts recommend protein-rich dinner? Well,
                that's because protein is one of the most important nutrients that our body
                needs for muscular strength and to build skin and hair tissue. If you are 
                on a weight loss diet, a protein-rich diet is utterly important. However, 
                due to our hectic schedule we hardly get time to cook something extravagant.
                Hence, we all look for something easy and quick to make for dinner. Keeping
                this in mind, here we have something for you. Something that may surprise
                you. We bring you a list of 5 protein-rich dinner recipes that you can rustle
                up in just 20 minutes. Yes, you heard us! To make these recipes, you need
                very basic ingredients. For instance, paneer, dal, eggs. So, without much
                ado, let's see what these recipes are and how can we make them at home.</p>
        </div>
        <div className='contentwithadv'>
        <div className='contenttext'>
            <h2>Here's A List Of 5 Protein-Rich Dinner Recipes You Must Try:</h2>
            <h3>Paneer Bhurji: Our Recommendation</h3>
            <h4>A quintessential North Indian recipe, Paneer Bhurji. Loved by all, this recipe 
                includes paneer chunks tossed in tomato-onion gravy full of rich and aromatic
                 spices. Topped with butter, fresh coriander leaves and served hot. Pair it
                  with chapati and your meal is ready.</h4>
            <h3>Egg Bhurji - Mumbai-Style</h3>
            <h4>Here we bring you another protein-rich bhurji recipe and that too in Mumbai style.
                 In this popular recipe, scrambled eggs are tossed with a pool of spices and crunchy 
                 veggies like onion, capsicum and more. You can add veggies as per your likings. </h4>
            <h3>Arhar Dal Khichdi</h3>
            <h4>A comfort food! This recipe is one of the dishes that we have been eating since 
                childhood. High in protein, comforting and super light on the stomach, this recipe
                 has everything. Try it out!</h4>
            <h3>Kashmiri Paneer</h3>
            <h4>Here we bring you another recipe that spells comfort as well as indulgence. Whether
                 you want to rustle up a mid-day meal or you want to end your day on a delicious 
                 note, this protein-rich pulao recipe is suitable for anything and everything.
                  Wondering how to make it?</h4>
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
export default BlogPost2;
