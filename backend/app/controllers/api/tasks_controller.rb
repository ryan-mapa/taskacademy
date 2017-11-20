class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else

    end
  end

  def destroy
  end

  def index
  end

  def edit
  end

  def show
  end

private

  def task_params
    params.require(:task).permit(:title, :owner_id, :due_date, :parent_id)
  end

end
