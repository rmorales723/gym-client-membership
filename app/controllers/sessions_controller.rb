class SessionsController < ApplicationController
skip_before_action :authorized, only: :create

def create
        gym = Gym.find_by(username: params[:username])
    if  gym&.authenticate(params[:password])
        session[:gym_id] = gym.id
        render json: gym, status: :ok
    else
        render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
    end
end

def destroy
        session.delete :gym_id
        head :no_content
    end 

end