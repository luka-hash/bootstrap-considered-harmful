// Copyright (c) 2023 Luka Ivanović
// This code is licensed under MIT licence (see LICENCE for details)

const replacement = document.createElement("h1");
replacement.innerText = "bootstrap considered harmful";

Array.from(document.getElementsByTagName("link")).forEach(link => {
	if (link.href.includes("bootstrap")) {
		document.body.replaceChildren(replacement);
	}
})
