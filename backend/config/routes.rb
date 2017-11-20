Rails.application.routes.draw do

  namespace :api do
    get 'tasks/create'
  end

  namespace :api do
    get 'tasks/destroy'
  end

  namespace :api do
    get 'tasks/index'
  end

  namespace :api do
    get 'tasks/edit'
  end

  namespace :api do
    get 'tasks/show'
  end

  resources :tasks, only: %i(create destroy index edit show)
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
