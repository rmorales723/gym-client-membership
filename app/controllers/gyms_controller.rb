class GymsController < ApplicationController
    before_action :set_gym, only: [:show, :update, :destroy]

    def index
        gym = Gym.all
        render json: gym, status: :ok
    end

    def show
        render json: @gym, status: :ok
    end

    def create
        gym = Gym.create!(gym_params)
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
        params.require(:gym).permit(:name, :location, :number)
    end

    def set_gym
        @gym = gym_params.Gym.first
    end
end
