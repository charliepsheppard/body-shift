class MealsController < ApplicationController
  def index
    meals = Meal.all
    render json: {meals: meals}, status: 200
  end

  def show
    begin
      meal = Meal.find(params[:id])
      render json: {meal: meal}, status: 200
    rescue ActiveRecord::RecordNotFound
      not_found
    rescue Exception 
      server_error
    end
  end

  def create
    begin
      meal = Meal.create(meal_params)
      render json: {meal: meal}, status: 201
    rescue Exception
      server_error
    end
  end

  def update
    begin
      meal = Meal.find(params[:id])
      meal.update_attributes(meal_params)
      render json: {meal: meal}, status: 200
    rescue ActiveRecord::RecordNotFound
      not_found
    rescue Exception
      server_error
    end
  end

  def destroy
    Meal.destroy(params[:id])
    render json: {message: "Deleted meal with id #{params[:id]}"}, status: 200
  end

  private

  def not_found
    render json: {message: "No record found"}, status: 404
  end

  def server_error
    render json: {message: "Internal server error"}, status: 500
  end

  def meal_params
    params.require(:meal).permit(:name, :ingredients, :prep, :cooktime, :calories)
  end
end
