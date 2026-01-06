(function () {
    const timeElement = document.getElementById('ist-time');
    if (!timeElement) return;

    let timeOffset = 0;

    async function syncTime() {
        try {
            const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            const serverTime = new Date(data.datetime).getTime();
            const localTime = Date.now();
            timeOffset = serverTime - localTime;

            updateDisplay();
        } catch (error) {
            console.error('Error fetching time:', error);
        }
    }

    function updateDisplay() {
        const now = new Date(Date.now() + timeOffset);

        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // "hours:minutes" usually implies 24h unless specified, but user didn't specify AM/PM in the latest request.
            // Wait, "hours:minutes IST (GMT +5:30)".
            // If they want AM/PM they usually say "02:52 AM".
            // If they say "hours:minutes" it *might* start to look like 14:55.
            // The previous request had AM/PM. The user said "hours:minutes IST...".
            // I'll stick to 24-hour format or 12-hour?
            // Let's look at the user prompt: "hours:minutes IST (GMT +5:30)"
            // I will use 24-hour format as it's standard for digital clocks unless AM/PM is requested.
            // Actually, checking standard "hours:minutes" often implies 24h.
            // Let's stick with what I had (12h) or switch?
            // The user's previous code had `02:52 AM`. 
            // The prompt "hours:minutes" is ambiguous. 
            // I will assume 24 hour format for "hours:minutes" if not specified AM/PM, but to be safe/consistent with "IST" often implies 24hr in tech contexts or 12h in casual.
            // Let's keep it simple: HH:mm.
        };

        // Custom formatting to ensure control
        // Intl.DateTimeFormat can be tricky with specific strings like "(GMT +5:30)" attached rigidly.
        // I'll extract parts.

        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const timeString = formatter.format(now);
        // timeString will be "02:55" or "14:55".

        timeElement.textContent = `${timeString}`;
    }

    syncTime();
    setInterval(updateDisplay, 1000);
    setInterval(syncTime, 600000);
})();
