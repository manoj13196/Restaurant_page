export default function loadMenu() {
  const content = document.getElementById("content");
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  const item1 = document.createElement("p");
  item1.textContent = "🍕 Margherita Pizza - $10";

  const item2 = document.createElement("p");
  item2.textContent = "🍔 Cheeseburger - $8";

  container.appendChild(heading);
  container.appendChild(item1);
  container.appendChild(item2);
  content.appendChild(container);
}
