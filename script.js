const trackingData = [
  {
    status: 'Order Processed',
    date: '2026-04-14 09:00 AM',
    location: 'Philadelphia Origin Facility',
    icon: 'fa-file-invoice',
    delivered: false
  },
  {
    status: 'Package Picked Up',
    date: '2026-04-15 02:30 PM',
    location: 'Chestnut St,Philadelphia, PA 19106',
    icon: 'fa-truck-loading',
    delivered: false
  },
  {
    status: 'In Transit',
    date: '2026-04-13 11:15 AM',
    location: 'Chestnut St,Philadelphia, PA 19106',
    icon: 'fa-shipping-fast',
    delivered: false
  },
  {
    status: 'Local Sorting',
    date: '2026-04-16 07:45 AM',
    location: 'Chestnut St,Philadelphia, PA 19106',
    icon: 'fa-sort-amount-down',
    delivered: false
  },
  {
    status: 'Out for Delivery',
    date: '2026-04-17 08:30 AM',
    location: 'Monroe County, PA 18330',
    icon: 'fa-box-open',
    delivered: false,
    class: 'scheduled'
  },
  {
    status: 'Scheduled Delivery',
    date: 'April 17, 2026 10:30 AM',
    location: '905 Toll Rd Effort, PA 18330',
    icon: 'fa-calendar-check',
    delivered: true,
    class: 'scheduled'
  }
];

function loadTrackingData() {
  const timeline = document.getElementById('timeline');
  trackingData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `status-item ${item.delivered ? 'delivered' : ''} ${item.class || ''}`;
    div.style.animationDelay = `${index * 0.15}s`;
    div.innerHTML = `
      <div class="status-icon">
        <i class="fas ${item.icon}"></i>
      </div>
      <div class="status-content">
        <div class="status-title">${item.status}</div>
        <div class="status-date">${item.date}</div>
        <div class="status-location">${item.location}</div>
      </div>
    `;
    timeline.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadTrackingData);

