let style = document.createElement("style");
document.body.appendChild(style);

browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && "value" in changes) {
    update(changes.value.newValue);
  }
});

function update(value) {
  const style = document.createElement("style");
  style.innerHTML = `html { filter: sepia(${value}%) !important }`;
  document.head.appendChild(style);
}

browser.storage.local.get("value").then((result) => update(result.value));
