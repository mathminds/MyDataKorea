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
      <a href="/">
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
      /></a>
      <p>
        Created by <strong>MyData Korea Hub. </strong> <br />
         MyData Korea Hub Official 웹사이트입니다.<br />
        {` `}

        트위터 계정 <a href={`https://twitter.com/${social.twitter}`}>
          @MyDataKorea</a>를 팔로우하고 최신 소식을 받아보세요.
      </p>
    </div>
  )
}

export default Bio
