export const data = {
    labels: [
        'Reconnaissance',
    	'Resource Development',
        'Initial Access',	
        'Execution',
        'Persistence',
        'Privilege Escalation',
        'Defense Evasion',
        'Credential Access',
        'Discovery',
        'Lateral Movement',
        'Collection',
        'Command and Control',
        'Exfiltration',
        'Impact'],
    datasets: [
      {
        backgroundColor: ['navy', 'green', 'purple', 'red' ,'orange','gray','lightblue','lightgreen'],
        data: [0.86, 0.02, 0.02, 0.05,0.08,0.03,0.07,0.01,0.02,0.03,0.07,0.08,0.02]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1
  }
  