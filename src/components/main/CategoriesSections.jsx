import * as React from "react";
import "../../styles/main/CategoriesSections.scss"
import WebSection from "./WebSection"
import { graphql, useStaticQuery } from "gatsby"
import MobileSection from "./MobileSection"
import CyberSection from "./CyberSection"
import AiSection from "./AiSection"


const CategoriesSections = ({ domain }) => {
  const query = useStaticQuery(
    graphql`
      query categories {
        allStrapiCategories(sort: {fields: strapiId}) {
          edges {
            node {
              strapiId
              name
              alt
              reviews {
                title
                link
                date
                id
                media {
                  name
                  url
                }
              }
            }
          }
        }
      }

    `
  )
  const categories = query.allStrapiCategories.edges

  return (
    <>
      <WebSection categories={categories} domain={domain} />
      <MobileSection categories={categories} domain={domain} />
      <CyberSection categories={categories} domain={domain} />
      <AiSection categories={categories} domain={domain} />
    </>
  )
}

export default CategoriesSections

