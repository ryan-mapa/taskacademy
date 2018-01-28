class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @task = current_user.tasks.find_by(id: params[:id])
    @task.destroy
    render :show
  end

  def index
    @tasks = current_user.tasks
    render :index
  end

  def update
    @task = current_user.tasks.find_by(id: params[:id])
    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @task = current_user.tasks.find_by(id: params[:id])
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:id, :title, :description, :owner_id, :due_date, :parent_id, :completed, :session_token)
  end

end
