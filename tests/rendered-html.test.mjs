import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const {default: worker} = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, {headers: {accept: "text/html"}}), {ASSETS: {fetch: async () => new Response("Not found", {status: 404})}, IMAGES: {}}, {waitUntil() {}, passThroughOnException() {}});
}

test("renders the multidisciplinary consulting homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /solutions intelligentes/);
  assert.match(html, /Conseil &amp; accompagnement/);
  assert.match(html, /Des solutions digitales adaptées à votre activité/);
  assert.match(html, /Accompagnement ISO/);
  assert.doesNotMatch(html, /href="\/dashboard|Connexion|Supabase|progression enregistrée/i);
});

for (const [path, expected] of [
  ["/formations", "Des compétences concrètes"],
  ["/formations/comptabilite-generale", "Objectifs de la formation"],
  ["/inscription?formation=excel-professionnel", "Demande d’inscription"],
  ["/a-propos", "Notre mission"],
  ["/faq", "Questions fréquentes"],
  ["/contact", "Nos coordonnées"],
  ["/mentions-legales", "Mentions légales"],
  ["/politique-confidentialite", "Politique de confidentialité"],
]) {
  test(`renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected));
  });
}

for (const path of ["/connexion", "/dashboard", "/admin", "/formateurs", "/methode", "/entreprises"]) {
  test(`removed route ${path} returns 404`, async () => {
    const response = await render(path);
    assert.equal(response.status, 404);
  });
}
