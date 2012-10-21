$(document).ready(function () {
//	alert('Init function');

	build_owner_dropdown();

	build_player_dropdown();


	// Randomly try to have some Owners buy some players for various prices.
	var num_transactions = 0;
	while (num_transactions < 10) {
		var random_owner = Owner.all[Math.floor(Math.random()*Owner.all.length)];
		var random_player = Player.all[Math.floor(Math.random()*Player.all.length)];
		var random_price = Math.floor(20 * Math.random()) + 1;
		if (random_owner.buyPlayer(random_player, random_price)) {
			num_transactions++;
		}
	}

	// Make sure Onwer.all[0] has at least 4 players
	while (Owner.all[0].roster.length < 4) {
		var random_player = Player.all[Math.floor(Math.random()*Player.all.length)];
		var random_price = Math.floor(5 * Math.random()) + 1;
		Owner.all[0].buyPlayer(random_player, random_price);
	}

	load_roster(Owner.all[0]);

	$('#entry-div form').on('submit', function (e) {
		e.preventDefault();
		e.stopPropagation();

//		var owner_select = $(this).find("select[name='owner']")[0];
//		var idx = owner_select.selectedIndex;
//		var owner = owner_select.options[idx].owner;

//		var player_select = $(this).find("select[name='player']")[0];
//		var player = player_select.options[player_select.selectedIndex].player;

		alert("that");
		owner = $(this).find("select[name='owner']").find(":selected").data('owner');
		player = $(this).find("select[name='player']").find(":selected").data('player');

		var price = parseInt($(this).find("#price-entry").val());

		if (!owner.buyPlayer(player, price)) {
			alert(owner.shortName() + " does not have enough money to buy " + player.getListingString());
		}

		load_roster();

	});

	$('#log-panel').on('click', "img[alt='retract']", null, function(e) {
		var transaction = $(this).parent().data('transaction');
		alert("Retracting transaction: " + transaction.owner.shortName() + " buying " + transaction.player.getListingString());
	});
	
});

var build_owner_dropdown = function () {
	var owner_dropdown = $("#entry-div > form > select[name='owner']");

	for (var i = 0; i<Owner.all.length; i++) {
		var next_owner = Owner.all[i];
		var owner_option = $("<option></option>");
		owner_option.append(next_owner.shortName())
		owner_dropdown.append(owner_option);

//		owner_option[0].owner = next_owner;
		owner_option.data('owner', next_owner);
	}
};

var build_player_dropdown = function() {

	var entry_div = $('#entry-div');
	var player_dropdown = entry_div.find("select[name='player']");

	player_dropdown.empty();
	$(Player.all).each(function (i,e) {
		if (e.available) {
			var player_option = $("<option></option").append(e.getListingString());
//			player_option[0].player = e;
			player_option.data('player', e);
			player_dropdown.append(player_option);
		}
	});
};

var load_roster = function(owner) {

	if (!owner) {
		owner = $('#roster-owner').data('owner');
	}

	$('#roster-owner').empty().append(owner.first + " " + owner.last).data('owner', owner);

 	// Empty out roster table body and rebuild rows from owner's roster
	var tbody = $('#roster-panel table tbody').empty();
	$(owner.roster).each(function (i) {
		var next_tr = $("<tr></tr>");
		next_tr.append("<td>"+(i+1)+"</td>");
		next_tr.append("<td>"+this.position+"</td>");
		next_tr.append("<td>"+this.last + ", " + this.first + "</td>");
		next_tr.append("<td>"+this.team.city+"</td>");
		next_tr.append("<td>"+this.team.bye+"</td>");
		next_tr.append("<td>"+this.price+"</td>");

		tbody.append(next_tr);
	});

	sort_roster($('#roster-panel table thead th.sortcol').index());
}

var sort_roster = function(sort_col) {
	$('#roster-panel table tbody tr').sort(function (a,b) {
		var a_val = $($(a).find('td')[sort_col]).text();
		var b_val = $($(b).find('td')[sort_col]).text();
		if (a_val < b_val) {
			return -1;
		} else if (a_val > b_val) {
			return 1;
		} 
		return 0;
	}).appendTo($('#roster-panel table tbody'));
}

