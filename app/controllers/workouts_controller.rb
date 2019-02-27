class WorkoutsController < ApplicationController
  def index
    workouts = Workout.all
    render json: {workouts: workouts}, status: 200
  end

  def show
    begin
      workout = Workout.find(params[:id])
      render json: {workout: workout}, status: 200
    rescue ActiveRecord::RecordNotFound
      not_found
    rescue Exception
      server_error
    end
  end

  def create
    begin
      workout = Workout.create(workout_params)
      render json: {workout: workout}, status: 201
    rescue Exception
      server_error
    end
  end

  def update
    begin
      workout = Workout.find(params[:id])
      workout.update_attributes(workout_params)
      render json: {workout: workout}, status: 200
    rescue ActiveRecord::RecordNotFound
      not_found
    rescue Exception
      server_error
    end
  end

  def destroy
    Workout.destroy(params[:id])
    render json: {message: "Workout with the id #{params[:id]} was deleted."}, status: 200
  end

  private

  def not_found
    render json: {message: "no record found"}, status: 404
  end

  def server_error
    render json: {message: "internal server error"}, status: 500
  end

  def workout_params
    params.require(:workout).permit(:activity, :description, :duration)
  end
end
