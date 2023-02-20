import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.BlogPostSlice} BlogPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostSlice>} BlogPostProps
 * @param { BlogPostProps }
 */
const BlogPost = ({ slice }) => (
  <section>
    <span className="title">
      <PrismicRichText field={slice.primary.title}/>
    </span>
    <span className="description">
      <PrismicRichText field={slice.primary.description}/>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </span>
    <div>
    {console.log(slice.items)}
      {slice?.items?.map((item, i) => (
        <PrismicLink field={item.openquotebutton} key={i}>
          {item.openquotebuttontext}
        </PrismicLink>
      ))}
    </div>
    <style jsx>{`
        section {
          max-width: 820px;
          margin: 4em auto;
          text-align: left;
          border-bottom: 1px dotted #FE5577;
          padding-bottom: 30px;
        }
        .title {
          color: #8592e0;
          font-family: sans-serif;
          font-size: 20px;
          color: #FE5577;
        }
        .description {
          display: block;
          font-size: 18px;
          font-style: italic;
          max-width: 520px;
        }
        img {
          max-width: 270px;
        }
    `}</style>
  </section>
)

export default BlogPost