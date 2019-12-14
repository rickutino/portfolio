Rails.application.routes.draw do
  # get 'home/index'
  # get 'home/new'
  # get 'home/show'

  resources :home , only:[:index,:new,:show]
  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
