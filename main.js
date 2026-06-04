const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");
const invalid = document.querySelector(".notFound");

darkBtn.addEventListener("click",()=>{
    document.body.classList.add("dark-mode");
    darkBtn.classList.remove("active");
    lightBtn.classList.add("active");
})

lightBtn.addEventListener("click",()=>{
    document.body.classList.remove("dark-mode");
    darkBtn.classList.add("active");
    lightBtn.classList.remove("active");
})

const searchedText = document.querySelector("[data-profileTofind]");
const searchForm = document.querySelector(".searchForm");
const avtaar = document.querySelector("[data-profileImg]");
const userName = document.querySelector("[data-Name]");
const accountName = document.querySelector("[data-accName]");
const joinDate = document.querySelector("[data-joiningDate]");
const userBio = document.querySelector("[data-details]");
const userRepo = document.querySelector("[data-repos]");
const userFollower = document.querySelector("[data-followers]");
const userFollowing = document.querySelector("[data-following]");
const userLocation =document.querySelector("[data-location]");
const userTwitter= document.querySelector("[data-twitter]");
const userBlog= document.querySelector("[data-website]");
const userCompany= document.querySelector("[data-company]");


//stroring details
function renderDetails(userInfo){
    avtaar.src = userInfo?.avatar_url;
    userName.innerText = `${userInfo?.name}`;
    accountName.href = userInfo?.html_url;
    accountName.innerText = `@${userInfo?.login}`;

    //handling date
    const date = new Date(userInfo.created_at);
    joinDate.innerText = "Joined on "+date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
   
    //bio 
    if(userInfo.bio){
        userBio.innerText = `${userInfo.bio}`;
    }
    else{
        userBio.innerText = "This profile has no bio";
    }
    userRepo.innerText = `${userInfo.public_repos}`
   userFollower.innerText = `${userInfo.followers}`;
   userFollowing.innerText = `${userInfo.following}`;

   //location
    if(userInfo.location){
        userLocation.innerText = `${userInfo.location}`;
    }
    else{
         userLocation.innerText = "Not Available";
    }

   //handling twitter handle
    if(userInfo.twitter_username){
        userTwitter.href = `https://x.com/${userInfo.twitter_username}`;
        userTwitter.innerText = `${userInfo.twitter_username}`;
    }
    else{
        userTwitter.href = `#`;
        userTwitter.innerText = "Not Available";
    }

    //handling blog site
    if(userInfo.blog){
        //blogurl
        const blogUrl = userInfo.blog.startsWith("http")? userInfo.blog: `https://${userInfo.blog}`;

        userBlog.href = blogUrl;
        userBlog.innerText = `${userInfo.blog}`;
    }
    else{
        userBlog.href = `#`;
        userBlog.innerText = "Not Available";
    }
    
    if(userInfo.company){
        userCompany.innerText = `${userInfo.company}`;
    }
    else{
       userCompany.innerText = "Not Available"; 
    }   

    return;
}

async function getProfile(username){
    try{
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        if(!response.ok){
            invalid.classList.add("active");
            return;
        }
        const data = await response.json();
        invalid.classList.remove("active"); 
        renderDetails(data);
    }
    catch(err){
        invalid.classList.add("active");
        console.error(err);
    } 
}

async function searchProfile(e){
    e.preventDefault();  
    //fetch text from input field
    //trim down extra space for correct user name
    const username = searchedText.value.trim();

    //empty search
    if(!username){
        return;
    }
    await getProfile(username);   
}

window.addEventListener("DOMContentLoaded",()=>{
    getProfile("octocat");
});
    


//works both for clicking of search button and entering the form
searchForm.addEventListener("submit", searchProfile);


//remobing invalid text as soon as user starts typing
searchedText.addEventListener("input",()=>{
    invalid.classList.remove("active");
})