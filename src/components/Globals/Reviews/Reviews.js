import React from "react"
import "./reviews.css"
import Title from "../Title"

const Reviews = () => {
  return (
    <div className="rev-section">
      <div className="col-10 mx-auto my-4">
        <Title title="~ Our Customer Testimonials ~" />
        <div className="reviews">
          <div className="review">
            <div className="head-review">
              <img
                className="review-img"
                src="https://images.pexels.com/photos/2599509/pexels-photo-2599509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                width="250px"
                alt="user review"
              />
            </div>
            <div className="body-review">
              <div className="name-review">To Huyfinity</div>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <div className="desc-review">
                I thoroughly enjoy a weekly treat for myself! Great place for
                specialty drinks and delicious breakfast sandwiches. Fantastic
                service! A great spot in town
              </div>
            </div>
          </div>
          <div className="review">
            <div className="head-review">
              <img
                className="review-img"
                src="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                width="250px"
                alt="user review"
              />
            </div>
            <div className="body-review">
              <div className="name-review">Pamela Smith</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="desc-review">
                Such an amazing cafe joint for family gathering. Friends
                gathering. Any type of fun social gathering!! They have a wide
                selection of drinks and a handful of hand food too!!
              </div>
            </div>
          </div>
          <div className="review">
            <div className="head-review">
              <img
                className="review-img"
                src="https://images.unsplash.com/photo-1604413713816-036c76b295ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1420&q=80"
                width="250px"
                alt="user review"
              />
            </div>
            <div className="body-review">
              <div className="name-review">Johnathan Finely</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="desc-review">
                So nice! So yummy! And super affordable! And such a cute and
                welcoming place! I have never been disappointed! And their
                specials are always amazing!
              </div>
            </div>
          </div>
          <div className="review">
            <div className="head-review">
              <img
                className="review-img"
                src="https://images.unsplash.com/photo-1563899958-09f6d0d76342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                width="250px"
                alt="user review"
              />
            </div>
            <div className="body-review">
              <div className="name-review">Dave Mateer</div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half" />
              </div>
              <div className="desc-review">
                This is an amazing place to come and enjoy a delicious beverage
                or some of their great food. It's a comfortable environment with
                friendly staff. 10/10 definitely recommend!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
