Linkbundler::Application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :bundles, only: [:index, :create]
    end
  end
end
