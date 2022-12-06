const planningToolProject = document.querySelector('.secondP');
const message = "Unfortunately, Heroku stopped providing free hosting, and I won't be able to show you this project live at the moment. But I'll take you to the GitHub repo of this project. :)"

planningToolProject.addEventListener('click', () => {
 let answer = confirm(message);

if (answer) {
  window.location.href = 'https://github.com/AleksandrRiabov/fs-planning-tool'
} 

return;
});

