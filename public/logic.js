
$(document).ready(function(){

    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "true");
    }

    // changeScheme(localStorage.getItem("darkMode"));

    let mobile;

    checkMobile();

    let routeName =  window.location.pathname.split("/")[1].toLowerCase();
    
    showCurrentPage();

    $(window).resize(function(){
        checkMobile();
        showCurrentPage();

    });

    $("nav").on("click", ".switch", function(){
        let oldScheme = localStorage.getItem("darkMode");
        let newScheme;
        if (oldScheme === "true") {
            newScheme = "false";
        }

        else {
            newScheme = "true";
        }

        // changeScheme(newScheme);
    });

    function checkMobile() {
        if ($(window).width() < 400) {
            mobile = true;
        }      
        else {
            mobile = false;
            $("#sidebar").css({
                "border-top":"none"
            })
        }

        
        if ($(window).width() < 330) {
            $("#main-title").text("HW");
        }

        else {
            $("#main-title").text("Hunter Wilkins");
        }
    }
    
    function showCurrentPage() {
        $("#navbuttons a").each(function() {
            if ($(this).text().toLowerCase() === routeName) {
                $(this).addClass("active-tab");
            }
        });    
    }

    // changeScheme();

   
    // Color Scheme =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
    // function changeScheme(darkMode) {


    //     // if (event) {
    //     //     event.preventDefault();
    //     // }

    //     setTimeout(function(){
            
        
    //     if (darkMode === "false") {
    //         $("nav input").prop("checked", true);

    //         $("link[href='/css/style.css']").attr("href", "/css/bright.css");

    //         if (mobile) {
    //             $("#info a").css({
    //                 "background" : "white"
    //             });    
    //         }
           
    //         $("#info").css({
    //             "border-color" : "black"
    //         });

    //         localStorage.setItem("darkMode", "false");
            
    //     }

    //     else if (darkMode === "true") {
          
    //         $("link[href='/css/bright.css'").attr("href", "/css/style.css");

    //         if (mobile) {
                    
    //             $("#info a").css({
    //                 "background" : "rgb(5, 3, 3)"
    //             });

    //             $("#sidebar").css({
    //                 "border-top": "rgb(245, 197, 92) solid 1px"
    //             });
    //         }

    //         $("#info").css({
    //             "border-color" : "rgb(245, 197, 92)"
    //         });

    //         localStorage.setItem("darkMode", "true");
    //     }

    //     }, 1);

    // }

    // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
    
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
            href : "https://hunterwilkins.github.io/Top-Tip/",
            github: "https://github.com/HunterWilkins/Top-Tip",
            title: "Top-Tip",
            img: null,
            desc: "The Tip-Top Tipping Calculator!",
            project: false
        },
        {
            href: "https://bottomlessbox.herokuapp.com",
            github: "https://github.com/HunterWilkins/Bottomless-Box",
            title: "The Bottomless Box",
            img: "images/code/Icon.png",
            desc: "Inventory management made significantly less dull!",
            project: false
        }

    ]

    
    let artwork = [
        {
            thumbnail: "Artiodactyla-Thumbnail.png", 
            genre: "concept",
            large: "Artiodactyla of the Primordial Winter.jpg",
            desc:"Near the beginning of time, a primordial deer wanders the sunless world." 
        },
        {
            thumbnail: "Bucketbot-Thumbnail.png",
            genre: "romance",
            large: "Bucketbot&#39s Discovery.jpg",
            desc:"A recently-married couple takes a moment to remind each other of their love, drawing the gaze of a longing robot."
        },

        {
            thumbnail: "Opossum-Thumbnail.png",
            genre: "misc",
            large: "Mason&#39s Opossum Shirt.png",
            desc: "Mason hates Opossums, so, I made him this shirt."
        },

        {
            thumbnail:"Lilia-Thumbnail.png",
            genre: "concept",
            large: "Lilia - Goddess of Magic.png",
            desc: "A notorious (and powerful) trickster, Lilia could demolish the world if she so desired. Mortals are thankful she's slow to boredom."
        },

        {
            thumbnail: "Mandolineer-Thumbnail.png",
            genre: "misc",
            large: "The Mandolineer.jpg",
            desc: ""
        },

        {
            thumbnail: "Snake-Thumbnail.png",
            genre: "misc",
            large: "The Cereal Snake.png",
            desc: "HiI'mtheCerealSnakeGoodbye!"
        },
        {
            thumbnail:"Slime-Thumbnail.png",
            genre:"romance",
            large: "The Lonely Slime.jpg",
            desc: "As the immortal slime grows in years, it becomes more complex. Eventually, its mind becomes indistinguishable from a human's, and it learns to long for the same things we do."
        },
        {
            thumbnail: "Iliolos-Thumbnail.png",
            genre: "concept",
            large: "Iliolis - The Trapped Goddess.jpg",
            desc: "A goddess, trapped within an ocean of liquid air, reaches eternally for the one thing that could make her omnipotent."
        },

        {
            thumbnail:"Ugh-Thumbnail.jpg",
            genre: "romance",
            large:"Ugh.jpg",
            desc: "Hostage Situation"
        },
        {
            thumbnail:"It Beats Debt-Thumbnail.jpg",
            genre: "romance",
            large:"It Beats Debt.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Awkward-Thumbnail.jpg",
            genre: "romance",
            large: "Awkward.jpg",
            desc: "Hostage Situation: \"I hope she's not scared...\" / \"I hope he's not crazy...\""
        },
        {
            thumbnail:"A Couple Stories-Thumbnail.jpg",
            genre: "romance",
            large: "A Couple Stories.jpg",
            desc:"Hostage Situation: Nothing brings two outcasts together more than their pasts."
        },
        {
            thumbnail: "Planning-Thumbnail.jpg",
            genre:"romance",
            large: "Planning.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Heist-Thumbnail.jpg",
            genre:"romance",
            large:"Heist.jpg",
            desc:"Hostage Situation"
        },
        {
            thumbnail:"Triumph-Thumbnail.jpg",
            genre:"romance",
            large:"Triumph.jpg",
            desc:"Hostage Situation: \"Three square meals a day and housing with your sweetheart? Sounds like a triumph to me, right?\""
        },

        {
            thumbnail: "Mandolia-Thumbnail.jpg",
            genre:"misc",
            large:"Mandolia.jpg",
            desc:"A birthday present for my Dad, who plays the mandolin."
        },
        {
            thumbnail:"A Complementary Couple-Thumbnail.jpg",
            genre:"romance",
            large:"A Complementary Couple.jpg",
            desc:"Complementary colors, while the furthest apart on the color wheel, each make the other brighter when paired together."
        },
        {
            thumbnail:"Ashen Valley-Thumbnail.jpg",
            genre:"concept",
            large:"Ashen Valley.jpg",
            desc: "...once you traverse the Gilded Gate, you'll enter the Golden Valley, land of the Artians."        
        },
        {
            thumbnail:"The Demon of Hate - Thumbnail.jpg",
            genre:"concept",
            large:"The Demon of Hate.jpg",
            desc: "The poor thing roared for hours before her throat gave out. Pater's being an absolute angel to her, but it's going to take time..."        
        },
        {
            thumbnail: "Daloch - God of Shadow-Thumbnail.jpg",
            genre: "concept",
            large:"Daloch - God of Shadow.jpg",
            desc: ""
        },
        {
            thumbnail: "The Black Hole Salesman-Thumbnail.jpg",
            genre: "concept",
            large: "The Black Hole Merchant.jpg",
            desc: ""
        },
        {
            thumbnail: "Tom-Tom Pass-Thumbnail.jpg",
            genre: "concept",
            large: "Tom-Tom Pass.jpg",
            desc: "A landscape for my little brother who's a percussionist."
        },
        {
            thumbnail: "The Upper Class Stray-Thumbnail.jpg",
            genre: "misc",
            large: "The Upper Class Stray.jpg",
            desc: "A portrait of my father's 'favorite' dog"
        }
                
        ];

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
        if (localStorage.getItem("darkMode") === "true") {
            $(".code-card").css({
                "background": "rgb(5,3,3)",
                "color" : "rgb(236,181,109)"
            });
        }

        else {
            $(".code-card").css({
                "background": "rgb(37,58,69)",
                "color" : "white"
            });

            $(".code-card hr").css({
                "border-color" : "white"
            })
        }

    });

    artwork.forEach(function(item) {
        $("#gallery").append(
            `
            <div class = "thumbnail" value = "${item.large}" desc = "${item.desc}">
                
                <img class = "thumbnail-image" src = "/images/thumbnails/${item.thumbnail}" alt = ${item.large.split(".")[0]}>
                <p class = "title">${item.large.split(".")[0]}</p>
            </div>     
            `
        );
        
    });
   
    // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

    // Artwork Full-Screen Functionality =/=/=/=/=/=/=/=/=/=/=/=/
        $("#gallery").on("click", ".thumbnail", function(){
            $("body").append(
                `
                <div id = "fullscreen">
                    
                    <img id = "full-image" src = "/images/full-sized/${$(this).attr("value")}" alt = "fullscreen image">
                </div>
                <div id = "description-box">
                    <button id = "toggle-desc">Description</button>
                        <h2 id = "full-title">${$(this).attr("value").split(".")[0]}</h2>
                        <hr>
                        <p id = "description">${$(this).attr("desc")}</p>
                    </div>
                `
            );

            $("#full-image").on("load", function(){
                let descToggle = true;
                $("#full-image").css("top", "50%");
                $("#description-box").css("bottom", "0");

                if (localStorage.getItem("darkMode") === "true") {
                    $("#description-box").css({
                        "color" : "rgb(236, 181, 109)"
                    });
                }

                else {
                    $("#description-box").css({
                        "color" : "white"
                    })
                }

                $("#fullscreen").on("click", function(){
                    $("#fullscreen, #description-box").remove();
                    
                });
                        
                $("#toggle-desc").on("click", function(){
                    if (descToggle){
                        if ($(window).width() < 400){
                            $("#description-box").css("bottom", "-200px");
                        }
                        else {
                            $("#description-box").css("bottom", "-150px");
                        }
                    }
                    else {
                        $("#description-box").css("bottom", "0");
                    }
                    descToggle = !descToggle;
                });
            });
        });
        
    // /=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/

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

    // End of Document.Ready function =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
});