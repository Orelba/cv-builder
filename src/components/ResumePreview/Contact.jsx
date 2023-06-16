export default function Contact({ contact }) {
  const { addressFirstLine, addressSecondLine, phoneNumber, email } = contact
  const imgSize = 15

  return (
    <div className="contact">
      <div className="img-and-details">
        <img src="/location.svg" alt="Location" height={imgSize} width={imgSize} />
        <p>
          {addressFirstLine}
          <br />
          {addressSecondLine}
        </p>
      </div>
      <div className="img-and-details">
        <img src="/phone.png" alt="Phone" height={imgSize} width={imgSize} />
        <p>{phoneNumber}</p>
      </div>
      <div className="img-and-details">
        <img src="/email.svg" alt="Email" height={imgSize} width={imgSize} />
        <p>{email}</p>
      </div>
    </div>
  )
}
