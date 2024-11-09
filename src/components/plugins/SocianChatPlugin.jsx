"use client"

import Script from 'next/script';

const SocianChatPlugin = () => {
	return (
		<Script
			strategy="lazyOnload"
			src="https://widget.sonetel.com/SonetelWidget.min.js"
			id="slcLiveChat"
			data-account-id={208306656}
		/>
	);
};

export default SocianChatPlugin;
