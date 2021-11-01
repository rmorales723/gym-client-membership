Rails.application.routes.draw do
  
  
  resources :members
  resource :gym

  get "/me", to: "gyms#show"
  post "/signup", to: "gyms#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

# Routing logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
#get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
