// function for Manager card
function generateManagerCard(employee) {
    return `
    <div class="card col-4">
        <div class="card-header">
        <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="bi bi-cup"></i> ${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>            
            </ul>
        </div>
    </div>
    `
}

// function for Engineer card
function generateEngineerCard(employee) {    
        return `
        <div class="card col-4">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="bi bi-eyeglasses"></i> ${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>            
            </ul>
        </div>
    </div>    
    `
}

// function for Intern card
function generateInternCard(employee) {    
        return `
    <div class="card col-4">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="bi bi-mortarboard"></i> ${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>            
            </ul>
        </div>
    </div>
    `
}

// function for employee cards
function generateEmployeeCard(team) {
    const cards = []
    // loop team array, get employee info
    for (let i = 0; i < team.length; i++) {
        const employee = team[i]
        // if role is Manager, call generate Manager card
        if (employee.getRole() === 'Manager') {
            cards.push(generateManagerCard(employee))
        }
        // if role is Engineer, call generate Engineer card
        if (employee.getRole() === 'Engineer') {
            cards.push(generateEngineerCard(employee))
        }
        // if role is Intern, call generate Intern card
        if (employee.getRole() === 'Intern') {
            cards.push(generateInternCard(employee))
        }
    }
    // convert cards array to string
    const cardsContent = cards.join('')
    return cardsContent
}


// function to rander HTML
function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Team Profile Generator</title>
    </head>
    
    <body>
    <header> 
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 jumbotron text-center">
    <h1>My Team</h1>
    </div>
    </div>
    </div>    
    </header>
    <!-- container for profile  -->
    <main> 
    <div class="container">
    <div class="row justify-content-center">
    <!-- team cards  -->
    ${generateEmployeeCard(team)}
    </div>
    </div>    
    </main>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
    </body>
    </html>
    `
}
module.exports = generateHTML