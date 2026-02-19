const toggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

const links = document.querySelectorAll(".nav-link");

/* Toggle mobile */

toggle.onclick = () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
};

/* Smooth scroll */

links.forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });

    mobileMenu.style.display = "none";
  };
});

/* Active link on scroll */

window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");

  let scroll = window.scrollY;

  sections.forEach((sec) => {
    if (scroll >= sec.offsetTop - 200) {
      let id = sec.getAttribute("id");

      document.querySelectorAll(".nav-link").forEach((a) => {
        a.classList.remove("active");

        document
          .querySelector(`.nav-link[href="#${id}"]`)
          .classList.add("active");
      });
    }
  });
});


const projects = [
  {
    title: "POS System",
    subtitle: "Point of Sale System",
    img: "src/project4.png",
    description:
      "Full-featured POS system for managing sales, customers, and transactions with a modern and responsive interface.",
    tech: ["Next.js", "shadcn/ui", "FastAPI", "MySQL"],
    features: [
      "Sales and billing management",
      "Customer management",
      "Transaction history tracking",
      "Dashboard with analytics",
    ],
  },

  {
    title: "ChatConnect",
    subtitle: "Real-Time Chat Application",
    img: "src/project1.png",
    description:
      "Real-time chat application with messaging, file sharing, and group management.",
    tech: ["Express.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time messaging",
      "File sharing",
      "Group chat management",
      "User authentication",
    ],
  },

  {
    title: "Space Shooter",
    subtitle: "2D Arcade Game",
    img: "src/project3.png",
    description:
      "Classic 2D space shooter game built using LibGDX with smooth gameplay and collision detection.",
    tech: ["Java", "LibGDX"],
    features: [
      "Player movement and shooting",
      "Enemy spawning system",
      "Collision detection",
      "Score tracking",
    ],
  },
];


const grid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  grid.innerHTML += `

<div class="project-card glass reveal">

<div class="project-image">

<img src="${project.img}" height="100%" width="100%" alt="${project.title}" />  

</div>

<div class="project-content">

<h3>${project.title}</h3>

<p class="subtitle">${project.subtitle}</p>

<p class="desc">${project.description}</p>


<div class="tech">

${project.tech.map((t) => `<span>${t}</span>`).join("")}

</div>


<ul class="features">

${project.features.map((f) => `<li>${f}</li>`).join("")}

</ul>


<div class="buttons">

<a href="#" class="btn glow-btn">
Live Demo
</a>

<a href="#" class="btn outline">
GitHub
</a>

</div>


</div>

</div>

`;
});

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "App-Concept",
    link: "https://app-concept.com/",
    period: "Jan 2024 — Present",
    responsibilities: [
      "Working on a SaaS platform for end to end survey management",
      "Collaborating with cross-functional teams to deliver features on time",
      "Writing clean, testable code and performing code reviews",
      "Implementing RESTful APIs",
    ],
    tech: ["Nextjs", "TypeScript"],
  },
  {
    role: "Software Engineering Intern",
    company: "App-Concept",
    link: "https://app-concept.com/",
    period: "Jun 2025 — Nov 2025",
    responsibilities: [
      "Work on a SaaS platform Admin dashboard for C-AR, an augmented reality app",
      "Work on a SaaS platform Admin dashboard for vip-chemnitz, an event-vip matching platform based on profile",
      "Built responsive UI components using Next.js and Tailwind CSS",
      "Integrated third-party APIs and handled state management",
      "Participated in agile sprints and daily standups",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

const timeline = document.getElementById("timelineContainer");

experiences.forEach((exp) => {
  timeline.innerHTML += `

<div class="timeline-item reveal">

<div class="timeline-dot"></div>

<div class="glass experience-card">

<div class="exp-header">

<h3>${exp.role}</h3>

<a href="${exp.link}" target="_blank" class="company">💼 ${exp.company}</a> 


<span class="period">${exp.period}</span>

</div>

<ul class="responsibilities">
${exp.responsibilities.map((r) => `<li>${r}</li>`).join("")}
</ul>

<div class="tech-badges">
${exp.tech.map((t) => `<span>${t}</span>`).join("")}
</div>

</div>

</div>

`;
});

/* Scroll reveal - runs after all dynamic content is loaded */
function checkReveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");

      // Trigger counter animation for CP section
      if (el.classList.contains("cp-card") && !el.dataset.animated) {
        el.dataset.animated = "true";
        animateCounters();
      }
    }
  });
}

// Check on scroll
window.addEventListener("scroll", checkReveal);

// Check on page load
checkReveal();

/* Counter Animation for CP Section */
function animateCounters() {
  const counters = document.querySelectorAll(".value[data-target]");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (target === 190 ? "+" : "");
      }
    };

    updateCounter();
  });
}


// Initialize EmailJS
emailjs.init("USER_ID");

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(() => {
      showToast("Message sent successfully!");
      form.reset();
    }, () => {
      showToast("Failed to send message. Try again!");
    });
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => { toast.classList.remove("show"); }, 3000);
}
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));

    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");

    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});


