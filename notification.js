const planningToolProject = document.querySelector('.secondP');

planningToolProject.addEventListener('click', () => {
 let answer = confirm("Unfortunately, Heroku stopped providing free hosting, and I won't be able to show you this project live at the moment. But I'll take you to the GitHub repo of this project. :)")
if (answer) {
  window.location.href = 'https://github.com/AleksandrRiabov/fs-planning-tool'
}
});

