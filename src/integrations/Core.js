export async function SendEmail({ to, subject, body }) {
  // Example: Call backend API (Node.js + Nodemailer)
  const response = await fetch("http://localhost:5000/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, subject, body }),
  });

  if (!response.ok) {
    throw new Error("Email failed");
  }

  return response.json();
}
