# Grupa30-TPTP-2026
TPTP Zavrsni projekat 2025/2026 - Biografije poznatih licnosti
<!DOCTYPE html>
<html lang="bs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Početna - Biografije</title>
    <link rel="stylesheet" href="css/tptpstil.css">
</head>
<body>

    <header>
        <picture>
            <source srcset="slike/logo.webp" type="image/webp">
            <img src="slike/logo.jpg" alt="Logotip enciklopedije biografija" width="150">
        </picture>
        <h1>Enciklopedija Poznatih Ličnosti</h1>
        
        <nav aria-label="Glavna navigacija">
            <ul>
                <li><a href="https://github.com/vas-repozitorij" target="_blank" rel="noopener">GitHub Repozitorij</a></li>
                <li><a href="index.html">Početna</a></li>
                <li><a href="sadrzaj.html">Sadržaj</a></li>
                <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <nav aria-label="Filter kategorija">
        <p>Filtriraj po kategoriji:</p>
        <button class="filter-btn" data-filter="sve">Sve ličnosti</button>
        <button class="filter-btn" data-filter="naucnici">Naučnici</button>
        <button class="filter-btn" data-filter="umjetnici">Umjetnici</button>
        <button class="filter-btn" data-filter="vladari">Istorijski vladari</button>
        <button class="filter-btn" data-filter="pisci">Pisci</button>
    </nav>

    <main>
        <article>
            <h2>Dobrodošli u našu arhivu</h2>
            <p>Istražite živote i djela ljudi koji su ostavili neizbrisiv trag u ljudskoj istoriji kroz nauku, umjetnost i politiku.</p>
        </article>

        <section id="kartice-kontejner">
            <h2>Izdvojene biografije</h2>
            <article class="kartica" data-kategorija="naucnici">
                <img src="slike/tesla.jpg" alt="Portret Nikole Tesle">
                <h3>Nikola Tesla</h3>
                <p>Genijalni pronalazač sistema naizmjenične struje.</p>
                <a href="sadrzaj.html#tesla">Saznaj više</a>
            </article>
            <article class="kartica" data-kategorija="naucnici">
                <img src="slike/curie.jpg" alt="Portret Marie Curie">
                <h3>Marie Curie</h3>
                <p>Pionirka u istraživanju radioaktivnosti.</p>
                <a href="sadrzaj.html#curie">Saznaj više</a>
            </article>
            <article class="kartica" data-kategorija="umjetnici">
                <img src="slike/davinci.jpg" alt="Portret Leonarda Da Vincija">
                <h3>Leonardo Da Vinci</h3>
                <p>Renesansni majstor, slikar i vizionar.</p>
                <a href="sadrzaj.html#davinci">Saznaj više</a>
            </article>
            <article class="kartica" data-kategorija="pisci">
                <img src="slike/shakespeare.jpg" alt="Portret Williama Shakespearea">
                <h3>William Shakespeare</h3>
                <p>Najveći engleski dramski pisac.</p>
                <a href="sadrzaj.html#shakespeare">Saznaj više</a>
            </article>
            <article class="kartica" data-kategorija="vladari">
                <img src="slike/kleopatra.jpg" alt="Portret Kleopatre">
                <h3>Kleopatra VII</h3>
                <p>Posljednja aktivna vladarica ptolemejskog Egipta.</p>
                <a href="sadrzaj.html#kleopatra">Saznaj više</a>
            </article>
            <article class="kartica" data-kategorija="naucnici">
                <img src="slike/einstein.jpg" alt="Portret Alberta Einsteina">
                <h3>Albert Einstein</h3>
                <p>Tvorac teorije relativnosti.</p>
                <a href="sadrzaj.html#einstein">Saznaj više</a>
            </article>
        </section>

        <aside>
            <h2>Video dana</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            <p>Kratki dokumentarac o uticaju istorijskih ličnosti.</p>
        </aside>
    </main>

    <footer>
        <p>Autori projekta: Anto Marković, Emina Nuhanović, Emir Lješnica | 2026.</p>
    </footer>
