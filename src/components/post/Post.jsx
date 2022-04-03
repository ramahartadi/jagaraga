import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam quis excepturi odit culpa at quidem, 
        commodi repellat quia, libero corporis hic eveniet iure consequatur mollitia. Rerum eaque ducimus molestias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam quis excepturi odit culpa at quidem, 
        commodi repellat quia, libero corporis hic eveniet iure consequatur mollitia. Rerum eaque ducimus molestias.</p>
    </div>
  )
}
