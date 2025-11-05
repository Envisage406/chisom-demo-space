import { storyblokEditable } from "@storyblok/react";
 
const Article = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <h1>{blok.headline}</h1>
  </div>
);
 
export default Article;