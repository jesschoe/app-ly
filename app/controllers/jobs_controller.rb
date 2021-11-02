class JobsController < ApplicationController
  # before_action :set_job, only: %i[create]
  before_action :set_user_job, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /jobs
  def index
    @user = User.find(params[:user_id])
    @jobs = Job.where(user_id: @user.id)

    render json: @jobs, include: %i[notes contacts], status: :ok
  end

  # GET /jobs/1
  def show
    render json: @job, include: %i[notes contacts]
  end

  # POST /jobs
  def create
    @job = Job.new(job_params)
    @job.user = @current_user
    if @job.save
      render json: @job, status: :created
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jobs/1
  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_job
    @job = Job.find(params[:id])
  end

  def set_user_job
    @job = @current_user.jobs.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def job_params
    params.require(:job).permit(:company, :location, :position, :salary, :url, :applied, :interview, :offer,
                                :offer_salary, :user_id)
  end
end
