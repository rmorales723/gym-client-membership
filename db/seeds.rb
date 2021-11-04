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

Gym.first.members.create!(name:"Sarah", number:"917-386-6955", address:"270 Marin", img_url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.first.members.create!(name:"Zak", number:"917-477-382", address:"1165 54 st", img_url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.first.members.create!(name:"Jed", number:"646-729-1135", address:"150 Montgomery", img_url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.first.members.create!(name:"Cindy", number:"917-836-7090", address:"10 Blake st", img_url: "https://images.pexels.com/photos/4753988/pexels-photo-4753988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.first.members.create!(name:"Jill", number:"917-836-2944", address:"270 Marin", img_url: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.second.members.create!(name:"Estela", number:"570-389-3285", address:"17 Prince st", img_url: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.second.members.create!(name:"Dean", number:"646-732-0984", address:"2510 Bay ave", img_url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.second.members.create!(name:"Ricardo", number:"212-585-4301", address:"30 Park ave", img_url: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.second.members.create!(name:"Jane", number:"732-675-8949", address:"1 Sunderland ave", img_url: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.second.members.create!(name:"Kelsey", number:"732-786-0987", address:"120 Wegman Pkwy", img_url: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"Rachel", number:"646-874-6826", address:"1000 Premiere Ave", img_url: "https://images.pexels.com/photos/8297161/pexels-photo-8297161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"chris", number:"917-209-2376", address:"20 South St", img_url: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"Bianca", number:"917495-1710", address:"20-10 125 Ave", img_url: "https://images.pexels.com/photos/6944690/pexels-photo-6944690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"Marcella", number:"646-655-2393", address:"16 E. 35 St", img_url: "https://images.pexels.com/photos/3762775/pexels-photo-3762775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"Bill", number:"718-272-1796", address:"58 Remsen Ave", img_url: "https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Gym.last.members.create!(name:"John", number:"718-647-2392", address:"210 Church Ave", img_url: "https://images.pexels.com/photos/3775544/pexels-photo-3775544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
