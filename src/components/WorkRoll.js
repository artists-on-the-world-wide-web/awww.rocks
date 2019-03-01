import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="portfolio-container">
      <br />
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className=""
              key={post.id}
            >
            <Link className="" to={post.fields.slug}>
            <article className="work-container">
            
              {/* TITLE */}
              <span><span style={{ fontSize:"2rem" }}>{post.frontmatter.title}</span></span>
              <br />
              <br />
              <span> &bull; </span><span className="">{post.frontmatter.date}</span>
              {/* LISTING OUT TAGS */}
              <div>
                {post.frontmatter.tags && post.frontmatter.tags.length ? (
                  <div style={{ marginTop: `10px` }}>
                    <span className="taglist">
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`}>#{tag}</span>
                      ))}
                    </span>
                  </div>
                ) : null}
              </div>
              <br />
              <p>
                {post.frontmatter.description}
              </p>
              </article>
              </Link>
            </div>
          )))}
          </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query WorkRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" }, category: { eq: "Work" }}}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              description
              tags
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
