# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Movie.create!([
#   { name: 'Movie 001' },{ name: 'Movie 002' },{ name: 'Movie 003' },{ name: 'Movie 004' }
# ])
# Movie.create!([
#   { name: 'Movie 001' },{ name: 'Movie 002' },{ name: 'Movie 003' },{ name: 'Movie 004' }
# ])

require 'net/http'
response = Net::HTTP.get(URI.parse("http://165.22.75.82/v1/movies"))
total_data = JSON.parse(response, object_class: OpenStruct)
movies_list = total_data.data.movies
movies_list.each do |movie|
	movie_obj = Movie.new(name: movie.name, 
		description: movie.description, director: movie.director, 
		year: movie.year, favorited_by_users: movie.favorited_by_users, genres: movie.genres.join(","), main_star: movie.main_star)
	movie_obj.thumb_url = movie.thumbnail
	if movie.thumbnail
		movie_obj.medium_url = movie.thumbnail.gsub("/thumb/","/medium/")
	end
	movie_obj.save
end