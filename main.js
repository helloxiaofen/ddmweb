// 订单数据
const orderData = [
    { id: 'DDM001', customer: '张三', amount: 2999, status: '已完成' },
    { id: 'DDM002', customer: '李四', amount: 1999, status: '处理中' },
    { id: 'DDM003', customer: '王五', amount: 3999, status: '未处理' },
    { id: 'DDM004', customer: '赵六', amount: 4999, status: '已完成' },
    { id: 'DDM005', customer: '钱七', amount: 2999, status: '处理中' }
];

// 初始化订单表格
function initOrderTable() {
    const tableBody = document.getElementById('orderTableBody');
    orderData.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>¥${order.amount}</td>
            <td><span class="badge bg-${getStatusColor(order.status)}">${order.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// 获取状态对应的颜色
function getStatusColor(status) {
    switch(status) {
        case '已完成':
            return 'success';
        case '处理中':
            return 'warning';
        case '未处理':
            return 'secondary';
        default:
            return 'primary';
    }
}

// 初始化进度图表
function initProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            datasets: [{
                label: '订单完成进度',
                data: [65, 75, 85, 70, 90, 95],
                backgroundColor: '#4a90e2',
                borderColor: '#4a90e2',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: '完成率 (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '月度订单完成情况'
                }
            }
        }
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢您的留言，我们会尽快回复！');
    this.reset();
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initOrderTable();
    initProgressChart();
}); 