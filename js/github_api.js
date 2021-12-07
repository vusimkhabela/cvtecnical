load_github()

async function load_github() {
    let git_url = "https://api.github.com/users/vusimkhabela"
    const git_repsonse = await fetch(git_url)
    const git_data = await git_repsonse.json()
    load_gitdata_html(git_data)
}

function load_gitdata_html(githubdata) {
    document.getElementById("github").innerHTML = `
    <div class = "git">
        <div class = "github_port">
        <img height="200" width="200" type=image src="${githubdata.avatar_url}" name="mail-icon" alt="Digitized mail icon"/>
            <h4 class="github_text">GitHub:  <a href=#Links onclick=open_new_window("${githubdata.html_url.slice(7,40)}") style="color: #e61251;">VusiMkhabela</a></h4> 
            <h4 class="github_text">Project: ${githubdata.public_repos}</h4>
            <h4 class="github_text">Joined: ${githubdata.created_at.slice(0,10)}</h4>
        </div>
        <img class ="git_gif_icon" src="img/github.gif" name="git-gif-icon" alt="Digitized github gif">
    </div>
    `
}


function open_new_window(URL) { //function used to open other webpages in a new browser window
    window.open("https://" + URL);
};