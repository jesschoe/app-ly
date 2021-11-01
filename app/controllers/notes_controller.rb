class NotesController < ApplicationController
  before_action :set_note, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /notes
  def index
    @jobs = Job.find(params[:job_id])
    @notes = Note.where(job_id: @job.id)

    render json: @notes, status: :ok
  end

  # GET /notes/1
  def show
    render json: @note
  end

  # POST /notes
  def create
    @note = Note.new(note_params)

    if @note.save
      render json: @note, status: :created
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_note
    @note = Note.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def note_params
    params.require(:note).permit(:date, :comment)
  end
end
