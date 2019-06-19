import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({ title, intro, members }) => {

    // React Hooks
    const [index, setIndex] = useState(0);

    const handleClick = (i) => {
        setIndex(i)
    }

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
                    {members.map((member, index) => (
                        <div onClick={() => handleClick(index)} className="members-photo" id={member.name} key={member.profileImage.id}>
                            <PreviewCompatibleImage
                                imageInfo={{
                                image: member.profileImage,
                                alt: `Profile Image of ${
                                    member.name
                                }`,
                            }}
                            />
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="about-members-description" style={{ paddingTop:"60px" }}>
                <h1>{members[index].name}</h1>
                <p>{members[index].description}</p>
            </div>
        </section>
    )
    // }
}

AboutPageTemplate.propTypes = {
image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  intro: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  members: PropTypes.array,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
        members={post.frontmatter.members}
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
            description
            image {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        members {
            name
            description
            profileImage {
                id
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
