'use strict'

$(renderProjects());

document.querySelector('.btn-contact').addEventListener('click', onContact)


function renderModal(id) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const currProj = getProjById(id)
    const $modalContainer = $('.modal-body')

    const imgSrc = currProj.name.split(' ').join('')
    const year = new Date(currProj.publishedAt).getFullYear()
    const month = new Date(currProj.publishedAt).getMonth()
    const formatMonth = months[month]

    const strHtml = `<h2>${currProj.name}</h2>
       <p class="item-intro text-muted">
         ${currProj.desc}
       </p>
       <img
         class="img-fluid d-block mx-auto"
         src="img/portfolio/${imgSrc}.png"
         alt=""
       />
       <p>
         Lorem ipsum dolor
         sit amet, consectetur adipisicing elit. Est blanditiis
         dolorem culpa incidunt minus dignissimos deserunt repellat
         aperiam quasi sunt officia expedita beatae cupiditate,
         maiores repudiandae, nostrum, reiciendis facere nemo!
       </p>
       <ul class="list-inline">
         <li>Date: ${formatMonth} ${year}</li>
         <li>Client: Threads</li>
         <li>Category: ${currProj.labels.join(' ')}</li>
       </ul>
       <button
         class="btn btn-primary"
         data-dismiss="modal"
         type="button"
       >
         <i class="fa fa-times"></i>
         Close Project
       </button>`

    $modalContainer.html(strHtml)
}


function renderProjects() {
    const projects = getProjects()
    const $projectsContainer = $('.row-items')
    console.log(projects);

    const imgsSrc = projects.map(proj => proj.name.split(' ').join(''))

    var strHtml = projects.map((proj, idx) =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
       <a
         class="portfolio-link"
         data-toggle="modal"
        //  href="#portfolioModal1"
         onclick="renderModal('${proj.id}')"
       >
         <div class="portfolio-hover">
           <div class="portfolio-hover-content">
             <i class="fa fa-plus fa-3x"></i>
           </div>
         </div>
         <img
           class="img-fluid"
           src="img/portfolio/${imgsSrc[idx]}.png"
           alt=""
         />
       </a>
       <div class="portfolio-caption">
         <h4>${proj.name}</h4>
         <p class="text-muted">${proj.title}</p>
       </div>
     </div>`
    )

    $projectsContainer.html(strHtml)

}

function onContact() {
    const $email = $('.email-contact').val()
    const $username = $('.username-contact').val()
    const $text = $('.txt-contact').val()
    const link = `https://mail.google.com/mail/u/0/?fs=1&to=vicky@gmail.com&su=${$username}&body=${$text}&bcc=${$email}&tf=cm`

    $('.email-contact').val('')
    $('.username-contact').val('')
    $('.txt-contact').val('')

    window.open(link, '_blank')
}

