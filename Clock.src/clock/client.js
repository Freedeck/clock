const handle = () => {
	document.querySelectorAll('.button').forEach((button) => {
		if (button.getAttribute('data-interaction')) {
			let dat = button.getAttribute('data-interaction');
			dat = JSON.parse(dat);
			if (dat.type == 'clock.time') {
				button.innerText = new Date(Date.now()).toLocaleTimeString();
			} else if (dat.type == 'clock.date') {
				button.innerText = new Date(Date.now()).toLocaleDateString();
			} else if (dat.type == 'clock.time.24') {
				button.innerText = new Date(Date.now()).toLocaleTimeString('en-US', { hour12: false });
			}
		}
	});
};
handle();
setInterval(() => {
	handle();
}, 1000)