class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error

  def render_unprocessable_entity_error(error)
    render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_error(error)
    render json: {error: "record not found"}, status: :not_found
  end

  def set_member
    @member = Member.find(params[:id])
  end

  def authorized
   render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :gym_id
  end

  def current_gym
    current_gym ||= session[:gym_id] && Gym.find_by_id(session[:gym_id])
  end
end


