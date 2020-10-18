//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SAP ABAP Developer",
    cardImage: "assets/images/experience-page/wipro.png",
    place: "Wipro",
    time: "(Currently working)",
    desp: "<li>Joinned as a Software Application trainee at Wipro.</li> <li>Currently been trained under SAP ABAP developer domain.</li>",
  },
  {
    title: "Android Developer",
    cardImage: "assets/images/experience-page/schufy.jpg",
    place: "Schufy",
    time: "(Curently working)",
    desp: "<li>Working as a freelancer for Schufy.</li><li>Currently, developing an Android application YO-FEST.</li><li>YO-FEST is an Android application which automates the way of conducting fest.</li>",
  },

  {
    title: "Ethical hacking internship",
    cardImage: "assets/images/experience-page/inters.jpg",
    place: "Internshala",
    time: "(1.5 months)",
    desp: "<li>Completed 72 hacking challenges & 1 project.</li><li>Coverd, areas such as Web VAPT, OWASP and SQL Injections, Client Side Attacks, Identifying Security Misconfigurations and Exploiting Outdated Web Applications, Advanced Web Application Attacks.</li>",
  },

  {
    title: "Master Leader",
    cardImage: "assets/images/experience-page/lead.jpg",
    place: "LEAD, Belagavi",
    time: "(Jul, 2017 - present)",
    desp:"<li>Promoted as master leader.</li><li>Completed 8 social projects, 1 major project and mentoring over 80+ students.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);






