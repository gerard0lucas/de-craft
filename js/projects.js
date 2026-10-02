(function () {
	var img = function (file) {
		return 'images/projects/' + encodeURIComponent(file);
	};

	var PROJECTS = {
		sharon: {
			client: 'Sharon',
			location: 'Electronic City, Bangalore',
			type: 'Residential',
			scope: 'Wardrobes, kitchen & living',
			blurb: 'A complete home fit-out with sliding wardrobes, kitchen storage and living-room carpentry.',
			images: [
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.21 AM.jpeg', caption: 'Wardrobe' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.22 AM (1).jpeg', caption: 'Wardrobe & dressing' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.22 AM.jpeg', caption: 'Kitchen storage' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.20 AM.jpeg', caption: 'Living room' }
			]
		},
		'cake-delight': {
			client: 'Cake Delight',
			location: 'Shakarnagar, Bangalore',
			type: 'Commercial',
			scope: 'Retail interior',
			blurb: 'A marble-and-mint bakery showroom with display counters, lit wall niches and a statement ceiling.',
			images: [
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.23 AM (1).jpeg', caption: 'Showroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.24 AM.jpeg', caption: 'Display wall' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.24 AM (1).jpeg', caption: 'Counter & lighting' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.23 AM.jpeg', caption: 'Service counter' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.23 AM (2).jpeg', caption: 'Feature wall' }
			]
		},
		'pizza-hut': {
			client: 'Pizza Hut',
			location: 'Bangalore',
			type: 'Commercial',
			scope: 'Restaurant interior',
			blurb: 'Commercial restaurant interiors delivered for Pizza Hut.',
			images: [
				{ file: 'pizza-hut-2.jpg', caption: 'Dining booths' },
				{ file: 'pizza-hut-1.jpg', caption: 'Dining hall' },
				{ file: 'pizza-hut-3.jpg', caption: 'Seating area' },
				{ file: 'pizza-hut-4.jpg', caption: 'Service counter' },
				{ file: 'pizza-hut-5.jpg', caption: 'Kitchen' }
			]
		},
		'shibil-jose': {
			client: 'Shibil Jose',
			location: 'Kannuru, Bangalore',
			type: 'Residential',
			scope: 'Bedroom interiors',
			blurb: 'Bedroom suites with custom wardrobes, backlit marble panels and tufted headboards.',
			images: [
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.26 AM (1).jpeg', caption: 'Master bedroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.26 AM (3).jpeg', caption: 'Wardrobe & bed' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.26 AM (2).jpeg', caption: 'Upholstered bedroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.21 AM (1).jpeg', caption: 'Wardrobe wall' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.20 AM (1).jpeg', caption: 'Headboard feature' }
			]
		},
		nalini: {
			client: 'Nalini',
			location: 'Sadashivanagar, Bangalore',
			type: 'Residential',
			scope: 'Bedrooms & custom furniture',
			blurb: 'Custom beds, ambient lighting and storage-led bedroom carpentry for a Sadashivanagar home.',
			images: [
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.26 AM.jpeg', caption: 'Designer bed' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.25 AM.jpeg', caption: 'Circular bedroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.25 AM (1).jpeg', caption: 'LED bedroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.27 AM.jpeg', caption: 'Kids bedroom' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.24 AM (2).jpeg', caption: 'Platform bed' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.25 AM (2).jpeg', caption: 'Upholstered headboard' },
				{ file: 'WhatsApp Image 2026-09-06 at 12.20.27 AM (1).jpeg', caption: 'Hydraulic storage' }
			]
		}
	};

	var grid = document.getElementById('worksGrid');
	var viewer = document.getElementById('projectViewer');
	var viewerClose = document.getElementById('projectViewerClose');
	var viewerKicker = document.getElementById('viewerKicker');
	var viewerTitle = document.getElementById('viewerTitle');
	var viewerLocation = document.getElementById('viewerLocation');
	var viewerBlurb = document.getElementById('viewerBlurb');
	var viewerGallery = document.getElementById('viewerGallery');
	var viewerWhatsapp = document.getElementById('viewerWhatsapp');
	var filterButtons = document.querySelectorAll('[data-works-filter]');
	var cards = [];

	if (!grid || !viewer) {
		return;
	}

	function photoLabel(count) {
		return count + (count === 1 ? ' photo' : ' photos');
	}

	function renderCards() {
		var html = '';
		var delay = 0.15;
		Object.keys(PROJECTS).forEach(function (id) {
			var project = PROJECTS[id];
			var cover = img(project.images[0].file);
			var typeClass = project.type.toLowerCase();
			html +=
				'<div class="col-lg-6 works-item ' + typeClass + '">' +
					'<button type="button" class="work-card wow fadeInUp" data-wow-delay="' + delay + 's" data-project="' + id + '" aria-label="Open ' + project.client + ' project">' +
						'<figure class="work-card-image">' +
							'<img src="' + cover + '" alt="' + project.client + ' — ' + project.location + '">' +
						'</figure>' +
						'<div class="work-card-meta">' +
							'<span>' + project.type + ' · ' + photoLabel(project.images.length) + '</span>' +
							'<h2>' + project.client + '</h2>' +
							'<p><i class="fa-solid fa-location-dot"></i> ' + project.location + '</p>' +
							'<em>View project</em>' +
						'</div>' +
					'</button>' +
				'</div>';
			delay += 0.15;
		});
		grid.innerHTML = html;
		cards = grid.querySelectorAll('.works-item');
		grid.querySelectorAll('.work-card').forEach(function (card) {
			card.addEventListener('click', function () {
				openProject(card.getAttribute('data-project'));
			});
		});
		if (window.WOW) {
			new WOW().init();
		}
	}

	function bindGallery() {
		if (!window.jQuery || !jQuery.fn.magnificPopup) {
			return;
		}
		var $gallery = jQuery(viewerGallery);
		if ($gallery.data('magnificPopup')) {
			$gallery.magnificPopup('destroy');
		}
		$gallery.magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom',
			image: { verticalFit: true },
			gallery: { enabled: true },
			zoom: {
				enabled: true,
				duration: 300,
				opener: function (element) {
					return element.find('img');
				}
			}
		});
	}

	function openProject(id) {
		var project = PROJECTS[id];
		if (!project) {
			return;
		}

		viewerKicker.textContent = project.type + ' · ' + project.scope;
		viewerTitle.textContent = project.client;
		viewerLocation.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + project.location;
		viewerBlurb.textContent = project.blurb;

		var galleryHtml = '';
		project.images.forEach(function (item) {
			var src = img(item.file);
			galleryHtml +=
				'<div class="col-md-6 col-lg-4">' +
					'<a href="' + src + '" class="viewer-photo" title="' + item.caption + '">' +
						'<img src="' + src + '" alt="' + project.client + ' — ' + item.caption + '">' +
						'<span>' + item.caption + '</span>' +
					'</a>' +
				'</div>';
		});
		viewerGallery.innerHTML = galleryHtml;

		var message = encodeURIComponent(
			'Hi DeCraft, I saw the ' + project.client + ' project in ' + project.location + ' and would like a similar interior.'
		);
		viewerWhatsapp.href = 'https://wa.me/918217362462?text=' + message;

		viewer.classList.add('is-open');
		document.body.classList.add('project-viewer-open');
		viewer.setAttribute('aria-hidden', 'false');
		if (history.replaceState) {
			history.replaceState(null, '', '#' + id);
		} else {
			location.hash = id;
		}
		bindGallery();
		viewerClose.focus();
	}

	function closeProject() {
		viewer.classList.remove('is-open');
		document.body.classList.remove('project-viewer-open');
		viewer.setAttribute('aria-hidden', 'true');
		if (history.replaceState) {
			history.replaceState(null, '', location.pathname + location.search);
		}
	}

	function filterWorks(type) {
		filterButtons.forEach(function (btn) {
			btn.classList.toggle('is-active', btn.getAttribute('data-works-filter') === type);
		});
		cards.forEach(function (card) {
			var show = type === 'all' || card.classList.contains(type);
			card.hidden = !show;
		});
	}

	filterButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			filterWorks(btn.getAttribute('data-works-filter'));
		});
	});

	viewerClose.addEventListener('click', closeProject);
	viewer.addEventListener('click', function (event) {
		if (event.target === viewer) {
			closeProject();
		}
	});
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && viewer.classList.contains('is-open')) {
			closeProject();
		}
	});

	renderCards();

	var hash = (location.hash || '').replace('#', '');
	if (hash && PROJECTS[hash]) {
		openProject(hash);
	}
})();
