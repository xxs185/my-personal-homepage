<![CDATA[document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动到锚点
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 你可以在这里添加更多的JavaScript交互功能
    console.log('个人主页脚本已加载！');
});]]>
