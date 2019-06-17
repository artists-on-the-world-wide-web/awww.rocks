import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, intro, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient about-container">

        <div className="about-01">
            <h1>{title}</h1>
            <p>{intro.description}</p>
        </div>

        <div 
            className="about-01-image"
            style={{
                backgroundImage: `url(${
                !!intro.image.childImageSharp ? intro.image.childImageSharp.fluid.src : intro.image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
        ></div>

        <div className="about-mural"><span>MURAL GOES HERE!</span></div>
        <div className="about-members-photo">
            <h1>Member</h1>
            <div className="about-members-photo-container">
                <div className="members-photo" id="Chris"><span>Chris</span></div>
                <div className="members-photo" id="Cat"><span>Cat</span></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>   
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
                <div className="members-photo"></div>
            </div>
            
        </div>
        <div className="about-members-description" style={{ paddingTop:"60px" }}>
            <h1>Member Name</h1>
            {/* <h1>{this.state.memberName}</h1> */}
            <p>Memeber Detail</p>
            {/* <p>{this.state.memberDetail}</p> */}
        </div>

      {/* <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
                <p>{intro.description}</p>
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div> */}
      
    </section>
  )
}

AboutPageTemplate.propTypes = {
image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  intro: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
            heading
            description
            image {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
    }
  }
`
