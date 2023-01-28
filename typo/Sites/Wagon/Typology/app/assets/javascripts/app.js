// === Wagon main javascript file ===

// Tell Webpack to load the style
import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('fixed_header', Sections.FixedHeader);
  sectionsManager.registerSection('header', Sections.Header);
  sectionsManager.registerSection('product_info', Sections.ProductInfo);
  sectionsManager.registerSection('products', Sections.Product);
  sectionsManager.registerSection('product_suggestion', Sections.ProductSuggestion);
  sectionsManager.registerSection('featured_products', Sections.FeaturedProduct);
  sectionsManager.registerSection('about_us', Sections.AboutU);
  sectionsManager.registerSection('latest_projects', Sections.LatestProject);
  sectionsManager.registerSection('hero', Sections.Hero);

  sectionsManager.start();

});
