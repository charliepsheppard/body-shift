class UsersController < ApplicationController

  # before_action :ensure_signed_in, only: [:show, :index]

  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
    render new_user_path
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      # flash[:notice] = "You are logged in!"
      redirect_to '/'
    else
      redirect_to new_user_path
    end

    def sign_out
      session.delete(:session_token)
      current_user.update_attribute(:session_token, nil)
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
