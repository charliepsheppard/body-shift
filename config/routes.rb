Rails.application.routes.draw do
  resources :users, only: [:new, :create, :index, :show]
  resources :meals
  resources :workouts
end