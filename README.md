# Automated Zone

Portfolio site for **Automated Zone** — the studio of Zheer and Armand. Showcases selected work, who we are, and how to get in touch.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
cp .env.example .env.local
# fill GMAIL_APP_PASSWORD (or RESEND_API_KEY / NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY)
npm run dev -- --port 4317 --hostname 127.0.0.1
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Contact form email

Submissions go to **automated.zoneaz@gmail.com**.

### Gmail App Password (recommended)

1. Open [Google Account → Security](https://myaccount.google.com/security) for `automated.zoneaz@gmail.com`
2. Turn on **2-Step Verification** if needed
3. Create an **App password** (Mail / Other)
4. Put it in `.env.local`:

```bash
CONTACT_TO_EMAIL=automated.zoneaz@gmail.com
GMAIL_USER=automated.zoneaz@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

5. Restart the server — the form posts to `/api/contact` and delivers mail with Reply-To set to the visitor.

### Alternatives

- **Resend:** set `RESEND_API_KEY` (optional `RESEND_FROM`)
- **Web3Forms:** set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from [web3forms.com](https://web3forms.com) (client-side)

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Contact

- Zheer — zheerkamal33@gmail.com
- Armand — armandsoran820@gmail.com
- Studio — automated.zoneaz@gmail.com
