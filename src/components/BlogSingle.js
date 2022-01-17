import React,{Fragment} from 'react'

function BlogSingle() {
    return (
        <Fragment>
            <div className="page-blog-detail u-s-p-t-80">
        <div className="blog-detail-wrapper">
          <h1 className="blog-post-detail-heading">Your Life is an extraordinary Adventure</h1>
          <div className="blog-post-info u-s-m-b-13">
            <span className="blog-post-preposition">By</span>
            <a className="blog-post-author-name" href="blog-detail.html">Admin</a>
            <span className="blog-post-info-separator">/</span>
            <a className="blog-post-comment" href="blog-detail.html">Comments (4)</a>
            <span className="blog-post-info-separator">/</span>
            <span className="blog-post-published-date">
              <span>14</span>/
              <span>06</span>/
              <span>2016</span>
            </span>
          </div>
          <div className="post-content">
            <img className="img-fluid" src="images/blog/blog-01.jpg" alt="Blog Post 1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores inventore
              <a href>laboriosam</a> maiores necessitatibus neque odit quisquam ratione rerum sequi unde veniam veritatis, voluptatem, voluptatibus. Amet, dicta?
            </p>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi corporis cum cumque deserunt expedita explicabo id ipsa nemo officia praesentium quidem, sed, sint soluta sunt tenetur voluptas! Quaerat, reiciendis!
              </p>
            </blockquote>
            <p>
              Lorem ipsum dolor
              <a href>sit amet</a>, consectetur adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores
              <a href>inventore</a> laboriosam maiores necessitatibus neque odit quisquam ratione rerum sequi unde veniam veritatis,
              <a href>voluptatem</a>, voluptatibus. Amet, dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet,
              <a href="#">consectetur</a> adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores inventore laboriosam
              <a href="#">maiores</a> necessitatibus neque odit quisquam ratione rerum sequi unde veniam veritatis, voluptatem, voluptatibus. Amet, dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores inventore laboriosam maiores necessitatibus neque
              <a href="#">odit</a>
              quisquam ratione rerum sequi unde veniam veritatis, voluptatem, voluptatibus. Amet, dicta?
            </p>
            <p>
              Lorem
              <a href="#">ipsum</a> dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores inventore laboriosam maiores necessitatibus neque odit quisquam ratione rerum sequi unde veniam veritatis, voluptatem, voluptatibus. Amet, dicta?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid, architecto corporis enim eum exercitationem fugit harum iste laudantium maxime nam non ratione reiciendis repellendus repudiandae soluta, velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem beatae, consequuntur dolores inventore laboriosam maiores necessitatibus neque odit
              <a href="#">quisquam</a>
              ratione rerum sequi unde veniam veritatis, voluptatem, voluptatibus. Amet, dicta?
            </p>
          </div>
          {/* Post-Social-Media */}
          <div className="post-share-wrapper u-s-m-b-25">
            <ul className="social-media-list">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-rss" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
          {/* Post-Social-Media /- */}
          {/* Post-Tags */}
          <div className="post-tag u-s-m-b-25">
            <h3>Tags:</h3>
            <a href="blog.html" className="bl-tag u-s-m-b-8">Life</a>
            <a href="blog.html" className="bl-tag u-s-m-b-8">World</a>
          </div>
          {/* Post-Tags /- */}
          {/* Previous-Next */}
          <div className="previous-next-wrapper u-s-m-b-25">
            <div className="previous-container">
              <a href="blog-detail.html">
                <i className="fas fa-angle-left u-s-m-r-9" />Previous Post</a>
            </div>
            <div className="next-container">
              <a href="blog-detail.html">Next Post
                <i className="fas fa-angle-right u-s-m-l-9" />
              </a>
            </div>
          </div>
          {/* Previous-Next /- */}
          {/* Post-Comments */}
          <div className="blog-detail-comment u-s-m-b-50">
            <h3 className="comment-title u-s-m-b-30">6 Comments on “Your Life is an extraordinary Adventure”</h3>
            <ol className="comment-list">
              <li>
                <div className="comment-body">
                  <div className="comment-author-image">
                    <img src="images/blog/avatar.jpg" alt="avatar image" />
                  </div>
                  <div className="comment-content">
                    <h3>John Doe</h3>
                    <h6>August 10, 2017 at 11:08 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta doloribus harum numquam provident quidem soluta. Commodi, repudiandae, voluptatem. Aliquid culpa dicta eius, esse perferendis placeat quam quas repellendus suscipit.</p>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </li>
              <li className="comment-reply">
                <div className="comment-body">
                  <div className="comment-author-image">
                    <img src="images/blog/avatar.jpg" alt="avatar image" />
                  </div>
                  <div className="comment-content">
                    <h3>Johnny Chen
                      <span>Replied to</span>John Doe</h3>
                    <h6>August 10, 2017 at 11:08 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta doloribus harum numquam provident quidem soluta. Commodi, repudiandae, voluptatem. Aliquid culpa dicta eius, esse perferendis placeat quam quas repellendus suscipit.</p>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </li>
              <li className="comment-reply">
                <div className="comment-body">
                  <div className="comment-author-image">
                    <img src="images/blog/avatar.jpg" alt="avatar image" />
                  </div>
                  <div className="comment-content">
                    <h3>Rim Wu
                      <span>Replied to</span>Johnny Chen</h3>
                    <h6>August 10, 2017 at 11:08 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta doloribus harum numquam provident quidem soluta. Commodi, repudiandae, voluptatem. Aliquid culpa dicta eius, esse perferendis placeat quam quas repellendus suscipit.</p>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment-body">
                  <div className="comment-author-image">
                    <img src="images/blog/avatar.jpg" alt="avatar image" />
                  </div>
                  <div className="comment-content">
                    <h3>Tim Doe</h3>
                    <h6>August 10, 2017 at 11:08 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. autem dicta doloribus harum numquam provident quidem soluta. commodi, repudiandae, voluptatem. aliquid culpa dicta eius, esse perferendis placeat quam quas repellendus suscipit.</p>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment-body">
                  <div className="comment-author-image">
                    <img src="images/blog/avatar.jpg" alt="avatar image" />
                  </div>
                  <div className="comment-content">
                    <h3>Kim Doe</h3>
                    <h6>August 10, 2017 at 11:08 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta doloribus harum numquam provident quidem soluta. Commodi, repudiandae, voluptatem. Aliquid culpa dicta eius, esse perferendis placeat quam quas repellendus suscipit.</p>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          {/* Post-Comments /- */}
          {/* Post-Comment-Form */}
          <div className="blog-detail-post-comment u-s-m-b-25">
            <h3>Type Your Comment</h3>
            <span>Your email address will not be published. Required fields are marked *</span>
            <form>
              <div className="u-s-m-b-30">
                <label htmlFor="your-comment">Comment</label>
                <textarea className="text-area" id="your-comment" defaultValue={""} />
              </div>
              <div className="u-s-m-b-30">
                <label htmlFor="comment-name">Name
                  <span className="astk">*</span>
                </label>
                <input type="text" id="comment-name" className="text-field" />
              </div>
              <div className="u-s-m-b-30">
                <label htmlFor="comment-email">Email
                  <span className="astk">*</span>
                </label>
                <input type="text" id="comment-email" className="text-field" />
              </div>
              <div className="u-s-m-b-30">
                <label htmlFor="comment-website">Website</label>
                <input type="text" id="comment-website" className="text-field" />
              </div>
              <div className="u-s-m-b-30">
                <button className="button button-outline-secondary w-100">Post Comment</button>
              </div>
            </form>
          </div>
          {/* Post-Comment-Form /- */}
        </div>
      </div>
        </Fragment>
    )
}

export default BlogSingle
