import React from "react"
import "../../styles/main/ListBlocks.scss"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import { Link } from "gatsby"
import * as _ from "lodash"
import moment from "moment"


const WebListBlocks = ({ categories, domain }) => {

  let webObject = categories.find((_o) => _o.node.strapiId === 1)
  let webArray = webObject.node.reviews
  let sortedReviews = _.sortBy(webArray, function(o) {
    return moment(o.date)
  })
    .reverse()

  return (
    <>
      <div className="main_secondary">
        <div className="content-article-list">
          <div className="content article-list">
            {sortedReviews.slice(13, 41).map(p => {
              return (
                <article className="article" key={p.id}>
                  <div className="m">
                    <Link to={`/page/${p.id}/${p.link}`}>
                      <picture>
                        <img
                          src={p.media.url}
                          alt=""/>
                      </picture>
                    </Link>
                  </div>
                  <div className="info">
                    <header className="info-header">
                      <div className="time">
                        <AccessTimeIcon/>
                        <span>{p.date}</span>
                      </div>
                      <h2 className="title title-color-default">
                        <Link to={`/page/${p.id}/${p.link}`}>{p.title}</Link>
                      </h2>
                    </header>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default WebListBlocks