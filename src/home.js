export default function loadHome() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  content.appendChild(container);

  const heading = document.createElement("h1");

  heading.textContent = "Welcome to Food Hunt...!";

  const para = document.createElement("p");
  para.textContent =
    "We serve the bestfood in town. Visit us and taste the difference!";

    container.appendChild(heading);
    container.appendChild(para);


    const timings=document.createElement("div");
    timings.classList.add("timings");
    content.appendChild(timings);
    const hoursHeading=document.createElement("h3");
    hoursHeading.textContent="Hours"
    timings.appendChild(hoursHeading);
    const hours=document.createElement("div")
    timings.appendChild(hours);
    const mon_sat=document.createElement('p');
    mon_sat.textContent="Monday - Saturday : 8am - 8pm";
    hours.appendChild(mon_sat);
    const sun=document.createElement('p');
    sun.textContent="Sunday : 8am - 10pm";
    hours.appendChild(sun);


    const location=document.createElement("div");
    location.classList.add("location");
    content.appendChild(location)

    const loc_head=document.createElement("h3");
    loc_head.textContent="Location";
    location.appendChild(loc_head);

    const address=document.createElement("p");
    address.textContent="1048 madhapur, hyderabad, TG";
    location.appendChild(address);



}
