
const certifications = {
    english: {
        title: "English Certifications",
        items: [
            { img: '../assets/Diplomas/Ingles (1).jpg' },
            { img: '../assets/Diplomas/Ingles (2).jpg' },
            { img: '../assets/Diplomas/Ingles (3).jpg' },
            { img: '../assets/Diplomas/Ingles (4).jpg' },
            { img: '../assets/Diplomas/Ingles (5).jpg' },
            { img: '../assets/Diplomas/Ingles (6).jpg' },
            { img: '../assets/Diplomas/Ingles (7).jpg' },
            { img: '../assets/Diplomas/Ingles (8).jpg' },
            { img: '../assets/Diplomas/Ingles (9).jpg' },
            { img: '../assets/Diplomas/Ingles (10).jpg' },
            { img: '../assets/Diplomas/Ingles (11).jpg' },
            { img: '../assets/Diplomas/Ingles (12).jpg' },
            { img: '../assets/Diplomas/Ingles (13).jpg' },
            { img: '../assets/Diplomas/Ingles (14).jpg' },
            { img: '../assets/Diplomas/Ingles (15).jpg' },
            { img: '../assets/Diplomas/Ingles (16).jpg' }
        ]
    },
    css_html: {
        title: "CSS & HTML Certifications",
        items: [
            { img: '../assets/Diplomas/html & css (1).jpg' },
            { img: '../assets/Diplomas/html & css (2).jpg' },
            { img: '../assets/Diplomas/html & css (3).jpg' },
            { img: '../assets/Diplomas/html & css (4).jpg' },
            { img: '../assets/Diplomas/html & css (5).jpg' },
            { img: '../assets/Diplomas/html & css (6).jpg' }
        ]
    },
    js: {
        title: "JavaScript Certifications",
        items: [
            { img: '../assets/Diplomas/js (1).jpg' },
            { img: '../assets/Diplomas/js (2).jpg' },
            { img: '../assets/Diplomas/js (3).jpg' },
            { img: '../assets/Diplomas/js (4).jpg' }
        ]
    },
    misc: {
        title: "Miscellaneous Certifications",
        items: [
            { img: '../assets/Diplomas/varios (1).jpg' },
            { img: '../assets/Diplomas/varios (2).jpg' },
            { img: '../assets/Diplomas/varios (3).jpg' },
            { img: '../assets/Diplomas/varios (4).jpg' },
            { img: '../assets/Diplomas/varios (5).jpg' },
            { img: '../assets/Diplomas/varios (6).jpg' },
            { img: '../assets/Diplomas/varios (7).jpg' },
            { img: '../assets/Diplomas/varios (8).jpg' },
            { img: '../assets/Diplomas/varios (9).jpg' },
            { img: '../assets/Diplomas/varios (10).jpg' },
            { img: '../assets/Diplomas/varios (11).jpg' },
            { img: '../assets/Diplomas/varios (12).jpg' },
            { img: '../assets/Diplomas/varios (13).jpg' },
            { img: '../assets/Diplomas/varios (14).jpg' },
            { img: '../assets/Diplomas/varios (15).jpg' },
            { img: '../assets/Diplomas/varios (16).jpg' },
            { img: '../assets/Diplomas/varios (17).jpg' },
            { img: '../assets/Diplomas/varios (18).jpg' },
            { img: '../assets/Diplomas/varios (19).jpg' }
        ]
    }
};


function createCertificationSection(sectionId, sectionData) {
    const section = document.getElementById(sectionId);


    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = sectionData.title;
    section.appendChild(title);


    const grid = document.createElement('div');
    grid.classList.add('certifications-grid');


    sectionData.items.forEach(cert => {
        const certification = document.createElement('div');
        certification.classList.add('certification');

        const img = document.createElement('img');
        img.src = cert.img;
        img.alt = 'Certification Image';

        certification.appendChild(img);
        grid.appendChild(certification);
    });

    section.appendChild(grid);
}


createCertificationSection('html-certifications', certifications.english);
createCertificationSection('css-certifications', certifications.css_html);
createCertificationSection('js-certifications', certifications.js);
createCertificationSection('misc-certifications', certifications.misc);
