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
    { name: "GoFundMe", note: "Our season fundraiser. Card or Apple Pay.", url: "https://www.gofundme.com/f/pinkunicorns2145" },
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
  // "image" and "alt" are optional (posts without a photo show the logo).
  // "gallery" is an optional list of extra photos shown under the text.
  news: [
    {
      slug: "2145-owl-firehouse-2026",
      title: "2145 @ OWL Firehouse Fall Classic",
      date: "2026-11-08",
      author: "Pink Unicorns",
      summary: "2145X and 2145W reached the final after a 116-116 tie forced a replay, and 2145X won Robot Skills Champion.",
      body: [
        "Three PSU teams spent Sunday at the OWL Firehouse Fall Classic in Woodbridge, a 21-team blended tournament, and came within one match of the title.",
        "All three finished qualification in the top six: 2145X ranked 4th at 5-1, 2145W ranked 5th at 5-1, and 2145V ranked 6th at 4-2.",
        "For eliminations, 2145X teamed up with our middle school team, 2145W. They opened with a 183-8 quarterfinal win, then met 2145V and partner 12914Y in an all-PSU semifinal that X and W took 163-142.",
        "The final against 3760X and 12914X could not have been closer. The first match ended in a 116-116 tie, and the replay went the other way, 38-17, so 2145X and 2145W finished as finalists.",
        "2145X also took home the Robot Skills Champion award with a combined score of 118.",
        "Next up: all five teams at the All Saints tournament in Manassas on November 14."
      ]
    },
    {
      slug: "2145-bruin-in-the-den-2026",
      title: "2145 @ Bruin in the Den",
      date: "2026-10-24",
      author: "Pink Unicorns",
      summary: "2145X and 2145V won the tournament together at the first local Virginia event of the season. 2145V added the Energy Award and 2145W the Judges Award.",
      body: [
        "Pink Unicorns are Tournament Champions at Bruin in the Den! 2145X and 2145V teamed up and won the 40-team blended tournament at Forest Park High School in Woodbridge, the first local Virginia event of the Override season.",
        "Four PSU teams made the trip. 2145X ranked 2nd in qualification at 5-1, and 2145V, 2145W and 2145Y all went 4-2.",
        "In eliminations, 2145X and 2145V won their round of 16 match 113-8, their quarterfinal 68-23 and their semifinal 65-45. The final against 20850Z and 20850W came down to nine points, and X and V took it 165-156.",
        "2145Y and partner 1220X also made a deep run, winning twice before falling in the semifinals to the eventual finalists. Our middle school team, 2145W, made the elimination bracket as well.",
        "The judged awards followed: 2145V won the Energy Award and 2145W won the Judges Award.",
        "Huge congrats to 2145V and 2145X on the first banner of the season."
      ]
    },
    {
      slug: "2145-harbor-havoc-2026",
      title: "2145 @ Harbor Havoc",
      date: "2026-10-17",
      author: "Pink Unicorns",
      image: "assets/img/news-26-harbor.jpg",
      alt: "Pink Unicorns members in black team hoodies at the Harbor Havoc Signature Event",
      summary: "2145X ranked 10th and picked 2145Y as its alliance partner in Portland, Maine. The all-PSU alliance lost its first elimination match by seven points.",
      body: [
        "2145X and 2145Y headed to Portland, Maine for the Harbor Havoc Signature Event, a 50-team field at Brick South.",
        "2145X finished qualification ranked 10th at 6-3, and 2145Y ranked 17th at 5-4.",
        "At alliance selection, 2145X chose 2145Y, putting two Pink Unicorns robots on the same side of the field for eliminations.",
        "Their round of 16 match against 56K and 2055A went down to the wire and ended 148-141 the other way. A tough way to go out, but a strong weekend for both teams against a Signature Event field."
      ],
      gallery: [
        { src: "assets/img/news-26-harbor-x.jpg", alt: "2145X Shimmeree with their robot at Harbor Havoc" },
        { src: "assets/img/news-26-harbor-y.jpg", alt: "2145Y Spanglee with their robot at Harbor Havoc" },
        { src: "assets/img/news-26-harbor-selection.jpg", alt: "The alliance selection screen at Harbor Havoc showing 2145X choosing" }
      ]
    },
    {
      slug: "2145-smoky-mountain-forge-2026",
      title: "2145 @ Smoky Mountain Forge",
      date: "2026-10-10",
      author: "Pink Unicorns",
      image: "assets/img/news-26-smoky.jpg",
      alt: "The Pink Unicorns teams at the Smoky Mountain Forge Signature Event in Sevierville, Tennessee",
      summary: "2145Y won the Create Award, and 2145V went 8-1 and reached the quarterfinals at the 95-team Signature Event in Tennessee.",
      body: [
        "Four PSU teams traveled to Sevierville, Tennessee for the Smoky Mountain Forge Blended Signature Event, with 95 high school and middle school teams at the Sevierville Convention Center.",
        "2145Y came home with the Create Award!",
        "On the field, 2145V had one of its best qualification runs of the season, going 8-1 and ranking 8th. Allied with 88S, they won their round of 16 match 130-10 before losing in the quarterfinals to 20850S and 9364E, who went on to win the tournament.",
        "2145X went 6-3 and ranked 26th. With partner 1255S they also won their first elimination match, then lost a close quarterfinal, 90-66, to the eventual finalists.",
        "2145W, our middle school team, went 4-4-1 against the blended high school and middle school field, and 2145Y finished 4-5.",
        "Thank you to the Smoky Mountain Forge crew for a great event."
      ],
      gallery: [
        { src: "assets/img/news-26-smoky-create.jpg", alt: "Two 2145Y members holding the Create Award trophy at Smoky Mountain Forge" }
      ]
    },
    {
      slug: "2145-great-planes-2026",
      title: "2145 @ Great Planes 2026",
      date: "2026-10-03",
      author: "Pink Unicorns",
      summary: "2145Y went 9-1 and ranked 4th in qualification at the Great Planes Signature Event in Nebraska, then reached the quarterfinals.",
      body: [
        "2145Y made the trip to the Strategic Air Command & Aerospace Museum in Ashland, Nebraska for the Great Planes Signature Event.",
        "We sent just one team, and they made it count. 2145Y went 9-1 in qualification and ranked 4th out of 57 teams.",
        "For eliminations they allied with 8682A, the event's Excellence Award winner. The pair won their round of 16 match 130-30 before being knocked out in the quarterfinals.",
        "A 9-1 record at a Signature Event is a big step for 2145Y in their first high school season. Well done!"
      ]
    },
    {
      slug: "2145-highlander-2026",
      title: "2145 @ Highlander 2026",
      date: "2026-09-27",
      author: "Pink Unicorns",
      image: "assets/img/news-26-highlander.jpg",
      alt: "The Pink Unicorns teams in pink shirts at the Highlander Summit at NJIT",
      summary: "Four PSU teams competed at the 97-team Highlander Summit at NJIT. 2145X reached the semifinals.",
      body: [
        "From September 25 to 27, 2026, four PSU teams were back at NJIT in Newark, New Jersey for the Highlander Summit Signature Event, with 97 teams in attendance.",
        "2145X had the deepest run. After a 4-4 qualification record they allied with 9039J, won their round of 16 match and their quarterfinal, and reached the semifinals, where they lost to 9909M and 1862A, the eventual finalists.",
        "2145V went 5-3 and also made the elimination bracket, going out in the round of 16. 2145Y finished 5-3 and 2145Z finished 4-4.",
        "It was great to see so many friends from other teams again. On to the next one!"
      ],
      gallery: [
        { src: "assets/img/news-26-highlander-z.jpg", alt: "Team 2145Z, Pink Shinee Unicorns, at the Highlander Summit" },
        { src: "assets/img/news-26-highlander-y.jpg", alt: "Team 2145Y, Pink Spanglee Unicorns, at the Highlander Summit" },
        { src: "assets/img/news-26-highlander-x.jpg", alt: "Team 2145X, Pink Shimmeree Unicorns, at the Highlander Summit" },
        { src: "assets/img/news-26-highlander-v.jpg", alt: "Team 2145V, Pink Swirlee Unicorns, at the Highlander Summit" }
      ]
    },
    {
      slug: "2145-speedway-2026",
      title: "2145 @ Speedway",
      date: "2026-09-20",
      author: "Pink Unicorns",
      summary: "All three PSU teams reached the elimination rounds at the Speedway Signature Event in Indianapolis, and 2145V made the semifinals.",
      body: [
        "2145V, 2145X and 2145Y spent three days at the Indianapolis Motor Speedway for the Speedway Signature Event, a 97-team blended field.",
        "All three teams made it into the elimination rounds.",
        "2145V went 6-3 in qualification and ranked 27th. Allied with 2011F, they won their round of 16 match 105-77 and their quarterfinal 112-60 before going out in the semifinals against the eventual finalists.",
        "2145X finished qualification 5-4 and 2145Y finished 4-5, and both were knocked out in the round of 16.",
        "Thank you to the Speedway crew for a well-run tournament. We made a lot of great memories over the three days."
      ]
    },
    {
      slug: "2145-und-mall-of-america-2026",
      title: "2145 @ Mall of America",
      date: "2026-08-08",
      author: "Pink Unicorns",
      summary: "The Override season opened at the 118-team University of North Dakota Signature Event at the Mall of America, where 2145Z reached the quarterfinals.",
      body: [
        "Our Override season started at the Mall of America in Bloomington, Minnesota, with 118 teams at the University of North Dakota Signature Event from August 6 to 8, 2026.",
        "2145Z led the way, going 6-3 in qualification and ranking 25th. They allied with 2131N, the event's Excellence Award winner, won their round of 16 match 63-42, and reached the quarterfinals.",
        "2145V went 4-4-1 and also made the elimination bracket, going out in the round of 16. 2145X finished 5-4.",
        "A solid start against one of the biggest early-season fields in the country."
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
