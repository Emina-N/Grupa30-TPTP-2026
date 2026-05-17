/**
 * JU UNIVERZITET U TUZLI - TPTP ZAVRŠNI PROJEKAT 2025/2026
 * Datoteka: tptpskripte.js
 * Student 3: JavaScript i logika lokacije
 */

document.addEventListener("DOMContentLoaded", function () {
    
// 1. Tamni / svjetli mod

const darkModeToggle = document.getElementById("dark-mode-toggle");

// Učitavanje spasene teme
const sacuvanaTema = localStorage.getItem("tema");

// Ako je korisnik ranije rucno odabrao dark
if (sacuvanaTema === "dark") {

    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️ Svijetla tema";
    }
}

// Ako je korisnik rucno odabrao light
else if (sacuvanaTema === "light") {

    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");

    if (darkModeToggle) {
        darkModeToggle.textContent = "🌙 Tamni mod";
    }
}

// Ako nema spremljene teme koristi sistemsku
else {

    const sistemskiDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (sistemskiDarkMode) {

        document.body.classList.add("dark-theme");

        if (darkModeToggle) {
            darkModeToggle.textContent = "☀️ Svijetla tema";
        }

    } else {

        document.body.classList.remove("dark-theme");

        if (darkModeToggle) {
            darkModeToggle.textContent = "🌙 Tamni mod";
        }
    }
}

// Klik na toggle dugme
if (darkModeToggle) {

    darkModeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        // Ako je sada dark
        if (document.body.classList.contains("dark-theme")) {

            document.body.classList.remove("light-theme");

            localStorage.setItem("tema", "dark");

            darkModeToggle.textContent = "☀️ Svijetla tema";

        } else {

            document.body.classList.add("light-theme");

            localStorage.setItem("tema", "light");

            darkModeToggle.textContent = "🌙 Tamni mod";
        }
    });
}

    // ==========================================
    // 2. DINAMIČKO FILTRIRANJE KARTICA (index.html)
    // ==========================================
    const filterDugmad = document.querySelectorAll(".filter-btn[data-filter]");
    const kartice = document.querySelectorAll(".kartica");

    // Filtriranje radimo samo ako se elementi nalaze na trenutnoj stranici
    if (filterDugmad.length > 0 && kartice.length > 0) {
        filterDugmad.forEach(dugme => {
            dugme.addEventListener("click", function () {
                const filterVrijednost = this.getAttribute("data-filter");

                kartice.forEach(kartica => {
                    const kategorijaKartice = kartica.getAttribute("data-kategorija");

                    // Ako je odabrano 'sve' ili se kategorija poklapa, prikaži karticu, inače sakrij
                    if (filterVrijednost === "sve" || kategorijaKartice === filterVrijednost) {
                        kartica.style.display = "block";
                    } else {
                        kartica.style.display = "none";
                    }
                });
            });
        });
    }

    // ==========================================
    // 3. SMOOTH SCROLL NAVIGACIJA (sadrzaj.html)
    // ==========================================
    const brziSkokLinkovi = document.querySelectorAll('nav[aria-label="Brzi skok"] a');

    if (brziSkokLinkovi.length > 0) {
        brziSkokLinkovi.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Zaustavi podrazumijevani nagli skok preglednika
                
                const ciljniId = this.getAttribute("href"); // Uzima npr. "#tabela"
                const ciljniElement = document.querySelector(ciljniId);

                if (ciljniElement) {
                    ciljniElement.scrollIntoView({
                        behavior: "smooth", // Omogućava glatko kretanje (smooth scroll)
                        block: "start"
                    });
                }
            });
        });
    }

    // ==========================================
    // 4. INTERAKTIVNI ELEMENT - TIMER (Sve stranice)
    // ==========================================
    const timerElement = document.getElementById("sesija-timer");
    let sekunde = 0;

    if (timerElement) {
        // Svake sekunde (1000 milisekundi) uvećaj brojač i osvježi prikaz u footeru
        setInterval(function () {
            sekunde++;
            timerElement.textContent = sekunde;
        }, 1000);
    }

    // ==========================================
    // 5. VALIDACIJA KONTAKT FORME (kontakt.html)
    // ==========================================
    const forma = document.getElementById("kontakt-forma");

    if (forma) {
        forma.addEventListener("submit", function (e) {
            e.preventDefault(); // Zaustavi slanje forme dok ne uradimo provjere

            // Dohvatanje polja iz HTML-a
            const ime = document.getElementById("ime");
            const prezime = document.getElementById("prezime");
            const email = document.getElementById("email");
            const telefon = document.getElementById("telefon");
            const tema = document.getElementById("tema");
            const poruka = document.getElementById("poruka");
            const porukaUspjeha = document.getElementById("poruka-uspjeha");

            let formaJeIspravna = true;

            // Pomoćna funkcija za resetovanje grešaka prije nove provjere
            const ocistiGresku = (inputElement, greskaElementId) => {
                inputElement.classList.remove("input-greska");
                document.getElementById(greskaElementId).textContent = "";
            };

            // Pomoćna funkcija za ispis greške
            const prikaziGresku = (inputElement, greskaElementId, tekstGreske) => {
                inputElement.classList.add("input-greska");
                document.getElementById(greskaElementId).textContent = tekstGreske;
                formaJeIspravna = false;
            };

            // Resetovanje svih prethodnih vizuelnih grešaka
            ocistiGresku(ime, "greska-ime");
            ocistiGresku(prezime, "greska-prezime");
            ocistiGresku(email, "greska-email");
            ocistiGresku(telefon, "greska-telefon");
            ocistiGresku(tema, "greska-tema");
            ocistiGresku(poruka, "greska-poruka");
            porukaUspjeha.style.display = "none";

            // Validacija Imena
            if (ime.value.trim() === "") {
                prikaziGresku(ime, "greska-ime", "Ime je obavezno polje.");
            }

            // Validacija Prezimena
            if (prezime.value.trim() === "") {
                prikaziGresku(prezime, "greska-prezime", "Prezime je obavezno polje.");
            }

            // Validacija E-maila (Uz pomoć AI generisan Regex pattern)
            // KORIŠTENJE AI ALATA KOMENTAR: Ovaj regex obrazac provjerava strukturu email adrese.
            // Znak ^ označava početak, [^\s@]+ osigurava tekst bez razmaka i@ simbola, zatim ide doslovni znak @,
            // pa opet tekst domene, doslovna tačka (\.) i na kraju ekstenzija od najmanje 2 slova ($ označava kraj).
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (email.value.trim() === "") {
                prikaziGresku(email, "greska-email", "E-mail je obavezno polje.");
            } else if (!emailRegex.test(email.value.trim())) {
                prikaziGresku(email, "greska-email", "Unesite ispravan format e-mail adrese (npr. ime@domena.com).");
            }

            // Validacija Telefona (Dozvoljeni samo brojevi, razmaci i crtice)
            // KORIŠTENJE AI ALATA KOMENTAR: Regex /^[0-9\s\-]+$/ osigurava da korisnik unese samo brojeve (0-9),
            // razmake (\s) ili crtice (\-). Znak + označava da mora postojati barem jedan karakter.
            const telefonRegex = /^[0-9\s\-]+$/;
            if (telefon.value.trim() === "") {
                prikaziGresku(telefon, "greska-telefon", "Telefon je obavezno polje.");
            } else if (!telefonRegex.test(telefon.value.trim())) {
                prikaziGresku(telefon, "greska-telefon", "Telefon smije sadržavati samo cifre, razmake i crtice.");
            }

            // Validacija Dropdown-a (Tema upita)
            if (tema.value === "") {
                prikaziGresku(tema, "greska-tema", "Molimo odaberite temu upita.");
            }

            // Validacija Tekstualne poruke
            if (poruka.value.trim() === "") {
                prikaziGresku(poruka, "greska-poruka", "Poruka ne može biti prazna.");
            }

            // Ukoliko su sva polja prošla validaciju
            if (formaJeIspravna) {
                porukaUspjeha.style.className = "poruka-uspjeha";
                porukaUspjeha.style.color = "green";
                porukaUspjeha.style.fontWeight = "bold";
                porukaUspjeha.style.marginBottom = "15px";
                porukaUspjeha.style.display = "block";
                
                // Personalizirana poruka sa imenom korisnika
                porukaUspjeha.textContent = `Hvala Vam, ${ime.value.trim()}! Vaša poruka je uspješno prosljeđena.`;
                
                forma.reset(); // Briše sadržaj forme nakon uspješnog slanja
            }
        });

        // Logika za Reset dugme - čisti formu i sve poruke o greškama
        forma.addEventListener("reset", function () {
            const spans = forma.querySelectorAll(".greska");
            const inputs = forma.querySelectorAll("input, textarea, select");
            
            spans.forEach(span => span.textContent = "");
            inputs.forEach(input => input.classList.remove("input-greska"));
            
            document.getElementById("poruka-uspjeha").style.display = "none";
        });
    }
    // ==========================================
    // 6. REGISTRACIJA PWA SERVICE WORKERA
    // ==========================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service Worker uspješno registrovan!', reg))
                .catch(err => console.log('Greška pri registraciji SW:', err));
        });
    }
});