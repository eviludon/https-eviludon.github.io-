// Add a smooth scroll effect to the "Show all" button to scroll to the projects section
document.querySelector('.projects__button').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Highlight navbar links based on section visibility
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__links');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add zoom effect on hover over project tiles
const projectTiles = document.querySelectorAll('.project-tile');

// Initially hide all but the first 3 project tiles
projectTiles.forEach((tile, index) => {
    if (index >= 3) {
        tile.style.display = 'none'; // Hide all projects except the first 3
    }
});

let visibleProjects = 3; // Keep track of how many projects are visible

// When the button is clicked, show the next 3 project tiles
const projectsButton = document.querySelector('.projects__button');
projectsButton.addEventListener('click', () => {
    // Show the next 3 projects
    for (let i = visibleProjects; i < visibleProjects + 3; i++) {
        if (projectTiles[i]) {
            projectTiles[i].style.display = 'block'; // Show the project tile
        }
    }
    visibleProjects += 3; // Update the number of visible projects
    // Hide the button if all projects are visible
    if (visibleProjects >= projectTiles.length) {
        projectsButton.style.display = 'none'; // Hide the button when all projects are shown
    }
});

// Add zoom effect on hover over project tiles
projectTiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.querySelector('.projects__images').style.transform = 'scale(1.05)';
        tile.querySelector('.projects__images').style.transition = 'transform 0.3s ease';
    });

    tile.addEventListener('mouseleave', () => {
        tile.querySelector('.projects__images').style.transform = 'scale(1)';
    });
});

// Dark mode toggle feature
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 20px';
darkModeToggle.style.backgroundColor = '#ab5dee';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.fontSize = '1rem';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Switch to Light Mode';
    } else {
        darkModeToggle.textContent = 'Switch to Dark Mode';
    }
});

// Call me link alert (this could be extended to open phone dialer in the future)
const callLink = document.querySelector('a[href^="tel"]');
if (callLink) {
    callLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Sorry, calling is not yet enabled!');
    });
}
