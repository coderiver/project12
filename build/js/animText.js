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

	var dur = 0.4;
	var dur2 = 0.2;
	var delay = 0.1;
	var delay2 = 0.1;
	var pause = 1;

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


	// setTimeout(function() {
	// 	var tl = new TimelineMax({ repeat: 0 })
	// 		.addLabel('row1:word1')
	// 		.add(ruWordAnim(row1.find('.ru').find('.word:first').find('.char'), dur), 'row1:word1')
	// 		.add(enWordAnim(row1.find('.en').find('.word:first').find('.char'), dur), 'row1:word1+=' + delay2)
	// 		.addLabel('row1:word2', '+=' + pause)
	// 		.add(ruWordAnim(row1.find('.ru').find('.word:last').find('.char'), dur2), 'row1:word2')
	// 		.add(enWordAnim(row1.find('.en').find('.word:last').find('.char'), dur2), 'row1:word2+=' + delay2)
	// 		.addLabel('row2:word1')
	// 		.add(ruWordAnim(row2.find('.ru').find('.word:first').find('.char'), dur), 'row2:word1')
	// 		.add(enWordAnim(row2.find('.en').find('.word:first').find('.char'), dur), 'row2:word1+=' + delay2)
	// 		.addLabel('row2:word2')
	// 		.add(ruWordAnim(row2.find('.ru').find('.word:last').find('.char'), dur2), 'row2:word2')
	// 		.add(enWordAnim(row2.find('.en').find('.word:last').find('.char'), dur2), 'row2:word2+=' + delay2)
	// }, 2000);

	
});