document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
    });

const projectDetails = {
    1: {
        title: "Freely Growing",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 1."
    },
    2: {
        title: "See, smell, and touch the music",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 2."
    },
    3: {
        title: "The Eighth Continent",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 3."
    },
    4: {
        title: "Sharing Kitchen",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 1."
    },
    5: {
        title: "SuperCard: Meet Dali",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 2."
    },
    6: {
        title: "Brain Painting Institute",
        image: "../img/paper/tasies.jpg",
        text: "Detailed description for Project 3."
    }
    // 添加更多项目的详情
};
document.querySelectorAll('.projects-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-id');

        // 更新弹窗内容
        document.getElementById('detail-title').innerText = projectDetails[projectId].title;
        document.getElementById('detail-image').src = projectDetails[projectId].image;
        document.getElementById('detail-text').innerText = projectDetails[projectId].text;

        // 显示弹窗和半透明背景
        document.querySelector('.modal-overlay').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';
    });
});

// 关闭弹窗功能 - 点击关闭按钮
document.querySelector('.close-btn').addEventListener('click', function() {
    closeModal();
});

// 关闭弹窗功能 - 点击空白处（半透明背景）
document.querySelector('.modal-overlay').addEventListener('click', function() {
    closeModal();
});

function closeModal() {
    // 隐藏弹窗和半透明背景
    document.querySelector('.modal-overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
}