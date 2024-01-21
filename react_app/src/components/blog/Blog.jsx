import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import './blog.css';
import article1 from "../../assets/img/article1.png";
import portrait1 from "../../assets/img/portrait1.png";
import article2 from "../../assets/img/article2.png";
import portrait2 from "../../assets/img/portrait2.png";
import article3 from "../../assets/img/article3.png";
import portrait3 from "../../assets/img/portrait3.png";
import article4 from "../../assets/img/article4.png";
import portrait4 from "../../assets/img/portrait4.png";
import article5 from "../../assets/img/article5.png";
import portrait5 from "../../assets/img/portrait5.png";
import article6 from "../../assets/img/article6.png";
import portrait6 from "../../assets/img/portrait6.png";
import article7 from "../../assets/img/article7.png";
import article8 from "../../assets/img/article8.png";
import article9 from "../../assets/img/article9.png";
import article10 from "../../assets/img/article10.png";
import article11 from "../../assets/img/article11.png";
import article12 from "../../assets/img/article12.png";
import Pagination from "../pagination/Pagination";



    const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [PostPerPage] = useState(6);
    const indexOfLastPost = currentPage * PostPerPage;
    const indexOfFirstPost = indexOfLastPost - PostPerPage;



    const paginate = (pageNumber) => setCurrentPage(pageNumber);




    return (
        <>
        <div className= 'vector'></div>
        <div className="title">
        <h1>Blog & Articles</h1>
        <h2>From the newest grocery product everyone is talking about, to the recipe that's all over Instagram, you'll find our take on the latest food news and trends here.</h2>
        </div>
        <div className='linkpost'>
            <NavLink to="/blog/post1">
            <div className='post1'>
            <div className='post1img'>
                <img src={article1} alt="Sandwich." />
            </div>
            <div className='post1text'>
                <h2>7 Desi Sandwich Recipes For An Easy And Masaledaar Breakfast</h2>
                <p>We have created a list of easy sandwich recipes you can make for breakfast. But the highlight of these recipes is that they come with a desi twist.</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post2">
            <div className='post1'>
            <div className='post1img'>
                <img src={article2} alt="Dinner." />
            </div>
            <div className='post1text'>
                <h2>High Protein: 5 Protein-Rich Dinner Recipes</h2>
                <p>We bring you a list of 5 protein-rich dinner recipes that you can rustle up in just 20 minutes.</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait2} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Gauri Rohatgi</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>5 June 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post3">
            <div className='post1'>
            <div className='post1img'>
                <img src={article3} alt="Pickle." />
            </div>
            <div className='post1text'>
                <h2>Mango Pickle, Onion Pickle And More: 5 Instant Pickle Recipes</h2>
                <p>Here we bring you a list of pickle recipes that you can make in a matter of minutes.
                     They need just 15-20 minutes to get ready. So, what are you waiting for? Let's get
                     started with the list</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait3} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Gauri Rohatgi</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>5 June 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post4">
            <div className='post1'>
            <div className='post1img'>
                <img src={article4} alt="Egg." />
            </div>
            <div className='post1text'>
                <h2>Indian Cooking Tips: 5 Desi Egg-Based Snack Recipes</h2>
                <p>Looking for unique party snack recipes? We have found five
                 egg-based delicious snacks that have an Indian/desi tadka</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait4} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Priyaja Bakshi</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>28 October 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post5">
            <div className='post1'>
            <div className='post1img'>
                <img src={article5} alt="Egg." />
            </div>
            <div className='post1text'>
                <h2>Indian Cooking Tips: 5 Desi Egg-Based Snack Recipes</h2>
                <p>Looking for unique party snack recipes? We have found five
                 egg-based delicious snacks that have an Indian/desi tadka</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait5} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Priyaja Bakshi</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>28 October 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post6">
            <div className='post1'>
            <div className='post1img'>
                <img src={article6} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>Healthy Lunchbox Recipes: Delicious Dishes</h2>
                <p>Looking for unique party snack recipes? We have found five
                 egg-based delicious snacks that have an Indian/desi tadka</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait6} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Gauri Rohatgi</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>14 August 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post7">
            <div className='post1'>
            <div className='post1img'>
                <img src={article7} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>5 Things You Can Use Instead Of Breadcrumbs To Coat Fried Foods</h2>
                <p>Ran out of breadcrumbs? Use these 5 food items which work the same for
                   coating fried foods and snacks.</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post8">
            <div className='post1'>
            <div className='post1img'>
                <img src={article8} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>How To Make Garlic Bread Without Using An Oven</h2>
                <p>If you love garlic bread as much as we do, here we have something special for you.
                     We have found one recipe for making restaurant-style garlic bread at home and 
                     that too without an oven.</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post9">
            <div className='post1'>
            <div className='post1img'>
                <img src={article9} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>A Lip-Smacking Recipe That Will Fire Up Your Meals</h2>
                <p>The onion chutney is all things flavourful and has a taste that you have
                    never had before. It is comforting, spicy, and makes for a perfect side dish</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post10">
            <div className='post1'>
            <div className='post1img'>
                <img src={article10} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>Summer Special: Mango Sandwich Is The Recent Trend</h2>
                <p>Made with just about 2-3 major ingredients, the mango sandwich is 
                    another fun way to include mango in your diet. Use chilled ingredients
                    for the best experience!</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post11">
            <div className='post1'>
            <div className='post1img'>
                <img src={article11} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>How To Make Egg And Potato Salad For A Quick Meal</h2>
                <p>This egg-potato salad recipe is light, wholesome and takes less 
                    than 30 minutes for preparation. Find the recipe inside.</p>
                <div className='detailspost'>
                    <div className='imgandname'>
                    <div className='details1'>
                        <img src={portrait5} alt="Portrait." />
                    </div>
                    <div className= 'details1.2'>
                    <h3>Somdatta Saha</h3>
                    </div>
                    </div>
                    <div className= 'details1_22'>
                        <h4>30 May 2022</h4>
                    </div>
                </div>
            </div>
        </div></NavLink> 
       </div>
       <div className='linkpost'>
            <NavLink to="/blog/post12">
            <div className='post1'>
            <div className='post1img'>
                <img src={article12} alt="Fruits." />
            </div>
            <div className='post1text'>
                <h2>Watch: How To Make Chocolate Sauce In 5 Mins</h2>
                <p>We found a super easy chocolate sauce recipe that is not only
                     fuss-free but also takes just five minutes for preparation.</p>
                <div className='detailspost'>
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
            </div>
        </div></NavLink> 
       </div>
       <div className='paginationposts'>
       <Pagination
                postPerPage={PostPerPage}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
       </div>
        </>
    )
}
export default Blog;