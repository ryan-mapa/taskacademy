Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    post 'users/login', to: 'users#create_or_login'
    resources :users, only: %i(show)
    resources :tasks, only: %i(create destroy index update show)
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
