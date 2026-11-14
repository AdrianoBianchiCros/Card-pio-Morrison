(function () {
  "use strict";

  var MENU = window.MENU || [];
  var menuEl = document.getElementById("menu");
  var tabsEl = document.getElementById("tabs");
  var searchEl = document.getElementById("busca");
  var clearEl = document.getElementById("limpar");
  var resultsEl = document.getElementById("resultados");
  var topBtn = document.getElementById("topo");
  var toolbar = document.getElementById("toolbar");

  var TAGS = {
    flame: { cls: "tag--flame", label: "Em chamas" },
    promo: { cls: "tag--promo", label: "Promoção" },
    zero: { cls: "tag--zero", label: "Zero" },
    house: { cls: "tag--house", label: "Da casa" }
  };

  function money(v) {
    return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function norm(s) {
    return (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function priceNode(value) {
    var p = el("span", { class: "item__price", "aria-label": "R$ " + money(value) });
    p.innerHTML = "<small aria-hidden=\"true\">R$</small><span aria-hidden=\"true\">" + money(value) + "</span>";
    return p;
  }

  /* ---------- Render ---------- */
  function render() {
    var navFrag = document.createDocumentFragment();
    var menuFrag = document.createDocumentFragment();

    MENU.forEach(function (cat) {
      var link = el("a", { href: "#" + cat.id, text: cat.short || cat.title, "data-target": cat.id });
      navFrag.appendChild(el("li", null, [link]));

      var sectionsWrap = el("div", { class: "sections" });
      cat.sections.forEach(function (sec, si) {
        var secId = cat.id + "-" + si;
        var list = el("ul", { class: "items" });

        sec.items.forEach(function (item) {
          var name = el("span", { class: "item__name", "data-text": item.name, text: item.name });
          (item.tags || []).forEach(function (t) {
            if (TAGS[t]) name.appendChild(el("span", { class: "tag " + TAGS[t].cls, text: TAGS[t].label }));
          });

          var row = el("div", { class: "item__row" }, [name]);
          if (typeof item.price === "number") {
            row.appendChild(el("span", { class: "item__dots", "aria-hidden": "true" }));
            row.appendChild(priceNode(item.price));
          }

          var li = el("li", { class: "item" }, [row]);
          if (item.desc) li.appendChild(el("p", { class: "item__desc", "data-text": item.desc, text: item.desc }));

          if (item.prices) {
            var vars = el("ul", { class: "item__variants" });
            item.prices.forEach(function (v) {
              vars.appendChild(el("li", null, [
                el("span", { text: v.label }),
                el("span", { class: "item__dots", "aria-hidden": "true" }),
                priceNode(v.price)
              ]));
            });
            li.appendChild(vars);
          }

          li.dataset.search = norm([item.name, item.desc, sec.title, cat.title,
            (item.prices || []).map(function (v) { return v.label; }).join(" ")].join(" "));
          list.appendChild(li);
        });

        var section = el("section", { class: "section", "aria-labelledby": secId }, [
          el("h3", { class: "section__title", id: secId, text: sec.title }),
          sec.note ? el("p", { class: "section__note", text: sec.note }) : null,
          list
        ]);
        sectionsWrap.appendChild(section);
      });

      menuFrag.appendChild(el("section", { class: "category", id: cat.id, "aria-labelledby": cat.id + "-t" }, [
        el("h2", { class: "category__title", id: cat.id + "-t", text: cat.title }),
        sectionsWrap
      ]));
    });

    var empty = el("div", { class: "empty", id: "vazio", hidden: "" });
    empty.innerHTML = "<strong>Nada por aqui…</strong>Tente outro termo ou fale com o garçom.";
    menuFrag.appendChild(empty);

    tabsEl.appendChild(navFrag);
    menuEl.appendChild(menuFrag);
  }

  /* ---------- Busca ---------- */
  function highlight(node, q) {
    var original = node.getAttribute("data-text");
    if (!original) return;
    var tagNodes = Array.prototype.slice.call(node.querySelectorAll(".tag"));
    node.textContent = "";
    if (!q) {
      node.appendChild(document.createTextNode(original));
    } else {
      var n = norm(original), i = n.indexOf(q);
      if (i === -1) node.appendChild(document.createTextNode(original));
      else {
        node.appendChild(document.createTextNode(original.slice(0, i)));
        node.appendChild(el("mark", { text: original.slice(i, i + q.length) }));
        node.appendChild(document.createTextNode(original.slice(i + q.length)));
      }
    }
    tagNodes.forEach(function (t) { node.appendChild(t); });
  }

  function filter() {
    var q = norm(searchEl.value.trim());
    clearEl.hidden = !q;
    var total = 0;

    menuEl.querySelectorAll(".category").forEach(function (cat) {
      var catCount = 0;
      cat.querySelectorAll(".section").forEach(function (sec) {
        var secCount = 0;
        sec.querySelectorAll(".item").forEach(function (item) {
          var match = !q || item.dataset.search.indexOf(q) !== -1;
          item.hidden = !match;
          if (match) secCount++;
          item.querySelectorAll("[data-text]").forEach(function (n) { highlight(n, q); });
        });
        sec.hidden = secCount === 0;
        catCount += secCount;
      });
      cat.hidden = catCount === 0;
      var tab = tabsEl.querySelector('[data-target="' + cat.id + '"]');
      if (tab) tab.parentNode.hidden = catCount === 0;
      total += catCount;
    });

    document.getElementById("vazio").hidden = total !== 0;
    resultsEl.textContent = q ? (total === 1 ? "1 item encontrado" : total + " itens encontrados") : "";
    updateActive();
  }

  /* ---------- Aba ativa ---------- */
  function setToolbarHeight() {
    document.documentElement.style.setProperty("--toolbar-h", toolbar.offsetHeight + "px");
  }

  var ticking = false;
  function updateActive() {
    var offset = toolbar.offsetHeight + 24;
    var current = null;
    menuEl.querySelectorAll(".category:not([hidden])").forEach(function (cat) {
      if (cat.getBoundingClientRect().top - offset <= 0) current = cat.id;
    });
    if (!current) {
      var first = menuEl.querySelector(".category:not([hidden])");
      current = first && first.id;
    }
    tabsEl.querySelectorAll("a").forEach(function (a) {
      var active = a.dataset.target === current;
      if (active) {
        if (a.getAttribute("aria-current") !== "true") {
          a.setAttribute("aria-current", "true");
          var ul = tabsEl;
          var left = ul.scrollLeft + (a.getBoundingClientRect().left - ul.getBoundingClientRect().left)
            - (ul.clientWidth - a.offsetWidth) / 2;
          ul.scrollTo({ left: left, behavior: "smooth" });
        }
      } else a.removeAttribute("aria-current");
    });
    topBtn.hidden = window.scrollY < 600;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateActive); }
  }

  /* ---------- Citação ---------- */
  function quote() {
    var qs = window.MENU_QUOTES || [];
    if (!qs.length) return;
    var q = qs[Math.floor(Math.random() * qs.length)];
    var box = document.getElementById("citacao");
    box.appendChild(document.createTextNode("“" + q.text + "”"));
    if (q.by) box.appendChild(el("cite", { text: q.by }));
  }

  /* ---------- Init ---------- */
  render();
  quote();
  setToolbarHeight();
  updateActive();

  searchEl.addEventListener("input", filter);
  searchEl.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { searchEl.value = ""; filter(); }
    if (e.key === "Enter") searchEl.blur();
  });
  clearEl.addEventListener("click", function () { searchEl.value = ""; filter(); searchEl.focus(); });
  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("conteudo").focus({ preventScroll: true });
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { setToolbarHeight(); onScroll(); });
})();
