class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    @task.destroy
    render :show
  end

  def index
    @tasks = Task.where("owner_id = ?", "#{params[:owner_id]}")
    render :index
  end

  def edit
    @task = Task.find_by(id: params[:id])
    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @task = Task.find_by(id: params[:id])
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:title, :owner_id, :due_date, :parent_id)
  end

end
