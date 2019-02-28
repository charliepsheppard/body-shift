class UsersController < ApplicationController

  def Index
  end

  def new
    @user = User.new
    render new_user_path
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      flash[:notice] = "You are logged in!"
      redirect_to '/'
    else
      flash[:error] = @user.errors.full_messages.join(', ')
      redirect_to new_user_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
