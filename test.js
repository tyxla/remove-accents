var tape = require('tape');
var removeAccents = require('./');

tape('remove accents from string', function(t) {
	var input = 'ÀÁÂÃÄÅẤẮÆÇḈÈÉÊËẾḖÌÍÎÏḮÐÑÒÓÔÕÖØỐṌṒÙÚÛÜÝßàáâãäåấắæçḉèéêëếḗìíîïḯñòóôõöøốṍṓùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋';
	var output = removeAccents(input);
	var expected = 'AAAAAAAAAECCEEEEEEIIIIIDNOOOOOOOOOUUUUYsaaaaaaaaaecceeeeeeiiiiinooooooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIi';

	t.same( output, expected );

	t.end();
});

tape('do not modify non-accented strings', function(t) {
	var input = 'AAAAAAAECEEEEIIIIDNOOOOOOUUUUYsaaaaaaaeceeeeiiiinoooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIiIJijJjKkLlLlLlLlllNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuAaAEaeOo';
	var output = removeAccents(input);

	t.same( output, input );

	t.end();
});