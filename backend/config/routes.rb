Rails.application.routes.draw do
  get 'tasks/create'

  get 'tasks/destroy'

  get 'tasks/index'

  get 'tasks/edit'

  get 'tasks/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
