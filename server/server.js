import StoryblokClient from 'storyblok-js-client';
import { MANAGEMENT_TOKEN, SPACE_ID } from './config.js';


const Storyblok = new StoryblokClient({
  oauthToken: MANAGEMENT_TOKEN
});

Storyblok.post(`spaces/${SPACE_ID}/components/`, {
  "component": {
    "display_name": "Article",         
    "is_nestable": false,                     //For Content Type, set is_nestable to false!
    "is_root": true,                          //true for Content Type!
    "name": "Article",
    "schema": {
      "headline": {
        "description": "This field is used to render a title",
        "pos": 0,
        "translatable": true,
        "type": "text"
      }
    }
  }
})
  .then(response => {
    console.log("Component created successfully!", response.data);
  }).catch(error => {
    console.error("Error creating component:", error?.response?.data || error);
  });

