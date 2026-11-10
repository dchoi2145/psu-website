/*
  Pink Unicorns 2145 — site content.
  Edit this file to update news, events, results, merch and links.
  Nothing else needs to change for routine updates.
*/
window.PSU = {
  links: {
    apply: "https://forms.gle/9x34zw9UtmGbjzqEA",
    email: "pinkunicorns@pinkunicorns.us",
    instagram: "https://www.instagram.com/pinkunicorns2145/",
    youtube: "https://www.youtube.com/@2145zPSU",
    discord: "", // add an invite link to show Discord in the footer
    vexevents: "https://events.vex.com/teams/V5RC/2145Z", // official results now live on VEX Events
    merchCustomize: "https://forms.gle/2HNvEV1zVWEPCRVV7"
  },

  // Where the interest form (apply.html) and merch order form (shop.html) send their answers.
  // Leave empty to open the visitor's email app instead (no setup needed).
  // To collect answers without email, create a free form at formspree.io
  // and paste its URL here, e.g. "https://formspree.io/f/abcdwxyz".
  formEndpoint: "",

  donate: [
    { name: "GoFundMe", note: "Our season fundraiser. Card or Apple Pay.", url: "https://www.gofundme.com/f/support-pink-unicorns-20252026-robotics-season" },
    { name: "Givebutter", note: "Card, Venmo, PayPal or bank transfer.", url: "https://givebutter.com/pinkunicorns" },
    { name: "Venmo", note: "Send directly from the Venmo app.", url: "https://venmo.com/code?user_id=4386912093603703286&created=1759016973.683567&printed=1" },
    { name: "PayPal", note: "Send directly with PayPal.", url: "https://paypal.me/dchoi77" }
  ],

  // Add sponsors as { name, logo: "assets/sponsors/file.png", url }.
  sponsors: [],

  // The five PSU teams, as registered on VEX Events for 2026-27.
  teams: [
    { num: "2145V", name: "Pink Swirlee Unicorns", robot: "Cinnamon", level: "High school", url: "https://events.vex.com/teams/V5RC/2145V" },
    { num: "2145W", name: "Pink Sugaree Unicorns", robot: "Cotton Candy", level: "Middle school", url: "https://events.vex.com/teams/V5RC/2145W" },
    { num: "2145X", name: "Pink Shimmeree Unicorns", robot: "Shimmer", level: "High school", url: "https://events.vex.com/teams/V5RC/2145X" },
    { num: "2145Y", name: "Pink Spanglee Unicorns", robot: "Stripes", level: "High school", url: "https://events.vex.com/teams/V5RC/2145Y" },
    { num: "2145Z", name: "Pink Shinee Unicorns", robot: "The Shining", level: "High school", url: "https://events.vex.com/teams/V5RC/2145Z" }
  ],

  // Results tables on the home page. First season in the list is shown first.
  // Source: events.vex.com team pages (checked Nov 9, 2026).
  seasons: [
    {
      name: "2026–27 Override",
      note: "Season in progress",
      results: [
        { date: "Oct 2026", event: "Great Planes Signature Event", place: "Ashland, NE", teams: ["2145Y"], result: "Ranked 4th in qualification", note: "9-1-0 record" },
        { date: "Oct 2026", event: "Smoky Mountain Forge Signature Event", place: "Sevierville, TN", teams: ["2145Y", "2145V"], result: "Create Award", note: "2145Y Create Award. 2145V went 8-1-0 and ranked 8th" },
        { date: "Oct 2026", event: "Harbor Havoc Signature Event", place: "Portland, ME", teams: ["2145X"], result: "Ranked 10th in qualification", note: "6-3-0 record" },
        { date: "Oct 2026", event: "Bruin in the Den", place: "Woodbridge, VA", teams: ["2145V", "2145X"], result: "Tournament Champions", note: "2145V Energy Award, 2145W Judges Award" },
        { date: "Nov 2026", event: "OWL Firehouse Fall Classic", place: "Woodbridge, VA", teams: ["2145X"], result: "Robot Skills Champion", note: "" }
      ]
    },
    {
      name: "2025–26 Push Back",
      note: "Highlights from 66 awards across five teams",
      results: [
        { date: "Sep 2025", event: "Highlander Summit Signature Event", place: "Newark, NJ", teams: ["2145V"], result: "Tournament Champions", note: "" },
        { date: "Sep 2025", event: "Great Planes Signature Event", place: "Ashland, NE", teams: ["2145Z"], result: "Tournament Champions, Build Award", note: "" },
        { date: "Oct 2025", event: "Lobstah Bowl Signature Event", place: "Orono, ME", teams: ["2145X"], result: "Excellence Award", note: "" },
        { date: "Nov 2025", event: "Smoky Mountain Forge Signature Event", place: "Sevierville, TN", teams: ["2145V", "2145Z", "2145Y"], result: "Tournament Champions", note: "2145V and 2145Z won the high school event, 2145Y the middle school event. 2145Z Think Award" },
        { date: "Mar 2026", event: "Virginia State Championship, high school", place: "Marshall, VA", teams: ["2145Z", "2145X"], result: "Tournament Champions, Design Award", note: "2145Z champions and Design Award, 2145X finalists" },
        { date: "Mar 2026", event: "Virginia State Championship, middle school", place: "Woodbridge, VA", teams: ["2145Y", "2145W"], result: "Tournament Champions, Think Award", note: "2145Y champions and Think Award, 2145W semifinalists" },
        { date: "Apr 2026", event: "VEX Robotics World Championship", place: "St. Louis, MO", teams: ["2145Z"], result: "Division Champions", note: "Won the Design division and reached the Dome semifinals. All five PSU teams competed" }
      ]
    }
  ],

  // Events. Dates are YYYY-MM-DD ("end" is optional). Past dates move to
  // "Past events" automatically; add a "result" line once an event is over.
  events: [
    { date: "2027-02-12", end: "2027-02-14", name: "NorCal Silicon Valley Signature Event", place: "Milpitas, CA", teams: ["2145Z"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-5374.html" },
    { date: "2027-02-10", end: "2027-02-12", name: "Bots @ Bristol Signature Event", place: "Bristol, TN", teams: ["2145V", "2145W", "2145X", "2145Y", "2145Z"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4572.html" },
    { date: "2027-01-27", end: "2027-01-30", name: "Gateway to the West Signature Event", place: "Triadelphia, WV", teams: ["2145W", "2145X", "2145Y", "2145Z"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/VE-V5-26-66295.html" },
    { date: "2027-01-22", end: "2027-01-23", name: "Kalahari Classic Signature Event", place: "Sandusky, OH", teams: ["2145Y"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4692.html" },
    { date: "2027-01-15", end: "2027-01-16", name: "Auburn Cord Duesenberg Robotics Festival Signature Event", place: "Auburn, IN", teams: ["2145Y"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4812.html" },
    { date: "2026-12-06", end: "2026-12-07", name: "Slugger Signature Event", place: "Louisville, KY", teams: ["2145W", "2145Y", "2145Z"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4727.html" },
    { date: "2026-12-03", end: "2026-12-05", name: "WAVE at WPI Signature Event", place: "Worcester, MA", teams: ["2145V", "2145X"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-5280.html" },
    { date: "2026-11-14", name: "8th Annual All Saints Tournament", place: "Manassas, VA", teams: ["2145V", "2145W", "2145X", "2145Y", "2145Z"], url: "https://events.vex.com/robot-competitions/vex-robotics-competition/VE-V5-26-65638.html" },
    { date: "2026-11-08", name: "OWL Firehouse Fall Classic", place: "Woodbridge, VA", teams: ["2145V", "2145W", "2145X"], result: "2145X Robot Skills Champion", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4223.html" },
    { date: "2026-10-24", name: "Bruin in the Den", place: "Woodbridge, VA", teams: ["2145V", "2145W", "2145X", "2145Y"], result: "2145V and 2145X Tournament Champions. 2145V Energy Award, 2145W Judges Award", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4219.html" },
    { date: "2026-10-16", end: "2026-10-17", name: "Harbor Havoc Signature Event", place: "Portland, ME", teams: ["2145X", "2145Y"], result: "2145X ranked 10th in qualification at 6-3-0", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4926.html" },
    { date: "2026-10-09", end: "2026-10-10", name: "Smoky Mountain Forge Signature Event", place: "Sevierville, TN", teams: ["2145V", "2145W", "2145X", "2145Y"], result: "2145Y Create Award. 2145V ranked 8th at 8-1-0", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4846.html" },
    { date: "2026-10-01", end: "2026-10-03", name: "Great Planes Signature Event", place: "Ashland, NE", teams: ["2145Y"], result: "2145Y ranked 4th in qualification at 9-1-0", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4813.html" },
    { date: "2026-09-25", end: "2026-09-27", name: "Highlander Summit Signature Event", place: "Newark, NJ", teams: ["2145V", "2145X", "2145Y", "2145Z"], result: "", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4246.html" },
    { date: "2026-09-18", end: "2026-09-20", name: "Speedway Signature Event", place: "Indianapolis, IN", teams: ["2145V", "2145X", "2145Y"], result: "", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4359.html" },
    { date: "2026-08-06", end: "2026-08-08", name: "University of North Dakota Signature Event at the Mall of America", place: "Bloomington, MN", teams: ["2145V", "2145X", "2145Z"], result: "", url: "https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4244.html" }
  ],

  // News posts. Newest first. "slug" becomes the link: post.html?p=slug
  news: [
    {
      slug: "2145-lobstah-bowl",
      title: "2145 @ Lobstah Bowl",
      date: "2025-10-20",
      author: "David Choi",
      image: "assets/img/news-lobstah.jpg",
      alt: "Team 2145X with their robots at the Lobstah Bowl in Maine",
      summary: "2145X ranked 1st in qualification and won the Excellence Award at the Lobstah Bowl Signature Event, earning a spot at Worlds.",
      body: [
        "That’s a wrap from Maine, and we’re coming home with the hardware that matters most!",
        "Team 2145X just won the Excellence Award at the Lobstah Bowl Signature Event!",
        "We sent just one team, 2145X, all the way up to Maine for this one, and the pressure was on. The competition was stacked with teams from all over, but they played their hearts out all weekend.",
        "2145X came out absolutely swinging, dominating the qualification matches to secure a fantastic 1st place rank. For eliminations, they allianced with 99125Z from Massachusetts, and the two battled hard through the bracket. They made it all the way to the semifinals, where they were finally knocked out in an incredibly close match that had us all on the edge of our seats.",
        "While the tournament run ended just short, the team's incredible performance didn't go unnoticed. 2145X pulled away with the Excellence Award, the highest honor given at a VEX Robotics competition.",
        "This win means they’ve officially punched their ticket to the VEX World Championship next spring! The Excellence Award is a testament to their top-tier robot, stellar performance, and outstanding professionalism. Getting a Worlds spot this early is just unreal and takes a massive weight off their shoulders for the rest of the season.",
        "Huge congrats to the entire 2145X team. The grind pays off. We couldn’t be prouder. Now, on to Worlds!"
      ]
    },
    {
      slug: "2145-meta-in-the-making",
      title: "2145 @ Meta in the Making",
      date: "2025-10-20",
      author: "David Choi",
      image: "assets/img/news-meta.jpg",
      alt: "Pink Unicorns teams holding trophies at Meta in the Making",
      summary: "2145X and 2145Z won the tournament together at our first local event of the season, with Skills, Think and Amaze awards on top.",
      body: [
        "What a way to kick off the local season! That’s a wrap from our first local competition of the year, and we’re coming home with a mountain of hardware.",
        "Teams 2145X and 2145Z just became the Tournament Champions at Meta in the Making!",
        "The pressure was on to set the bar high for the new season, and our teams delivered. 2145X came out swinging, battling through the qualification matches to secure a dominant 1st place rank.",
        "For eliminations, they teamed up with our very own 2145Z, and the two just couldn't be stopped. They played their hearts out all afternoon, and through some intense elimination rounds, they just kept winning and pulled off the final victory. We also want to give a huge shout-out to 2145Y, who had an incredible run and a strong finish in the semifinals!",
        "Alongside the tournament win, the awards just kept stacking up. 2145Z had a massive showing, also pulling away with the Skills Champions title and the Think Award! And 2145X snagged the Amaze Award for their incredible machine.",
        "Winning this big at the very first event takes a massive weight off their shoulders and proves the grind is already paying off.",
        "Huge congrats to 2145X, 2145Y, and 2145Z. We couldn’t be prouder of this dominant start here in Virginia. Now, on to the next one!"
      ]
    },
    {
      slug: "2145-great-plains",
      title: "2145 @ Great Planes",
      date: "2025-09-27",
      author: "David Choi",
      image: "assets/img/news-greatplanes.jpg",
      alt: "Two 2145Z members with their robot and the Tournament Champion banner at Great Planes",
      summary: "2145Z won the first-ever Great Planes Signature Event in Nebraska, took the Build Award, and qualified for Worlds.",
      body: [
        "That’s a wrap from Nebraska, and we’re coming home with a banner!",
        "Team 2145Z just became the Tournament Champions at the first-ever Great Planes Signature Event!",
        "We sent just one team all the way out to the SAC Aerospace Museum for this one, and the pressure was on. The competition was stacked, but they played their hearts out all weekend.",
        "Alongside becoming the Tournament Champion, the team also pulled away with the Build Award!",
        "Through some absolutely insane qualification matches and elimination rounds that had us all on the edge of our seats, they just kept winning, and they pulled it off.",
        "This win means they’ve officially punched their ticket to the VEX World Championship in St. Louis next spring. Getting a Worlds spot this early is just unreal and takes a massive weight off their shoulders for the rest of the season.",
        "Huge congrats to the entire 2145Z team. The grind pays off. We couldn’t be prouder.",
        "Now, on to Worlds!"
      ]
    },
    {
      slug: "2145-highlander",
      title: "2145 @ Highlander",
      date: "2025-09-15",
      author: "David Choi",
      image: "assets/img/news-highlander.jpg",
      alt: "Pink Unicorns teams at the Highlander Summit at NJIT",
      summary: "2145V won the 100-team Highlander Summit at NJIT and became our first team to qualify for the 2026 World Championship.",
      body: [
        "From September 12th to September 14th, 2025, VEX Robotics Team 2145 competed at the Highlander Summit, an early-season signature event held at NJIT in Newark, New Jersey. With 100 teams in attendance, the competition was fierce.",
        "Teams 2145V, 2145X, and 2145Z put their skills to the test against some of the best robotics programs across the country. After two days of intense qualification and elimination matches, Team 2145V emerged as one of the tournament champions, alongside their alliance partners, 16099A Overclock from Flushing, New York.",
        "This victory is monumental! By winning the tournament, 2145V has officially secured a spot at the prestigious VEX Robotics World Championship in St. Louis, Missouri, in April 2026.",
        "This is a huge moment for our team, and we couldn't be more proud of the hard work and dedication that got them here. Congratulations to all our teams for a fantastic showing, and a special shout-out to 2145V for bringing home the championship title and punching their ticket to Worlds!"
      ]
    }
  ],

  // Merch. Orders come in through the order form on shop.html,
  // which sends to the same place as the interest form (see formEndpoint).
  sizes: ["Small", "Medium", "Large", "XL", "XXL", "XXXL"],
  products: [
    { name: "Zip Up Hoodie (Black)", price: 40, tag: "", front: "assets/shop/zip-black-1.png", back: "assets/shop/zip-black-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "50/50 cotton-polyester blend. Double-lined hood with matching drawstrings." },
    { name: "Crewneck (Black)", price: 35, tag: "New", front: "assets/shop/crew-black-1.png", back: "assets/shop/crew-black-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "50/50 cotton-polyester blend. Double-needle stitching on cuffs and waistband." },
    { name: "Crewneck (Pink)", price: 35, tag: "New", front: "assets/shop/crew-pink-1.png", back: "assets/shop/crew-pink-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "50/50 cotton-polyester blend. Double-needle stitching on cuffs and waistband." },
    { name: "Hoodie (Pink)", price: 35, tag: "", front: "assets/shop/hoodie-pink-1.png", back: "assets/shop/hoodie-pink-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "50/50 cotton-polyester blend. Double-lined hood with matching drawstrings." },
    { name: "T-Shirt (Pink)", price: 25, tag: "", front: "assets/shop/tee-pink-1.png", back: "assets/shop/tee-pink-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "Preshrunk 100% cotton jersey, 5.3 oz." },
    { name: "T-Shirt (Black)", price: 25, tag: "", front: "assets/shop/tee-black-1.png", back: "assets/shop/tee-black-2.png",
      desc: "Team logo on the front, team name and number on the back.",
      info: "Preshrunk 100% cotton jersey, 5.3 oz." }
  ]
};
