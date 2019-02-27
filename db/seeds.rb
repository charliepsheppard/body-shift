# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

meals = Meal.create([
    {name: 'Roasted Carrots', ingredients: "Carrots, Olive oil, salt", prep: 10, cooktime: 20, calories: 50},
    {name: "Baked Salmon", ingredients: "Salmon, olive oil, salt, pepper, pesto", prep: 20, cooktime: 20, calories: 100},
    {name: "Israesli Salad", ingredients: "Cucumber, tomato, red onion, salt, pepper, olive oil", prep: 15, cooktime: 0, calories: 50},
    {name: "Rice and beans", ingredients: "Brown rice, black beans, salt, pepper, cayanne, garlic powder", prep: 5, cooktime: 30, calories: 200}
])

workouts = Workout.create([
    {activity: "3 mile run", description: "Fast tempo run to bring up heart rate and work on speed", duration: 20},
    {activity: "Bench press", description: "Hit max weight of 50 on each arm with dumbells", duration: 15},
    {activity: "20 minute erg", description: "Erged for 20 minutes consistantly at 18", duration: 20 },
    {activity: "Squats", description: "Max weight 100lbs", duration: 20}
])