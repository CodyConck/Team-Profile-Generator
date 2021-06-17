const generateHTML = data => { 

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/style.css">
    <title>Team Profiles</title>
</head>
<body>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.manager}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${data.employeeID}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Office#: ${data.officeNum}</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.manager}</h5>
    <p class="card-text">${data.role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${data.employeeID}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">GitHub: ${data.username}</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.manager}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${data.employeeID}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Office#: ${data.officeNum}</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.manager}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID#: ${data.employeeID}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Office#: ${data.officeNum}</li>
  </ul>
</div>
    
    <script src="index.js"></script>
</body>
</html>
`;
};

module.exports = generateHTML;
