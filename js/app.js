const skills = document.querySelector('#skills')
const stydy = document.querySelector('#study')
const concat = document.querySelector('#contact')
const skillDiv = document.querySelector('#skillDiv')
const studyDiv = document.querySelector('#studyDiv')
const contactDiv= document.querySelector('#contactDiv')

function hideAll() {
  skillDiv.style.display = 'none';
  studyDiv.style.display = 'none';
  contactDiv.style.display = 'none';
}

function toggleSection(section) {
  if (section.style.display === 'block') {
    section.style.display = 'none';
    return;
  }

  hideAll();
  section.style.display = 'block';
}

// EVENT LISTENERS
skills.addEventListener('click', () => toggleSection(skillDiv));
study.addEventListener('click', () => toggleSection(studyDiv));
contact.addEventListener('click', () => toggleSection(contactDiv));