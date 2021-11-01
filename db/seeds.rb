# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Job.destroy_all
Note.destroy_all
Contact.destroy_all

@tester = User.create!(
  username: 'tester',
  email: 'tester@test.com',
  password: 'tester'
)

@google = Job.create!(
  company: 'Google',
  location: 'Anywhere',
  position: 'Software Engineer III',
  salary: '$110,000+',
  url: 'https://www.google.com/search?q=software+engineering+jobs+in+new+york&oq=software+engineering+jobs+in+new+york&aqs=chrome..69i57j0i512l9.10935j1j7&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwi7rqbEp_PzAhWCFzQIHVImAsUQkd0GegQIDRAB#fpstate=tldetail&htivrt=jobs&htiq=software+engineering+jobs+in+new+york&htidocid=WHmdncWU6LNaEkvUAAAAAA%3D%3D&sxsrf=AOaemvKFFZq_-I9NKUcAsvDoaZRYjOMkkQ:1635637237758',
  # applied: ,
  # interview: ,
  # offer: ,
  # offer_salary: ,
  # priority: ,
  # column:
  user_id: @tester.id
)

@test = Job.create!(
  company: 'tester',
  location: 'remote',
  position: 'job',
  salary: '$15,000',
  url: 'www.www.com',
  user_id: @tester.id
)

Note.create!(
  content: 'this is a note',
  job_id: @google.id
)

Contact.create!(
  email: 'john@g.com',
  name: 'John',
  job_id: @google.id
)
