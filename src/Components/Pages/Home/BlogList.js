import React from 'react';
import axios from 'axios';
import '../../../assets/css/styles.css';
import sr from './ScrollReveal';
import { RiLinkedinFill,RiInstagramLine , RiTwitterFill,RiSearchLine,RiArrowDropRightLine ,RiArrowLeftLine,RiArrowRightLine} from "react-icons/ri";


class BlogList extends React.Component {

    //**Props */
    props: Props;

    
    /**State */
    state = {
        blogs: [],
    };

    //**Component Did mount func */
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/nsthien2109/mookdb/blog').then(res => {
            this.setState({blogs: res.data});
            console.log(this.state.blogs);
        });


        const config = {
            origin: 'left',
            duration: 2000,
            delay: 150,
            distance: '30px',
            scale: 0.99,
            easing: 'ease',
        }
        sr.reveal(this.refs.box1, config)

        const config2 = {
            origin: 'right',
            duration: 2000,
            delay: 150,
            distance: '30px',
            scale: 0.99,
            easing: 'ease',
        }
        sr.reveal(this.refs.box2, config2)

    }



    render() {
    return (
        <>
            <div className="BlogContent">
                <div className="BlogContent__wrapper row col-12">
                    <div className="BlogContent__list col-8" ref="box1">
                        {
                            this.state.blogs.map(item => 
                                <div className="BlogContent__item col-12">
                                        <div className="BlogContent__item-content">
                                            <img src={item.blog_img} className="img-blog"/>
                                            <div className="BlogContent__item-info">
                                                <h5 className="Blog__type">{item.blog_type}</h5>
                                                <h3 className="Blog__name">{item.blog_name}</h3>
                                                <p className="Blog__description">{item.blog_sumary}</p>
                                                <p className="Blog__time">{item.blog_time}</p>
                                            </div>
                                        </div>
                                </div>
                            )
                        }

                        <div className="BlogContent__page">
                            <a href="#"><RiArrowLeftLine/></a>
                            <a href="#" class="page_active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><RiArrowRightLine/></a>
                        </div>
                    </div>
             

                    <div className="BlogContent__filter col-4" ref="box2">
                        <div className="Blog__search col-12">
                            <form className="Blog__search-form">
                                <input type="text" className="input-search" placeholder="Type here"/>
                                <button className="submit-search">
                                    <RiSearchLine className="icon-search" size={17}/>
                                </button>
                            </form>
                        </div>

                        <div className="Blog__search col-12">
                            <div className="Blog__recent col-12">
                                <h4>Recent Blog</h4>
                                
                                {
                                    this.state.blogs.map(item => 
                                       <div className="blog__recent-card">
                                           <img src={item.blog_img}/>
                                           <a href="#" >{item.blog_name}</a>
                                       </div> 
                                    )
                                }
                            </div>
                        </div>

                        <div className="Blog__search col-12">
                            <div className="Blog__recent col-12">
                                <h4>ARCHIVES</h4>
                                    <div className="blog__archives-card">                                 
                                       <ul className="blog__archives-list">
                                           <li className="blog__archives-item">
                                               <a href="#">July 2021</a>
                                           </li>
                                           <li className="blog__archives-item">
                                               <a href="#">June 2021</a>
                                           </li>
                                           <li className="blog__archives-item">
                                               <a href="#">August 2021</a>
                                           </li>
                                       </ul>
                                   </div> 
                            </div>
                        </div>

                        <div className="Blog__search col-12">
                            <div className="Blog__recent col-12">
                                <h4>Category</h4>
                                    <div className="blog__category-card">                                 
                                       <ul className="blog__category-list">
                                           <li className="blog__category-item">
                                               <a href="#"><RiArrowDropRightLine size={18}/> Urban Design</a>
                                           </li>
                                           <li className="blog__category-item">
                                               <a href="#"><RiArrowDropRightLine size={18}/> Exterior Design</a>
                                           </li>
                                           <li className="blog__category-item">
                                               <a href="#"><RiArrowDropRightLine size={18}/> Interior Design</a>
                                           </li>
                                       </ul>
                                   </div> 
                            </div>
                        </div>

                        <div className="Blog__search col-12">
                            <div className="Blog__recent col-12">
                                <h4>Tags</h4>
                                    <div className="blog__tag-card">                                 
                                       <a href="#">Architecture</a>
                                       <a href="#">Interior</a>
                                       <a href="#">Exterior</a>
                                       <a href="#">Urban</a>
                                       <a href="#">Design</a>
                                   </div> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         </> 
    )
    }
}

export default BlogList;