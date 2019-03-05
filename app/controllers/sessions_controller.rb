class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    name = params[:user][:name]
    email = params[:user][:email]
    password = params[:user][:password]

    user = User.find_by_credentials(name, email, password)

    if user
      session[:user_id] = user.id
      flash[:notice] = "Hello, #{email}! You are now logged in."
      redirect_to '/users/new'
    else
      flash[:error] = "Email or password incorrect"
      redirect_to new_session_path
    end
  end
end
