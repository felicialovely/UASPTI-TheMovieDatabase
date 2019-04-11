let api = {
	api_key: 'c4c556bd96dfe6ee3a83c72573a6dc46',
	language : 'en-US',
	base_url: 'https://api.themoviedb.org/3',
	endpoints: {
		now_playing: `https://api.themoviedb.org/3/movie/now_playing`,
		detail : `https://api.themoviedb.org/3/movie/`
	},
};

var app = angular.module("movieApp", []);