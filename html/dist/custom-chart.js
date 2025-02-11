document.addEventListener('DOMContentLoaded', function () {
  const pieCtx = document.getElementById('assetPieChart').getContext('2d');
  const barCtx = document.getElementById('assetBarChart').getContext('2d');

  // pit chart starts here //
  const pieData = {
    labels: [
      'Preference Shares',
      'Corp Bonds & Notes',
      'Fixed Deposit',
      'Mutual Funds',
      'US Sov & Corp',
      'Gov Bonds',
      'Debt',
      'Cash',
    ],
    datasets: [
      {
        label: 'Asset Allocation',
        data: [31.58, 19.25, 6.91, 2.19, 4.63, 3.93, 3.28, 28.23],
        backgroundColor: [
          '#7678ED', // Preference Shares
          '#48CAE4', // Corp Bonds & Notes
          '#FF6B6B', // Fixed Deposit
          '#4CAF50', // Mutual Funds
          '#00B4D8', // US Sov & Corp
          '#212529', // Gov Bonds
          '#FFD60A', // Debt
          '#F4A261', // Cash
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = pieData.labels[tooltipItem.dataIndex] || '';
            let value = pieData.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  new Chart(pieCtx, {
    type: 'pie',
    data: pieData,
    options: pieOptions,
  });
  // pit chart ends here //

  // bar chart starts here //
  const bardata = {
    labels: [
      'Preference Shares',
      'Corp Bonds & Notes',
      'Fixed Deposit',
      'Mutual Funds',
      'US Sov & Corp',
      'Gov Bonds',
      'Debt',
      'Cash',
    ],
    datasets: [
      {
        label: 'Asset Allocation (%)',
        data: [31.58, 19.25, 6.91, 2.19, 4.63, 3.93, 3.28, 28.23],
        backgroundColor: [
          '#7678ED', // Preference Shares
          '#48CAE4', // Corp Bonds & Notes
          '#FF6B6B', // Fixed Deposit
          '#4CAF50', // Mutual Funds
          '#00B4D8', // US Sov & Corp
          '#212529', // Gov Bonds
          '#FFD60A', // Debt
          '#F4A261', // Cash
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  const baroptions = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: '#ddd' },
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend since the labels are already clear
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  new Chart(barCtx, {
    type: 'bar',
    data: bardata,
    options: baroptions,
  });
  // bar chart ends here //
});
