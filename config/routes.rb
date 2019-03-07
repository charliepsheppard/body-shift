Rails.application.routes.draw do
  resources :users, only: [:new, :create, :index, :show]
  resources :meals
  resources :workouts
  resource :session, only: [:new, :create, :destroy]
  root to: "root#index"
end
