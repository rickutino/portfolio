Rails.application.routes.draw do
  # get 'home/index'
  get '/about', to: 'home#about'
  get '/skill', to: 'home#skill'
  get '/contact', to: 'home#contact'
  # get 'home/show'

  resources :home , only:[:index,:show]
  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
