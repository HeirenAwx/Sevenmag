$(document).ready(
	function() {
		/* Realization of site loading */
		$('#bg-layer').fadeOut('slow');


		/* Realization of themes on site */
		$('#theme-block').click(
			function() {
				if ($('#theme-block').hasClass('dark')) {
					$('#theme-block').removeClass('dark');
					$('#theme-block').addClass('light');
					$('head').append('<link rel="stylesheet" type="text/css" href="themes/light.css" id="light-theme-link">');
					$('#dark-theme').attr({
						style: 'display: none;',
					});
					$('#light-theme').attr({
						style: 'display: block;',
					});
				} else {
					$('#theme-block').removeClass('light');
					$('#theme-block').addClass('dark');
					$('#light-theme-link').remove();
					$('#light-theme').attr({
						style: 'display: none;',
					});
					$('#dark-theme').attr({
						style: 'display: block;',
					});
				}
			},
		);


		/* Realization of navigation */
		$('.user-fa-bars').click(
			function() {
				if ($('#navigation').css('display') === 'none') {
					$('.user-fa-bars').css({
						'display': 'none',
					});
					$('.user-fa-times').css({
						'display': 'block',
					});
					$('#navigation').css({
						'display': 'block',
					});
					if ($(window).width() < 461) {
						setTimeout(() => {
							$('#navigation').css({
								'height': '96.9601677148847vw',
								'transition': '.5s cubic-bezier(0.61, 1, 0.88, 1)',
							});
							setTimeout(() => {
								$('#navigation').removeClass('nav-out');
								$('#navigation').addClass('nav-in');
							}, 499);
						}, 1);
					} else {
						setTimeout(() => {
							$('#navigation').css({
								'height': '455px',
								'transition': '.5s cubic-bezier(0.61, 1, 0.88, 1)',
							});
							setTimeout(() => {
								$('#navigation').removeClass('nav-out');
								$('#navigation').addClass('nav-in');
							}, 499);
						}, 1);
					}
				}
			},
		);

		$('.user-fa-times').click(
			function() {
				$('.user-fa-times').css({
					'display': 'none',
				});
				$('.user-fa-bars').css({
					'display': 'block',
				});
				setTimeout(() => {
					$('#navigation').css({
						'display': 'none',
					});
					$('#navigation').removeClass('nav-in');
					$('#navigation').addClass('nav-out');
				}, 500);
				$('#navigation').css({
					'height': '0',
				});
			},
		);


		/* Start of loading site */
		if ($(window).width() > 1014) {
			$('#navigation').attr({
				style: 'display: block;',
			});
		} else {
			$('#navigation').attr({
				style: 'display: none;',
			});
		}


		$(window).resize(
			function() {
				if (document.getElementById('navigation').style.display === 'none') {
					$('.user-fa-times').css({
						'display': 'none',
					});
					$('.user-fa-bars').css({
						'display': 'block',
					});
				}

				if ($(window).width() > 1014 && ($('#navigation').hasClass('nav-in'))) {
					$('#navigation').removeClass('nav-in');
					$('#navigation').attr({
						style: 'height: 81px;',
					});
				}

				if ($(window).width() < 1015 && (document.getElementById('navigation').style.display === 'block')) {
					$('#navigation').removeClass('nav-in');
					$('#navigation').attr({
						style: 'display: none;',
					});
				}

				if ($(window).width() > 1014 && (document.getElementById('navigation').style.display === 'none')) {
					$('#navigation').removeClass('nav-in');
					$('#navigation').attr({
						style: 'display: block;',
					});
				}

				if ($(window).width() > 1138) {
					$('#random-posts, #flickr-group').attr({
						style: 'display: block;',
					});
				}

				if ($(window).width() < 1139 && document.getElementById('html').style.overflow !== 'hidden') {
					$('#random-posts, #flickr-group').attr({
						style: 'display: none;',
					});
					$('.user-fa-chevron-up').css('display', 'block');
				}

				if ($(window).width() < 1139 && document.getElementById('html').style.overflow === 'hidden') {
					$('#random-posts, #flickr-group').attr({
						style: 'display: block;',
					});
				}

				if ($(window).width() > 1155 && document.getElementById('html').style.overflow === 'hidden') {
					$('html').attr({
						style: 'overflow: auto',
					});
					$('#random-posts, #flickr-group').attr({
						style: 'display: block;',
					});
					$('.user-fa-chevron-down').css('display', 'none');
					$('#random-posts, #flickr-group').removeClass('in');
					$('#random-posts, #flickr-group').addClass('out');
				}

				if ($(window).width() > 1138 && document.getElementById('html').style.overflow !== 'hidden') {
					$('.user-fa-chevron-up').attr({
						style: 'display: none',
					});
				}
			},
		);


		if ($(window).width() < 1139) {
			$('#random-posts, #flickr-group').attr({
				style: 'display: none',
			});
		}


		/* Realization chevrons */
		$('.user-fa-chevron-up').click(
			function() {
				if ($('#random-posts, #flickr-group').hasClass('out')) {
					$('.user-fa-chevron-up').css('display', 'none');
					$('.user-fa-chevron-down').css('display', 'block');
					$('#random-posts, #flickr-group').fadeIn('fast');
					$('#random-posts, #flickr-group').addClass('in');
					$('#random-posts, #flickr-group').removeClass('out');
					$('html').attr({
						style: 'overflow: hidden;',
					});
					$('#bg-layer').attr({
						style: 'display: block; opacity: 0.7;',
					});
				}
			},
		);

		$('.user-fa-chevron-down').click(
			function() {
				if (!($('#random-posts, #flickr-group').hasClass('out'))) {
					$('.user-fa-chevron-up').css('display', 'block');
					$('.user-fa-chevron-down').css('display', 'none');
					$('#random-posts, #flickr-group').fadeOut('fast');
					$('#random-posts, #flickr-group').addClass('out');
					$('#random-posts, #flickr-group').removeClass('in');
					$('html').attr({
						style: 'overflow: auto;',
					});
					$('#bg-layer').attr({
						style: 'display: none;',
					});
				}
			},
		);


		$('#slide').hover(
			function() {
				$('.slick-arrow').css('opacity', '0.4');
			},
			function() {
				$('.slick-arrow').css('opacity', '0');
			},
		);


		/* Breaking news running string */
		const get_left_Indent = $('#breaking-scrolling').css('right');
		const get_only_Number = get_left_Indent.slice(0, 5);
		const overflow_block_Width = 879;
		const left_scroll_Length = get_only_Number - overflow_block_Width;
		const left_scroll_Length_with_px = left_scroll_Length + 'px';
		const Time_to_repeat_1 = -(left_scroll_Length) / 130;
		const Time_to_repeat_2 = Math.floor(Time_to_repeat_1);
		const Time_to_repeat_for_css = Time_to_repeat_2 + 's';
		let Time_to_repeat = Time_to_repeat_2 * 1000;

		$('#breaking-scrolling').attr({
			style: `transform: translateX(${left_scroll_Length_with_px}); transition: transform ${Time_to_repeat_for_css} cubic-bezier(0, 0, 1, 1)`,
		});

		setInterval(() => {
			$('#breaking-scrolling').attr({
				style: 'transform: none; transition: none',
			});
		}, Time_to_repeat);

		Time_to_repeat = Time_to_repeat + 5;

		setInterval(() => {
			$('#breaking-scrolling').attr({
				style: `transform: translateX(${left_scroll_Length_with_px}); transition: transform ${Time_to_repeat_for_css} cubic-bezier(0, 0, 1, 1)`,
			});
		}, Time_to_repeat);


		/* Realization of slick-slide */
		$('#slide').slick({
			dots: true,
			slidesToShow: 5,
			speed: 900,
			responsive: [
				{
					breakpoint: 1156,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 871,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 586,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 302,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});


		/* Realization of choises */
		$('.choise').click(
			function() {
				if (!$(this).hasClass('choise-active')) {
					$(this).addClass('choise-active');
				}

				if ($(this).hasClass('choise-active')) {
					$('.choise').removeClass('choise-active');
					$(this).addClass('choise-active');
				}
			},
		);


		/* Realization of checkmark */
		$('#checkmark').click(
			function() {
				if ($('.user-fa-check-1').css('display') === 'none') {
					$('.user-fa-check-1').css({
						'display': 'block',
					});
				} else {
					$('.user-fa-check-1').css({
						'display': 'none',
					});
				}
			},
		);
	},
);
