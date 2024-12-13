document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

const projectDetails = {
    1: {
        title: "Freely Growing",
        images: ["img/paper/tasies.jpg"],
        text: "Detailed description for Project 1."
    },
    2: {
        title: "See, smell, and touch the music",
        images: ["img/paper/tasies.jpg"],
        text: "Detailed description for Project 2."
    },
    3: {
        title: "The Eighth Continent",
        images: ["img/paper/tasies.jpg"],
        text: "Detailed description for Project 3."
    },
    4: {
        title: " ",
        images: ["img/project/HT/HT-0.png", "img/project/HT/HT-1.png", "img/project/HT/HT-2.png", "img/project/HT/HT-3.png", "img/project/HT/HT-4.png", "img/project/HT/HT-5.png", "img/project/HT/HT-6.png"],
        text: " "
    },
    5: {
        title: "SuperCard: Meet Dali",
        images: ["img/paper/tasies.jpg"],
        text: "Detailed description for Project 5."
    },
    6: {
        title: "Brain Painting Institute",
        images: ["img/paper/tasies.jpg"],
        text: "Detailed description for Project 6."
    }
};

document.querySelectorAll('.projects-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-id');
        const project = projectDetails[projectId];

        document.getElementById('detail-title').textContent = project.title;
        document.getElementById('detail-text').textContent = project.text;

        const imageContainer = document.getElementById('detail-images');
        imageContainer.innerHTML = ''; // 清空之前的图片

        project.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = project.title;
            imageContainer.appendChild(img);
        });

        document.querySelector('.modal-overlay').classList.add('active');
        document.querySelector('.modal').classList.add('active');
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.modal-overlay').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
});