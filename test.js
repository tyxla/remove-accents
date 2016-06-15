var tape = require('tape');
var removeAccents = require('./');

tape('remove accents from string', function(t) {
	var input = 'ÀÁÂÃÄÅẤẮÆẦẰÇḈÈÉÊËẾḖỀḔÌÍÎÏḮÐÑÒÓÔÕÖØỐṌṒÙÚÛÜÝßàáâãäåấắæầằçḉèéêëếḗềḕìíîïḯñòóôõöøốṍṓùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋ǸǹỒồṐṑỪừẀẁỲỳȀȁȄȅȈȉȌȍȐȑȔȕ';
	var output = removeAccents(input);
	var expected = 'AAAAAAAAAEAACCEEEEEEEEIIIIIDNOOOOOOOOOUUUUYsaaaaaaaaaeaacceeeeeeeeiiiiinooooooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIiNnOoOoUuWwYyAaEeIiOoRrUu';

	t.same( output, expected );

	t.end();
});

tape('do not modify non-accented strings', function(t) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,:;~`!@#$%^&*()-_=+[]{}\'"|\\<>?/';
	var output = removeAccents(input);

	t.same( output, input );

	t.end();
});