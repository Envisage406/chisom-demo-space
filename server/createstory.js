import StoryblokClient from 'storyblok-js-client';
import { MANAGEMENT_TOKEN, SPACE_ID } from './config.js';


const Storyblok = new StoryblokClient({
  oauthToken: MANAGEMENT_TOKEN
});

// If your "Article" schema has a "body" field for nested blocks, add it!
Storyblok.post(`spaces/${SPACE_ID}/stories/`, {
  story: {
    name: "Chisom-Demo Article",
    slug: "Chisom-demo-article",
    content: {
      component: "Article",         
      headline: "Hello world from Chisom's API!",
      body: []                      // for nested blocks here if needed
    }
  }
})
  .then(response => {
    console.log("Story created successfully!", response.data);
  }).catch(error => {
    console.error("Error creating story:", error?.response?.data || error);
  });
