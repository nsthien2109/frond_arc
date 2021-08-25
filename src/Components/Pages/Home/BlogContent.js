import React from 'react'
import BlogList from './BlogList'
const BlogContent = () => {
    return (
        <div>
            <div className="BlogContent">
                <div className="BlogContent__wrapper row col-12">
                    <div className="BlogContent__list col-8">
                        <BlogList/>
                    </div>
                    <div className="BlogContent__filter col-3">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent;