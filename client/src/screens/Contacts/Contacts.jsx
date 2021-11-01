export default function Contacts({ jobs }) {
  console.log(jobs)
  return (
    <div>
      {jobs.contacts?.map(contact => {
        return (
          <div>
            {contact.name}
          </div>
        )
      })}
    </div>
  )
}
