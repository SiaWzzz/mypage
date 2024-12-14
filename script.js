document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

const projectDetails = {
    1: {
        title: " ",
        images: ["img/project/SG-0.jpg", "img/project/SG-1.jpg", "img/project/SG-2.jpg", "img/project/SG-3.jpg", "img/project/SG-4.jpg", "img/project/SG-5.jpg", "img/project/preview.gif"],
        text: " "
    },
    2: {
        title: " ",
        images: ["img/project/SSTM-0.jpg", "img/project/SSTM-1.jpg", "img/project/SSTM-2.jpg", "img/project/SSTM-3.jpg", "img/project/SSTM-4.jpg", "img/project/SSTM-5.jpg", "img/project/SSTM-6.jpg" ],
        text: " "
    },
    3: {
        title: " ",
        images: ["img/project/FB-0.jpg", "img/project/FB-1.jpg", "img/project/FB-2.jpg", "img/project/FB-3.jpg", "img/project/FB-4.jpg", "img/project/FB-5.jpg", "img/project/FB-6.jpg", ],
        text: " "
    },
    4: {
        title: " ",
        images: ["img/project/HT-0.jpg", "img/project/HT-1.jpg", "img/project/HT-2.jpg", "img/project/HT-3.jpg", "img/project/HT-4.jpg", "img/project/HT-5.jpg", "img/project/HT-6.jpg"],
        text: " "
    },
    5: {
        title: " ",
        images: ["img/project/APP-0.jpg"],
        text: " "
    },
    6: {
        title: " ",
        images: ["img/project/IA-0.jpg"],
        text: " "
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
            img.style.width = '100%'; // 设置宽度为 100%
            img.style.display = 'block'; // 确保图片占据整个行
            img.style.margin = '0'; // 移除外边距
            imageContainer.appendChild(img);
        });

        document.querySelector('.modal-overlay').classList.add('active');
        document.querySelector('.modal').classList.add('active');

        // 将弹窗滚动位置重置为顶部
        document.querySelector('.modal').scrollTop = 0;
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.modal-overlay').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
});

document.querySelector('.modal-overlay').addEventListener('click', function() {
    document.querySelector('.modal-overlay').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
});