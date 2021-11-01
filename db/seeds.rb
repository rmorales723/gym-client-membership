# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Gym.destroy_all
Member.destroy_all

Gym.create!(username: "rob1", password: "password", name: "Krank", number:"551-358-0500", address: "60 Colombus Ave", email: "mike@krank.com")
Gym.create!(username: "rob2", password: "password", name: "Base", number:"732-209-2376", address: "120 Rockaway Pkwy", email: "steve@base.com")
Gym.create!(username: "rob3", password: "password", name: "WBG", number:"201-495-1310", address: "369 Broadway Ave", email: "jay@wbg.com")

Gym.first.members.create!(name:"Sarah", number:"917-386-6955", address:"270 Marin")
Gym.first.members.create!(name:"Zak", number:"917-477-382", address:"1165 54 st")
Gym.first.members.create!(name:"Jed", number:"646-729-1135", address:"150 Montgomery")
Gym.first.members.create!(name:"Cindy", number:"917-836-7090", address:"10 Blake st")
Gym.first.members.create!(name:"Jill", number:"917-836-2944", address:"270 Marin")
Gym.second.members.create!(name:"Estela", number:"570-389-3285", address:"17 Prince st")
Gym.second.members.create!(name:"Dean", number:"646-732-0984", address:"2510 Bay ave")
Gym.second.members.create!(name:"Ricardo", number:"212-585-4301", address:"30 Park ave")
Gym.second.members.create!(name:"Jane", number:"732-675-8949", address:"1 Sunderland ave")
Gym.second.members.create!(name:"Kelsey", number:"732-786-0987", address:"120 Wegman Pkwy")
Gym.last.members.create!(name:"Rachel", number:"646-874-6826", address:"1000 Premiere Ave")
Gym.last.members.create!(name:"chris", number:"917-209-2376", address:"20 South St")
Gym.last.members.create!(name:"Bianca", number:"917495-1710", address:"20-10 125 Ave")
Gym.last.members.create!(name:"Marcella", number:"646-655-2393", address:"16 E. 35 St")
Gym.last.members.create!(name:"Bill", number:"718-272-1796", address:"58 Remsen Ave")
Gym.last.members.create!(name:"John", number:"718-647-2392", address:"210 Church Ave")
