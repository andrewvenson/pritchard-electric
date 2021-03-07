import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const homeHandler = {
  pattern: "/",
  func: ({ state }) => {
    state.source.data["/"].isHome = true;
  },
};

const contactHandler = {
  pattern: "/contact",
  func: ({ state }) => {
    state.source.data["/contact/"].isContact = true;
  },
};

const faqHandler = {
  pattern: "/faq",
  func: ({ state }) => {
    state.source.data["/faq/"].isFaq = true;
  },
};

const galleryHandler = {
  pattern: "/gallery",
  func: ({ state }) => {
    state.source.data["/gallery/"].isGallery = true;
  },
};

const commercialHandler = {
  pattern: "/commercial-electrical-services",
  func: ({ state }) => {
    state.source.data["/commercial-electrical-services/"].isCommercial = true;
  },
};

const lightingHandler = {
  pattern: "/lighting-services",
  func: ({ state }) => {
    state.source.data["/lighting-services/"].isLighting = true;
  },
};

const residentialHandler = {
  pattern: "/residential-electrical-services",
  func: ({ state }) => {
    state.source.data["/residential-electrical-services/"].isResidential = true;
  },
};

const electricalHandler = {
  pattern: "/electrical-panel-upgrades",
  func: ({ state }) => {
    state.source.data["/electrical-panel-upgrades/"].isElectrical = true;
  },
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      init: ({ libraries }) => {
        libraries.source.handlers.push(homeHandler);
        libraries.source.handlers.push(contactHandler);
        libraries.source.handlers.push(faqHandler);
        libraries.source.handlers.push(galleryHandler);
        libraries.source.handlers.push(electricalHandler);
        libraries.source.handlers.push(lightingHandler);
        libraries.source.handlers.push(commercialHandler);
        libraries.source.handlers.push(residentialHandler);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
