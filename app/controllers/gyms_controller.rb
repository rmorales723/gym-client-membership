class GymsController < ApplicationController
    before_action :current_gym, only: [:update, :destroy] 
    skip_before_action :authorized, only: :create

    
    def index
        gym = Gym.all
        render json: gym, status: :ok
    end

    def show
        if current_gym
           render json: current_gym, status: :ok
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end


    def create
        gym = Gym.create!(gym_params)
        session[:gym_id] = gym.id
        render json: gym, status: :created
    end
    

    def update
       @gym.update!(gym_params)
       render json: @gym, status: :ok
    end
    
    def destroy
        @gym.destroy
        head :no_content, status: :ok
    end

    private

    def gym_params
        params.permit(:name, :number, :address, :password, :username, :password_confirmation)
    end

    def set_gym
         @gym = Gym.find_by(id: params[:id])
    end
end
