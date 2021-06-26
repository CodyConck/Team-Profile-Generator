const generateManagerCard = manager => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office#: ${manager.getOfficeNumber()}</li>
  </ul>
</div>
`;
}

const generateEngineerCard = engineer => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">GitHub Username: ${engineer.getGithub()}</li>
  </ul>
</div>
`;
}

const generateInternCard = intern => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">School Info: ${intern.getSchool()}</li>
  </ul>
</div>
`;
}

const generateHTML = teamArray => { 
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
        <title>Team Profiles</title>
      </head>
      <body>
      
      ${teamArray.map((employee) =>{
        
        switch(employee.getRole()) {
          case 'Manager':
           return generateManagerCard(employee)
            break;
          case 'Engineer':
            return generateEngineerCard(employee)
            break;
          case 'Intern':
            return generateInternCard(employee)
            break;
        }
      })
    }

      

      <script src="index.js"></script>
      </body>
    </html>
  `;
};

module.exports = generateHTML;
