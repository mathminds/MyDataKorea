/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery compo다ent
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/mydatakorea.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(3.0),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1.5 / 2),
          marginBottom: 0,
          minWidth: 150,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Created by <strong>MyData Korea Hub. </strong> 
         MyData Korea Hub Official 웹사이트입니다.
        {` `}

        <a href={`https://twitter.com/${social.twitter}`}>
          MyData Korea Twitter 로 최신 소식을 받아보세요
        </a>
      </p>
    </div>
  )
}

export default Bio
