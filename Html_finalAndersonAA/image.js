let images = document.querySelectorAll(".img-gallery img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");
let descriptions = [
  " Description for Image 1 parameters <hypernet:spaceMarine_v10:1> , blue armor , holding rifle , background inside space station, realistic , high detail , high quality , 4k , sharp , backdrop space , heavy armor , helmet , no face Negative prompt: easynegative , ng_deepnegative_v1_75t Steps: 50, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 1584050858, Size: 512x512, Model hash: b42b09ff12, Model: cartoon&people, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-UltraSharp",
  "Description for Image 2 parameters the darkest dungeon, high quality, high detailed, 4k, sharp, <lora:Multicap:1>, multiple floors, 3d render, dimly lit blue lights, blood, monsters, style-empire, tower Negative prompt: easynegative , ng_deepnegative_v1_75t , watermarks , (((text)))Steps: 100, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 2608282321, Size: 512x512, Model hash: 4199bcdd14, Model: pixle_v122, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 5, Hires upscaler: 4x-UltraSharp" ,
  "Description for Image 3<lora:KK_paperCut_v5:1> ,paper_cut , background a house red roof , with a car , sunny , garden , full view , white house , high quality, high detail Negative prompt: easynegative , ng_deepnegative_v1_75t ,water mark, text Steps: 50, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 588146828, Size: 512x512, Model hash: 4199bcdd14, Model: pixle_v122, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-UltraSharp",
  "Description for Image 4 parameters the darkest dungeon, high quality, 4k, sharp,, multiple floors, 3d render, dimly lit blue lights, blood, monsters, tower <lora:Multicap:1>, style-psycho Negative prompt: easynegative , ng_deepnegative_v1_75t , watermarks , (((text))) Steps: 100, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 1875352804, Size: 512x512, Model hash: 4199bcdd14, Model: pixle_v122, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 5, Hires upscaler: 4x-UltraSharp",
  "Description for Image 5 parameters a small city, clouds, nighttime, lights on, Chimie with smoke, snowing <lora:StackedCityAI:1> Negative prompt: Negative prompt: easynegative, (bad composition,bad structure,bad proportion,bad posture,rerspective error,wrong number of limbs, bad hands, wrong number of fingers:1.3), (text:1.2), (patreon:1.2), (logo:1.2), (signature:1.2), (watermark:1.2), (((extra hands))) , negative_hand-neg , badhandv4 , Steps: 41, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 2567445809, Size: 512x512, Model hash: b42b09ff12, Model: cartoon&people, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-UltraSharp",
  "Description for Image 6 parameters a small city floating, clouds, nighttime, snowing, high quality, high detailed, <lora:StackedCityAI:1> Negative prompt: Negative prompt: easynegative, (bad composition,bad structure,bad proportion,bad posture,rerspective error,wrong number of limbs, bad hands, wrong number of fingers:1.3), (text:1.2), (patreon:1.2), (logo:1.2), (signature:1.2), (watermark:1.2), (((extra hands))) , negative_hand-neg , badhandv4 , Steps: 41, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 1178336970, Size: 512x512, Model hash: b42b09ff12, Model: cartoon&people, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-UltraSharp",
  "Description for Image 7 parameters blue planet, outer space, background deep space filled with stars, , hight quality, Negative prompt: low quality Steps: 20, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 3229923713, Size: 512x512, Model hash: 0aecbcfa2c, Model: dreamlikeDiffusion10_10 (1), Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires upscaler: 4x-AnimeSharp",
  "Description for Image 8 parameters <lora:pixel:0.9> , pixelart , night, building, city, cyberpunk, neon lights, road leading into the city , full view , rain , sport cars Negative prompt: (low quality:1.4), (worst quality:1.4), (monochrome:1.1),(bad_prompt_version2:0.8), blur, out of focus, poorly drawn, mutilated, cartoon, anime, sketches, (worst quality, bad quality, child, cropped:1.4) , (easynegative:0.8), (bad-artist-anime:0.8), (bad-artist:0.8), (bad_prompt:0.8), (bad-picture-chill-75v:0.8), (bad_prompt_version2:0.8), (bad_quality:0.8) Steps: 100, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 1080646100, Size: 512x512, Model hash: 4199bcdd14, Model: Background and pixle art, Denoising strength: 0.7, Clip skip: 2, Hires upscale: 2, Hires steps: 15, Hires upscaler: 4x-AnimeSharp, Lora hashes: pixel: bb0084327e95, TI hashes: easynegative: c74b4e810b03, Version: v1.5.1",
  "Description for Image 9 reinhardt, helmet, power armor, battle,holding wepon , light, background battle filed in space, <lora:reinhardtOverwatchLORA_v1:0.8>, best quality Negative prompt: Negative prompt: easynegative, (bad composition,bad structure,bad proportion,bad posture,rerspective error,wrong number of limbs, bad hands, wrong number of fingers:1.3), (text:1.2), (patreon:1.2), (logo:1.2), (signature:1.2), (watermark:1.2), (((extra hands))) , negative_hand-neg , badhandv4 , Steps: 41, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 1888545408, Size: 512x512, Model hash: b42b09ff12, Model: cartoon&people, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-UltraSharp",
  "Description for Image 10 parameters <lora:CrystallineAI:1> full view of item, crystal shield , transparent , black background, glow in the dark, writing on the sides of the shield ,   Negative prompt: low quality, Steps: 25, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 3199625924, Size: 512x512, Model hash: 5ab585f17d, Model: gameIconInstitute_v22, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-AnimeSharp",
  "Description for Image 11  parameters masterpiece,(best quality:1.3), <lora:FantasyNightV1:1>,The sea,(Sail:1.2),a moon, Negative prompt: (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres , censoring water mark , text Steps: 100, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 3754509717, Size: 512x512, Model hash: b42b09ff12, Model: cartoon&people, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 10, Hires upscaler: 4x-AnimeSharp",
  "Description for Image 12 parameters shinkawa youji, metal gear solid, solid snake, 1boy, bandana, gradient, retro artstyle, ((masterpiece)) <lora:shinkawa_youji_offset:0.7> , background deep jungle ,  Negative prompt: (worst quality:1.4), (low quality:1.4), (normal quality:1.4), lowres , censoring water mark , text Steps: 100, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 4194417131, Size: 512x512, Model hash: 1da18c4a59, Model: fox cartoon, Denoising strength: 0.7, Clip skip: 2, ENSD: 31337, Version: v1.2.1, Hires upscale: 2, Hires steps: 22, Hires upscaler: 4x-AnimeSharp",
  // Add descriptions for each image here
];

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`stable/${index + 1}.png`, descriptions[index]);
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
  clearDescription();
});

function openModal(pic, description) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  updateDescription(description);
}

function updateDescription(description) {
  let descriptionDiv = document.querySelector(".imageDescription");
  descriptionDiv.textContent = description;
}

function clearDescription() {
  let descriptionDiv = document.querySelector(".imageDescription");
  descriptionDiv.textContent = "";
}

function openModal(pic, description) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  updateDescription(description);
}

function updateDescription(description) {
  let descriptionDiv = document.querySelector(".imageDescription");
  descriptionDiv.textContent = description;
  descriptionDiv.classList.add("white-text"); // Adding class for white text
}

function clearDescription() {
  let descriptionDiv = document.querySelector(".imageDescription");
  descriptionDiv.textContent = "";
  descriptionDiv.classList.remove("white-text"); // Remove class when clearing description
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    const typed = new Typed('.multiple-text', {
    strings: ['upcoming developer', 'PC builder'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true 
  });