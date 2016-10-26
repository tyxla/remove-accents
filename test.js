var tape = require('tape');
var removeAccents = require('./');

tape('remove accents from string', function(t) {
	var input = 'ÀÁÂÃÄÅẤẮÆẦẰÇḈÈÉÊËẾḖỀḔÌÍÎÏḮÐÑÒÓÔÕÖØỐṌṒÙÚÛÜÝßàáâãäåấắæầằçḉèéêëếḗềḕìíîïḯñòóôõöøốṍṓùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋ǸǹỒồṐṑỪừẀẁỲỳȀȁȄȅȈȉȌȍȐȑȔȕẲẴẶḜẳẵặḝC̆c̆ḪḫK̆k̆M̆m̆N̆n̆P̆p̆R̆r̆T̆t̆V̆v̆X̆x̆Y̆y̆ȂȆȊȎȃȇȋȏȒȓȖȗșț';
	var output = removeAccents(input);
	var expected = 'AAAAAAAAAEAACCEEEEEEEEIIIIIDNOOOOOOOOOUUUUYsaaaaaaaaaeaacceeeeeeeeiiiiinooooooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIiNnOoOoUuWwYyAaEeIiOoRrUuAAAEaaaeCcHhKkMmNnPpRrTtVvXxYyAEIOaeioRrUust';

	t.same( output, expected );

	t.end();
});

tape('do not modify non-accented strings', function(t) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,:;~`!@#$%^&*()-_=+[]{}\'"|\\<>?/';
	var output = removeAccents(input);

	t.same( output, input );

	t.end();
});
