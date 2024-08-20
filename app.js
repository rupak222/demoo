let visibility_page_web_pixel = window.Pragati.common.metafield.visibility_page;
let isFbPixelInit = false;
let isTtPixelInit = false;
if (visibility_page_web_pixel.hasOwnProperty("webPixels")) {
	if (visibility_page_web_pixel.webPixels.length > 0) {
		let filteredArray = visibility_page_web_pixel.webPixels.filter(
			(item) => item.pixel_id !== "",
		);
		if (filteredArray.length > 0) {
			let filteredFacebookPixel = filteredArray.filter(
				(item) => item.pixel_type === "facebook_pixel",
			);
			if (filteredFacebookPixel.length > 0) {
				!(function (f, b, e, v, n, t, s) {
					if (f.fbq) return;
					n = f.fbq = function () {
						n.callMethod
							? n.callMethod.apply(n, arguments)
							: n.queue.push(arguments);
					};
					if (!f._fbq) f._fbq = n;
					n.push = n;
					n.loaded = !0;
					n.version = "2.0";
					n.queue = [];
					t = b.createElement(e);
					t.async = !0;
					t.src = v;
					s = b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t, s);
				})(
					window,
					document,
					"script",
					"https://connect.facebook.net/en_US/fbevents.js",
				);

				for (var i = 0; i < filteredFacebookPixel.length; i++) {
					fbq("init", filteredFacebookPixel[i].pixel_id);
				}
				fbq("track", "PageView");

				isFbPixelInit = true;
			}
			let filteredTiktokPixel = filteredArray.filter(
				(item) => item.pixel_type === "tiktok_pixel",
			);
			if (filteredTiktokPixel.length > 0) {
				!(function (w, d, t) {
					w.TiktokAnalyticsObject = t;
					var ttq = (w[t] = w[t] || []);
					(ttq.methods = [
						"page",
						"track",
						"identify",
						"instances",
						"debug",
						"on",
						"off",
						"once",
						"ready",
						"alias",
						"group",
						"enableCookie",
						"disableCookie",
					]),
						(ttq.setAndDefer = function (t, e) {
							t[e] = function () {
								t.push(
									[e].concat(
										Array.prototype.slice.call(
											arguments,
											0,
										),
									),
								);
							};
						});
					for (var i = 0; i < ttq.methods.length; i++)
						ttq.setAndDefer(ttq, ttq.methods[i]);
					(ttq.instance = function (t) {
						for (
							var e = ttq._i[t] || [], n = 0;
							n < ttq.methods.length;
							n++
						)
							ttq.setAndDefer(e, ttq.methods[n]);
						return e;
					}),
						(ttq.load = function (e, n) {
							var i =
								"https://analytics.tiktok.com/i18n/pixel/events.js";
							(ttq._i = ttq._i || {}),
								(ttq._i[e] = []),
								(ttq._i[e]._u = i),
								(ttq._t = ttq._t || {}),
								(ttq._t[e] = +new Date()),
								(ttq._o = ttq._o || {}),
								(ttq._o[e] = n || {});
							var o = document.createElement("script");
							(o.type = "text/javascript"),
								(o.async = !0),
								(o.src = i + "?sdkid=" + e + "&lib=" + t);
							var a = document.getElementsByTagName("script")[0];
							a.parentNode.insertBefore(o, a);
						});

					for (var i = 0; i < filteredTiktokPixel.length; i++) {
						ttq.load(filteredTiktokPixel[i].pixel_id);
					}
				})(window, document, "ttq");

				isTtPixelInit = true;
			}
		}
	}
}

let pragatiCurrentlySelectedShippingOption = "";
let shippingRatesMetafield = window.Pragati.common.metafield.visibility_page;
if (
	shippingRatesMetafield.hasOwnProperty("shippingRates") &&
	shippingRatesMetafield.shippingRates.length != 0
) {
	pragatiCurrentlySelectedShippingOption = `${shippingRatesMetafield.shippingRates[0].id}`; //metafield value is number
}
function pragatiShippingRatesOptionChange(radioButton) {
	let str = window.Pragati.common.shop.money_format;
	let newStr = str.replace(/{{.*?}}/g, "");

	var selectedValue = radioButton.value;
	var shippingPriceElement = document.querySelector(
		".pragati-cod-form-shipping-price",
	);
	if (shippingPriceElement) {
		shippingPriceElement.textContent = `${newStr}${selectedValue}`;
	} else {
		console.log("Element not found");
	}

	var shippingTotalElement = document.querySelector(
		".pragati-cod-form-shipping-total",
	);
	if (shippingTotalElement) {
		var variantPrice = document.querySelector(".pragati-cod-form-price");
		var resultString = variantPrice.textContent.replace(newStr, "");
		shippingTotalElement.textContent = `${newStr}${
			parseFloat(resultString) + parseFloat(selectedValue)
		}`;
	} else {
		console.log("Element not found");
	}

	pragatiCurrentlySelectedShippingOption = radioButton.id;
	console.log(radioButton.id);
	console.log(
		"pragatiCurrentlySelectedShippingOption : " +
			pragatiCurrentlySelectedShippingOption,
	);
}

document.addEventListener("DOMContentLoaded", async function () {


	if (!window.location.pathname.includes("/products")) {
		throw new Error("This is not a product page.");
	}



	if (
		window.Pragati.common.metafield.visibility_page.hasOwnProperty(
			"custom_css_code",
		)
	) {
		document.getElementById("pragati-custom-css-stylesheet").textContent =
			window.Pragati.common.metafield.visibility_page.custom_css_code;
	}

	if (window.Pragati.common.metafield.visibility_page.hidden_add_to_cart) {
		// hiding atc button
		const getATCButton = document.querySelector(
			'button[data-hook="add-to-cart"]',
		);
		if (getATCButton) {
			getATCButton.style.display = "none"; // remember !important rule don't work in javscript, if want use css.
		} else {
			console.error(
				"ATC Bpragati-cod-form-imgutton not found in the DOM",
			);
		}
	}

	if (window.Pragati.common.metafield.visibility_page.hidden_buy_now) {
		// hiding buyitnow button
		const getBINButton = document.querySelector(".shopify-payment-button");
		if (getBINButton) {
			getBINButton.style.display = "none";
		} else {
			console.error("BIN Button not found in the DOM");
		}
	}

	let orderInfo = {
		shopId: `${window.Pragati.common.shop.id}`,
		variant_id: `${window.Pragati.common.product.variant}`,
		quantity: "1", // default
		first_name: "",
		last_name: "",
		email: "",
		address1: "",
		address2: "",
		phone: "",
		city: "",
		province: "",
		zip: "",
		note: "",
		country: window.Pragati.common.metafield.country,
		phone_code: `${window.Pragati.common.metafield.phoneCode}`,
	};

	console.log(
		"typeof country : " + typeof window.Pragati.common.metafield.country,
	);
	console.log(
		"typeof phone_code : " +
			typeof window.Pragati.common.metafield.phoneCode,
	);

	let convertedMetafieldBuyButtonJson = undefined;
	if (typeof window.Pragati.common.metafield.buy_button === "object") {
		convertedMetafieldBuyButtonJson =
			window.Pragati.common.metafield.buy_button;
	} else if (typeof window.Pragati.common.metafield.buy_button === "string") {
		convertedMetafieldBuyButtonJson = JSON.parse(
			window.Pragati.common.metafield.buy_button,
		);
	}

	// Create the button element
	const button = document.createElement("button");

	// Set the buy button's class name
	button.classList.add(
		"animate__animated",
		"animate__infinite",
		"pragati-buy-button",
		"pragati-cod-form-btn-open",
	);

	if (convertedMetafieldBuyButtonJson.buttonAnimation[0] !== "none") {
		button.classList.add(
			`animate__${convertedMetafieldBuyButtonJson.buttonAnimation[0]}`,
		);
	}

	// Set the button's style properties
	button.style.backgroundColor =
		convertedMetafieldBuyButtonJson.backgroundColor;
	button.style.borderColor = convertedMetafieldBuyButtonJson.borderColor;
	button.style.borderRadius = `${convertedMetafieldBuyButtonJson.borderRadius}px`;
	button.style.borderWidth = `${convertedMetafieldBuyButtonJson.borderWidth}px`;
	button.style.marginTop = `20px`;
	button.style.marginBottom = `20px`;
	button.type = "button"; // because of this add to cart was not triggered
	button.style.padding = "12.8px 19.2px";

	if (convertedMetafieldBuyButtonJson.shadow !== 0) {
		button.style.boxShadow = `${
			convertedMetafieldBuyButtonJson.shadow / 2
		}px ${convertedMetafieldBuyButtonJson.shadow}px 18px ${
			convertedMetafieldBuyButtonJson.shadowColor
		}`;
	}

	if (
		convertedMetafieldBuyButtonJson.buttonIcon === "quick_sale_major_icon"
	) {
		// Create the SVG element
		const svg = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"svg",
		);

		// Set the SVG's attributes
		svg.setAttribute("viewBox", "0 0 20 20");
		svg.setAttribute("focusable", "false");
		svg.setAttribute("aria-hidden", "true");
		svg.setAttribute("class", "pragati-svg-icon");
		// Set the SVG's style properties
		svg.style.fill = convertedMetafieldBuyButtonJson.textColor;

		// Create the first path element
		const path1 = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);
		path1.setAttribute("fill-rule", "evenodd");
		path1.setAttribute(
			"d",
			"M5 0a1 1 0 0 0 0 2h1v1a1 1 0 0 0 .917.997l10.943.911-.727 5.092h-10.133a1 1 0 0 0-1 1v3.17a3.001 3.001 0 1 0 3.83 1.83h3.34a3 3 0 1 0 2.83-2h-8v-2h10a1 1 0 0 0 .99-.859l1-7a1 1 0 0 0-.907-1.138l-11.083-.923v-1.08a1 1 0 0 0-1-1h-2",
		);

		// Create the second path element
		const path2 = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);
		path2.setAttribute(
			"d",
			"M0 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1zm1 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-6zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1",
		);

		// Add the path elements to the SVG
		svg.appendChild(path1);
		svg.appendChild(path2);

		// Add the SVG to the document
		button.appendChild(svg);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "shipment_major_icon"
	) {
		const svg = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"svg",
		);

		svg.setAttribute("viewBox", "0 0 20 20");
		svg.setAttribute("focusable", "false");
		svg.setAttribute("aria-hidden", "true");
		svg.setAttribute("class", "pragati-svg-icon");

		svg.style.fill = convertedMetafieldBuyButtonJson.textColor;

		const path1 = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);
		path1.setAttribute("fill-rule", "evenodd");
		path1.setAttribute(
			"d",
			"M1.5 2a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.5 1.5h.5a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h.5a1.5 1.5 0 0 0 1.5-1.5v-3.361a1.5 1.5 0 0 0-.214-.772l-2.783-4.639a1.5 1.5 0 0 0-1.286-.728h-2.717v-1.5a1.5 1.5 0 0 0-1.5-1.5h-10zm13.5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-11-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm13.234-6h-4.234v-3h2.434l1.8 3z",
		);

		svg.appendChild(path1);

		button.appendChild(svg);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "cart_major_icon"
	) {
		const svg = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"svg",
		);

		svg.setAttribute("viewBox", "0 0 20 20");
		svg.setAttribute("focusable", "false");
		svg.setAttribute("aria-hidden", "true");
		svg.setAttribute("class", "pragati-svg-icon");

		svg.style.fill = convertedMetafieldBuyButtonJson.textColor;

		const path1 = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);
		path1.setAttribute("fill-rule", "evenodd");
		path1.setAttribute(
			"d",
			"M1 1c0-.552.45-1 1.004-1h1.505c.831 0 1.505.672 1.505 1.5v.56l12.574.908c.877.055 1.52.843 1.397 1.71l-.866 6.034a1.504 1.504 0 0 1-1.489 1.288h-11.616v2h10.043a3.005 3.005 0 0 1 3.011 3c0 1.657-1.348 3-3.01 3a3.005 3.005 0 0 1-2.84-4h-5.368a3.005 3.005 0 0 1-2.84 4 3.005 3.005 0 0 1-3.01-3c0-1.306.838-2.418 2.007-2.83v-12.17h-1.003a1.002 1.002 0 0 1-1.004-1zm4.014 3.064v5.936h11.18l.727-5.07-11.907-.866zm9.04 12.936c0-.552.449-1 1.003-1 .554 0 1.004.448 1.004 1s-.45 1-1.004 1a1.002 1.002 0 0 1-1.003-1zm-11.047 0c0-.552.45-1 1.004-1s1.003.448 1.003 1-.449 1-1.003 1a1.002 1.002 0 0 1-1.004-1z",
		);

		svg.appendChild(path1);

		button.appendChild(svg);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon ===
		"shopping_bag_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add(
			"fa",
			"fa-bag-shopping",
			"fa-lg",
			"fa-fw",
			"pragati-svg-icon",
		);

		i.style.padding = "10px";
		i.style.marginRight = "4px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "truck_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add(
			"fa",
			"fa-truck-fast",
			"fa-lg",
			"fa-fw",
			"pragati-svg-icon",
		);

		i.style.padding = "10px";
		i.style.marginRight = "10px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "tag_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add("fa", "fa-tag", "fa-lg", "fa-fw", "pragati-svg-icon");

		i.style.padding = "10px";
		i.style.marginRight = "4px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "basket_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add(
			"fa",
			"fa-basket-shopping",
			"fa-lg",
			"fa-fw",
			"pragati-svg-icon",
		);

		i.style.padding = "10px";
		i.style.marginRight = "8px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "shop_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add("fa", "fa-shop", "fa-lg", "fa-fw", "pragati-svg-icon");

		i.style.padding = "10px";
		i.style.marginRight = "10px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "store_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add("fa", "fa-store", "fa-lg", "fa-fw", "pragati-svg-icon");

		i.style.padding = "10px";
		i.style.marginRight = "7px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	} else if (
		convertedMetafieldBuyButtonJson.buttonIcon === "gift_fontawesome"
	) {
		var i = document.createElement("i");
		i.classList.add("fa", "fa-gift", "fa-lg", "fa-fw", "pragati-svg-icon");

		i.style.padding = "10px";
		i.style.marginRight = "6px";
		i.style.color = convertedMetafieldBuyButtonJson.textColor; // fill attribute only worked with svg.

		i.setAttribute("aria-hidden", "true");

		button.appendChild(i);
	}

	// Create the span element to hold the button's text
	const span = document.createElement("span");
	span.textContent = convertedMetafieldBuyButtonJson.buttonText;
	span.style.color = convertedMetafieldBuyButtonJson.textColor;
	span.style.fontSize = `${convertedMetafieldBuyButtonJson.fontSize}px`;

	// Add the span element to the button
	button.appendChild(span);

	// Add the button to the DOM
	// document.body.appendChild(button);
	const parent = document.querySelector(".shopify-payment-button");
	if (parent) {
		// Insert the new element before the existing element
		parent.parentNode.insertBefore(button, parent);
	} else {
		// If the initial selector doesn't exist, try alternative selectors
		const alternativeSelectors = ['button[type="submit"][name="add"]'];
		for (const selector of alternativeSelectors) {
			let parent = document.querySelector(selector);
			if (parent) {
				parent.parentNode.insertBefore(button, parent);
				break;
			}
		}
	}

	// <----------------- Logic to add sticky button (this feature not work property in npm run dev, have to deploy it and test) -------------------->

	// Select the original button element
	let pragatiBuyButton = document.querySelector(".pragati-buy-button");

	// Create a clone of the button
	let pragatiBuyButtonClone = pragatiBuyButton.cloneNode(true);

	// Add a class to the clone for styling if needed
	pragatiBuyButtonClone.classList.add("pragati-sticky-button");

	pragatiBuyButtonClone.style.display = "none";

	// Insert the clone into the DOM
	document.body.appendChild(pragatiBuyButtonClone);

	function handleScroll() {
		function isMobileViewport() {
			return window.innerWidth <= 768; // Adjust the threshold as needed
		}

		if (isMobileViewport()) {
			function isButtonInViewport() {
				let buttonRect = pragatiBuyButton.getBoundingClientRect();
				return buttonRect.bottom >= 0;
			}

			if (isButtonInViewport()) {
				// Button is visible
				pragatiBuyButtonClone.style.display = "none";
			} else {
				// Button is hidden, it's above the viewport
				pragatiBuyButtonClone.style.display = "";
			}
		}
	}
	window.addEventListener("scroll", handleScroll);
	// Initial check if user open the page from bottom
	handleScroll();

	// <----------------- Logic to add sticky button -------------------->

	// Create the overlay element
	const overlay = document.createElement("div");
	overlay.classList.add("pragati-cod-form-overlay");
	overlay.classList.add("pragati-cod-form-hidden");

	// Create the modal container element
	const modalContainer = document.createElement("div");
	modalContainer.classList.add("pragati-cod-form-modal-container");

	// Create the modal element
	const modal = document.createElement("div");
	modal.classList.add("pragati-cod-form-modal");

	// Create the flex container element
	const flexContainer = document.createElement("div");
	flexContainer.classList.add("pragati-cod-form-flex");

	// Create the heading element
	const heading = document.createElement("h3");
	heading.textContent =
		window.Pragati.common.metafield.form_designer2.titleName;
	heading.style.fontWeight = "bold";

	// Create the close button element

	const closeButton = document.createElement("button");
	closeButton.classList.add("pragati-cod-form-btn-close");
	closeButton.textContent = "⨉";

	closeButton.style.display = window.Pragati.common.metafield.form_designer2
		.hideCloseButton
		? "none"
		: undefined;
	console.log(
		"value of hideCloseButton : " +
			window.Pragati.common.metafield.form_designer2.hideCloseButton,
	);

	// Append the heading and close button to the flex container
	flexContainer.appendChild(heading);
	flexContainer.appendChild(closeButton);

	// Append the flex container to the modal
	modal.appendChild(flexContainer);

	// Append the modal to the modal container
	modalContainer.appendChild(modal);

	// Append the modal container to the overlay
	overlay.appendChild(modalContainer);

	// Append the overlay to the document body
	document.body.appendChild(overlay);

	const formOverlay = document.querySelector(".pragati-cod-form-overlay");
	const openModalBtn = document.querySelectorAll(
		".pragati-cod-form-btn-open",
	);
	const closeModalBtn = document.querySelector(".pragati-cod-form-btn-close");

	const openModal = function () {
		if (isFbPixelInit) {
			fbq("track", "InitiateCheckout");
		}
		if (isTtPixelInit) {
			ttq.track("InitiateCheckout");
		}
		let variantObject = window.Pragati.common.product.all_variants.find(
			(item) => item.id == window.Pragati.common.product.variant,
		);
		let urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("variant")) {
			let variantValue = urlParams.get("variant");
			orderInfo.variant_id = variantValue;

			variantObject = window.Pragati.common.product.all_variants.find(
				(item) => item.id == variantValue,
			);

			let element = document.querySelector(".pragati-cod-form-img");
			if (element && variantObject.featured_image != null) {
				element.src = variantObject.featured_image.src;
			} else {
				element.src = window.Pragati.common.product.featured_image;
			}
		}

		console.log("90");

		let quantityInput = document.querySelector(".quantity__input");
		if (quantityInput) {
			orderInfo.quantity = quantityInput.value;
			console.log(quantityInput.value);

			let dotValue = document.querySelector(
				".pragati-cod-form-dot-value",
			);
			dotValue.innerHTML = quantityInput.value;
		}

		if (!quantityInput) {
			// If the initial selector doesn't exist, try alternative selectors
			const alternativeSelectors = [
				".qty-input",
				".t4s-quantity-input",
				".quantity-input__element",
				".js-qty__num",
			]; //support for debutify, kalles, Minimog, Debutify(1.0)

			for (const selector of alternativeSelectors) {
				quantityInput = document.querySelector(selector);
				if (quantityInput) {
					orderInfo.quantity = quantityInput.value;
					console.log(quantityInput.value);

					let dotValue = document.querySelector(
						".pragati-cod-form-dot-value",
					);
					dotValue.innerHTML = quantityInput.value;
					break;
				}
			}
		}

		let elements = document.querySelectorAll("h5.pragati-cod-form-price");
		let element2 = document.querySelector(
			".pragati-cod-form-shipping-total",
		);
		let price = variantObject.price;
		let dotPrice;
		if (quantityInput) {
			dotPrice =
				(price / 100).toFixed(2) * parseInt(quantityInput.value, 10);
		} else {
			dotPrice = (price / 100).toFixed(2) * parseInt(1, 10);
		}
		let str = window.Pragati.common.shop.money_format;
		let newStr = str.replace(/{{.*?}}/g, "");
		if (elements.length > 0) {
			elements.forEach(function (element) {
				element.textContent = `${newStr}${dotPrice}`;
			});
		}
		let shippingRatesMetafield =
			window.Pragati.common.metafield.visibility_page;
		if (element2) {
			if (
				shippingRatesMetafield.hasOwnProperty("shippingRates") &&
				shippingRatesMetafield.shippingRates.length != 0
			) {
				element2.textContent = `${newStr}${
					dotPrice +
					parseFloat(shippingRatesMetafield.shippingRates[0].price)
				}`;
			} else {
				element2.textContent = `${newStr}${dotPrice}`;
			}
		}

		console.log(orderInfo.variant_id);

		formOverlay.classList.remove("pragati-cod-form-hidden");
	};

	openModalBtn.forEach(function (element) {
		element.addEventListener("click", openModal);
	});

	const closeModal = function () {
		formOverlay.classList.add("pragati-cod-form-hidden");
	};

	closeModalBtn.addEventListener("click", closeModal);

	// formOverlay.addEventListener("click", closeModal);

	const element = document.querySelector("h1"); // Select the first <h1> element on the page

	const style = window.getComputedStyle(element);
	const font = style.getPropertyValue("font-family");

	console.log("font variable value : " + font); // The font used for the <h1> element will be printed to the console

	console.log("hello world! 32");

	console.log(
		"metafield type : " + typeof window.Pragati.common.metafield.buy_button,
	);

	const formDesignerData = window.Pragati.common.metafield.form_designer;

	const formDesignerData2 = window.Pragati.common.metafield.form_designer2;

	console.log("vinod " + formDesignerData.length);

	const reverseFormDesignerData = formDesignerData.reverse();

	reverseFormDesignerData.map((key, index) => {
		switch (key.id) {
			case "order_summary_field":
				if (key.hidden === false) {
					let price = window.Pragati.common.product.price;
					let dotPrice = (price / 100).toFixed(2);

					const product_title = window.Pragati.common.product.title;
					let new_product_title = "";

					if (product_title.length > 20) {
						new_product_title = product_title.slice(0, 20) + "...";
					} else {
						new_product_title = product_title;
					}

					let str = window.Pragati.common.shop.money_format;
					let newStr = str.replace(/{{.*?}}/g, "");

					let html = `
			<div className="total_summery">
      <hr class="pragati-cod-form-hr-1" style=" height: 1px;background-color: silver;border: none;" />
      <div class="pragati-cod-form-flex">
        <div class="pragati-cod-form-flex">
        	<div style="position: relative;">
          	<img class="pragati-cod-form-img" src="${window.Pragati.common.product.featured_image}" alt="Girl in a jacket" width="500" height="600">
          	<div class="pragati-cod-form-dot"><span class="pragati-cod-form-dot-value" style="color: white;">1<span></div>
          </div>
          <h5 style="margin:10px;" >${new_product_title}</h5>
        </div>
        <h5 class="pragati-cod-form-price" style="font-weight: bold; font-size: 14px;">${newStr}${dotPrice}</h5>
      </div>
      <hr class="pragati-cod-form-hr-2" style=" height: 1px;background-color: silver;border: none;" />
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "totals_summary_field":
				if (key.hidden === false) {
					let price = window.Pragati.common.product.price;
					let dotPrice = (price / 100).toFixed(2);

					let str = window.Pragati.common.shop.money_format;
					let newStr = str.replace(/{{.*?}}/g, "");

					let generatedHtml = "0.00";
					if (
						window.Pragati.common.metafield.visibility_page.hasOwnProperty(
							"shippingRates",
						) &&
						window.Pragati.common.metafield.visibility_page
							.shippingRates.length != 0
					) {
						generatedHtml =
							window.Pragati.common.metafield.visibility_page
								.shippingRates[0].price;
					}

					let html = `
			<div style="display: flex;flex-direction: column;justify-content: center;gap: 0.4rem;background-color: #e8ebe9;padding: 10px;border-radius: 6px;margin-top:7px;margin-bottom:7px;">
      <div class="pragati-cod-form-flex">
        <h5>${key.data.field1.value}</h5>
        <h5 class="pragati-cod-form-price" style="font-weight: bold;">${newStr}${dotPrice}</h5>
      </div>
      <div class="pragati-cod-form-flex">
        <h5>${key.data.field2.value}</h5>
        <h5 class="pragati-cod-form-shipping-price" style="font-weight: bold;">${newStr}${generatedHtml}</h5>
      </div>
      <hr class="pragati-cod-form-hr-3" style="height: 1px;background-color: silver;border: none;" />
      <div class="pragati-cod-form-flex">
        <h5>${key.data.field3.value}</h5>
        <h5 class="pragati-cod-form-shipping-total" style="font-weight: bold;">${newStr}${dotPrice}</h5>
      </div>
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "shipping_rates_field":
				if (key.hidden === false) {
					// shippingRates exist for existing users & validate any data are available or not
					let generatedHtml = "";
					if (
						window.Pragati.common.metafield.visibility_page.hasOwnProperty(
							"shippingRates",
						) &&
						window.Pragati.common.metafield.visibility_page
							.shippingRates.length != 0
					) {
						let str = window.Pragati.common.shop.money_format;
						let newStr = str.replace(/{{.*?}}/g, "");

						window.Pragati.common.metafield.visibility_page.shippingRates.forEach(
							function (item, index) {
								generatedHtml += `
<div class="pragati-cod-form-flex">
  <div class="pragati-cod-form-flex">
    <input onchange="pragatiShippingRatesOptionChange(this);" type="radio" id="${
		item.id
	}" name="shipping_rates_radio_button" value="${item.price}" ${
									index == 0 ? "checked" : ""
								} style="cursor: pointer; width: auto">
    <label for="${
		item.id
	}" style="margin-left: 10px;cursor: pointer; font-weight: bold;">${
									item.name
								}</label>
  </div>
  <h5 style="font-weight: bold;">${
		item.price == "0.00" ? key.data.field2.value : newStr + item.price
  }</h5>
</div>
`;
							},
						);
					} else {
						generatedHtml = `
<div class="pragati-cod-form-flex">
  <div class="pragati-cod-form-flex">
    <input type="radio" id="html" name="fav_language" value="HTML" checked style="cursor: pointer; width: auto">
    <label for="html" style="margin-left: 10px;cursor: pointer; font-weight: bold;">Free Shipping</label>
  </div>
  <h5 style="font-weight: bold;">${key.data.field2.value}</h5>
</div>
`;
					}

					let html = `
<div>
  <label style="margin-top: 7px; font-weight: bold;">${key.data.field1.value}</label>
  <div style="padding: 12px;border-radius: 6px; border: 1px solid #ddd;margin-buttom: 7px;">
    ${generatedHtml}
  </div>
</div>
`;

					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "enter_your_shipping_address_field":
				if (key.hidden === false) {
					let html = `
			<div style="display: flex;padding: 10px; justify-content: ${key.data.field2.value};">
      <span style="font-weight: ${key.data.field4.value}; font-size: ${key.data.field3.value}px; color: black;">${key.data.field1.value}</span>
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "first_name_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_first_name_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_first_name_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-user fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_first_name_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_first_name_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "last_name_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_last_name_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_last_name_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-user fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_last_name_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_last_name_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "phone_number_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_phone_number_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_phone_number_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" pattern="\\d{${
						key.data.field5.minValue
					},${key.data.field5.maxValue}}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="tel" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%) rotate(0deg); color: #aaa; transition: 0.3s;">
    <i class="fas fa-phone fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_phone_number_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_phone_number_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					console.log(
						`value of key.data.field3.value ${key.data.field3.checked}`,
					);
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "address_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_address_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_address_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-location-dot fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_address_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_address_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "address_2_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_address_2_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_address_2_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-location-dot fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_address_2_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_address_2_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "state_field":
				if (key.hidden === false) {
					const statesOptionsData =
						window.Pragati.common.metafield.states;

					let optionsHtml = "";
					statesOptionsData.forEach((option) => {
						optionsHtml += `<option value="${option.isoCode}">${option.name}</option>`;
					});

					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_state_field" class="${
			key.data.field3.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div class="pragati-cod-form-inputWithIcon" style="margin-top: 5px;">
        <select
  name="pragati_input_state_field"
  id="pragati_input_state_field"
  class="${formDesignerData2.textfieldFocusColor}"
  style="height: 34px; padding: 5px; border-radius: ${
		formDesignerData2.textfieldBorderRadius
  }px; border: 2px solid #aaa; border-width: ${
						formDesignerData2.textfieldBorderWidth
					};"
>
	<option value="" disabled selected>${key.data.field2.value}</option>
  ${optionsHtml}
</select>
      </div>
      <label style="display: none;" id="pragati_input_state_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_state_field_invalid_message">Enter a valid value.</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "city_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_city_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_city_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-location-dot fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_city_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_city_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>    
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "pincode_field":
				if (key.hidden === false) {
					let value1 = "",
						value2 = "";
					if (
						Number.isInteger(key.data.field5.minValue) &&
						key.data.field5.minValue > 0
					) {
						value1 = "1";
						value2 = "0".repeat(key.data.field5.minValue - 1);
					}

					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_pincode_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_pincode_field" class="${
		formDesignerData2.textfieldFocusColor
  }" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="${
						key.data.field7.checked ? `number` : `text`
					}" min="${value1 + value2}" pattern="[0-9A-Za-z]{${
						key.data.field5.minValue
					},}" oninput="this.value = this.value.slice(0, ${
						key.data.field5.maxValue
					})" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-location-dot fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_pincode_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_pincode_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "email_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_email_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_email_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="email" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-envelope fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_email_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>      
      <label style="display: none;" id="pragati_input_email_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>      
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "order_note_field":
				if (key.hidden === false) {
					let html = `
			<div style="margin-top: 6px;margin-bottom:6px;">
      <label for="pragati_input_order_note_field" class="${
			key.data.field4.checked ? `pragati-cod-form-required` : `undefined`
		}" style="font-weight: bold; display:${
						formDesignerData2.hideFieldLabels ? `none` : `undefined`
					};">${key.data.field1.value}</label>
      <div style="position: relative; display: inline; margin-top: 5px;">
  <input id="pragati_input_order_note_field" minlength="${
		key.data.field5.minValue
  }" maxlength="${key.data.field5.maxValue}" class="${
						formDesignerData2.textfieldFocusColor
					}" style="padding-left:${
						key.data.field3.checked ? `35px` : `10px`
					}; border-width: ${
						formDesignerData2.textfieldBorderWidth
					}; border-radius: ${
						formDesignerData2.textfieldBorderRadius
					}px;" type="text" placeholder="${key.data.field2.value}">
  <span style="display:${
		key.data.field3.checked ? `initial` : `none`
  }; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa; transition: 0.3s;">
    <i class="fas fa-note-sticky fa-lg"></i>
  </span>
</div>
      <label style="display: none;" id="pragati_input_order_note_field_required_message">${
			formDesignerData2.requiredErrorText
		}</label>
      <label style="display: none;" id="pragati_input_order_note_field_invalid_message">${
			key.data.field6.value
				? key.data.field6.value
				: formDesignerData2.invalidValueErrorText
		}</label>      
    </div>
			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "summit_button_field":
				if (key.hidden === false) {
					let html = `
			<button
  id="pragati-summit_button_field"
  class="order_summit_button"
  style="justify-content: center; padding: 12px 19px; margin: 6px 0px"
>
	<span id="pragati-summit-button-loading" ></span>
  ${key.data.field1.value}
</button>

			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
				break;
			case "payment_button_field":
				if (key.hidden === false) {
					let html = `
			<button
  id="pragati-payment_button_field"
  class="order_summit_button"
  style="justify-content: center; padding: 12px 19px; margin: 6px 0px"
>
	<span id="pragati-payment-button-loading" ></span>
  ${key.data.field1.value}
</button>

			`;
					flexContainer.insertAdjacentHTML("afterend", html);
				}
		}

		// if (key.id === "order_summary_field") {
		// } else if (key.id === "totals_summary_field") {
		// } else if (key.id === "shipping_rates_field") {
		// } else if (key.id === "enter_your_shipping_address_field") {
		// } else if (key.id === "first_name_field") {
		// } else if (key.id === "last_name_field") {
		// } else if (key.id === "phone_number_field") {
		// } else if (key.id === "address_field") {
		// } else if (key.id === "address_2_field") {
		// } else if (key.id === "state_field") {
		// } else if (key.id === "city_field") {
		// } else if (key.id === "pincode_field") {
		// } else if (key.id === "email_field") {
		// } else if (key.id === "order_note_field") {
		// } else if (key.id === "summit_button_field") {
		// }
	});

	const summitButton = document.getElementById("pragati-summit_button_field");
	const loadingIcon = document.getElementById(
		"pragati-summit-button-loading",
	);

	const summitButton2 = document.getElementById("pragati-payment_button_field");
	const loadingIcon2 = document.getElementById(
		"pragati-payment-button-loading",
	);

	const onSummitButtonClick = function () {
		// new - user blocking
		if (
			window.Pragati.common.metafield.visibility_page.hasOwnProperty(
				"block_user",
			)
		) {
			if (window.Pragati.common.metafield.visibility_page.block_user) {
				if (localStorage.getItem("pragatiUser")) {
					const storedTimestamp = parseInt(
						localStorage.getItem("pragatiUser"),
						10,
					);
					const currentTimestamp = new Date().getTime();

					if (!(currentTimestamp - storedTimestamp > 86400000)) {
						alert(
							"Your order is already placed, repeat orders are not allowed.",
						);
						throw new Error(
							"User not allowed to place repeat order.",
						);
					}
				}
			}
		}
		// new - user blocking

		loadingIcon.classList.add("pragati-loader");

		const query = `mutation CreateNewOrder($data: CreateNewOrderDataInput) {
    createNewOrder(data: $data) {
      success
      errors {
        message
      }
      result
    }
  }
`;
		let shippingRatesMetafield =
			window.Pragati.common.metafield.visibility_page;
		console.log(
			"pragatiCurrentlySelectedShippingOption:: " +
				pragatiCurrentlySelectedShippingOption,
		);
		if (
			shippingRatesMetafield.hasOwnProperty("shippingRates") &&
			shippingRatesMetafield.shippingRates.length != 0
		) {
			let shippingRate = shippingRatesMetafield.shippingRates.find(
				(item) => item.id == pragatiCurrentlySelectedShippingOption,
			);
			orderInfo.shippingId = pragatiCurrentlySelectedShippingOption;
			orderInfo.shippingName = shippingRate.name;
			orderInfo.shippingPrice = shippingRate.price;
		}
		const variables = {
			data: orderInfo,
		};

		fetch("https://priya.gadget.app/api/graphql/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (
					data.data.createNewOrder.result == null &&
					!data.data.createNewOrder.success
				) {
					console.log(data);
					if (data.data.createNewOrder.errors[0].message) {
						alert(data.data.createNewOrder.errors[0].message);
						loadingIcon.classList.remove("pragati-loader");
					}
				} else {
					// new - user blocking
					if (
						window.Pragati.common.metafield.visibility_page.hasOwnProperty(
							"block_user",
						)
					) {
						if (
							window.Pragati.common.metafield.visibility_page
								.block_user
						) {
							localStorage.setItem(
								"pragatiUser",
								`${new Date().getTime()}`,
							);
						}
					}

					// new - user blocking

					let convertedNum = parseFloat(
						data.data.createNewOrder.result.response
							.current_total_price,
					);
					if (isFbPixelInit) {
						fbq("track", "Purchase", {
							currency: window.Pragati.common.shop.currency,
							value: convertedNum,
						});
					}
					if (isTtPixelInit) {
						ttq.track("PlaceAnOrder");
					}
					console.log(data);
					console.log(
						data.data.createNewOrder.result.response
							.order_status_url,
					);
					const redirectUrl =
						data.data.createNewOrder.result.response
							.order_status_url;
					window.location.href = redirectUrl;
					loadingIcon.classList.remove("pragati-loader");
				}
			})
			.catch((error) => console.error(error));
	};




	const onSummitButtonClick2 = function () {
		// new - user blocking
		if (
			window.Pragati.common.metafield.visibility_page.hasOwnProperty(
				"block_user",
			)
		) {
			if (window.Pragati.common.metafield.visibility_page.block_user) {
				if (localStorage.getItem("pragatiUser")) {
					const storedTimestamp = parseInt(
						localStorage.getItem("pragatiUser"),
						10,
					);
					const currentTimestamp = new Date().getTime();

					if (!(currentTimestamp - storedTimestamp > 86400000)) {
						alert(
							"Your order is already placed, repeat orders are not allowed.",
						);
						throw new Error(
							"User not allowed to place repeat order.",
						);
					}
				}
			}
		}
		// new - user blocking

		loadingIcon2.classList.add("pragati-loader");

		const query = `mutation CreateNewCheckout($data: CreateNewCheckoutDataInput) {
    createNewCheckout(data: $data) {
      success
      errors {
        message
      }
      result
    }
  }
`;
		let shippingRatesMetafield =
			window.Pragati.common.metafield.visibility_page;
		console.log(
			"pragatiCurrentlySelectedShippingOption:: " +
				pragatiCurrentlySelectedShippingOption,
		);
		if (
			shippingRatesMetafield.hasOwnProperty("shippingRates") &&
			shippingRatesMetafield.shippingRates.length != 0
		) {
			let shippingRate = shippingRatesMetafield.shippingRates.find(
				(item) => item.id == pragatiCurrentlySelectedShippingOption,
			);
			orderInfo.shippingId = pragatiCurrentlySelectedShippingOption;
			orderInfo.shippingName = shippingRate.name;
			orderInfo.shippingPrice = shippingRate.price;
		}
		const variables = {
			data: orderInfo,
		};

		fetch("https://priya.gadget.app/api/graphql/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (
					data.data.createNewCheckout.result == null &&
					!data.data.createNewCheckout.success
				) {
					console.log(data);
					if (data.data.createNewCheckout.errors[0].message) {
						alert(data.data.createNewCheckout.errors[0].message);
						loadingIcon2.classList.remove("pragati-loader");
					}
				} else {
					// new - user blocking
					if (
						window.Pragati.common.metafield.visibility_page.hasOwnProperty(
							"block_user",
						)
					) {
						if (
							window.Pragati.common.metafield.visibility_page
								.block_user
						) {
							localStorage.setItem(
								"pragatiUser",
								`${new Date().getTime()}`,
							);
						}
					}

					// new - user blocking

					
					console.log(data);
					console.log(
						data.data.createNewCheckout.result.response
							.web_url,
					);
					const redirectUrl =
						data.data.createNewCheckout.result.response
							.web_url;
					window.location.href = redirectUrl;
					loadingIcon2.classList.remove("pragati-loader");
				}
			})
			.catch((error) => console.error(error));
	};





	summitButton.addEventListener("click", () => {
		let requiredTriggered = false;
		let invalidTriggered = false;
		const elements = document.getElementsByClassName(
			"pragati-cod-form-required",
		);

		for (let i = 0; i < elements.length; i++) {
			const inputId = elements[i].htmlFor;
			const inputElement = document.getElementById(inputId);

			let requiredMessageTriggered = false;

			if (inputElement.value.trim() === "") {
				inputElement.classList.add("pragati-red-border");

				let requiredMessage = document.getElementById(
					`${inputElement.id}_required_message`,
				);
				requiredMessage.classList.add("pragati-required-message");

				requiredMessageTriggered = true;

				let invalidMessage = document.getElementById(
					`${inputElement.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");

				requiredTriggered = true;
			}

			if (!requiredMessageTriggered) {
				if (!inputElement.checkValidity()) {
					inputElement.classList.add("pragati-red-border");

					let invalidMessage = document.getElementById(
						`${inputElement.id}_invalid_message`,
					);
					invalidMessage.classList.add("pragati-invalid-message");

					let requiredMessage = document.getElementById(
						`${inputElement.id}_required_message`,
					);
					requiredMessage.classList.remove(
						"pragati-required-message",
					);

					invalidTriggered = true;
				}
			}
		}

		if (!requiredTriggered && !invalidTriggered) {
			onSummitButtonClick();
		}
	});



	summitButton2.addEventListener("click", () => {
		let requiredTriggered = false;
		let invalidTriggered = false;
		const elements = document.getElementsByClassName(
			"pragati-cod-form-required",
		);

		for (let i = 0; i < elements.length; i++) {
			const inputId = elements[i].htmlFor;
			const inputElement = document.getElementById(inputId);

			let requiredMessageTriggered = false;

			if (inputElement.value.trim() === "") {
				inputElement.classList.add("pragati-red-border");

				let requiredMessage = document.getElementById(
					`${inputElement.id}_required_message`,
				);
				requiredMessage.classList.add("pragati-required-message");

				requiredMessageTriggered = true;

				let invalidMessage = document.getElementById(
					`${inputElement.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");

				requiredTriggered = true;
			}

			if (!requiredMessageTriggered) {
				if (!inputElement.checkValidity()) {
					inputElement.classList.add("pragati-red-border");

					let invalidMessage = document.getElementById(
						`${inputElement.id}_invalid_message`,
					);
					invalidMessage.classList.add("pragati-invalid-message");

					let requiredMessage = document.getElementById(
						`${inputElement.id}_required_message`,
					);
					requiredMessage.classList.remove(
						"pragati-required-message",
					);

					invalidTriggered = true;
				}
			}
		}

		if (!requiredTriggered && !invalidTriggered) {
			onSummitButtonClick2();
		}
	});










	document
		.getElementById("pragati_input_first_name_field")
		?.addEventListener("input", function (event) {
			orderInfo.first_name = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_last_name_field")
		?.addEventListener("input", function (event) {
			orderInfo.last_name = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_phone_number_field")
		?.addEventListener("input", function (event) {
			orderInfo.phone = event.target.value;
			const inputValue = this.value;
			const numericValue = inputValue.replace(/[^0-9]/g, "");
			this.value = numericValue;

			if (numericValue !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_address_field")
		?.addEventListener("input", function (event) {
			orderInfo.address1 = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_address_2_field")
		?.addEventListener("input", function (event) {
			orderInfo.address2 = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_city_field")
		?.addEventListener("input", function (event) {
			orderInfo.city = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_pincode_field")
		?.addEventListener("input", function (event) {
			orderInfo.zip = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}

			// ---------------------------- Auto Detection -----------------------

			let autoDetectState = false;
			if (
				window.Pragati.common.metafield.visibility_page.hasOwnProperty(
					"auto_state_detection",
				)
			) {
				autoDetectState =
					window.Pragati.common.metafield.visibility_page
						.auto_state_detection;
			}

			if (
				window.Pragati.common.metafield.country === "IN" &&
				this.value.length === 6 &&
				autoDetectState === true
			) {
				function generateProperties(start, end, value) {
					const properties = {};
					for (let i = start; i <= end; i++) {
						properties[i] = value;
					}
					return properties;
				}

				const data = {
					...generateProperties(180, 194, "JK"),
					...generateProperties(171, 177, "HP"),
					...generateProperties(140, 160, "PB"),
					...generateProperties(160, 160, "CH"),
					...generateProperties(244, 263, "UT"),
					...generateProperties(121, 136, "HR"),
					...generateProperties(110, 110, "DL"),
					...generateProperties(301, 345, "RJ"),
					...generateProperties(201, 285, "UP"),
					...generateProperties(800, 855, "BR"),
					...generateProperties(737, 737, "SK"),
					...generateProperties(790, 792, "AR"),
					...generateProperties(797, 798, "NL"),
					...generateProperties(795, 795, "MN"),
					...generateProperties(796, 796, "MZ"),
					...generateProperties(799, 799, "TR"),
					...generateProperties(793, 794, "ML"),
					...generateProperties(781, 788, "AS"),
					...generateProperties(700, 743, "WB"),
					...generateProperties(813, 835, "JH"),
					...generateProperties(751, 770, "OR"),
					...generateProperties(490, 497, "CT"),
					...generateProperties(450, 488, "MP"),
					...generateProperties(360, 396, "GJ"),
					...generateProperties(362, 362, "DH"),
					...generateProperties(396, 396, "DH"),
					...generateProperties(400, 445, "MH"),
					...generateProperties(560, 591, "KA"),
					...generateProperties(403, 403, "GA"),
					...generateProperties(682, 682, "LD"),
					...generateProperties(670, 695, "KL"),
					...generateProperties(600, 643, "TN"),
					...generateProperties(533, 533, "PY"),
					...generateProperties(605, 605, "PY"),
					...generateProperties(607, 607, "PY"),
					...generateProperties(609, 609, "PY"),
					...generateProperties(744, 744, "AN"),
					...generateProperties(500, 509, "TG"),
					...generateProperties(510, 535, "AP"),
				};

				let firstThreeSubstring = this.value.substring(0, 3);

				var selectElement = document.getElementById(
					"pragati_input_state_field",
				);
				selectElement.value = data[firstThreeSubstring];
				var event = new Event("input");
				selectElement.dispatchEvent(event);

				// ---- new ----
				if (!data.hasOwnProperty(firstThreeSubstring)) {
					this.value = "";

					this.classList.add("pragati-red-border");
					let invalidMessage = document.getElementById(
						`${this.id}_invalid_message`,
					);
					invalidMessage.classList.add("pragati-invalid-message");

					let requiredMessage = document.getElementById(
						`${this.id}_required_message`,
					);
					requiredMessage.classList.remove(
						"pragati-required-message",
					);
				}
				// ---- new ----
			}

			// ---------------------------- Auto Detection -----------------------
		});

	document
		.getElementById("pragati_input_email_field")
		?.addEventListener("input", function (event) {
			orderInfo.email = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			} //today i learn that if i don't add classList and use remove without classList it will completely remove the element from the dom.
		});

	document
		.getElementById("pragati_input_order_note_field")
		?.addEventListener("input", function (event) {
			orderInfo.note = event.target.value;
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	document
		.getElementById("pragati_input_state_field")
		?.addEventListener("input", function (event) {
			orderInfo.province = event.target.value;
			console.log("orderInfo.province : " + orderInfo.province);
			if (this.value !== "" && this.checkValidity()) {
				this.classList.remove("pragati-red-border");

				const requiredMessage = document.getElementById(
					`${this.id}_required_message`,
				);
				requiredMessage.classList.remove("pragati-required-message");

				// select will never trigger invalid value.

				const invalidMessage = document.getElementById(
					`${this.id}_invalid_message`,
				);
				invalidMessage.classList.remove("pragati-invalid-message");
			}
		});

	console.log("WWWWWWWWWWWW 118");
});
