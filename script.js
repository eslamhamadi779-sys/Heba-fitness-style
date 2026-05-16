// ── وظيفة النزول للقسم ──
function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// ── النجوم ──
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

// ── عجلة الأبراج ──
function initWheelRotation() {
    const wheel = document.getElementById('zodiacWheel');
    if (!wheel) return;
    let r = 0;
    setInterval(() => {
        r += 0.3;
        wheel.style.transform = `rotate(${r}deg)`;
    }, 30);
}

// ── رسايل الهزار ──
const funnyMessages = [
  "احنا هنحسب ولا هنألف؟ 😅",
  "ده وزن ديناصور يا كوتش 🦖",
  "الطول ده لعبه NBA غالبًا 😂",
  "هنهزر يا كوتش؟ اكتب أرقام منطقية"
];

// ── حاسبة BMI ──
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (!weight || !height) {
        result.innerHTML = "من فضلك اكتبي الوزن والطول 📝";
        result.style.background = "#ff4757";
        return;
    }

    // حماية ضد الهزار 😄
    if (weight < 20 || weight > 300) {
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        result.innerHTML = randomMessage + "<br>اكتب وزن بين 20 و 300 كجم";
        result.style.background = "#ff4757";
        return;
    }

    if (height < 100 || height > 250) {
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        result.innerHTML = randomMessage + "<br>اكتب طول بين 100 و 250 سم";
        result.style.background = "#ff4757";
        return;
    }

    // حساب BMI
    const bmi = weight / ((height / 100) * (height / 100));

    let category = "";
    if (bmi < 18.5) {
        category = "gain";
    } else if (bmi > 24.9) {
        category = "loss";
    } else {
        category = "maintain";
    }

    result.innerHTML = `
        <div class="bmi-result">
            <h2>BMI: ${bmi.toFixed(1)}</h2>
            <p><strong>الخطة:</strong> ${hebaData[category].diet}</p>
            <p><strong>التمرين:</strong> ${hebaData[category].exercise}</p>
            <p><strong>نصيحة الكوتش:</strong> ${hebaData[category].tip}</p>
        </div>
    `;
    result.style.background = "transparent";
}

// ── أول ما الصفحة تفتح ──
document.addEventListener("DOMContentLoaded", function() {
    createStars();
    initWheelRotation();
    
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
    document.getElementById("tiktok1Link").href = hebaData.socialLinks.tiktok1;
    document.getElementById("tiktok2Link").href = hebaData.socialLinks.tiktok2;
    document.getElementById("emailLink").href = hebaData.socialLinks.email;
});
