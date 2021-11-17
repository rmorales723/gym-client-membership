class MembersController < ApplicationController
     before_action :set_member, only: [:show, :update, :destroy]
    

    def index
        render json: current_gym.members, status: :ok
    end

    def show
        render json: @member, status: :ok
    end

    def create
        member = current_gym.members.create!(member_params)
        render json: member, status: :created
    end
    

    def update
       @member.update!(member_params)
       render json: @member, status: :accepted
    end
    
    
        def destroy
            if current_gym
                current_gym.members.find_by(id: params[:id]).destroy
                head :no_content
            end
    end

    private

    def member_params
        params.permit(:name, :number, :address, :img_url)
    end

    def set_member
         @member = Member.find_by(id: params[:id])
    end
end
