(function($) {

	function ActivateIntro() {
		let intros = $('.intro-block');
		let iObject = [];
		let logoTime = 3.55;

		BuildIntro();

		function BuildIntro() {
			$(intros).each(function(index){
				iObject[index] = {	intro: 
					{	 	
						timeline: new TimelineMax(), 
						controller: new ScrollMagic.Controller(),
						wrapper: $(this).find('.block-wrapper'),
						parent: $(this),
						id: $(this).attr('id')
					} 
				}
			});
			if (!isEmpty(iObject)) {
				AddIntroActions();
			} else {
				return;
			}

		}

		function checkTimelineProgress() {
			for (const index in iObject) {
				let intro = iObject[index].intro;
				let timeline = iObject[index].intro.timeline;
				let progress = timeline.progress();
				let duration = timeline.duration();
				let percent = progress * 100;
				let animation = new TimelineMax();
				let wrapper = intro.wrapper;
				let parent = intro.parent;
				let heading = wrapper.find('.block-heading');
				let body = wrapper.find('.block-body');
				let img = wrapper.find('.image-wrap');
				let alterScrollProg = (progress * 1.35) <= 1 ? progress * 1.35 : 1;
				let alterScrollProgBody = (progress * 1.15) <= 1 ? progress * 1.15 : 1;
				let bgSize = progress * 50;

				// animation.to(heading, 1, {opacity: 1});
				animation.to(img, 1.125, { opacity: 1 })
				animation.addLabel("logoFade", "+=" + logoTime)
				animation.to(img, 0.5125, {css: {backgroundSize: "50px 5px" }}, "logoFade");
				animation.to(heading, 1.25, {opacity: 1}, "logoFade+=0.125")
				animation.to(body, 1.35, {opacity: 1}, "logoFade+=0.135");

				if (progress == 1) {
					TweenMax.set(parent, {className: "-=active"});
					TweenMax.set(parent, {className: "+=position-rel"});
				} else {
					TweenMax.set(parent, {className: "+=active"});
					TweenMax.set(parent, {className: "-=position-rel"});
				}

			}
		}

		function AddIntroActions() {
			for (const index in iObject) {
				let intro = iObject[index].intro;
				let controller = intro.controller;
				let wrapper = intro.wrapper;
				let timeline = intro.timeline;
				let parent = intro.parent;
				let id = intro.id;

				// set percentage for progress() to track
				timeline.add([
					TweenMax.to("#" + id, 1,{ progress: "-100%" })
				]);

				intro.scene = new ScrollMagic.Scene({
					triggerElement: "#" + id,
					triggerHook: "onLeave",
					duration: "50%"
				})
				.setPin("#" + id)
				.setTween(timeline)
				.addTo(controller);
				// check scene progress
				intro.scene.on("progress", checkTimelineProgress);

			}
		}

		function isEmpty(obj) {
    		return Object.keys(obj).length === 0;
		}


	}

	ActivateIntro();

})(jQuery);