
async function allPosts(url){
    const get = await fetch(url);
    const allPosts = await get.json();

    const postParent =document.getElementById('postParent');
    postParent.innerHTML = '';
    for(let i=0;i<allPosts.posts.length; i++){
        const post = allPosts.posts[i];
        const id = post.id;
        const category = post.category;
        const image = post.image;
        const isActive = post.isActive;
        const title = post.title;
        const author = post.author.name;
        const description = post.description;
        const comment_count = post.comment_count;
        const view_count = post.view_count;
        const posted_time = post.posted_time;
        let activeStatus = 'online' 
        if(isActive){
            activeStatus = 'green'
        }
        else{
            activeStatus = 'red'
        }
    

        const card = document.createElement('div');
        card.classList.add("flex","flex-col","sm:flex-row", "sm:gap-2","gap-2", "bg-[#f3f3f5]", "p-[5vw]","sm:p-[2vw]", "rounded-3xl", "mb-6", "w-full");
        card.innerHTML = `                                    
        <!-- avatar -->
        <div>
            <div class="flex flex-col justify-center items-center avatar">
                <div class="p-2 sm:p-4 rounded-lg">
                <div class="sm:w-20 bg-white rounded-lg">
                <img class="relative rounded-2xl sm:rounded-lg" src="${image || 'Info not found'}"/>
                </div>
                </div>
                <div class="absolute sm:top-0 top-0 right-0 sm:right-0 sm:-translate-x-[8px] sm:translate-y-[9px] h-[40px] sm:h-[22px] w-[40px] sm:w-[22px] rounded-full bg-${activeStatus}-600"></div>
            </div>
        </div>
        <!-- avatar info -->
        <div class="flex flex-col gap-1 w-full">
            <!-- 1st line -->
            <div class="flex gap-5 sm:gap-7 font-bold">
                <span># ${category || 'unknown'}</span> 
                <span>Author: ${author || 'unknown'}</span>
            </div>
            <!-- 2nd line -->
            <div>
                <h1 class="font-extrabold text-[20px]">${title || 'Info not found'}</h1>
            </div>
            <!-- 3rd line -->
            <div>
                <p> ${description || 'Info not found'} </p>
            </div>
            <!-- 4th line -->
            <hr class="my-5 border border-dashed border-gray-400">
            <div class="flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-1"> 
                <div class="flex text-gray-500 gap-2.5 sm:gap-6">
                    <div class="flex items-center gap-2"><span><img src="images/message.png" alt="star"></span> <p>${comment_count || 'Info not found'}</p></div>
                    <div class="flex items-center gap-2"><span><img src="images/view.png" alt="star"></span> <p>${view_count || 'Info not found'}</p></div>
                    <div class="flex items-center gap-2"><span><img src="images/clock.png" alt="star"></span> <p>${posted_time || 'Info not found'} min</p></div>
                </div>
                <button id='markReadButton' onclick="work('${title.replace(/'/g, '@') || 'Info not found'}', '${view_count || 'Info not found'}')" class="hover:bg-blue-950 h-12 sm:h-8 rounded-full"><img class="h-full" src="images/message-green.png" alt="message-green-button"></button>
            </div>

        </div>`;
        postParent.appendChild(card);
        console.log(card.innerText);
    }
}

function work(title,view){

    count++;
    const msgCount = document.getElementById('msg-count');
    msgCount.innerHTML = `(${count})`;

    const readParent = document.getElementById('read');
    const readChild = document.createElement('div');
    readChild.classList.add("w-full", "bg-white", "flex", "items-center", "justify-between", "p-2.5", "rounded-xl", "mt-1");
    readChild.innerHTML = `
        <div class="w-[80%]">
            <h1 class="font-extrabold text-[15px]"> ${title.replace(/@/g, "'") || 'Info not found'}</h1>
        </div>
        <div>
            <div class="flex items-center gap-3">
            <span><img class="h-3 w-4" src="images/view.png" alt="star"></span> 
            <p>${view || 'Info not found'}</p>
        </div>
        </div>
`
        readParent.appendChild(readChild);
}

function searchSpinS(){
    const searchSpin = document.getElementById('searchSpin');
    searchSpin.classList.remove('hidden');
    searchSpin.classList.add('flex');
}
function searchSpinE(){
    const searchSpin = document.getElementById('searchSpin');
    searchSpin.classList.add('hidden');
    searchSpin.classList.remove('flex');
}

function readSpin(){
    const readSpin = document.getElementById('readSpin');
    readSpin.classList.add('hidden');
    readSpin.classList.remove('flex');
}
const latestUrl ="https://openapi.programming-hero.com/api/retro-forum/latest-posts";

async function latestPosts(url){
    const get = await fetch(url);
    const latestPosts = await get.json();

    for(let i=0;i<latestPosts.length; i++){
        const post = latestPosts[i];
        const title = post.title;
        const image = post.cover_image;
        const profile = post.profile_image;
        const nam = post.author.name;
        const designation = post.author.designation;
        const date = post.author.posted_date;
        const description = post.description;

        const latestParent = document.getElementById('latest');
        const latestChild = document.createElement('div');
        latestChild.classList.add("card","p-4", "w-70", "sm:w-90", "lg:w-80", "bg-base-100", "border-2", "border-solid", "border-gray-300")
        latestChild.innerHTML = 
        `
            <figure class="px-[1vw] pt-[1vw]">
            <img class="rounded-lg" src="${image || 'Info not found'}" alt="Image" class="rounded-xl" />
            </figure>
        <div class="card-body p-[1vw] items-left gap-3 text-left">
            <div class="flex items-center gap-1">
                <span class=""><img src="images/calendar.png" alt=""></span>
                <p>${date || "No Publish Date"}</p>
            </div>

            <h2 class="card-title text-[18px] md:text-[20px]">${title || 'Info not found'}</h2>
            <p>${description || 'Info not found'}</p>
            <div class="card-actions">
            <div class="flex items-center gap-10">
                <div class="avatar">
                    <div class="w-[60px] rounded-full">
                        <img class="" src="${profile || 'Info not found'}" alt="image"/>
                    </div>
                </div>
                <div>
                    <div class="font-extrabold">${nam || 'Unknown'}</div>
                    <div>${designation || 'Unknown'}</div>
                </div>
            </div>

            </div>
        </div>
        `
        latestParent.appendChild(latestChild);
    }
}
latestPosts(latestUrl);