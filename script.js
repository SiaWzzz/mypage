document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

const projectDetails = {
    1: {
        title: " ",
        images: ["img/project/SG/SG-0.png", "img/project/SG/SG-1.png", "img/project/SG/SG-2.png", "img/project/SG/SG-3.png", "img/project/SG/SG-4.png", "img/project/SG/SG-5.png", "img/project/SG/preview.gif"],
        text: " "
    },
    2: {
        title: " ",
        images: ["img/project/SSTM/SSTM-0.png"],
        text: " "
    },
    3: {
        title: " ",
        images: ["img/project/FB/FB-0.png"],
        text: " "
    },
    4: {
        title: " ",
        images: ["img/project/HT/HT-0.png", "img/project/HT/HT-1.png", "img/project/HT/HT-2.png", "img/project/HT/HT-3.png", "img/project/HT/HT-4.png", "img/project/HT/HT-5.png", "img/project/HT/HT-6.png"],
        text: " "
    },
    5: {
        title: " ",
        images: ["img/paper/tasies.jpg"],
        text: " "
    },
    6: {
        title: " ",
        images: ["img/paper/tasies.jpg"],
        text: " "
    },
    7: {
        title: " ",
        images: ["img/paper/tasies.jpg"],
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