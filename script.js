function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// نجوم
function createStars() {
    const layer = document.getElementById('starsLayer');
    if (!layer) return;
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.classList.add('star');
        const size = Math.random() * 3 + 0.5;
        s.style.cssText = `
            width:${size}px; height:${size}px;
            top:${Math.random()*100}%; left:${Math.random()*100}%;
            animation-duration:${2+Math.random()*4}s;
            animation-delay:${Math.random()*5}s;
        `;
        layer.appendChild(s);
    }
}

// عجلة
function initWheelRotation() {
    const wheel = document.getElementById('zodiacWheel');
    if (!wheel) return;
    let r = 0;
    setInterval(() => {
        r += 0.3;
        wheel.style.transform = `rotate(${r}deg)`;
    }, 30);
}

// حاسبة الوزن
function initCalculator() {
    const button = document.getElementById("calcBtn");
    if (!button) return;
    button.addEventListener("click", function(){
        const weight = Number(document.getElementById("weight").value);
        const height = Number(document.getElementById("height").value);
        const result = document.getElementById("result");

        if(!weight || !height){
            result.innerHTML = "من فضلك اكتبي الوزن والطول 📝";
            result.style.background = "#ff4757";
            return;
        }

        const idealWeight = height - 100;
        const difference = weight - idealWeight;

        if(difference > 0){
            result.innerHTML = `تحتاجي تخسي ${difference} كيلو 🏃‍♀️`;
            result.style.background = "#ff4757";
        }
        else if(difference < 0){
            result.innerHTML = `تحتاجي تزيدي ${Math.abs(difference)} كيلو 💪`;
            result.style.background = "#ffa502";
        }
        else{
            result.innerHTML = `وزنك مثالي ✨🔥`;
            result.style.background = "#2ed573";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createStars();
    initWheelRotation();
    initCalculator();
    
    // ملء الداتا
    document.getElementById("dietText").innerText = hebaData.diet;
    document.getElementById("yogaText").innerText = hebaData.yoga;
    document.getElementById("morningText").innerText = hebaData.morningWorkout;
    document.getElementById("fatBurnText").innerText = hebaData.fatBurn;

    const yogaList = document.getElementById("yogaList");
    hebaData.yogaSections.forEach(item => {
        yogaList.innerHTML += `
            <div class="yoga-card">
                <h3>🧘 ${item.name}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });

    // روابط السوشيال
    document.getElementById("instagramLink").href = hebaData.socialLinks.instagram;
    document.getElementById("facebookLink").href = hebaData.socialLinks.facebook;
    document.getElementById("telegramLink").href = hebaData.socialLinks.telegram;
    document.getElementById("tiktok1Link").href = hebaData.socialLinks.tiktok1;
    document.getElementById("tiktok2Link").href = hebaData.socialLinks.tiktok2;
    document.getElementById("emailLink").href = hebaData.socialLinks.email;
});



// وظيفة النزول للقسم
function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// أول ما الصفحة تفتح
document.addEventListener("DOMContentLoaded", function() {
    
    // ملء النصوص من الداتا
    document.getElementById("dietText").innerText = hebaData.diet;
    document.getElementById("yogaText").innerText = hebaData.yoga;
    document.getElementById("morningText").innerText = hebaData.morningWorkout;
    document.getElementById("fatBurnText").innerText = hebaData.fatBurn;

    // ملء أقسام اليوجا
    const yogaList = document.getElementById("yogaList");
    hebaData.yogaSections.forEach(item => {
        yogaList.innerHTML += `
            <div class="yoga-card">
                <h3>🧘 ${item.name}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });

    // ملء روابط السوشيال
    document.getElementById("instagramLink").href = hebaData.socialLinks.instagram;
    document.getElementById("facebookLink").href = hebaData.socialLinks.facebook;
    document.getElementById("telegramLink").href = hebaData.socialLinks.telegram;
    document.getElementById("tiktok1Link").href = hebaData.socialLinks.tiktok1;    document.getElementById("tiktok2Link").href = hebaData.socialLinks.tiktok2;
    document.getElementById("emailLink").href = hebaData.socialLinks.email;
});
