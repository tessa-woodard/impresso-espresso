import React from "react"
import Title from "../Globals/Title"
import { Link } from "gatsby"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            We - we roast coffee. Craft of coffee roasting is what we know best. We demand the same levels of commitment to know-how from all of the people we work with. The result of this mutual understanding is a full-flavoured, balanced, and easily recognizable taste of our coffees. We source and buy green coffees directly from farmers.
                        </p>

                        <p className="lead text-muted mb-5">
                            We love coffee. Coffee bean is fascinating. There is nothing that simple and yet that difficult at the same time. Coffee is a multicultural phenomenon, a language understandable by most people on earth. Coffee is a good with a very complex character, multi-faceted, unpredictable. Coffee opens up only to those who devote to it a lot of time and energy, those who ponder over it and admire it.
                        </p>

                        <p className="lead text-muted mb-5">
                            In specialty coffee culture an ability to properly brew coffee is summing it all up. In one cup of coffee we bring together efforts of all of those who worked on the taste of that cup. Efforts by farmers, pickers, those who processed, sorted and graded the coffee, cuppers, roasters.
                        </p>

                        {/* <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">
                                About Page
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}