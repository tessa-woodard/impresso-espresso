import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Error from "../components/Globals/404/Error"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error />
  </Layout>
)

export default NotFoundPage
