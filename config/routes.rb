Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users do
    resources :jobs do
      resources :contacts
      resources :notes
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
