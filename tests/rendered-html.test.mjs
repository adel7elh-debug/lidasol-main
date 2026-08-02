import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the LIDA Formation homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LIDA/);
  assert.match(html, /Développez des compétences/);
  assert.match(html, /formations pratiques pour maîtriser/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

for (const [path, expected] of [["/formations", "Développez la compétence"], ["/connexion", "Votre apprentissage"], ["/dashboard", "Bonjour, Nadia"], ["/dashboard/formations", "Mes formations"], ["/admin", "Administration"], ["/admin/formations", "Créez, publiez"]]) {
  test(`renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(expected));
  });
}
