$(document).ready(function(){

    // Custom, pseudo "state" object =/=/=/=/=/=/
    let state = {
        sidebar: false,
        page: "About"
    }
    // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

    if ($(window).width() < 500){
        $("#main-title").text("HW");
    }

    // Data =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

    let codeCards = [
        {
            href : "https://gigbook-p3.herokuapp.com/",
            github: "https://github.com/HunterWilkins/GigBook",
            title: "GigBook",
            img: "images/code/Gigbook-Icon.png",
            desc: "The Easiest Way for Venues and Artists to make Beautiful Music Together",
            project: true
        },
        {
            href : "https://hunterwilkins.github.io/project_one/",
            github: "https://github.com/HunterWilkins/project_one",
            title: "Nusic",
            img: "images/code/Nusic-logo-transparent.png",
            desc: "Discover New Music Playing in Your Area",
            project: true
        },
        {
            href : "https://foreel.herokuapp.com/#",
            github: "https://github.com/HunterWilkins/GroupProject2",
            title: "Popcorn Night",
            img: "images/code/Popcorn-Night-logo.png",
            desc: "Take two movies you love, type them in, and find more movies just like them",
            project: true
        },

        {
            href : "https://hunterwilkins.github.io/Top-Tip/",
            github: "https://github.com/HunterWilkins/Top-Tip",
            title: "Top-Tip",
            img: null,
            desc: "The Tip-Top Tipping Calculator!",
            project: false
        }

    ]

    let codePage = 
        `
            <div id = "code">
                <a href = "https://gigbook-p3.herokuapp.com/" target = "_blank">GigBook
                <a href = "https://hunterwilkins.github.io/Top-Tip/" target = "_blank">Top-Tip
                <a href = "https://hunterwilkins.github.io/Cool_Trivia/" target = "_blank">Cool Trivia!
                <a href = "https://hunterwilkins.github.io/project_one/" target = "_blank">Nusic
            </div>
        `
    // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/


    // Population =/=/=/=/=/=/=/=/=/=/=/=/=/=/
    codeCards.forEach(function(item){
        $("#code").append(
            `
            <div class = "code-card">
                <h2>${item.title}</h2>
                <a href = ${item.github} target = "_blank">
                
                    <img class = "github-icon" src = "/images/code/github-icon.png" alt = "github repo">
                </a>
                <a href = ${item.href} target = "_blank">
                ${item.img ? ` <img src = ${item.img} alt = "deployed link">` : `<h1 class = "signature" >HW</h1>`}
                
               
                </a>                
                <hr>
                <p><em>${item.desc}</em></p>

            </div>
            `
        );
    });
   
    // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

    // Sidebar functionality
    $("#show-sidebar").on("click", function(){
        toggleSidebar();
    });

    function toggleSidebar(direction) {
        if (direction === "close") {
            $("#sidebar").css("left", "-310px");
            state.sidebar = false;
        }
        else if (direction === "open") {
            $("#sidebar").css("left", "0");
            state.sidebar = true;
        }

        else {
            $("#sidebar").css("left", state.sidebar ? "-310px" : "0");
            state.sidebar = !state.sidebar;
        }
        
    }

    $(window).on("resize", function(){
        if ($(window).width() < 500){
            $("#main-title").text("HW");
        }
        else {
            $("#main-title").text("Hunter Wilkins");
        }
    });


    // End of Document.Ready function =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
});