import nodemailer from "nodemailer";
export async function POST(req: Request) {
  const { email, name, contact, address, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "drlaljikidneycarehospital@gmail.com",
        pass: "gmqe nvhm hadr cqdl",
      },
    });

    // Prepare the email HTML content
    const htmlContent = `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f7fc;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 20px;
                            background-color: #ffffff;
                            border-radius: 8px;
                            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            padding-bottom: 20px;
                        }
                        h1 {
                            color: #0056b3;
                            font-size: 24px;
                        }
                        .details {
                            margin-bottom: 20px;
                            font-size: 16px;
                        }
                        .details b {
                            color: #333;
                        }
                        .message {
                            margin-top: 20px;
                            padding: 10px;
                            background-color: #f9f9f9;
                            border: 1px solid #ddd;
                            border-radius: 4px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 40px;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Appointment Request Received</h1>
                        </div>
                        <div class="details">
                            <p><b>Patient Name:</b> ${name}</p>
                            <p><b>Email:</b> ${email}</p>
                            <p><b>Contact Number:</b> ${contact}</p>
                            <p><b>Address:</b> ${address}</p>
                        </div>
                        <div class="message">
                            <p><b>Message:</b></p>
                            <p>${message}</p>
                        </div>
                        <div class="footer">
                            <p>Thank you for reaching out to Dr. Lalji Kidney Care Hospital. Our team will get back to you shortly.</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

    // Send email with the structured content
    const info = await transporter.sendMail({
      from: "drlaljikidneycarehospital@gmail.com",
      to: "drlaljikidneycarehospital@gmail.com", // receiver email
      subject: "New Appointment Request",
      text: "", // Optional: you can add plain text content for email clients that don't support HTML
      html: htmlContent,
    });

    return Response.json({msg:"Email sent successfully!",id:info.messageId});
  } catch (error) {
    console.log("Error in sending email: ", error);
  }
}
