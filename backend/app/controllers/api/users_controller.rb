class Api::UsersController < ApplicationController
  def create_or_login
    @user = User.find_by(auth0_id: params[:user][:auth0_id])
    if @user
      render :show
    else
      @user = User.new(user_params)
      if @user.save
        render :show
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  def show
    @user = User.find_by(session_token: params[:id])
    if @user
      render :show
    else
      render json: ['User not found'], status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:auth0_id, :first_name, :last_name)
  end
end
