// Skills List
const skills = [
    "Java (OOP, JavaFX)",
    "Firebase Realtime Database",
    "Software Development",
    "UI/UX Design",
    "Social Media Management",
    "Leadership & Event Moderation"
];

// Projects List
const projects = [
    { title: "Hotel Management Simulation", description: "Developed an interactive system using JavaFX and Java OOP." },
    { title: "Friendship Tracker (Android App)", description: "Designed using MVP architecture and Firebase for data management." }
];

// Experience List
const experience = [
    { title: "Head Host & Moderator | WSEH", duration: "(2021 - 2023)", description: "Led and moderated live sessions, improving user engagement.Facilitated interactive discussions for language learners.Implemented engagement strategies to enhance participation.Organized virtual events and trained new moderators" },
    { title: "Head of Marketing | That One Book Club", duration: "(2023)", description: "Developed social media strategies and enhanced audience engagement.Increased audience engagement through optimized content strategies.Analyzed performance metrics to refine marketing efforts" },
    {title: "Social Media Manager | The Magic Shop",duration:"(Feb 2020 - Aug 2021)", description:" Created mental health awareness content to foster community discussions.Organized live Q&A sessions with mental health professionals.Implemented audience insights for better engagement strategies"},
];

// Graphics Design Work (Images)
const graphicsWork = [
    { image: "images/image-4.jpg", description: "Creative UI/UX Poster Design" },
    { image: "images/image-5.jpg", description: "Bangla institute Design" }
];

// Updated Achievements & Certifications (Images)
const achievements = [
    { image: "./images/img1.jpg", description: "Session Host in WSEH - Led engaging discussions and moderated events." },
    { image: "./images/img22.jpg", description: "Social Media Metrics in The Magic Shop - Analyzed and improved engagement strategies." },
    { image: "./images/img3.jpg", description: "Best Volunteer for Public Relations Department in One Book Club - Recognized for exceptional contributions." }
];


// Function to populate Skills
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.className = "bg-blue-600 p-3 rounded";
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Function to populate Projects
const projectsList = document.getElementById("projects-list");
projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-4 rounded";
    div.innerHTML = `<h3 class="text-xl font-bold">${project.title}</h3><p class="mt-2">${project.description}</p>`;
    projectsList.appendChild(div);
});

// Function to populate Experience
const experienceList = document.getElementById("experience-list");
experience.forEach(exp => {
    const div = document.createElement("div");
    div.className = "mt-4";
    div.innerHTML = `<h3 class="text-xl font-bold">${exp.title}</h3><p class="text-gray-400">${exp.duration}</p><p>${exp.description}</p>`;
    experienceList.appendChild(div);
});

// Function to populate Graphics Design Work
const graphicsList = document.getElementById("graphics-list");
graphicsWork.forEach(graphic => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-4 rounded";
    div.innerHTML = `
        <img src="${graphic.image}" alt="Graphic Design Work" class="w-full h-48 object-cover rounded">
        <p class="mt-2">${graphic.description}</p>`;
    graphicsList.appendChild(div);
});

// Function to populate Achievements & Certifications
const achievementsList = document.getElementById("achievements-list");
achievements.forEach(cert => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-4 rounded";
    div.innerHTML = `
        <img src="${cert.image}" alt="Certificate" class="w-full h-48 object-cover rounded">
        <p class="mt-2">${cert.description}</p>`;
    achievementsList.appendChild(div);
});
