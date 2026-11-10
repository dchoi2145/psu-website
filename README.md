# Pink Unicorns 2145 website

A plain static site: HTML, one stylesheet, two scripts. No build step.

## Preview it

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Update content

Almost everything that changes lives in `js/data.js`:

- `news` – add a post at the top of the list. Put its photo in `assets/img/`.
- `events` – add `{ date: "YYYY-MM-DD", end, name, place, teams, url }`. Past dates move to "Past events" on their own; add a `result` line afterwards.
- `seasons` – the results tables on the home page (current season first).
- `teams` – the five teams shown on the home page.
- `products`, `sizes` – merch and prices. Orders arrive through the order form on the Shop page.
- `donate`, `links` – donation and social links. Add a Discord invite to `links.discord` to show it in the footer.
- `sponsors` – add `{ name, logo, url }` and put logos in `assets/sponsors/`.
- `formEndpoint` – where the interest form (Apply) and merch order form (Shop) send answers (see the comment there).

Page text that rarely changes (About, Support) is in the `.html` files.

## After editing

Browsers keep old copies of `js/data.js`, `js/site.js` and `css/style.css` for a while. When you change one, bump the `?v=5` number after its name in every `.html` file (find and replace `?v=5` with `?v=6`) so visitors get the new version right away.

## Publish it

Upload the folder as-is to any static host (GitHub Pages, Netlify, Cloudflare Pages), then point `pinkunicorns.us` at it.
