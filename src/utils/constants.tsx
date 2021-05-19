import uuidv4 from "uuid/v4";

const {BUILD_ENV} = process.env;

const LOCAL = "local";
const STAGE = "stage";
const PRODUCTION = "production";
const DEVELOPMENT = "development";

const EMAIL = "email";
const PHONE = "phone";

const APPLE = "apple";
const GOOGLE = "google";
const FACEBOOK = "facebook";

const ENVIRONMENTS = {
  LOCAL,
  STAGE,
  PRODUCTION,
  DEVELOPMENT,
};

const SESSION_ID = uuidv4();
const SIFT_BEACON_KEY = BUILD_ENV === PRODUCTION ? "9c10cdbac9" : "a066987159";
const BEAM_BASE_URL = [STAGE, PRODUCTION].includes(BUILD_ENV)
  ? "https://wprod.sdk.beamimpact.com"
  : "https://webstaging.sdk.beamimpact.com";

// Order types that the website can support
const ORDER_TYPES = {
  PICKUP: "pickup",
  DELIVERY: "delivery",
  KIOSK: "kiosk",
};

const ACCOUNT_TYPES = {
  EMAIL,
  PHONE,
};

const SOCIAL_PLATFORMS = {
  APPLE,
  GOOGLE,
  FACEBOOK,
};

const STATES = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

const PLATFORM = (() => {
  let browser;
  let version;
  let mobile;
  let os;
  let osversion;
  let bit;
  // const ua = window.navigator.userAgent;
  // const platform = window.navigator.platform;

  // if (/MSIE/.test(ua)) {
  //   browser = 'Internet Explorer';
  //   if (/IEMobile/.test(ua)) {
  //     mobile = 1;
  //   }
  //
  //   version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];
  // } else if (/Chrome/.test(ua)) {
  //   // Platform override for Chromebooks
  //   if (/CrOS/.test(ua)) {
  //     platform = 'CrOS';
  //   }
  //
  //   browser = 'Chrome';
  //   version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];
  // } else if (/Opera/.test(ua)) {
  //   browser = 'Opera';
  //
  //   if (/mini/.test(ua) || /Mobile/.test(ua)) {
  //     mobile = 1;
  //   }
  // } else if (/Android/.test(ua)) {
  //   browser = 'Android Webkit Browser';
  //   mobile = 1;
  //   os = /Android\s[\.\d]+/.exec(ua)[0];
  // } else if (/Firefox/.test(ua)) {
  //   browser = 'Firefox';
  //
  //   if (/Fennec/.test(ua)) {
  //     mobile = 1;
  //   }
  //   version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];
  // } else if (/Safari/.test(ua)) {
  //   browser = 'Safari';
  //
  //   if ((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))) {
  //     os = 'iOS';
  //     mobile = 1;
  //   }
  // }
  //
  // if (!version) {
  //   version = /Version\/[\.\d]+/.exec(ua);
  //
  //   if (version) {
  //     version = version[0].split('/')[1];
  //   } else {
  //     version = /Opera\/[\.\d]+/.exec(ua)[0].split('/')[1];
  //   }
  // }
  //
  // if (platform === 'MacIntel' || platform === 'MacPPC') {
  //   os = 'Mac OS X';
  //   osversion = /10[\.\_\d]+/.exec(ua)[0];
  //   if (/[\_]/.test(osversion)) {
  //     osversion = osversion.split('_').join('.');
  //   }
  // } else if (platform === 'CrOS') {
  //   os = 'ChromeOS';
  // } else if (platform === 'Win32' || platform == 'Win64') {
  //   os = 'Windows';
  //   bit = platform.replace(/[^0-9]+/, '');
  // } else if (!os && /Android/.test(ua)) {
  //   os = 'Android';
  // } else if (!os && /Linux/.test(platform)) {
  //   os = 'Linux';
  // } else if (!os && /Windows/.test(ua)) {
  //   os = 'Windows';
  // }

  return {
    browser,
    version,
    mobile,
    os,
    osversion,
    bit,
  };
})();

const IS_INTERSECTION_OBSERVER_SUPPORTED = (() => {
  if (
    !window ||
    !("IntersectionObserver" in window) ||
    !("IntersectionObserverEntry" in window) ||
    !("intersectionRatio" in window?.IntersectionObserverEntry?.prototype)
  ) {
    return false;
  }
  return true;
})();

const TIMEZONES = {
  "America/New_York": "Eastern Standard Time (EST)",
  "America/Chicago": "Central Standard Time (CST)",
  "America/Denver": "Mountain Standard Time (MST)",
  "America/Phoenix": "Mountain Standard Time (MST)",
  "America/Los_Angeles": "Pacific Standard Time (PST)",
  "America/Anchorage": "Alaska Standard Time (AKST)",
  "America/Adak": "Alaska Standard Time (AKST)",
  "Pacific/Honolulu": "Standard Time (HST)",
};

const TIMEZONES_DST = {
  "America/New_York": "Eastern Daylight Time (EDT)",
  "America/Chicago": "Central Standard Time (CST)",
  "America/Denver": "Mountain Daylight Time (MDT)",
  "America/Phoenix": "Mountain Daylight Time (MDT)",
  "America/Los_Angeles": "Pacific Daylight Time (PDT)",
  "America/Anchorage": "Alaska Daylight Time (AKDT)",
  "America/Adak": "Alaska Daylight Time (AKDT)",
  "Pacific/Honolulu": "Hawaii Standard Time (HST)",
};

// Loyalty Systems
const LOYALTY_SYSTEMS = {
  CREDIT: "credit",
  TIER: "tier",
  BANK: "bank",
  VISIT: "visit",
  DEAL: "deal",
  WALLET: "wallet",
};

const DATA_TEST = {
  CART_FOOTER_CHECK_OUT: "cart-footer-check-out",
  CART_FOOTER_CREATE_LINK: "cart-footer-create-link",
  CART_FOOTER_LOG_IN: "cart-footer-log-in",
  CART_FOOTER_PLACE_ORDER: "cart-footer-place-order",
  CART_FOOTER_NEXT: "cart-footer-next",
  CART_FOOTER_CONTINUE_CHECKOUT: "cart-footer-continue-checkout",
};

const ANALYTICS = {
  CART_CLEARED: "Cleared Cart",
  CART_VIEWED: "Cart Viewed",
  CHECKOUT_STARTED: "Checkout Started",
  PRODUCT_ADDED: "Product Added",
  PRODUCT_CLICKED: "Product Clicked",
  PRODUCT_MODIFIED: "Product Modified",
  PRODUCT_REMOVED: "Product Removed",
  PURCHASE: "Purchase",
  UNNAMED_EVENT: "Unnamed Event",
};

export {
  ANALYTICS,
  ACCOUNT_TYPES,
  BEAM_BASE_URL,
  ENVIRONMENTS,
  LOYALTY_SYSTEMS,
  ORDER_TYPES,
  PLATFORM,
  SESSION_ID,
  SIFT_BEACON_KEY,
  SOCIAL_PLATFORMS,
  STATES,
  TIMEZONES,
  TIMEZONES_DST,
  DATA_TEST,
  IS_INTERSECTION_OBSERVER_SUPPORTED,
};

export default {
  ANALYTICS,
  ACCOUNT_TYPES,
  BEAM_BASE_URL,
  ENVIRONMENTS,
  LOYALTY_SYSTEMS,
  ORDER_TYPES,
  PLATFORM,
  SESSION_ID,
  SIFT_BEACON_KEY,
  SOCIAL_PLATFORMS,
  STATES,
  TIMEZONES,
  TIMEZONES_DST,
  DATA_TEST,
  IS_INTERSECTION_OBSERVER_SUPPORTED,
};
