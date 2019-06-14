import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="portfolio-container">
      <br />
      {posts && (posts
          .map(({ node: post }) => (
            
            // Check if the post is a Featured Post
            post.frontmatter.featuredpost ?

              // Featured Post
              <div key={post.id}>

                <Link  to={post.fields.slug}>
                  <article className="work-container-featured">

                    {/* Adding an Cover Image */}
                    {post.frontmatter.cover ? (
                      <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.cover,
                        alt: `featured image thumbnail for post ${
                          post.title
                        }`,
                      }}
                    />
                    ) : null}

                    <span className="portfolio-description">
                      {/* TITLE */}
                      <span className="portfolio-title" style={{ fontSize:"2rem" }}>{post.frontmatter.title}</span>
                      <span className="">{post.frontmatter.date}</span>
                      
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
                      <p className="description">
                        {post.frontmatter.description}
                      </p>
                    </span>

                  </article>
                </Link>
              </div>

            : 

            // Non Featured Post
            <div key={post.id}>
              <Link to={post.fields.slug}>
                <article className="work-container-non-featured">

                  {/* Adding an Cover Image */}
                  {post.frontmatter.cover ? (
                    <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.cover,
                      alt: `featured image thumbnail for post ${
                        post.title
                      }`,
                    }}
                  />
                  ) : null}

                  <span className="portfolio-description">
                    {/* TITLE */}
                    <span className="portfolio-title" style={{ fontSize:"2rem" }}>{post.frontmatter.title}</span>
                    <span className="">{post.frontmatter.date}</span>
                    
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
                    <p className="description">
                      {post.frontmatter.description}
                    </p>
                  </span>

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
                featuredpost
                cover {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
