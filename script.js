// full name
if (firstName && lastName) {
    var fullName = firstName + " " + lastName;
} else if (firstName) {
    var fullName = firstName;
} else {
    var fullName = null;
}

// title
if (fullName) {
    document.title = fullName + " - Personal Website";
} else {
    document.title = "Personal Website";
}

// icon
if (iconImg) {
    var icon = document.createElement('link');
    icon.setAttribute('rel', 'icon');
    icon.setAttribute('href', iconImg);
    icon.setAttribute('type', 'image/x-icon');
    document.head.appendChild(icon);
}

// information
if (place) {
    var information = document.getElementById('information');
    var logo = document.createElement('div');
    logo.setAttribute('class', 'col-md-6 p-6 m-auto logo');
    logo.innerHTML = `<img src="${iconImg}" class="img-fluid rounded-circle" alt="Logo">`;
    information.appendChild(logo);
    var dataSection = document.createElement('div');
    dataSection.setAttribute('class', 'col-md-6 p-5 m-auto');
    if (fullName) {
        var nameSection = document.createElement('h1');
        nameSection.innerHTML = fullName;
        dataSection.appendChild(nameSection);
        var placeSection = document.createElement('h4');
        placeSection.innerHTML = place;
        dataSection.appendChild(placeSection);
    }
    if (description) {
        var descriptionSection = document.createElement('p');
        descriptionSection.innerHTML = description;
        dataSection.appendChild(descriptionSection);
    }
    information.appendChild(dataSection);
}

// about
if (about) {
    var aboutSection = document.getElementById('aboutText');
    aboutSection.innerHTML = about;
}


// projects
if (projects) {
    var projectsSection = document.getElementById('projectList');
    for (var project in projects) {
        var projectSection = document.createElement('div');
        projectSection.setAttribute('class', 'col-sm-6 col-md-4 col-lg-3 p-4');
        projectSection.innerHTML = `
            <a href="${projects[project].link}">
                <div class="card bg-secondary text-center p-3">
                    <img src="${projects[project].icon}"
                        class="card-img-top p-3 rounded"
                        style="background-color: ${projects[project].bg}" alt="${project}">
                    <div class="card-body">
                        <h4 class="card-title">${project}</h4>
                        <p class="card-text">${projects[project].description}</p>
                    </div>
                </div>
            </a>`;
        projectsSection.appendChild(projectSection);
    }
}

// accounts
if (accounts) {
    var accountsSection = document.getElementById('accountList');
    for (var account in accounts) {
        var accountSection = document.createElement('div');
        accountSection.setAttribute('class', 'col-sm-6 col-md-4 col-lg-3 p-4');
        accountSection.innerHTML = `
            <a href="${accounts[account].link}">
                <div class="card bg-secondary text-center p-3">
                    <img src="${accounts[account].icon}"
                        class="card-img-top bg-white p-3 rounded"
                        style="background-color: ${accounts[account].bg}" alt="${account}">
                    <div class="card-body">
                        <h4 class="card-title">${account}</h4>
                        <p class="card-text">${accounts[account].description}</p>
                    </div>
                </div>
            </a>`;
        accountsSection.appendChild(accountSection);
    }
}
