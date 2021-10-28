class MembersController < ApplicationController
    before_action :set_member, only: [:show, :update, :destroy]
    

    def index
        if params[:id]
            @member = Member.where(id: params[:id])
        else
            @member = Member.all
        end
            render json: @member, status: :ok
    end

    def show
        render json: @member, status: :ok
    end

    def create
        byebug
        member = set_member
        member = Member.create!(member_params)
        render json: member, status: :created

    end
    

    def update
       @member.update!(gym_params)
       render json: @member, status: :accepted
    end
    
    def destroy
        @member.destroy
        head :no_content, status: :ok
    end

    private

    def member_params
        params.require(:member).permit(:name, :number, :address)
    end

    def set_member
        @member = Member.find_by(id: params[:id])
    end
end
