function menu_button(){
    $(".menu-btn").click(function(){
        $(".menu-content").slideToggle(300);
    });
    var button = document.getElementById("menu-btn");
    var menu = document.getElementById("menu-content");
    button.onclick = function(){
        menu.style.display="grid";
    }
}
function home_wrapper(){
    var button = document.getElementById("home-icon");
    var menu = document.getElementById("home-content");
    var about = document.getElementById("about-wrapper");
    var skills = document.getElementById("skills-wrapper");
    var work = document.getElementById("work-wrapper");
    button.onclick = function(){
        about.style.display = "none";
        skills.style.display = "none";
        work.style.display = "none";
    }
    $(".home-icon").click(function(){
        $("home-content").slideToggle(300);
    })
}
function about_wrapper(){
    var button = document.getElementById("about-icon");
    var menu = document.getElementById("home-content");
    var about = document.getElementById("about-wrapper");
    var skills = document.getElementById("skills-wrapper");
    var work = document.getElementById("work-wrapper");
    $(".about-icon").click(function(){
        $(".about-wrapper").slideToggle(600);
    });
    button.addEventListener("click",function(){
        skills.style.display = "none";
        work.style.display = "none";
        about.style.display="grid";
    },false);
}
function skills_wrapper(){
    var button = document.getElementById("skills-icon");
    var about = document.getElementById("about-wrapper");
    var menu = document.getElementById("home-content");
    var skills = document.getElementById("skills-wrapper");
    var work = document.getElementById("work-wrapper");
    $(".skills-icon").click(function(){
        $(".skills-wrapper").slideToggle(600);
    });
    button.addEventListener("click",function(){
        about.style.display = "none";
        work.style.display = "none";
        skills.style.display="grid";
    },false);
}
function work_wrapper(){
    var button = document.getElementById("work-icon");
    var menu = document.getElementById("home-content");
    var about = document.getElementById("about-wrapper");
    var skills = document.getElementById("skills-wrapper");
    var work = document.getElementById("work-wrapper");
    $(".work-icon").click(function(){
        $(".work-wrapper").slideToggle(600);
    });
    button.addEventListener("click",function(){
        skills.style.display = "none";
        about.style.display = "none";
        work.style.display="grid";
    },false);
}
menu_button();
home_wrapper();
about_wrapper();
skills_wrapper();
work_wrapper();