class GymsController < ApplicationController
    before_action :set_gym, only: [:show, :update, :destroy]

    
    def index
        gym = Gym.all
        render json: gym, status: :ok
    end

    def show
         gym = Gym.find_by(params[:id])
        if current_gym
            login_user
            render json: current_gym
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end


    def create
        gym = Gym.create!(gym_params)
        # session[:gym_id] = gym_id
        render json: gym, status: :created
    end
    

    def update
       @gym.update!(gym_params)
       render json: @gym, status: :accepted
    end
    
    def destroy
        @gym.destroy
        head :no_content, status: :ok
    end

    private

    def gym_params
        params.permit(:name, :number, :address, :password)
    end

    def set_gym
       @gym = Gym.find(params[:id])
    end
end
