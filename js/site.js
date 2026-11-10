/* Pink Unicorns 2145 — shared header/footer and page rendering. Content lives in data.js. */
(function () {
  const D = window.PSU;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const parseDate = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const fmtDate = (iso, opts) => parseDate(iso).toLocaleDateString("en-US", opts || { month: "short", day: "numeric", year: "numeric" });
  const plate = (t) => `<span class="plate">${esc(t)}</span>`;
  const page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";

  const NAV = [
    ["about", "About"], ["news", "News"], ["events", "Events"], ["shop", "Shop"], ["support", "Support us"]
  ];

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800ZM10 15V9l5.200 3-5.200 3Z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M19.500 5.300A17 17 0 0 0 15.300 4l-.5 1a15.600 15.600 0 0 0-5.600 0l-.5-1a17 17 0 0 0-4.200 1.300C1.800 9.300 1.100 13.200 1.500 17a17.100 17.100 0 0 0 5.200 2.600l1.100-1.800a11 11 0 0 1-1.800-.9l.4-.3a12.200 12.200 0 0 0 11.200 0l.4.3c-.6.4-1.200.7-1.800.9l1.100 1.800a17 17 0 0 0 5.200-2.600c.5-4.400-.8-8.300-3-11.700ZM8.700 14.600c-1 0-1.800-1-1.800-2.100s.8-2.100 1.800-2.100 1.900 1 1.800 2.100c0 1.200-.8 2.100-1.800 2.100Zm6.600 0c-1 0-1.800-1-1.800-2.100s.8-2.100 1.800-2.100 1.900 1 1.800 2.100c0 1.200-.8 2.100-1.800 2.100Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.500 7 8.500 6 8.500-6"/></svg>'
  };

  const socials = () => {
    const L = D.links, out = [];
    if (L.instagram) out.push(`<a href="${L.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>`);
    if (L.youtube) out.push(`<a href="${L.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>`);
    if (L.discord) out.push(`<a href="${L.discord}" target="_blank" rel="noopener" aria-label="Discord">${ICONS.discord}</a>`);
    out.push(`<a href="mailto:${L.email}" aria-label="Email the team">${ICONS.mail}</a>`);
    return out.join("");
  };

  customElements.define("psu-header", class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <a class="skip" href="#main">Skip to content</a>
        <header class="site-header">
          <div class="wrap bar">
            <a class="brand" href="index.html" aria-label="Pink Unicorns 2145, home">
              <img src="assets/img/logo-pink.png" alt="" width="26" height="40">
              <span class="brand-name">Pink Unicorns</span>
              <span class="plate">2145</span>
            </a>
            <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
            <nav id="site-nav" aria-label="Main">
              ${NAV.map(([id, label]) => `<a href="${id}.html"${page === id || (id === "news" && page === "post") ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
              <a class="btn btn-pink btn-sm" href="apply.html"${page === "apply" ? ' aria-current="page"' : ""}>Apply</a>
            </nav>
          </div>
        </header>`;
      const btn = this.querySelector(".nav-toggle"), nav = this.querySelector("nav");
      btn.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.textContent = open ? "Close" : "Menu";
      });
    }
  });

  customElements.define("psu-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="site-footer">
          <div class="wrap footer-grid">
            <div>
              <a class="brand" href="index.html"><img src="assets/img/logo-pink.png" alt="" width="26" height="40"><span class="brand-name">Pink Unicorns</span><span class="plate">2145</span></a>
              <p class="muted">A non-profit VEX V5 Robotics Competition team of students from across Northern Virginia.</p>
              <div class="socials">${socials()}</div>
            </div>
            <nav aria-label="Footer">
              <h2>Site</h2>
              <a href="about.html">About</a><a href="news.html">News</a><a href="events.html">Events</a><a href="shop.html">Shop</a>
            </nav>
            <nav aria-label="Get involved">
              <h2>Get involved</h2>
              <a href="apply.html">Apply to join</a><a href="support.html">Donate</a><a href="support.html#sponsor">Sponsor the team</a>
              <a href="index.html#teams">Team results</a>
            </nav>
            <div>
              <h2>Contact</h2>
              <a href="mailto:${D.links.email}">${D.links.email}</a>
            </div>
          </div>
          <div class="wrap legal muted">© ${new Date().getFullYear()} Pink Unicorns, V5RC Team 2145. VEX and V5RC are trademarks of Innovation First, Inc. This site is run by the team and is not affiliated with VEX Robotics, Inc.</div>
        </footer>`;
    }
  });

  /* ---------- renderers ---------- */
  const newsCard = (n) => `
    <a class="news-card" href="post.html?p=${n.slug}">
      <img src="${n.image}" alt="${esc(n.alt)}" loading="lazy">
      <div>
        <time datetime="${n.date}">${fmtDate(n.date)}</time>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.summary)}</p>
      </div>
    </a>`;

  const fmtRange = (e) => {
    const a = parseDate(e.date), month = { month: "long" };
    if (!e.end || e.end === e.date) return a.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    const b = parseDate(e.end);
    return a.getMonth() === b.getMonth()
      ? `${a.toLocaleDateString("en-US", month)} ${a.getDate()} to ${b.getDate()}`
      : `${a.toLocaleDateString("en-US", { month: "long", day: "numeric" })} to ${b.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`;
  };

  const eventRow = (e) => `
    <li class="event">
      <time datetime="${e.date}"><b>${fmtDate(e.date, { day: "numeric" })}</b><span>${fmtDate(e.date, { month: "short", year: "numeric" })}</span></time>
      <div>
        <h3>${esc(e.name)}</h3>
        <p class="muted">${fmtRange(e)}, ${esc(e.place)}</p>
        ${e.teams && e.teams.length ? `<p class="event-teams">${e.teams.map(plate).join("")}</p>` : ""}
        ${e.result ? `<p class="event-result">${esc(e.result)}</p>` : ""}
      </div>
      ${e.url ? `<a class="btn btn-ghost btn-sm" href="${e.url}" target="_blank" rel="noopener">Event details</a>` : ""}
    </li>`;

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const upcoming = D.events.filter((e) => parseDate(e.end || e.date) >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = D.events.filter((e) => parseDate(e.end || e.date) < today).sort((a, b) => b.date.localeCompare(a.date));

  const R = {
    "news-latest": (el) => { el.innerHTML = D.news.slice(0, 3).map(newsCard).join(""); },
    "news-all": (el) => { el.innerHTML = D.news.map(newsCard).join(""); },
    "events-upcoming": (el) => {
      const limit = parseInt(el.dataset.limit, 10) || upcoming.length;
      el.innerHTML = upcoming.length
        ? `<ul class="events">${upcoming.slice(0, limit).map(eventRow).join("")}</ul>`
        : `<div class="empty"><p>No upcoming events are posted yet. Each team's official schedule is on VEX Events.</p><a class="btn btn-ghost" href="index.html#teams">See our teams</a></div>`;
    },
    "events-past": (el) => {
      if (!past.length) { el.closest("section").hidden = true; return; }
      el.innerHTML = `<ul class="events">${past.map(eventRow).join("")}</ul>`;
    },
    "results": (el) => {
      el.innerHTML = D.seasons.map((S) => `
        <div class="season">
          <div class="season-head"><h3>${esc(S.name)}</h3>${S.note ? `<span>${esc(S.note)}</span>` : ""}</div>
          <table class="ledger">
            <caption class="sr">${esc(S.name)} season results</caption>
            <thead><tr><th scope="col">When</th><th scope="col">Event</th><th scope="col">Team</th><th scope="col">Result</th></tr></thead>
            <tbody>${S.results.map((r) => `
              <tr>
                <td class="when">${esc(r.date)}</td>
                <th scope="row">${esc(r.event)}<span>${esc(r.place)}</span></th>
                <td class="teams">${r.teams.map(plate).join("")}</td>
                <td class="result"><b>${esc(r.result)}</b>${r.note ? `<span>${esc(r.note)}</span>` : ""}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>`).join("");
    },
    "teams": (el) => {
      el.innerHTML = D.teams.map((t) => `
        <li class="team">
          ${plate(t.num)}
          <h3>${esc(t.name)}</h3>
          <dl><dt>Robot</dt><dd>${esc(t.robot)}</dd><dt>Level</dt><dd>${esc(t.level)}</dd></dl>
          <a class="text-link" href="${t.url}" target="_blank" rel="noopener" aria-label="${esc(t.num)} official results on VEX Events">Official results</a>
        </li>`).join("");
    },
    "products": (el) => {
      el.innerHTML = D.products.map((p) => `
        <article class="product">
          <div class="product-img">
            <img src="${p.front}" alt="${esc(p.name)}, front" loading="lazy">
            <img class="back" src="${p.back}" alt="${esc(p.name)}, back" loading="lazy">
            ${p.tag ? `<span class="plate">${esc(p.tag)}</span>` : ""}
          </div>
          <div class="product-body">
            <h3>${esc(p.name)}</h3><span class="price">$${p.price}</span>
            <p>${esc(p.desc)}</p><p class="muted">${esc(p.info)}</p>
            <a class="btn btn-pink btn-sm" href="#order" data-order="${esc(p.name)}">Order ${esc(p.name.replace(/\s*\(.*/, "").toLowerCase())}</a>
          </div>
        </article>`).join("");
    },
    "donate": (el) => {
      el.innerHTML = D.donate.map((d) => `
        <a class="donate" href="${d.url}" target="_blank" rel="noopener">
          <b>${esc(d.name)}</b><span>${esc(d.note)}</span>
        </a>`).join("");
    },
    "sponsors": (el) => {
      el.innerHTML = D.sponsors.length
        ? D.sponsors.map((s) => `<a class="sponsor" href="${s.url}" target="_blank" rel="noopener"><img src="${s.logo}" alt="${esc(s.name)}"></a>`).join("")
        : `<div class="sponsor open"><b>Your logo here</b><span>Our sponsor wall is open for the new season.</span></div>`;
    },
    "post": (el) => {
      const slug = new URLSearchParams(location.search).get("p");
      const n = D.news.find((x) => x.slug === slug);
      if (!n) {
        el.innerHTML = `<div class="wrap narrow section"><h1>Post not found</h1><p>That link doesn't match any of our posts. It may have been renamed.</p><a class="btn btn-pink" href="news.html">See all news</a></div>`;
        return;
      }
      document.title = `${n.title} | Pink Unicorns 2145`;
      const others = D.news.filter((x) => x !== n).slice(0, 3);
      el.innerHTML = `
        <article class="wrap narrow section post">
          <a class="back-link" href="news.html">All news</a>
          <h1>${esc(n.title)}</h1>
          <p class="muted">${fmtDate(n.date, { month: "long", day: "numeric", year: "numeric" })}, by ${esc(n.author)}</p>
          <img src="${n.image}" alt="${esc(n.alt)}">
          ${n.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        </article>
        <section class="section paper"><div class="wrap"><h2>More from the team</h2><div class="news-grid">${others.map(newsCard).join("")}</div></div></section>`;
    }
  };

  /* ---------- forms (interest + merch order) ---------- */
  const FORMS = {
    interest: {
      subject: (d) => `PSU interest form: ${d["First name"]} ${d["Last name"]}`,
      sent: "Sent. Next, complete the full PSU application linked above."
    },
    order: {
      subject: (d) => `Merch order: ${d["Quantity"]} x ${d["Item"]} for ${d["First name"]} ${d["Last name"]}`,
      sent: "Order request sent. We'll email you to confirm it and arrange payment and pick-up."
    }
  };

  function wireForm(form) {
    const kind = FORMS[form.dataset.form];
    const status = form.querySelector("[data-status]");
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data.website) return; // spam trap
      delete data.website;
      const total = form.querySelector("[data-total]");
      if (total) data["Total"] = total.textContent;
      const say = (msg, ok) => { status.textContent = msg; status.className = "form-status " + (ok ? "ok" : "err"); };
      if (D.formEndpoint) {
        try {
          const r = await fetch(D.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ _subject: kind.subject(data), _replyto: data["Email"], ...data }) });
          if (!r.ok) throw new Error(r.status);
          form.reset();
          form.dispatchEvent(new Event("change"));
          say(kind.sent, true);
        } catch (e) {
          say(`Couldn't send the form. Check your connection and try again, or email ${D.links.email}.`, false);
        }
      } else {
        const body = Object.entries(data).filter(([, v]) => v !== "").map(([k, v]) => `${k}: ${v}`).join("\n");
        location.href = `mailto:${D.links.email}?subject=${encodeURIComponent(kind.subject(data))}&body=${encodeURIComponent(body)}`;
        say("Your email app should open with your answers filled in. Send that email to finish.", true);
      }
    });
  }

  function wireOrder(form) {
    const item = form.elements["Item"], size = form.elements["Size"], qty = form.elements["Quantity"], total = form.querySelector("[data-total]");
    item.innerHTML = `<option value="">Choose an item</option>` + D.products.map((p) => `<option value="${esc(p.name)}">${esc(p.name)}, $${p.price}</option>`).join("");
    size.innerHTML = `<option value="">Choose a size</option>` + D.sizes.map((z) => `<option>${esc(z)}</option>`).join("");
    const update = () => {
      const p = D.products.find((x) => x.name === item.value);
      const q = Math.max(1, parseInt(qty.value, 10) || 1);
      total.textContent = p ? `$${p.price * q}` : "$0";
    };
    form.addEventListener("input", update); form.addEventListener("change", update);
    document.addEventListener("click", (ev) => {
      const a = ev.target.closest("[data-order]"); if (!a) return;
      item.value = a.dataset.order; update();
      setTimeout(() => size.focus({ preventScroll: true }), 0);
    });
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-render]").forEach((el) => R[el.dataset.render] && R[el.dataset.render](el));
    document.querySelectorAll("[data-link]").forEach((a) => { a.href = (a.dataset.link === "email" ? "mailto:" : "") + D.links[a.dataset.link]; });
        const o = document.querySelector('form[data-form="order"]'); if (o) wireOrder(o);
    document.querySelectorAll("form[data-form]").forEach(wireForm);
  });
})();
