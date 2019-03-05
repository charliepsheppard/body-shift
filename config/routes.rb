Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  resources :users, only: [:new, :create, :index, :show]
  resources :meals
  resources :workouts
  resource :session, only: [:new, :create, :destroy]
end
