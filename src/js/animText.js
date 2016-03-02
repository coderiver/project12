$(window).load(function() {

	var row1 = $('.js-text1');
	var row2 = $('.js-text2');

	var textRow1 = {
		ru: ['ТВОЯ ', 'ДОСТУПНАЯ'],
		en: ['YOUR ', 'LOW COST']
	};

	var textRow2 = {
		ru: ['ШКОЛА ', 'АНГЛИЙСКОГО!'],
		en: ['SCHOOL ', 'of ENGLISH!']
	};

	function createWord(word) {
		return word.split('').reduce(function (acc, char) {
			return acc = acc.add($('<span class="char">' + char + '</span>'));
		}, $([]));
	}

	function composeRow(words) {
		return words.map(function (word) {
			return $('<div class="word"></div>').append(createWord(word));
		});
	} 

	row1.find('.ru').append(composeRow(textRow1.ru));
	row1.find('.en').append(composeRow(textRow1.en));

	row2.find('.ru').append(composeRow(textRow2.ru));
	row2.find('.en').append(composeRow(textRow2.en));

	var dur = 0.4,
		dur2 = 0.2,
		dur3 = 0.3,
		dur4 = 0.5,
		delay = 0.1,
		delay2 = 0.05,
		pause = 1;

	function ruWordAnim(chars, dur) {
		return TweenMax.staggerFromTo(chars, dur, {
			rotationX: 0,
			opacity: 1
		}, {
			rotationX: -90,
			opacity: 0
		}, delay);
	}

	function enWordAnim(chars, dur) {
		return TweenMax.staggerFromTo(chars, dur, {
			rotationX: 90,
			opacity: 0
		}, {
			rotationX: 0,
			opacity: 1
		}, delay);
	}

	function ruWordAnimBack(chars, dur) {
		return TweenMax.staggerFromTo(chars, dur, {
			rotationX: -90,
			opacity: 0
		}, {
			rotationX: 0,
			opacity: 1
		}, delay);
	}

	function enWordAnimBack(chars, dur) {
		return TweenMax.staggerFromTo(chars, dur, {
			rotationX: 0,
			opacity: 1
		}, {
			rotationX: 90,
			opacity: 0
		}, delay2);
	}

	function animText() {
		setTimeout(function() {
			var tl = new TimelineMax({ repeat: 0 })
				.addLabel('row1:word1')
				.add(ruWordAnim(row1.find('.ru').find('.word:first').find('.char'), dur), 'row1:word1')
				.add(enWordAnim(row1.find('.en').find('.word:first').find('.char'), dur), 'row1:word1+=' + delay)
				.addLabel('row1:word2', '+=' + pause)
				.add(ruWordAnim(row1.find('.ru').find('.word:last').find('.char'), dur2), 'row1:word2')
				.add(enWordAnim(row1.find('.en').find('.word:last').find('.char'), dur2), 'row1:word2+=' + delay)
				.addLabel('row2:word1')
				.add(ruWordAnim(row2.find('.ru').find('.word:first').find('.char'), dur), 'row2:word1')
				.add(enWordAnim(row2.find('.en').find('.word:first').find('.char'), dur), 'row2:word1+=' + delay)
				.addLabel('row2:word2')
				.add(ruWordAnim(row2.find('.ru').find('.word:last').find('.char'), dur2), 'row2:word2')
				.add(enWordAnim(row2.find('.en').find('.word:last').find('.char'), dur2), 'row2:word2+=' + delay)
		}, 2000);
		setTimeout(function() {
			var tl = new TimelineMax({ repeat: 0 })
				.addLabel('row1:word1')
				.add(ruWordAnimBack(row1.find('.ru').find('.word:first').find('.char'), dur4), 'row1:word1')
				.add(enWordAnimBack(row1.find('.en').find('.word:first').find('.char'), dur), 'row1:word1+=' + delay)
				.addLabel('row1:word2', '+=' + pause)
				.add(ruWordAnimBack(row1.find('.ru').find('.word:last').find('.char'), dur3), 'row1:word2')
				.add(enWordAnimBack(row1.find('.en').find('.word:last').find('.char'), dur2), 'row1:word2+=' + delay)
				.addLabel('row2:word1')
				.add(ruWordAnimBack(row2.find('.ru').find('.word:first').find('.char'), dur), 'row2:word1')
				.add(enWordAnimBack(row2.find('.en').find('.word:first').find('.char'), dur), 'row2:word1+=' + delay)
				.addLabel('row2:word2')
				.add(ruWordAnimBack(row2.find('.ru').find('.word:last').find('.char'), dur3), 'row2:word2')
				.add(enWordAnimBack(row2.find('.en').find('.word:last').find('.char'), dur3), 'row2:word2+=' + delay)
		}, 10000);
	} 
	setTimeout(function() {
		animText();
	}, 10);
	

	setInterval(animText, 16000)

});