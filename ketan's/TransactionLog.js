var TransactionLog = {transactions: []};

TransactionLog.log = function (owner, player) {
	var transaction = {owner: owner,
					   player: player};

	this.transactions.push(transaction);

	var log_panel = $('#log-panel');
	var new_log_entry = $('<div></div>');
	new_log_entry.data('transaction', transaction);
	new_log_entry.append(player.getListingString());
	new_log_entry.append(" purchased by " + owner.shortName() + " for $" + player.price + " ");

	var cancel_icon = $("<img></img>");
	cancel_icon.addClass('icon');
	cancel_icon.attr('src', 'cross.png');
	cancel_icon.attr('alt', 'retract');

	// Instead of the above, could have used one call to attr with a hash of key/value pairs
	// cancel_icon.attr({class: 'icon', src: 'cross.png', alt: 'retract'});

	// Could have also provided this map of attributes to $ when we created the img element
	// var cancel_icon = $("<img></img>", {class: 'icon', src: 'cross.png', alt: 'retract'});

	new_log_entry.append(cancel_icon);

	log_panel.prepend(new_log_entry);

	// Fix up odd and even class attribute values for children of log_panel

	log_panel.children().each(function (i,e) {
		e = $(e);
		if (i%2 == 1) {
			e.addClass('odd');
			e.removeClass('even');
		} else {
			e.addClass('even');
			e.removeClass('odd');
		}
	});
};
