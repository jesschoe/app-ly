class ContactsController < ApplicationController
  before_action :set_contact, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /contacts
  def index
    @jobs = Job.find(params[:job_id])
    @contacts = Contact.where(job_id: @job.id)

    render json: @contacts, status: :ok
  end

  # GET /contacts/1
  def show
    render json: @contact
  end

  # POST /contacts
  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      render json: @contact, status: :created
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contacts/1
  def update
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contacts/1
  def destroy
    @contact.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_contact
    @contact = Contact.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def contact_params
    params.require(:contact).permit(:name, :position, :email, :phone, :job_id)
  end
end
