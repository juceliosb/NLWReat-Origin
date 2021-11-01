const LinksSocialMedia{
  github: "juceliosb",
  youtube:"",
  facebook:"",
  instagram:""
  twitter:""

}

function changeSociaMediaLinks{
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = 
  }

}

changeSociaMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(reponse => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.texContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.texContent = data.login
    })
}

//ARROW FUNCTIONS
