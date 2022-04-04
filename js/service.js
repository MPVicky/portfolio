'use strict'

var gProjects;


_createProjects()

function getProjById(id) {
    return gProjects.find(proj => proj.id === id)
}

function getProjects() {
    return gProjects;
}

function _createProjects() {
    var projects = [
        _createProj('Mine Sweeper', 'Dont touch the mines'),
        _createProj('Touch The Numbers', 'Touch all the numbers'),
        _createProj('Book Store', 'My digital library'),
        _createProj('Safe Content', 'Top secret content'),
        _createProj('Chess Game', 'Let\'s play chess'),
        _createProj('Ball Board', 'Collect all the balls'),
    ]

    gProjects = projects;
}

function _createProj(name, title) {
    return {
        id: name,
        name,
        title,
        desc: `The ${name} project`,
        url: `projs/${name}`,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events", 'javaScript', 'css']
    }
}