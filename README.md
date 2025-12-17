# Kulim Co-Work

A modern SaaS-style landing page and membership portal for a coworking space located in Kulim, Kedah. This project features a responsive design and an integrated AI Community Manager named "Kai" powered by Google's Gemini API.

## 🚀 Features

- **Modern UI/UX**: Built with React 18 and Tailwind CSS for a clean, responsive interface.
- **AI Community Manager ("Kai")**: A floating chatbot powered by **Google Gemini 2.5 Flash** that answers questions about pricing, amenities, and location in an ELI5 (Explain Like I'm 5) style.
- **Business Proposal Mode**: A built-in modal for investor relations, printable as a PDF.
- **SaaS-style Pricing**: Clear daily vs. monthly membership tiers.
- **Location-Aware**: Tailored branding for the Kulim, Kedah tech community.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google GenAI SDK (`@google/genai`)
- **Model**: Gemini 2.5 Flash

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kulim-co-work
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   The application requires a Google Gemini API Key.
   
   *Note: In this specific setup, the API key is expected to be available via `process.env.API_KEY` provided by the build environment or a `.env` file.*

   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_google_gemini_api_key_here
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 🤖 AI Configuration

The AI logic is located in `services/geminiService.ts`. It uses the `@google/genai` SDK.
- **Model**: `gemini-2.5-flash`
- **Persona**: "Kai", a friendly community manager.
- **System Instructions**: Configured to provide specific details about the Kulim location, amenities (Unifi 300Mbps, Surau), and operating hours.

## 📂 Project Structure

```
├── components/       # UI Components (Header, ChatBot, ProposalModal, etc.)
├── services/         # API integrations (Gemini Service)
├── App.tsx           # Main application layout and landing page sections
├── types.ts          # TypeScript interfaces
├── index.html        # Entry point
└── vite.config.ts    # Vite configuration
```

## 📄 License

MIT License.
