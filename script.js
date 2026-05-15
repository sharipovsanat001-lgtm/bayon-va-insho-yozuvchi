function generateWork() {
    const topic = document.getElementById('essay-topic').value;
    const workType = document.getElementById('work-type').value;
    const contentArea = document.getElementById('essay-content');
    const nextBtn = document.getElementById('next-btn');
 
    if (!topic) {
        alert("Iltimos, avval mavzuni kiriting!");  
        return;   
    }  
 
    let result = "";   

    if (workType === "insho") {   
        // KENGAYTIRILGAN INSHO VARIANTLARI
        const intros = [
            `${topic} - bu insoniyat ma'naviyatining eng go'zal qirralaridan biridir. Ushbu mavzu haqida gap ketganda, har birimizning qalbimizda o'zgacha iliqlik va mas'uliyat hissi paydo bo'ladi. Zero, jamiyat taraqqiyotini ushbu fundamental tushunchasiz tasavvur etib bo'lmaydi.`,
            `Hozirgi shiddatli globallashuv davrida ${topic} mavzusi har qachongidan ham dolzarbroq bo'lib bormoqda. U nafaqat bizning o'zligimizni, balki kelajakka bo'lgan ishonchimizni ham anglatuvchi muhim omildir. Shu sababli ushbu mavzuni atroflicha tahlil qilish barchamiz uchun foydalidir.`
        ];
 
        const bodies = [
            `Ushbu masalaga chuqurroq nazar tashlasak, ${topic} bizning kundalik hayotimizda qanchalik beqiyos o'rin tutishini tushunib yetamiz. Birinchidan, bu tushuncha bizning milliy va madaniy merosimizni boyitib, ma'naviy dunyoqarashimizni kengaytiradi. Ikkinchidan, u orqali yosh avlod o'ziga munosib yo'l va yuksak o'rnak topadi. \n\nBundan tashqari, ${topic}ni rivojlantirish jamiyatda o'zaro hurmat va birdamlik muhitini mustahkamlaydi. Tadqiqotlar va hayotiy tajribalar shuni ko'rsatadiki, qayerdaki ${topic}ga e'tibor yuqori bo'lsa, o'sha yerda yuksalish va tinchlik barqaror bo'ladi. Shu bois, ushbu yo'nalishdagi islohotlarni faqatgina davlat emas, balki har bir shaxs o'zidan boshlashi lozim.`,
            `${topic}ning o'ziga xos xususiyatlari shundaki, U insonni doimo ezgulikka va ma'naviy kamolotga chorlaydi. Agar biz ushbu sohada izchil izlanishlar olib borsak, albatta ko'zlangan yuksak natijalarga erishamiz. Tarixga nazar tashlasak, buyuk bobolarimiz ham aynan ${topic} masalasiga alohida urg'u berishganini ko'ramiz.\n\nShu bilan birga, zamonaviy dunyoda ${topic}ni yangicha talqin qilish va uni fan-texnika yutuqlari bilan bog'lash ham muhim ahamiyatga ega. Bu esa bizga dunyo miqyosida o'z o'rnimizga ega bo'lish imkonini beradi. Har birimiz ushbu tushunchaning mazmun-mohiyatini yoshlarga to'g'ri tushuntirishimiz shart.`
        ];

        const conclusions = [
            `Xulosa qilib aytganda, ${topic} bizning eng buyuk ma'naviy boyligimizdir. Uni asrab-avaylash, mazmunini boyitish va kelajak avlodga bezavol yetkazish barchamizning muqaddas farzandlik burchimizdir. Faqatgina birgalikdagi harakatlarimiz bilan ko'zlangan yuksak maqsadlarga erishamiz.`,
            `Demak, ${topic} haqida qancha ko'p mulohaza yuritmaylik, uning hayotimizdagi ahamiyati cheksizligicha qolaveradi. Kelajakda ushbu mavzu yanada yuksak cho'qqilarni zabt etishiga va jamiyatimiz tayanchiga aylanishiga ishonchimiz komildir. Zero, ${topic} - bu kelajak taraqqiyotining oltin kalitidir.`
        ];

        const r1 = Math.floor(Math.random() * intros.length);
        const r2 = Math.floor(Math.random() * bodies.length);
        const r3 = Math.floor(Math.random() * conclusions.length);

        result = `REJA:\n1. Kirish: ${topic} mavzusining mohiyati va ahamiyati.\n2. Asosiy qism: ${topic}ning jamiyatda va inson hayotida tutgan o'rni.\n3. Xulosa: Kelajakdagi istiqbollar va shaxsiy munosabat.\n\n` +
                 `I. KIRISH\n${intros[r1]}\n\n` +
                 `II. ASOSIY QISM\n${bodies[r2]}\n\n` +
                 `III. XULOSA\n${conclusions[r3]}`;

    } else if (workType === "diktant") {
        result = `${topic} (Diktant uchun matn)\n\nBugun o'zbek tili darsi odatdagidan ko'ra qiziqarliroq o'tdi. Biz "${topic}" mavzusida nazorat ishi yozdik. Matn imlo qoidalari, tinish belgilari va murakkab so'zlar bilan boyitilgan bo'lib, har birimizdan katta diqqat-e'tiborni talab qildi. Ustozimiz har bir jumladagi xatboshilarga va urg'ularga e'tibor berishimizni so'radilar. Zero, ${topic} haqida savodli yozish nafaqat bilimimizni, balki ona tilimizga bo'lgan yuksak hurmatimizni ham ifodalaydi. Mashg'ulot yakunida o'z ishimizni mustaqil tekshirib, xatolar ustida alohida ishladik.`;

    } else if (workType === "bayon") {
        result = `BAYON: ${topic}\n\nO'tgan hafta mutolaa qilgan kitoblarim orasida bir hikoya meni qattiq ta'sirlandirdi. Unda asosan ${topic} haqida so'z borar edi. Voqealar rivoji shunday murakkab ediki, asosiy qahramon o'z hayot yo'lida aynan ${topic} tamoyillariga tayanib eng qiyin sinovlardan o'tishga muvaffaq bo'ldi. Matnni o'qir ekansiz, beixtiyor hayotda nima muhimligini anglab yetasiz. Men ushbu bayondan shunday xulosa qildimki: ${topic} doimo ezgulikka, go'zallikka va yuksaklikka yetaklovchi mayoqdir. Bu hikoya har bir insonda ${topic}ga nisbatan yangicha qarash shakllantiradi.`;
    }

    contentArea.value = result;
    nextBtn.style.display = "inline-block";
}

// 1. Insho, Diktant yoki Bayon yaratish funksiyasi
function generateWork() {
    const topic = document.getElementById('essay-topic').value;
    const workType = document.getElementById('work-type').value;
    const contentArea = document.getElementById('essay-content');
    const nextBtn = document.getElementById('next-btn');

    if (!topic) {
        alert("Iltimos, avval mavzuni kiriting!");
        return;
    }

    let result = "";

    if (workType === "insho") {
        const intros = [
            `${topic} - bu insoniyat ma'naviy olamining eng go'zal qirralaridan biridir. Ushbu mavzu haqida gap ketganda, har birimizning qalbimizda o'zgacha iliqlik, faxr va yuksak mas'uliyat hissi paydo bo'ladi.`,
            `Hozirgi shiddatli globallashuv davrida ${topic} mavzusi har qachongidan ham dolzarbroq bo'lib bormoqda. U nafaqat bizning milliy o'zligimizni, balki kelajakka bo'lgan mustahkam ishonchimizni ham anglatuvchi hayotiy omildir.`
        ];
        const bodies = [
            `Ushbu masalaga chuqurroq nazar tashlasak, ${topic} bizning hayotimizda qanchalik beqiyos o'rin tutishini tushunib yetamiz. Birinchidan, bu tushuncha bizning madaniy merosimizni boyitib, ma'naviy dunyoqarashimizni kengaytirishga xizmat qiladi. Ikkinchidan, u orqali yosh avlod o'ziga munosib yo'l va yuksak o'rnak topadi. \n\nBundan tashqari, ${topic}ni rivojlantirish jamiyatda o'zaro hurmat va birdamlik muhitini yanada mustahkamlaydi. Tadqiqotlar shuni ko'rsatadiki, qayerdaki ${topic}ga e'tibor yuqori bo'lsa, o'sha yerda yuksalish va tinchlik barqaror bo'ladi.`,
            `${topic}ning o'ziga xos xususiyatlari shundaki, u insonni doimo ezgulikka va ma'naviy kamolot cho'qqilariga chorlaydi. Agar biz ushbu sohada izchil izlanishlar olib borsak, albatta ko'zlangan yuksak natijalarga erishamiz. Tarixga nazar tashlasak, buyuk ajdodlarimiz ham aynan ${topic} masalasiga alohida urg'u berishganini ko'ramiz.`
        ];
        const conclusions = [
            `Xulosa qilib aytganda, ${topic} bizning eng buyuk ma'naviy boyligimizdir. Uni asrab-avaylash va kelajak avlodga bezavol yetkazish barchamizning muqaddas farzandlik burchimizdir.`,
            `Demak, ${topic} haqida qancha ko'p mulohaza yuritmaylik, uning ahamiyati cheksizligicha qolaveradi. Kelajakda ushbu mavzu yanada yuksak cho'qqilarni zabt etishiga ishonchimiz komildir.`
        ];

        const r1 = Math.floor(Math.random() * intros.length);
        const r2 = Math.floor(Math.random() * bodies.length);
        const r3 = Math.floor(Math.random() * conclusions.length);

        result = `REJA:\n1. Kirish: ${topic} haqida tushuncha.\n2. Asosiy qism: ${topic}ning jamiyatdagi o'rni.\n3. Xulosa: Shaxsiy munosabat.\n\n` +
                 `I. KIRISH\n${intros[r1]}\n\nII. ASOSIY QISM\n${bodies[r2]}\n\nIII. XULOSA\n${conclusions[r3]}`;

    } else if (workType === "diktant") {
        result = `${topic} (Diktant)\n\nBugun ona tili darsi juda qiziqarli o'tdi. Biz "${topic}" mavzusida nazorat ishi yozdik. Matn murakkab va imlo qoidalari bilan boyitilgan edi. ${topic} haqida savodli yozish - bu ona tilimizga bo'lgan hurmat belgisidir.`;
    } else if (workType === "bayon") {
        result = `BAYON: ${topic}\n\nMen bir qiziqarli hikoyani o'qib qoldim. Unda ${topic} haqida so'z borar edi. Qahramonimiz ${topic} orqali hayotdagi qiyin sinovlardan o'tdi. Bu voqea har bir insonda ${topic}ga nisbatan yangicha qarash shakllantiradi.`;
    }

    contentArea.value = result;
    nextBtn.style.display = "inline-block";
    
    // Yangi insho yaratilganda "Saqlandi" xabari bo'lsa o'chiramiz
    document.getElementById('status-msg').innerText = "";
}

function generateWork() {
    const topic = document.getElementById('essay-topic').value;
    const workType = document.getElementById('work-type').value;
    const contentArea = document.getElementById('essay-content');
    const nextBtn = document.getElementById('next-btn');
    const msg = document.getElementById('status-msg');

    if (!topic) {
        alert("Iltimos, avval mavzuni kiriting!");
        return;
    }

    // Har safar yangi insho yozganda xabarni tozalash
    msg.innerText = "";

    let result = "";

    if (workType === "insho") {
        const intros = [
            `${topic} - bu insoniyat ma'naviy olamining eng go'zal qirralaridan biridir. Ushbu mavzu haqida gap ketganda, har birimizning qalbimizda o'zgacha iliqlik paydo bo'ladi.`,
            `Hozirgi shiddatli globallashuv davrida ${topic} mavzusi har qachongidan ham dolzarbroq bo'lib bormoqda. U bizning o'zligimizni anglatuvchi muhim omildir.`
        ];
        const bodies = [
            `Ushbu masalaga chuqurroq nazar tashlasak, ${topic} bizning hayotimizda qanchalik beqiyos o'rin tutishini tushunib yetamiz. Birinchidan, bu tushuncha bizning madaniy merosimizni boyitib, ma'naviy dunyoqarashimizni kengaytirishga xizmat qiladi. Ikkinchidan, u orqali yosh avlod o'ziga munosib yo'l va yuksak o'rnak topadi. \n\nBundan tashqari, ${topic}ni rivojlantirish jamiyatda o'zaro hurmat va birdamlik muhitini yanada mustahkamlaydi.`,
            `${topic}ning o'ziga xos xususiyatlari shundaki, u insonni doimo ezgulikka va ma'naviy kamolot cho'qqilariga chorlaydi. Agar biz ushbu sohada izchil izlanishlar olib borsak, albatta ko'zlangan yuksak natijalarga erishamiz.`
        ];
        const conclusions = [
            `Xulosa qilib aytganda, ${topic} bizning eng buyuk ma'naviy boyligimizdir. Uni asrab-avaylash va kelajak avlodga yetkazish barchamizning burchimizdir.`,
            `Demak, ${topic} haqida qancha ko'p mulohaza yuritmaylik, uning ahamiyati cheksizligicha qolaveradi. Kelajakda ushbu mavzu yanada yuksak cho'qqilarni zabt etishiga ishonamiz.`
        ];

        const r1 = Math.floor(Math.random() * intros.length);
        const r2 = Math.floor(Math.random() * bodies.length);
        const r3 = Math.floor(Math.random() * conclusions.length);

        result = `REJA:\n1. Kirish: ${topic} haqida tushuncha.\n2. Asosiy qism: ${topic}ning jamiyatdagi o'rni.\n3. Xulosa: Shaxsiy munosabat.\n\n` +
                 `I. KIRISH\n${intros[r1]}\n\nII. ASOSIY QISM\n${bodies[r2]}\n\nIII. XULOSA\n${conclusions[r3]}`;

    } else if (workType === "diktant") {
        result = `${topic} (Diktant)\n\nBugun ona tili darsi juda qiziqarli o'tdi. Biz "${topic}" mavzusida nazorat ishi yozdik. Matn murakkab va imlo qoidalari bilan boyitilgan edi.`;
    } else if (workType === "bayon") {
        result = `BAYON: ${topic}\n\nMen bir qiziqarli hikoyani o'qib qoldim. Unda ${topic} haqida so'z borar edi. Qahramonimiz ${topic} orqali hayotdagi qiyin sinovlardan o'tdi.`;
    }

    contentArea.value = result;
    nextBtn.style.display = "inline-block";
}

// SAQLASH VA YUKLAB OLISH FUNKSIYASI
function saveEssay() {
    const content = document.getElementById('essay-content').value;
    const topic = document.getElementById('essay-topic').value || "ijodiy-ish";
    const msg = document.getElementById('status-msg');

    if (!content) {
        alert("Avval matn yarating!");
        return;
    }

    // 1-USUL: LocalStorage (Brauzer xotirasiga)
    localStorage.setItem('my_final_essay', content);

    // 2-USUL: Kompyuterga fayl sifatida yuklash (ENG ISHONCHLI YO'L)
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${topic}.txt`;
    link.click();

    // Xabar chiqarish
    msg.innerText = "✅ Matn faylga yuklandi va xotiraga saqlandi!";
    msg.style.color = "#10b981";
    msg.style.fontWeight = "bold";

    setTimeout(() => { msg.innerText = ""; }, 4000);
}

// SAHIFA OCHILGANDA XOTIRADAN OLISH
window.onload = function() {
    const oldData = localStorage.getItem('my_final_essay');
    if (oldData) {
        document.getElementById('essay-content').value = oldData;
    }
};
