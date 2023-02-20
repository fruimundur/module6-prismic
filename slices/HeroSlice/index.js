import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage   } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section>
    <div className="container">
      <div className="text">
       <span className="title">
        <PrismicRichText field={slice.primary.title} />
       </span>
        <span className="description">
          <PrismicRichText field={slice.primary.description} />
       </span>
      </div>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
    <style jsx>{`
        section {
          max-width: 820px;
          margin: 4em auto;
          border-bottom: 5px ridge #8592e0;
          padding-bottom: 20px;
        }
        .container {
          display: flex;
        }
        .description {
          font-size: 22px;         
          color: #5f689c;
          font-style: italic;
        }
        .title {
          font-family: sans-serif;
          font-size: 40px;
          color: #8592e0;
        }
        .text{
          margin-right: 15px;
        }
    `}</style>
  </section>
)

export default HeroSlice